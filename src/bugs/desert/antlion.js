// ── ANTLION: Large jaws, round body, pit-dwelling ──────
class Antlion {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.2;
        // Large curved mandibles
        ctx.strokeStyle = '#4A2810'; ctx.lineWidth = size * 0.1; ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side * size * 0.1, bob - size * 0.5);
            ctx.quadraticCurveTo(side * size * 0.5, bob - size * 0.8, side * size * 0.6, bob - size * 0.4);
            ctx.stroke();
        }
        // Round flat body
        const bodyGrad = ctx.createRadialGradient(0, bob, size*0.1, 0, bob, size*0.6);
        bodyGrad.addColorStop(0, '#8B7355'); bodyGrad.addColorStop(0.5, '#6B4F3A'); bodyGrad.addColorStop(1, '#3A2A1A');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.arc(0, bob, size*0.55, 0, Math.PI*2); ctx.fill();
        // Sand texture
        ctx.fillStyle = 'rgba(180,150,120,0.3)';
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc((Math.sin(i*2.2))*size*0.3, bob+(Math.cos(i*2.2))*size*0.25, size*0.04, 0, Math.PI*2);
            ctx.fill();
        }
        // Tiny eyes
        ctx.fillStyle = '#FFD700';
        ctx.beginPath(); ctx.arc(-size*0.15, bob-size*0.2, size*0.05, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(size*0.15, bob-size*0.2, size*0.05, 0, Math.PI*2); ctx.fill();
        // Short legs
        ctx.strokeStyle = '#5A3A20'; ctx.lineWidth = size * 0.06;
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.moveTo(side * size * 0.2, bob + size * 0.1 + i * size * 0.1);
                ctx.lineTo(side * size * 0.5, bob + size * 0.3 + i * size * 0.05);
                ctx.stroke();
            }
        }
    }
}