// ── LADYBUG: lacquered crimson dome, true beetle anatomy ──────
class Ladybug {
    static draw(ctx, s, bob, bug) {
        const shell = '#ff4438';
        // short black legs peeking from under the dome
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const sw = Math.sin(bug.legPhase + i * 1.9 + (side > 0 ? Math.PI : 0)) * s * 0.12;
                A.leg(ctx, side * s * 0.3, bob + (i - 1) * s * 0.3,
                    side * s * 0.6 + sw * 0.3, bob + (i - 1) * s * 0.3 + s * 0.28 + sw,
                    side * s * 0.16, s * 0.05, '#5c1a24');
            }
        }
        // deep-lacquer dome
        A.orb(ctx, 0, bob + s * 0.08, s * 0.62, s * 0.72, 0, shell, { specA: 0.5, lit: 0.35 });
        // elytra split
        ctx.strokeStyle = 'rgba(30,6,6,0.7)';
        ctx.lineWidth = 1.1;
        ctx.beginPath(); ctx.moveTo(0, bob - s * 0.58); ctx.lineTo(0, bob + s * 0.78); ctx.stroke();
        // spots: varied sizes, each with its own soft shading
        const spots = [
            { x: -0.3, y: -0.28, r: 0.13 }, { x: 0.32, y: -0.32, r: 0.11 },
            { x: -0.36, y: 0.18, r: 0.11 }, { x: 0.38, y: 0.14, r: 0.14 },
            { x: -0.16, y: 0.52, r: 0.09 }, { x: 0.2, y: 0.5, r: 0.09 }
        ];
        for (const sp of spots) {
            const g = ctx.createRadialGradient(sp.x * s - s * 0.02, bob + sp.y * s - s * 0.02, 0, sp.x * s, bob + sp.y * s, sp.r * s);
            g.addColorStop(0, '#5c1a24');
            g.addColorStop(1, '#40121a');
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(sp.x * s, bob + sp.y * s, sp.r * s, 0, Math.PI * 2); ctx.fill();
        }
        // hard window-light reflection: what makes lacquer read as lacquer
        ctx.fillStyle = 'rgba(255,240,235,0.5)';
        ctx.beginPath();
        ctx.ellipse(-s * 0.24, bob - s * 0.3, s * 0.16, s * 0.09, -0.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,240,235,0.18)';
        ctx.beginPath();
        ctx.ellipse(-s * 0.34, bob - s * 0.12, s * 0.06, s * 0.04, -0.5, 0, Math.PI * 2);
        ctx.fill();
        // pronotum: black shield with the two pale cheek marks
        A.orb(ctx, 0, bob - s * 0.6, s * 0.34, s * 0.2, 0, '#5c1a24', { specA: 0.3 });
        ctx.fillStyle = 'rgba(230,222,205,0.85)';
        ctx.beginPath(); ctx.ellipse(-s * 0.2, bob - s * 0.62, s * 0.07, s * 0.05, 0.3, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(s * 0.2, bob - s * 0.62, s * 0.07, s * 0.05, -0.3, 0, Math.PI * 2); ctx.fill();
        // small true head with compound eyes
        A.orb(ctx, 0, bob - s * 0.76, s * 0.13, s * 0.09, 0, '#ff7a5e', {});
        A.face(ctx, 0, bob - s * 0.58, s * 0.55, bug.wobble);
        A.antennae(ctx, s * 0.45, bob - s * 0.8, bug.antennaPhase, '#5c1a24', { len: 0.45, club: true });
    }
}
