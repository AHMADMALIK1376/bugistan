import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

// ============================================================
// STATE VARIABLES
// ============================================================
let score = 0;
let scoreBar: vscode.StatusBarItem;
let isActive = false;
let diagnosticListener: vscode.Disposable | undefined;
let editorChangeListener: vscode.Disposable | undefined;
let gameViewProvider: GameViewProvider | undefined;

// ============================================================
// GAME VIEW PROVIDER - Handles the sidebar webview
// ============================================================
class GameViewProvider implements vscode.WebviewViewProvider {

    private _view?: vscode.WebviewView;
    private currentErrorCount: number = 0;
    private currentWarningCount: number = 0;

    // ----------------------------------------------------------
    // Called when the webview panel is created
    // ----------------------------------------------------------
    resolveWebviewView(webviewView: vscode.WebviewView) {
        this._view = webviewView;

        const srcDir = vscode.Uri.file(path.join(__dirname, '..', 'src'));
        const bugsDir = vscode.Uri.file(path.join(__dirname, '..', 'src', 'bugs'));

        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [srcDir, bugsDir]
        };

        // Get HTML content
        let html = this.getGardenHTML();

        // Replace bug script paths with proper webview URIs
        const bugFiles = ['beetle.js', 'ladybug.js', 'fire-ant.js', 'spider.js', 'caterpillar.js', 'dragonfly.js', 'bug-registry.js'];
        for (const file of bugFiles) {
            const bugUri = vscode.Uri.joinPath(bugsDir, file);
            const webviewUri = webviewView.webview.asWebviewUri(bugUri);
            html = html.replace(`bugs/${file}`, webviewUri.toString());
        }

        webviewView.webview.html = html;

        // Listen for messages from the webview (game)
        webviewView.webview.onDidReceiveMessage(msg => {
            if (msg.command === 'bugKilled') {
                score += msg.points || 10;
                updateScoreBar();
            }
            if (msg.command === 'ready') {
                this.sendBugCounts(this.currentErrorCount, this.currentWarningCount);
            }
        });
    }

    // ----------------------------------------------------------
    // Send both error and warning counts to the webview
    // ----------------------------------------------------------
    sendBugCounts(errorCount: number, warningCount: number) {
        this.currentErrorCount = errorCount;
        this.currentWarningCount = warningCount;
        this._view?.webview.postMessage({
            command: 'setTargets',
            errors: errorCount,
            warnings: warningCount
        });
    }

    // ----------------------------------------------------------
    // Read garden.html from src folder
    // ----------------------------------------------------------
    private getGardenHTML(): string {
        try {
            const gardenPath = path.join(__dirname, '..', 'src', 'garden.html');
            return fs.readFileSync(gardenPath, 'utf-8');
        } catch (err) {
            console.error('Failed to load garden.html:', err);
            return this.getFallbackHTML();
        }
    }

    // ----------------------------------------------------------
    // Fallback if garden.html not found
    // ----------------------------------------------------------
    private getFallbackHTML(): string {
        return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:100%;height:100vh;overflow:hidden;background:#1e1e1e;display:flex;justify-content:center;align-items:center;color:#ffd700;font-family:Segoe UI,sans-serif;font-size:18px}
</style></head><body>
<div style="text-align:center">
    <div style="font-size:50px">🐛</div>
    <div>Bug Garden Loading...</div>
    <div style="font-size:12px;color:#aaa">Check src/garden.html and src/bugs/</div>
</div>
</body></html>`;
    }
}

// ============================================================
// EXTENSION ACTIVATION
// ============================================================
export function activate(context: vscode.ExtensionContext) {
    console.log('🐛 Bugistan activated!');

    scoreBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    scoreBar.command = 'bugistan.showScore';
    updateScoreBar();
    scoreBar.show();
    context.subscriptions.push(scoreBar);

    context.subscriptions.push(
        vscode.commands.registerCommand('bugistan.startBugHunt', () => startBugHunt(context)),
        vscode.commands.registerCommand('bugistan.stopBugHunt', () => stopBugHunt()),
        vscode.commands.registerCommand('bugistan.showScore', () => {
            vscode.window.showInformationMessage(`🏆 Score: ${score} 🩴`);
        }),
        vscode.commands.registerCommand('bugistan.resetScore', () => {
            score = 0;
            updateScoreBar();
            vscode.window.showInformationMessage('🔄 Score reset! 🩴');
        })
    );

    gameViewProvider = new GameViewProvider();
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider('bugistan.gameView', gameViewProvider, {
            webviewOptions: { retainContextWhenHidden: true }
        })
    );

    const config = vscode.workspace.getConfiguration('bugistan');
    if (config.get('enabled', true)) {
        startBugHunt(context);
    }
}

// ============================================================
// START BUG HUNT
// ============================================================
function startBugHunt(context: vscode.ExtensionContext) {
    if (isActive) {
        vscode.window.showInformationMessage('🐛 Bug hunt already active!');
        return;
    }
    isActive = true;
    vscode.window.showInformationMessage('🐛 Bug hunt started! 🔴 Errors + 🟡 Warnings! 🩴');

    diagnosticListener = vscode.languages.onDidChangeDiagnostics(event => {
        if (!isActive) return;
        const activeEditor = vscode.window.activeTextEditor;
        if (!activeEditor) return;
        for (const uri of event.uris) {
            if (uri.toString() === activeEditor.document.uri.toString()) {
                updateBugsForActiveFile(activeEditor);
                break;
            }
        }
    });
    context.subscriptions.push(diagnosticListener);

    editorChangeListener = vscode.window.onDidChangeActiveTextEditor(editor => {
        if (!isActive) return;
        if (editor) {
            updateBugsForActiveFile(editor);
        } else {
            gameViewProvider?.sendBugCounts(0, 0);
        }
    });
    context.subscriptions.push(editorChangeListener);

    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor) {
        updateBugsForActiveFile(activeEditor);
    }
}

// ============================================================
// UPDATE BUGS - Detects Errors + Warnings
// ============================================================
function updateBugsForActiveFile(editor: vscode.TextEditor) {
    if (!isActive || !gameViewProvider) return;

    const diagnostics = vscode.languages.getDiagnostics(editor.document.uri);

    const errorCount = diagnostics.filter(
        d => d.severity === vscode.DiagnosticSeverity.Error
    ).length;

    const warningCount = diagnostics.filter(
        d => d.severity === vscode.DiagnosticSeverity.Warning
    ).length;

    gameViewProvider.sendBugCounts(errorCount, warningCount);
}

// ============================================================
// STOP BUG HUNT
// ============================================================
function stopBugHunt() {
    if (!isActive) {
        vscode.window.showInformationMessage('🐛 No bug hunt active!');
        return;
    }
    isActive = false;

    if (diagnosticListener) { diagnosticListener.dispose(); diagnosticListener = undefined; }
    if (editorChangeListener) { editorChangeListener.dispose(); editorChangeListener = undefined; }
    if (gameViewProvider) { gameViewProvider.sendBugCounts(0, 0); }

    vscode.window.showInformationMessage(`🛑 Done! Final score: ${score} 🏆`);
}

// ============================================================
// STATUS BAR
// ============================================================
function updateScoreBar() {
    scoreBar.text = `🐛 ${score} 🩴`;
    scoreBar.tooltip = `Bugistan: ${score} bugs killed!`;
}

export function deactivate() {
    stopBugHunt();
}