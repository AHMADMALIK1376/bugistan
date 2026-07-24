// ── LEAFHOPPER: green glassy wedge, shovel head ──────
class Leafhopper {
    static draw(ctx, s, bob, bug) {
        const gait = bug.legPhase;
        A.walk(ctx, s, gait, [{ ay: -0.05, out: 0.72, mid: 0.12, hip: 0.16 }, { ay: 0.16, out: 0.88, mid: 0.36, hip: 0.18 }], '#3C9E52', s * 0.05);
        // wedge body — widest at the head, tapering to a point
        const g = ctx.createLinearGradient(-s * 0.3, 0, s * 0.3, 0);
        g.addColorStop(0, '#3C9E52'); g.addColorStop(0.42, '#83D98C'); g.addColorStop(1, '#3C9E52');
        ctx.fillStyle = g; ctx.beginPath();
        ctx.moveTo(-s * 0.3, -s * 0.34); ctx.quadraticCurveTo(-s * 0.32, s * 0.2, -s * 0.05, s * 0.8); ctx.lineTo(s * 0.05, s * 0.8);
        ctx.quadraticCurveTo(s * 0.32, s * 0.2, s * 0.3, -s * 0.34); ctx.quadraticCurveTo(0, -s * 0.5, -s * 0.3, -s * 0.34); ctx.closePath(); ctx.fill();
        // soft ambient occlusion toward the tapering tail
        ctx.save(); ctx.clip();
        const aog = ctx.createLinearGradient(0, s * 0.3, 0, s * 0.85);
        aog.addColorStop(0, 'rgba(16,40,14,0)'); aog.addColorStop(1, 'rgba(16,40,14,0.32)');
        ctx.fillStyle = aog; ctx.fillRect(-s * 0.35, -s * 0.4, s * 0.7, s * 1.3);
        ctx.restore();
        ctx.strokeStyle = 'rgba(20,54,16,0.5)'; ctx.lineCap = 'round'; ctx.lineWidth = s * 0.05; ctx.beginPath(); ctx.moveTo(0, -s * 0.3); ctx.lineTo(0, s * 0.76); ctx.stroke();
        ctx.fillStyle = 'rgba(255,255,240,0.22)'; ctx.beginPath(); ctx.ellipse(-s * 0.14, -s * 0.16, s * 0.08, s * 0.24, 0.12, 0, Math.PI * 2); ctx.fill();
        // wide shovel head + eyes + short antennae
        A.body(ctx, 0, -s * 0.44, s * 0.28, s * 0.16, 0, '#83D98C');
        A.eyes(ctx, 0, -s * 0.46, s * 0.17, s * 0.085, '#221C18');
        A.antenna(ctx, s, -s * 0.16, -s * 0.54, -s * 0.28, -s * 0.82, '#3C9E52', false);
        A.antenna(ctx, s, s * 0.16, -s * 0.54, s * 0.28, -s * 0.82, '#3C9E52', false);
    }
}
