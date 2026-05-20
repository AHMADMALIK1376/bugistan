// ── BEETLE: Cute chibi style, round chubby body, big kawaii eyes ──────
class Beetle {
    static draw(ctx, s, bob, bug) {
        const color = bug.bug.color;
        const color2 = bug.bug.color2;
        const size = s * 1.4;

        // ── 6 CUTE STUBBY LEGS ────────────────────────────
        ctx.strokeStyle = '#4A3520';
        ctx.lineWidth = size * 0.1;
        ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) {
            for (let i = -1; i <= 1; i++) {
                const legY = bob + i * (size * 0.35);
                const movement = Math.sin(bug.legPhase + i + (side > 0 ? 0 : Math.PI)) * (size * 0.2);
                ctx.beginPath();
                ctx.moveTo(side * size * 0.15, legY);
                ctx.lineTo(side * size * 0.6 + movement, legY + size * 0.25);
                ctx.stroke();
                // Tiny foot
                ctx.fillStyle = '#2A1A0A';
                ctx.beginPath();
                ctx.arc(side * size * 0.6 + movement, legY + size * 0.25, size * 0.06, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // ── ROUND CHUBBY BODY ─────────────────────────────
        const bodyGrad = ctx.createRadialGradient(-size * 0.2, bob + size * 0.05, size * 0.1, 0, bob, size * 0.85);
        bodyGrad.addColorStop(0, color2);
        bodyGrad.addColorStop(0.5, color);
        bodyGrad.addColorStop(1, '#3A1A08');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath();
        ctx.arc(0, bob, size * 0.72, 0, Math.PI * 2);
        ctx.fill();

        // Body outline
        ctx.strokeStyle = 'rgba(0,0,0,0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, bob, size * 0.72, 0, Math.PI * 2);
        ctx.stroke();

        // Shell dividing line
        ctx.strokeStyle = 'rgba(0,0,0,0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, bob - size * 0.68);
        ctx.lineTo(0, bob + size * 0.68);
        ctx.stroke();

        // Glossy highlight on shell
        const gloss = ctx.createRadialGradient(-size * 0.2, bob - size * 0.25, size * 0.05, -size * 0.15, bob - size * 0.2, size * 0.55);
        gloss.addColorStop(0, 'rgba(255,255,255,0.6)');
        gloss.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = gloss;
        ctx.beginPath();
        ctx.arc(0, bob, size * 0.72, 0, Math.PI * 2);
        ctx.fill();

        // ── CUTE ROUND HEAD ────────────────────────────────
        const headGrad = ctx.createRadialGradient(0, bob - size * 0.75, size * 0.05, 0, bob - size * 0.7, size * 0.4);
        headGrad.addColorStop(0, color2);
        headGrad.addColorStop(1, '#4A2210');
        ctx.fillStyle = headGrad;
        ctx.beginPath();
        ctx.arc(0, bob - size * 0.7, size * 0.33, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(0,0,0,0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // ── BIG KAWAII EYES ────────────────────────────────
        for (let side = -1; side <= 1; side += 2) {
            // White of eye
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(side * size * 0.16, bob - size * 0.8, size * 0.13, 0, Math.PI * 2);
            ctx.fill();
            // Pupil
            ctx.fillStyle = '#111';
            ctx.beginPath();
            ctx.arc(side * size * 0.18, bob - size * 0.8, size * 0.07, 0, Math.PI * 2);
            ctx.fill();
            // Eye shine
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(side * size * 0.15, bob - size * 0.84, size * 0.035, 0, Math.PI * 2);
            ctx.fill();
            // Pink blush
            ctx.fillStyle = 'rgba(255, 140, 140, 0.45)';
            ctx.beginPath();
            ctx.arc(side * size * 0.32, bob - size * 0.62, size * 0.09, 0, Math.PI * 2);
            ctx.fill();
        }

        // ── CUTE SMILE ─────────────────────────────────────
        ctx.strokeStyle = '#3A1A08';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(0, bob - size * 0.68, size * 0.1, 0.2, Math.PI - 0.2);
        ctx.stroke();

        // ── TINY CURLED ANTENNAE ───────────────────────────
        ctx.strokeStyle = '#5C3A1A';
        ctx.lineWidth = 1;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side * size * 0.08, bob - size * 0.98);
            ctx.quadraticCurveTo(
                side * size * 0.25,
                bob - size * 1.35 + Math.sin(bug.antennaPhase + side) * size * 0.08,
                side * size * 0.35 + Math.sin(bug.antennaPhase + side) * size * 0.12,
                bob - size * 1.45
            );
            ctx.stroke();
            // Antenna tip
            ctx.fillStyle = '#FFCC44';
            ctx.beginPath();
            ctx.arc(side * size * 0.35 + Math.sin(bug.antennaPhase + side) * size * 0.12, bob - size * 1.45, size * 0.06, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}