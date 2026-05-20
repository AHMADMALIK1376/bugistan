// ── STONEFLY: Flat body, veined wings, long antennae ──────
class Stonefly {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.1;
        // Folded veined wings
        ctx.fillStyle = 'rgba(180,190,200,0.4)';
        ctx.beginPath(); ctx.ellipse(size*0.1, bob-size*0.1, size*0.35, size*0.65, -0.1, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(-size*0.1, bob-size*0.1, size*0.35, size*0.65, 0.1, 0, Math.PI*2); ctx.fill();
        // Wing veins
        ctx.strokeStyle = 'rgba(100,110,120,0.3)'; ctx.lineWidth = 0.4;
        for (let side = -1; side <= 1; side += 2) {
            for (let v = 0; v < 4; v++) {
                ctx.beginPath();
                ctx.moveTo(side*size*0.05, bob-size*0.4+v*size*0.15);
                ctx.lineTo(side*size*0.35, bob-size*0.2+v*size*0.1);
                ctx.stroke();
            }
        }
        // Flat body
        const bodyGrad = ctx.createLinearGradient(0, bob-size*0.5, 0, bob+size*0.5);
        bodyGrad.addColorStop(0, '#78909C'); bodyGrad.addColorStop(0.5, '#546E7A'); bodyGrad.addColorStop(1, '#37474F');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.2, size*0.55, 0, 0, Math.PI*2); ctx.fill();
        // Head
        ctx.fillStyle = '#455A64';
        ctx.beginPath(); ctx.arc(0, bob-size*0.55, size*0.18, 0, Math.PI*2); ctx.fill();
        // Eyes
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = '#111';
            ctx.beginPath(); ctx.arc(side*size*0.1, bob-size*0.6, size*0.06, 0, Math.PI*2); ctx.fill();
        }
        // Long antennae
        ctx.strokeStyle = '#546E7A'; ctx.lineWidth = 0.7;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.06, bob-size*0.7);
            ctx.quadraticCurveTo(side*size*0.3, bob-size*1.1, side*size*0.5+Math.sin(bug.antennaPhase)*size*0.1, bob-size*1.2);
            ctx.stroke();
        }
        // Legs
        ctx.strokeStyle = '#546E7A'; ctx.lineWidth = size * 0.06;
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.moveTo(side*size*0.1, bob-size*0.2+i*size*0.2);
                ctx.lineTo(side*size*0.4, bob+size*0.1+i*size*0.15);
                ctx.stroke();
            }
        }
    }
}