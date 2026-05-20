// ── WATER SCORPION: Long breathing tube tail, raptorial front legs ──────
class WaterScorpion {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.2;
        // Long breathing tube (tail)
        ctx.strokeStyle = '#3A2010'; ctx.lineWidth = size * 0.06;
        ctx.beginPath();
        ctx.moveTo(0, bob+size*0.4);
        ctx.lineTo(0, bob+size*1.2);
        ctx.stroke();
        // Flat oval body
        const bodyGrad = ctx.createRadialGradient(0, bob, size*0.05, 0, bob, size*0.55);
        bodyGrad.addColorStop(0, '#5C3A20'); bodyGrad.addColorStop(0.5, '#3A2010'); bodyGrad.addColorStop(1, '#1A0A00');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.45, size*0.5, 0, 0, Math.PI*2); ctx.fill();
        // Raptorial front legs
        for (let side = -1; side <= 1; side += 2) {
            ctx.strokeStyle = '#4A2810'; ctx.lineWidth = size * 0.1;
            ctx.beginPath();
            ctx.moveTo(side*size*0.2, bob-size*0.3);
            ctx.quadraticCurveTo(side*size*0.5, bob-size*0.6, side*size*0.6, bob-size*0.3);
            ctx.stroke();
        }
        // Walking legs
        ctx.strokeStyle = '#3A2010'; ctx.lineWidth = size * 0.06;
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 2; i++) {
                ctx.beginPath();
                ctx.moveTo(side*size*0.15, bob+size*0.1+i*size*0.2);
                ctx.lineTo(side*size*0.45, bob+size*0.4+i*size*0.1);
                ctx.stroke();
            }
        }
        // Head
        ctx.fillStyle = '#2D1A0A';
        ctx.beginPath(); ctx.arc(0, bob-size*0.5, size*0.18, 0, Math.PI*2); ctx.fill();
        // Eyes
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath(); ctx.arc(side*size*0.1, bob-size*0.55, size*0.05, 0, Math.PI*2); ctx.fill();
        }
    }
}