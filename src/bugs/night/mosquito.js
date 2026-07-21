// ── MOSQUITO: hunched silhouette, needle proboscis, dangling legs ──────
class Mosquito {
    static draw(ctx, s, bob, bug) {
        const body = '#8a96e0';
        const flap = Math.sin(bug.wingPhase * 1.6) * 0.5;
        // six threadlike legs hanging in flight
        ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const drift = Math.sin(bug.legPhase * 0.5 + i * 1.4 + side) * s * 0.1;
                const ax = side * s * 0.08, ay = bob - s * 0.05 + i * s * 0.1;
                ctx.strokeStyle = 'rgba(24,30,36,0.85)';
                ctx.lineWidth = s * 0.035;
                ctx.beginPath();
                ctx.moveTo(ax, ay);
                ctx.quadraticCurveTo(
                    side * s * (0.5 + i * 0.15) + drift, ay + s * 0.1,
                    side * s * (0.75 + i * 0.2) + drift * 1.3, ay + s * (0.55 + i * 0.22));
                ctx.stroke();
            }
        }
        // narrow blurred wings: a mosquito's wings barely register
        for (let side = -1; side <= 1; side += 2) {
            ctx.save(); ctx.scale(side, 1);
            A.wing(ctx, s * 0.06, bob - s * 0.18, s * 1.0, s * 0.2, 0.35, flap * 0.6, '#aeb6c2', 0.2);
            ctx.restore();
        }
        // abdomen: banded, tilted up in the classic resting angle
        ctx.save();
        ctx.rotate(0.12);
        A.segs(ctx, 0, bob + s * 0.2, 5, s * 0.11, s * 0.14, 0.4, body, bug.wobble);
        // pale bands between segments
        ctx.strokeStyle = 'rgba(180,190,200,0.3)';
        ctx.lineWidth = s * 0.03;
        for (let k = 0; k < 4; k++) {
            ctx.beginPath();
            ctx.arc(0, bob + s * (0.27 + k * 0.14), s * 0.09, Math.PI * 0.2, Math.PI * 0.8);
            ctx.stroke();
        }
        ctx.restore();
        // hunched thorax — the highest point of the silhouette
        A.orb(ctx, 0, bob - s * 0.12, s * 0.16, s * 0.2, -0.1, '#a6b0ea', { specA: 0.26 });
        // small head tucked low
        A.orb(ctx, 0, bob - s * 0.36, s * 0.1, s * 0.09, 0, '#7a86d0', {});
        A.face(ctx, 0, bob - s * 0.35, s * 0.32, bug.wobble);
        // the needle: long proboscis with a hair-thin highlight
        ctx.strokeStyle = '#3e4880';
        ctx.lineWidth = s * 0.04;
        ctx.beginPath(); ctx.moveTo(0, bob - s * 0.42); ctx.lineTo(0, bob - s * 1.05); ctx.stroke();
        ctx.strokeStyle = 'rgba(170,185,200,0.4)';
        ctx.lineWidth = s * 0.012;
        ctx.beginPath(); ctx.moveTo(-s * 0.012, bob - s * 0.42); ctx.lineTo(-s * 0.012, bob - s * 1.05); ctx.stroke();
        // short fuzzy antennae beside the needle
        A.antennae(ctx, s * 0.5, bob - s * 0.42, bug.antennaPhase, '#555fa0', { len: 0.5 });
    }
}
