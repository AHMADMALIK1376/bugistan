// ============================================================
// UPGRADED GRASS FIELD - Full screen grass texture
// ============================================================
function drawGrassBackground() {
    const t = frame * 0.005;
    
    // ── SKY GRADIENT ───────────────────────────────────────
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#87CEEB');
    sky.addColorStop(0.3, '#B0E57C');
    sky.addColorStop(0.7, '#7CB342');
    sky.addColorStop(1, '#4A8C2A');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);
    
    // ── SUN ────────────────────────────────────────────────
    const sunX = W * 0.75, sunY = H * 0.15;
    const sunGlow = ctx.createRadialGradient(sunX, sunY, 15, sunX, sunY, 80);
    sunGlow.addColorStop(0, 'rgba(255, 255, 200, 0.6)');
    sunGlow.addColorStop(0.5, 'rgba(255, 255, 150, 0.2)');
    sunGlow.addColorStop(1, 'rgba(255, 255, 100, 0)');
    ctx.fillStyle = sunGlow;
    ctx.beginPath(); ctx.arc(sunX, sunY, 80, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#FFFDE0';
    ctx.beginPath(); ctx.arc(sunX, sunY, 25, 0, Math.PI * 2); ctx.fill();
    
    // ── CLOUDS ─────────────────────────────────────────────
    drawCloud(W * 0.15, H * 0.1, 0.6, t);
    drawCloud(W * 0.45, H * 0.18, 0.4, t + 2);
    drawCloud(W * 0.8, H * 0.08, 0.5, t + 4);
    
    // ── DISTANT HILLS ──────────────────────────────────────
    ctx.fillStyle = '#6B8E3A';
    ctx.beginPath(); ctx.moveTo(0, H);
    ctx.quadraticCurveTo(W * 0.25, H * 0.55, W * 0.5, H * 0.6);
    ctx.quadraticCurveTo(W * 0.75, H * 0.52, W, H * 0.58);
    ctx.lineTo(W, H); ctx.closePath(); ctx.fill();
    
    ctx.fillStyle = '#5A7D2A';
    ctx.beginPath(); ctx.moveTo(0, H);
    ctx.quadraticCurveTo(W * 0.2, H * 0.62, W * 0.4, H * 0.65);
    ctx.quadraticCurveTo(W * 0.6, H * 0.6, W * 0.8, H * 0.63);
    ctx.quadraticCurveTo(W * 0.9, H * 0.58, W, H * 0.6);
    ctx.lineTo(W, H); ctx.closePath(); ctx.fill();
    
    // ── GROUND TEXTURE BASE ────────────────────────────────
    const ground = ctx.createLinearGradient(0, H * 0.55, 0, H);
    ground.addColorStop(0, '#5A8A2A');
    ground.addColorStop(0.3, '#4A7C20');
    ground.addColorStop(0.7, '#3D6B18');
    ground.addColorStop(1, '#2D5A10');
    ctx.fillStyle = ground;
    ctx.fillRect(0, H * 0.55, W, H * 0.45);
    
    // ── GRASSY TEXTURE - Tiny dots ─────────────────────────
    for (let i = 0; i < 200; i++) {
        const gx = (Math.sin(i * 7.3 + i) * 0.5 + 0.5) * W;
        const gy = H * 0.55 + (Math.cos(i * 5.7 + i) * 0.5 + 0.5) * H * 0.45;
        const alpha = 0.05 + Math.sin(i + t) * 0.03;
        ctx.fillStyle = `rgba(30, 80, 10, ${alpha})`;
        ctx.beginPath(); ctx.arc(gx, gy, 1 + Math.random() * 2, 0, Math.PI * 2); ctx.fill();
        // Light grass dots
        ctx.fillStyle = `rgba(100, 180, 40, ${alpha * 0.8})`;
        ctx.beginPath(); ctx.arc(gx + 3, gy + 2, 0.5 + Math.random(), 0, Math.PI * 2); ctx.fill();
    }
    
    // ── GRASS BLADES (3 layers for density) ────────────────
    for (let layer = 0; layer < 3; layer++) {
        const count = 80 + layer * 40;
        const baseAlpha = 0.4 + layer * 0.2;
        
        for (let i = 0; i < count; i++) {
            const gx = (i / count) * W + Math.sin(i * 3.7) * 15;
            const gh = 20 + Math.sin(i * 2.5) * 25 + layer * 10;
            const sway = Math.sin(t * (0.6 + layer * 0.3) + i) * gh * 0.25;
            
            // Grass blade gradient
            const r = 25 + layer * 15 + Math.floor(i % 30);
            const g = 80 + layer * 25 + Math.floor(i % 40);
            const b = 15 + layer * 5 + Math.floor(i % 20);
            
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${baseAlpha})`;
            ctx.lineWidth = 0.8 + layer * 0.4;
            ctx.lineCap = 'round';
            
            ctx.beginPath();
            ctx.moveTo(gx, H);
            ctx.quadraticCurveTo(
                gx + sway * 0.5, 
                H - gh * 0.6,
                gx + sway, 
                H - gh
            );
            ctx.stroke();
            
            // Tiny seed pods on some grass
            if (gh > 35 && Math.random() > 0.7) {
                ctx.fillStyle = `rgba(${r + 30}, ${g + 20}, ${b + 10}, 0.5)`;
                ctx.beginPath();
                ctx.ellipse(gx + sway, H - gh, 2, 4, 0.3, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
    
    // ── WILD FLOWERS (Scattered) ───────────────────────────
    const flowerColors = ['#FFD700', '#FF9800', '#FF5722', '#E91E63', '#FF69B4', '#FFEB3B'];
    for (let i = 0; i < 20; i++) {
        const fx = (Math.sin(i * 4.1) * 0.5 + 0.5) * W;
        const fy = H * 0.6 + (Math.cos(i * 3.3) * 0.5 + 0.5) * H * 0.35;
        const fsway = Math.sin(t * 0.5 + i) * 2;
        const fcolor = flowerColors[i % flowerColors.length];
        const fsize = 3 + Math.random() * 4;
        
        // Stem
        ctx.strokeStyle = '#3D6B18';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(fx, fy + fsize);
        ctx.lineTo(fx + fsway, fy - fsize * 2);
        ctx.stroke();
        
        // Petals
        ctx.fillStyle = fcolor;
        for (let p = 0; p < 5; p++) {
            const angle = (p / 5) * Math.PI * 2;
            ctx.beginPath();
            ctx.arc(
                fx + fsway + Math.cos(angle) * fsize * 0.5,
                fy - fsize * 2 + Math.sin(angle) * fsize * 0.5,
                fsize * 0.35,
                0, Math.PI * 2
            );
            ctx.fill();
        }
        
        // Center
        ctx.fillStyle = '#FFEB3B';
        ctx.beginPath();
        ctx.arc(fx + fsway, fy - fsize * 2, fsize * 0.2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // ── FLOATING POLLEN / FIREFLIES ────────────────────────
    for (let i = 0; i < 20; i++) {
        const px = (Math.sin(i * 2.5 + t * 0.3) * 0.5 + 0.5) * W;
        const py = (Math.cos(i * 3.5 + t * 0.4) * 0.5 + 0.5) * H;
        const pulse = Math.sin(t * 1.5 + i) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(255, 255, 150, ${0.2 * pulse})`;
        ctx.beginPath(); ctx.arc(px, py, 2 + pulse, 0, Math.PI * 2); ctx.fill();
        // Glow
        ctx.fillStyle = `rgba(255, 255, 200, ${0.08 * pulse})`;
        ctx.beginPath(); ctx.arc(px, py, 6 + pulse * 2, 0, Math.PI * 2); ctx.fill();
    }
    
    // ── BUTTERFLIES ────────────────────────────────────────
    for (let i = 0; i < 3; i++) {
        const bx = ((frame * 0.3 + i * 100) % (W + 200)) - 100;
        const by = H * 0.15 + Math.sin(frame * 0.02 + i) * H * 0.3;
        const wingFlap = Math.abs(Math.sin(frame * 0.08 + i)) * 0.8 + 0.2;
        
        drawButterfly(bx, by, 6 + i * 2, flowerColors[i], wingFlap, true);
    }
}

// ── HELPER: Draw Cloud ─────────────────────────────────────
function drawCloud(x, y, scale, t) {
    const drift = Math.sin(t * 0.3) * 10;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath(); ctx.arc(x + drift, y, 25 * scale, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + 20 * scale + drift, y - 5 * scale, 18 * scale, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x - 18 * scale + drift, y - 3 * scale, 15 * scale, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + 35 * scale + drift, y + 2 * scale, 20 * scale, 0, Math.PI * 2); ctx.fill();
}

// ── HELPER: Draw Butterfly ─────────────────────────────────
function drawButterfly(x, y, size, color, flap, facingRight) {
    ctx.save(); ctx.translate(x, y);
    if (!facingRight) ctx.scale(-1, 1);
    const w = size * (0.3 + flap * 0.7);
    
    // Top wings
    ctx.fillStyle = color; ctx.globalAlpha = 0.7;
    ctx.beginPath(); ctx.ellipse(-w * 0.5, -size * 0.3, w, size * 0.45, -0.4, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(w * 0.5, -size * 0.3, w, size * 0.45, 0.4, 0, Math.PI * 2); ctx.fill();
    
    // Bottom wings
    ctx.globalAlpha = 0.5;
    ctx.beginPath(); ctx.ellipse(-w * 0.4, size * 0.2, w * 0.7, size * 0.35, 0.3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(w * 0.4, size * 0.2, w * 0.7, size * 0.35, -0.3, 0, Math.PI * 2); ctx.fill();
    
    // Wing spots
    ctx.fillStyle = '#FFEB3B'; ctx.globalAlpha = 0.5;
    ctx.beginPath(); ctx.arc(-w * 0.3, -size * 0.25, size * 0.08, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(w * 0.3, -size * 0.25, size * 0.08, 0, Math.PI * 2); ctx.fill();
    
    // Body
    ctx.globalAlpha = 1; ctx.fillStyle = '#2D1A00';
    ctx.beginPath(); ctx.ellipse(0, 0, size * 0.06, size * 0.4, 0, 0, Math.PI * 2); ctx.fill();
    
    // Antennae
    ctx.strokeStyle = '#2D1A00'; ctx.lineWidth = 0.5;
    ctx.beginPath(); ctx.moveTo(0, -size * 0.3); ctx.quadraticCurveTo(size * 0.2, -size * 0.6, size * 0.3, -size * 0.55); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, -size * 0.3); ctx.quadraticCurveTo(-size * 0.2, -size * 0.6, -size * 0.3, -size * 0.55); ctx.stroke();
    
    ctx.restore();
}