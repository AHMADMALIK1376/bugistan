// ── ALIEN: grey-green visitor, obsidian eyes, gravity shimmer ──────
class Alien {
    static draw(ctx, s, bob, bug) {
        const skin = '#62e04e';
        const hover = Math.sin(bug.wobble * 1.5) * s * 0.05;
        const y = bob + hover;
        // anti-grav distortion ring beneath
        const ring = ctx.createRadialGradient(0, y + s * 0.85, s * 0.1, 0, y + s * 0.85, s * 0.6);
        ring.addColorStop(0, 'rgba(120,220,190,0.20)');
        ring.addColorStop(0.6, 'rgba(90,180,160,0.08)');
        ring.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = ring;
        ctx.beginPath(); ctx.ellipse(0, y + s * 0.85, s * 0.6, s * 0.16, 0, 0, Math.PI * 2); ctx.fill();
        // slender trailing limbs, three-fingered
        for (let side = -1; side <= 1; side += 2) {
            const drift = Math.sin(bug.legPhase * 0.5 + side) * s * 0.06;
            ctx.strokeStyle = A.tone(skin, -0.3);
            ctx.lineCap = 'round';
            ctx.lineWidth = s * 0.055;
            // arm
            ctx.beginPath();
            ctx.moveTo(side * s * 0.2, y + s * 0.05);
            ctx.quadraticCurveTo(side * s * 0.45, y + s * 0.25 + drift, side * s * 0.4, y + s * 0.5 + drift);
            ctx.stroke();
            for (let f = -1; f <= 1; f++) {
                ctx.lineWidth = s * 0.025;
                ctx.beginPath();
                ctx.moveTo(side * s * 0.4, y + s * 0.5 + drift);
                ctx.lineTo(side * s * (0.4 + f * 0.06), y + s * 0.62 + drift);
                ctx.stroke();
            }
            // leg
            ctx.lineWidth = s * 0.06;
            ctx.beginPath();
            ctx.moveTo(side * s * 0.1, y + s * 0.42);
            ctx.quadraticCurveTo(side * s * 0.2, y + s * 0.62 - drift, side * s * 0.14, y + s * 0.82 - drift);
            ctx.stroke();
        }
        // narrow torso
        A.orb(ctx, 0, y + s * 0.22, s * 0.2, s * 0.32, 0, A.tone(skin, -0.1), { specA: 0.2 });
        // the head: oversized inverted teardrop cranium
        ctx.save();
        ctx.translate(0, y - s * 0.3);
        const hg = ctx.createRadialGradient(-s * 0.14, -s * 0.2, s * 0.05, 0, -s * 0.05, s * 0.62);
        hg.addColorStop(0, A.tone(skin, 0.4));
        hg.addColorStop(0.5, skin);
        hg.addColorStop(1, A.tone(skin, -0.5));
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.42);
        ctx.bezierCurveTo(-s * 0.4, s * 0.28, -s * 0.46, -s * 0.4, 0, -s * 0.42);
        ctx.bezierCurveTo(s * 0.46, -s * 0.4, s * 0.4, s * 0.28, 0, s * 0.42);
        ctx.fill();
        // the crying face on the big cranium
        A.eyes(ctx, 0, s * 0.02, s * 0.55 * 0.26, s * 0.55 * 0.135, '#1c1712');
        ctx.restore();
    }
}
