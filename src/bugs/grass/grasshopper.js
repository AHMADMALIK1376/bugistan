// ── GRASSHOPPER: olive spring-loaded jumper, banded femurs ──────
class Grasshopper {
    static draw(ctx, s, bob, bug) {
        const body = '#6fd44f';
        const crouch = Math.abs(Math.sin(bug.legPhase * 0.5)) * 0.15;
        // mighty hind legs: thick banded femur + thin tibia with spurs
        for (let side = -1; side <= 1; side += 2) {
            ctx.save();
            ctx.translate(side * s * 0.24, bob + s * 0.18);
            ctx.rotate(side * (0.7 + crouch));
            // femur
            A.orb(ctx, s * 0.3, 0, s * 0.4, s * 0.13, 0, '#90e472', { specA: 0.22 });
            ctx.strokeStyle = 'rgba(40,52,20,0.5)';
            ctx.lineWidth = 0.7;
            for (let k = 0; k < 3; k++) {
                ctx.beginPath();
                ctx.moveTo(s * (0.16 + k * 0.16), -s * 0.1);
                ctx.lineTo(s * (0.1 + k * 0.16), s * 0.1);
                ctx.stroke();
            }
            // tibia snapping back
            ctx.strokeStyle = '#418a2c';
            ctx.lineCap = 'round';
            ctx.lineWidth = s * 0.05;
            ctx.beginPath();
            ctx.moveTo(s * 0.66, s * 0.04);
            ctx.lineTo(s * 0.3 - crouch * s, s * 0.5);
            ctx.stroke();
            ctx.restore();
        }
        // front + mid walking legs
        for (let side = -1; side <= 1; side += 2) {
            const sw = Math.sin(bug.legPhase + (side > 0 ? Math.PI : 0)) * s * 0.08;
            A.leg(ctx, side * s * 0.14, bob - s * 0.22, side * s * 0.42 + sw, bob + s * 0.02 + sw, side * s * 0.14, s * 0.045, '#418a2c');
            A.leg(ctx, side * s * 0.16, bob - s * 0.04, side * s * 0.5 - sw, bob + s * 0.22 - sw, side * s * 0.16, s * 0.045, '#418a2c');
        }
        // long body: abdomen ridged under folded wings
        A.segs(ctx, 0, bob + s * 0.28, 5, s * 0.17, s * 0.15, 0.4, '#5fc23e', bug.wobble);
        // folded wing running the length of the back
        ctx.save();
        ctx.translate(0, bob - s * 0.05);
        const wg = ctx.createLinearGradient(0, -s * 0.2, 0, s * 0.8);
        wg.addColorStop(0, A.tone(body, 0.22));
        wg.addColorStop(1, A.tone(body, -0.35));
        ctx.fillStyle = wg;
        ctx.beginPath();
        ctx.moveTo(-s * 0.16, -s * 0.2);
        ctx.quadraticCurveTo(-s * 0.2, s * 0.3, -s * 0.04, s * 0.85);
        ctx.lineTo(s * 0.04, s * 0.85);
        ctx.quadraticCurveTo(s * 0.2, s * 0.3, s * 0.16, -s * 0.2);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = 'rgba(30,40,14,0.5)';
        ctx.lineWidth = 0.6;
        ctx.beginPath(); ctx.moveTo(0, -s * 0.18); ctx.lineTo(0, s * 0.82); ctx.stroke();
        ctx.restore();
        // saddle pronotum
        A.orb(ctx, 0, bob - s * 0.24, s * 0.2, s * 0.22, 0, '#7fd858', { specA: 0.26 });
        // angular head with tall oval eyes
        A.orb(ctx, 0, bob - s * 0.52, s * 0.16, s * 0.2, 0, '#98e87a', { specA: 0.24 });
        A.face(ctx, 0, bob - s * 0.52, s * 0.52, bug.wobble);
        A.antennae(ctx, s * 0.9, bob - s * 0.64, bug.antennaPhase, '#356e22', { len: 0.9 });
    }
}
