// ============================================================
// UPGRADED DESERT SAND - Full screen, no animation
// ============================================================
function drawDesertBackground() {
    
    // ── SAND GRADIENT BASE ─────────────────────────────────
    const sand = ctx.createLinearGradient(0, 0, 0, H);
    sand.addColorStop(0, '#E8D5A3');
    sand.addColorStop(0.2, '#E8C872');
    sand.addColorStop(0.4, '#DCC070');
    sand.addColorStop(0.6, '#D4B858');
    sand.addColorStop(0.8, '#C8A840');
    sand.addColorStop(1, '#B89830');
    ctx.fillStyle = sand;
    ctx.fillRect(0, 0, W, H);
    
    // ── SAND TEXTURE DOTS - Full screen ────────────────────
    for (let i = 0; i < 400; i++) {
        const sx = (Math.sin(i * 7.3 + i) * 0.5 + 0.5) * W;
        const sy = (Math.cos(i * 5.7 + i) * 0.5 + 0.5) * H;
        // Dark grains
        ctx.fillStyle = `rgba(180, 140, 80, ${0.05 + (i % 4) * 0.015})`;
        ctx.beginPath(); ctx.arc(sx, sy, 1 + (i % 3), 0, Math.PI * 2); ctx.fill();
        // Light grains
        ctx.fillStyle = `rgba(240, 210, 150, ${0.04 + (i % 3) * 0.015})`;
        ctx.beginPath(); ctx.arc(sx + 2, sy + 1, 0.5 + (i % 2), 0, Math.PI * 2); ctx.fill();
    }
    
    // ── SAND DUNES (multiple layers) ───────────────────────
    // Far dune
    ctx.fillStyle = '#E8D5B0';
    ctx.beginPath(); ctx.moveTo(0, H * 0.2);
    ctx.quadraticCurveTo(W * 0.3, H * 0.1, W * 0.6, H * 0.25);
    ctx.quadraticCurveTo(W * 0.8, H * 0.15, W, H * 0.22);
    ctx.lineTo(W, H * 0.5); ctx.lineTo(0, H * 0.5); ctx.closePath(); ctx.fill();
    
    // Mid dune
    ctx.fillStyle = '#DCC080';
    ctx.beginPath(); ctx.moveTo(0, H * 0.4);
    ctx.quadraticCurveTo(W * 0.25, H * 0.3, W * 0.5, H * 0.45);
    ctx.quadraticCurveTo(W * 0.7, H * 0.35, W, H * 0.42);
    ctx.lineTo(W, H * 0.7); ctx.lineTo(0, H * 0.7); ctx.closePath(); ctx.fill();
    
    // Near dune
    ctx.fillStyle = '#D0B068';
    ctx.beginPath(); ctx.moveTo(0, H * 0.55);
    ctx.quadraticCurveTo(W * 0.2, H * 0.45, W * 0.45, H * 0.6);
    ctx.quadraticCurveTo(W * 0.7, H * 0.5, W, H * 0.58);
    ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath(); ctx.fill();
    
    // Front dune
    ctx.fillStyle = '#C8A040';
    ctx.beginPath(); ctx.moveTo(0, H * 0.7);
    ctx.quadraticCurveTo(W * 0.3, H * 0.6, W * 0.55, H * 0.75);
    ctx.quadraticCurveTo(W * 0.8, H * 0.65, W, H * 0.72);
    ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath(); ctx.fill();
    
    // ── DARK SAND SHADOWS ON DUNES ─────────────────────────
    ctx.fillStyle = 'rgba(160, 120, 60, 0.2)';
    ctx.beginPath(); ctx.moveTo(0, H * 0.35);
    ctx.quadraticCurveTo(W * 0.3, H * 0.5, W * 0.5, H * 0.55);
    ctx.lineTo(W * 0.5, H * 0.65);
    ctx.quadraticCurveTo(W * 0.3, H * 0.6, 0, H * 0.5); ctx.closePath(); ctx.fill();
    
    ctx.fillStyle = 'rgba(160, 120, 60, 0.25)';
    ctx.beginPath(); ctx.moveTo(W * 0.5, H * 0.7);
    ctx.quadraticCurveTo(W * 0.7, H * 0.8, W, H * 0.75);
    ctx.lineTo(W, H * 0.85);
    ctx.quadraticCurveTo(W * 0.7, H * 0.9, W * 0.5, H * 0.8); ctx.closePath(); ctx.fill();
    
    // ── SCATTERED ROCKS ────────────────────────────────────
    for (let i = 0; i < 20; i++) {
        const rx = (Math.sin(i * 4.1) * 0.5 + 0.5) * W;
        const ry = (Math.cos(i * 3.5) * 0.5 + 0.5) * H;
        const rs = 3 + (i % 6);
        ctx.fillStyle = `rgba(${140 + (i % 3) * 20}, ${110 + (i % 3) * 15}, ${80 + (i % 3) * 10}, ${0.4 + (i % 3) * 0.1})`;
        ctx.beginPath();
        ctx.ellipse(rx, ry, rs, rs * 0.65, i * 0.5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // ── SMALL PEBBLES ──────────────────────────────────────
    for (let i = 0; i < 40; i++) {
        const px = (Math.sin(i * 5.7) * 0.5 + 0.5) * W;
        const py = (Math.cos(i * 4.3) * 0.5 + 0.5) * H;
        ctx.fillStyle = `rgba(${160 + (i % 3) * 15}, ${130 + (i % 3) * 10}, ${100 + (i % 3) * 8}, 0.35)`;
        ctx.beginPath();
        ctx.arc(px, py, 1.5 + (i % 3), 0, Math.PI * 2);
        ctx.fill();
    }
    
    // ── DRY CRACKS IN SAND ─────────────────────────────────
    ctx.strokeStyle = 'rgba(140, 100, 50, 0.2)';
    ctx.lineWidth = 0.7;
    for (let i = 0; i < 5; i++) {
        const cx = W * (0.1 + i * 0.18);
        const cy = H * (0.25 + i * 0.12);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + 20, cy + 10);
        ctx.lineTo(cx + 35, cy - 5);
        ctx.lineTo(cx + 55 + (i % 2) * 15, cy + 8);
        ctx.lineTo(cx + 80, cy - 3);
        ctx.stroke();
    }
    
    // ── TINY DEAD GRASS / SHRUBS ───────────────────────────
    for (let i = 0; i < 8; i++) {
        const gx = (Math.sin(i * 3.9) * 0.5 + 0.5) * W;
        const gy = (Math.cos(i * 2.7) * 0.5 + 0.5) * H;
        ctx.strokeStyle = 'rgba(160, 130, 80, 0.35)';
        ctx.lineWidth = 0.8;
        for (let b = 0; b < 4; b++) {
            const angle = (b / 4) * Math.PI * 2;
            const length = 8 + (i % 3) * 4;
            ctx.beginPath();
            ctx.moveTo(gx, gy);
            ctx.lineTo(gx + Math.cos(angle) * length, gy + Math.sin(angle) * length * 0.6);
            ctx.stroke();
        }
    }
    
    // ── WIND RIPPLE MARKS ──────────────────────────────────
    ctx.strokeStyle = 'rgba(200, 170, 120, 0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 12; i++) {
        const ry = H * (0.15 + i * 0.07);
        ctx.beginPath();
        ctx.moveTo(0, ry);
        for (let x = 0; x <= W; x += 30) {
            ctx.lineTo(x, ry + Math.sin(x * 0.02 + i) * 3);
        }
        ctx.stroke();
    }
    
    // ── SMALL CACTUS / DESERT PLANTS ───────────────────────
    for (let i = 0; i < 3; i++) {
        const cx = W * (0.2 + i * 0.3);
        const cy = H * (0.5 + i * 0.12);
        // Main body
        ctx.fillStyle = '#6B8E3A';
        ctx.beginPath();
        ctx.ellipse(cx, cy, 4, 12, 0, 0, Math.PI * 2);
        ctx.fill();
        // Arms
        ctx.fillStyle = '#5A7D2A';
        ctx.beginPath();
        ctx.ellipse(cx - 6, cy - 4, 3, 8, -0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(cx + 6, cy - 2, 3, 8, 0.4, 0, Math.PI * 2);
        ctx.fill();
        // Flower on top
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(cx, cy - 12, 3, 0, Math.PI * 2);
        ctx.fill();
    }
}