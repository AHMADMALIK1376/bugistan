// ── MOTH: Fluffy body, large wings with eye spots, feathery antennae ──────
class Moth {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.2;
        // Large wings with eye spots
        const wingFlap = Math.abs(Math.sin(bug.wingPhase)) * 0.6 + 0.4;
        for (let side = -1; side <= 1; side += 2) {
            // Top wing
            ctx.fillStyle = '#8D6E63';
            ctx.beginPath();
            ctx.ellipse(side*size*0.3, bob-size*0.3, size*0.6, size*0.45, side*0.3, 0, Math.PI*2);
            ctx.fill();
            // Wing pattern
            ctx.fillStyle = '#BCAAA4';
            ctx.beginPath();
            ctx.ellipse(side*size*0.35, bob-size*0.2, size*0.2, size*0.15, side*0.2, 0, Math.PI*2);
            ctx.fill();
            // Eye spot
            ctx.fillStyle = '#3E2723';
            ctx.beginPath();
            ctx.arc(side*size*0.4, bob-size*0.15, size*0.08, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#FFD54F';
            ctx.beginPath();
            ctx.arc(side*size*0.4, bob-size*0.15, size*0.04, 0, Math.PI*2);
            ctx.fill();
            // Bottom wing
            ctx.fillStyle = '#A1887F';
            ctx.beginPath();
            ctx.ellipse(side*size*0.25, bob+size*0.05, size*0.45, size*0.3, side*0.2, 0, Math.PI*2);
            ctx.fill();
        }
        // Fluffy body
        const bodyGrad = ctx.createLinearGradient(0, bob-size*0.3, 0, bob+size*0.3);
        bodyGrad.addColorStop(0, '#BCAAA4'); bodyGrad.addColorStop(1, '#6D4C41');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.15, size*0.4, 0, 0, Math.PI*2); ctx.fill();
        // Fluffy texture
        ctx.fillStyle = 'rgba(200,180,160,0.4)';
        for (let i = 0; i < 8; i++) {
            ctx.beginPath();
            ctx.arc((Math.sin(i*2))*size*0.1, bob+(Math.cos(i*2))*size*0.2, size*0.05, 0, Math.PI*2);
            ctx.fill();
        }
        // Head
        ctx.fillStyle = '#8D6E63';
        ctx.beginPath(); ctx.arc(0, bob-size*0.42, size*0.15, 0, Math.PI*2); ctx.fill();
        // Eyes
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath(); ctx.arc(side*size*0.1, bob-size*0.45, size*0.05, 0, Math.PI*2); ctx.fill();
        }
        // Feathery antennae
        ctx.strokeStyle = '#6D4C41'; ctx.lineWidth = 1;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.06, bob-size*0.55);
            ctx.quadraticCurveTo(side*size*0.3, bob-size*0.85, side*size*0.45, bob-size*0.75);
            ctx.stroke();
            // Feather branches
            ctx.lineWidth = 0.5;
            for (let b = 0; b < 4; b++) {
                const bx = side*size*0.12 + b*size*0.08;
                ctx.beginPath();
                ctx.moveTo(bx, bob-size*0.6-b*size*0.05);
                ctx.lineTo(bx+side*size*0.08, bob-size*0.7-b*size*0.05);
                ctx.stroke();
            }
        }
        // Legs
        ctx.strokeStyle = '#6D4C41'; ctx.lineWidth = size * 0.04;
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.moveTo(side*size*0.08, bob-size*0.1+i*size*0.15);
                ctx.lineTo(side*size*0.3, bob+size*0.1+i*size*0.1);
                ctx.stroke();
            }
        }
    }
}