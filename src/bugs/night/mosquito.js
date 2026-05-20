// ── MOSQUITO: Needle proboscis, delicate wings, long legs ──────
class Mosquito {
    static draw(ctx, s, bob, bug) {
        const size = s * 0.9;
        // Needle proboscis
        ctx.strokeStyle = '#1A1A1A'; ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, bob-size*0.45);
        ctx.lineTo(0, bob-size*0.9);
        ctx.stroke();
        // Delicate wings
        ctx.fillStyle = 'rgba(200,200,220,0.35)';
        const wingFlap = Math.abs(Math.sin(bug.wingPhase * 2)) * 0.5 + 0.5;
        ctx.beginPath(); ctx.ellipse(size*0.15, bob-size*0.35, size*0.35, size*0.15, -0.2, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(-size*0.15, bob-size*0.35, size*0.35, size*0.15, 0.2, 0, Math.PI*2); ctx.fill();
        // Slender body
        ctx.fillStyle = '#455A64';
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.06, size*0.35, 0, 0, Math.PI*2); ctx.fill();
        // Thorax
        ctx.fillStyle = '#37474F';
        ctx.beginPath(); ctx.arc(0, bob-size*0.25, size*0.1, 0, Math.PI*2); ctx.fill();
        // Head
        ctx.fillStyle = '#263238';
        ctx.beginPath(); ctx.arc(0, bob-size*0.42, size*0.08, 0, Math.PI*2); ctx.fill();
        // Eyes
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = '#FF0000';
            ctx.beginPath(); ctx.arc(side*size*0.06, bob-size*0.44, size*0.04, 0, Math.PI*2); ctx.fill();
        }
        // Long dangling legs
        ctx.strokeStyle = '#37474F'; ctx.lineWidth = 0.4;
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const lx = side*size*0.08;
                const ly = bob-size*0.1+i*size*0.12;
                ctx.beginPath();
                ctx.moveTo(lx, ly);
                ctx.quadraticCurveTo(side*size*0.3, ly+size*0.4, side*size*0.25, ly+size*0.8);
                ctx.stroke();
            }
        }
        // Antennae
        ctx.strokeStyle = '#37474F'; ctx.lineWidth = 0.4;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.03, bob-size*0.48);
            ctx.lineTo(side*size*0.2, bob-size*0.65);
            ctx.stroke();
        }
    }
}