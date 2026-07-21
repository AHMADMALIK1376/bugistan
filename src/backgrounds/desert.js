// ============================================================
// DESERT - flat vector sand flat
// Warm sand ground filling the whole frame top to bottom —
// no sky band. Layered dune ridges, soft sun-baked mounds,
// scattered cacti and rocks, rippled wind marks, drifting
// heat shimmer.
// ============================================================
function drawDesertBackground() {
    const t = frame * 0.006;

    // ── warm sand gradient, full frame ──────────────────────
    const ground = ctx.createLinearGradient(0, 0, 0, H);
    ground.addColorStop(0, '#eec27e');
    ground.addColorStop(0.45, '#dba05c');
    ground.addColorStop(1, '#a9723f');
    ctx.fillStyle = ground;
    ctx.fillRect(0, 0, W, H);

    // ── soft sun-baked mounds, alternating tone ─────────────
    for (let i = 0; i < 7; i++) {
        const mx = A.hash(i * 3.1) * W, my = A.hash(i * 7.7) * H;
        const mr = 60 + A.hash(i * 5.3) * 80;
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, mr);
        g.addColorStop(0, i % 2 === 0 ? 'rgba(255,224,168,0.32)' : 'rgba(120,72,36,0.26)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.ellipse(mx, my, mr, mr * 0.55, 0, 0, Math.PI * 2); ctx.fill();
    }

    // ── layered dune ridges, stacked top to bottom ──────────
    const dunes = [
        { y: H * 0.1, amp: 13, top: '#f0cf94', bot: '#dba05c', ph: 0.3 },
        { y: H * 0.3, amp: 17, top: '#e6b674', bot: '#c68c50', ph: 1.7 },
        { y: H * 0.52, amp: 21, top: '#d89f5c', bot: '#a97540', ph: 3.1 },
        { y: H * 0.74, amp: 25, top: '#c68c50', bot: '#8c5e34', ph: 4.6 },
        { y: H * 0.92, amp: 20, top: '#a97540', bot: '#764c2a', ph: 5.9 }
    ];
    for (const d of dunes) {
        ctx.beginPath();
        ctx.moveTo(0, H);
        ctx.lineTo(0, d.y);
        for (let x = 0; x <= W; x += 8) {
            const yy = d.y + Math.sin(x * 0.006 + d.ph) * d.amp + Math.sin(x * 0.014 + d.ph * 2) * d.amp * 0.3;
            ctx.lineTo(x, yy);
        }
        ctx.lineTo(W, H);
        ctx.closePath();
        const bg = ctx.createLinearGradient(0, d.y - d.amp, 0, H);
        bg.addColorStop(0, d.top);
        bg.addColorStop(1, d.bot);
        ctx.fillStyle = bg;
        ctx.fill();
    }

    // ── scattered flat cacti ────────────────────────────────
    const cacti = [
        { x: W * 0.14, y: H * 0.34, s: 12 },
        { x: W * 0.82, y: H * 0.58, s: 16 },
        { x: W * 0.46, y: H * 0.86, s: 13 }
    ];
    for (const c of cacti) {
        const cx = c.x, cy = c.y, cs = c.s;
        ctx.fillStyle = '#5a9e64';
        ctx.beginPath();
        ctx.roundRect(cx - cs * 0.32, cy - cs * 2.1, cs * 0.64, cs * 2.3, cs * 0.32);
        ctx.fill();
        ctx.beginPath();
        ctx.roundRect(cx - cs * 1.15, cy - cs * 1.5, cs * 0.46, cs * 0.85, cs * 0.23);
        ctx.fill();
        ctx.beginPath();
        ctx.roundRect(cx - cs * 1.15, cy - cs * 1.1, cs * 0.95, cs * 0.42, cs * 0.21);
        ctx.fill();
        ctx.beginPath();
        ctx.roundRect(cx + cs * 0.55, cy - cs * 1.15, cs * 0.46, cs * 0.68, cs * 0.23);
        ctx.fill();
        ctx.beginPath();
        ctx.roundRect(cx + cs * 0.12, cy - cs * 0.9, cs * 0.9, cs * 0.42, cs * 0.21);
        ctx.fill();
        // soft highlight side
        ctx.fillStyle = 'rgba(255,255,255,0.16)';
        ctx.beginPath();
        ctx.roundRect(cx - cs * 0.32, cy - cs * 2.1, cs * 0.24, cs * 2.3, cs * 0.12);
        ctx.fill();
        // contact shadow
        ctx.fillStyle = 'rgba(90,52,20,0.25)';
        ctx.beginPath();
        ctx.ellipse(cx, cy + cs * 0.15, cs * 1.1, cs * 0.28, 0, 0, Math.PI * 2);
        ctx.fill();
    }

    // ── flat sun-bleached rocks ──────────────────────────────
    for (let i = 0; i < 8; i++) {
        const rx = A.hash(i * 11.3) * W, ry = A.hash(i * 13.7) * H;
        const rs = 5 + A.hash(i * 8.1) * 7;
        const g = ctx.createLinearGradient(rx, ry - rs, rx, ry + rs);
        g.addColorStop(0, '#e0c4a0');
        g.addColorStop(1, '#a9825e');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.ellipse(rx, ry, rs, rs * 0.72, A.hash(i) * 0.5 - 0.25, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.28)';
        ctx.beginPath(); ctx.ellipse(rx - rs * 0.3, ry - rs * 0.28, rs * 0.24, rs * 0.14, -0.4, 0, Math.PI * 2); ctx.fill();
    }

    // ── gentle wind ripple marks, across the whole floor ────
    for (let i = 0; i < 16; i++) {
        const ry = A.hash(i * 3.7) * H;
        const rx = A.hash(i * 5.9) * W;
        const rlen = 26 + A.hash(i * 8.3) * 34;
        ctx.strokeStyle = `rgba(120,74,32,${0.14 + A.hash(i) * 0.1})`;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.quadraticCurveTo(rx + rlen * 0.5, ry - 3.5, rx + rlen, ry);
        ctx.stroke();
    }

    // ── drifting heat-shimmer sparkles ──────────────────────
    for (let i = 0; i < 10; i++) {
        const px = ((t * (50 + A.hash(i) * 50) + A.hash(i * 9.1) * W * 2) % (W + 40)) - 20;
        const py = A.hash(i * 3.3) * H + Math.sin(t * 3 + i) * 4;
        ctx.fillStyle = `rgba(255,240,200,${0.16 + A.hash(i * 5.5) * 0.18})`;
        ctx.beginPath(); ctx.arc(px, py, 1.3, 0, Math.PI * 2); ctx.fill();
    }

    A.vig(ctx, W, H, 0.14);
}
