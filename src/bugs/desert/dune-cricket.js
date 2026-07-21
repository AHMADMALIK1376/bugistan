// ── DUNE CRICKET: sand-pale hopper with brush feet ──────
class DuneCricket {
    static draw(ctx, s, bob, bug) {
        const body = '#ecc86a';
        const crouch = Math.abs(Math.sin(bug.legPhase * 0.5)) * 0.12;
        // big hind legs with sand-brush tarsi
        for (let side = -1; side <= 1; side += 2) {
            ctx.save();
            ctx.translate(side * s * 0.22, bob + s * 0.16);
            ctx.rotate(side * (0.65 + crouch));
            A.orb(ctx, s * 0.28, 0, s * 0.34, s * 0.12, 0, '#f6d98c', { specA: 0.2 });
            ctx.strokeStyle = '#97803c';
            ctx.lineCap = 'round';
            ctx.lineWidth = s * 0.05;
            ctx.beginPath(); ctx.moveTo(s * 0.6, s * 0.03); ctx.lineTo(s * 0.28, s * 0.46); ctx.stroke();
            // brush foot: splayed bristles that float on sand
            for (let k = -1; k <= 1; k++) {
                ctx.lineWidth = s * 0.025;
                ctx.beginPath();
                ctx.moveTo(s * 0.28, s * 0.46);
                ctx.lineTo(s * (0.24 + k * 0.07), s * 0.58);
                ctx.stroke();
            }
            ctx.restore();
        }
        // front pairs
        for (let side = -1; side <= 1; side += 2) {
            const sw = Math.sin(bug.legPhase + (side > 0 ? Math.PI : 0)) * s * 0.08;
            A.leg(ctx, side * s * 0.13, bob - s * 0.16, side * s * 0.4 + sw, bob + s * 0.06 + sw, side * s * 0.13, s * 0.045, '#97803c');
            A.leg(ctx, side * s * 0.15, bob, side * s * 0.46 - sw, bob + s * 0.24 - sw, side * s * 0.15, s * 0.045, '#97803c');
        }
        // pale rounded body with faint counter-shading
        A.segs(ctx, 0, bob + s * 0.22, 5, s * 0.18, s * 0.14, 0.35, body, bug.wobble);
        A.orb(ctx, 0, bob - s * 0.14, s * 0.22, s * 0.26, 0, '#f0d078', { specA: 0.26 });
        // freckled speckling — dune camouflage
        ctx.fillStyle = 'rgba(110,84,40,0.35)';
        for (let i = 0; i < 8; i++) {
            const a = A.hash(i * 5.3) * Math.PI * 2;
            const d = Math.sqrt(A.hash(i * 8.7)) * 0.8;
            ctx.beginPath();
            ctx.arc(Math.cos(a) * s * 0.18 * d, bob - s * 0.14 + Math.sin(a) * s * 0.22 * d, s * 0.025, 0, Math.PI * 2);
            ctx.fill();
        }
        // round head with large night-adapted eyes
        A.orb(ctx, 0, bob - s * 0.46, s * 0.17, s * 0.17, 0, '#f8e09a', { specA: 0.24 });
        A.face(ctx, 0, bob - s * 0.46, s * 0.48, bug.wobble);
        // sweeping antennae, longer than the body
        A.antennae(ctx, s * 1.2, bob - s * 0.58, bug.antennaPhase, '#7c6830', { len: 1.2 });
    }
}
