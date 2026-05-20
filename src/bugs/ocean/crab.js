// ── CRAB: Side-walking, big claws, round shell ──────
class Crab {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.2;
        // Walking legs
        ctx.strokeStyle = '#C62828'; ctx.lineWidth = size * 0.08; ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const lx = side*size*0.2;
                const ly = bob + size*0.1 + i*size*0.15;
                ctx.beginPath();
                ctx.moveTo(lx, ly);
                ctx.quadraticCurveTo(side*size*0.6, ly+size*0.15, side*size*0.7, ly+size*0.25);
                ctx.stroke();
                // Leg tip
                ctx.fillStyle = '#8B0000';
                ctx.beginPath();
                ctx.arc(side*size*0.7, ly+size*0.25, size*0.04, 0, Math.PI*2); ctx.fill();
            }
        }
        // Big claws
        for (let side = -1; side <= 1; side += 2) {
            ctx.strokeStyle = '#B71C1C'; ctx.lineWidth = size * 0.12;
            ctx.beginPath();
            ctx.moveTo(side*size*0.25, bob-size*0.2);
            ctx.quadraticCurveTo(side*size*0.7, bob-size*0.4, side*size*0.6, bob-size*0.3);
            ctx.stroke();
            // Claw pincer
            ctx.fillStyle = '#D32F2F';
            ctx.beginPath(); ctx.arc(side*size*0.65, bob-size*0.35, size*0.2, 0, Math.PI*2); ctx.fill();
            // Claw opening
            ctx.fillStyle = '#FFCDD2';
            ctx.beginPath();
            ctx.arc(side*size*0.7, bob-size*0.4, size*0.08, 0, Math.PI); ctx.fill();
        }
        // Round shell
        const shellGrad = ctx.createRadialGradient(-size*0.1, bob-size*0.05, size*0.05, 0, bob, size*0.55);
        shellGrad.addColorStop(0, '#E53935'); shellGrad.addColorStop(0.5, '#C62828'); shellGrad.addColorStop(1, '#7F0000');
        ctx.fillStyle = shellGrad;
        ctx.beginPath(); ctx.arc(0, bob, size*0.45, 0, Math.PI*2); ctx.fill();
        // Shell pattern
        ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, bob-size*0.4);
        ctx.quadraticCurveTo(size*0.2, bob-size*0.1, 0, bob+size*0.2);
        ctx.stroke();
        // Eye stalks
        for (let side = -1; side <= 1; side += 2) {
            ctx.strokeStyle = '#B71C1C'; ctx.lineWidth = size * 0.06;
            ctx.beginPath();
            ctx.moveTo(side*size*0.1, bob-size*0.35);
            ctx.lineTo(side*size*0.15, bob-size*0.55);
            ctx.stroke();
            // Eye
            ctx.fillStyle = '#111';
            ctx.beginPath(); ctx.arc(side*size*0.15, bob-size*0.55, size*0.06, 0, Math.PI*2); ctx.fill();
        }
    }
}