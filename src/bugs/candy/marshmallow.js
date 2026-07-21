// ── MARSHMALLOW: fluffy toasted pillow, jiggling as it waddles ──────
class Marshmallow {
    static draw(ctx, s, bob, bug) {
        const white = '#fff8f0';
        const squish = 1 + Math.sin(bug.wobble * 1.8) * 0.06;
        // stubby legs
        for (let side = -1; side <= 1; side += 2) {
            const step = Math.sin(bug.legPhase * 1.1 + (side > 0 ? Math.PI : 0)) * s * 0.1;
            A.leg(ctx, side * s * 0.22, bob + s * 0.34,
                side * s * 0.36 + step * 0.3, bob + s * 0.58 + step, side * s * 0.1, s * 0.055, '#c9a074');
        }
        ctx.save();
        ctx.translate(0, bob);
        ctx.scale(squish, 1 / squish);
        // puffy rounded-square body
        const g = ctx.createLinearGradient(0, -s * 0.42, 0, s * 0.4);
        g.addColorStop(0, A.tone(white, 0.1));
        g.addColorStop(1, A.tone(white, -0.06));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.roundRect(-s * 0.42, -s * 0.42, s * 0.84, s * 0.82, s * 0.26);
        ctx.fill();
        // toasted golden marks
        ctx.fillStyle = 'rgba(200,140,90,0.4)';
        for (let i = 0; i < 4; i++) {
            const a = A.hash(i * 5.5) * Math.PI * 2;
            const d = s * 0.22;
            ctx.beginPath();
            ctx.ellipse(Math.cos(a) * d, Math.sin(a) * d * 0.7, s * 0.07, s * 0.045, a, 0, Math.PI * 2);
            ctx.fill();
        }
        // soft gloss
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.beginPath();
        ctx.ellipse(-s * 0.16, -s * 0.22, s * 0.14, s * 0.07, -0.3, 0, Math.PI * 2);
        ctx.fill();
        A.face(ctx, 0, -s * 0.02, s * 0.46, bug.wobble);
        ctx.restore();
    }
}
