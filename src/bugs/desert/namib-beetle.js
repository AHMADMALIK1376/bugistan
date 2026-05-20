// ── NAMIB DESERT BEETLE: Fog-basking beetle, textured shell ──────
class NamibBeetle {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.2;
        // Legs
        ctx.strokeStyle = '#4A3520'; ctx.lineWidth = size * 0.08; ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) {
            for (let i = -1; i <= 1; i++) {
                const legY = bob + i * (size * 0.3);
                const movement = Math.sin(bug.legPhase + i + (side > 0 ? 0 : Math.PI)) * (size * 0.15);
                ctx.beginPath();
                ctx.moveTo(side * size * 0.12, legY);
                ctx.lineTo(side * size * 0.55 + movement, legY + size * 0.25);
                ctx.stroke();
            }
        }
        // Textured body
        const bodyGrad = ctx.createRadialGradient(-size*0.1, bob-size*0.1, size*0.05, 0, bob, size*0.7);
        bodyGrad.addColorStop(0, '#A09080'); bodyGrad.addColorStop(0.5, '#7A6B5A'); bodyGrad.addColorStop(1, '#4A3A2A');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.65, size*0.85, 0, 0, Math.PI*2); ctx.fill();
        // Texture bumps
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        for (let i = 0; i < 8; i++) {
            ctx.beginPath();
            ctx.arc((Math.sin(i*1.5)-0.5)*size*0.4, bob+(Math.cos(i*1.5)-0.5)*size*0.5, size*0.06, 0, Math.PI*2);
            ctx.fill();
        }
        // Head
        ctx.fillStyle = '#5A4A3A';
        ctx.beginPath(); ctx.arc(0, bob-size*0.85, size*0.25, 0, Math.PI*2); ctx.fill();
        // Eyes
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = 'white';
            ctx.beginPath(); ctx.arc(side*size*0.1, bob-size*0.9, size*0.08, 0, Math.PI*2); ctx.fill();
            ctx.fillStyle = '#111';
            ctx.beginPath(); ctx.arc(side*size*0.12, bob-size*0.9, size*0.04, 0, Math.PI*2); ctx.fill();
        }
        // Antennae
        ctx.strokeStyle = '#3A2A1A'; ctx.lineWidth = 0.8;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.08, bob-size*1.05);
            ctx.quadraticCurveTo(side*size*0.25, bob-size*1.35, side*size*0.35, bob-size*1.5);
            ctx.stroke();
        }
    }
}