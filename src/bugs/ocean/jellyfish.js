// ── JELLYFISH: Pulsing bell, flowing tentacles ──────
class Jellyfish {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.3;
        const pulse = Math.sin(bug.wobble * 2) * 0.2 + 0.8;
        // Bell glow
        const glowGrad = ctx.createRadialGradient(0, bob-size*0.3, 0, 0, bob-size*0.3, size*0.7);
        glowGrad.addColorStop(0, 'rgba(200, 150, 255, 0.3)');
        glowGrad.addColorStop(1, 'rgba(200, 150, 255, 0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath(); ctx.arc(0, bob-size*0.3, size*0.7, 0, Math.PI*2); ctx.fill();
        // Bell
        const bellGrad = ctx.createRadialGradient(0, bob-size*0.4, size*0.05, 0, bob-size*0.3, size*0.55);
        bellGrad.addColorStop(0, '#EA80FC');
        bellGrad.addColorStop(0.5, '#E040FB');
        bellGrad.addColorStop(1, '#AA00FF');
        ctx.fillStyle = bellGrad;
        ctx.beginPath();
        ctx.arc(0, bob-size*0.3, size*0.5, Math.PI, 0);
        ctx.fill();
        // Bell outline
        ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, bob-size*0.3, size*0.5, Math.PI, 0);
        ctx.stroke();
        // Tentacles
        for (let i = -4; i <= 4; i++) {
            const tx = i * size * 0.1;
            const wave = Math.sin(bug.wobble * 3 + i) * size * 0.15;
            const tentacleGrad = ctx.createLinearGradient(tx, bob, tx+wave, bob+size*0.8*pulse);
            tentacleGrad.addColorStop(0, 'rgba(220, 150, 255, 0.8)');
            tentacleGrad.addColorStop(1, 'rgba(180, 80, 255, 0.2)');
            ctx.strokeStyle = tentacleGrad;
            ctx.lineWidth = 2 - Math.abs(i)*0.2;
            ctx.beginPath();
            ctx.moveTo(tx, bob);
            ctx.quadraticCurveTo(tx+wave, bob+size*0.4*pulse, tx+wave*1.5, bob+size*0.8*pulse);
            ctx.stroke();
        }
        // Gonads (internal organs visible)
        ctx.fillStyle = 'rgba(255, 200, 255, 0.6)';
        ctx.beginPath(); ctx.ellipse(-size*0.15, bob-size*0.2, size*0.12, size*0.18, 0, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(size*0.15, bob-size*0.2, size*0.12, size*0.18, 0, 0, Math.PI*2); ctx.fill();
    }
}