// ── NAMIB BEETLE: fog-basking dome, bumpy condensation shell ──────
class NamibBeetle {
    static draw(ctx, s, bob, bug) {
        const shell = '#d8a860';
        // long stilt legs — namib beetles stand tall off the hot sand
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const sw = Math.sin(bug.legPhase + i * 1.9 + (side > 0 ? Math.PI : 0)) * s * 0.14;
                A.leg(ctx, side * s * 0.24, bob + (i - 1) * s * 0.26,
                    side * s * (0.75 + i * 0.1) + sw * 0.3, bob + (i - 1) * s * 0.26 + s * 0.55 + sw,
                    side * s * 0.3, s * 0.06, '#8a6a34');
            }
        }
        // high-domed fused shell, tilted posture
        ctx.save();
        ctx.rotate(-0.06);
        A.orb(ctx, 0, bob + s * 0.06, s * 0.5, s * 0.62, 0, shell, { specA: 0.28 });
        // condensation bumps: the fog-harvesting texture
        for (let i = 0; i < 14; i++) {
            const a = A.hash(i * 3.7) * Math.PI * 2;
            const d = Math.sqrt(A.hash(i * 7.1)) * 0.75;
            const bx = Math.cos(a) * s * 0.42 * d;
            const by = bob + s * 0.06 + Math.sin(a) * s * 0.52 * d;
            A.orb(ctx, bx, by, s * 0.05, s * 0.05, 0, '#e6be80', { specA: 0.5 });
        }
        // one shining collected droplet rolling down the midline
        const dropP = (bug.wobble * 0.12) % 1;
        const dg = ctx.createRadialGradient(-s * 0.02, bob - s * 0.4 + dropP * s * 0.5, 0, 0, bob - s * 0.4 + dropP * s * 0.5, s * 0.07);
        dg.addColorStop(0, 'rgba(235,248,255,0.9)');
        dg.addColorStop(0.6, 'rgba(170,210,235,0.5)');
        dg.addColorStop(1, 'rgba(140,180,210,0.05)');
        ctx.fillStyle = dg;
        ctx.beginPath(); ctx.arc(0, bob - s * 0.4 + dropP * s * 0.5, s * 0.06, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        // small down-tilted head
        A.orb(ctx, 0, bob - s * 0.56, s * 0.16, s * 0.13, 0, '#c89650', {});
        A.face(ctx, 0, bob - s * 0.54, s * 0.44, bug.wobble);
        A.antennae(ctx, s * 0.55, bob - s * 0.64, bug.antennaPhase, '#7a5c2c', { len: 0.55, club: true });
    }
}
