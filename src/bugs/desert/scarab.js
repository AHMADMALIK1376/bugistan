// ── SACRED SCARAB: Metallic blue-green, pushing a dung ball ──────
class Scarab {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.3;
        // Legs
        ctx.strokeStyle = '#1A3050'; ctx.lineWidth = size * 0.09; ctx.lineCap = 'round';
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
        // Metallic body
        const bodyGrad = ctx.createRadialGradient(-size*0.2, bob-size*0.2, size*0.05, 0, bob, size*0.7);
        bodyGrad.addColorStop(0, '#00CC88'); bodyGrad.addColorStop(0.3, '#0066AA');
        bodyGrad.addColorStop(0.6, '#004488'); bodyGrad.addColorStop(1, '#001133');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.6, size*0.8, 0, 0, Math.PI*2); ctx.fill();
        // Gloss
        const gloss = ctx.createRadialGradient(-size*0.15, bob-size*0.3, 0, -size*0.1, bob-size*0.25, size*0.5);
        gloss.addColorStop(0, 'rgba(255,255,255,0.4)'); gloss.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = gloss;
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.6, size*0.8, 0, 0, Math.PI*2); ctx.fill();
        // Head with horns
        ctx.fillStyle = '#002244';
        ctx.beginPath(); ctx.arc(0, bob-size*0.85, size*0.28, 0, Math.PI*2); ctx.fill();
        // Horn
        ctx.fillStyle = '#003366';
        ctx.beginPath();
        ctx.moveTo(-size*0.15, bob-size*0.95);
        ctx.quadraticCurveTo(0, bob-size*1.4, size*0.15, bob-size*0.95);
        ctx.fill();
        // Eyes
        ctx.fillStyle = '#FFD700';
        ctx.beginPath(); ctx.arc(-size*0.15, bob-size*0.92, size*0.05, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(size*0.15, bob-size*0.92, size*0.05, 0, Math.PI*2); ctx.fill();
    }
}