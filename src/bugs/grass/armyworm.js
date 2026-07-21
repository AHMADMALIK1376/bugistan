// ── ARMYWORM: drab striped marcher, built for numbers ──────
class Armyworm {
    static draw(ctx, s, bob, bug) {
        const body = '#c9a55e';
        const n = 7;
        const ys = [];
        let acc = bob - s * 0.5;
        for (let i = 0; i < n; i++) {
            acc += s * (0.22 + 0.04 * Math.sin(bug.legPhase - i * 1.1));
            ys.push(acc);
        }
        // prolegs
        for (let i = 2; i < n; i++) {
            for (let side = -1; side <= 1; side += 2) {
                ctx.strokeStyle = A.tone(body, -0.45);
                ctx.lineCap = 'round';
                ctx.lineWidth = s * 0.06;
                ctx.beginPath();
                ctx.moveTo(side * s * 0.13, ys[i] + s * 0.06);
                ctx.lineTo(side * s * 0.2, ys[i] + s * 0.17);
                ctx.stroke();
            }
        }
        // segments: leaner than a garden caterpillar
        for (let i = n - 1; i >= 0; i--) {
            const r = s * 0.2;
            const sway = Math.sin(bug.wobble * 0.8 + i * 0.6) * s * 0.04;
            A.orb(ctx, sway, ys[i], r * 1.05, r, 0, i % 2 === 0 ? body : '#b8924c', { specA: 0.16 });
        }
        // the identifying stripes: dark dorsal band, cream laterals
        const bands = [
            { off: 0, color: 'rgba(40,30,18,0.6)', w: 0.08 },
            { off: -0.13, color: 'rgba(220,200,160,0.4)', w: 0.04 },
            { off: 0.13, color: 'rgba(220,200,160,0.4)', w: 0.04 }
        ];
        for (const b of bands) {
            ctx.strokeStyle = b.color;
            ctx.lineWidth = s * b.w;
            ctx.lineCap = 'round';
            ctx.beginPath();
            for (let i = 0; i < n; i++) {
                const sway = Math.sin(bug.wobble * 0.8 + i * 0.6) * s * 0.04;
                if (i === 0) { ctx.moveTo(sway + b.off * s, ys[i]); } else { ctx.lineTo(sway + b.off * s, ys[i]); }
            }
            ctx.stroke();
        }
        // glossy brown head capsule with netted pattern
        A.orb(ctx, 0, ys[0] - s * 0.18, s * 0.15, s * 0.14, 0, '#a5813e', { specA: 0.32 });
        ctx.strokeStyle = 'rgba(24,18,10,0.4)';
        ctx.lineWidth = 0.5;
        ctx.beginPath(); ctx.arc(0, ys[0] - s * 0.18, s * 0.1, Math.PI * 1.2, Math.PI * 1.8); ctx.stroke();
        A.face(ctx, 0, ys[0] - s * 0.18, s * 0.4, bug.wobble);
    }
}
