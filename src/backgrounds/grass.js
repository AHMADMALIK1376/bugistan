// ============================================================
// GRASS FIELD - Full screen, completely still, no animation
// ============================================================
function drawGrassBackground() {
    
    // ── FULL GREEN GRASS BASE ──────────────────────────────
    const baseGrass = ctx.createLinearGradient(0, 0, 0, H);
    baseGrass.addColorStop(0, '#4A7C20');
    baseGrass.addColorStop(0.3, '#5A8A2A');
    baseGrass.addColorStop(0.5, '#4A7C20');
    baseGrass.addColorStop(0.7, '#3D6B18');
    baseGrass.addColorStop(1, '#2D5A10');
    ctx.fillStyle = baseGrass;
    ctx.fillRect(0, 0, W, H);
    
    // ── GRASS TEXTURE DOTS - Full screen ───────────────────
    for (let i = 0; i < 400; i++) {
        const gx = (Math.sin(i * 7.3 + i) * 0.5 + 0.5) * W;
        const gy = (Math.cos(i * 5.7 + i) * 0.5 + 0.5) * H;
        // Dark spots
        ctx.fillStyle = `rgba(20, 55, 5, ${0.06 + (i % 3) * 0.02})`;
        ctx.beginPath(); ctx.arc(gx, gy, 1 + (i % 3), 0, Math.PI * 2); ctx.fill();
        // Light spots
        ctx.fillStyle = `rgba(90, 170, 35, ${0.04 + (i % 2) * 0.02})`;
        ctx.beginPath(); ctx.arc(gx + 2, gy + 1, 0.5 + (i % 2), 0, Math.PI * 2); ctx.fill();
    }
    
    // ── GRASS BLADES FROM BOTTOM - Full height ────────────
    for (let i = 0; i < 200; i++) {
        const gx = (i / 200) * W + Math.sin(i * 3.7) * 20;
        const gh = 40 + Math.sin(i * 2.5) * 35 + (i % 3) * 25;
        const sway = Math.sin(i * 1.5) * gh * 0.15;
        
        const r = 20 + Math.floor(i % 25);
        const g = 70 + Math.floor(i % 40);
        const b = 12 + Math.floor(i % 15);
        
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.5 + (i % 3) * 0.1})`;
        ctx.lineWidth = 0.8 + (i % 3) * 0.4;
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
    }
    
    // ── GRASS BLADES FROM TOP (growing down) ──────────────
    for (let i = 0; i < 150; i++) {
        const gx = (i / 150) * W + Math.sin(i * 4.1) * 18;
        const gh = 35 + Math.sin(i * 2.8) * 30;
        const sway = Math.sin(i * 1.8) * gh * 0.12;
        
        ctx.strokeStyle = `rgba(${25 + Math.floor(i % 20)}, ${75 + Math.floor(i % 30)}, ${14 + Math.floor(i % 10)}, 0.4)`;
        ctx.lineWidth = 0.7;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.quadraticCurveTo(
            gx + sway * 0.5,
            gh * 0.5,
            gx + sway,
            gh
        );
        ctx.stroke();
    }
    
    // ── MIDDLE GRASS BLADES (horizontal-ish) ──────────────
    for (let i = 0; i < 100; i++) {
        const gx = (i / 100) * W + Math.sin(i * 3.3) * 15;
        const gy = 20 + (i % 5) * (H * 0.18);
        const gh = 25 + Math.sin(i * 2.1) * 20;
        const sway = Math.sin(i * 1.2) * gh * 0.2;
        
        ctx.strokeStyle = `rgba(${30 + Math.floor(i % 22)}, ${80 + Math.floor(i % 28)}, ${15 + Math.floor(i % 12)}, 0.35)`;
        ctx.lineWidth = 0.6;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(gx, gy);
        ctx.quadraticCurveTo(
            gx + sway * 0.5,
            gy + gh * 0.4,
            gx + sway,
            gy + gh
        );
        ctx.stroke();
    }
    
    // ── STILL WILD FLOWERS ─────────────────────────────────
    const flowerColors = ['#FFD700', '#FF9800', '#FF5722', '#E91E63', '#FF69B4', '#FFEB3B', '#FFFFFF'];
    for (let i = 0; i < 12; i++) {
        const fx = (Math.sin(i * 4.1) * 0.5 + 0.5) * W;
        const fy = (Math.cos(i * 3.3) * 0.5 + 0.5) * H;
        const fcolor = flowerColors[i % flowerColors.length];
        const fsize = 3 + (i % 4) * 2;
        
        // Stem (straight, no sway)
        ctx.strokeStyle = '#3D6B18';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(fx, fy + fsize);
        ctx.lineTo(fx, fy - fsize * 2);
        ctx.stroke();
        
        // Petals
        ctx.fillStyle = fcolor;
        for (let p = 0; p < 5; p++) {
            const angle = (p / 5) * Math.PI * 2;
            ctx.beginPath();
            ctx.arc(
                fx + Math.cos(angle) * fsize * 0.5,
                fy - fsize * 2 + Math.sin(angle) * fsize * 0.5,
                fsize * 0.3,
                0, Math.PI * 2
            );
            ctx.fill();
        }
        
        // Center
        ctx.fillStyle = '#FFEB3B';
        ctx.beginPath();
        ctx.arc(fx, fy - fsize * 2, fsize * 0.18, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // ── TINY LEAVES ON GROUND ──────────────────────────────
    for (let i = 0; i < 20; i++) {
        const lx = (Math.sin(i * 6.1) * 0.5 + 0.5) * W;
        const ly = (Math.cos(i * 4.7) * 0.5 + 0.5) * H;
        ctx.fillStyle = `rgba(${40 + (i % 3) * 15}, ${100 + (i % 3) * 20}, ${20 + (i % 3) * 8}, 0.3)`;
        ctx.beginPath();
        ctx.ellipse(lx, ly, 3 + (i % 3), 2 + (i % 2), i * 0.5, 0, Math.PI * 2);
        ctx.fill();
    }
}