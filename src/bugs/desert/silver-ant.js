// ── SAHARAN SILVER ANT: mirror chrome, built for speed ──────
class SilverAnt {
    static draw(ctx, s, bob, bug) {
        const chrome = '#c8d2dc';
        // blurred sprinting legs — fastest ant on earth
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const sw = Math.sin(bug.legPhase * 1.8 + i * 1.9 + (side > 0 ? Math.PI : 0)) * s * 0.3;
                A.leg(ctx, side * s * 0.12, bob - s * 0.05 + i * s * 0.14,
                    side * s * (0.55 + i * 0.14) + sw * 0.5, bob + s * 0.3 + sw,
                    side * s * 0.24, s * 0.05, 'rgba(110,124,138,0.9)');
            }
        }
        // gaster: the mirror-bright teardrop
        A.orb(ctx, 0, bob + s * 0.48, s * 0.26, s * 0.32, 0, chrome, { specA: 0.7, lit: 0.6 });
        // hard chrome glint line
        ctx.strokeStyle = 'rgba(255,255,255,0.65)';
        ctx.lineWidth = s * 0.035;
        ctx.beginPath();
        ctx.arc(-s * 0.06, bob + s * 0.42, s * 0.16, Math.PI * 1.1, Math.PI * 1.6);
        ctx.stroke();
        // petiole node
        A.orb(ctx, 0, bob + s * 0.17, s * 0.09, s * 0.08, 0, '#b8c4d0', { specA: 0.5 });
        // mesosoma
        A.orb(ctx, 0, bob - s * 0.05, s * 0.16, s * 0.22, 0, '#c0ccd8', { specA: 0.6 });
        // heat-shimmer aura: silver ants literally reflect the sun
        const shimmer = 0.1 + Math.abs(Math.sin(bug.wobble * 2)) * 0.12;
        A.glow(ctx, 0, bob, s * 0.9, '#ffffff', shimmer * 0.5);
        // head: triangular, chrome, big dark eyes
        A.orb(ctx, 0, bob - s * 0.38, s * 0.17, s * 0.15, 0, '#c8d2dc', { specA: 0.6 });
        A.face(ctx, 0, bob - s * 0.38, s * 0.44, bug.wobble);
        // elbowed antennae — the ant signature
        for (let side = -1; side <= 1; side += 2) {
            const wave = Math.sin(bug.antennaPhase + side) * s * 0.06;
            ctx.strokeStyle = '#6a7a8c';
            ctx.lineCap = 'round';
            ctx.lineWidth = s * 0.04;
            ctx.beginPath();
            ctx.moveTo(side * s * 0.07, bob - s * 0.48);
            ctx.lineTo(side * s * 0.26, bob - s * 0.62);
            ctx.lineTo(side * s * 0.4 + wave, bob - s * 0.88);
            ctx.stroke();
        }
        // mandibles
        ctx.strokeStyle = '#5c6c7e';
        ctx.lineWidth = s * 0.045;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side * s * 0.07, bob - s * 0.5);
            ctx.quadraticCurveTo(side * s * 0.1, bob - s * 0.6, side * s * 0.02, bob - s * 0.64);
            ctx.stroke();
        }
    }
}
