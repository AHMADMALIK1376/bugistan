// ── SPAM BOT: CRT-monitor head full of static and tears ──────
class SpamBot {
    static draw(ctx, s, bob, bug) {
        const body = '#ffa03c';
        // scuttling legs
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 2; i++) {
                const step = Math.sin(bug.legPhase * 1.2 + i * 1.8 + (side > 0 ? Math.PI : 0)) * s * 0.12;
                A.leg(ctx, side * s * 0.22, bob + s * 0.34 + i * s * 0.08,
                    side * s * 0.5 + step * 0.3, bob + s * 0.66 + step, side * s * 0.12, s * 0.06, '#a86018');
            }
        }
        // small base unit
        const bg = ctx.createLinearGradient(0, bob + s * 0.18, 0, bob + s * 0.5);
        bg.addColorStop(0, A.tone(body, 0.14));
        bg.addColorStop(1, A.tone(body, -0.16));
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.roundRect(-s * 0.3, bob + s * 0.18, s * 0.6, s * 0.34, s * 0.1);
        ctx.fill();
        // the CRT head: rounded box with a dark screen
        const hg = ctx.createLinearGradient(0, bob - s * 0.62, 0, bob + s * 0.14);
        hg.addColorStop(0, A.tone(body, 0.26));
        hg.addColorStop(1, body);
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.roundRect(-s * 0.48, bob - s * 0.62, s * 0.96, s * 0.76, s * 0.14);
        ctx.fill();
        // screen
        ctx.fillStyle = '#d8f2e8';
        ctx.beginPath();
        ctx.roundRect(-s * 0.38, bob - s * 0.52, s * 0.76, s * 0.56, s * 0.09);
        ctx.fill();
        // static interference bands rolling down the screen
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(-s * 0.38, bob - s * 0.52, s * 0.76, s * 0.56, s * 0.09);
        ctx.clip();
        for (let k = 0; k < 3; k++) {
            const sy = bob - s * 0.52 + ((bug.wobble * 12 + k * s * 0.24) % (s * 0.62));
            ctx.fillStyle = 'rgba(120,180,160,0.25)';
            ctx.fillRect(-s * 0.38, sy, s * 0.76, s * 0.04);
        }
        // the crying face broadcast on screen
        A.face(ctx, 0, bob - s * 0.28, s * 0.5, bug.wobble);
        ctx.restore();
        // screen gloss
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.beginPath();
        ctx.ellipse(-s * 0.2, bob - s * 0.44, s * 0.13, s * 0.05, -0.3, 0, Math.PI * 2);
        ctx.fill();
        // two dial knobs
        for (const kx of [-0.2, 0.2]) {
            ctx.fillStyle = '#a86018';
            ctx.beginPath(); ctx.arc(kx * s, bob + s * 0.35, s * 0.045, 0, Math.PI * 2); ctx.fill();
        }
        // aerial
        ctx.strokeStyle = '#a86018';
        ctx.lineWidth = s * 0.035;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(s * 0.24, bob - s * 0.62);
        ctx.lineTo(s * 0.42, bob - s * 0.9);
        ctx.stroke();
        ctx.fillStyle = '#3ce0e0';
        ctx.beginPath(); ctx.arc(s * 0.42, bob - s * 0.92, s * 0.04, 0, Math.PI * 2); ctx.fill();
    }
}
