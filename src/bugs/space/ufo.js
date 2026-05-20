// ── UFO: Classic flying saucer, rotating lights, tractor beam ──────
class UFO {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.3;
        // Tractor beam
        const beamGrad = ctx.createLinearGradient(0, bob, 0, bob + size * 0.8);
        beamGrad.addColorStop(0, 'rgba(150, 255, 100, 0.3)');
        beamGrad.addColorStop(1, 'rgba(0, 255, 0, 0)');
        ctx.fillStyle = beamGrad;
        ctx.beginPath();
        ctx.moveTo(-size * 0.25, bob);
        ctx.lineTo(-size * 0.15, bob + size * 0.8);
        ctx.lineTo(size * 0.15, bob + size * 0.8);
        ctx.lineTo(size * 0.25, bob);
        ctx.closePath(); ctx.fill();
        // Dome
        const domeGrad = ctx.createRadialGradient(0, bob - size * 0.15, 0, 0, bob - size * 0.1, size * 0.4);
        domeGrad.addColorStop(0, 'rgba(200, 220, 255, 0.9)');
        domeGrad.addColorStop(0.5, 'rgba(150, 180, 255, 0.6)');
        domeGrad.addColorStop(1, 'rgba(100, 150, 255, 0.2)');
        ctx.fillStyle = domeGrad;
        ctx.beginPath();
        ctx.ellipse(0, bob - size * 0.1, size * 0.35, size * 0.2, 0, Math.PI, 0);
        ctx.fill();
        // Dome outline
        ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(0, bob - size * 0.1, size * 0.35, size * 0.2, 0, Math.PI, 0);
        ctx.stroke();
        // Saucer body
        const saucerGrad = ctx.createLinearGradient(0, bob - size * 0.1, 0, bob + size * 0.2);
        saucerGrad.addColorStop(0, '#9C27B0');
        saucerGrad.addColorStop(0.5, '#7B1FA2');
        saucerGrad.addColorStop(1, '#4A148C');
        ctx.fillStyle = saucerGrad;
        ctx.beginPath();
        ctx.ellipse(0, bob, size * 0.55, size * 0.15, 0, 0, Math.PI * 2);
        ctx.fill();
        // Saucer rim
        ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, bob, size * 0.55, size * 0.15, 0, 0, Math.PI * 2);
        ctx.stroke();
        // Rotating lights
        const numLights = 8;
        for (let i = 0; i < numLights; i++) {
            const angle = (i / numLights) * Math.PI * 2 + bug.wobble * 0.5;
            const lx = Math.cos(angle) * size * 0.5;
            const ly = bob + Math.sin(angle) * size * 0.08;
            const lightOn = Math.sin(bug.wobble * 3 + i) > 0;
            ctx.fillStyle = lightOn ? '#FFFF00' : '#FF6600';
            ctx.beginPath(); ctx.arc(lx, ly, size * 0.04, 0, Math.PI * 2); ctx.fill();
            if (lightOn) {
                ctx.fillStyle = 'rgba(255,255,0,0.3)';
                ctx.beginPath(); ctx.arc(lx, ly, size * 0.08, 0, Math.PI * 2); ctx.fill();
            }
        }
        // Alien inside dome
        ctx.fillStyle = '#69F0AE';
        ctx.beginPath(); ctx.arc(0, bob - size * 0.15, size * 0.1, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'black';
        ctx.beginPath(); ctx.arc(-size * 0.04, bob - size * 0.17, size * 0.03, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(size * 0.04, bob - size * 0.17, size * 0.03, 0, Math.PI * 2); ctx.fill();
    }
}