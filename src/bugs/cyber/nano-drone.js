// ── NANO DRONE: hovering micro-copter, rotors at full blur ──────
class NanoDrone {
    static draw(ctx, s, bob, bug) {
        const body = '#e858c8';
        const hover = Math.sin(bug.wobble * 2) * s * 0.05;
        const y = bob + hover;
        // rotor arms + spinning blur discs
        for (let side = -1; side <= 1; side += 2) {
            ctx.strokeStyle = '#8a3478';
            ctx.lineWidth = s * 0.05;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(side * s * 0.2, y - s * 0.22);
            ctx.lineTo(side * s * 0.55, y - s * 0.38);
            ctx.stroke();
            const spin = 0.5 + Math.abs(Math.sin(bug.wingPhase * 3 + side)) * 0.5;
            ctx.fillStyle = `rgba(240,180,235,${0.25 + spin * 0.2})`;
            ctx.beginPath();
            ctx.ellipse(side * s * 0.55, y - s * 0.42, s * 0.34, s * 0.07, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#8a3478';
            ctx.beginPath(); ctx.arc(side * s * 0.55, y - s * 0.42, s * 0.045, 0, Math.PI * 2); ctx.fill();
        }
        // dangling gripper legs
        for (let side = -1; side <= 1; side += 2) {
            const sway = Math.sin(bug.legPhase * 0.6 + side) * s * 0.06;
            A.leg(ctx, side * s * 0.14, y + s * 0.32, side * s * 0.24 + sway, y + s * 0.6, side * s * 0.08, s * 0.05, '#8a3478');
        }
        // rounded pod body
        A.orb(ctx, 0, y, s * 0.4, s * 0.46, 0, body, { specA: 0.35 });
        // belly sensor light
        const pulse = 0.5 + Math.sin(bug.wobble * 2.6) * 0.5;
        ctx.fillStyle = `rgba(60,224,224,${0.5 + pulse * 0.5})`;
        ctx.beginPath(); ctx.arc(0, y + s * 0.32, s * 0.055, 0, Math.PI * 2); ctx.fill();
        A.glow(ctx, 0, y + s * 0.32, s * 0.16, '#3ce0e0', pulse * 0.4);
        // the crying face on the pod
        A.face(ctx, 0, y - s * 0.08, s * 0.52, bug.wobble);
    }
}
