// ── DESERT LOCUST: ochre swarm engine, banded femurs, long wings ──────
class DesertLocust {
    static draw(ctx, s, bob, bug) {
        const body = '#f0b03c';
        const flap = Math.sin(bug.wingPhase) * 0.3;
        // long flight wings trailing past the body
        for (let side = -1; side <= 1; side += 2) {
            ctx.save(); ctx.scale(side, 1);
            A.wing(ctx, s * 0.08, bob - s * 0.1, s * 1.5, s * 0.34, 0.75, flap * 0.5, '#d8c49a', 0.3);
            ctx.restore();
        }
        // powerful hind legs with dark chevron bands
        for (let side = -1; side <= 1; side += 2) {
            ctx.save();
            ctx.translate(side * s * 0.24, bob + s * 0.2);
            ctx.rotate(side * 0.75);
            A.orb(ctx, s * 0.32, 0, s * 0.4, s * 0.14, 0, '#f8c462', { specA: 0.22 });
            ctx.strokeStyle = 'rgba(70,44,14,0.6)';
            ctx.lineWidth = s * 0.04;
            for (let k = 0; k < 4; k++) {
                ctx.beginPath();
                ctx.moveTo(s * (0.12 + k * 0.14), -s * 0.1);
                ctx.lineTo(s * (0.06 + k * 0.14), s * 0.1);
                ctx.stroke();
            }
            ctx.strokeStyle = '#9c6f1c';
            ctx.lineCap = 'round';
            ctx.lineWidth = s * 0.055;
            ctx.beginPath(); ctx.moveTo(s * 0.7, s * 0.02); ctx.lineTo(s * 0.4, s * 0.55); ctx.stroke();
            ctx.restore();
        }
        // walking pairs
        for (let side = -1; side <= 1; side += 2) {
            const sw = Math.sin(bug.legPhase + (side > 0 ? Math.PI : 0)) * s * 0.08;
            A.leg(ctx, side * s * 0.15, bob - s * 0.22, side * s * 0.45 + sw, bob + sw, side * s * 0.15, s * 0.05, '#9c6f1c');
            A.leg(ctx, side * s * 0.17, bob - s * 0.02, side * s * 0.52 - sw, bob + s * 0.24 - sw, side * s * 0.17, s * 0.05, '#9c6f1c');
        }
        // long abdomen ridged beneath
        A.segs(ctx, 0, bob + s * 0.3, 6, s * 0.16, s * 0.15, 0.4, '#e0a030', bug.wobble);
        // saddle pronotum with pale median stripe
        A.orb(ctx, 0, bob - s * 0.18, s * 0.22, s * 0.26, 0, body, { specA: 0.26 });
        ctx.strokeStyle = 'rgba(230,205,150,0.5)';
        ctx.lineWidth = s * 0.05;
        ctx.beginPath(); ctx.moveTo(0, bob - s * 0.4); ctx.lineTo(0, bob + s * 0.04); ctx.stroke();
        // big blunt head with striped eyes
        A.orb(ctx, 0, bob - s * 0.5, s * 0.19, s * 0.21, 0, '#fccc70', { specA: 0.24 });
        A.face(ctx, 0, bob - s * 0.5, s * 0.52, bug.wobble);
        A.antennae(ctx, s * 0.7, bob - s * 0.62, bug.antennaPhase, '#8a611a', { len: 0.7 });
    }
}
