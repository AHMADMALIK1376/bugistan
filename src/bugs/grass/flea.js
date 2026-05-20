// ── FLEA: Tiny, round, powerful jumping legs ──────
class Flea {
    static draw(ctx, s, bob, bug) {
        const size = s * 0.9;
        // Powerful back jumping legs
        for (let side = -1; side <= 1; side += 2) {
            ctx.strokeStyle = '#3E2723'; ctx.lineWidth = size * 0.18;
            ctx.beginPath();
            ctx.moveTo(side * size * 0.1, bob + size * 0.1);
            ctx.quadraticCurveTo(side * size * 0.7, bob + size * 1.0, side * size * 0.5, bob + size * 0.5);
            ctx.stroke();
        }
        // Round compressed body
        const bodyGrad = ctx.createRadialGradient(0, bob-size*0.1, size*0.05, 0, bob, size*0.55);
        bodyGrad.addColorStop(0, '#5D4037'); bodyGrad.addColorStop(0.5, '#3E2723'); bodyGrad.addColorStop(1, '#1B0000');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.arc(0, bob, size*0.45, 0, Math.PI*2); ctx.fill();
        // Gloss
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.beginPath(); ctx.arc(-size*0.1, bob-size*0.15, size*0.15, 0, Math.PI*2); ctx.fill();
        // Tiny head
        ctx.fillStyle = '#4E342E';
        ctx.beginPath(); ctx.arc(0, bob-size*0.5, size*0.18, 0, Math.PI*2); ctx.fill();
        // Tiny eye
        ctx.fillStyle = '#FF0000';
        ctx.beginPath(); ctx.arc(size*0.08, bob-size*0.52, size*0.04, 0, Math.PI*2); ctx.fill();
        // Front legs
        ctx.strokeStyle = '#3E2723'; ctx.lineWidth = size * 0.08;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.1, bob-size*0.3);
            ctx.lineTo(side*size*0.4, bob-size*0.05);
            ctx.stroke();
        }
    }
}