// ============================================================
// CANDY - flat vector sugar-land
// Bubblegum sky, drifting cotton-candy clouds, a swirled
// lollipop sun, scalloped gumdrop hills and falling sprinkles.
// ============================================================
function drawCandyBackground() {
    const t = frame * 0.006;

    // ── bubblegum sky ────────────────────────────────────────
    const skyH = H * 0.42;
    const sky = ctx.createLinearGradient(0, 0, 0, skyH);
    sky.addColorStop(0, '#c9a0ff');
    sky.addColorStop(0.55, '#ff9fd0');
    sky.addColorStop(1, '#ffd6ec');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, skyH + 2);

    // ── swirled lollipop sun, soft glow ─────────────────────
    const sx = W * 0.78, sy = skyH * 0.34, sr = Math.min(W, H) * 0.09 + 10;
    A.glow(ctx, sx, sy, sr * 3.2, '#fff0c4', 0.3);
    const sun = ctx.createLinearGradient(sx, sy - sr, sx, sy + sr);
    sun.addColorStop(0, '#fff6da');
    sun.addColorStop(1, '#ffcf70');
    ctx.fillStyle = sun;
    ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.85)';
    ctx.lineWidth = sr * 0.14;
    ctx.lineCap = 'round';
    ctx.beginPath();
    let sa = t * 0.4;
    ctx.moveTo(sx, sy);
    for (let k = 0; k < 30; k++) {
        const rr = (k / 30) * sr * 0.82;
        sa += 0.34;
        ctx.lineTo(sx + Math.cos(sa) * rr, sy + Math.sin(sa) * rr);
    }
    ctx.stroke();

    // ── drifting cotton-candy clouds ────────────────────────
    const cloudTints = ['#ffd6ec', '#d6c8ff', '#c6f0ff'];
    for (let i = 0; i < 5; i++) {
        const cx = ((t * (14 + A.hash(i * 4.1) * 10) + A.hash(i * 2.3) * (W + 200)) % (W + 200)) - 100;
        const cy = skyH * (0.18 + A.hash(i * 6.6) * 0.55);
        const cs = 20 + A.hash(i * 8.8) * 16;
        const tint = cloudTints[i % cloudTints.length];
        ctx.fillStyle = A.tone(tint, 0.12, 0.8);
        for (let k = 0; k < 5; k++) {
            const ox = (k - 2) * cs * 0.55;
            const oy = Math.sin(k * 1.3) * cs * 0.18;
            const rr = cs * (0.5 + Math.sin(k * 2.1) * 0.14);
            ctx.beginPath(); ctx.ellipse(cx + ox, cy + oy, rr, rr * 0.72, 0, 0, Math.PI * 2); ctx.fill();
        }
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.beginPath(); ctx.ellipse(cx - cs * 0.3, cy - cs * 0.16, cs * 0.5, cs * 0.26, 0, 0, Math.PI * 2); ctx.fill();
    }

    // ── distant candy castle silhouette ─────────────────────
    const castleX = W * 0.5, castleBase = skyH + H * 0.06, cScale = Math.min(W, H) * 0.09;
    ctx.fillStyle = 'rgba(214,168,255,0.55)';
    const towers = [-1.6, -0.7, 0, 0.7, 1.6];
    for (const tOff of towers) {
        const tx = castleX + tOff * cScale, th = cScale * (tOff === 0 ? 2.1 : 1.3 + Math.abs(tOff) * 0.15);
        const tw = cScale * (tOff === 0 ? 0.62 : 0.44);
        ctx.beginPath();
        ctx.roundRect(tx - tw / 2, castleBase - th, tw, th, tw * 0.15);
        ctx.fill();
        // candy-swirl roof cap
        ctx.beginPath();
        ctx.moveTo(tx - tw * 0.6, castleBase - th);
        ctx.lineTo(tx, castleBase - th - tw * 0.9);
        ctx.lineTo(tx + tw * 0.6, castleBase - th);
        ctx.closePath();
        ctx.fill();
    }
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.fillRect(castleX - cScale * 2, castleBase - cScale * 0.3, cScale * 4, cScale * 0.3);

    // ── scalloped gumdrop hills, layered ────────────────────
    const hills = [
        { y: skyH, amp: 15, bump: 34, top: '#bff0d8', bot: '#7ed6ac', ph: 0.6 },
        { y: H * 0.6, amp: 20, bump: 42, top: '#ffcbe6', bot: '#f28ec0', ph: 2.4 },
        { y: H * 0.8, amp: 24, bump: 50, top: '#d8c6ff', bot: '#a888ec', ph: 4.7 }
    ];
    for (const hl of hills) {
        ctx.beginPath();
        ctx.moveTo(0, H);
        ctx.lineTo(0, hl.y);
        for (let x = 0; x <= W; x += 6) {
            const scallop = Math.abs(Math.sin(x / hl.bump + hl.ph)) * hl.amp;
            const yy = hl.y - scallop + Math.sin(x * 0.004 + hl.ph) * hl.amp * 0.4;
            ctx.lineTo(x, yy);
        }
        ctx.lineTo(W, H);
        ctx.closePath();
        const bg = ctx.createLinearGradient(0, hl.y - hl.amp, 0, H);
        bg.addColorStop(0, hl.top);
        bg.addColorStop(1, hl.bot);
        ctx.fillStyle = bg;
        ctx.fill();
    }

    // ── gumdrop trees dotting the hills ─────────────────────
    const treeSpots = [0.06, 0.22, 0.36, 0.6, 0.72, 0.84, 0.96];
    const gumTints = ['#ff8ab8', '#8ae8d0', '#b48ae0', '#ffd166'];
    for (let i = 0; i < treeSpots.length; i++) {
        const tx = treeSpots[i] * W;
        const ty = H * (0.66 + A.hash(i * 3.7) * 0.14);
        const ts = 9 + A.hash(i * 5.1) * 6;
        ctx.fillStyle = '#c9a074';
        ctx.fillRect(tx - ts * 0.09, ty - ts * 0.1, ts * 0.18, ts * 1.1);
        const tint = gumTints[i % gumTints.length];
        for (let k = 0; k < 3; k++) {
            const gy = ty - ts * (0.3 + k * 0.42);
            const gr = ts * (0.62 - k * 0.08);
            const gg = ctx.createRadialGradient(tx - gr * 0.3, gy - gr * 0.3, 0, tx, gy, gr);
            gg.addColorStop(0, A.tone(tint, 0.28));
            gg.addColorStop(1, A.tone(tint, -0.1));
            ctx.fillStyle = gg;
            ctx.beginPath(); ctx.arc(tx, gy, gr, 0, Math.PI * 2); ctx.fill();
        }
    }

    // ── candy-cane poles ─────────────────────────────────────
    const canes = [W * 0.14, W * 0.9];
    for (const cx2 of canes) {
        const cy2 = H * 0.62, ch = H * 0.24, cw = 6;
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(cx2 - cw / 2, cy2 - ch, cw, ch, cw / 2);
        ctx.clip();
        ctx.fillStyle = '#fff4ea';
        ctx.fillRect(cx2 - cw, cy2 - ch, cw * 2, ch);
        ctx.fillStyle = '#ff5a72';
        for (let k = -2; k < 10; k++) {
            ctx.save();
            ctx.translate(cx2, cy2 - ch + k * cw * 1.6);
            ctx.rotate(-0.6);
            ctx.fillRect(-cw, -cw * 0.8, cw * 2, cw * 0.9);
            ctx.restore();
        }
        ctx.restore();
        // curved hook top
        ctx.strokeStyle = '#fff4ea';
        ctx.lineWidth = cw;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.arc(cx2 + cw * 1.1, cy2 - ch, cw * 1.1, Math.PI, Math.PI * 1.95);
        ctx.stroke();
    }

    // ── falling sprinkles, settling ─────────────────────────
    const sprinkleColors = ['#fff4a0', '#8ae8d0', '#ffffff', '#b48ae0', '#ff9fd0'];
    for (let i = 0; i < 16; i++) {
        const fx = A.hash(i * 5.1) * W;
        const fy = (t * (26 + A.hash(i * 7.7) * 34) + A.hash(i * 9.3) * H * 2) % (H + 20) - 10;
        ctx.save();
        ctx.translate(fx, fy);
        ctx.rotate(A.hash(i * 3.3) * 6.28 + t * 2);
        ctx.fillStyle = sprinkleColors[i % sprinkleColors.length];
        ctx.beginPath();
        ctx.roundRect(-2.4, -0.9, 4.8, 1.8, 0.9);
        ctx.fill();
        ctx.restore();
    }

    // ── drifting sugar sparkles ──────────────────────────────
    for (let i = 0; i < 9; i++) {
        const px = ((t * (40 + A.hash(i) * 40) + A.hash(i * 9.1) * W * 2) % (W + 40)) - 20;
        const py = H * 0.45 + A.hash(i * 3.3) * H * 0.4 + Math.sin(t * 3 + i) * 4;
        ctx.fillStyle = `rgba(255,255,255,${0.25 + A.hash(i * 5.5) * 0.25})`;
        ctx.beginPath(); ctx.arc(px, py, 1.4, 0, Math.PI * 2); ctx.fill();
    }

    A.vig(ctx, W, H, 0.1);
}
