// ── SHARK: Sleek body, dorsal fin, sharp teeth ──────
class Shark {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.5;
        // Tail fin
        ctx.fillStyle = '#78909C';
        ctx.beginPath();
        ctx.moveTo(-size*0.7, bob);
        ctx.lineTo(-size*1.0, bob-size*0.35);
        ctx.lineTo(-size*0.85, bob+size*0.15);
        ctx.closePath(); ctx.fill();
        // Body
        const bodyGrad = ctx.createLinearGradient(-size*0.7, bob, size*0.5, bob);
        bodyGrad.addColorStop(0, '#607D8B'); bodyGrad.addColorStop(0.5, '#78909C'); bodyGrad.addColorStop(1, '#90A4AE');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.65, size*0.25, 0, 0, Math.PI*2); ctx.fill();
        // Belly
        ctx.fillStyle = '#CFD8DC';
        ctx.beginPath(); ctx.ellipse(size*0.05, bob+size*0.1, size*0.4, size*0.12, 0, 0, Math.PI*2); ctx.fill();
        // Dorsal fin
        ctx.fillStyle = '#546E7A';
        ctx.beginPath();
        ctx.moveTo(-size*0.05, bob-size*0.2);
        ctx.quadraticCurveTo(size*0.05, bob-size*0.6, size*0.2, bob-size*0.2);
        ctx.lineTo(size*0.1, bob-size*0.2); ctx.closePath(); ctx.fill();
        // Pectoral fins
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = '#546E7A';
            ctx.beginPath();
            ctx.moveTo(0, bob+size*0.15);
            ctx.quadraticCurveTo(side*size*0.3, bob+size*0.35, side*size*0.4, bob+size*0.05);
            ctx.lineTo(side*size*0.15, bob+size*0.05); ctx.closePath(); ctx.fill();
        }
        // Head
        ctx.fillStyle = '#607D8B';
        ctx.beginPath(); ctx.arc(size*0.45, bob, size*0.22, 0, Math.PI*2); ctx.fill();
        // Eye
        ctx.fillStyle = 'white';
        ctx.beginPath(); ctx.arc(size*0.5, bob-size*0.06, size*0.08, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#111';
        ctx.beginPath(); ctx.arc(size*0.52, bob-size*0.06, size*0.05, 0, Math.PI*2); ctx.fill();
        // Mouth with teeth
        ctx.fillStyle = '#FFCCCC';
        ctx.beginPath();
        ctx.arc(size*0.6, bob+size*0.08, size*0.08, 0.5, Math.PI-0.5); ctx.fill();
        // Teeth
        ctx.fillStyle = 'white';
        for (let i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.moveTo(size*0.52+i*size*0.04, bob+size*0.1);
            ctx.lineTo(size*0.53+i*size*0.04, bob+size*0.15);
            ctx.lineTo(size*0.56+i*size*0.04, bob+size*0.1);
            ctx.fill();
        }
        // Gills
        ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 1;
        for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(size*0.15+i*size*0.05, bob-size*0.15);
            ctx.quadraticCurveTo(size*0.1+i*size*0.05, bob, size*0.15+i*size*0.05, bob+size*0.1);
            ctx.stroke();
        }
    }
}