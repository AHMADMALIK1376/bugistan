// ============================================================
// SPACE - flat vector cosmos
// Deep plum gradient, soft pastel nebulas, smooth star dots,
// one flat ringed planet and a mint moon. Quiet and minimal.
// ============================================================
function drawSpaceBackground() {
    const t = frame * 0.004;

    // ── deep plum space ─────────────────────────────────────
    const void_ = ctx.createLinearGradient(0, 0, W, H);
    void_.addColorStop(0, '#231c4e');
    void_.addColorStop(0.5, '#2e2464');
    void_.addColorStop(1, '#1e1846');
    ctx.fillStyle = void_;
    ctx.fillRect(0, 0, W, H);

    // ── soft pastel nebula blooms ───────────────────────────
    const blooms = [
        [W * 0.25, H * 0.72, '#c47ae0', 0.12],
        [W * 0.5, H * 0.5, '#6ab8d8', 0.09],
        [W * 0.12, H * 0.25, '#e08aa8', 0.08]
    ];
    for (const [nx, ny, nc, na] of blooms) {
        const g = ctx.createRadialGradient(nx, ny, 0, nx, ny, Math.max(W, H) * 0.32);
        g.addColorStop(0, A.tone(nc, 0.1, na));
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
    }

    // ── smooth star dots ────────────────────────────────────
    for (let i = 0; i < 70; i++) {
        const sx = A.hash(i * 1.7) * W;
        const sy = A.hash(i * 3.1) * H;
        const tw = 0.3 + 0.5 * Math.abs(Math.sin(t * 1.6 + i * 1.1));
        ctx.fillStyle = `rgba(238,238,252,${tw * 0.65})`;
        ctx.beginPath(); ctx.arc(sx, sy, 0.8 + A.hash(i * 4.9) * 1.3, 0, Math.PI * 2); ctx.fill();
    }
    for (let i = 0; i < 5; i++) {
        const sx = A.hash(i * 23.3) * W;
        const sy = A.hash(i * 27.1) * H;
        const tw = 0.4 + 0.6 * Math.abs(Math.sin(t * 2.2 + i * 2.1));
        A.glow(ctx, sx, sy, 9, '#e8e0ff', tw * 0.4);
        ctx.fillStyle = `rgba(250,246,255,${tw})`;
        ctx.beginPath(); ctx.arc(sx, sy, 1.7, 0, Math.PI * 2); ctx.fill();
    }

    // ── the flat ringed planet ──────────────────────────────
    const px = W * 0.75, py = H * 0.26, pr = Math.min(W, H) * 0.11 + 13;
    // ring behind
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(0.3);
    ctx.strokeStyle = 'rgba(240,200,140,0.55)';
    ctx.lineWidth = pr * 0.18;
    ctx.beginPath(); ctx.ellipse(0, 0, pr * 1.65, pr * 0.44, 0, Math.PI * 0.02, Math.PI * 0.98); ctx.stroke();
    ctx.restore();
    // flat body with two soft bands
    const pg = ctx.createLinearGradient(px, py - pr, px, py + pr);
    pg.addColorStop(0, '#f4b478');
    pg.addColorStop(1, '#d07a4e');
    ctx.fillStyle = pg;
    ctx.beginPath(); ctx.arc(px, py, pr, 0, Math.PI * 2); ctx.fill();
    ctx.save();
    ctx.beginPath(); ctx.arc(px, py, pr, 0, Math.PI * 2); ctx.clip();
    ctx.fillStyle = 'rgba(255,228,180,0.35)';
    ctx.beginPath(); ctx.ellipse(px, py - pr * 0.3, pr * 1.05, pr * 0.14, -0.06, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(170,90,60,0.3)';
    ctx.beginPath(); ctx.ellipse(px, py + pr * 0.3, pr * 1.05, pr * 0.13, -0.06, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
    // ring in front
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(0.3);
    ctx.strokeStyle = 'rgba(248,216,160,0.8)';
    ctx.lineWidth = pr * 0.18;
    ctx.beginPath(); ctx.ellipse(0, 0, pr * 1.65, pr * 0.44, 0, Math.PI * 1.02, Math.PI * 1.98); ctx.stroke();
    ctx.restore();

    // ── flat mint moon ──────────────────────────────────────
    const cmx = W * 0.16, cmy = H * 0.42, cmr = pr * 0.28;
    const cg = ctx.createLinearGradient(cmx, cmy - cmr, cmx, cmy + cmr);
    cg.addColorStop(0, '#b2e4ce');
    cg.addColorStop(1, '#6cb49a');
    ctx.fillStyle = cg;
    ctx.beginPath(); ctx.arc(cmx, cmy, cmr, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(74,138,116,0.45)';
    ctx.beginPath(); ctx.arc(cmx + cmr * 0.28, cmy + cmr * 0.12, cmr * 0.2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cmx - cmr * 0.24, cmy - cmr * 0.32, cmr * 0.15, 0, Math.PI * 2); ctx.fill();

    // ── one soft comet, occasionally ────────────────────────
    const cp = (t * 0.1) % 1.5;
    if (cp < 1) {
        const cx = W * (1.1 - cp * 1.3), cy = H * (0.1 + cp * 0.5);
        const tail = ctx.createLinearGradient(cx + 60, cy - 24, cx, cy);
        tail.addColorStop(0, 'rgba(255,220,170,0)');
        tail.addColorStop(1, 'rgba(255,240,210,0.7)');
        ctx.strokeStyle = tail;
        ctx.lineWidth = 2.6;
        ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(cx + 60, cy - 24); ctx.lineTo(cx, cy); ctx.stroke();
        ctx.fillStyle = '#fff8e4';
        ctx.beginPath(); ctx.arc(cx, cy, 2.6, 0, Math.PI * 2); ctx.fill();
        A.glow(ctx, cx, cy, 11, '#ffedb0', 0.5);
    }

    A.vig(ctx, W, H, 0.12);
}
