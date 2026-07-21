// ── CIRCUIT CRAWLER: segmented board-bot inching along ──────
class CircuitCrawler {
    static draw(ctx, s, bob, bug) {
        const body = '#4ce06a';
        const n = 5;
        const ys = [];
        let acc = bob - s * 0.55;
        for (let i = 0; i < n; i++) {
            acc += s * (0.28 + 0.05 * Math.sin(bug.legPhase * 0.8 - i * 0.9));
            ys.push(acc);
        }
        // little wheel-feet under each segment
        for (let i = 0; i < n; i++) {
            for (let side = -1; side <= 1; side += 2) {
                ctx.fillStyle = '#26804a';
                ctx.beginPath();
                ctx.arc(side * s * 0.24, ys[i] + s * 0.1, s * 0.06, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        // connector cable along the spine
        ctx.strokeStyle = '#26804a';
        ctx.lineWidth = s * 0.06;
        ctx.lineCap = 'round';
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
            if (i === 0) { ctx.moveTo(0, ys[i]); } else { ctx.lineTo(0, ys[i]); }
        }
        ctx.stroke();
        // rounded chip segments, rear to front
        for (let i = n - 1; i >= 1; i--) {
            const w = s * (0.42 - i * 0.02);
            const g = ctx.createLinearGradient(0, ys[i] - s * 0.12, 0, ys[i] + s * 0.12);
            g.addColorStop(0, A.tone(body, 0.2));
            g.addColorStop(1, A.tone(body, -0.12));
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.roundRect(-w / 2, ys[i] - s * 0.12, w, s * 0.24, s * 0.07);
            ctx.fill();
            // LED per segment, blinking in sequence
            const on = Math.sin(bug.wobble * 3 - i * 1.2) > 0.2;
            ctx.fillStyle = on ? '#e858c8' : 'rgba(232,88,200,0.25)';
            ctx.beginPath(); ctx.arc(w * 0.28, ys[i], s * 0.035, 0, Math.PI * 2); ctx.fill();
            // tiny circuit trace
            ctx.strokeStyle = 'rgba(20,80,44,0.6)';
            ctx.lineWidth = s * 0.02;
            ctx.beginPath();
            ctx.moveTo(-w * 0.3, ys[i] - s * 0.05);
            ctx.lineTo(-w * 0.1, ys[i] - s * 0.05);
            ctx.lineTo(-w * 0.1, ys[i] + s * 0.06);
            ctx.stroke();
        }
        // head chip with the crying face
        const hg = ctx.createLinearGradient(0, ys[0] - s * 0.22, 0, ys[0] + s * 0.18);
        hg.addColorStop(0, A.tone(body, 0.3));
        hg.addColorStop(1, body);
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.roundRect(-s * 0.26, ys[0] - s * 0.22, s * 0.52, s * 0.4, s * 0.1);
        ctx.fill();
        A.face(ctx, 0, ys[0] - s * 0.06, s * 0.42, bug.wobble);
        // antenna feelers
        A.antennae(ctx, s * 0.5, ys[0] - s * 0.22, bug.antennaPhase, '#26804a', { len: 0.5, club: true });
    }
}
