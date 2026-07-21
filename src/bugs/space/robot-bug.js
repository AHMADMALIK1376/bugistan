// ── ROBOT BUG: brushed alloy chassis, servo legs, sensor array ──────
class RobotBug {
    static draw(ctx, s, bob, bug) {
        const alloy = '#a8bcd0';
        // servo legs: piston segments with joint pivots
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const step = Math.sin(bug.legPhase + i * 2.1 + (side > 0 ? Math.PI : 0)) * s * 0.14;
                const hipX = side * s * 0.26, hipY = bob + (i - 1) * s * 0.28;
                const kneeX = side * s * 0.62, kneeY = hipY - s * 0.14 + step * 0.4;
                const footX = side * s * 0.8, footY = hipY + s * 0.34 + step;
                ctx.strokeStyle = '#62788e';
                ctx.lineCap = 'round';
                ctx.lineWidth = s * 0.07;
                ctx.beginPath(); ctx.moveTo(hipX, hipY); ctx.lineTo(kneeX, kneeY); ctx.stroke();
                ctx.lineWidth = s * 0.045;
                ctx.beginPath(); ctx.moveTo(kneeX, kneeY); ctx.lineTo(footX, footY); ctx.stroke();
                // joint pivot dots
                ctx.fillStyle = '#ccd8e4';
                ctx.beginPath(); ctx.arc(kneeX, kneeY, s * 0.035, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = '#4c5c70';
                ctx.beginPath(); ctx.arc(kneeX, kneeY, s * 0.016, 0, Math.PI * 2); ctx.fill();
            }
        }
        // chassis: brushed metal shell with panel seams
        A.orb(ctx, 0, bob + s * 0.06, s * 0.44, s * 0.56, 0, alloy, { specA: 0.55, lit: 0.5 });
        // brushed-metal streaks
        ctx.strokeStyle = 'rgba(255,255,255,0.10)';
        ctx.lineWidth = 0.6;
        for (let k = 0; k < 6; k++) {
            ctx.beginPath();
            ctx.moveTo(-s * 0.3 + k * s * 0.11, bob - s * 0.4);
            ctx.lineTo(-s * 0.34 + k * s * 0.11, bob + s * 0.55);
            ctx.stroke();
        }
        // panel seams + rivets
        ctx.strokeStyle = 'rgba(40,48,54,0.6)';
        ctx.lineWidth = s * 0.02;
        ctx.beginPath(); ctx.moveTo(0, bob - s * 0.48); ctx.lineTo(0, bob + s * 0.6); ctx.stroke();
        ctx.beginPath(); ctx.arc(0, bob + s * 0.06, s * 0.3, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = '#788ca0';
        for (let k = 0; k < 6; k++) {
            const a = (k / 6) * Math.PI * 2 + 0.5;
            ctx.beginPath();
            ctx.arc(Math.cos(a) * s * 0.3, bob + s * 0.06 + Math.sin(a) * s * 0.38, s * 0.022, 0, Math.PI * 2);
            ctx.fill();
        }
        // reactor core: pulsing cyan heart under a porthole
        const corePulse = 0.5 + Math.sin(bug.wobble * 2.4) * 0.5;
        const core = ctx.createRadialGradient(0, bob + s * 0.06, 0, 0, bob + s * 0.06, s * 0.16);
        core.addColorStop(0, `rgba(150,240,255,${0.6 + corePulse * 0.4})`);
        core.addColorStop(0.7, `rgba(40,160,210,${0.4 + corePulse * 0.3})`);
        core.addColorStop(1, 'rgba(20,90,130,0.15)');
        ctx.fillStyle = core;
        ctx.beginPath(); ctx.arc(0, bob + s * 0.06, s * 0.14, 0, Math.PI * 2); ctx.fill();
        A.glow(ctx, 0, bob + s * 0.06, s * 0.4, '#57c8e8', corePulse * 0.18);
        // head unit with the crying face
        A.orb(ctx, 0, bob - s * 0.52, s * 0.24, s * 0.19, 0, '#b8c8d8', { specA: 0.5 });
        A.face(ctx, 0, bob - s * 0.52, s * 0.44, bug.wobble);
        // antenna mast with a blinking tip
        ctx.strokeStyle = '#62788e';
        ctx.lineWidth = s * 0.025;
        ctx.beginPath(); ctx.moveTo(0, bob - s * 0.66); ctx.lineTo(s * 0.06, bob - s * 0.92); ctx.stroke();
        const blink = Math.sin(bug.wobble * 3) > 0.4 ? 0.9 : 0.15;
        ctx.fillStyle = `rgba(120,255,170,${blink})`;
        ctx.beginPath(); ctx.arc(s * 0.06, bob - s * 0.94, s * 0.03, 0, Math.PI * 2); ctx.fill();
    }
}
