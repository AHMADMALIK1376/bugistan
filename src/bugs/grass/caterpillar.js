// ── CATERPILLAR: plump green inch-crawler, pale side stripe ──────
class Caterpillar {
    static draw(ctx, s, bob, bug) {
        const gait = bug.legPhase;
        const n = 7, ys = []; let acc = -s * 0.72;
        for (let i = 0; i < n; i++) { acc += s * (0.26 + 0.05 * Math.sin(gait - i * 0.9)); ys.push(acc); }
        for (let i = 1; i < n; i++) for (let side = -1; side <= 1; side += 2) {
            const sw = Math.sin(gait - i * 0.9) * s * 0.03;
            ctx.strokeStyle = '#3C9E52'; ctx.lineCap = 'round'; ctx.lineWidth = s * 0.07;
            ctx.beginPath(); ctx.moveTo(side * s * 0.15, ys[i] + s * 0.06); ctx.lineTo(side * s * 0.25, ys[i] + s * 0.2 + sw); ctx.stroke();
            A.foot(ctx, side * s * 0.25, ys[i] + s * 0.2 + sw, s * 0.04, '#221C18');
        }
        for (let i = n - 1; i >= 0; i--) {
            const r = s * (0.27 - Math.abs(i - 2) * 0.012), sway = Math.sin(gait * 0.5 + i * 0.5) * s * 0.04;
            A.body(ctx, sway, ys[i], r * 1.06, r, 0, i % 2 ? '#5FC46B' : '#83D98C');
        }
        ctx.strokeStyle = 'rgba(240,246,210,0.4)'; ctx.lineWidth = s * 0.05; ctx.lineCap = 'round'; ctx.beginPath();
        for (let i = 0; i < n; i++) { const sway = Math.sin(gait * 0.5 + i * 0.5) * s * 0.04; i ? ctx.lineTo(sway - s * 0.16, ys[i]) : ctx.moveTo(sway - s * 0.16, ys[i]); }
        ctx.stroke();
        A.body(ctx, 0, ys[0] - s * 0.24, s * 0.25, s * 0.23, 0, '#83D98C');
        A.eyes(ctx, 0, ys[0] - s * 0.26, s * 0.13, s * 0.1, '#221C18');
        A.antenna(ctx, s, -s * 0.1, ys[0] - s * 0.42, -s * 0.2, ys[0] - s * 0.66, '#3C9E52', false);
        A.antenna(ctx, s, s * 0.1, ys[0] - s * 0.42, s * 0.2, ys[0] - s * 0.66, '#3C9E52', false);
    }
}
