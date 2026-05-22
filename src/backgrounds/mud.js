// ============================================================
// UPGRADED MUD GROUND - Full screen, no animation
// ============================================================
function drawMudBackground() {
    
    // ── MUD GRADIENT BASE ──────────────────────────────────
    const mud = ctx.createLinearGradient(0, 0, 0, H);
    mud.addColorStop(0, '#6B4F28');
    mud.addColorStop(0.2, '#7A5C3A');
    mud.addColorStop(0.4, '#8B6B48');
    mud.addColorStop(0.6, '#7A5C3A');
    mud.addColorStop(0.8, '#6B4F28');
    mud.addColorStop(1, '#4A3508');
    ctx.fillStyle = mud;
    ctx.fillRect(0, 0, W, H);
    
    // ── MUD TEXTURE DOTS - Full screen ─────────────────────
    for (let i = 0; i < 350; i++) {
        const dx = (Math.sin(i * 7.3 + i) * 0.5 + 0.5) * W;
        const dy = (Math.cos(i * 5.7 + i) * 0.5 + 0.5) * H;
        // Dark specks
        ctx.fillStyle = `rgba(30, 18, 5, ${0.06 + (i % 4) * 0.015})`;
        ctx.beginPath(); ctx.arc(dx, dy, 1 + (i % 3), 0, Math.PI * 2); ctx.fill();
        // Light specks
        ctx.fillStyle = `rgba(160, 130, 90, ${0.04 + (i % 3) * 0.015})`;
        ctx.beginPath(); ctx.arc(dx + 2, dy + 1, 0.5 + (i % 2), 0, Math.PI * 2); ctx.fill();
    }
    
    // ── DARK MUD PATCHES ───────────────────────────────────
    ctx.fillStyle = 'rgba(30, 15, 5, 0.25)';
    ctx.beginPath(); ctx.ellipse(W * 0.15, H * 0.2, 55, 18, 0.1, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(W * 0.55, H * 0.35, 45, 14, -0.1, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(W * 0.35, H * 0.6, 65, 20, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(W * 0.75, H * 0.5, 40, 12, 0.2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(W * 0.2, H * 0.8, 50, 15, -0.1, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(W * 0.65, H * 0.75, 55, 16, 0.1, 0, Math.PI * 2); ctx.fill();
    
    // ── LIGHTER MUD HIGHLIGHTS ─────────────────────────────
    ctx.fillStyle = 'rgba(140, 110, 70, 0.15)';
    ctx.beginPath(); ctx.ellipse(W * 0.4, H * 0.15, 50, 14, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(W * 0.7, H * 0.25, 40, 12, 0.1, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(W * 0.25, H * 0.45, 45, 13, -0.1, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(W * 0.5, H * 0.7, 55, 15, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(W * 0.85, H * 0.65, 35, 10, 0.2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(W * 0.1, H * 0.55, 40, 11, -0.1, 0, Math.PI * 2); ctx.fill();
    
    // ── SCATTERED PEBBLES & SMALL ROCKS ────────────────────
    for (let i = 0; i < 25; i++) {
        const rx = (Math.sin(i * 4.1) * 0.5 + 0.5) * W;
        const ry = (Math.cos(i * 3.5) * 0.5 + 0.5) * H;
        const rs = 2 + (i % 5);
        ctx.fillStyle = `rgba(${70 + (i % 3) * 15}, ${50 + (i % 3) * 10}, ${30 + (i % 3) * 5}, ${0.3 + (i % 3) * 0.1})`;
        ctx.beginPath();
        ctx.ellipse(rx, ry, rs, rs * 0.6, i * 0.5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // ── CRACKS IN THE MUD ──────────────────────────────────
    ctx.strokeStyle = 'rgba(20, 10, 0, 0.2)';
    ctx.lineWidth = 0.8;
    for (let i = 0; i < 6; i++) {
        const cx = W * (0.08 + i * 0.16);
        const cy = H * (0.12 + i * 0.14);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + 25 + (i % 3) * 10, cy + 8);
        ctx.lineTo(cx + 50 + (i % 2) * 15, cy - 5);
        ctx.lineTo(cx + 80, cy + 12);
        ctx.stroke();
    }
    
    // ── TINY MUD BUBBLES (like dried puddles) ──────────────
    for (let i = 0; i < 15; i++) {
        const bx = (Math.sin(i * 5.3) * 0.5 + 0.5) * W;
        const by = (Math.cos(i * 4.1) * 0.5 + 0.5) * H;
        ctx.fillStyle = 'rgba(50, 30, 10, 0.15)';
        ctx.beginPath(); ctx.arc(bx, by, 3 + (i % 4), 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(80, 50, 25, 0.25)';
        ctx.lineWidth = 0.5;
        ctx.beginPath(); ctx.arc(bx, by, 3 + (i % 4), 0, Math.PI * 2); ctx.stroke();
    }
    
    // ── SMALL TWIGS / ROOTS ────────────────────────────────
    ctx.strokeStyle = 'rgba(40, 25, 10, 0.25)';
    ctx.lineWidth = 1.2;
    for (let i = 0; i < 8; i++) {
        const tx = (Math.sin(i * 3.9) * 0.5 + 0.5) * W;
        const ty = (Math.cos(i * 2.7) * 0.5 + 0.5) * H;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.quadraticCurveTo(tx + 15, ty + 5, tx + 30 + (i % 3) * 10, ty - 3);
        ctx.stroke();
    }
    
    // ── WATER PUDDLES (shiny spots) ────────────────────────
    for (let i = 0; i < 4; i++) {
        const wx = W * (0.1 + i * 0.25);
        const wy = H * (0.15 + i * 0.2);
        ctx.fillStyle = 'rgba(100, 140, 160, 0.08)';
        ctx.beginPath();
        ctx.ellipse(wx, wy, 20 + i * 5, 8 + i * 2, 0, 0, Math.PI * 2);
        ctx.fill();
        // Shine
        ctx.fillStyle = 'rgba(180, 200, 220, 0.06)';
        ctx.beginPath();
        ctx.ellipse(wx - 3, wy - 2, 8, 3, 0, 0, Math.PI * 2);
        ctx.fill();
    }
}