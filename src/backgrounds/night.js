// ============================================================
// UPGRADED NIGHT SKY - Moving clouds, stars, moon
// ============================================================
function drawNightBackground() {
    const t = frame * 0.005;
    
    // ── NIGHT SKY GRADIENT ─────────────────────────────────
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#0a0a2e');
    sky.addColorStop(0.3, '#0d0d35');
    sky.addColorStop(0.5, '#1a1a3e');
    sky.addColorStop(0.7, '#151530');
    sky.addColorStop(1, '#0d1b2a');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);
    
    // ── DISTANT HILLS SILHOUETTE ───────────────────────────
    ctx.fillStyle = '#060615';
    ctx.beginPath(); ctx.moveTo(0, H);
    ctx.quadraticCurveTo(W * 0.2, H * 0.78, W * 0.4, H * 0.82);
    ctx.quadraticCurveTo(W * 0.6, H * 0.76, W * 0.8, H * 0.8);
    ctx.quadraticCurveTo(W * 0.9, H * 0.77, W, H * 0.79);
    ctx.lineTo(W, H); ctx.closePath(); ctx.fill();
    
    // Pine tree silhouettes
    for (let i = 0; i < 8; i++) {
        const tx = W * (0.05 + i * 0.12);
        const th = 30 + (i % 4) * 20;
        ctx.fillStyle = '#050510';
        // Trunk
        ctx.fillRect(tx - 1.5, H * 0.8 - th * 0.3, 3, th * 0.3);
        // Triangular layers
        for (let layer = 0; layer < 4; layer++) {
            const ty = H * 0.8 - th * (0.2 + layer * 0.2);
            const tw = th * (0.3 - layer * 0.06);
            ctx.beginPath();
            ctx.moveTo(tx, ty - th * 0.15);
            ctx.lineTo(tx + tw, ty);
            ctx.lineTo(tx - tw, ty);
            ctx.closePath(); ctx.fill();
        }
    }
    
    // ── MOVING CLOUDS ──────────────────────────────────────
    for (let i = 0; i < 6; i++) {
        const cx = ((frame * 0.2 + i * 250) % (W + 300)) - 150;
        const cy = 30 + (i * 45) % (H * 0.5);
        const cs = 0.4 + (i % 3) * 0.3;
        const cloudAlpha = 0.06 + (i % 3) * 0.04;
        
        ctx.fillStyle = `rgba(200, 200, 220, ${cloudAlpha})`;
        
        // Cloud puffs
        ctx.beginPath(); ctx.arc(cx, cy, 25 * cs, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(cx + 20 * cs, cy - 8 * cs, 18 * cs, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(cx - 18 * cs, cy - 5 * cs, 15 * cs, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(cx + 38 * cs, cy + 2 * cs, 20 * cs, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(cx + 10 * cs, cy - 12 * cs, 14 * cs, 0, Math.PI * 2); ctx.fill();
        
        // Darker cloud bottom
        ctx.fillStyle = `rgba(150, 150, 180, ${cloudAlpha * 0.7})`;
        ctx.beginPath(); ctx.arc(cx + 5 * cs, cy + 5 * cs, 20 * cs, 0, Math.PI * 2); ctx.fill();
    }
    
    // ── FASTER HIGH CLOUDS ─────────────────────────────────
    for (let i = 0; i < 4; i++) {
        const hcx = ((frame * 0.35 + i * 300) % (W + 250)) - 125;
        const hcy = 20 + (i * 55) % (H * 0.35);
        
        ctx.fillStyle = 'rgba(180, 190, 210, 0.04)';
        ctx.beginPath(); ctx.arc(hcx, hcy, 20, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(hcx + 15, hcy - 5, 15, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(hcx - 12, hcy - 3, 12, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(hcx + 28, hcy + 1, 16, 0, Math.PI * 2); ctx.fill();
    }
    
    // ── TWINKLING STARS ────────────────────────────────────
    for (let i = 0; i < 100; i++) {
        const sx = (Math.sin(i * 13.7) * 0.5 + 0.5) * W;
        const sy = (Math.cos(i * 17.3) * 0.5 + 0.5) * H * 0.7;
        const twinkle = 0.3 + Math.sin(t * 2 + i) * 0.4;
        const starSize = 0.5 + Math.abs(Math.sin(t + i)) * 1.5;
        
        ctx.fillStyle = `rgba(255, 255, 220, ${twinkle})`;
        ctx.beginPath(); ctx.arc(sx, sy, starSize, 0, Math.PI * 2); ctx.fill();
        
        // Glow on bright stars
        if (twinkle > 0.5) {
            ctx.fillStyle = `rgba(255, 255, 220, ${twinkle * 0.2})`;
            ctx.beginPath(); ctx.arc(sx, sy, starSize * 3, 0, Math.PI * 2); ctx.fill();
        }
    }
    
    // ── CRESCENT MOON ──────────────────────────────────────
    const moonX = W * 0.82, moonY = H * 0.2;
    
    // Moon glow
    const moonGlow = ctx.createRadialGradient(moonX, moonY, 30, moonX, moonY, 80);
    moonGlow.addColorStop(0, 'rgba(255, 255, 200, 0.15)');
    moonGlow.addColorStop(0.5, 'rgba(255, 255, 200, 0.05)');
    moonGlow.addColorStop(1, 'rgba(255, 255, 200, 0)');
    ctx.fillStyle = moonGlow;
    ctx.beginPath(); ctx.arc(moonX, moonY, 80, 0, Math.PI * 2); ctx.fill();
    
    // Moon body
    ctx.fillStyle = '#FFEECC';
    ctx.beginPath(); ctx.arc(moonX, moonY, 35, 0, Math.PI * 2); ctx.fill();
    
    // Crescent cutout
    ctx.fillStyle = '#0a0a2e';
    ctx.beginPath(); ctx.arc(moonX + 10, moonY - 3, 30, 0, Math.PI * 2); ctx.fill();
    
    // Moon surface craters
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.beginPath(); ctx.arc(moonX - 15, moonY - 10, 5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(moonX - 5, moonY + 8, 3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(moonX - 20, moonY + 5, 4, 0, Math.PI * 2); ctx.fill();
    
    // ── FIREFLIES NEAR GROUND ──────────────────────────────
    for (let i = 0; i < 15; i++) {
        const fx = (Math.sin(i * 3.5 + t * 0.15) * 0.5 + 0.5) * W;
        const fy = H * 0.75 + (Math.cos(i * 4.2 + t * 0.2) * 0.5 + 0.5) * H * 0.2;
        const pulse = Math.sin(t * 1.5 + i) * 0.4 + 0.6;
        
        ctx.fillStyle = `rgba(255, 255, 150, ${0.5 * pulse})`;
        ctx.beginPath(); ctx.arc(fx, fy, 2 + pulse, 0, Math.PI * 2); ctx.fill();
        
        ctx.fillStyle = `rgba(255, 255, 200, ${0.2 * pulse})`;
        ctx.beginPath(); ctx.arc(fx, fy, 6 + pulse * 3, 0, Math.PI * 2); ctx.fill();
    }
}