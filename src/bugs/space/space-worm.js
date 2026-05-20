// ── SPACE WORM: Cosmic segmented body, nebula glow, stardust trail ──────
class SpaceWorm {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.4;
        // Stardust trail
        for (let i = 0; i < 6; i++) {
            const tx = bug.trail[i]?.x || 0;
            const ty = bug.trail[i]?.y || 0;
            const alpha = 0.15 - i * 0.02;
            if (alpha > 0) {
                ctx.fillStyle = `rgba(200, 150, 255, ${alpha})`;
                ctx.beginPath(); ctx.arc(tx, ty, size * 0.08, 0, Math.PI * 2); ctx.fill();
            }
        }
        // Nebula glow
        const glowGrad = ctx.createRadialGradient(0, bob, 0, 0, bob, size * 0.8);
        glowGrad.addColorStop(0, 'rgba(180, 100, 255, 0.2)');
        glowGrad.addColorStop(1, 'rgba(100, 0, 255, 0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath(); ctx.arc(0, bob, size * 0.8, 0, Math.PI * 2); ctx.fill();
        // Segmented body
        const segs = 8;
        for (let i = segs - 1; i >= 0; i--) {
            const segX = (i - (segs - 1) / 2) * size * 0.35;
            const segY = bob + Math.sin(bug.legPhase + i * 0.7) * size * 0.12;
            const r = size * (0.25 - i * 0.02);
            // Segment body
            const segGrad = ctx.createRadialGradient(segX - r * 0.2, segY - r * 0.2, 0, segX, segY, r);
            segGrad.addColorStop(0, '#B388FF');
            segGrad.addColorStop(0.5, '#7C4DFF');
            segGrad.addColorStop(1, '#311B92');
            ctx.fillStyle = segGrad;
            ctx.beginPath(); ctx.arc(segX, segY, r, 0, Math.PI * 2); ctx.fill();
            // Segment ring
            ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.arc(segX, segY, r, 0, Math.PI * 2); ctx.stroke();
            // Tiny stars on body
            if (i % 2 === 0) {
                ctx.fillStyle = 'white';
                ctx.beginPath(); ctx.arc(segX, segY - r * 0.3, size * 0.03, 0, Math.PI * 2); ctx.fill();
            }
        }
        // Head
        const headX = (0 - (segs - 1) / 2) * size * 0.35;
        const headY = bob + Math.sin(bug.legPhase) * size * 0.12;
        const headGrad = ctx.createRadialGradient(headX - size * 0.1, headY - size * 0.1, 0, headX, headY, size * 0.35);
        headGrad.addColorStop(0, '#D1C4E9');
        headGrad.addColorStop(0.5, '#7C4DFF');
        headGrad.addColorStop(1, '#311B92');
        ctx.fillStyle = headGrad;
        ctx.beginPath(); ctx.arc(headX, headY, size * 0.3, 0, Math.PI * 2); ctx.fill();
        // Cosmic eyes
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = 'white';
            ctx.beginPath(); ctx.arc(headX + side * size * 0.12, headY - size * 0.08, size * 0.09, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#4A148C';
            ctx.beginPath(); ctx.arc(headX + side * size * 0.13, headY - size * 0.08, size * 0.05, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = 'white';
            ctx.beginPath(); ctx.arc(headX + side * size * 0.11, headY - size * 0.11, size * 0.03, 0, Math.PI * 2); ctx.fill();
        }
        // Mouth
        ctx.fillStyle = '#311B92';
        ctx.beginPath(); ctx.arc(headX, headY + size * 0.1, size * 0.08, 0, Math.PI); ctx.fill();
        // Antennae
        ctx.strokeStyle = '#B388FF'; ctx.lineWidth = 1;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(headX + side * size * 0.1, headY - size * 0.25);
            ctx.quadraticCurveTo(
                headX + side * size * 0.3,
                headY - size * 0.55 + Math.sin(bug.antennaPhase + side) * size * 0.1,
                headX + side * size * 0.4,
                headY - size * 0.6
            );
            ctx.stroke();
        }
    }
}