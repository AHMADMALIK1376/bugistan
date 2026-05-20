// ── CRANE FLY: Extremely long legs, slender body, delicate wings ──────
class CraneFly {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.0;
        // Extremely long dangling legs
        ctx.strokeStyle = '#8B7355'; ctx.lineWidth = 0.5;
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const angle = -0.5 + i * 0.5;
                ctx.beginPath();
                ctx.moveTo(side*size*0.1, bob-size*0.1+i*size*0.15);
                ctx.lineTo(side*size*0.3+Math.sin(bug.legPhase+i)*size*0.1, bob+size*0.3+i*size*0.1);
                ctx.lineTo(side*size*0.2, bob+size*0.9+i*size*0.1);
                ctx.stroke();
            }
        }
        // Delicate wings
        ctx.fillStyle = 'rgba(200,200,210,0.3)';
        ctx.beginPath(); ctx.ellipse(size*0.2, bob-size*0.3, size*0.4, size*0.15, -0.2, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(-size*0.2, bob-size*0.3, size*0.4, size*0.15, 0.2, 0, Math.PI*2); ctx.fill();
        // Slender body
        ctx.fillStyle = '#A09080';
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.08, size*0.4, 0, 0, Math.PI*2); ctx.fill();
        // Head
        ctx.fillStyle = '#8B7B6B';
        ctx.beginPath(); ctx.arc(0, bob-size*0.42, size*0.1, 0, Math.PI*2); ctx.fill();
        // Antennae
        ctx.strokeStyle = '#8B7355'; ctx.lineWidth = 0.5;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.04, bob-size*0.5);
            ctx.lineTo(side*size*0.25, bob-size*0.8);
            ctx.stroke();
        }
    }
}