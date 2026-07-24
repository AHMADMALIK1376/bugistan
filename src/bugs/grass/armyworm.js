// ── ARMYWORM: tan striped marcher, dark dorsal band ──────
class Armyworm {
    static draw(ctx, s, bob, bug) {
        const gait = bug.legPhase;
        const n = 7, ys = []; let acc = -s * 0.66;
        for (let i = 0; i < n; i++) { acc += s * (0.24 + 0.045 * Math.sin(gait - i * 1.0)); ys.push(acc); }
        for (let i = 1; i < n; i++) for (let side = -1; side <= 1; side += 2) {
            const sw = Math.sin(gait - i * 1.0) * s * 0.03;
            ctx.strokeStyle = '#A5813E'; ctx.lineCap = 'round'; ctx.lineWidth = s * 0.06;
            ctx.beginPath(); ctx.moveTo(side * s * 0.13, ys[i] + s * 0.05); ctx.lineTo(side * s * 0.22, ys[i] + s * 0.18 + sw); ctx.stroke();
            A.foot(ctx, side * s * 0.22, ys[i] + s * 0.18 + sw, s * 0.035, '#221C18');
        }
        for (let i = n - 1; i >= 0; i--) {
            const r = s * 0.22, sway = Math.sin(gait * 0.5 + i * 0.55) * s * 0.035;
            A.body(ctx, sway, ys[i], r * 1.04, r, 0, i % 2 ? '#CBA560' : '#DEBE7C');
        }
        const bands = [{ o: 0, c: 'rgba(50,38,20,0.55)', w: 0.08 }, { o: -0.14, c: 'rgba(244,236,214,0.5)', w: 0.045 }, { o: 0.14, c: 'rgba(244,236,214,0.5)', w: 0.045 }];
        for (const bd of bands) {
            ctx.strokeStyle = bd.c; ctx.lineWidth = s * bd.w; ctx.lineCap = 'round'; ctx.beginPath();
            for (let i = 0; i < n; i++) { const sway = Math.sin(gait * 0.5 + i * 0.55) * s * 0.035; i ? ctx.lineTo(sway + bd.o * s, ys[i]) : ctx.moveTo(sway + bd.o * s, ys[i]); }
            ctx.stroke();
        }
        A.body(ctx, 0, ys[0] - s * 0.22, s * 0.22, s * 0.2, 0, '#DEBE7C');
        ctx.strokeStyle = 'rgba(24,18,10,0.35)'; ctx.lineWidth = s * 0.012;
        ctx.beginPath(); ctx.arc(0, ys[0] - s * 0.22, s * 0.15, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke();
        A.eyes(ctx, 0, ys[0] - s * 0.24, s * 0.12, s * 0.09, '#221C18');
    }
}
