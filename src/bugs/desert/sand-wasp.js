// ── SAND WASP: banded amber hunter, wings at full blur ──────
class SandWasp {
    static draw(ctx, s, bob, bug) {
        const dark = '#6e4a14';
        const band = '#ffb347';
        const flap = Math.sin(bug.wingPhase * 1.4) * 0.5;
        // fast translucent wings
        for (let side = -1; side <= 1; side += 2) {
            ctx.save(); ctx.scale(side, 1);
            A.wing(ctx, s * 0.1, bob - s * 0.24, s * 1.15, s * 0.36, 0.55, flap * 0.45, '#d6cdb6', 0.26);
            ctx.restore();
        }
        // legs trailing with digging combs on the front pair
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const sw = Math.sin(bug.legPhase * 0.7 + i * 1.5) * s * 0.08;
                A.leg(ctx, side * s * 0.12, bob - s * 0.08 + i * s * 0.14,
                    side * s * (0.45 + i * 0.14) + sw, bob + s * (0.28 + i * 0.2) + sw,
                    side * s * 0.22, s * 0.05, '#8a5c1c');
            }
        }
        // banded abdomen: amber and umber hoops on a sleek spindle
        for (let i = 4; i >= 0; i--) {
            const sy = bob + s * 0.3 + i * s * 0.15;
            const r = s * (0.24 - i * 0.035);
            A.orb(ctx, 0, sy, r, r * 1.04, 0, i % 2 === 0 ? band : dark, { specA: 0.3 });
        }
        // pinched wasp waist
        ctx.strokeStyle = dark;
        ctx.lineCap = 'round';
        ctx.lineWidth = s * 0.08;
        ctx.beginPath(); ctx.moveTo(0, bob + s * 0.08); ctx.lineTo(0, bob + s * 0.24); ctx.stroke();
        // thorax: dark, fuzzy-edged
        A.orb(ctx, 0, bob - s * 0.1, s * 0.22, s * 0.26, 0, dark, { specA: 0.24 });
        ctx.strokeStyle = 'rgba(120,95,55,0.4)';
        ctx.lineWidth = 0.5;
        for (let k = 0; k < 6; k++) {
            const a = -Math.PI / 2 + (k - 2.5) * 0.4;
            ctx.beginPath();
            ctx.moveTo(Math.cos(a) * s * 0.16, bob - s * 0.1 + Math.sin(a) * s * 0.2);
            ctx.lineTo(Math.cos(a) * s * 0.28, bob - s * 0.1 + Math.sin(a) * s * 0.3);
            ctx.stroke();
        }
        // head with huge wraparound eyes — sand wasps hunt by sight
        A.orb(ctx, 0, bob - s * 0.42, s * 0.17, s * 0.16, 0, '#e0a030', {});
        A.face(ctx, 0, bob - s * 0.42, s * 0.46, bug.wobble);
        A.antennae(ctx, s * 0.6, bob - s * 0.54, bug.antennaPhase, '#5c3e10', { len: 0.6 });
    }
}
