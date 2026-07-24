// ── SHARK: slate torpedo, counter-shaded, tail-driven ──────
class Shark {
    static draw(ctx, s, bob, bug) {
        const hide = '#6aaad8';
        const swim = bug.wobble * 0.7;
        const tail = Math.sin(swim) * s * 0.28;
        // caudal fin: tall asymmetric crescent, doing the work
        ctx.save();
        ctx.translate(tail * 0.5, bob + s * 1.0);
        ctx.rotate(tail * 0.25 / s);
        const cg = ctx.createLinearGradient(0, 0, 0, s * 0.6);
        cg.addColorStop(0, '#5a9aca');
        cg.addColorStop(1, '#4c8cbc');
        ctx.fillStyle = cg;
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.06);
        ctx.quadraticCurveTo(-s * 0.4 + tail, s * 0.28, -s * 0.3 + tail, s * 0.62);
        ctx.quadraticCurveTo(-s * 0.04 + tail * 0.4, s * 0.3, s * 0.02, s * 0.08);
        ctx.quadraticCurveTo(s * 0.16 + tail * 0.6, s * 0.3, s * 0.22 + tail, s * 0.42);
        ctx.quadraticCurveTo(s * 0.12 + tail * 0.4, s * 0.12, 0, -s * 0.06);
        ctx.fill();
        ctx.restore();
        // pectoral fins swept like wings
        for (let side = -1; side <= 1; side += 2) {
            ctx.save();
            ctx.translate(side * s * 0.26, bob - s * 0.1);
            ctx.rotate(side * (0.85 + Math.sin(swim + 1.2) * 0.08));
            const pg = ctx.createLinearGradient(0, 0, side * s * 0.7, 0);
            pg.addColorStop(0, hide);
            pg.addColorStop(1, '#4484b4');
            ctx.fillStyle = pg;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(side * s * 0.5, s * 0.04, side * s * 0.72, s * 0.3);
            ctx.quadraticCurveTo(side * s * 0.3, s * 0.16, 0, s * 0.14);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
        // body: long torpedo with flank curve, drawn as layered lens
        ctx.save();
        ctx.translate(0, bob);
        const bodyBend = Math.sin(swim) * 0.05;
        ctx.rotate(bodyBend);
        // counter-shading: slate back, pale belly
        const bg = ctx.createLinearGradient(-s * 0.42, 0, s * 0.42, 0);
        bg.addColorStop(0, '#3a74a2');
        bg.addColorStop(0.45, hide);
        bg.addColorStop(0.72, '#a8cce6');
        bg.addColorStop(1, '#e8f4fc');
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.moveTo(0, -s * 0.95);
        ctx.bezierCurveTo(s * 0.4, -s * 0.7, s * 0.42, s * 0.5, s * 0.12, s * 1.0);
        ctx.lineTo(-s * 0.12, s * 1.0);
        ctx.bezierCurveTo(-s * 0.42, s * 0.5, -s * 0.4, -s * 0.7, 0, -s * 0.95);
        ctx.fill();
        // lateral line
        ctx.strokeStyle = 'rgba(20,30,36,0.35)';
        ctx.lineWidth = s * 0.025;
        ctx.beginPath();
        ctx.moveTo(-s * 0.3, -s * 0.4);
        ctx.quadraticCurveTo(-s * 0.36, s * 0.2, -s * 0.1, s * 0.9);
        ctx.stroke();
        // five gill slits
        ctx.strokeStyle = 'rgba(16,24,30,0.5)';
        ctx.lineWidth = s * 0.03;
        for (let k = 0; k < 5; k++) {
            ctx.beginPath();
            ctx.moveTo(s * (0.2 + k * 0.028), -s * (0.52 - k * 0.06));
            ctx.quadraticCurveTo(s * (0.3 + k * 0.028), -s * (0.46 - k * 0.06), s * (0.22 + k * 0.028), -s * (0.38 - k * 0.06));
            ctx.stroke();
        }
        // dorsal fin cutting the water above the midline
        const dg = ctx.createLinearGradient(-s * 0.5, -s * 0.1, 0, -s * 0.1);
        dg.addColorStop(0, '#33648c');
        dg.addColorStop(1, '#4484b4');
        ctx.fillStyle = dg;
        ctx.beginPath();
        ctx.moveTo(-s * 0.16, -s * 0.2);
        ctx.quadraticCurveTo(-s * 0.62, -s * 0.32, -s * 0.52, s * 0.12);
        ctx.quadraticCurveTo(-s * 0.3, s * 0.02, -s * 0.14, s * 0.12);
        ctx.closePath();
        ctx.fill();
        // the crying face on the snout
        A.eyes(ctx, 0, -s * 0.6, s * 0.5 * 0.26, s * 0.5 * 0.135, '#1c1712');
        ctx.restore();
    }
}
