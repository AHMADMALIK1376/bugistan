// ── DESERT LOCUST: Large jumping legs, wings, big eyes ──────
class DesertLocust {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.3;
        // Back jumping legs
        for (let side = -1; side <= 1; side += 2) {
            ctx.strokeStyle = '#6B3A1A'; ctx.lineWidth = size * 0.12;
            ctx.beginPath();
            ctx.moveTo(side * size * 0.15, bob + size * 0.2);
            ctx.quadraticCurveTo(side * size * 0.6, bob + size * 0.8, side * size * 0.4, bob + size * 0.6);
            ctx.stroke();
        }
        // Front legs
        ctx.strokeStyle = '#8B5A2A'; ctx.lineWidth = size * 0.07;
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 2; i++) {
                ctx.beginPath();
                ctx.moveTo(side * size * 0.1, bob - size * 0.1 + i * size * 0.2);
                ctx.lineTo(side * size * 0.5, bob + size * 0.3 + i * size * 0.1);
                ctx.stroke();
            }
        }
        // Body
        const bodyGrad = ctx.createLinearGradient(0, bob-size*0.6, 0, bob+size*0.6);
        bodyGrad.addColorStop(0, '#D4A030'); bodyGrad.addColorStop(0.5, '#B8860B'); bodyGrad.addColorStop(1, '#8B6508');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.4, size*0.65, 0, 0, Math.PI*2); ctx.fill();
        // Wings
        ctx.fillStyle = 'rgba(200,180,140,0.4)';
        ctx.beginPath(); ctx.ellipse(size*0.1, bob-size*0.2, size*0.6, size*0.25, -0.3, 0, Math.PI*2); ctx.fill();
        // Head
        ctx.fillStyle = '#9B7010';
        ctx.beginPath(); ctx.arc(0, bob-size*0.7, size*0.25, 0, Math.PI*2); ctx.fill();
        // Big compound eyes
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath(); ctx.arc(side*size*0.15, bob-size*0.75, size*0.1, 0, Math.PI*2); ctx.fill();
            ctx.fillStyle = '#111';
            ctx.beginPath(); ctx.arc(side*size*0.16, bob-size*0.75, size*0.04, 0, Math.PI*2); ctx.fill();
        }
        // Antennae
        ctx.strokeStyle = '#6B3A1A'; ctx.lineWidth = 0.7;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.08, bob-size*0.9);
            ctx.lineTo(side*size*0.2, bob-size*1.2);
            ctx.stroke();
        }
    }
}