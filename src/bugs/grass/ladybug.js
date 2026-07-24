// ── LADYBUG: coral shell, golden spots, glossy black head ──────
class Ladybug {
    static draw(ctx, s, bob, bug) {
        const gait = bug.legPhase;
        A.walk(ctx, s, gait, [
            { ay: -0.02, out: 1.14, mid: -0.28, hip: 0.62 },
            { ay: 0.32, out: 1.20, mid: 0.06, hip: 0.62 },
            { ay: 0.64, out: 1.12, mid: 0.40, hip: 0.62 }
        ], '#221C18', s * 0.07);
        A.antenna(ctx, s, -s * 0.16, -s * 1.18, -s * 0.42, -s * 1.66, '#221C18', true);
        A.antenna(ctx, s, s * 0.16, -s * 1.18, s * 0.42, -s * 1.66, '#221C18', true);

        const cx = 0, cy = s * 0.22, rx = s * 1.0, ry = s * 1.02;
        ctx.fillStyle = '#C24A38';
        ctx.beginPath(); ctx.ellipse(cx, cy, rx + s * 0.04, ry + s * 0.04, 0, 0, Math.PI * 2); ctx.fill();
        const sg = ctx.createLinearGradient(-rx, cy - ry, rx, cy + ry);
        sg.addColorStop(0, '#F79076'); sg.addColorStop(0.5, '#EF7060'); sg.addColorStop(1, '#D65744');
        ctx.fillStyle = sg;
        ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.fill();

        ctx.save();
        ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.clip();
        const aog = ctx.createLinearGradient(0, cy + ry * 0.1, 0, cy + ry);
        aog.addColorStop(0, 'rgba(120,42,32,0)'); aog.addColorStop(1, 'rgba(120,42,32,0.30)');
        ctx.fillStyle = aog; ctx.fillRect(cx - rx, cy - ry, rx * 2, ry * 2.2);
        ctx.strokeStyle = '#221C18'; ctx.lineCap = 'round'; ctx.lineWidth = s * 0.06;
        ctx.beginPath(); ctx.moveTo(0, cy - ry); ctx.lineTo(0, cy + ry); ctx.stroke();
        const spots = [[-0.42, -0.30, 0.20], [-0.50, 0.18, 0.17], [-0.22, 0.50, 0.17], [0.40, -0.34, 0.19], [0.50, 0.16, 0.18], [0.24, 0.52, 0.16], [0.02, 0.04, 0.15]];
        for (const [px, py, pr] of spots) A.spot(ctx, px * s, cy + py * s, pr * s, '#F5C95A', '#E4A63C');
        ctx.restore();

        ctx.save();
        ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.clip();
        ctx.strokeStyle = 'rgba(255,241,231,0.42)'; ctx.lineWidth = s * 0.05; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.ellipse(cx, cy, rx * 0.97, ry * 0.97, 0, Math.PI * 1.08, Math.PI * 1.7); ctx.stroke();
        ctx.restore();

        ctx.fillStyle = '#F2836E';
        ctx.beginPath(); ctx.ellipse(0, -s * 0.62, s * 0.50, s * 0.27, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(28,18,14,0.16)';
        ctx.beginPath(); ctx.ellipse(0, -s * 0.74, s * 0.42, s * 0.15, 0, 0, Math.PI * 2); ctx.fill();

        A.body(ctx, 0, -s * 1.05, s * 0.51, s * 0.43, 0, '#33291F', false);
        ctx.fillStyle = 'rgba(255,255,255,0.16)';
        ctx.beginPath(); ctx.ellipse(-s * 0.16, -s * 1.20, s * 0.20, s * 0.12, -0.5, 0, Math.PI * 2); ctx.fill();
        A.eyes(ctx, 0, -s * 1.03, s * 0.20, s * 0.13, '#221C18');
    }
}
