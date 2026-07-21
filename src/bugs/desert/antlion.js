// ── ANTLION LARVA: pit trapper, sickle jaws, bristled hulk ──────
class Antlion {
    static draw(ctx, s, bob, bug) {
        const body = '#cc7c4a';
        // it lurks half-buried: a ring of disturbed sand
        const sg = ctx.createRadialGradient(0, bob + s * 0.2, s * 0.3, 0, bob + s * 0.2, s * 1.1);
        sg.addColorStop(0, 'rgba(150,120,76,0.20)');
        sg.addColorStop(0.7, 'rgba(130,102,64,0.08)');
        sg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = sg;
        ctx.beginPath(); ctx.arc(0, bob + s * 0.2, s * 1.1, 0, Math.PI * 2); ctx.fill();
        // stubby digging legs
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 2; i++) {
                const sw = Math.sin(bug.legPhase * 0.5 + i * 1.6 + (side > 0 ? Math.PI : 0)) * s * 0.06;
                A.leg(ctx, side * s * 0.24, bob + i * s * 0.2,
                    side * s * 0.5 + sw, bob + i * s * 0.2 + s * 0.2 + sw,
                    side * s * 0.12, s * 0.055, '#804a28');
            }
        }
        // plump bristled abdomen — the sand-anchor
        A.orb(ctx, 0, bob + s * 0.28, s * 0.44, s * 0.5, 0, body, { specA: 0.16 });
        // bristle whorls around the flanks
        ctx.strokeStyle = 'rgba(50,38,26,0.7)';
        ctx.lineWidth = s * 0.03;
        for (let i = 0; i < 12; i++) {
            const a = (i / 12) * Math.PI * 2;
            const bx = Math.cos(a) * s * 0.42, by = bob + s * 0.28 + Math.sin(a) * s * 0.48;
            ctx.beginPath();
            ctx.moveTo(bx, by);
            ctx.lineTo(bx * 1.22, bob + s * 0.28 + Math.sin(a) * s * 0.58);
            ctx.stroke();
        }
        // segment creases
        ctx.strokeStyle = 'rgba(40,30,20,0.4)';
        ctx.lineWidth = 0.7;
        for (let k = 0; k < 3; k++) {
            ctx.beginPath();
            ctx.arc(0, bob + s * (0.1 + k * 0.16), s * 0.36, Math.PI * 0.2, Math.PI * 0.8);
            ctx.stroke();
        }
        // flat armored prothorax + head plate
        A.orb(ctx, 0, bob - s * 0.14, s * 0.24, s * 0.2, 0, '#ba6c3c', { specA: 0.2 });
        A.orb(ctx, 0, bob - s * 0.36, s * 0.18, s * 0.13, 0, '#aa6034', {});
        A.face(ctx, 0, bob - s * 0.34, s * 0.46, bug.wobble);
        // the sickle jaws: long curved calipers that snap shut
        const snap = Math.max(0, Math.sin(bug.legPhase * 0.6)) * 0.22;
        for (let side = -1; side <= 1; side += 2) {
            ctx.strokeStyle = '#5a3418';
            ctx.lineCap = 'round';
            ctx.lineWidth = s * 0.06;
            ctx.beginPath();
            ctx.moveTo(side * s * 0.1, bob - s * 0.42);
            ctx.quadraticCurveTo(
                side * s * (0.5 - snap * 0.3), bob - s * 0.75,
                side * s * (0.16 - snap * 0.3), bob - s * 1.05);
            ctx.stroke();
            // inner teeth
            ctx.lineWidth = s * 0.025;
            ctx.beginPath();
            ctx.moveTo(side * s * (0.3 - snap * 0.2), bob - s * 0.72);
            ctx.lineTo(side * s * (0.18 - snap * 0.2), bob - s * 0.68);
            ctx.stroke();
        }
    }
}
