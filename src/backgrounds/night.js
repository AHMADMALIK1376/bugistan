// ============================================================
// NIGHT - flat vector night
// Deep indigo gradient, soft star dots, a smooth cream moon,
// rolling hill silhouettes. Line-less and quiet.
// ============================================================
function drawNightBackground() {
    const t = frame * 0.005;

    // ── smooth indigo sky ───────────────────────────────────
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#232a5c');
    sky.addColorStop(0.55, '#2e3676');
    sky.addColorStop(1, '#252c62');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    // ── soft star dots, slow twinkle ────────────────────────
    for (let i = 0; i < 60; i++) {
        const sx = A.hash(i * 1.9) * W;
        const sy = A.hash(i * 3.7) * H * 0.8;
        const tw = 0.3 + 0.5 * Math.abs(Math.sin(t * 1.5 + i));
        ctx.fillStyle = `rgba(240,240,250,${tw * 0.6})`;
        ctx.beginPath(); ctx.arc(sx, sy, 0.8 + A.hash(i * 5.1) * 1.2, 0, Math.PI * 2); ctx.fill();
    }
    // a few larger soft glows
    for (let i = 0; i < 5; i++) {
        const sx = A.hash(i * 17.3) * W;
        const sy = A.hash(i * 19.1) * H * 0.7;
        const tw = 0.3 + 0.5 * Math.abs(Math.sin(t * 2 + i * 2.3));
        A.glow(ctx, sx, sy, 8, '#e8e8ff', tw * 0.4);
        ctx.fillStyle = `rgba(250,250,255,${tw})`;
        ctx.beginPath(); ctx.arc(sx, sy, 1.6, 0, Math.PI * 2); ctx.fill();
    }

    // ── smooth cream moon with flat craters ─────────────────
    const mx = W * 0.72, my = H * 0.22, mr = Math.min(W, H) * 0.095 + 12;
    A.glow(ctx, mx, my, mr * 2.8, '#fdf3cd', 0.2);
    const moon = ctx.createLinearGradient(mx, my - mr, mx, my + mr);
    moon.addColorStop(0, '#fdf3d3');
    moon.addColorStop(1, '#ecd394');
    ctx.fillStyle = moon;
    ctx.beginPath(); ctx.arc(mx, my, mr, 0, Math.PI * 2); ctx.fill();
    for (let i = 0; i < 4; i++) {
        const a = A.hash(i * 7.1) * Math.PI * 2;
        const d = A.hash(i * 9.3) * mr * 0.55;
        ctx.fillStyle = 'rgba(214,184,120,0.5)';
        ctx.beginPath();
        ctx.arc(mx + Math.cos(a) * d, my + Math.sin(a) * d, mr * (0.09 + A.hash(i * 3.3) * 0.1), 0, Math.PI * 2);
        ctx.fill();
    }

    // ── soft drifting cloud bands ───────────────────────────
    for (let i = 0; i < 3; i++) {
        const cx = ((t * (14 + i * 7) + i * 300) % (W + 320)) - 160;
        const cy = H * (0.16 + i * 0.18);
        const cs = 30 + i * 10;
        ctx.fillStyle = 'rgba(150,162,222,0.22)';
        for (const [ox, oy, os] of [[-1.1, 0.1, 0.7], [0, -0.25, 1], [1.05, 0.05, 0.8], [0.35, 0.22, 0.72]]) {
            ctx.beginPath();
            ctx.arc(cx + ox * cs, cy + oy * cs, cs * os, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // ── rolling hill silhouettes, two flat layers ───────────
    ctx.fillStyle = '#1b2150';
    ctx.beginPath();
    ctx.moveTo(0, H);
    ctx.lineTo(0, H * 0.84);
    ctx.quadraticCurveTo(W * 0.3, H * 0.72, W * 0.6, H * 0.84);
    ctx.quadraticCurveTo(W * 0.85, H * 0.92, W, H * 0.82);
    ctx.lineTo(W, H);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#151a42';
    ctx.beginPath();
    ctx.moveTo(0, H);
    ctx.lineTo(0, H * 0.92);
    ctx.quadraticCurveTo(W * 0.4, H * 0.98, W * 0.7, H * 0.9);
    ctx.quadraticCurveTo(W * 0.88, H * 0.86, W, H * 0.92);
    ctx.lineTo(W, H);
    ctx.closePath();
    ctx.fill();

    // ── a few wandering glow sparks ─────────────────────────
    for (let i = 0; i < 5; i++) {
        const fx = (A.hash(i * 12.7) * W + Math.sin(t * 0.8 + i * 2.4) * 30) % W;
        const fy = H * 0.62 + A.hash(i * 15.1) * H * 0.26 + Math.cos(t * 0.6 + i) * 12;
        const pulse = Math.max(0, Math.sin(t * 2 + i * 2.9));
        if (pulse > 0.1) {
            A.glow(ctx, fx, fy, 8 + pulse * 7, '#ffe9a0', pulse * 0.45);
            ctx.fillStyle = `rgba(255,244,200,${pulse * 0.9})`;
            ctx.beginPath(); ctx.arc(fx, fy, 1.4, 0, Math.PI * 2); ctx.fill();
        }
    }

    A.vig(ctx, W, H, 0.16);
}
