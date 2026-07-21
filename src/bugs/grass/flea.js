// ── FLEA: mahogany spring, compressed silhouette, comb spines ──────
class Flea {
    static draw(ctx, s, bob, bug) {
        const body = '#b85c34';
        const coil = Math.abs(Math.sin(bug.legPhase * 0.6));
        // enormous hind jumping legs, coiled
        for (let side = -1; side <= 1; side += 2) {
            ctx.save();
            ctx.translate(side * s * 0.22, bob + s * 0.28);
            ctx.rotate(side * (0.55 + coil * 0.35));
            A.orb(ctx, s * 0.24, 0, s * 0.3, s * 0.11, 0, '#cc7850', { specA: 0.2 });
            ctx.strokeStyle = '#703419';
            ctx.lineCap = 'round';
            ctx.lineWidth = s * 0.05;
            ctx.beginPath();
            ctx.moveTo(s * 0.5, s * 0.02);
            ctx.lineTo(s * (0.2 - coil * 0.15), s * 0.42);
            ctx.stroke();
            ctx.restore();
        }
        // small front/mid legs gathered forward
        for (let side = -1; side <= 1; side += 2) {
            const sw = Math.sin(bug.legPhase + (side > 0 ? Math.PI : 0)) * s * 0.06;
            A.leg(ctx, side * s * 0.12, bob - s * 0.15, side * s * 0.34 + sw, bob + s * 0.06 + sw, side * s * 0.1, s * 0.04, '#703419');
            A.leg(ctx, side * s * 0.13, bob + s * 0.02, side * s * 0.38 - sw, bob + s * 0.24 - sw, side * s * 0.12, s * 0.04, '#703419');
        }
        // laterally-flattened body: taller than wide, arched back
        A.orb(ctx, 0, bob + s * 0.05, s * 0.3, s * 0.5, 0.08, body, { specA: 0.4 });
        // segment plates across the back
        ctx.strokeStyle = 'rgba(20,10,5,0.55)';
        ctx.lineWidth = 0.7;
        for (let k = 0; k < 3; k++) {
            ctx.beginPath();
            ctx.arc(0, bob - s * 0.1 + k * s * 0.2, s * 0.27, Math.PI * 0.15, Math.PI * 0.85);
            ctx.stroke();
        }
        // genal comb: the little spine row along the jaw
        ctx.strokeStyle = 'rgba(28,14,7,0.8)';
        ctx.lineWidth = s * 0.03;
        for (let k = 0; k < 4; k++) {
            const a = Math.PI * (1.15 + k * 0.14);
            ctx.beginPath();
            ctx.moveTo(Math.cos(a) * s * 0.26, bob - s * 0.28 + Math.sin(a) * s * 0.2);
            ctx.lineTo(Math.cos(a) * s * 0.38, bob - s * 0.28 + Math.sin(a) * s * 0.3);
            ctx.stroke();
        }
        // tiny head fused into the arch
        A.orb(ctx, 0, bob - s * 0.42, s * 0.15, s * 0.17, 0, '#a84e2a', {});
        A.face(ctx, 0, bob - s * 0.42, s * 0.4, bug.wobble);
        // piercing mouthparts
        ctx.strokeStyle = '#4e2410';
        ctx.lineWidth = s * 0.035;
        ctx.beginPath(); ctx.moveTo(0, bob - s * 0.56); ctx.lineTo(0, bob - s * 0.72); ctx.stroke();
    }
}
