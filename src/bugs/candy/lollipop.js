// ── LOLLIPOP: swirly pop on a stick, running everywhere ──────
class Lollipop {
    static draw(ctx, s, bob, bug) {
        const body = '#ff6ec0';
        const tilt = Math.sin(bug.wobble * 1.4) * 0.1;
        // candy stick with little running legs
        ctx.fillStyle = '#f4ecd8';
        ctx.beginPath();
        ctx.roundRect(-s * 0.06, bob + s * 0.3, s * 0.12, s * 0.55, s * 0.06);
        ctx.fill();
        for (let side = -1; side <= 1; side += 2) {
            const step = Math.sin(bug.legPhase * 1.4 + (side > 0 ? Math.PI : 0)) * s * 0.14;
            A.leg(ctx, side * s * 0.04, bob + s * 0.72,
                side * s * 0.26 + step * 0.4, bob + s * 0.95 + step, side * s * 0.08, s * 0.055, '#c2489a');
        }
        // waving stick arms
        for (let side = -1; side <= 1; side += 2) {
            const wave = Math.sin(bug.legPhase * 0.9 + side * 1.6) * 0.25;
            ctx.strokeStyle = '#c2489a';
            ctx.lineCap = 'round';
            ctx.lineWidth = s * 0.055;
            ctx.beginPath();
            ctx.moveTo(side * s * 0.1, bob + s * 0.45);
            ctx.quadraticCurveTo(side * s * 0.3, bob + s * 0.4 + wave * s, side * s * 0.42, bob + s * (0.28 + wave));
            ctx.stroke();
        }
        ctx.save();
        ctx.translate(0, bob - s * 0.14);
        ctx.rotate(tilt);
        // the pop: flat disc with a spiral swirl
        A.orb(ctx, 0, 0, s * 0.52, s * 0.52, 0, body, { specA: 0.4, lit: 0.25 });
        ctx.strokeStyle = 'rgba(255,255,255,0.85)';
        ctx.lineWidth = s * 0.09;
        ctx.lineCap = 'round';
        ctx.beginPath();
        let a = bug.wobble * 0.15;
        ctx.moveTo(0, 0);
        for (let k = 0; k < 40; k++) {
            const rr = (k / 40) * s * 0.42;
            a += 0.32;
            ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
        }
        ctx.stroke();
        // glossy top light
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.beginPath();
        ctx.ellipse(-s * 0.18, -s * 0.2, s * 0.14, s * 0.07, -0.6, 0, Math.PI * 2);
        ctx.fill();
        // sugar glints twinkling across the swirl
        for (let i = 0; i < 3; i++) {
            const ga = A.hash(i * 4.6) * Math.PI * 2;
            const gd = s * (0.1 + A.hash(i * 2.9) * 0.3);
            const gx = Math.cos(ga) * gd, gy = Math.sin(ga) * gd;
            ctx.fillStyle = `rgba(255,255,255,${0.3 + 0.3 * Math.sin(bug.wobble * 3 + i)})`;
            ctx.beginPath(); ctx.arc(gx, gy, s * 0.022, 0, Math.PI * 2); ctx.fill();
        }
        // the crying face over the swirl
        A.eyes(ctx, 0, -s * 0.04, s * 0.5 * 0.26, s * 0.5 * 0.135, '#1c1712');
        ctx.restore();
    }
}
