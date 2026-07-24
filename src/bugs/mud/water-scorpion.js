// ── WATER SCORPION: flat leaf body, raptorial arms, siphon tail ──────
class WaterScorpion {
    static draw(ctx, s, bob, bug) {
        const body = '#e07838';
        // long breathing siphon trailing behind
        ctx.strokeStyle = A.tone(body, -0.35);
        ctx.lineWidth = s * 0.07;
        ctx.lineCap = 'round';
        const sway = Math.sin(bug.wobble * 0.7) * s * 0.1;
        ctx.beginPath();
        ctx.moveTo(0, bob + s * 0.55);
        ctx.quadraticCurveTo(sway, bob + s * 1.05, sway * 1.6, bob + s * 1.5);
        ctx.stroke();
        ctx.strokeStyle = A.tone(body, 0.15, 0.5);
        ctx.lineWidth = s * 0.025;
        ctx.beginPath();
        ctx.moveTo(-s * 0.02, bob + s * 0.55);
        ctx.quadraticCurveTo(sway - s * 0.02, bob + s * 1.05, sway * 1.6 - s * 0.02, bob + s * 1.5);
        ctx.stroke();
        // walking legs: two splayed pairs
        for (let side = -1; side <= 1; side += 2) {
            const sw = Math.sin(bug.legPhase * 0.6 + (side > 0 ? Math.PI : 0)) * s * 0.1;
            A.leg(ctx, side * s * 0.24, bob + s * 0.05, side * s * 0.75 + sw, bob + s * 0.42 + sw, side * s * 0.2, s * 0.055, A.tone(body, -0.3));
            A.leg(ctx, side * s * 0.24, bob + s * 0.25, side * s * 0.68 - sw, bob + s * 0.62 - sw, side * s * 0.2, s * 0.055, A.tone(body, -0.3));
        }
        // flattened leaf-shaped body with a keel line
        A.orb(ctx, 0, bob + s * 0.08, s * 0.36, s * 0.58, 0, body, { specA: 0.18 });
        ctx.strokeStyle = 'rgba(24,15,8,0.6)';
        ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.moveTo(0, bob - s * 0.42); ctx.lineTo(0, bob + s * 0.58); ctx.stroke();
        // faint wing-case texture
        ctx.strokeStyle = 'rgba(120,88,52,0.3)';
        ctx.lineWidth = 0.6;
        ctx.beginPath(); ctx.moveTo(-s * 0.16, bob - s * 0.2); ctx.lineTo(-s * 0.12, bob + s * 0.45); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(s * 0.16, bob - s * 0.2); ctx.lineTo(s * 0.12, bob + s * 0.45); ctx.stroke();
        // raptorial forelegs: folded strike arms
        const strike = Math.max(0, Math.sin(bug.legPhase * 0.4)) * 0.2;
        for (let side = -1; side <= 1; side += 2) {
            ctx.save();
            ctx.translate(side * s * 0.2, bob - s * 0.34);
            ctx.rotate(side * (0.9 - strike));
            ctx.strokeStyle = A.tone(body, -0.2);
            ctx.lineCap = 'round';
            ctx.lineWidth = s * 0.09;
            ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(s * 0.42, -s * 0.1); ctx.stroke();
            ctx.lineWidth = s * 0.055;
            ctx.beginPath(); ctx.moveTo(s * 0.42, -s * 0.1); ctx.lineTo(s * 0.14, -s * 0.34); ctx.stroke();
            ctx.restore();
        }
        // narrow head, beady eyes
        A.orb(ctx, 0, bob - s * 0.5, s * 0.13, s * 0.12, 0, '#d0682c', {});
        A.eyes(ctx, 0, bob - s * 0.48, s * 0.44 * 0.26, s * 0.44 * 0.135, '#1c1712');
    }
}
