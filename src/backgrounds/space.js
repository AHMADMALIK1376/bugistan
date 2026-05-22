// ============================================================
// UPGRADED SPACE - Planets, shooting stars, asteroids
// ============================================================
function drawSpaceBackground() {
    const t = frame * 0.005;
    
    // ── DEEP SPACE GRADIENT ────────────────────────────────
    const space = ctx.createLinearGradient(0, 0, 0, H);
    space.addColorStop(0, '#000011');
    space.addColorStop(0.3, '#020218');
    space.addColorStop(0.5, '#0a0a2a');
    space.addColorStop(0.7, '#050520');
    space.addColorStop(1, '#030315');
    ctx.fillStyle = space;
    ctx.fillRect(0, 0, W, H);
    
    // ── DISTANT NEBULA CLOUDS ──────────────────────────────
    for (let i = 0; i < 5; i++) {
        const nx = W * (0.1 + i * 0.2);
        const ny = H * (0.2 + i * 0.12);
        const ng = ctx.createRadialGradient(nx, ny, 0, nx, ny, 120);
        ng.addColorStop(0, `rgba(${60 + i * 30}, ${30 + i * 20}, ${150 + i * 25}, 0.06)`);
        ng.addColorStop(0.5, `rgba(${30 + i * 20}, ${15 + i * 15}, ${100 + i * 20}, 0.03)`);
        ng.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = ng;
        ctx.beginPath(); ctx.arc(nx, ny, 120, 0, Math.PI * 2); ctx.fill();
    }
    
    // ── TWINKLING STARS ────────────────────────────────────
    for (let i = 0; i < 150; i++) {
        const sx = (Math.sin(i * 7.7 + i * i * 0.1) * 0.5 + 0.5) * W;
        const sy = (Math.cos(i * 11.3 + i * i * 0.05) * 0.5 + 0.5) * H;
        const twinkle = 0.25 + Math.sin(t * 3 + i) * 0.35;
        const starSize = 0.3 + Math.abs(Math.sin(t * 2 + i)) * 1.5;
        
        // Star glow
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle * 0.3})`;
        ctx.beginPath(); ctx.arc(sx, sy, starSize * 3, 0, Math.PI * 2); ctx.fill();
        
        // Star core
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
        ctx.beginPath(); ctx.arc(sx, sy, starSize, 0, Math.PI * 2); ctx.fill();
        
        // Cross sparkle on bright stars
        if (twinkle > 0.5) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${(twinkle - 0.5) * 0.5})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(sx - starSize * 2, sy);
            ctx.lineTo(sx + starSize * 2, sy);
            ctx.moveTo(sx, sy - starSize * 2);
            ctx.lineTo(sx, sy + starSize * 2);
            ctx.stroke();
        }
    }
    
    // ── PLANET 1 - Large ringed planet ─────────────────────
    const p1x = W * 0.75, p1y = H * 0.22;
    const p1Glow = ctx.createRadialGradient(p1x, p1y, 18, p1x, p1y, 50);
    p1Glow.addColorStop(0, 'rgba(255, 150, 50, 0.2)');
    p1Glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = p1Glow;
    ctx.beginPath(); ctx.arc(p1x, p1y, 50, 0, Math.PI * 2); ctx.fill();
    
    const p1Grad = ctx.createRadialGradient(p1x - 5, p1y - 5, 5, p1x, p1y, 22);
    p1Grad.addColorStop(0, '#FFB74D');
    p1Grad.addColorStop(0.3, '#FF8C00');
    p1Grad.addColorStop(0.7, '#E65100');
    p1Grad.addColorStop(1, '#BF360C');
    ctx.fillStyle = p1Grad;
    ctx.beginPath(); ctx.arc(p1x, p1y, 22, 0, Math.PI * 2); ctx.fill();
    
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.ellipse(p1x, p1y - 8, 22, 5, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.beginPath(); ctx.ellipse(p1x, p1y - 2, 22, 5, 0, 0, Math.PI * 2); ctx.stroke();
    
    ctx.save();
    ctx.translate(p1x, p1y);
    ctx.rotate(0.4);
    ctx.strokeStyle = 'rgba(255, 200, 150, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(0, 0, 35, 8, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = 'rgba(255, 180, 120, 0.3)';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.ellipse(0, 0, 32, 6, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = 'rgba(255, 220, 180, 0.25)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.ellipse(0, 0, 38, 9, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.restore();
    
    // ── PLANET 2 - Small blue planet ───────────────────────
    const p2x = W * 0.15, p2y = H * 0.6;
    const p2Grad = ctx.createRadialGradient(p2x - 2, p2y - 2, 2, p2x, p2y, 12);
    p2Grad.addColorStop(0, '#64B5F6');
    p2Grad.addColorStop(0.5, '#1976D2');
    p2Grad.addColorStop(1, '#0D47A1');
    ctx.fillStyle = p2Grad;
    ctx.beginPath(); ctx.arc(p2x, p2y, 12, 0, Math.PI * 2); ctx.fill();
    
    const p2Glow = ctx.createRadialGradient(p2x, p2y, 10, p2x, p2y, 20);
    p2Glow.addColorStop(0, 'rgba(100, 180, 255, 0.3)');
    p2Glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = p2Glow;
    ctx.beginPath(); ctx.arc(p2x, p2y, 20, 0, Math.PI * 2); ctx.fill();
    
    // ── PLANET 3 - Tiny red/mars planet ────────────────────
    const p3x = W * 0.35, p3y = H * 0.18;
    const p3Grad = ctx.createRadialGradient(p3x - 1, p3y - 1, 1, p3x, p3y, 7);
    p3Grad.addColorStop(0, '#EF5350');
    p3Grad.addColorStop(0.5, '#C62828');
    p3Grad.addColorStop(1, '#7F0000');
    ctx.fillStyle = p3Grad;
    ctx.beginPath(); ctx.arc(p3x, p3y, 7, 0, Math.PI * 2); ctx.fill();
    
    // ── FLOATING ASTEROIDS ─────────────────────────────────
    for (let i = 0; i < 6; i++) {
        const ax = ((frame * 0.3 + i * 200) % (W + 150)) - 75;
        const ay = 30 + ((i * 37 + frame * 0.1) % (H - 60));
        const as = 3 + (i % 4) * 2;
        
        const aGrad = ctx.createRadialGradient(ax - as*0.2, ay - as*0.2, as*0.1, ax, ay, as);
        aGrad.addColorStop(0, `rgba(${150 + i*10}, ${140 + i*10}, ${130 + i*10}, 0.8)`);
        aGrad.addColorStop(1, `rgba(${80 + i*10}, ${75 + i*10}, ${70 + i*10}, 0.6)`);
        ctx.fillStyle = aGrad;
        ctx.beginPath();
        ctx.moveTo(ax - as, ay - as * 0.4);
        ctx.lineTo(ax - as * 0.6, ay - as);
        ctx.lineTo(ax + as * 0.5, ay - as * 0.7);
        ctx.lineTo(ax + as, ay);
        ctx.lineTo(ax + as * 0.5, ay + as * 0.6);
        ctx.lineTo(ax - as * 0.3, ay + as * 0.8);
        ctx.lineTo(ax - as * 0.8, ay + as * 0.3);
        ctx.closePath(); ctx.fill();
        
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath(); ctx.arc(ax + as*0.1, ay - as*0.2, as*0.2, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(ax - as*0.3, ay + as*0.2, as*0.15, 0, Math.PI * 2); ctx.fill();
    }
    
    // ── SHOOTING STARS ─────────────────────────────────────
    for (let i = 0; i < 3; i++) {
        const progress = ((frame * 1.2 + i * 300) % 600) / 600;
        const ssx = W * (-0.1 + progress * 1.3);
        const ssy = H * (0.05 + progress * 0.8);
        const angle = Math.PI / 6;
        const ssLen = 40 + (i % 3) * 25;
        
        if (ssx > -50 && ssx < W + 50 && ssy > -50 && ssy < H + 50) {
            const trailStartX = ssx - Math.cos(angle) * ssLen;
            const trailStartY = ssy - Math.sin(angle) * ssLen;
            
            const trailGrad = ctx.createLinearGradient(trailStartX, trailStartY, ssx, ssy);
            trailGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
            trailGrad.addColorStop(0.4, 'rgba(255, 255, 200, 0.2)');
            trailGrad.addColorStop(0.7, 'rgba(255, 255, 255, 0.6)');
            trailGrad.addColorStop(1, 'rgba(255, 255, 255, 0.95)');
            
            ctx.strokeStyle = trailGrad;
            ctx.lineWidth = 1.5;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(trailStartX, trailStartY);
            ctx.lineTo(ssx, ssy);
            ctx.stroke();
            
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.beginPath(); ctx.arc(ssx, ssy, 6, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = 'white';
            ctx.beginPath(); ctx.arc(ssx, ssy, 2.5, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.beginPath(); ctx.arc(ssx, ssy, 4, 0, Math.PI * 2); ctx.fill();
        }
    }
    
    // ── DISTANT GALAXY ─────────────────────────────────────
    const gx = W * 0.55, gy = H * 0.75;
    const galaxyGrad = ctx.createRadialGradient(gx, gy, 0, gx, gy, 60);
    galaxyGrad.addColorStop(0, 'rgba(200, 180, 255, 0.08)');
    galaxyGrad.addColorStop(0.5, 'rgba(150, 100, 200, 0.04)');
    galaxyGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = galaxyGrad;
    ctx.beginPath(); ctx.ellipse(gx, gy, 60, 25, -0.3, 0, Math.PI * 2); ctx.fill();
    
    ctx.strokeStyle = 'rgba(200, 180, 255, 0.06)';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(gx, gy, 40, 0, Math.PI, false);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(180, 150, 220, 0.04)';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(gx, gy, 35, Math.PI, Math.PI * 2, false);
    ctx.stroke();
    
    // ── COSMIC DUST PARTICLES ──────────────────────────────
    for (let i = 0; i < 50; i++) {
        const dx = (Math.sin(i * 5.5 + t * 0.1) * 0.5 + 0.5) * W;
        const dy = (Math.cos(i * 4.8 + t * 0.08) * 0.5 + 0.5) * H;
        ctx.fillStyle = `rgba(150, 130, 200, ${0.03 + Math.sin(i + t) * 0.015})`;
        ctx.beginPath(); ctx.arc(dx, dy, 1, 0, Math.PI * 2); ctx.fill();
    }
}