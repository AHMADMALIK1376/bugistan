// ── TURTLE: Round shell, flippers, cute face ──────
class Turtle {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.4;
        // Flippers
        ctx.fillStyle = '#388E3C';
        for (let side = -1; side <= 1; side += 2) {
            // Front flipper
            ctx.beginPath();
            ctx.ellipse(side*size*0.55, bob-size*0.1, size*0.3, size*0.12, side*0.3, 0, Math.PI*2);
            ctx.fill();
            // Back flipper
            ctx.beginPath();
            ctx.ellipse(side*size*0.5, bob+size*0.2, size*0.2, size*0.1, -side*0.2, 0, Math.PI*2);
            ctx.fill();
        }
        // Shell
        const shellGrad = ctx.createRadialGradient(-size*0.1, bob-size*0.15, size*0.05, 0, bob, size*0.6);
        shellGrad.addColorStop(0, '#66BB6A'); shellGrad.addColorStop(0.5, '#388E3C'); shellGrad.addColorStop(1, '#1B5E20');
        ctx.fillStyle = shellGrad;
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.55, size*0.45, 0, 0, Math.PI*2); ctx.fill();
        // Shell pattern
        ctx.strokeStyle = 'rgba(0,0,0,0.3)'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(0, bob-size*0.42); ctx.lineTo(0, bob+size*0.42); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(-size*0.45, bob-size*0.1); ctx.lineTo(size*0.45, bob-size*0.1); ctx.stroke();
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(0, bob);
            ctx.quadraticCurveTo(side*size*0.3, bob-size*0.3, side*size*0.35, bob-size*0.35);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, bob);
            ctx.quadraticCurveTo(side*size*0.3, bob+size*0.3, side*size*0.35, bob+size*0.35);
            ctx.stroke();
        }
        // Head
        ctx.fillStyle = '#4CAF50';
        ctx.beginPath(); ctx.arc(0, bob-size*0.55, size*0.22, 0, Math.PI*2); ctx.fill();
        // Eyes
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = 'white';
            ctx.beginPath(); ctx.arc(side*size*0.12, bob-size*0.6, size*0.08, 0, Math.PI*2); ctx.fill();
            ctx.fillStyle = '#111';
            ctx.beginPath(); ctx.arc(side*size*0.13, bob-size*0.6, size*0.04, 0, Math.PI*2); ctx.fill();
        }
        // Smile
        ctx.strokeStyle = '#1B5E20'; ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(0, bob-size*0.48, size*0.08, 0.2, Math.PI-0.2); ctx.stroke();
    }
}