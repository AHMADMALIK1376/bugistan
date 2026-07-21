// ── CANDY CORN: banded triangle candy, hopping along ──────
class CandyCorn {
    static draw(ctx, s, bob, bug) {
        const yellow = '#ffe066', orange = '#ffa23c', white = '#fff8ec';
        const hop = Math.max(0, Math.sin(bug.legPhase * 1.1)) * s * 0.14;
        const y = bob - hop;
        // tiny running legs under the base
        for (let side = -1; side <= 1; side += 2) {
            const step = Math.sin(bug.legPhase * 1.3 + (side > 0 ? Math.PI : 0)) * s * 0.12;
            A.leg(ctx, side * s * 0.18, y + s * 0.34,
                side * s * 0.34 + step * 0.4, y + s * 0.6 + step, side * s * 0.12, s * 0.06, '#c97a1e');
        }
        function band(yc, hh, w0, w1, color) {
            const g = ctx.createLinearGradient(0, yc - hh, 0, yc + hh);
            g.addColorStop(0, A.tone(color, 0.18));
            g.addColorStop(1, A.tone(color, -0.1));
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.moveTo(-w0, yc - hh);
            ctx.lineTo(w0, yc - hh);
            ctx.lineTo(w1, yc + hh);
            ctx.lineTo(-w1, yc + hh);
            ctx.closePath();
            ctx.fill();
        }
        // three stacked bands tapering to a rounded tip
        band(y + s * 0.28, s * 0.14, s * 0.5, s * 0.56, yellow);
        band(y + s * 0.02, s * 0.13, s * 0.4, s * 0.5, orange);
        band(y - s * 0.26, s * 0.15, s * 0.06, s * 0.4, white);
        ctx.fillStyle = white;
        ctx.beginPath(); ctx.arc(0, y - s * 0.4, s * 0.07, 0, Math.PI * 2); ctx.fill();
        // gloss streak
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.beginPath(); ctx.ellipse(-s * 0.16, y - s * 0.05, s * 0.08, s * 0.32, -0.15, 0, Math.PI * 2); ctx.fill();
        // sugar glints
        for (let i = 0; i < 4; i++) {
            const a = A.hash(i * 7.3) * Math.PI * 2;
            const d = s * (0.15 + A.hash(i * 3.1) * 0.28);
            const gx = Math.cos(a) * d, gy = y + Math.sin(a) * d * 0.9;
            ctx.fillStyle = `rgba(255,255,255,${0.3 + 0.3 * Math.sin(bug.wobble * 3 + i)})`;
            ctx.beginPath(); ctx.arc(gx, gy, s * 0.025, 0, Math.PI * 2); ctx.fill();
        }
        // the crying face on the orange band
        A.face(ctx, 0, y + s * 0.02, s * 0.42, bug.wobble);
    }
}
