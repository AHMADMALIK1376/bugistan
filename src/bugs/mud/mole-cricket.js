// ── MOLE CRICKET: velvet burrower with shovel forelimbs ──────
class MoleCricket {
    static draw(ctx, s, bob, bug) {
        const body = '#c98a4a';
        const dig = Math.sin(bug.legPhase * 0.8) * s * 0.1;
        // hind + mid legs: stout, tucked close
        for (let side = -1; side <= 1; side += 2) {
            const sw = Math.sin(bug.legPhase + (side > 0 ? Math.PI : 0)) * s * 0.12;
            A.leg(ctx, side * s * 0.2, bob + s * 0.15, side * s * 0.62 + sw * 0.3, bob + s * 0.55 + sw, side * s * 0.3, s * 0.09, A.tone(body, -0.35));
            A.leg(ctx, side * s * 0.2, bob - s * 0.05, side * s * 0.55 - sw * 0.3, bob + s * 0.28 - sw, side * s * 0.26, s * 0.08, A.tone(body, -0.35));
        }
        // cylindrical velvet abdomen
        A.segs(ctx, 0, bob + s * 0.18, 5, s * 0.3, s * 0.17, 0.3, body, bug.wobble);
        // short cerci
        ctx.strokeStyle = A.tone(body, -0.3);
        ctx.lineWidth = s * 0.05;
        ctx.lineCap = 'round';
        const ty = bob + s * 0.18 + 4 * s * 0.17;
        ctx.beginPath(); ctx.moveTo(-s * 0.08, ty); ctx.lineTo(-s * 0.22, ty + s * 0.3); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(s * 0.08, ty); ctx.lineTo(s * 0.22, ty + s * 0.3); ctx.stroke();
        // broad armored pronotum (the digging plough)
        A.orb(ctx, 0, bob - s * 0.14, s * 0.34, s * 0.36, 0, '#ba7a3c', { specA: 0.22 });
        ctx.strokeStyle = 'rgba(30,20,12,0.5)';
        ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.arc(0, bob - s * 0.14, s * 0.3, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke();
        // shovel forelimbs: broad flattened tibiae with claw teeth
        for (let side = -1; side <= 1; side += 2) {
            ctx.save();
            ctx.translate(side * s * 0.42, bob - s * 0.26 + dig * side * 0.4);
            ctx.rotate(side * -0.5);
            A.orb(ctx, 0, 0, s * 0.26, s * 0.15, 0, '#dda45f', { specA: 0.24 });
            // digging teeth
            ctx.fillStyle = '#5c3a16';
            for (let k = 0; k < 3; k++) {
                ctx.beginPath();
                ctx.moveTo(s * (0.08 + k * 0.09) - s * 0.2, -s * 0.12);
                ctx.lineTo(s * (0.13 + k * 0.09) - s * 0.2, -s * 0.26);
                ctx.lineTo(s * (0.18 + k * 0.09) - s * 0.2, -s * 0.12);
                ctx.closePath();
                ctx.fill();
            }
            ctx.restore();
        }
        // head: small, mostly buried under the pronotum
        A.orb(ctx, 0, bob - s * 0.48, s * 0.18, s * 0.16, 0, '#d09250', {});
        A.eyes(ctx, 0, bob - s * 0.48, s * 0.5 * 0.26, s * 0.5 * 0.135, '#1c1712');
        A.antennae(ctx, s * 0.7, bob - s * 0.56, bug.antennaPhase, '#7e5527', { len: 0.7 });
    }
}
