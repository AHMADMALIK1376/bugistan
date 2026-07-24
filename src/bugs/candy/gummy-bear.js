// ── GUMMY BEAR: wobbly translucent bear, slowly melting ──────
class GummyBear {
    static draw(ctx, s, bob, bug) {
        const body = '#ff4c5c';
        const melt = (Math.sin(bug.wobble * 0.8) + 1) / 2;
        const squish = 1 + Math.sin(bug.wobble * 1.6) * 0.04;
        // the melt puddle spreading beneath
        ctx.fillStyle = A.tone(body, 0.15, 0.5);
        ctx.beginPath();
        ctx.ellipse(0, bob + s * 0.72, s * (0.45 + melt * 0.2), s * (0.1 + melt * 0.04), 0, 0, Math.PI * 2);
        ctx.fill();
        // dripping goo strands
        for (let i = -1; i <= 1; i += 2) {
            const drip = s * (0.1 + melt * 0.16);
            ctx.strokeStyle = A.tone(body, 0.1, 0.75);
            ctx.lineCap = 'round';
            ctx.lineWidth = s * 0.09;
            ctx.beginPath();
            ctx.moveTo(i * s * 0.26, bob + s * 0.58);
            ctx.lineTo(i * s * 0.28, bob + s * 0.58 + drip);
            ctx.stroke();
        }
        ctx.save();
        ctx.scale(squish, 1 / squish);
        // stumpy legs melting into the puddle
        for (let side = -1; side <= 1; side += 2) {
            A.orb(ctx, side * s * 0.26, bob + s * 0.52, s * 0.15, s * 0.18, 0, A.tone(body, -0.05), { specA: 0.3 });
        }
        // arms raised in a wail
        for (let side = -1; side <= 1; side += 2) {
            const wave = Math.sin(bug.legPhase * 0.8 + side) * 0.15;
            ctx.save();
            ctx.translate(side * s * 0.34, bob - s * 0.05);
            ctx.rotate(side * (-0.7 + wave));
            A.orb(ctx, side * s * 0.12, 0, s * 0.2, s * 0.12, 0, A.tone(body, 0.05), { specA: 0.3 });
            ctx.restore();
        }
        // gummy belly
        A.orb(ctx, 0, bob + s * 0.2, s * 0.42, s * 0.46, 0, body, { specA: 0.4, lit: 0.25 });
        // round ears
        for (let side = -1; side <= 1; side += 2) {
            A.orb(ctx, side * s * 0.26, bob - s * 0.62, s * 0.13, s * 0.13, 0, A.tone(body, 0.08), { specA: 0.35 });
        }
        // head with muzzle bump
        A.orb(ctx, 0, bob - s * 0.38, s * 0.34, s * 0.32, 0, A.tone(body, 0.06), { specA: 0.4 });
        // sugary translucency sheen across the whole bear
        const sheen = ctx.createLinearGradient(-s * 0.4, bob - s * 0.6, s * 0.3, bob + s * 0.5);
        sheen.addColorStop(0, 'rgba(255,255,255,0.22)');
        sheen.addColorStop(0.5, 'rgba(255,255,255,0)');
        sheen.addColorStop(1, 'rgba(255,255,255,0.1)');
        ctx.fillStyle = sheen;
        ctx.beginPath();
        ctx.ellipse(0, bob - s * 0.05, s * 0.46, s * 0.72, 0, 0, Math.PI * 2);
        ctx.fill();
        // sugar-dust glints on the shell
        for (let i = 0; i < 3; i++) {
            const a = A.hash(i * 5.9) * Math.PI * 2;
            const d = s * (0.12 + A.hash(i * 3.4) * 0.24);
            const gx = Math.cos(a) * d, gy = bob - s * 0.1 + Math.sin(a) * d;
            ctx.fillStyle = `rgba(255,255,255,${0.3 + 0.3 * Math.sin(bug.wobble * 2.8 + i)})`;
            ctx.beginPath(); ctx.arc(gx, gy, s * 0.02, 0, Math.PI * 2); ctx.fill();
        }
        // the crying face
        A.eyes(ctx, 0, bob - s * 0.38, s * 0.5 * 0.26, s * 0.5 * 0.135, '#1c1712');
        ctx.restore();
    }
}
