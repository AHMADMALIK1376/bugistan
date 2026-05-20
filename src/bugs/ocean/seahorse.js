// ── SEAHORSE: Curled tail, coronet, delicate fins ──────
class Seahorse {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.1;
        // Curled tail
        ctx.strokeStyle = '#FFD54F'; ctx.lineWidth = size * 0.15;
        ctx.beginPath();
        ctx.moveTo(0, bob + size * 0.3);
        ctx.quadraticCurveTo(size*0.2, bob+size*0.6, -size*0.05, bob+size*0.5);
        ctx.stroke();
        // Tail curl
        ctx.fillStyle = '#FFD54F';
        ctx.beginPath(); ctx.arc(-size*0.02, bob+size*0.52, size*0.12, 0, Math.PI*2); ctx.fill();
        // Body
        const bodyGrad = ctx.createLinearGradient(0, bob-size*0.4, 0, bob+size*0.3);
        bodyGrad.addColorStop(0, '#FFE082'); bodyGrad.addColorStop(0.5, '#FFD54F'); bodyGrad.addColorStop(1, '#FFC107');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath();
        ctx.moveTo(-size*0.2, bob-size*0.35);
        ctx.quadraticCurveTo(-size*0.35, bob-size*0.05, -size*0.15, bob+size*0.2);
        ctx.quadraticCurveTo(0, bob+size*0.35, size*0.15, bob+size*0.2);
        ctx.quadraticCurveTo(size*0.35, bob-size*0.05, size*0.2, bob-size*0.35);
        ctx.closePath(); ctx.fill();
        // Body ridges
        ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
            const ry = bob-size*0.2+i*size*0.12;
            ctx.beginPath();
            ctx.moveTo(-size*0.2, ry); ctx.lineTo(size*0.2, ry); ctx.stroke();
        }
        // Dorsal fin
        ctx.fillStyle = 'rgba(255,200,100,0.6)';
        ctx.beginPath();
        ctx.ellipse(0, bob-size*0.1, size*0.15, size*0.3, 0, 0, Math.PI*2); ctx.fill();
        // Head
        ctx.fillStyle = '#FFE082';
        ctx.beginPath(); ctx.arc(0, bob-size*0.4, size*0.2, 0, Math.PI*2); ctx.fill();
        // Snout
        ctx.fillStyle = '#FFD54F';
        ctx.beginPath(); ctx.ellipse(size*0.25, bob-size*0.42, size*0.15, size*0.06, 0, 0, Math.PI*2); ctx.fill();
        // Eye
        ctx.fillStyle = 'white';
        ctx.beginPath(); ctx.arc(size*0.08, bob-size*0.48, size*0.08, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#111';
        ctx.beginPath(); ctx.arc(size*0.09, bob-size*0.48, size*0.04, 0, Math.PI*2); ctx.fill();
        // Coronet (crown)
        ctx.fillStyle = '#FFAB00';
        ctx.beginPath();
        ctx.moveTo(-size*0.08, bob-size*0.58);
        ctx.lineTo(-size*0.05, bob-size*0.72);
        ctx.lineTo(0, bob-size*0.65);
        ctx.lineTo(size*0.05, bob-size*0.72);
        ctx.lineTo(size*0.08, bob-size*0.58);
        ctx.closePath(); ctx.fill();
    }
}