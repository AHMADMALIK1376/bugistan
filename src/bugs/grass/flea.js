// ── FLEA: small arched coral jumper, folded spring hind legs ──────
class Flea {
    static draw(ctx, s, bob, bug) {
        const gait = bug.legPhase;
        const idle = Math.sin(gait * 0.3);
        // folded-spring hind leg, same family as the grasshopper's —
        // a real jumping leg stays coiled, it doesn't swing while walking
        for (let side = -1; side <= 1; side += 2) {
            ctx.save();
            ctx.translate(side * s * 0.18, s * 0.3);
            ctx.rotate(side * (0.85 + idle * 0.02));
            const fg = ctx.createLinearGradient(0, -s * 0.1, 0, s * 0.1);
            fg.addColorStop(0, A.tone('#EF7060', 0.18)); fg.addColorStop(1, A.tone('#EF7060', -0.14));
            ctx.fillStyle = fg;
            ctx.beginPath();
            ctx.moveTo(s * 0.02, -s * 0.1);
            ctx.quadraticCurveTo(s * 0.28, -s * 0.13, s * 0.5, -s * 0.03);
            ctx.quadraticCurveTo(s * 0.56, 0, s * 0.5, s * 0.03);
            ctx.quadraticCurveTo(s * 0.28, s * 0.13, s * 0.02, s * 0.1);
            ctx.closePath(); ctx.fill();
            A.foot(ctx, s * 0.5, 0, s * 0.032, '#C24A38');
            const tx = s * 0.26 + idle * s * 0.01, ty = s * 0.38;
            ctx.strokeStyle = '#C24A38'; ctx.lineCap = 'round'; ctx.lineWidth = s * 0.032;
            ctx.beginPath(); ctx.moveTo(s * 0.5, 0); ctx.quadraticCurveTo(s * 0.42, s * 0.2, tx, ty); ctx.stroke();
            ctx.strokeStyle = '#221C18'; ctx.lineWidth = s * 0.02; ctx.lineCap = 'round';
            ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(tx - s * 0.035, ty + s * 0.045); ctx.stroke();
            ctx.restore();
        }
        A.walk(ctx, s, gait, [{ ay: -0.12, out: 0.5, mid: 0.2, hip: 0.13 }, { ay: 0.04, out: 0.56, mid: 0.22, hip: 0.14 }], '#C24A38', s * 0.045);
        // arched, laterally-flattened body (taller than wide)
        A.body(ctx, 0, s * 0.06, s * 0.32, s * 0.52, 0.05, '#EF7060');
        ctx.strokeStyle = 'rgba(60,26,14,0.4)'; ctx.lineWidth = s * 0.03;
        for (let k = 0; k < 3; k++) { ctx.beginPath(); ctx.arc(0, -s * 0.08 + k * s * 0.2, s * 0.28, Math.PI * 0.2, Math.PI * 0.8); ctx.stroke(); }
        A.body(ctx, 0, -s * 0.44, s * 0.17, s * 0.19, 0, '#F79076');
        A.eyes(ctx, 0, -s * 0.46, s * 0.1, s * 0.08, '#221C18');
    }
}
