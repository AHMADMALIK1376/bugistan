// ── TROPICAL FISH: Flowing fins, swimming animation, vibrant colors ──────
class Fish {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.2;
        const swimPhase = bug.wobble * 0.6;
        
        // ── FLOWING TAIL FIN ───────────────────────────────
        const tailWave = Math.sin(swimPhase) * size * 0.12;
        ctx.fillStyle = '#FF8C55';
        ctx.beginPath();
        ctx.moveTo(-size * 0.5, bob);
        ctx.quadraticCurveTo(
            -size * 0.75, bob - size * 0.4 + tailWave,
            -size * 0.9 + tailWave, bob - size * 0.35
        );
        ctx.quadraticCurveTo(
            -size * 0.7, bob + size * 0.1,
            -size * 0.85, bob + size * 0.35
        );
        ctx.quadraticCurveTo(
            -size * 0.6, bob + size * 0.05,
            -size * 0.5, bob
        );
        ctx.closePath(); ctx.fill();
        
        // Tail fin rays
        ctx.strokeStyle = 'rgba(255, 220, 180, 0.4)';
        ctx.lineWidth = 0.8;
        for (let r = -1; r <= 1; r++) {
            ctx.beginPath();
            ctx.moveTo(-size * 0.55, bob);
            ctx.quadraticCurveTo(
                -size * 0.7, bob + r * size * 0.2,
                -size * 0.8 + tailWave, bob + r * size * 0.25
            );
            ctx.stroke();
        }
        
        // ── OVAL BODY ──────────────────────────────────────
        const bodyGrad = ctx.createLinearGradient(-size * 0.5, bob, size * 0.5, bob);
        bodyGrad.addColorStop(0, '#FF6B35');
        bodyGrad.addColorStop(0.3, '#FF8C42');
        bodyGrad.addColorStop(0.6, '#FFAA55');
        bodyGrad.addColorStop(1, '#FFCC80');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath();
        ctx.moveTo(-size * 0.45, bob - size * 0.22);
        ctx.quadraticCurveTo(0, bob - size * 0.32, size * 0.4, bob - size * 0.2);
        ctx.quadraticCurveTo(size * 0.5, bob, size * 0.4, bob + size * 0.22);
        ctx.quadraticCurveTo(0, bob + size * 0.28, -size * 0.45, bob + size * 0.18);
        ctx.closePath(); ctx.fill();
        
        // ── BODY OUTLINE ───────────────────────────────────
        ctx.strokeStyle = 'rgba(200, 80, 30, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-size * 0.45, bob - size * 0.22);
        ctx.quadraticCurveTo(0, bob - size * 0.32, size * 0.4, bob - size * 0.2);
        ctx.quadraticCurveTo(size * 0.5, bob, size * 0.4, bob + size * 0.22);
        ctx.quadraticCurveTo(0, bob + size * 0.28, -size * 0.45, bob + size * 0.18);
        ctx.closePath(); ctx.stroke();
        
        // ── SCALES PATTERN ─────────────────────────────────
        ctx.strokeStyle = 'rgba(255, 220, 180, 0.35)';
        ctx.lineWidth = 0.7;
        for (let row = 0; row < 3; row++) {
            for (let col = -1; col <= 1; col++) {
                const sx = col * size * 0.2;
                const sy = bob - size * 0.08 + row * size * 0.12;
                ctx.beginPath();
                ctx.arc(sx, sy, size * 0.07, 0, Math.PI);
                ctx.stroke();
            }
        }
        
        // ── LATERAL LINE ───────────────────────────────────
        ctx.strokeStyle = 'rgba(255, 200, 150, 0.4)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([3, 4]);
        ctx.beginPath();
        ctx.moveTo(-size * 0.4, bob - size * 0.02);
        ctx.quadraticCurveTo(0, bob - size * 0.05, size * 0.35, bob - size * 0.02);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // ── FLOWING DORSAL FIN ─────────────────────────────
        const dorsalWave = Math.sin(swimPhase * 1.3) * size * 0.08;
        ctx.fillStyle = 'rgba(255, 150, 80, 0.8)';
        ctx.beginPath();
        ctx.moveTo(-size * 0.15, bob - size * 0.25);
        ctx.quadraticCurveTo(
            size * 0.05, bob - size * 0.55 + dorsalWave,
            size * 0.2, bob - size * 0.22
        );
        ctx.quadraticCurveTo(
            size * 0.1, bob - size * 0.2,
            -size * 0.1, bob - size * 0.22
        );
        ctx.closePath(); ctx.fill();
        
        // Dorsal fin rays
        ctx.strokeStyle = 'rgba(255, 200, 150, 0.4)';
        ctx.lineWidth = 0.6;
        for (let r = 0; r < 3; r++) {
            const rx = -size * 0.1 + r * size * 0.1;
            ctx.beginPath();
            ctx.moveTo(rx, bob - size * 0.23);
            ctx.quadraticCurveTo(
                rx + size * 0.05,
                bob - size * 0.45 + dorsalWave,
                rx + size * 0.08,
                bob - size * 0.55 + dorsalWave
            );
            ctx.stroke();
        }
        
        // ── FLOWING PECTORAL FIN ──────────────────────────
        const pectoralWave = Math.sin(swimPhase + 1) * size * 0.08;
        ctx.fillStyle = 'rgba(255, 140, 80, 0.55)';
        ctx.beginPath();
        ctx.moveTo(-size * 0.1, bob + size * 0.1);
        ctx.quadraticCurveTo(
            -size * 0.25, bob + size * 0.35 + pectoralWave,
            size * 0.05, bob + size * 0.2
        );
        ctx.quadraticCurveTo(
            size * 0.02, bob + size * 0.12,
            -size * 0.05, bob + size * 0.08
        );
        ctx.closePath(); ctx.fill();
        
        // ── VENTRAL FIN ────────────────────────────────────
        ctx.fillStyle = 'rgba(255, 140, 80, 0.5)';
        ctx.beginPath();
        ctx.moveTo(-size * 0.2, bob + size * 0.18);
        ctx.quadraticCurveTo(
            -size * 0.22, bob + size * 0.35,
            -size * 0.15, bob + size * 0.2
        );
        ctx.quadraticCurveTo(
            -size * 0.18, bob + size * 0.16,
            -size * 0.2, bob + size * 0.18
        );
        ctx.closePath(); ctx.fill();
        
        // ── LARGE EXPRESSIVE EYE ───────────────────────────
        // Eye socket
        ctx.fillStyle = '#CC4400';
        ctx.beginPath();
        ctx.arc(size * 0.28, bob - size * 0.06, size * 0.13, 0, Math.PI * 2);
        ctx.fill();
        
        // Eye white
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(size * 0.28, bob - size * 0.06, size * 0.1, 0, Math.PI * 2);
        ctx.fill();
        
        // Iris
        ctx.fillStyle = '#111';
        ctx.beginPath();
        ctx.arc(size * 0.3, bob - size * 0.06, size * 0.06, 0, Math.PI * 2);
        ctx.fill();
        
        // Eye gleam
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(size * 0.28, bob - size * 0.09, size * 0.03, 0, Math.PI * 2);
        ctx.fill();
        
        // ── CUTE MOUTH ─────────────────────────────────────
        ctx.strokeStyle = '#CC4400';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(size * 0.4, bob + size * 0.06, size * 0.06, 0.2, Math.PI - 0.2);
        ctx.stroke();
        
        // ── RISING BUBBLES ─────────────────────────────────
        const bubblePhase = (bug.wobble * 3) % (Math.PI * 2);
        for (let b = 0; b < 2; b++) {
            const bx = size * 0.45 + b * size * 0.1;
            const by = bob - size * 0.2 - b * size * 0.15 - Math.sin(bubblePhase + b) * size * 0.1;
            ctx.fillStyle = 'rgba(200, 230, 255, 0.35)';
            ctx.beginPath();
            ctx.arc(bx, by, size * 0.04 + b * size * 0.02, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.beginPath();
            ctx.arc(bx - size * 0.01, by - size * 0.01, size * 0.015, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // ── BODY SHINE ─────────────────────────────────────
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.beginPath();
        ctx.ellipse(-size * 0.05, bob - size * 0.1, size * 0.15, size * 0.06, -0.2, 0, Math.PI * 2);
        ctx.fill();
    }
}