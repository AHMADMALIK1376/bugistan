// ── MARSH BEETLE: Dark green, aquatic, oval body ──────
class MarshBeetle {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.15;
        // Swimming legs (fringed)
        ctx.strokeStyle = '#2A4A2A'; ctx.lineWidth = size * 0.07; ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) {
            for (let i = -1; i <= 1; i++) {
                const legY = bob + i * (size * 0.3);
                const movement = Math.sin(bug.legPhase + i + (side > 0 ? 0 : Math.PI)) * (size * 0.12);
                ctx.beginPath();
                ctx.moveTo(side * size * 0.12, legY);
                ctx.lineTo(side * size * 0.55 + movement, legY + size * 0.25);
                ctx.stroke();
            }
        }
        // Oval dark green body
        const bodyGrad = ctx.createRadialGradient(-size*0.15, bob-size*0.1, size*0.05, 0, bob, size*0.7);
        bodyGrad.addColorStop(0, '#5A7A4A'); bodyGrad.addColorStop(0.5, '#3D5C3A'); bodyGrad.addColorStop(1, '#1A3A1A');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.6, size*0.75, 0, 0, Math.PI*2); ctx.fill();
        // Gloss
        const gloss = ctx.createRadialGradient(-size*0.15, bob-size*0.2, size*0.03, -size*0.1, bob-size*0.15, size*0.45);
        gloss.addColorStop(0, 'rgba(255,255,255,0.35)'); gloss.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = gloss;
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.6, size*0.75, 0, 0, Math.PI*2); ctx.fill();
        // Head
        ctx.fillStyle = '#2A4A2A';
        ctx.beginPath(); ctx.arc(0, bob-size*0.75, size*0.22, 0, Math.PI*2); ctx.fill();
        // Eyes
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath(); ctx.arc(side*size*0.1, bob-size*0.8, size*0.05, 0, Math.PI*2); ctx.fill();
        }
        // Short antennae
        ctx.strokeStyle = '#2A4A2A'; ctx.lineWidth = 0.7;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.06, bob-size*0.95);
            ctx.lineTo(side*size*0.18, bob-size*1.15);
            ctx.stroke();
        }
    }
}