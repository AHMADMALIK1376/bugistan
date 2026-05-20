// ── ALIEN: Green extraterrestrial, large head, big eyes ──────
class Alien {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.2;
        // Antigravity glow
        const glowGrad = ctx.createRadialGradient(0, bob, 0, 0, bob, size * 0.8);
        glowGrad.addColorStop(0, 'rgba(100, 255, 100, 0.2)');
        glowGrad.addColorStop(1, 'rgba(0, 255, 0, 0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath(); ctx.arc(0, bob, size * 0.8, 0, Math.PI * 2); ctx.fill();
        // Large head
        const headGrad = ctx.createRadialGradient(-size * 0.1, bob - size * 0.35, size * 0.05, 0, bob - size * 0.25, size * 0.6);
        headGrad.addColorStop(0, '#69F0AE');
        headGrad.addColorStop(0.5, '#00E676');
        headGrad.addColorStop(1, '#00C853');
        ctx.fillStyle = headGrad;
        ctx.beginPath(); ctx.ellipse(0, bob - size * 0.3, size * 0.4, size * 0.5, 0, 0, Math.PI * 2); ctx.fill();
        // Head outline
        ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.ellipse(0, bob - size * 0.3, size * 0.4, size * 0.5, 0, 0, Math.PI * 2); ctx.stroke();
        // Large alien eyes
        for (let side = -1; side <= 1; side += 2) {
            // Eye socket
            ctx.fillStyle = '#1B5E20';
            ctx.beginPath(); ctx.ellipse(side * size * 0.18, bob - size * 0.4, size * 0.16, size * 0.2, 0, 0, Math.PI * 2); ctx.fill();
            // Eye
            ctx.fillStyle = 'black';
            ctx.beginPath(); ctx.ellipse(side * size * 0.18, bob - size * 0.4, size * 0.14, size * 0.18, 0, 0, Math.PI * 2); ctx.fill();
            // Eye shine
            ctx.fillStyle = 'white';
            ctx.beginPath(); ctx.arc(side * size * 0.15, bob - size * 0.48, size * 0.05, 0, Math.PI * 2); ctx.fill();
        }
        // Tiny mouth
        ctx.strokeStyle = '#00C853'; ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, bob - size * 0.15, size * 0.06, 0.2, Math.PI - 0.2); ctx.stroke();
        // Slender body
        const bodyGrad = ctx.createLinearGradient(0, bob - size * 0.1, 0, bob + size * 0.4);
        bodyGrad.addColorStop(0, '#69F0AE');
        bodyGrad.addColorStop(1, '#00C853');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.ellipse(0, bob + size * 0.15, size * 0.15, size * 0.3, 0, 0, Math.PI * 2); ctx.fill();
        // Tiny arms
        ctx.strokeStyle = '#69F0AE'; ctx.lineWidth = size * 0.06;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side * size * 0.1, bob);
            ctx.quadraticCurveTo(side * size * 0.4, bob - size * 0.1, side * size * 0.35, bob - size * 0.3);
            ctx.stroke();
            // Three fingers
            ctx.fillStyle = '#69F0AE';
            for (let f = -1; f <= 1; f++) {
                ctx.beginPath();
                ctx.arc(side * size * 0.35 + f * size * 0.03, bob - size * 0.32, size * 0.03, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        // Antenna
        ctx.strokeStyle = '#69F0AE'; ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, bob - size * 0.75);
        ctx.quadraticCurveTo(size * 0.1, bob - size * 1.0, size * 0.15 + Math.sin(bug.antennaPhase) * size * 0.05, bob - size * 1.1);
        ctx.stroke();
        // Antenna bulb
        const bulbGrad = ctx.createRadialGradient(0, 0, 0, size * 0.15, bob - size * 1.1, size * 0.08);
        bulbGrad.addColorStop(0, '#FF0000');
        bulbGrad.addColorStop(1, '#880000');
        ctx.fillStyle = bulbGrad;
        ctx.beginPath();
        ctx.arc(size * 0.15 + Math.sin(bug.antennaPhase) * size * 0.05, bob - size * 1.1, size * 0.07, 0, Math.PI * 2);
        ctx.fill();
    }
}