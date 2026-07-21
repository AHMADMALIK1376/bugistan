// ── JELLYBEAN: glossy bean, bouncing with a squash-stretch hop ──────
class JellyBean {
    static draw(ctx, s, bob, bug) {
        const body = bug.bug.color || '#6ee6a0';
        const hopT = Math.max(0, Math.sin(bug.legPhase * 1.4));
        const hop = hopT * s * 0.18;
        const squash = 1 - hopT * 0.2;
        const y = bob - hop;
        // tiny stub legs, tucked in on the hop
        for (let side = -1; side <= 1; side += 2) {
            const step = Math.sin(bug.legPhase * 1.4 + (side > 0 ? Math.PI : 0)) * s * 0.1;
            A.leg(ctx, side * s * 0.16, y + s * 0.26,
                side * s * 0.3 + step * 0.3, y + s * 0.48 + step, side * s * 0.08, s * 0.05, A.tone(body, -0.32));
        }
        ctx.save();
        ctx.translate(0, y);
        ctx.scale(1 / squash, squash);
        // bean-shaped glossy shell
        A.orb(ctx, 0, 0, s * 0.36, s * 0.5, 0.12, body, { specA: 0.42, lit: 0.24 });
        // shiny sugar-shell speckles
        for (let i = 0; i < 4; i++) {
            const a = A.hash(i * 4.4) * Math.PI * 2;
            const d = s * (0.1 + A.hash(i * 2.2) * 0.2);
            ctx.fillStyle = 'rgba(255,255,255,0.4)';
            ctx.beginPath();
            ctx.ellipse(Math.cos(a) * d, Math.sin(a) * d * 1.2, s * 0.045, s * 0.028, a, 0, Math.PI * 2);
            ctx.fill();
        }
        // long glassy highlight
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.beginPath();
        ctx.ellipse(-s * 0.14, -s * 0.18, s * 0.08, s * 0.26, -0.2, 0, Math.PI * 2);
        ctx.fill();
        A.face(ctx, 0, -s * 0.02, s * 0.4, bug.wobble);
        ctx.restore();
    }
}
