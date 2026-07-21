// ── CATERPILLAR: plump inching larva, dorsal stripe, prolegs ──────
class Caterpillar {
    static draw(ctx, s, bob, bug) {
        const body = '#7fdc46';
        const n = 8;
        // inching gait: segments compress and stretch in a wave
        const ys = [];
        let acc = bob - s * 0.55;
        for (let i = 0; i < n; i++) {
            const squeeze = 0.24 + 0.05 * Math.sin(bug.legPhase * 0.8 - i * 0.9);
            acc += s * squeeze;
            ys.push(acc);
        }
        // prolegs: stubby grips under the rear segments
        for (let i = 2; i < n; i++) {
            for (let side = -1; side <= 1; side += 2) {
                ctx.strokeStyle = A.tone(body, -0.4);
                ctx.lineCap = 'round';
                ctx.lineWidth = s * 0.07;
                ctx.beginPath();
                ctx.moveTo(side * s * 0.16, ys[i] + s * 0.08);
                ctx.lineTo(side * s * 0.24, ys[i] + s * 0.2);
                ctx.stroke();
            }
        }
        // body segments rear-to-front, slightly lumpy
        for (let i = n - 1; i >= 0; i--) {
            const r = s * (0.24 - Math.abs(i - 2.5) * 0.012);
            const sway = Math.sin(bug.wobble * 0.7 + i * 0.5) * s * 0.05;
            A.orb(ctx, sway, ys[i], r * 1.08, r, 0, body, { specA: 0.22 });
            // spiracle dot on the flank
            ctx.fillStyle = 'rgba(30,40,14,0.55)';
            ctx.beginPath(); ctx.arc(sway - r * 0.75, ys[i], s * 0.03, 0, Math.PI * 2); ctx.fill();
        }
        // dark dorsal stripe stitched down the back
        ctx.strokeStyle = 'rgba(36,50,18,0.6)';
        ctx.lineWidth = s * 0.09;
        ctx.lineCap = 'round';
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
            const sway = Math.sin(bug.wobble * 0.7 + i * 0.5) * s * 0.05;
            if (i === 0) { ctx.moveTo(sway, ys[i]); } else { ctx.lineTo(sway, ys[i]); }
        }
        ctx.stroke();
        // pale side stripe
        ctx.strokeStyle = 'rgba(200,220,150,0.35)';
        ctx.lineWidth = s * 0.05;
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
            const sway = Math.sin(bug.wobble * 0.7 + i * 0.5) * s * 0.05;
            if (i === 0) { ctx.moveTo(sway - s * 0.16, ys[i]); } else { ctx.lineTo(sway - s * 0.16, ys[i]); }
        }
        ctx.stroke();
        // hard head capsule, no cartoon face
        A.orb(ctx, 0, ys[0] - s * 0.2, s * 0.17, s * 0.16, 0, '#63bc30', { specA: 0.3 });
        A.face(ctx, 0, ys[0] - s * 0.2, s * 0.44, bug.wobble);
        // tiny true legs at the front
        for (let side = -1; side <= 1; side += 2) {
            ctx.strokeStyle = A.tone(body, -0.45);
            ctx.lineWidth = s * 0.045;
            ctx.beginPath();
            ctx.moveTo(side * s * 0.12, ys[0] + s * 0.02);
            ctx.lineTo(side * s * 0.2, ys[0] + s * 0.16);
            ctx.stroke();
        }
    }
}
