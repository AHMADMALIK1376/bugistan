// ── LEAFHOPPER: Wedge-shaped, bright green, jumping ──────
class Leafhopper {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.1;
        // Wedge-shaped body
        ctx.fillStyle = '#7CB342';
        ctx.beginPath();
        ctx.moveTo(0, bob-size*0.7);
        ctx.lineTo(size*0.4, bob+size*0.5);
        ctx.lineTo(-size*0.4, bob+size*0.5);
        ctx.closePath(); ctx.fill();
        // Gradient overlay
        const bodyGrad = ctx.createLinearGradient(0, bob-size*0.7, 0, bob+size*0.5);
        bodyGrad.addColorStop(0, '#9CCC65'); bodyGrad.addColorStop(0.5, '#7CB342'); bodyGrad.addColorStop(1, '#558B2F');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath();
        ctx.moveTo(0, bob-size*0.7);
        ctx.lineTo(size*0.4, bob+size*0.5);
        ctx.lineTo(-size*0.4, bob+size*0.5);
        ctx.closePath(); ctx.fill();
        // Veins
        ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.moveTo(0, bob-size*0.65); ctx.lineTo(size*0.2, bob+size*0.3); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, bob-size*0.65); ctx.lineTo(-size*0.2, bob+size*0.3); ctx.stroke();
        // Eyes
        ctx.fillStyle = '#FFD700';
        ctx.beginPath(); ctx.arc(-size*0.2, bob-size*0.35, size*0.08, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(size*0.2, bob-size*0.35, size*0.08, 0, Math.PI*2); ctx.fill();
        // Jumping legs
        ctx.strokeStyle = '#558B2F'; ctx.lineWidth = size * 0.1;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.15, bob+size*0.3);
            ctx.quadraticCurveTo(side*size*0.5, bob+size*0.8, side*size*0.4, bob+size*0.55);
            ctx.stroke();
        }
    }
}