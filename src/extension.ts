import * as vscode from 'vscode';

let score = 0;
let scoreBar: vscode.StatusBarItem;
let isActive = false;
let diagnosticListener: vscode.Disposable | undefined;
let editorChangeListener: vscode.Disposable | undefined;
let gameViewProvider: GameViewProvider | undefined;

class GameViewProvider implements vscode.WebviewViewProvider {
    private _view?: vscode.WebviewView;
    private currentCount: number = 0;

    resolveWebviewView(webviewView: vscode.WebviewView) {
        this._view = webviewView;
        webviewView.webview.options = { enableScripts: true };
        webviewView.webview.html = this.getHTML();
        webviewView.webview.onDidReceiveMessage(msg => {
            if (msg.command === 'bugKilled') { score += 10; updateScoreBar(); }
            if (msg.command === 'ready') { this.sendBugCount(this.currentCount); }
        });
    }

    sendBugCount(count: number) {
        this.currentCount = count;
        this._view?.webview.postMessage({ command: 'setTarget', count: count });
    }

    private getHTML(): string {
        return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:100%;height:100vh;overflow:hidden;background:#87CEEB;font-family:Segoe UI,sans-serif;cursor:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><text y="32" font-size="32">🩴</text></svg>') 18 4, auto}
#area{display:flex;flex-direction:column;width:100%;height:100%}
#hdr{text-align:center;padding:5px;background:rgba(0,0,0,.5);color:#FFD700;font-size:11px;font-weight:bold;z-index:10;letter-spacing:1px}
#info{text-align:center;padding:3px;font-size:10px;color:#FFD700;background:rgba(0,0,0,.4);z-index:10}
canvas{flex-grow:1;display:block}
</style></head><body><div id="area"><div id="hdr">🌿 BUG GARDEN 🩴</div><div id="info">🐛 Bugs: <b id="bc">0</b> | 🩴 Killed: <b id="kc">0</b> | ⚡ Combo: <b id="combo">0</b></div><canvas id="c"></canvas></div>
<script>
const vscode=acquireVsCodeApi();vscode.postMessage({command:'ready'});
const canvas=document.getElementById('c'),ctx=canvas.getContext('2d'),bc=document.getElementById('bc'),kc=document.getElementById('kc'),comboEl=document.getElementById('combo');
let W,H,frame=0,mouse={x:0,y:0},bugs=[],killed=0,target=0,combo=0,comboTimer=0,particles=[];
function resize(){W=canvas.width=canvas.clientWidth;H=canvas.height=canvas.clientHeight}
resize();window.addEventListener('resize',resize);
canvas.addEventListener('mousemove',e=>{const r=canvas.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top});
let grass=[],flowers=[];
for(let i=0;i<100;i++)grass.push({x:Math.random()*2000,h:20+Math.random()*45,phase:Math.random()*Math.PI*2});
const fc=['#FF69B4','#FFD700','#FF9800','#FF5722','#E91E63','#9C27B0'];
for(let i=0;i<20;i++)flowers.push({x:Math.random()*W,y:40+Math.random()*(H-100),c:fc[i%6],phase:Math.random()*Math.PI*2,size:5+Math.random()*7});
let clouds=[];
for(let i=0;i<4;i++)clouds.push({x:Math.random()*W,y:20+Math.random()*60,s:0.5+Math.random(),vx:0.3+Math.random()*0.5});
const bt=[{n:'Beetle',c:'#6B4226',c2:'#8B6914',sz:12,sp:1.2},{n:'Ladybug',c:'#E01010',c2:'#FF2020',sz:10,sp:0.9},{n:'Ant',c:'#1A0A00',c2:'#2D1A00',sz:9,sp:1.5},{n:'Spider',c:'#2D1A0A',c2:'#3D2B1A',sz:14,sp:0.7},{n:'Caterpillar',c:'#388E3C',c2:'#4CAF50',sz:11,sp:0.5},{n:'Cockroach',c:'#5D3A1A',c2:'#7B5230',sz:13,sp:2}];
class Bug{constructor(t){this.type=t||Math.floor(Math.random()*bt.length);this.bug=bt[this.type];this.x=30+Math.random()*(W-60);this.y=60+Math.random()*(H-100);this.vx=(Math.random()-.5)*this.bug.sp;this.vy=(Math.random()-.5)*this.bug.sp;this.size=this.bug.sz+Math.random()*5;this.alive=true;this.lp=Math.random()*Math.PI*2;this.ap=Math.random()*Math.PI*2;this.fl=false;this.flt=0;this.wb=Math.random()*Math.PI*2}
update(){if(!this.alive)return;const dx=mouse.x-this.x,dy=mouse.y-this.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<70){this.fl=true;this.flt=20;this.vx-=dx/dist*0.4;this.vy-=dy/dist*0.4}if(this.flt>0){this.flt--;if(this.flt===0)this.fl=false}this.x+=this.vx;this.y+=this.vy;this.wb+=0.05;this.lp+=0.25*this.bug.sp;this.ap+=0.15;const spd=Math.sqrt(this.vx*this.vx+this.vy*this.vy);if(spd>this.bug.sp*2){this.vx*=0.9;this.vy*=0.9}if(this.x<10||this.x>W-10)this.vx*=-1;if(this.y<50||this.y>H-30)this.vy*=-1;this.x=Math.max(10,Math.min(W-10,this.x));this.y=Math.max(50,Math.min(H-30,this.y));if(Math.random()<0.005&&!this.fl){this.vx=(Math.random()-.5)*this.bug.sp;this.vy=(Math.random()-.5)*this.bug.sp}}
draw(ctx){if(!this.alive)return;ctx.save();ctx.translate(this.x,this.y);const s=this.size,fr=this.vx>=0;ctx.scale(fr?1:-1,1);ctx.fillStyle='rgba(0,0,0,0.2)';ctx.beginPath();ctx.ellipse(0,s*0.6,s*0.8,s*0.15,0,0,Math.PI*2);ctx.fill();const bob=Math.sin(this.wb)*1.5;switch(this.type){case 0:this.db(ctx,s,bob);break;case 1:this.dl(ctx,s,bob);break;case 2:this.da(ctx,s,bob);break;case 3:this.ds(ctx,s,bob);break;case 4:this.dc(ctx,s,bob);break;case 5:this.dr(ctx,s,bob);break}if(this.fl){ctx.strokeStyle='rgba(255,255,0,0.5)';ctx.lineWidth=1;ctx.beginPath();ctx.arc(0,bob,s*1.3,0,Math.PI*2);ctx.stroke()}ctx.restore()}
db(ctx,s,bob){ctx.fillStyle=this.bug.c;ctx.beginPath();ctx.ellipse(0,bob,s*1.1,s*0.7,0,0,Math.PI*2);ctx.fill();ctx.fillStyle=this.bug.c2;ctx.beginPath();ctx.ellipse(s*0.5,bob-s*0.15,s*0.45,s*0.3,0,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#000';ctx.lineWidth=0.5;ctx.beginPath();ctx.moveTo(0,bob-s*0.65);ctx.lineTo(0,bob+s*0.65);ctx.stroke();for(let i=-1;i<=1;i+=2)for(let j=-1;j<=1;j++){ctx.strokeStyle='#333';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(i*s*0.25,j*s*0.3+bob);ctx.lineTo(i*s*0.5+Math.sin(this.lp+j)*s*0.25,j*s*0.3+bob+s*0.5);ctx.stroke()}ctx.strokeStyle='#333';ctx.lineWidth=0.8;ctx.beginPath();ctx.moveTo(s*0.7,bob-s*0.2);ctx.lineTo(s*1.2+Math.sin(this.ap)*s*0.15,bob-s*0.55);ctx.stroke();ctx.strokeStyle='#333';ctx.beginPath();ctx.moveTo(s*0.7,bob-s*0.2);ctx.lineTo(s*1.2+Math.cos(this.ap)*s*0.15,bob-s*0.55);ctx.stroke();ctx.fillStyle='white';ctx.beginPath();ctx.arc(s*0.65,bob-s*0.25,s*0.12,0,Math.PI*2);ctx.fill();ctx.fillStyle='black';ctx.beginPath();ctx.arc(s*0.67,bob-s*0.25,s*0.05,0,Math.PI*2);ctx.fill()}
dl(ctx,s,bob){ctx.fillStyle=this.bug.c;ctx.beginPath();ctx.arc(0,bob,s*0.7,0,Math.PI*2);ctx.fill();ctx.fillStyle='#111';ctx.beginPath();ctx.arc(0,bob,s*0.3,0,Math.PI*2);ctx.fill();const spots=[{x:-0.25,y:-0.2},{x:0.3,y:-0.25},{x:-0.2,y:0.2},{x:0.35,y:0.15},{x:0,y:0}];for(let sp of spots){ctx.fillStyle='#000';ctx.beginPath();ctx.arc(sp.x*s*0.7,bob+sp.y*s*0.7,s*0.06,0,Math.PI*2);ctx.fill()}ctx.fillStyle='white';ctx.beginPath();ctx.arc(s*0.35,bob-s*0.15,s*0.08,0,Math.PI*2);ctx.fill();ctx.fillStyle='black';ctx.beginPath();ctx.arc(s*0.38,bob-s*0.15,s*0.03,0,Math.PI*2);ctx.fill()}
da(ctx,s,bob){ctx.fillStyle=this.bug.c;ctx.beginPath();ctx.ellipse(-s*0.4,bob,s*0.25,s*0.18,0,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.ellipse(0,bob,s*0.2,s*0.2,0,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.ellipse(s*0.4,bob,s*0.3,s*0.22,0,0,Math.PI*2);ctx.fill();for(let i=-1;i<=1;i+=2)for(let j=0;j<3;j++){ctx.strokeStyle='#111';ctx.lineWidth=0.8;ctx.beginPath();ctx.moveTo(-s*0.25+j*s*0.3,i*s*0.08+bob);ctx.lineTo(-s*0.25+j*s*0.3+Math.sin(this.lp+j)*s*0.2,i*s*0.45+bob);ctx.stroke()}ctx.strokeStyle='#111';ctx.lineWidth=0.6;ctx.beginPath();ctx.moveTo(s*0.6,bob);ctx.lineTo(s*1+Math.sin(this.ap)*s*0.12,bob-s*0.25);ctx.stroke()}
ds(ctx,s,bob){ctx.fillStyle=this.bug.c;ctx.beginPath();ctx.ellipse(0,bob,s*0.5,s*0.45,0,0,Math.PI*2);ctx.fill();ctx.fillStyle=this.bug.c2;ctx.beginPath();ctx.ellipse(0,bob+s*0.25,s*0.35,s*0.3,0,0,Math.PI*2);ctx.fill();for(let i=0;i<8;i++){const a=i*Math.PI/4+Math.PI/8;ctx.strokeStyle='#111';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(Math.cos(a)*s*0.35,Math.sin(a)*s*0.35+bob);ctx.lineTo(Math.cos(a)*s*0.8+Math.sin(this.lp+i)*s*0.1,Math.sin(a)*s*0.8+Math.sin(this.lp+i)*s*0.1+bob);ctx.stroke()}for(let ex=-0.1;ex<=0.1;ex+=0.2){ctx.fillStyle='#FF0000';ctx.beginPath();ctx.arc(ex,bob-s*0.15,s*0.06,0,Math.PI*2);ctx.fill()}}
dc(ctx,s,bob){for(let i=0;i<5;i++){ctx.fillStyle=i%2===0?this.bug.c:this.bug.c2;ctx.beginPath();ctx.arc(-s*0.7+i*s*0.3,bob+Math.sin(this.lp+i)*s*0.12,s*0.18,0,Math.PI*2);ctx.fill()}ctx.fillStyle='#66BB6A';ctx.beginPath();ctx.arc(s*0.6,bob+Math.sin(this.lp+5)*s*0.12,s*0.2,0,Math.PI*2);ctx.fill();ctx.fillStyle='white';ctx.beginPath();ctx.arc(s*0.68,bob+Math.sin(this.lp+5)*s*0.12-s*0.07,s*0.05,0,Math.PI*2);ctx.fill()}
dr(ctx,s,bob){ctx.fillStyle=this.bug.c;ctx.beginPath();ctx.ellipse(0,bob,s*1.3,s*0.45,0,0,Math.PI*2);ctx.fill();ctx.fillStyle=this.bug.c2;ctx.beginPath();ctx.ellipse(s*0.25,bob,s*0.35,s*0.3,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(100,60,20,0.4)';ctx.beginPath();ctx.ellipse(0,bob-s*0.1,s*0.9,s*0.35,-0.2,0,Math.PI*2);ctx.fill();for(let i=-1;i<=1;i+=2)for(let j=0;j<3;j++){ctx.strokeStyle='#3D1A00';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(-s*0.5+j*s*0.4,i*s*0.15+bob);ctx.lineTo(-s*0.5+j*s*0.4+Math.sin(this.lp+j)*s*0.25,i*s*0.5+bob);ctx.stroke()}ctx.strokeStyle='#3D1A00';ctx.lineWidth=0.7;ctx.beginPath();ctx.moveTo(s*1,bob);ctx.lineTo(s*1.4+Math.sin(this.ap)*s*0.15,bob-s*0.25);ctx.stroke()}
squish(){if(!this.alive)return;this.alive=false;for(let i=0;i<12;i++){particles.push({x:this.x,y:this.y,vx:(Math.random()-.5)*6,vy:(Math.random()-.5)*4-2,life:0.8,color:'#4CAF50',size:2+Math.random()*3,isSplat:i<3})}killed++;kc.textContent=killed;combo++;comboTimer=40;comboEl.textContent=combo>1?combo+'x':'0';setTimeout(()=>{bugs=bugs.filter(b=>b!==this);while(bugs.length<target)bugs.push(new Bug());bc.textContent=bugs.length},400);vscode.postMessage({command:'bugKilled'})}
contains(px,py){return Math.abs(px-this.x)<this.size*1.3&&Math.abs(py-this.y)<this.size*1.3}}

function drawEnv(){const sky=ctx.createLinearGradient(0,0,0,H);sky.addColorStop(0,'#4A90D9');sky.addColorStop(.5,'#87CEEB');sky.addColorStop(.8,'#B0E57C');sky.addColorStop(1,'#7BC043');ctx.fillStyle=sky;ctx.fillRect(0,0,W,H);ctx.fillStyle='#FFF8DC';ctx.beginPath();ctx.arc(W*.85,45,30,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(255,248,220,0.2)';ctx.beginPath();ctx.arc(W*.85,45,48,0,Math.PI*2);ctx.fill();for(let cl of clouds){cl.x+=cl.vx;if(cl.x>W+80)cl.x=-80;ctx.fillStyle='rgba(255,255,255,0.8)';dCloud(cl.x,cl.y,cl.s)}ctx.fillStyle='#8BC34A';ctx.fillRect(0,H-55,W,55);const gGrad=ctx.createLinearGradient(0,H-55,0,H);gGrad.addColorStop(0,'#6DAF3A');gGrad.addColorStop(.5,'#5A9A2E');gGrad.addColorStop(1,'#3D6B1C');ctx.fillStyle=gGrad;ctx.fillRect(0,H-30,W,30);ctx.fillStyle='#C4A46C';ctx.beginPath();ctx.ellipse(W*.25,H-2,45,6,0,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.ellipse(W*.7,H-2,55,7,0,0,Math.PI*2);ctx.fill();for(let g of grass){g.sway=Math.sin(frame*.02+g.phase)*g.h*.3;const gGrad=ctx.createLinearGradient(g.x,H-52,g.x,H-52-g.h);gGrad.addColorStop(0,'#3D7A1C');gGrad.addColorStop(.5,'#5AAD2E');gGrad.addColorStop(1,'#7CDD4A');ctx.strokeStyle=gGrad;ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(g.x,H-52);ctx.lineTo(g.x+g.sway,H-52-g.h);ctx.stroke()}for(let f of flowers){const sw=Math.sin(frame*.015+f.phase)*2;for(let p=0;p<5;p++){const a=p*Math.PI*2/5;ctx.fillStyle=f.c;ctx.beginPath();ctx.ellipse(f.x+sw+Math.cos(a)*f.size*.5,f.y+Math.sin(a)*f.size*.5,f.size*.35,f.size*.2,a,0,Math.PI*2);ctx.fill()}ctx.fillStyle='#FFD700';ctx.beginPath();ctx.arc(f.x+sw,f.y,f.size*.25,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#3D6B1C';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(f.x+sw,f.y+f.size*.4);ctx.lineTo(f.x+sw,H-50);ctx.stroke()}}
function dCloud(x,y,s){ctx.beginPath();ctx.arc(x,y,s*25,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(x+s*20,y-s*8,s*18,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(x-s*18,y-s*5,s*15,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(x+s*35,y,s*20,0,Math.PI*2);ctx.fill()}
function upP(){for(let p of particles){p.x+=p.vx;p.y+=p.vy;if(!p.isSplat)p.vy+=0.08;p.life-=0.025}particles=particles.filter(p=>p.life>0)}
function dp(){for(let p of particles){ctx.save();ctx.globalAlpha=p.life;if(p.isSplat){ctx.fillStyle='#4CAF50';ctx.beginPath();ctx.ellipse(p.x,p.y,p.size*2,p.size*.5,0,0,Math.PI*2);ctx.fill()}else{ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill()}ctx.restore()}}
function setTarget(t){target=t;bugs=bugs.filter(b=>b.alive);while(bugs.length<target)bugs.push(new Bug());while(bugs.length>target){const b=bugs.pop();if(b)b.alive=false}bc.textContent=bugs.length}
function gameLoop(){resize();frame++;if(comboTimer>0){comboTimer--;if(comboTimer===0){combo=0;comboEl.textContent='0'}}upP();ctx.clearRect(0,0,W,H);drawEnv();for(let b of bugs){b.update();b.draw(ctx)}dp();requestAnimationFrame(gameLoop)}
canvas.addEventListener('click',e=>{const r=canvas.getBoundingClientRect();const mx=e.clientX-r.left,my=e.clientY-r.top;for(let i=bugs.length-1;i>=0;i--){if(bugs[i].alive&&bugs[i].contains(mx,my)){bugs[i].squish();break}}});
window.addEventListener('message',e=>{if(e.data.command==='setTarget')setTarget(e.data.count)});
gameLoop();
</script></body></html>`;
    }
}

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
            vscode.window.showInformationMessage(`🏆 Bugistan Score: ${score} bugs killed! 🩴`);
        }),
        vscode.commands.registerCommand('bugistan.resetScore', () => {
            score = 0;
            updateScoreBar();
            vscode.window.showInformationMessage('🔄 Score reset! Fresh chappal! 🩴');
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

function startBugHunt(context: vscode.ExtensionContext) {
    if (isActive) {
        vscode.window.showInformationMessage('🐛 Bug hunt already active!');
        return;
    }

    isActive = true;
    vscode.window.showInformationMessage('🐛 Bug hunt started! Watch the garden! 🩴');

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
            gameViewProvider?.sendBugCount(0);
        }
    });
    context.subscriptions.push(editorChangeListener);

    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor) {
        updateBugsForActiveFile(activeEditor);
    }
}

function updateBugsForActiveFile(editor: vscode.TextEditor) {
    if (!isActive || !gameViewProvider) return;
    const diagnostics = vscode.languages.getDiagnostics(editor.document.uri);
    const errorCount = diagnostics.filter(d => d.severity === vscode.DiagnosticSeverity.Error).length;
    gameViewProvider.sendBugCount(errorCount);
}

function stopBugHunt() {
    if (!isActive) {
        vscode.window.showInformationMessage('🐛 No bug hunt active!');
        return;
    }

    isActive = false;

    if (diagnosticListener) {
        diagnosticListener.dispose();
        diagnosticListener = undefined;
    }
    if (editorChangeListener) {
        editorChangeListener.dispose();
        editorChangeListener = undefined;
    }
    if (gameViewProvider) {
        gameViewProvider.sendBugCount(0);
    }

    vscode.window.showInformationMessage(`🛑 Bug hunt stopped! Final score: ${score} bugs killed! 🏆`);
}

function updateScoreBar() {
    scoreBar.text = `🐛 ${score} 🩴`;
    scoreBar.tooltip = `Bugistan: ${score} bugs killed! Click for details`;
}

export function deactivate() {
    stopBugHunt();
    console.log('🐛 Bugistan deactivated. Bugs are safe... for now.');
}