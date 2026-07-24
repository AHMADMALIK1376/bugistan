// ── DONUT: sprinkled ring with dripping icing, on the run ──────
class Donut {
    static draw(ctx, s, bob, bug) {
        const dough = '#e8a45c';
        const icing = '#ff8ab8';
        const roll = Math.sin(bug.wobble) * 0.08;
        // little running legs under the ring
        for (let side = -1; side <= 1; side += 2) {
            const step = Math.sin(bug.legPhase * 1.3 + (side > 0 ? Math.PI : 0)) * s * 0.12;
            A.leg(ctx, side * s * 0.22, bob + s * 0.42,
                side * s * 0.4 + step * 0.4, bob + s * 0.72 + step, side * s * 0.1, s * 0.06, '#b06a2e');
        }
        ctx.save();
        ctx.rotate(roll);
        // dough ring
        A.orb(ctx, 0, bob, s * 0.56, s * 0.52, 0, dough, { specA: 0.25 });
        // icing cap with wavy dripping edge
        ctx.fillStyle = icing;
        ctx.beginPath();
        ctx.moveTo(-s * 0.54, bob - s * 0.06);
        ctx.quadraticCurveTo(-s * 0.56, bob - s * 0.52, 0, bob - s * 0.52);
        ctx.quadraticCurveTo(s * 0.56, bob - s * 0.52, s * 0.54, bob - s * 0.06);
        for (let k = 0; k < 5; k++) {
            const px = s * (0.54 - k * 0.27);
            const drip = s * (0.1 + Math.abs(Math.sin(bug.wobble * 0.7 + k * 1.7)) * 0.1);
            ctx.quadraticCurveTo(px - s * 0.06, bob - s * 0.06 + drip, px - s * 0.135, bob - s * 0.06);
        }
        ctx.closePath();
        ctx.fill();
        // icing gloss
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.beginPath();
        ctx.ellipse(-s * 0.24, bob - s * 0.34, s * 0.16, s * 0.07, -0.4, 0, Math.PI * 2);
        ctx.fill();
        // sprinkles on the icing
        const sprinkleColors = ['#fff4a0', '#8ae8d0', '#ffffff', '#b48ae0', '#ffd166'];
        for (let i = 0; i < 8; i++) {
            const sa = A.hash(i * 5.1) * Math.PI - Math.PI / 2;
            const sd = s * (0.16 + A.hash(i * 7.7) * 0.3);
            ctx.save();
            ctx.translate(Math.cos(sa) * sd, bob - s * 0.24 + Math.sin(sa) * sd * 0.4);
            ctx.rotate(A.hash(i * 3.3) * Math.PI);
            ctx.fillStyle = sprinkleColors[i % sprinkleColors.length];
            ctx.beginPath();
            ctx.roundRect(-s * 0.05, -s * 0.016, s * 0.1, s * 0.032, s * 0.016);
            ctx.fill();
            ctx.restore();
        }
        // donut hole shadow
        ctx.fillStyle = 'rgba(120,70,30,0.35)';
        ctx.beginPath();
        ctx.ellipse(0, bob + s * 0.16, s * 0.13, s * 0.1, 0, 0, Math.PI * 2);
        ctx.fill();
        // sugar glints twinkling across the icing
        for (let i = 0; i < 4; i++) {
            const a = A.hash(i * 6.1) * Math.PI - Math.PI / 2;
            const d = s * (0.14 + A.hash(i * 2.7) * 0.28);
            const gx = Math.cos(a) * d, gy = bob - s * 0.24 + Math.sin(a) * d * 0.4;
            ctx.fillStyle = `rgba(255,255,255,${0.35 + 0.3 * Math.sin(bug.wobble * 3.2 + i)})`;
            ctx.beginPath(); ctx.arc(gx, gy, s * 0.022, 0, Math.PI * 2); ctx.fill();
        }
        // the crying face on the icing
        A.eyes(ctx, 0, bob - s * 0.22, s * 0.5 * 0.26, s * 0.5 * 0.135, '#1c1712');
        ctx.restore();
    }
}
