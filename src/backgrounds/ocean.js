// ============================================================
// OCEAN - flat vector lagoon
// Calm teal gradient, soft light rays, smooth sand, simple
// rounded coral and slow bubbles. Line-less and serene.
// ============================================================
function drawOceanBackground() {
    const t = frame * 0.006;

    // ── calm teal water ─────────────────────────────────────
    const sea = ctx.createLinearGradient(0, 0, 0, H);
    sea.addColorStop(0, '#5cc4cc');
    sea.addColorStop(0.5, '#3a9cb8');
    sea.addColorStop(1, '#25749a');
    ctx.fillStyle = sea;
    ctx.fillRect(0, 0, W, H);

    // ── soft surface light ──────────────────────────────────
    const surf = ctx.createLinearGradient(0, 0, 0, H * 0.14);
    surf.addColorStop(0, 'rgba(235,255,255,0.4)');
    surf.addColorStop(1, 'rgba(235,255,255,0)');
    ctx.fillStyle = surf;
    ctx.fillRect(0, 0, W, H * 0.14);
    for (let i = 0; i < 2; i++) {
        ctx.strokeStyle = `rgba(255,255,255,${0.25 - i * 0.09})`;
        ctx.lineWidth = 2.2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        for (let x = 0; x <= W; x += 12) {
            const yy = H * (0.05 + i * 0.04) + Math.sin(x * 0.025 + t * 2.5 + i * 2) * 3.5;
            if (x === 0) { ctx.moveTo(x, yy); } else { ctx.lineTo(x, yy); }
        }
        ctx.stroke();
    }

    // ── wide soft light rays ────────────────────────────────
    for (let i = 0; i < 3; i++) {
        const baseX = W * (0.2 + i * 0.3);
        const sway = Math.sin(t * 0.6 + i * 1.3) * W * 0.04;
        const rg = ctx.createLinearGradient(0, 0, 0, H * 0.8);
        rg.addColorStop(0, 'rgba(225,255,250,0.16)');
        rg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = rg;
        ctx.beginPath();
        ctx.moveTo(baseX + sway - 22, 0);
        ctx.lineTo(baseX + sway + 22, 0);
        ctx.lineTo(baseX + sway * 3 + 85, H * 0.8);
        ctx.lineTo(baseX + sway * 3 - 85, H * 0.8);
        ctx.closePath();
        ctx.fill();
    }

    // ── smooth sandy floor ──────────────────────────────────
    ctx.fillStyle = '#e8d29a';
    ctx.beginPath();
    ctx.moveTo(0, H);
    ctx.lineTo(0, H * 0.9);
    for (let x = 0; x <= W; x += 20) {
        ctx.lineTo(x, H * 0.9 + Math.sin(x * 0.018 + 1) * 5);
    }
    ctx.lineTo(W, H);
    ctx.closePath();
    ctx.fill();

    // ── rounded coral clumps, flat colors ───────────────────
    for (let i = 0; i < 3; i++) {
        const cx = W * (0.16 + i * 0.34), cy = H * 0.92;
        const cc = ['#e88a94', '#eeb06a', '#c48ade'][i];
        ctx.strokeStyle = cc;
        ctx.lineCap = 'round';
        for (let b = 0; b < 5; b++) {
            const a = -Math.PI / 2 + (b - 2) * 0.4;
            const len = 15 + A.hash(i * 9 + b) * 12;
            ctx.lineWidth = 4.6 - b * 0.35;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.quadraticCurveTo(
                cx + Math.cos(a) * len * 0.5, cy + Math.sin(a) * len * 0.7,
                cx + Math.cos(a) * len, cy + Math.sin(a) * len);
            ctx.stroke();
        }
    }

    // ── swaying seaweed, soft green ribbons ─────────────────
    for (let i = 0; i < 5; i++) {
        const kx = A.hash(i * 13.7) * W;
        const kh = H * (0.14 + A.hash(i * 5.1) * 0.16);
        ctx.strokeStyle = 'rgba(58,140,96,0.85)';
        ctx.lineWidth = 3.6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(kx, H * 0.93);
        for (let sIdx = 1; sIdx <= 6; sIdx++) {
            const p = sIdx / 6;
            const wave = Math.sin(t * 1.4 + i * 2 + p * 3.2) * 12 * p;
            ctx.lineTo(kx + wave, H * 0.93 - kh * p);
        }
        ctx.stroke();
    }

    // ── slow soft bubbles ───────────────────────────────────
    for (let i = 0; i < 8; i++) {
        const colX = A.hash(i * 17.3) * W;
        const py = H - ((t * (26 + A.hash(i) * 26) + A.hash(i * 3.1) * H * 2) % (H + 30));
        const px = colX + Math.sin(py * 0.03 + i) * 8;
        const br = 2 + A.hash(i * 7.9) * 3.4;
        ctx.fillStyle = 'rgba(235,252,255,0.35)';
        ctx.beginPath(); ctx.arc(px, py, br, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.beginPath(); ctx.arc(px - br * 0.3, py - br * 0.35, br * 0.26, 0, Math.PI * 2); ctx.fill();
    }

    A.vig(ctx, W, H, 0.1);
}
