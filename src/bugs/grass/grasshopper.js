// ── GRASSHOPPER: Green body, large jumping legs, big eyes ──────
class Grasshopper {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.2;
        // Large back jumping legs
        for (let side = -1; side <= 1; side += 2) {
            ctx.strokeStyle = '#2E7D32'; ctx.lineWidth = size * 0.13;
            ctx.beginPath();
            ctx.moveTo(side * size * 0.1, bob + size * 0.15);
            ctx.quadraticCurveTo(side * size * 0.65, bob + size * 0.85, side * size * 0.45, bob + size * 0.5);
            ctx.stroke();
        }
        // Front legs
        ctx.strokeStyle = '#388E3C'; ctx.lineWidth = size * 0.07;
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 2; i++) {
                ctx.beginPath();
                ctx.moveTo(side * size * 0.1, bob - size * 0.1 + i * size * 0.25);
                ctx.lineTo(side * size * 0.5, bob + size * 0.3 + i * size * 0.1);
                ctx.stroke();
            }
        }
        // Body segments
        const bodyGrad = ctx.createLinearGradient(0, bob-size*0.5, 0, bob+size*0.5);
        bodyGrad.addColorStop(0, '#66BB6A'); bodyGrad.addColorStop(0.5, '#4CAF50'); bodyGrad.addColorStop(1, '#2E7D32');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.4, size*0.6, 0, 0, Math.PI*2); ctx.fill();
        // Head
        ctx.fillStyle = '#81C784';
        ctx.beginPath(); ctx.arc(0, bob-size*0.65, size*0.28, 0, Math.PI*2); ctx.fill();
        // Big compound eyes
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = '#FFE082';
            ctx.beginPath(); ctx.arc(side*size*0.15, bob-size*0.72, size*0.1, 0, Math.PI*2); ctx.fill();
            ctx.fillStyle = '#111';
            ctx.beginPath(); ctx.arc(side*size*0.16, bob-size*0.72, size*0.04, 0, Math.PI*2); ctx.fill();
        }
        // Antennae
        ctx.strokeStyle = '#33691E'; ctx.lineWidth = 0.7;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.06, bob-size*0.9);
            ctx.lineTo(side*size*0.2, bob-size*1.25);
            ctx.stroke();
        }
    }
}