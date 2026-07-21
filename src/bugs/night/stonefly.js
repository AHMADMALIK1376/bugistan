// ── STONEFLY: slate flat-body, roof-folded veined wings, twin cerci ──────
class Stonefly {
    static draw(ctx, s, bob, bug) {
        const body = '#5ca8d8';
        // two long tail cerci
        ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) {
            const wave = Math.sin(bug.wobble + side) * s * 0.08;
            ctx.strokeStyle = A.tone(body, -0.3, 0.8);
            ctx.lineWidth = s * 0.035;
            ctx.beginPath();
            ctx.moveTo(side * s * 0.05, bob + s * 0.6);
            ctx.quadraticCurveTo(side * s * 0.22 + wave, bob + s * 1.0, side * s * 0.4 + wave, bob + s * 1.35);
            ctx.stroke();
        }
        // splayed legs
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const sw = Math.sin(bug.legPhase + i * 1.9 + (side > 0 ? Math.PI : 0)) * s * 0.1;
                A.leg(ctx, side * s * 0.16, bob - s * 0.2 + i * s * 0.24,
                    side * s * (0.55 + i * 0.1) + sw, bob + i * s * 0.24 + sw,
                    side * s * 0.2, s * 0.05, '#366e96');
            }
        }
        // wings folded flat over the back like a roof, heavy venation
        for (let side = -1; side <= 1; side += 2) {
            ctx.save();
            ctx.scale(side, 1);
            const wg = ctx.createLinearGradient(0, bob - s * 0.2, s * 0.3, bob + s * 0.8);
            wg.addColorStop(0, 'rgba(178,192,200,0.4)');
            wg.addColorStop(1, 'rgba(120,136,146,0.28)');
            ctx.fillStyle = wg;
            ctx.beginPath();
            ctx.moveTo(s * 0.02, bob - s * 0.24);
            ctx.quadraticCurveTo(s * 0.28, bob, s * 0.2, bob + s * 0.5);
            ctx.quadraticCurveTo(s * 0.16, bob + s * 0.75, s * 0.02, bob + s * 0.82);
            ctx.closePath();
            ctx.fill();
            // net venation: the stonefly signature
            ctx.strokeStyle = 'rgba(60,74,84,0.55)';
            ctx.lineWidth = 0.5;
            for (let k = 0; k < 4; k++) {
                ctx.beginPath();
                ctx.moveTo(s * 0.03, bob - s * 0.16 + k * s * 0.24);
                ctx.quadraticCurveTo(s * 0.18, bob - s * 0.1 + k * s * 0.24, s * 0.2, bob + s * 0.02 + k * s * 0.22);
                ctx.stroke();
            }
            ctx.beginPath();
            ctx.moveTo(s * 0.1, bob - s * 0.14);
            ctx.lineTo(s * 0.14, bob + s * 0.62);
            ctx.stroke();
            ctx.restore();
        }
        // flat segmented body under the wings
        A.segs(ctx, 0, bob + s * 0.28, 4, s * 0.14, s * 0.12, 0.3, body, bug.wobble);
        A.orb(ctx, 0, bob - s * 0.1, s * 0.2, s * 0.24, 0, '#4c98c8', { specA: 0.22 });
        // wide flat head, eyes at the corners
        A.orb(ctx, 0, bob - s * 0.42, s * 0.18, s * 0.13, 0, '#4290c0', {});
        A.face(ctx, 0, bob - s * 0.4, s * 0.42, bug.wobble);
        // very long threadlike antennae
        A.antennae(ctx, s * 1.05, bob - s * 0.5, bug.antennaPhase, '#2c5e82', { len: 1.05 });
    }
}
