// ── SACRED SCARAB: lapis-and-emerald metal, clypeus rake ──────
class Scarab {
    static draw(ctx, s, bob, bug) {
        const shell = '#3a68e0';
        // strong digging legs with flattened tibiae
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const sw = Math.sin(bug.legPhase * 0.7 + i * 1.9 + (side > 0 ? Math.PI : 0)) * s * 0.1;
                A.leg(ctx, side * s * 0.26, bob + (i - 1) * s * 0.28,
                    side * s * (0.66 + i * 0.06) + sw * 0.3, bob + (i - 1) * s * 0.28 + s * 0.32 + sw,
                    side * s * 0.22, s * 0.075, '#2242a0');
            }
        }
        // broad oval shell with the blue-to-green iridescent flip
        A.orb(ctx, 0, bob + s * 0.08, s * 0.54, s * 0.64, 0, shell, { specA: 0.4 });
        // iridescence: a green sheen that slides as the scarab moves
        const irX = Math.sin(bug.wobble * 0.7) * s * 0.25;
        const ir = ctx.createRadialGradient(irX, bob - s * 0.05, 0, irX, bob - s * 0.05, s * 0.6);
        ir.addColorStop(0, 'rgba(80,220,160,0.30)');
        ir.addColorStop(0.5, 'rgba(60,180,190,0.14)');
        ir.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = ir;
        ctx.beginPath(); ctx.ellipse(0, bob + s * 0.08, s * 0.54, s * 0.64, 0, 0, Math.PI * 2); ctx.fill();
        // elytra split + shoulder notches
        ctx.strokeStyle = 'rgba(6,12,26,0.7)';
        ctx.lineWidth = 1.0;
        ctx.beginPath(); ctx.moveTo(0, bob - s * 0.36); ctx.lineTo(0, bob + s * 0.7); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(-s * 0.5, bob - s * 0.22); ctx.lineTo(-s * 0.28, bob - s * 0.32); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(s * 0.5, bob - s * 0.22); ctx.lineTo(s * 0.28, bob - s * 0.32); ctx.stroke();
        // pronotum: separate metallic plate
        A.orb(ctx, 0, bob - s * 0.42, s * 0.36, s * 0.22, 0, '#2c56cc', { specA: 0.45 });
        // clypeus: the toothed sun-rake at the front of the head
        ctx.save();
        ctx.translate(0, bob - s * 0.66);
        const cg = ctx.createLinearGradient(0, -s * 0.16, 0, s * 0.1);
        cg.addColorStop(0, '#5c86ec');
        cg.addColorStop(1, '#1e3a8c');
        ctx.fillStyle = cg;
        ctx.beginPath();
        ctx.moveTo(-s * 0.24, s * 0.08);
        for (let k = 0; k < 5; k++) {
            const px = -s * 0.24 + k * s * 0.12;
            ctx.lineTo(px + s * 0.03, -s * 0.1);
            ctx.lineTo(px + s * 0.09, s * 0.0);
        }
        ctx.lineTo(s * 0.24, s * 0.08);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        A.face(ctx, 0, bob - s * 0.48, s * 0.56, bug.wobble);
    }
}
