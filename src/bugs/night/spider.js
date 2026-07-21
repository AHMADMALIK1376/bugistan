// ── SPIDER: eight jointed legs, two-part body, moonlit gloss ──────
class Spider {
    static draw(ctx, s, bob, bug) {
        const body = '#9c5ce8';
        // eight legs: four per side, proper out-then-down joints
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 4; i++) {
                const baseA = (-0.85 + i * 0.55) * side;
                const step = Math.sin(bug.legPhase * 0.8 + i * 1.6 + (side > 0 ? Math.PI : 0)) * 0.12;
                const a = baseA + step * side;
                const hipX = side * s * 0.16;
                const hipY = bob - s * 0.05 + (i - 1.5) * s * 0.1;
                const kneeX = hipX + Math.cos(a - side * 0.5) * s * 0.55;
                const kneeY = hipY + Math.sin(a - side * 0.5) * s * 0.55 - s * 0.22;
                const footX = kneeX + Math.cos(a + side * 0.35) * s * 0.5;
                const footY = kneeY + Math.sin(a + side * 0.35) * s * 0.5 + s * 0.4;
                ctx.strokeStyle = '#6236a2';
                ctx.lineCap = 'round';
                ctx.lineWidth = s * 0.065;
                ctx.beginPath(); ctx.moveTo(hipX, hipY); ctx.lineTo(kneeX, kneeY); ctx.stroke();
                ctx.lineWidth = s * 0.04;
                ctx.beginPath(); ctx.moveTo(kneeX, kneeY); ctx.lineTo(footX, footY); ctx.stroke();
                // moonlight edge on the femur
                ctx.strokeStyle = 'rgba(150,160,180,0.22)';
                ctx.lineWidth = s * 0.02;
                ctx.beginPath(); ctx.moveTo(hipX, hipY - s * 0.02); ctx.lineTo(kneeX, kneeY - s * 0.02); ctx.stroke();
            }
        }
        // abdomen: large glossy sac with folium pattern
        A.orb(ctx, 0, bob + s * 0.42, s * 0.42, s * 0.5, 0, body, { specA: 0.3 });
        ctx.strokeStyle = 'rgba(96,74,54,0.5)';
        ctx.lineWidth = s * 0.04;
        ctx.beginPath();
        ctx.moveTo(0, bob + s * 0.02);
        ctx.lineTo(0, bob + s * 0.5);
        ctx.stroke();
        for (let k = 0; k < 3; k++) {
            const py = bob + s * (0.16 + k * 0.18);
            ctx.beginPath();
            ctx.moveTo(-s * (0.2 - k * 0.045), py);
            ctx.quadraticCurveTo(0, py + s * 0.07, s * (0.2 - k * 0.045), py);
            ctx.stroke();
        }
        // cephalothorax
        A.orb(ctx, 0, bob - s * 0.14, s * 0.26, s * 0.24, 0, '#b57ef0', { specA: 0.28 });
        // eye cluster: two large, arc of small — genuinely spider
        A.face(ctx, 0, bob - s * 0.16, s * 0.52, bug.wobble);
        ctx.fillStyle = '#4a2880';
        for (let k = 0; k < 4; k++) {
            const ex = (k - 1.5) * s * 0.09;
            ctx.beginPath(); ctx.arc(ex, bob - s * 0.33, s * 0.025, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#4a2880';
        }
        // chelicerae fangs
        for (let side = -1; side <= 1; side += 2) {
            ctx.strokeStyle = '#4a2880';
            ctx.lineCap = 'round';
            ctx.lineWidth = s * 0.05;
            ctx.beginPath();
            ctx.moveTo(side * s * 0.06, bob - s * 0.36);
            ctx.lineTo(side * s * 0.05, bob - s * 0.48);
            ctx.stroke();
        }
    }
}
