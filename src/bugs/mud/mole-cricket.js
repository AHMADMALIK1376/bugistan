// ── MOLE CRICKET: Shovel front legs, cylindrical body ──────
class MoleCricket {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.2;
        // Large shovel-like front legs
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = '#6B5040';
            ctx.beginPath();
            ctx.ellipse(side*size*0.5, bob-size*0.1, size*0.25, size*0.15, -0.3, 0, Math.PI*2);
            ctx.fill();
            // Claws
            ctx.strokeStyle = '#3A2A1A'; ctx.lineWidth = size * 0.06;
            for (let i = -1; i <= 1; i++) {
                ctx.beginPath();
                ctx.moveTo(side*size*0.45+i*size*0.08, bob-size*0.05);
                ctx.lineTo(side*size*0.65+i*size*0.05, bob-size*0.2);
                ctx.stroke();
            }
        }
        // Cylindrical body
        const bodyGrad = ctx.createLinearGradient(0, bob-size*0.4, 0, bob+size*0.4);
        bodyGrad.addColorStop(0, '#8B7355'); bodyGrad.addColorStop(0.5, '#6B5040'); bodyGrad.addColorStop(1, '#4A3728');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.3, size*0.5, 0, 0, Math.PI*2); ctx.fill();
        // Segments
        ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 0.7;
        for (let i = 0; i < 4; i++) {
            const sy = bob-size*0.2+i*size*0.15;
            ctx.beginPath(); ctx.moveTo(-size*0.25, sy); ctx.lineTo(size*0.25, sy); ctx.stroke();
        }
        // Head
        ctx.fillStyle = '#5C4033';
        ctx.beginPath(); ctx.arc(0, bob-size*0.55, size*0.2, 0, Math.PI*2); ctx.fill();
        // Tiny eyes
        ctx.fillStyle = '#111';
        ctx.beginPath(); ctx.arc(-size*0.1, bob-size*0.6, size*0.04, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(size*0.1, bob-size*0.6, size*0.04, 0, Math.PI*2); ctx.fill();
        // Antennae
        ctx.strokeStyle = '#4A3728'; ctx.lineWidth = 0.7;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.06, bob-size*0.72);
            ctx.lineTo(side*size*0.18, bob-size*0.95);
            ctx.stroke();
        }
    }
}