// ============================================================
// GRASS - flat vector meadow
// Rich sage-green field filling the whole frame top to bottom
// — no sky band. Rolling terrain shading, dense rounded
// blades, daisies, clover, tiny mushrooms and pebbles.
// ============================================================
function drawGrassBackground() {
    const t = frame * 0.006;

    // ── rich sage lawn, full frame ──────────────────────────
    const base = ctx.createLinearGradient(0, 0, 0, H);
    base.addColorStop(0, '#7cb060');
    base.addColorStop(0.5, '#6a9d4e');
    base.addColorStop(1, '#4f823c');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, W, H);

    // ── rolling terrain shading, soft mounds ────────────────
    for (let i = 0; i < 6; i++) {
        const mx = A.hash(i * 3.1) * W, my = A.hash(i * 7.7) * H;
        const mr = 60 + A.hash(i * 5.3) * 80;
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, mr);
        g.addColorStop(0, i % 2 === 0 ? 'rgba(180,224,140,0.28)' : 'rgba(36,68,26,0.24)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.ellipse(mx, my, mr, mr * 0.55, 0, 0, Math.PI * 2); ctx.fill();
    }

    // ── drifting pools of soft light ────────────────────────
    for (let i = 0; i < 4; i++) {
        const px = (A.hash(i * 5.1) + Math.sin(t * 0.6 + i * 2.1) * 0.04) * W;
        const py = (A.hash(i * 8.3) + Math.cos(t * 0.45 + i * 1.7) * 0.03) * H;
        const pr = 70 + A.hash(i * 3.7) * 80;
        const g = ctx.createRadialGradient(px, py, 0, px, py, pr);
        g.addColorStop(0, 'rgba(240,240,180,0.18)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(px, py, pr, 0, Math.PI * 2); ctx.fill();
    }

    // ── bare dirt patches, worn ground ───────────────────────
    for (let i = 0; i < 3; i++) {
        const dx = A.hash(i * 17.3) * W, dy = A.hash(i * 19.9) * H;
        const dr = 16 + A.hash(i * 6.7) * 14;
        ctx.fillStyle = 'rgba(120,88,52,0.4)';
        ctx.beginPath(); ctx.ellipse(dx, dy, dr, dr * 0.55, A.hash(i) * 1.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(90,64,36,0.3)';
        ctx.beginPath(); ctx.ellipse(dx, dy, dr * 0.6, dr * 0.32, A.hash(i) * 1.5, 0, Math.PI * 2); ctx.fill();
    }

    // ── smooth rounded blades, dense, two soft tones ────────
    for (let pass = 0; pass < 2; pass++) {
        const n = pass === 0 ? 90 : 60;
        for (let i = 0; i < n; i++) {
            const seed = i + pass * 500;
            const bx = A.hash(seed * 1.3) * W;
            const by = A.hash(seed * 2.7) * H;
            const len = (pass === 0 ? 13 : 18) + A.hash(seed * 3.1) * 10;
            const lean = (A.hash(seed * 4.7) - 0.5) * 0.9 + Math.sin(t * 1.3 + bx * 0.02) * 0.12;
            ctx.strokeStyle = pass === 0 ? 'rgba(58,116,40,0.75)' : 'rgba(140,190,102,0.8)';
            ctx.lineWidth = pass === 0 ? 2.4 : 3;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(bx, by);
            ctx.quadraticCurveTo(bx + Math.sin(lean) * len * 0.4, by - len * 0.55, bx + Math.sin(lean) * len, by - len);
            ctx.stroke();
        }
    }

    // ── tiny flat mushrooms ──────────────────────────────────
    const shrooms = [
        { x: W * 0.2, y: H * 0.28, s: 9 },
        { x: W * 0.78, y: H * 0.68, s: 11 }
    ];
    for (const m of shrooms) {
        ctx.fillStyle = '#f2e6d4';
        ctx.beginPath();
        ctx.roundRect(m.x - m.s * 0.2, m.y - m.s * 0.1, m.s * 0.4, m.s * 0.8, m.s * 0.2);
        ctx.fill();
        const cg = ctx.createLinearGradient(m.x, m.y - m.s * 1.2, m.x, m.y);
        cg.addColorStop(0, '#e8836e');
        cg.addColorStop(1, '#c95a48');
        ctx.fillStyle = cg;
        ctx.beginPath();
        ctx.moveTo(m.x - m.s, m.y - m.s * 0.1);
        ctx.quadraticCurveTo(m.x, m.y - m.s * 1.3, m.x + m.s, m.y - m.s * 0.1);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = 'rgba(255,248,238,0.85)';
        ctx.beginPath(); ctx.arc(m.x - m.s * 0.35, m.y - m.s * 0.5, m.s * 0.13, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(m.x + m.s * 0.28, m.y - m.s * 0.6, m.s * 0.1, 0, Math.PI * 2); ctx.fill();
    }

    // ── minimal flat daisies, no outlines ───────────────────
    for (let i = 0; i < 5; i++) {
        const fx = A.hash(i * 31.7) * W, fy = A.hash(i * 37.1) * H;
        const fs = 7 + A.hash(i * 5.5) * 4;
        for (let p = 0; p < 6; p++) {
            const a = p * Math.PI / 3;
            ctx.fillStyle = 'rgba(252,252,246,0.95)';
            ctx.beginPath();
            ctx.ellipse(fx + Math.cos(a) * fs, fy + Math.sin(a) * fs, fs * 0.76, fs * 0.4, a, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.fillStyle = '#f2c14e';
        ctx.beginPath(); ctx.arc(fx, fy, fs * 0.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.beginPath(); ctx.arc(fx - fs * 0.15, fy - fs * 0.15, fs * 0.16, 0, Math.PI * 2); ctx.fill();
    }

    // ── round clover dots ───────────────────────────────────
    for (let i = 0; i < 9; i++) {
        const cx = A.hash(i * 21.3) * W, cy = A.hash(i * 23.9) * H;
        const cs = 3.5 + A.hash(i * 6.1) * 2.5;
        for (let k = 0; k < 3; k++) {
            const a = k * 2.09 + A.hash(i * 2.2) * 2;
            ctx.fillStyle = 'rgba(90,146,64,0.8)';
            ctx.beginPath(); ctx.arc(cx + Math.cos(a) * cs, cy + Math.sin(a) * cs, cs, 0, Math.PI * 2); ctx.fill();
        }
    }

    // ── smooth rounded pebbles, flat two-tone ───────────────
    for (let i = 0; i < 6; i++) {
        const rx = A.hash(i * 41.3) * W, ry = A.hash(i * 43.7) * H;
        const rs = 4 + A.hash(i * 8.1) * 5;
        const g = ctx.createLinearGradient(rx, ry - rs, rx, ry + rs);
        g.addColorStop(0, '#b0a294');
        g.addColorStop(1, '#7e7264');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.ellipse(rx, ry, rs, rs * 0.72, A.hash(i) * 0.5 - 0.25, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.beginPath(); ctx.ellipse(rx - rs * 0.3, ry - rs * 0.28, rs * 0.24, rs * 0.14, -0.4, 0, Math.PI * 2); ctx.fill();
    }

    // ── floating light motes ────────────────────────────────
    for (let i = 0; i < 14; i++) {
        const mx = (A.hash(i * 3.9) * W + t * (7 + A.hash(i) * 10)) % W;
        const my = (A.hash(i * 6.3) * H + Math.sin(t + i) * 8) % H;
        ctx.fillStyle = `rgba(250,248,200,${0.15 + Math.abs(Math.sin(t * 2 + i * 1.4)) * 0.25})`;
        ctx.beginPath(); ctx.arc(mx, my, 1.2 + A.hash(i * 9.9), 0, Math.PI * 2); ctx.fill();
    }

    A.vig(ctx, W, H, 0.12);
}
