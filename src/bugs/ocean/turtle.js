// ── SEA TURTLE: scute-tiled shell, sweeping flippers ──────
class Turtle {
    static draw(ctx, s, bob, bug) {
        const shell = '#52c464';
        const stroke = Math.sin(bug.wobble * 1.2);
        // front flippers: long wings mid-sweep
        for (let side = -1; side <= 1; side += 2) {
            ctx.save();
            ctx.translate(side * s * 0.4, bob - s * 0.24);
            ctx.rotate(side * (0.65 + stroke * 0.3));
            const flg = ctx.createLinearGradient(0, 0, side * s * 0.8, 0);
            flg.addColorStop(0, '#74d482');
            flg.addColorStop(1, '#2e7e3c');
            ctx.fillStyle = flg;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(side * s * 0.45, -s * 0.16, side * s * 0.8, -s * 0.06, side * s * 0.9, s * 0.1);
            ctx.bezierCurveTo(side * s * 0.6, s * 0.16, side * s * 0.25, s * 0.14, 0, s * 0.1);
            ctx.closePath();
            ctx.fill();
            // flipper scale flecks
            ctx.fillStyle = 'rgba(200,215,160,0.2)';
            for (let k = 0; k < 3; k++) {
                ctx.beginPath();
                ctx.arc(side * s * (0.25 + k * 0.2), s * 0.0 - k * 0.02 * s, s * 0.035, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
        // rear flippers
        for (let side = -1; side <= 1; side += 2) {
            ctx.save();
            ctx.translate(side * s * 0.3, bob + s * 0.5);
            ctx.rotate(side * (2.4 - stroke * 0.15));
            ctx.fillStyle = '#37944a';
            ctx.beginPath();
            ctx.ellipse(s * 0.2, 0, s * 0.28, s * 0.12, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
        // carapace: domed, rimmed, tiled with scutes
        A.orb(ctx, 0, bob, s * 0.58, s * 0.68, 0, shell, { specA: 0.3 });
        // marginal rim
        ctx.strokeStyle = '#8ce69a';
        ctx.lineWidth = s * 0.06;
        ctx.beginPath(); ctx.ellipse(0, bob, s * 0.55, s * 0.65, 0, 0, Math.PI * 2); ctx.stroke();
        // central scute column + side plates
        ctx.strokeStyle = 'rgba(20,32,14,0.55)';
        ctx.lineWidth = s * 0.03;
        for (let k = 0; k < 3; k++) {
            const py = bob - s * 0.38 + k * s * 0.36;
            ctx.beginPath();
            ctx.moveTo(-s * 0.16, py);
            ctx.lineTo(0, py - s * 0.08);
            ctx.lineTo(s * 0.16, py);
            ctx.lineTo(s * 0.16, py + s * 0.24);
            ctx.lineTo(0, py + s * 0.3);
            ctx.lineTo(-s * 0.16, py + s * 0.24);
            ctx.closePath();
            ctx.stroke();
            // side scute seams
            ctx.beginPath(); ctx.moveTo(-s * 0.16, py + s * 0.06); ctx.lineTo(-s * 0.46, py - s * 0.02); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(s * 0.16, py + s * 0.06); ctx.lineTo(s * 0.46, py - s * 0.02); ctx.stroke();
        }
        // sun dapple on the wet shell
        const dap = ctx.createRadialGradient(-s * 0.18, bob - s * 0.24, 0, -s * 0.18, bob - s * 0.24, s * 0.5);
        dap.addColorStop(0, 'rgba(220,240,190,0.22)');
        dap.addColorStop(1, 'rgba(220,240,190,0)');
        ctx.fillStyle = dap;
        ctx.beginPath(); ctx.ellipse(0, bob, s * 0.58, s * 0.68, 0, 0, Math.PI * 2); ctx.fill();
        // head: scaled wedge with a gentle beak, no cartoon smile
        A.orb(ctx, 0, bob - s * 0.82, s * 0.19, s * 0.23, 0, '#3cae50', { specA: 0.26 });
        A.eyes(ctx, 0, bob - s * 0.84, s * 0.36 * 0.26, s * 0.36 * 0.135, '#1c1712');
    }
}
