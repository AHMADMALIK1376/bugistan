// ── DARKLING BEETLE: Black matte shell, slow moving ──────
class DarklingBeetle {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.2;
        // Stubby legs
        ctx.strokeStyle = '#1a1a1a'; ctx.lineWidth = size * 0.1; ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) {
            for (let i = -1; i <= 1; i++) {
                const legY = bob + i * (size * 0.3);
                const movement = Math.sin(bug.legPhase + i) * (size * 0.1);
                ctx.beginPath();
                ctx.moveTo(side * size * 0.15, legY);
                ctx.lineTo(side * size * 0.5 + movement, legY + size * 0.2);
                ctx.stroke();
            }
        }
        // Dark round body
        const bodyGrad = ctx.createRadialGradient(-size*0.15, bob-size*0.15, size*0.05, 0, bob, size*0.75);
        bodyGrad.addColorStop(0, '#3A3A3A'); bodyGrad.addColorStop(0.5, '#1A1A1A'); bodyGrad.addColorStop(1, '#0A0A0A');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.arc(0, bob, size*0.65, 0, Math.PI*2); ctx.fill();
        // Matte texture
        ctx.fillStyle = 'rgba(40,40,40,0.3)';
        for (let i = 0; i < 6; i++) {
            ctx.beginPath();
            ctx.arc((Math.sin(i*2)-0.5)*size*0.3, bob+(Math.cos(i*2)-0.5)*size*0.3, size*0.05, 0, Math.PI*2);
            ctx.fill();
        }
        // Head
        ctx.fillStyle = '#222';
        ctx.beginPath(); ctx.arc(0, bob-size*0.7, size*0.25, 0, Math.PI*2); ctx.fill();
        // Tiny eyes
        ctx.fillStyle = '#FFD700';
        ctx.beginPath(); ctx.arc(-size*0.1, bob-size*0.75, size*0.05, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(size*0.1, bob-size*0.75, size*0.05, 0, Math.PI*2); ctx.fill();
        // Antennae
        ctx.strokeStyle = '#333'; ctx.lineWidth = 0.7;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.06, bob-size*0.9);
            ctx.lineTo(side*size*0.2, bob-size*1.15);
            ctx.stroke();
        }
    }
}