// ── JELLYFISH: translucent bell, inner glow, trailing silk ──────
class Jellyfish {
    static draw(ctx, s, bob, bug) {
        const tint = '#e070e8';
        const pulse = 0.85 + Math.sin(bug.wobble * 1.8) * 0.15;
        const bw = s * 0.62 * pulse;
        const bh = s * 0.5 / Math.sqrt(pulse);
        // long trailing tentacles, four ribbons + fine threads
        ctx.lineCap = 'round';
        for (let i = 0; i < 7; i++) {
            const off = (i - 3) * s * 0.14;
            const wave = Math.sin(bug.wobble * 1.2 + i * 1.1) * s * 0.18;
            const isRibbon = i % 2 === 0;
            ctx.strokeStyle = isRibbon
                ? A.tone(tint, 0.25, 0.30)
                : A.tone(tint, 0.45, 0.18);
            ctx.lineWidth = isRibbon ? s * 0.05 : s * 0.02;
            ctx.beginPath();
            ctx.moveTo(off * pulse, bob + bh * 0.5);
            ctx.bezierCurveTo(
                off + wave * 0.4, bob + s * 0.7,
                off * 1.4 - wave, bob + s * 1.1,
                off * 1.7 + wave * 1.3, bob + s * (1.5 + (i % 3) * 0.14));
            ctx.stroke();
        }
        // frilled oral arms in the center
        for (let i = -1; i <= 1; i += 2) {
            const wave = Math.sin(bug.wobble * 1.4 + i) * s * 0.12;
            ctx.strokeStyle = A.tone(tint, 0.1, 0.35);
            ctx.lineWidth = s * 0.08;
            ctx.beginPath();
            ctx.moveTo(i * s * 0.08, bob + bh * 0.4);
            ctx.quadraticCurveTo(i * s * 0.2 + wave, bob + s * 0.75, i * s * 0.1 + wave * 1.5, bob + s * 1.05);
            ctx.stroke();
        }
        // the bell: layered translucency with a bright rim
        const bellG = ctx.createRadialGradient(-bw * 0.2, bob - bh * 0.5, 0, 0, bob - bh * 0.15, bw * 1.25);
        bellG.addColorStop(0, A.tone(tint, 0.55, 0.5));
        bellG.addColorStop(0.55, A.tone(tint, 0.15, 0.3));
        bellG.addColorStop(0.85, A.tone(tint, -0.1, 0.18));
        bellG.addColorStop(1, A.tone(tint, 0.3, 0.04));
        ctx.fillStyle = bellG;
        ctx.beginPath();
        ctx.moveTo(-bw, bob + bh * 0.3);
        ctx.bezierCurveTo(-bw * 1.05, bob - bh, bw * 1.05, bob - bh, bw, bob + bh * 0.3);
        ctx.quadraticCurveTo(bw * 0.5, bob + bh * 0.55, 0, bob + bh * 0.5);
        ctx.quadraticCurveTo(-bw * 0.5, bob + bh * 0.55, -bw, bob + bh * 0.3);
        ctx.fill();
        // scalloped rim lip
        ctx.strokeStyle = A.tone(tint, 0.5, 0.45);
        ctx.lineWidth = s * 0.03;
        ctx.beginPath();
        for (let k = 0; k <= 8; k++) {
            const px = -bw + (k / 8) * bw * 2;
            const py = bob + bh * (0.3 + 0.12 * Math.abs(Math.sin(k * Math.PI * 0.5)));
            if (k === 0) { ctx.moveTo(px, py); } else { ctx.quadraticCurveTo(px - bw / 8, py + s * 0.05, px, py); }
        }
        ctx.stroke();
        // inner organs: the four-leaf gonad ring every real jelly has
        ctx.fillStyle = A.tone(tint, -0.15, 0.4);
        for (let k = 0; k < 4; k++) {
            const a = k * Math.PI / 2 + Math.PI / 4;
            ctx.beginPath();
            ctx.ellipse(Math.cos(a) * bw * 0.28, bob - bh * 0.25 + Math.sin(a) * bh * 0.22, s * 0.1, s * 0.07, a, 0, Math.PI * 2);
            ctx.fill();
        }
        // bioluminescent heartbeat
        A.glow(ctx, 0, bob - bh * 0.2, bw * 0.9, tint, 0.10 + (pulse - 0.85) * 0.8);
        // rim highlight
        ctx.strokeStyle = 'rgba(255,255,255,0.28)';
        ctx.lineWidth = s * 0.025;
        ctx.beginPath();
        ctx.arc(-bw * 0.25, bob - bh * 0.45, bw * 0.5, Math.PI * 1.1, Math.PI * 1.6);
        ctx.stroke();
        // the crying face on the bell
        A.face(ctx, 0, bob - bh * 0.3, bw * 0.8, bug.wobble);
    }
}
