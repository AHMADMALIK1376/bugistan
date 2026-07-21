// ── LEAFHOPPER: wedge of green glass, keeled folded wings ──────
class Leafhopper {
    static draw(ctx, s, bob, bug) {
        const body = '#4ade7e';
        // spring legs with the signature spine rows
        for (let side = -1; side <= 1; side += 2) {
            const sw = Math.sin(bug.legPhase + (side > 0 ? Math.PI : 0)) * s * 0.1;
            A.leg(ctx, side * s * 0.14, bob - s * 0.1, side * s * 0.4 + sw, bob + s * 0.12 + sw, side * s * 0.12, s * 0.045, '#2b9450');
            // strong hind pair
            A.leg(ctx, side * s * 0.16, bob + s * 0.12, side * s * 0.52 - sw, bob + s * 0.44 - sw, side * s * 0.22, s * 0.055, '#2b9450');
        }
        // wedge body: widest at the head, tapering to a point
        ctx.save();
        ctx.translate(0, bob);
        const bg = ctx.createLinearGradient(-s * 0.34, 0, s * 0.34, 0);
        bg.addColorStop(0, A.tone(body, -0.35));
        bg.addColorStop(0.35, A.tone(body, 0.2));
        bg.addColorStop(0.6, body);
        bg.addColorStop(1, A.tone(body, -0.45));
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.moveTo(-s * 0.3, -s * 0.34);
        ctx.quadraticCurveTo(-s * 0.34, s * 0.1, -s * 0.05, s * 0.78);
        ctx.lineTo(s * 0.05, s * 0.78);
        ctx.quadraticCurveTo(s * 0.34, s * 0.1, s * 0.3, -s * 0.34);
        ctx.quadraticCurveTo(0, -s * 0.48, -s * 0.3, -s * 0.34);
        ctx.closePath();
        ctx.fill();
        // folded wing keel + cyan sheen stripe
        ctx.strokeStyle = 'rgba(20,40,12,0.6)';
        ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.moveTo(0, -s * 0.3); ctx.lineTo(0, s * 0.76); ctx.stroke();
        ctx.strokeStyle = 'rgba(150,230,190,0.4)';
        ctx.lineWidth = s * 0.05;
        ctx.beginPath();
        ctx.moveTo(-s * 0.16, -s * 0.2);
        ctx.quadraticCurveTo(-s * 0.2, s * 0.2, -s * 0.04, s * 0.66);
        ctx.stroke();
        // spec highlight along the lit flank
        ctx.fillStyle = 'rgba(255,255,240,0.22)';
        ctx.beginPath();
        ctx.ellipse(-s * 0.14, -s * 0.16, s * 0.08, s * 0.22, 0.12, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        // blunt shovel head spanning the wedge's wide end
        A.orb(ctx, 0, bob - s * 0.44, s * 0.26, s * 0.15, 0, '#74ea9e', { specA: 0.3 });
        A.face(ctx, 0, bob - s * 0.42, s * 0.55, bug.wobble);
        ctx.fillStyle = 'rgba(30,48,16,0.35)';
        for (let k = -1; k <= 1; k++) {
            ctx.beginPath(); ctx.arc(k * s * 0.08, bob - s * 0.5, s * 0.02, 0, Math.PI * 2); ctx.fill();
        }
    }
}
