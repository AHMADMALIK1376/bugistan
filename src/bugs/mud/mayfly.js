// ── MAYFLY: sail wings held upright, three tail filaments ──────
class Mayfly {
    static draw(ctx, s, bob, bug) {
        const flap = Math.sin(bug.wingPhase * 0.6) * 0.12;
        const body = '#9edb4e';
        // three long tail filaments, drifting
        ctx.lineCap = 'round';
        for (let i = -1; i <= 1; i++) {
            const wave = Math.sin(bug.wobble + i * 1.2) * s * 0.14;
            ctx.strokeStyle = A.tone(body, -0.25, 0.75);
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(0, bob + s * 0.55);
            ctx.quadraticCurveTo(i * s * 0.3 + wave, bob + s * 1.15, i * s * 0.62 + wave, bob + s * 1.7);
            ctx.stroke();
        }
        // upright sail wings (mayflies can't fold them)
        for (let side = -1; side <= 1; side += 2) {
            ctx.save(); ctx.scale(side, 1);
            A.wing(ctx, s * 0.06, bob - s * 0.28, s * 1.05, s * 0.62, -1.15, flap, '#dde6e2', 0.34);
            A.wing(ctx, s * 0.06, bob - s * 0.16, s * 0.5, s * 0.3, -0.9, flap * 0.7, '#ccd8d2', 0.26);
            ctx.restore();
        }
        // slender curved abdomen, arched upward at the tail
        A.segs(ctx, 0, bob + s * 0.06, 6, s * 0.13, s * 0.1, 0.45, body, bug.wobble);
        // thorax and small head
        A.orb(ctx, 0, bob - s * 0.18, s * 0.17, s * 0.22, 0, '#8cc940', { specA: 0.28 });
        A.orb(ctx, 0, bob - s * 0.46, s * 0.12, s * 0.12, 0, '#7cb636', {});
        A.eyes(ctx, 0, bob - s * 0.46, s * 0.42 * 0.26, s * 0.42 * 0.135, '#1c1712');
        // dainty legs held forward
        for (let side = -1; side <= 1; side += 2) {
            A.leg(ctx, side * s * 0.1, bob - s * 0.14, side * s * 0.42, bob - s * 0.44, side * s * 0.16, s * 0.04, A.tone(body, -0.3));
            A.leg(ctx, side * s * 0.1, bob - s * 0.02, side * s * 0.5, bob + s * 0.2, side * s * 0.2, s * 0.04, A.tone(body, -0.3));
        }
    }
}
