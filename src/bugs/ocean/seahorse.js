// ── SEAHORSE: golden armor rings, coronet, curled grip tail ──────
class Seahorse {
    static draw(ctx, s, bob, bug) {
        const body = '#ffc84a';
        const sway = Math.sin(bug.wobble) * 0.1;
        ctx.save();
        ctx.rotate(sway);
        // curled prehensile tail: a spiral of shrinking segments
        let tx = s * 0.05, ty = bob + s * 0.45, ta = Math.PI * 0.5, tr = s * 0.11;
        for (let i = 0; i < 10; i++) {
            A.orb(ctx, tx, ty, tr, tr, 0, A.tone(body, -0.06 * i > -0.5 ? -0.05 * i : -0.5), { specA: 0.2 });
            ta += 0.55 + i * 0.02;
            tx += Math.cos(ta) * tr * 1.5;
            ty += Math.sin(ta) * tr * 1.5;
            tr *= 0.85;
        }
        // dorsal fin: the little fluttering engine on the back
        const flut = Math.sin(bug.wingPhase * 2) * s * 0.08;
        const fg = ctx.createLinearGradient(-s * 0.3, bob, -s * 0.6, bob);
        fg.addColorStop(0, A.tone(body, 0.3, 0.5));
        fg.addColorStop(1, A.tone(body, 0.5, 0.1));
        ctx.fillStyle = fg;
        ctx.beginPath();
        ctx.moveTo(-s * 0.24, bob - s * 0.15);
        ctx.quadraticCurveTo(-s * 0.52 + flut, bob, -s * 0.24, bob + s * 0.2);
        ctx.closePath();
        ctx.fill();
        // body: upright S-curve trunk with armor rings
        A.orb(ctx, 0, bob + s * 0.05, s * 0.24, s * 0.42, 0.05, body, { specA: 0.3 });
        ctx.strokeStyle = 'rgba(90,62,16,0.45)';
        ctx.lineWidth = s * 0.03;
        for (let k = 0; k < 5; k++) {
            ctx.beginPath();
            ctx.arc(0, bob - s * 0.25 + k * s * 0.17, s * 0.2 - k * 0.005 * s, Math.PI * 0.15, Math.PI * 0.85);
            ctx.stroke();
        }
        // belly keel highlight
        ctx.strokeStyle = 'rgba(255,235,180,0.4)';
        ctx.lineWidth = s * 0.04;
        ctx.beginPath();
        ctx.moveTo(s * 0.16, bob - s * 0.2);
        ctx.quadraticCurveTo(s * 0.26, bob + s * 0.1, s * 0.1, bob + s * 0.4);
        ctx.stroke();
        // bony tubercle spikes down the spine
        ctx.fillStyle = A.tone(body, -0.25);
        for (let k = 0; k < 4; k++) {
            const py = bob - s * 0.3 + k * s * 0.2;
            ctx.beginPath();
            ctx.moveTo(-s * 0.2, py);
            ctx.lineTo(-s * 0.3, py + s * 0.03);
            ctx.lineTo(-s * 0.2, py + s * 0.08);
            ctx.closePath();
            ctx.fill();
        }
        // head: horse-angled with tubular snout
        ctx.save();
        ctx.translate(0, bob - s * 0.5);
        ctx.rotate(-0.5);
        A.orb(ctx, 0, 0, s * 0.16, s * 0.2, 0, A.tone(body, 0.06), { specA: 0.3 });
        // snout
        ctx.strokeStyle = A.tone(body, -0.15);
        ctx.lineCap = 'round';
        ctx.lineWidth = s * 0.09;
        ctx.beginPath(); ctx.moveTo(0, -s * 0.14); ctx.lineTo(s * 0.02, -s * 0.42); ctx.stroke();
        // coronet: the little crown
        ctx.fillStyle = A.tone(body, -0.3);
        ctx.beginPath();
        ctx.moveTo(-s * 0.1, -s * 0.16);
        ctx.lineTo(-s * 0.06, -s * 0.3);
        ctx.lineTo(0, -s * 0.18);
        ctx.lineTo(s * 0.04, -s * 0.3);
        ctx.lineTo(s * 0.08, -s * 0.16);
        ctx.closePath();
        ctx.fill();
        A.eyes(ctx, 0, 0, s * 0.3 * 0.26, s * 0.3 * 0.135, '#1c1712');
        ctx.restore();
        ctx.restore();
    }
}
