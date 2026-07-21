// ── GROUND BEETLE: bronze armor, striated elytra, working mandibles ──────
class Beetle {
    static draw(ctx, s, bob, bug) {
        const shell = '#c8763a';
        // six sturdy legs in alternating tripod gait
        A.legSet(ctx, s, bob, bug.legPhase, '#7a4520', { reach: 1.05, w: s * 0.07 });
        // abdomen shell: high-gloss dome
        A.orb(ctx, 0, bob + s * 0.16, s * 0.5, s * 0.62, 0, shell, { specA: 0.45 });
        // elytra split + striation grooves
        ctx.strokeStyle = 'rgba(18,12,6,0.65)';
        ctx.lineWidth = 1.0;
        ctx.beginPath(); ctx.moveTo(0, bob - s * 0.4); ctx.lineTo(0, bob + s * 0.76); ctx.stroke();
        ctx.strokeStyle = 'rgba(120,92,50,0.35)';
        ctx.lineWidth = 0.6;
        for (let k = 1; k <= 3; k++) {
            for (let side = -1; side <= 1; side += 2) {
                ctx.beginPath();
                ctx.moveTo(side * s * 0.13 * k, bob - s * 0.32);
                ctx.quadraticCurveTo(side * s * 0.16 * k, bob + s * 0.2, side * s * 0.1 * k, bob + s * 0.62);
                ctx.stroke();
            }
        }
        // bronze sheen band sliding across the shell
        const sheenX = Math.sin(bug.wobble * 0.8) * s * 0.2;
        const sheen = ctx.createLinearGradient(sheenX - s * 0.3, bob - s * 0.2, sheenX + s * 0.3, bob + s * 0.4);
        sheen.addColorStop(0, 'rgba(200,160,90,0)');
        sheen.addColorStop(0.5, 'rgba(200,160,90,0.16)');
        sheen.addColorStop(1, 'rgba(200,160,90,0)');
        ctx.fillStyle = sheen;
        ctx.beginPath(); ctx.ellipse(0, bob + s * 0.16, s * 0.5, s * 0.62, 0, 0, Math.PI * 2); ctx.fill();
        // pronotum plate
        A.orb(ctx, 0, bob - s * 0.42, s * 0.3, s * 0.22, 0, '#b5662c', { specA: 0.35 });
        // head with heavy mandibles
        A.orb(ctx, 0, bob - s * 0.66, s * 0.18, s * 0.15, 0, '#a85c26', {});
        const chew = Math.sin(bug.legPhase * 0.7) * 0.12;
        for (let side = -1; side <= 1; side += 2) {
            ctx.strokeStyle = '#5c3414';
            ctx.lineCap = 'round';
            ctx.lineWidth = s * 0.06;
            ctx.beginPath();
            ctx.moveTo(side * s * 0.08, bob - s * 0.76);
            ctx.quadraticCurveTo(side * s * (0.2 - chew), bob - s * 0.9, side * s * (0.06 + chew), bob - s * 0.96);
            ctx.stroke();
        }
        A.face(ctx, 0, bob - s * 0.62, s * 0.48, bug.wobble);
        A.antennae(ctx, s * 0.7, bob - s * 0.74, bug.antennaPhase, '#6e3f1c', { len: 0.7 });
    }
}
