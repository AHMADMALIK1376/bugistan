// ============================================================
// MUD - flat vector mud flat
// Soft cocoa bands, smooth line-less mounds, rounded pastel
// puddles and gentle floating specks. Minimal and calm.
// ============================================================
function drawMudBackground() {
    const t = frame * 0.008;

    // ── smooth cocoa gradient ───────────────────────────────
    const ground = ctx.createLinearGradient(0, 0, 0, H);
    ground.addColorStop(0, '#8a6a4e');
    ground.addColorStop(0.55, '#75563c');
    ground.addColorStop(1, '#5e4430');
    ctx.fillStyle = ground;
    ctx.fillRect(0, 0, W, H);

    // ── big soft rounded mounds, alternating tone ───────────
    for (let i = 0; i < 6; i++) {
        const mx = A.hash(i * 3.1) * W, my = A.hash(i * 7.7) * H;
        const mr = 60 + A.hash(i * 5.3) * 80;
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, mr);
        g.addColorStop(0, i % 2 === 0 ? 'rgba(158,122,88,0.35)' : 'rgba(74,52,36,0.28)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.ellipse(mx, my, mr, mr * 0.55, 0, 0, Math.PI * 2); ctx.fill();
    }

    // ── smooth pastel-blue puddles, no outlines ─────────────
    for (let i = 0; i < 3; i++) {
        const px = W * (0.18 + i * 0.32), py = H * (0.24 + A.hash(i * 9.1) * 0.55);
        const prx = 42 + A.hash(i * 6.2) * 26, pry = prx * 0.38;
        // darker wet ground halo, soft
        const halo = ctx.createRadialGradient(px, py, prx * 0.5, px, py, prx * 1.5);
        halo.addColorStop(0, 'rgba(52,36,24,0.35)');
        halo.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = halo;
        ctx.beginPath(); ctx.ellipse(px, py, prx * 1.5, pry * 1.6, 0, 0, Math.PI * 2); ctx.fill();
        // flat water
        const wg = ctx.createLinearGradient(px, py - pry, px, py + pry);
        wg.addColorStop(0, '#a8d8e8');
        wg.addColorStop(1, '#6aaece');
        ctx.fillStyle = wg;
        ctx.beginPath(); ctx.ellipse(px, py, prx, pry, 0, 0, Math.PI * 2); ctx.fill();
        // one soft shine + drifting ripple
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.beginPath(); ctx.ellipse(px - prx * 0.3, py - pry * 0.3, prx * 0.24, pry * 0.26, -0.3, 0, Math.PI * 2); ctx.fill();
        const rp = (t * 0.4 + i * 0.4) % 1;
        ctx.strokeStyle = `rgba(255,255,255,${0.28 * (1 - rp)})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.ellipse(px, py, prx * rp, pry * rp, 0, 0, Math.PI * 2); ctx.stroke();
    }

    // ── smooth rounded pebbles, flat two-tone ───────────────
    for (let i = 0; i < 9; i++) {
        const rx = A.hash(i * 11.3) * W, ry = A.hash(i * 13.7) * H;
        const rs = 5 + A.hash(i * 8.1) * 7;
        const g = ctx.createLinearGradient(rx, ry - rs, rx, ry + rs);
        g.addColorStop(0, '#b0a294');
        g.addColorStop(1, '#7e7264');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.ellipse(rx, ry, rs, rs * 0.72, A.hash(i) * 0.5 - 0.25, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.beginPath(); ctx.ellipse(rx - rs * 0.3, ry - rs * 0.28, rs * 0.24, rs * 0.14, -0.4, 0, Math.PI * 2); ctx.fill();
    }

    // ── one calm mushroom, flat vector ──────────────────────
    const mx = W * 0.68, my = H * 0.42, ms = 11;
    ctx.fillStyle = '#f2e6d4';
    ctx.beginPath();
    ctx.roundRect(mx - ms * 0.2, my - ms * 0.1, ms * 0.4, ms * 0.8, ms * 0.2);
    ctx.fill();
    const cg = ctx.createLinearGradient(mx, my - ms * 1.2, mx, my);
    cg.addColorStop(0, '#e8836e');
    cg.addColorStop(1, '#c95a48');
    ctx.fillStyle = cg;
    ctx.beginPath();
    ctx.moveTo(mx - ms, my - ms * 0.1);
    ctx.quadraticCurveTo(mx, my - ms * 1.3, mx + ms, my - ms * 0.1);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'rgba(255,248,238,0.85)';
    ctx.beginPath(); ctx.arc(mx - ms * 0.35, my - ms * 0.5, ms * 0.13, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(mx + ms * 0.28, my - ms * 0.6, ms * 0.1, 0, Math.PI * 2); ctx.fill();

    // ── gentle floating specks ──────────────────────────────
    for (let i = 0; i < 14; i++) {
        const px = (A.hash(i * 3.9) * W + t * (5 + A.hash(i) * 8)) % W;
        const py = (A.hash(i * 6.3) * H + Math.sin(t + i) * 6) % H;
        ctx.fillStyle = `rgba(226,206,180,${0.12 + Math.abs(Math.sin(t * 1.5 + i)) * 0.14})`;
        ctx.beginPath(); ctx.arc(px, py, 1 + A.hash(i * 9.9), 0, Math.PI * 2); ctx.fill();
    }

    A.vig(ctx, W, H, 0.14);
}
