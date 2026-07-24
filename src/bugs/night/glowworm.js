// ── GLOWWORM: armored larval plates, cold blue-green lamps ──────
class Glowworm {
    static draw(ctx, s, bob, bug) {
        const body = '#3ec9a0';
        const n = 7;
        const pulse = 0.5 + Math.sin(bug.wobble * 1.4) * 0.5;
        // soft ambient light spilling from the tail lamps
        A.glow(ctx, 0, bob + s * 0.9, s * (1.2 + pulse * 0.8), '#ffd166', 0.12 + pulse * 0.16);
        // stubby legs on the front segments
        for (let i = 0; i < 3; i++) {
            for (let side = -1; side <= 1; side += 2) {
                ctx.strokeStyle = A.tone(body, -0.4);
                ctx.lineCap = 'round';
                ctx.lineWidth = s * 0.05;
                const ly = bob - s * 0.35 + i * s * 0.24;
                ctx.beginPath();
                ctx.moveTo(side * s * 0.16, ly);
                ctx.lineTo(side * s * 0.28, ly + s * 0.14);
                ctx.stroke();
            }
        }
        // armored segments: each an overlapping plate
        for (let i = n - 1; i >= 0; i--) {
            const sy = bob - s * 0.45 + i * s * 0.24;
            const sway = Math.sin(bug.wobble * 0.6 + i * 0.6) * s * 0.05;
            const r = s * (0.2 - Math.abs(i - 3) * 0.01);
            A.orb(ctx, sway, sy, r * 1.15, r, 0, body, { specA: 0.2 });
            // plate edge highlight
            ctx.strokeStyle = 'rgba(255,190,160,0.25)';
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.arc(sway, sy - r * 0.15, r * 0.9, Math.PI * 1.15, Math.PI * 1.85);
            ctx.stroke();
        }
        // the paired light organs on the last two segments
        for (let k = 0; k < 2; k++) {
            const sy = bob - s * 0.45 + (n - 1 - k) * s * 0.24;
            for (let side = -1; side <= 1; side += 2) {
                const lg = ctx.createRadialGradient(side * s * 0.09, sy, 0, side * s * 0.09, sy, s * 0.12);
                lg.addColorStop(0, `rgba(255,236,190,${0.55 + pulse * 0.45})`);
                lg.addColorStop(0.6, `rgba(255,200,120,${0.35 + pulse * 0.35})`);
                lg.addColorStop(1, 'rgba(230,150,70,0.05)');
                ctx.fillStyle = lg;
                ctx.beginPath(); ctx.arc(side * s * 0.09, sy, s * 0.1, 0, Math.PI * 2); ctx.fill();
            }
        }
        // small hardened head
        A.orb(ctx, 0, bob - s * 0.6, s * 0.12, s * 0.11, 0, '#2eb890', {});
        A.eyes(ctx, 0, bob - s * 0.58, s * 0.36 * 0.26, s * 0.36 * 0.135, '#1c1712');
        A.antennae(ctx, s * 0.4, bob - s * 0.66, bug.antennaPhase, '#248064', { len: 0.4 });
    }
}
