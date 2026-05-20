// ── FIREFLY: Glowing abdomen, dark body, night flyer ──────
class Firefly {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.0;
        // Glow aura
        const glowGrad = ctx.createRadialGradient(0, bob+size*0.3, 0, 0, bob+size*0.3, size*0.5);
        glowGrad.addColorStop(0, 'rgba(255, 255, 150, 0.6)');
        glowGrad.addColorStop(0.5, 'rgba(255, 255, 100, 0.2)');
        glowGrad.addColorStop(1, 'rgba(255, 255, 50, 0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath(); ctx.arc(0, bob+size*0.3, size*0.5, 0, Math.PI*2); ctx.fill();
        // Pulsing glow
        const pulse = Math.sin(bug.wobble * 3) * 0.3 + 0.7;
        const brightGlow = ctx.createRadialGradient(0, bob+size*0.3, 0, 0, bob+size*0.3, size*0.25);
        brightGlow.addColorStop(0, `rgba(255, 255, 200, ${pulse})`);
        brightGlow.addColorStop(1, 'rgba(255, 255, 100, 0)');
        ctx.fillStyle = brightGlow;
        ctx.beginPath(); ctx.arc(0, bob+size*0.3, size*0.25, 0, Math.PI*2); ctx.fill();
        // Dark body
        ctx.fillStyle = '#1A1A1A';
        ctx.beginPath(); ctx.ellipse(0, bob-size*0.05, size*0.15, size*0.3, 0, 0, Math.PI*2); ctx.fill();
        // Thorax
        ctx.fillStyle = '#2A2A2A';
        ctx.beginPath(); ctx.arc(0, bob-size*0.3, size*0.12, 0, Math.PI*2); ctx.fill();
        // Head
        ctx.fillStyle = '#111';
        ctx.beginPath(); ctx.arc(0, bob-size*0.42, size*0.1, 0, Math.PI*2); ctx.fill();
        // Glowing abdomen
        ctx.fillStyle = `rgba(255, 255, 100, ${0.7 + Math.sin(bug.wobble*3)*0.3})`;
        ctx.beginPath(); ctx.arc(0, bob+size*0.3, size*0.15, 0, Math.PI*2); ctx.fill();
        // Wings
        ctx.fillStyle = 'rgba(200,200,200,0.3)';
        ctx.beginPath(); ctx.ellipse(size*0.2, bob-size*0.25, size*0.4, size*0.15, -0.2, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(-size*0.2, bob-size*0.25, size*0.4, size*0.15, 0.2, 0, Math.PI*2); ctx.fill();
        // Antennae
        ctx.strokeStyle = '#333'; ctx.lineWidth = 0.5;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.04, bob-size*0.5);
            ctx.lineTo(side*size*0.15, bob-size*0.65);
            ctx.stroke();
        }
        // Legs
        ctx.strokeStyle = '#333'; ctx.lineWidth = size * 0.04;
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.moveTo(side*size*0.06, bob-size*0.1+i*size*0.12);
                ctx.lineTo(side*size*0.25, bob+size*0.1+i*size*0.08);
                ctx.stroke();
            }
        }
    }
}