// ── BEETLE: teal dome, mustard patches, weevil snout ──────
class Beetle {
    static draw(ctx, s, bob, bug) {
        const gait = bug.legPhase;
        A.walk(ctx, s, gait, [
            { ay: -0.05, out: 1.06, mid: -0.22, hip: 0.5 },
            { ay: 0.3, out: 1.14, mid: 0.06, hip: 0.52 },
            { ay: 0.6, out: 1.04, mid: 0.36, hip: 0.5 }
        ], '#221C18', s * 0.07);
        A.antenna(ctx, s, -s * 0.12, -s * 0.92, -s * 0.34, -s * 1.28, '#221C18', true);
        A.antenna(ctx, s, s * 0.12, -s * 0.92, s * 0.34, -s * 1.28, '#221C18', true);

        const cx = 0, cy = s * 0.2, rx = s * 0.94, ry = s * 1.0;
        ctx.fillStyle = '#2C7468';
        ctx.beginPath(); ctx.ellipse(cx, cy, rx + s * 0.04, ry + s * 0.04, 0, 0, Math.PI * 2); ctx.fill();
        const g = ctx.createLinearGradient(-rx, cy - ry, rx, cy + ry);
        g.addColorStop(0, '#5CC0A9'); g.addColorStop(0.55, '#3E9E8E'); g.addColorStop(1, '#2C7468');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.fill();

        ctx.save();
        ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.clip();
        ctx.strokeStyle = '#221C18'; ctx.lineCap = 'round'; ctx.lineWidth = s * 0.06;
        ctx.beginPath(); ctx.moveTo(0, cy - ry); ctx.lineTo(0, cy + ry); ctx.stroke();
        const patches = [[-0.42, -0.30, 0.20], [0.40, -0.22, 0.19], [-0.46, 0.18, 0.17], [0.46, 0.22, 0.18], [-0.2, 0.5, 0.16], [0.24, 0.5, 0.16], [0.02, 0.02, 0.14]];
        for (const [px, py, pr] of patches) A.spot(ctx, px * s, cy + py * s, pr * s, '#EBBB58', '#CE9636');
        const aog = ctx.createLinearGradient(0, cy + ry * 0.1, 0, cy + ry);
        aog.addColorStop(0, 'rgba(20,60,52,0)'); aog.addColorStop(1, 'rgba(20,60,52,0.32)');
        ctx.fillStyle = aog; ctx.fillRect(cx - rx, cy - ry, rx * 2, ry * 2.2);
        ctx.restore();

        ctx.save();
        ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2); ctx.clip();
        ctx.strokeStyle = 'rgba(220,255,246,0.4)'; ctx.lineWidth = s * 0.05; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.ellipse(cx, cy, rx * 0.97, ry * 0.97, 0, Math.PI * 1.08, Math.PI * 1.7); ctx.stroke();
        ctx.restore();

        A.body(ctx, 0, -s * 0.82, s * 0.3, s * 0.24, 0, '#33291F', false);
        ctx.fillStyle = '#33291F';
        ctx.beginPath(); ctx.ellipse(0, -s * 1.12, s * 0.08, s * 0.2, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.14)';
        ctx.beginPath(); ctx.ellipse(-s * 0.1, -s * 0.94, s * 0.14, s * 0.09, -0.5, 0, Math.PI * 2); ctx.fill();
        A.eyes(ctx, 0, -s * 0.82, s * 0.16, s * 0.095, '#221C18');
    }
}
