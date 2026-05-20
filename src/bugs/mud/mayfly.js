// ── MAYFLY: Delicate wings, long tail filaments ──────
class Mayfly {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.1;
        // Delicate upright wings
        ctx.fillStyle = 'rgba(200,220,240,0.35)';
        ctx.beginPath(); ctx.ellipse(size*0.15, bob-size*0.6, size*0.3, size*0.7, -0.2, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(-size*0.15, bob-size*0.6, size*0.3, size*0.7, 0.2, 0, Math.PI*2); ctx.fill();
        // Slender body
        const bodyGrad = ctx.createLinearGradient(0, bob-size*0.4, 0, bob+size*0.4);
        bodyGrad.addColorStop(0, '#AAEEAA'); bodyGrad.addColorStop(0.5, '#88CC88'); bodyGrad.addColorStop(1, '#55AA55');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.1, size*0.45, 0, 0, Math.PI*2); ctx.fill();
        // Tail filaments (2 or 3)
        ctx.strokeStyle = '#88CC88'; ctx.lineWidth = 0.6;
        for (let i = -1; i <= 1; i++) {
            ctx.beginPath();
            ctx.moveTo(i*size*0.02, bob+size*0.4);
            ctx.quadraticCurveTo(i*size*0.05, bob+size*0.9, i*size*0.1+Math.sin(bug.wobble+i)*size*0.05, bob+size*1.3);
            ctx.stroke();
        }
        // Head
        ctx.fillStyle = '#99DD99';
        ctx.beginPath(); ctx.arc(0, bob-size*0.45, size*0.14, 0, Math.PI*2); ctx.fill();
        // Big compound eyes
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath(); ctx.arc(side*size*0.1, bob-size*0.48, size*0.07, 0, Math.PI*2); ctx.fill();
        }
    }
}