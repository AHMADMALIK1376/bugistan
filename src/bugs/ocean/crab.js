// ── CRAB: rust-red armor, jointed walkers, asymmetric claws ──────
class Crab {
    static draw(ctx, s, bob, bug) {
        const shell = '#ff5a3c';
        // four walking legs per side, properly jointed
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 4; i++) {
                const step = Math.sin(bug.legPhase * 1.2 + i * 1.5 + (side > 0 ? Math.PI : 0)) * s * 0.1;
                const hipX = side * s * 0.4;
                const hipY = bob + (i - 1.5) * s * 0.16;
                const kneeX = side * s * (0.72 + i * 0.04);
                const kneeY = hipY - s * 0.18 + step * 0.5;
                const footX = side * s * (0.95 + i * 0.05);
                const footY = hipY + s * 0.24 + step;
                ctx.strokeStyle = '#a03018';
                ctx.lineCap = 'round';
                ctx.lineWidth = s * 0.07;
                ctx.beginPath(); ctx.moveTo(hipX, hipY); ctx.lineTo(kneeX, kneeY); ctx.stroke();
                ctx.lineWidth = s * 0.045;
                ctx.beginPath(); ctx.moveTo(kneeX, kneeY); ctx.lineTo(footX, footY); ctx.stroke();
                // lit top edge on the femur
                ctx.strokeStyle = 'rgba(240,150,110,0.3)';
                ctx.lineWidth = s * 0.02;
                ctx.beginPath(); ctx.moveTo(hipX, hipY - s * 0.02); ctx.lineTo(kneeX, kneeY - s * 0.02); ctx.stroke();
            }
        }
        // carapace: wide shield with bumpy margins
        A.orb(ctx, 0, bob, s * 0.62, s * 0.46, 0, shell, { specA: 0.34 });
        // margin teeth
        ctx.fillStyle = '#e04426';
        for (let side = -1; side <= 1; side += 2) {
            for (let k = 0; k < 3; k++) {
                const a = Math.PI * (1.5 + side * (0.14 + k * 0.1));
                ctx.beginPath();
                ctx.arc(Math.cos(a) * s * 0.6, bob + Math.sin(a) * s * 0.44, s * 0.045, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        // carapace regions: the H-shaped gastric grooves
        ctx.strokeStyle = 'rgba(60,16,8,0.4)';
        ctx.lineWidth = s * 0.03;
        ctx.beginPath();
        ctx.moveTo(-s * 0.16, bob - s * 0.24);
        ctx.quadraticCurveTo(0, bob - s * 0.05, s * 0.16, bob - s * 0.24);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-s * 0.2, bob + s * 0.12);
        ctx.quadraticCurveTo(0, bob + s * 0.24, s * 0.2, bob + s * 0.12);
        ctx.stroke();
        // claws: one big crusher, one smaller cutter
        for (let side = -1; side <= 1; side += 2) {
            const big = side < 0;
            const cs = big ? 1.0 : 0.72;
            const snap = Math.max(0, Math.sin(bug.legPhase * 0.8 + side)) * 0.2;
            ctx.save();
            ctx.translate(side * s * 0.5, bob - s * 0.42);
            ctx.rotate(side * -0.35);
            // arm
            ctx.strokeStyle = '#a03018';
            ctx.lineCap = 'round';
            ctx.lineWidth = s * 0.09 * cs;
            ctx.beginPath(); ctx.moveTo(side * -s * 0.1, s * 0.2); ctx.lineTo(0, 0); ctx.stroke();
            // palm
            A.orb(ctx, side * s * 0.08, -s * 0.1, s * 0.2 * cs, s * 0.15 * cs, side * 0.3, '#ff7a5c', { specA: 0.4 });
            // fixed + moving fingers
            ctx.strokeStyle = '#702210';
            ctx.lineWidth = s * 0.05 * cs;
            ctx.beginPath();
            ctx.moveTo(side * s * 0.16 * cs, -s * 0.18 * cs);
            ctx.quadraticCurveTo(side * s * 0.3 * cs, -s * 0.3 * cs, side * s * 0.2 * cs, -s * 0.42 * cs);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(side * s * 0.04, -s * 0.2 * cs);
            ctx.quadraticCurveTo(side * (s * 0.06 - snap * s * 0.1), -s * 0.36 * cs, side * (s * 0.14 * cs - snap * s * 0.16), -s * 0.44 * cs);
            ctx.stroke();
            ctx.restore();
        }
        // the crying face on the carapace
        A.face(ctx, 0, bob - s * 0.08, s * 0.55, bug.wobble);
    }
}
