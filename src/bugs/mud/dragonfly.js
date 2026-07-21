// ── DRAGONFLY: four glassy wings, steel-teal needle tail ──────
class Dragonfly {
    static draw(ctx, s, bob, bug) {
        const flap = Math.sin(bug.wingPhase) * 0.22;
        const body = '#38c8e8';
        // two wing pairs: long fore, shorter hind, both glassy
        for (let side = -1; side <= 1; side += 2) {
            ctx.save(); ctx.scale(side, 1);
            A.wing(ctx, s * 0.1, bob - s * 0.16, s * 1.85, s * 0.42, 0.12, flap, '#d6f4fa', 0.34);
            A.wing(ctx, s * 0.1, bob + s * 0.14, s * 1.5, s * 0.46, 0.45, -flap * 0.8, '#c6eef6', 0.3);
            // pterostigma: the little dark cell near each wingtip
            ctx.save();
            ctx.rotate(0.12 + flap);
            ctx.fillStyle = 'rgba(30,50,60,0.55)';
            ctx.fillRect(s * 1.45, bob - s * 0.38, s * 0.18, s * 0.07);
            ctx.restore();
            ctx.restore();
        }
        // needle abdomen: segmented, tapering, slight drift
        A.segs(ctx, 0, bob + s * 0.42, 9, s * 0.15, s * 0.26, 0.5, body, bug.wobble);
        // tail claspers
        ctx.strokeStyle = A.tone(body, -0.4);
        ctx.lineWidth = s * 0.05;
        ctx.lineCap = 'round';
        const tipY = bob + s * 0.42 + 8 * s * 0.26;
        ctx.beginPath(); ctx.moveTo(-s * 0.04, tipY); ctx.lineTo(-s * 0.1, tipY + s * 0.2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(s * 0.04, tipY); ctx.lineTo(s * 0.1, tipY + s * 0.2); ctx.stroke();
        // powerful thorax with pale flank stripes
        A.orb(ctx, 0, bob, s * 0.3, s * 0.4, 0, '#28b4d8', { specA: 0.34 });
        ctx.strokeStyle = 'rgba(190,225,215,0.4)';
        ctx.lineWidth = s * 0.06;
        ctx.beginPath(); ctx.moveTo(-s * 0.2, bob - s * 0.24); ctx.lineTo(-s * 0.1, bob + s * 0.26); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(s * 0.2, bob - s * 0.24); ctx.lineTo(s * 0.1, bob + s * 0.26); ctx.stroke();
        // legs bunched forward like a catch basket
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                A.leg(ctx, side * s * 0.14, bob - s * 0.16 + i * s * 0.13,
                    side * s * (0.32 + i * 0.08), bob - s * 0.42 + i * s * 0.16,
                    side * s * 0.14, s * 0.05, '#1e6e88');
            }
        }
        // head: nearly all eye
        A.orb(ctx, 0, bob - s * 0.56, s * 0.24, s * 0.2, 0, '#1ea0c4', { specA: 0.2 });
        A.face(ctx, 0, bob - s * 0.56, s * 0.6, bug.wobble);
    }
}
