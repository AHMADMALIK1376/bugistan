// ── MARSH BEETLE: bottle-green diver with a silver air film ──────
class MarshBeetle {
    static draw(ctx, s, bob, bug) {
        const body = '#3bbf6a';
        // fringed swimming legs sweeping like oars
        for (let side = -1; side <= 1; side += 2) {
            for (let i = -1; i <= 1; i++) {
                const stroke = Math.sin(bug.legPhase + i * 0.9 + (side > 0 ? Math.PI : 0)) * s * 0.2;
                const ay = bob + i * s * 0.26;
                A.leg(ctx, side * s * 0.3, ay, side * s * 0.78 + stroke * 0.3, ay + s * 0.3 + stroke, side * s * 0.24, s * 0.06, A.tone(body, -0.4));
                // swimming hairs on the hind pair
                if (i === 1) {
                    ctx.strokeStyle = A.tone(body, -0.15, 0.45);
                    ctx.lineWidth = 0.5;
                    for (let h = 0; h < 3; h++) {
                        const hx = side * s * (0.5 + h * 0.1);
                        ctx.beginPath();
                        ctx.moveTo(hx, ay + s * 0.16 + stroke * 0.6);
                        ctx.lineTo(hx + side * s * 0.06, ay + s * 0.3 + stroke * 0.6);
                        ctx.stroke();
                    }
                }
            }
        }
        // streamlined oval shell
        A.orb(ctx, 0, bob, s * 0.52, s * 0.68, 0, body, { specA: 0.4 });
        // elytra split and pore rows
        ctx.strokeStyle = 'rgba(12,24,10,0.6)';
        ctx.lineWidth = 0.9;
        ctx.beginPath(); ctx.moveTo(0, bob - s * 0.3); ctx.lineTo(0, bob + s * 0.66); ctx.stroke();
        ctx.strokeStyle = 'rgba(90,130,80,0.3)';
        ctx.lineWidth = 0.6;
        for (let k = 1; k <= 2; k++) {
            ctx.beginPath();
            ctx.moveTo(-s * 0.16 * k, bob - s * 0.2);
            ctx.quadraticCurveTo(-s * 0.2 * k, bob + s * 0.2, -s * 0.12 * k, bob + s * 0.55);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(s * 0.16 * k, bob - s * 0.2);
            ctx.quadraticCurveTo(s * 0.2 * k, bob + s * 0.2, s * 0.12 * k, bob + s * 0.55);
            ctx.stroke();
        }
        // the silver air bubble a diving beetle carries
        const shimmer = 0.25 + Math.abs(Math.sin(bug.wobble)) * 0.15;
        const ag = ctx.createRadialGradient(-s * 0.1, bob + s * 0.4, 0, -s * 0.1, bob + s * 0.4, s * 0.3);
        ag.addColorStop(0, `rgba(210,235,235,${shimmer})`);
        ag.addColorStop(1, 'rgba(210,235,235,0)');
        ctx.fillStyle = ag;
        ctx.beginPath(); ctx.ellipse(-s * 0.08, bob + s * 0.42, s * 0.26, s * 0.18, 0.3, 0, Math.PI * 2); ctx.fill();
        // head tucked into the shell
        A.orb(ctx, 0, bob - s * 0.52, s * 0.2, s * 0.16, 0, '#2ba656', {});
        A.face(ctx, 0, bob - s * 0.5, s * 0.5, bug.wobble);
        A.antennae(ctx, s * 0.55, bob - s * 0.6, bug.antennaPhase, '#237a42', { len: 0.55, club: true });
    }
}
