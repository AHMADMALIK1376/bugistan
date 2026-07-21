// ── MUD DAUBER: gunmetal wasp, thread waist, amber legs ──────
class MudDauber {
    static draw(ctx, s, bob, bug) {
        const flap = Math.sin(bug.wingPhase) * 0.45;
        const body = '#5468d8';
        // smoked-glass wings swept back
        for (let side = -1; side <= 1; side += 2) {
            ctx.save(); ctx.scale(side, 1);
            A.wing(ctx, s * 0.12, bob - s * 0.28, s * 1.25, s * 0.4, 0.6, flap * 0.35, '#c9ccd4', 0.28);
            ctx.restore();
        }
        // long amber legs, trailing mid-flight
        const legC = '#e8a03c';
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const sw = Math.sin(bug.legPhase * 0.5 + i * 1.7) * s * 0.1;
                A.leg(ctx, side * s * 0.12, bob - s * 0.1 + i * s * 0.16,
                    side * s * (0.5 + i * 0.16) + sw, bob + s * (0.35 + i * 0.28),
                    side * s * 0.28, s * 0.06, legC);
            }
        }
        // abdomen: polished teardrop hanging off a thread waist
        A.orb(ctx, 0, bob + s * 0.62, s * 0.26, s * 0.48, 0, body, { specA: 0.4 });
        ctx.strokeStyle = A.tone(body, 0.25, 0.5);
        ctx.lineWidth = 0.6;
        ctx.beginPath(); ctx.arc(0, bob + s * 0.5, s * 0.2, Math.PI * 1.2, Math.PI * 1.8); ctx.stroke();
        // petiole (the famous thread waist)
        ctx.strokeStyle = A.tone(body, -0.2);
        ctx.lineWidth = s * 0.07;
        ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(0, bob + s * 0.05); ctx.lineTo(0, bob + s * 0.28); ctx.stroke();
        // thorax and head
        A.orb(ctx, 0, bob - s * 0.12, s * 0.24, s * 0.28, 0, body, { specA: 0.35 });
        A.orb(ctx, 0, bob - s * 0.52, s * 0.18, s * 0.18, 0, '#7a8ce8', {});
        A.face(ctx, 0, bob - s * 0.52, s * 0.5, bug.wobble);
        A.antennae(ctx, s * 0.8, bob - s * 0.62, bug.antennaPhase, '#3a4a9e', { len: 0.8 });
    }
}
