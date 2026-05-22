// ============================================================
// UPGRADED OCEAN DEEP - Sandy bottom, plants, rocks, bubbles
// ============================================================
function drawOceanBackground() {
    const t = frame * 0.005;
    
    // ── OCEAN WATER GRADIENT ───────────────────────────────
    const ocean = ctx.createLinearGradient(0, 0, 0, H);
    ocean.addColorStop(0, '#006994');
    ocean.addColorStop(0.15, '#005580');
    ocean.addColorStop(0.4, '#004466');
    ocean.addColorStop(0.7, '#003355');
    ocean.addColorStop(1, '#001a33');
    ctx.fillStyle = ocean;
    ctx.fillRect(0, 0, W, H);
    
    // ── LIGHT RAYS FROM ABOVE ──────────────────────────────
    for (let i = 0; i < 10; i++) {
        const rx = W * (0.05 + i * 0.1);
        const sway = Math.sin(t * 0.3 + i) * 5;
        ctx.fillStyle = `rgba(100, 180, 255, ${0.02 + Math.sin(t * 0.5 + i) * 0.01})`;
        ctx.beginPath();
        ctx.moveTo(rx + sway, 0);
        ctx.lineTo(rx + 35 + sway, H * 0.8);
        ctx.lineTo(rx - 25 + sway, H * 0.8);
        ctx.closePath(); ctx.fill();
    }
    
    // ── SANDY OCEAN FLOOR ──────────────────────────────────
    const sandFloor = ctx.createLinearGradient(0, H * 0.7, 0, H);
    sandFloor.addColorStop(0, '#C2A860');
    sandFloor.addColorStop(0.3, '#B89848');
    sandFloor.addColorStop(0.7, '#A08038');
    sandFloor.addColorStop(1, '#8B6B28');
    ctx.fillStyle = sandFloor;
    ctx.fillRect(0, H * 0.7, W, H * 0.3);
    
    // ── WAVY SAND SURFACE ──────────────────────────────────
    ctx.fillStyle = '#C8B070';
    ctx.beginPath();
    ctx.moveTo(0, H * 0.7);
    for (let x = 0; x <= W; x += 10) {
        ctx.lineTo(x, H * 0.7 + Math.sin(x * 0.015 + t * 0.15) * 4);
    }
    ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath(); ctx.fill();
    
    // ── SAND TEXTURE DOTS ──────────────────────────────────
    for (let i = 0; i < 150; i++) {
        const sx = (Math.sin(i * 6.3) * 0.5 + 0.5) * W;
        const sy = H * 0.7 + (Math.cos(i * 4.7) * 0.5 + 0.5) * H * 0.3;
        ctx.fillStyle = `rgba(180, 150, 100, ${0.08 + (i % 3) * 0.03})`;
        ctx.beginPath(); ctx.arc(sx, sy, 1 + (i % 3), 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = `rgba(220, 200, 160, ${0.05 + (i % 2) * 0.02})`;
        ctx.beginPath(); ctx.arc(sx + 1, sy + 1, 0.5 + (i % 2), 0, Math.PI * 2); ctx.fill();
    }
    
    // ── ROCKS ON OCEAN FLOOR ───────────────────────────────
    for (let i = 0; i < 8; i++) {
        const rx = W * (0.05 + i * 0.12);
        const ry = H * (0.75 + (i % 3) * 0.06);
        const rs = 8 + (i % 5) * 5;
        
        const rockGrad = ctx.createRadialGradient(rx - rs*0.2, ry - rs*0.2, rs*0.1, rx, ry, rs);
        rockGrad.addColorStop(0, `rgba(${120 + (i%3)*20}, ${110 + (i%3)*15}, ${100 + (i%3)*10}, 0.8)`);
        rockGrad.addColorStop(1, `rgba(${60 + (i%3)*15}, ${55 + (i%3)*10}, ${50 + (i%3)*8}, 0.6)`);
        ctx.fillStyle = rockGrad;
        ctx.beginPath();
        ctx.ellipse(rx, ry, rs, rs * 0.7, i * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        // Rock highlight
        ctx.fillStyle = 'rgba(200, 190, 170, 0.15)';
        ctx.beginPath();
        ctx.ellipse(rx - rs*0.2, ry - rs*0.3, rs*0.4, rs*0.2, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // ── SMALL PEBBLES ──────────────────────────────────────
    for (let i = 0; i < 30; i++) {
        const px = (Math.sin(i * 5.1) * 0.5 + 0.5) * W;
        const py = H * 0.72 + (Math.cos(i * 3.9) * 0.5 + 0.5) * H * 0.25;
        ctx.fillStyle = `rgba(${140 + (i%4)*15}, ${120 + (i%4)*10}, ${90 + (i%4)*8}, 0.5)`;
        ctx.beginPath();
        ctx.arc(px, py, 1.5 + (i % 3), 0, Math.PI * 2);
        ctx.fill();
    }
    
    // ── SEA PLANTS / SEAWEED ───────────────────────────────
    for (let i = 0; i < 12; i++) {
        const px = W * (0.03 + i * 0.085);
        const ph = 30 + (i % 4) * 20;
        const sway = Math.sin(t * 0.4 + i) * 8;
        
        // Main stalk
        const plantGrad = ctx.createLinearGradient(px, H * 0.7, px, H * 0.7 - ph);
        plantGrad.addColorStop(0, `rgba(${20 + i%3*10}, ${100 + i%4*15}, ${30 + i%3*10}, 0.7)`);
        plantGrad.addColorStop(1, `rgba(${40 + i%3*15}, ${140 + i%4*20}, ${50 + i%3*12}, 0.5)`);
        ctx.strokeStyle = plantGrad;
        ctx.lineWidth = 2 + (i % 3);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(px, H * 0.7);
        ctx.quadraticCurveTo(px + sway, H * 0.7 - ph * 0.5, px + sway * 0.8, H * 0.7 - ph);
        ctx.stroke();
        
        // Leaves on stalk
        for (let l = 0; l < 3; l++) {
            const ly = H * 0.7 - ph * (0.2 + l * 0.25);
            const lx = px + sway * (0.3 + l * 0.2);
            const leafSway = Math.sin(t * 0.5 + i + l) * 4;
            
            ctx.fillStyle = `rgba(${30 + i%3*12}, ${120 + i%4*18}, ${40 + i%3*8}, 0.5)`;
            ctx.beginPath();
            ctx.ellipse(lx + leafSway, ly, 6 + (i%3)*2, 3, 0.2 * (i % 2 === 0 ? 1 : -1), 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // ── TALL SEAWEED ───────────────────────────────────────
    for (let i = 0; i < 6; i++) {
        const sx = W * (0.08 + i * 0.16);
        const sh = 50 + (i % 3) * 30;
        const sway = Math.sin(t * 0.35 + i) * 12;
        
        ctx.strokeStyle = `rgba(${15 + i%2*10}, ${90 + i%3*20}, ${25 + i%2*10}, 0.6)`;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(sx, H * 0.7);
        ctx.quadraticCurveTo(sx + sway, H * 0.7 - sh * 0.4, sx + sway * 1.5, H * 0.7 - sh);
        ctx.stroke();
        
        // Wavy ribbon effect
        ctx.strokeStyle = `rgba(${25 + i%2*12}, ${110 + i%3*22}, ${35 + i%2*12}, 0.3)`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(sx - 3, H * 0.7);
        ctx.quadraticCurveTo(sx + sway - 5, H * 0.7 - sh * 0.4, sx + sway * 1.5 - 3, H * 0.7 - sh);
        ctx.stroke();
    }
    
    // ── CORAL ──────────────────────────────────────────────
    for (let i = 0; i < 4; i++) {
        const cx = W * (0.15 + i * 0.22);
        const cy = H * (0.72 + (i % 2) * 0.05);
        const cs = 8 + (i % 3) * 4;
        
        // Base
        ctx.fillStyle = `rgba(${220 + i%2*20}, ${100 + i%3*30}, ${80 + i%2*20}, 0.7)`;
        ctx.beginPath(); ctx.arc(cx, cy, cs, 0, Math.PI * 2); ctx.fill();
        
        // Branches
        for (let b = 0; b < 5; b++) {
            const angle = (b / 5) * Math.PI * 2;
            const bx = cx + Math.cos(angle) * cs * 0.7;
            const by = cy + Math.sin(angle) * cs * 0.7;
            ctx.fillStyle = `rgba(${240 + i%2*15}, ${120 + i%3*25}, ${90 + i%2*18}, 0.6)`;
            ctx.beginPath(); ctx.arc(bx, by, cs * 0.4, 0, Math.PI * 2); ctx.fill();
        }
        
        // Top highlight
        ctx.fillStyle = 'rgba(255, 200, 180, 0.2)';
        ctx.beginPath(); ctx.arc(cx - cs*0.2, cy - cs*0.3, cs * 0.3, 0, Math.PI * 2); ctx.fill();
    }
    
    // ── RISING BUBBLES ─────────────────────────────────────
    for (let i = 0; i < 25; i++) {
        const bx = (Math.sin(i * 3.2 + t * 0.2) * 0.5 + 0.5) * W;
        const by = H - ((frame * 0.2 + i * 55) % H);
        const bubbleAlpha = 0.15 + (1 - by / H) * 0.1;
        const bubbleSize = 1.5 + Math.sin(i * 2 + t) * 1 + (i % 3);
        
        // Bubble
        ctx.fillStyle = `rgba(150, 220, 255, ${bubbleAlpha})`;
        ctx.beginPath(); ctx.arc(bx, by, bubbleSize, 0, Math.PI * 2); ctx.fill();
        
        // Bubble shine
        ctx.fillStyle = `rgba(255, 255, 255, ${bubbleAlpha * 0.6})`;
        ctx.beginPath(); ctx.arc(bx - bubbleSize*0.3, by - bubbleSize*0.3, bubbleSize*0.3, 0, Math.PI * 2); ctx.fill();
    }
    
    // ── FLOATING PARTICLES (Plankton) ──────────────────────
    for (let i = 0; i < 40; i++) {
        const px = (Math.sin(i * 4.5 + t * 0.15) * 0.5 + 0.5) * W;
        const py = (Math.cos(i * 3.8 + t * 0.2) * 0.5 + 0.5) * H * 0.75;
        ctx.fillStyle = `rgba(180, 220, 255, ${0.04 + Math.sin(i + t) * 0.02})`;
        ctx.beginPath(); ctx.arc(px, py, 1, 0, Math.PI * 2); ctx.fill();
    }
}