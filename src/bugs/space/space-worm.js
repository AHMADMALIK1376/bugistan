// ── SPACE WORM: Replaced with a CUTE BABY ALIEN CREATURE ──────
class SpaceWorm {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.3;
        
        // ── BODY GLOW ──────────────────────────────────────
        const glowGrad = ctx.createRadialGradient(0, bob, 0, 0, bob, size * 0.9);
        glowGrad.addColorStop(0, 'rgba(150, 255, 200, 0.15)');
        glowGrad.addColorStop(1, 'rgba(0, 255, 100, 0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath(); ctx.arc(0, bob, size * 0.9, 0, Math.PI * 2); ctx.fill();
        
        // ── ROUND CHUBBY BODY ─────────────────────────────
        const bodyGrad = ctx.createRadialGradient(-size * 0.1, bob + size * 0.1, size * 0.05, 0, bob + size * 0.15, size * 0.6);
        bodyGrad.addColorStop(0, '#7CFF6B');
        bodyGrad.addColorStop(0.4, '#00E676');
        bodyGrad.addColorStop(0.8, '#009944');
        bodyGrad.addColorStop(1, '#005522');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath();
        ctx.arc(0, bob + size * 0.1, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Body outline
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, bob + size * 0.1, size * 0.5, 0, Math.PI * 2);
        ctx.stroke();
        
        // Body spots
        ctx.fillStyle = 'rgba(255, 255, 200, 0.4)';
        for (let i = 0; i < 4; i++) {
            const sx = Math.sin(i * 2.5) * size * 0.3;
            const sy = bob + size * 0.1 + Math.cos(i * 2.5) * size * 0.25;
            ctx.beginPath();
            ctx.arc(sx, sy, size * 0.08, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // ── TINY WINGS ────────────────────────────────────
        const wingFlap = Math.abs(Math.sin(bug.wingPhase * 3)) * 0.6 + 0.4;
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = 'rgba(200, 255, 200, 0.4)';
            ctx.beginPath();
            ctx.ellipse(
                side * size * 0.45,
                bob - size * 0.05,
                size * 0.35,
                size * 0.15,
                side * 0.4,
                0, Math.PI * 2
            );
            ctx.fill();
        }
        
        // ── BIG CUTE HEAD ─────────────────────────────────
        const headGrad = ctx.createRadialGradient(
            size * 0.05, bob - size * 0.55, size * 0.03,
            0, bob - size * 0.5, size * 0.4
        );
        headGrad.addColorStop(0, '#B9F6CA');
        headGrad.addColorStop(0.5, '#69F0AE');
        headGrad.addColorStop(1, '#1B8A3A');
        ctx.fillStyle = headGrad;
        ctx.beginPath();
        ctx.arc(0, bob - size * 0.45, size * 0.35, 0, Math.PI * 2);
        ctx.fill();
        
        // Head outline
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(0, bob - size * 0.45, size * 0.35, 0, Math.PI * 2);
        ctx.stroke();
        
        // ── BIG KAWAII EYES ───────────────────────────────
        for (let side = -1; side <= 1; side += 2) {
            // Eye white
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(side * size * 0.15, bob - size * 0.52, size * 0.13, 0, Math.PI * 2);
            ctx.fill();
            
            // Iris (cosmic purple)
            const irisGrad = ctx.createRadialGradient(
                side * size * 0.16, bob - size * 0.52, 0,
                side * size * 0.15, bob - size * 0.52, size * 0.09
            );
            irisGrad.addColorStop(0, '#E040FB');
            irisGrad.addColorStop(0.5, '#7C4DFF');
            irisGrad.addColorStop(1, '#311B92');
            ctx.fillStyle = irisGrad;
            ctx.beginPath();
            ctx.arc(side * size * 0.16, bob - size * 0.52, size * 0.09, 0, Math.PI * 2);
            ctx.fill();
            
            // Pupil
            ctx.fillStyle = '#111';
            ctx.beginPath();
            ctx.arc(side * size * 0.17, bob - size * 0.52, size * 0.04, 0, Math.PI * 2);
            ctx.fill();
            
            // Eye shine
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(side * size * 0.14, bob - size * 0.57, size * 0.04, 0, Math.PI * 2);
            ctx.fill();
            
            // Tiny extra shine
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(side * size * 0.18, bob - size * 0.5, size * 0.02, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // ── CUTE SMILE ────────────────────────────────────
        ctx.strokeStyle = '#1B5E20';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(0, bob - size * 0.38, size * 0.1, 0.3, Math.PI - 0.3);
        ctx.stroke();
        
        // ── PINK BLUSH ────────────────────────────────────
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = 'rgba(255, 150, 200, 0.3)';
            ctx.beginPath();
            ctx.arc(side * size * 0.28, bob - size * 0.4, size * 0.07, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // ── ANTENNAE WITH GLOWING TIPS ────────────────────
        ctx.strokeStyle = '#69F0AE';
        ctx.lineWidth = 0.8;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side * size * 0.1, bob - size * 0.75);
            ctx.quadraticCurveTo(
                side * size * 0.25,
                bob - size * 1.0 + Math.sin(bug.antennaPhase + side) * size * 0.08,
                side * size * 0.3 + Math.sin(bug.antennaPhase + side) * size * 0.05,
                bob - size * 1.1
            );
            ctx.stroke();
            
            // Glowing tip
            const tipX = side * size * 0.3 + Math.sin(bug.antennaPhase + side) * size * 0.05;
            const tipY = bob - size * 1.1;
            const tipGlow = ctx.createRadialGradient(tipX, tipY, 0, tipX, tipY, size * 0.1);
            tipGlow.addColorStop(0, 'rgba(0, 255, 200, 0.8)');
            tipGlow.addColorStop(1, 'rgba(0, 200, 150, 0)');
            ctx.fillStyle = tipGlow;
            ctx.beginPath();
            ctx.arc(tipX, tipY, size * 0.1, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = '#00FFAA';
            ctx.beginPath();
            ctx.arc(tipX, tipY, size * 0.05, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // ── TINY ARMS ─────────────────────────────────────
        ctx.strokeStyle = '#69F0AE';
        ctx.lineWidth = size * 0.06;
        ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side * size * 0.25, bob - size * 0.1);
            ctx.quadraticCurveTo(
                side * size * 0.5,
                bob - size * 0.25 + Math.sin(bug.legPhase + side) * size * 0.05,
                side * size * 0.4,
                bob - size * 0.35
            );
            ctx.stroke();
        }
        
        // ── TINY FEET ─────────────────────────────────────
        ctx.strokeStyle = '#69F0AE';
        ctx.lineWidth = size * 0.06;
        ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side * size * 0.2, bob + size * 0.4);
            ctx.lineTo(side * size * 0.35, bob + size * 0.55);
            ctx.stroke();
        }
    }
}