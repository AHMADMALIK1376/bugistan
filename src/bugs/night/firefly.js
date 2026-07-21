// ── FIREFLY: charcoal beetle with a breathing lantern ──────
class Firefly {
    static draw(ctx, s, bob, bug) {
        const body = '#4a5ac8';
        // the lantern: slow pulse, warm bioluminescent green
        const pulse = Math.max(0, Math.sin(bug.wobble * 1.6)) ** 2;
        A.glow(ctx, 0, bob + s * 0.55, s * (1.3 + pulse * 1.4), '#ffd166', 0.16 + pulse * 0.3);
        // wings slightly lifted mid-flight
        const flap = Math.sin(bug.wingPhase) * 0.4;
        for (let side = -1; side <= 1; side += 2) {
            ctx.save(); ctx.scale(side, 1);
            A.wing(ctx, s * 0.1, bob - s * 0.15, s * 0.85, s * 0.3, 0.8, flap * 0.4, '#9aa4b8', 0.22);
            ctx.restore();
        }
        // legs tucked
        for (let side = -1; side <= 1; side += 2) {
            const sw = Math.sin(bug.legPhase + (side > 0 ? Math.PI : 0)) * s * 0.06;
            A.leg(ctx, side * s * 0.14, bob, side * s * 0.36 + sw, bob + s * 0.24 + sw, side * s * 0.12, s * 0.04, '#3c4cb2');
        }
        // abdomen: dark shell ending in the light organ
        A.orb(ctx, 0, bob + s * 0.22, s * 0.26, s * 0.4, 0, body, { specA: 0.25 });
        // lantern segments proper: two glowing plates
        for (let k = 0; k < 2; k++) {
            const ly = bob + s * (0.48 + k * 0.15);
            const lg = ctx.createRadialGradient(0, ly, 0, 0, ly, s * 0.2);
            lg.addColorStop(0, `rgba(255,232,150,${0.5 + pulse * 0.5})`);
            lg.addColorStop(0.7, `rgba(255,196,90,${0.3 + pulse * 0.4})`);
            lg.addColorStop(1, 'rgba(235,160,60,0.1)');
            ctx.fillStyle = lg;
            ctx.beginPath();
            ctx.ellipse(0, ly, s * (0.2 - k * 0.05), s * 0.09, 0, 0, Math.PI * 2);
            ctx.fill();
        }
        // pronotum hood: the half-shield that covers a firefly's head
        A.orb(ctx, 0, bob - s * 0.2, s * 0.26, s * 0.2, 0, '#e06858', { specA: 0.3 });
        ctx.fillStyle = 'rgba(190,90,80,0.35)';
        ctx.beginPath(); ctx.ellipse(0, bob - s * 0.24, s * 0.14, s * 0.08, 0, 0, Math.PI * 2); ctx.fill();
        // head peeking from under the hood
        A.orb(ctx, 0, bob - s * 0.4, s * 0.12, s * 0.1, 0, '#4252bc', {});
        A.face(ctx, 0, bob - s * 0.22, s * 0.5, bug.wobble);
        A.antennae(ctx, s * 0.6, bob - s * 0.48, bug.antennaPhase, '#2c3782', { len: 0.6 });
    }
}
