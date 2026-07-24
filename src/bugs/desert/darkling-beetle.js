// ── DARKLING BEETLE: matte charcoal tank, head-down stance ──────
class DarklingBeetle {
    static draw(ctx, s, bob, bug) {
        const shell = '#7a5cc0';
        // thick slow legs
        A.legSet(ctx, s, bob, bug.legPhase * 0.6, '#4c3680', { reach: 1.1, w: s * 0.08 });
        // heavy matte dome: minimal specular — darklings absorb light
        A.orb(ctx, 0, bob + s * 0.1, s * 0.52, s * 0.66, 0, shell, { specA: 0.1, lit: 0.22 });
        // fused elytra: no split flight line, just a faint seam
        ctx.strokeStyle = 'rgba(60,52,44,0.5)';
        ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.moveTo(0, bob - s * 0.4); ctx.lineTo(0, bob + s * 0.7); ctx.stroke();
        // rows of dimpled micro-sculpture
        ctx.fillStyle = 'rgba(66,58,50,0.4)';
        for (let r = 0; r < 3; r++) {
            for (let k = 0; k < 5; k++) {
                for (let side = -1; side <= 1; side += 2) {
                    ctx.beginPath();
                    ctx.arc(side * s * (0.12 + r * 0.13), bob - s * 0.22 + k * s * 0.2, s * 0.022, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }
        // dusty desert bloom on the shell's crown
        const dust = ctx.createRadialGradient(-s * 0.14, bob - s * 0.14, 0, -s * 0.14, bob - s * 0.14, s * 0.42);
        dust.addColorStop(0, 'rgba(150,132,105,0.14)');
        dust.addColorStop(1, 'rgba(150,132,105,0)');
        ctx.fillStyle = dust;
        ctx.beginPath(); ctx.ellipse(0, bob + s * 0.1, s * 0.52, s * 0.66, 0, 0, Math.PI * 2); ctx.fill();
        // pronotum collar
        A.orb(ctx, 0, bob - s * 0.44, s * 0.3, s * 0.18, 0, '#6a4cb0', { specA: 0.12 });
        // head angled down in the classic butt-up posture
        A.orb(ctx, 0, bob - s * 0.62, s * 0.16, s * 0.12, 0, '#8a6ccc', {});
        A.eyes(ctx, 0, bob - s * 0.6, s * 0.44 * 0.26, s * 0.44 * 0.135, '#1c1712');
        A.antennae(ctx, s * 0.6, bob - s * 0.68, bug.antennaPhase, '#3e2a6a', { len: 0.6, club: true });
    }
}
