// ── CRANE FLY: impossibly long legs, narrow wings, frail body ──────
class CraneFly {
    static draw(ctx, s, bob, bug) {
        const body = '#dcae72';
        const flap = Math.sin(bug.wingPhase) * 0.3;
        // six absurdly long trailing legs — the whole silhouette
        ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const drift = Math.sin(bug.legPhase * 0.4 + i * 1.3 + (side > 0 ? 1.7 : 0)) * s * 0.16;
                const ax = side * s * 0.1, ay = bob - s * 0.1 + i * s * 0.12;
                const kx = side * s * (0.7 + i * 0.18) + drift;
                const ky = ay + s * (0.15 + i * 0.2);
                const fx = side * s * (0.9 + i * 0.2) + drift * 1.4;
                const fy = ay + s * (0.9 + i * 0.3);
                ctx.strokeStyle = A.tone(body, -0.25, 0.85);
                ctx.lineWidth = s * 0.035;
                ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(kx, ky); ctx.stroke();
                ctx.lineWidth = s * 0.022;
                ctx.beginPath(); ctx.moveTo(kx, ky); ctx.lineTo(fx, fy); ctx.stroke();
            }
        }
        // one narrow wing pair held wide
        for (let side = -1; side <= 1; side += 2) {
            ctx.save(); ctx.scale(side, 1);
            A.wing(ctx, s * 0.08, bob - s * 0.22, s * 1.3, s * 0.26, 0.28, flap * 0.5, '#d8d2c4', 0.26);
            ctx.restore();
        }
        // halteres: the little knobbed balancers behind the wings
        for (let side = -1; side <= 1; side += 2) {
            ctx.strokeStyle = A.tone(body, -0.2, 0.7);
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(side * s * 0.12, bob + s * 0.02);
            ctx.lineTo(side * s * 0.34, bob + s * 0.1 + flap * s * 0.1);
            ctx.stroke();
            ctx.fillStyle = A.tone(body, 0.15);
            ctx.beginPath(); ctx.arc(side * s * 0.34, bob + s * 0.1 + flap * s * 0.1, s * 0.045, 0, Math.PI * 2); ctx.fill();
        }
        // pencil-thin abdomen
        A.segs(ctx, 0, bob + s * 0.14, 6, s * 0.1, s * 0.13, 0.45, body, bug.wobble);
        // slight thorax hump and tiny head with snout
        A.orb(ctx, 0, bob - s * 0.14, s * 0.15, s * 0.18, 0, '#caa05e', { specA: 0.24 });
        A.orb(ctx, 0, bob - s * 0.38, s * 0.09, s * 0.11, 0, '#b8884a', {});
        A.face(ctx, 0, bob - s * 0.38, s * 0.36, bug.wobble);
        A.antennae(ctx, s * 0.6, bob - s * 0.46, bug.antennaPhase, '#8a6a40', { len: 0.6 });
    }
}
