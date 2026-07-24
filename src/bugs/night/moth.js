// ── MOTH: dusty taupe wings, eyespots, plume antennae ──────
class Moth {
    static draw(ctx, s, bob, bug) {
        const body = '#b48ae0';
        const flap = Math.sin(bug.wingPhase) * 0.35;
        // broad scalloped wings, powdery matte gradient
        for (let side = -1; side <= 1; side += 2) {
            ctx.save();
            ctx.scale(side, 1);
            ctx.translate(s * 0.08, bob - s * 0.05);
            ctx.rotate(0.15 + flap);
            const wg = ctx.createLinearGradient(0, 0, s * 1.5, 0);
            wg.addColorStop(0, '#d0b2f0');
            wg.addColorStop(0.5, '#c4a2ea');
            wg.addColorStop(1, '#9a6cd0');
            ctx.fillStyle = wg;
            // forewing: broad scalloped triangle
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(s * 0.5, -s * 0.72, s * 1.35, -s * 0.62, s * 1.5, -s * 0.1);
            ctx.quadraticCurveTo(s * 1.2, s * 0.12, s * 0.9, s * 0.1);
            ctx.quadraticCurveTo(s * 0.5, s * 0.2, 0, s * 0.1);
            ctx.closePath();
            ctx.fill();
            // hindwing peeking below
            ctx.fillStyle = '#8a5cc0';
            ctx.beginPath();
            ctx.moveTo(s * 0.05, s * 0.08);
            ctx.quadraticCurveTo(s * 0.7, s * 0.42, s * 0.95, s * 0.32);
            ctx.quadraticCurveTo(s * 0.6, s * 0.55, s * 0.1, s * 0.32);
            ctx.closePath();
            ctx.fill();
            // wavy scale bands
            ctx.strokeStyle = 'rgba(38,30,24,0.5)';
            ctx.lineWidth = s * 0.045;
            for (let k = 0; k < 2; k++) {
                ctx.beginPath();
                ctx.moveTo(s * (0.35 + k * 0.4), -s * (0.42 - k * 0.1));
                ctx.quadraticCurveTo(s * (0.5 + k * 0.4), -s * (0.1 - k * 0.02), s * (0.4 + k * 0.42), s * 0.1);
                ctx.stroke();
            }
            // eyespot: ringed, with a glinting core
            const ex = s * 0.85, ey = -s * 0.28;
            ctx.fillStyle = '#5c3f8e';
            ctx.beginPath(); ctx.arc(ex, ey, s * 0.16, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = 'rgba(210,190,160,0.7)';
            ctx.lineWidth = s * 0.035;
            ctx.beginPath(); ctx.arc(ex, ey, s * 0.16, 0, Math.PI * 2); ctx.stroke();
            ctx.fillStyle = 'rgba(160,190,210,0.5)';
            ctx.beginPath(); ctx.arc(ex - s * 0.04, ey - s * 0.04, s * 0.05, 0, Math.PI * 2); ctx.fill();
            // powdery fringe on the trailing edge
            ctx.strokeStyle = 'rgba(140,120,96,0.4)';
            ctx.lineWidth = 0.6;
            for (let k = 0; k < 5; k++) {
                ctx.beginPath();
                ctx.moveTo(s * (0.2 + k * 0.18), s * 0.1);
                ctx.lineTo(s * (0.22 + k * 0.18), s * 0.18);
                ctx.stroke();
            }
            ctx.restore();
        }
        // thick furry body: layered soft strokes read as fuzz
        A.segs(ctx, 0, bob + s * 0.16, 4, s * 0.2, s * 0.16, 0.4, body, bug.wobble);
        A.orb(ctx, 0, bob - s * 0.1, s * 0.24, s * 0.3, 0, '#d0b2f0', { specA: 0.14 });
        ctx.strokeStyle = 'rgba(150,130,105,0.5)';
        ctx.lineWidth = 0.5;
        for (let k = 0; k < 8; k++) {
            const a = -Math.PI / 2 + (k - 3.5) * 0.28;
            ctx.beginPath();
            ctx.moveTo(Math.cos(a) * s * 0.16, bob - s * 0.1 + Math.sin(a) * s * 0.2);
            ctx.lineTo(Math.cos(a) * s * 0.3, bob - s * 0.1 + Math.sin(a) * s * 0.34);
            ctx.stroke();
        }
        // head with big dark night eyes
        A.orb(ctx, 0, bob - s * 0.42, s * 0.14, s * 0.13, 0, '#c0a0e8', {});
        A.eyes(ctx, 0, bob - s * 0.4, s * 0.42 * 0.26, s * 0.42 * 0.135, '#1c1712');
        // feathered plume antennae
        for (let side = -1; side <= 1; side += 2) {
            const tip = Math.sin(bug.antennaPhase + side) * s * 0.06;
            ctx.strokeStyle = '#6f50a0';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(side * s * 0.06, bob - s * 0.52);
            ctx.quadraticCurveTo(side * s * 0.3, bob - s * 0.8, side * s * 0.5 + tip, bob - s * 0.95);
            ctx.stroke();
            for (let k = 1; k <= 5; k++) {
                const p = k / 6;
                const px = side * s * (0.06 + 0.44 * p) + tip * p;
                const py = bob - s * (0.52 + 0.43 * p);
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(px + side * s * 0.08 * (1 - p * 0.5), py + s * 0.05);
                ctx.stroke();
            }
        }
    }
}
