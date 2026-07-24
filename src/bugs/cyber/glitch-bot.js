// ── GLITCH BOT: boxy retro robot that keeps glitching apart ──────
class GlitchBot {
    static draw(ctx, s, bob, bug) {
        const body = '#3ce0e0';
        const glitch = Math.sin(bug.wobble * 5) > 0.8 ? Math.sin(bug.wobble * 40) * s * 0.14 : 0;
        // glitch ghost: offset color-shifted copy flickers behind
        if (glitch !== 0) {
            ctx.save();
            ctx.globalAlpha = 0.4;
            ctx.fillStyle = '#e858c8';
            ctx.fillRect(-s * 0.44 + glitch, bob - s * 0.3, s * 0.88, s * 0.28);
            ctx.fillStyle = '#4ce06a';
            ctx.fillRect(-s * 0.44 - glitch, bob + s * 0.1, s * 0.88, s * 0.22);
            ctx.restore();
        }
        // stubby piston legs
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 2; i++) {
                const step = Math.sin(bug.legPhase + i * 2 + (side > 0 ? Math.PI : 0)) * s * 0.1;
                A.leg(ctx, side * s * 0.3, bob + s * 0.3 + i * s * 0.12,
                    side * s * 0.55, bob + s * 0.62 + step, side * s * 0.1, s * 0.07, '#1e8a8a');
            }
        }
        // boxy torso
        ctx.save();
        ctx.translate(glitch * 0.4, 0);
        const tg = ctx.createLinearGradient(0, bob - s * 0.1, 0, bob + s * 0.5);
        tg.addColorStop(0, A.tone(body, 0.18));
        tg.addColorStop(1, A.tone(body, -0.14));
        ctx.fillStyle = tg;
        ctx.beginPath();
        ctx.roundRect(-s * 0.4, bob - s * 0.08, s * 0.8, s * 0.55, s * 0.12);
        ctx.fill();
        // chest panel with blinking pixel lights
        ctx.fillStyle = 'rgba(10,40,48,0.85)';
        ctx.beginPath();
        ctx.roundRect(-s * 0.24, bob + s * 0.06, s * 0.48, s * 0.26, s * 0.06);
        ctx.fill();
        for (let k = 0; k < 3; k++) {
            const on = Math.sin(bug.wobble * 3 + k * 2.1) > 0;
            ctx.fillStyle = on ? '#4ce06a' : 'rgba(76,224,106,0.2)';
            ctx.beginPath();
            ctx.arc(-s * 0.14 + k * s * 0.14, bob + s * 0.19, s * 0.035, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
        // boxy head with the crying face
        ctx.save();
        ctx.translate(-glitch * 0.6, 0);
        const hg = ctx.createLinearGradient(0, bob - s * 0.66, 0, bob - s * 0.1);
        hg.addColorStop(0, A.tone(body, 0.3));
        hg.addColorStop(1, body);
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.roundRect(-s * 0.34, bob - s * 0.66, s * 0.68, s * 0.54, s * 0.14);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.beginPath();
        ctx.ellipse(-s * 0.18, bob - s * 0.56, s * 0.1, s * 0.05, -0.3, 0, Math.PI * 2);
        ctx.fill();
        A.eyes(ctx, 0, bob - s * 0.42, s * 0.48 * 0.26, s * 0.48 * 0.135, '#1c1712');
        ctx.restore();
        // antenna with blinking tip
        ctx.strokeStyle = '#1e8a8a';
        ctx.lineWidth = s * 0.04;
        ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(0, bob - s * 0.66); ctx.lineTo(0, bob - s * 0.88); ctx.stroke();
        const blink = Math.sin(bug.wobble * 4) > 0 ? 0.95 : 0.25;
        ctx.fillStyle = `rgba(232,88,200,${blink})`;
        ctx.beginPath(); ctx.arc(0, bob - s * 0.92, s * 0.05, 0, Math.PI * 2); ctx.fill();
        A.glow(ctx, 0, bob - s * 0.92, s * 0.14, '#e858c8', blink * 0.4);
    }
}
