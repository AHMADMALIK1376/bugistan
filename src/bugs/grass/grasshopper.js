// ── GRASSHOPPER: sage jumper, folded spring hind legs, sloped head ──────
class Grasshopper {
    static draw(ctx, s, bob, bug) {
        const gait = bug.legPhase, wob = bug.wobble;
        const idle = Math.sin(gait * 0.3);
        // ---- mighty hind jump legs: a real grasshopper walks on its
        // front/mid legs and holds the huge hind legs folded like a
        // loaded spring — they don't swing. Tapered banded femur, a
        // real knee, a spiny tibia, tiny claw foot. ----
        for (let side = -1; side <= 1; side += 2) {
            ctx.save();
            ctx.translate(side * s * 0.2, s * 0.12);
            ctx.rotate(side * (0.98 + idle * 0.02));
            const fg = ctx.createLinearGradient(0, -s * 0.19, 0, s * 0.19);
            fg.addColorStop(0, A.tone('#7FB86A', 0.2)); fg.addColorStop(1, A.tone('#7FB86A', -0.16));
            ctx.fillStyle = fg;
            ctx.beginPath();
            ctx.moveTo(s * 0.02, -s * 0.15);
            ctx.quadraticCurveTo(s * 0.4, -s * 0.19, s * 0.74, -s * 0.05);
            ctx.quadraticCurveTo(s * 0.82, 0, s * 0.74, s * 0.05);
            ctx.quadraticCurveTo(s * 0.4, s * 0.19, s * 0.02, s * 0.15);
            ctx.closePath(); ctx.fill();
            ctx.fillStyle = 'rgba(255,255,255,0.14)';
            ctx.beginPath(); ctx.ellipse(s * 0.24, -s * 0.08, s * 0.16, s * 0.05, -0.2, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = 'rgba(40,58,22,0.5)'; ctx.lineCap = 'round'; ctx.lineWidth = s * 0.022;
            for (let k = 0; k < 3; k++) {
                const x = s * (0.2 + k * 0.17);
                ctx.beginPath(); ctx.moveTo(x, -s * 0.14 + k * s * 0.01); ctx.lineTo(x - s * 0.03, s * 0.14 - k * s * 0.01); ctx.stroke();
            }
            A.foot(ctx, s * 0.75, 0, s * 0.048, '#496F37');
            const tx = s * 0.4 + idle * s * 0.012, ty = s * 0.5;
            ctx.strokeStyle = '#496F37'; ctx.lineCap = 'round'; ctx.lineWidth = s * 0.04;
            ctx.beginPath(); ctx.moveTo(s * 0.75, 0); ctx.quadraticCurveTo(s * 0.62, s * 0.28, tx, ty); ctx.stroke();
            ctx.strokeStyle = '#496F37'; ctx.lineCap = 'round'; ctx.lineWidth = s * 0.016;
            for (let k = 1; k <= 4; k++) {
                const p = k / 5, px = s * 0.75 + (tx - s * 0.75) * p, py = ty * p;
                ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px - s * 0.045, py + s * 0.018); ctx.stroke();
            }
            ctx.strokeStyle = '#221C18'; ctx.lineWidth = s * 0.024; ctx.lineCap = 'round';
            ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(tx - s * 0.045, ty + s * 0.05); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(tx + s * 0.02, ty + s * 0.06); ctx.stroke();
            ctx.restore();
        }
        // ---- front + mid legs: these actually walk ----
        A.walk(ctx, s, gait, [{ ay: -0.24, out: 0.58, mid: 0.26, hip: 0.13 }, { ay: -0.02, out: 0.66, mid: 0.3, hip: 0.15 }], '#496F37', s * 0.045);

        // ---- tapering segmented abdomen ----
        for (let i = 5; i >= 0; i--) { const r = s * (0.19 - i * 0.02); A.body(ctx, 0, s * (0.26 + i * 0.155), r * 1.05, r, 0, i % 2 ? '#7FB86A' : '#9CCF86', false); }

        // ---- folded wing (tegmen): long, tapering to a point ----
        const wg = ctx.createLinearGradient(0, -s * 0.3, 0, s * 1.05);
        wg.addColorStop(0, '#9CCF86'); wg.addColorStop(1, A.tone('#7FB86A', -0.2));
        ctx.fillStyle = wg;
        ctx.beginPath();
        ctx.moveTo(-s * 0.17, -s * 0.28);
        ctx.quadraticCurveTo(-s * 0.2, s * 0.35, -s * 0.02, s * 1.05);
        ctx.lineTo(s * 0.02, s * 1.05);
        ctx.quadraticCurveTo(s * 0.2, s * 0.35, s * 0.17, -s * 0.28);
        ctx.closePath(); ctx.fill();
        ctx.strokeStyle = 'rgba(30,50,20,0.4)'; ctx.lineWidth = s * 0.018;
        ctx.beginPath(); ctx.moveTo(0, -s * 0.26); ctx.lineTo(0, s * 1.0); ctx.stroke();
        ctx.strokeStyle = 'rgba(210,240,180,0.3)'; ctx.lineWidth = s * 0.03; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(-s * 0.08, -s * 0.18); ctx.quadraticCurveTo(-s * 0.11, s * 0.3, -s * 0.03, s * 0.85); ctx.stroke();

        // ---- pronotum (saddle) ----
        A.body(ctx, 0, -s * 0.3, s * 0.19, s * 0.21, 0, '#7FB86A');
        ctx.strokeStyle = 'rgba(30,50,20,0.35)'; ctx.lineWidth = s * 0.015;
        ctx.beginPath(); ctx.moveTo(0, -s * 0.46); ctx.lineTo(0, -s * 0.14); ctx.stroke();

        // ---- head: sloped face, big bulging eyes ----
        const hg = ctx.createLinearGradient(0, -s * 0.86, 0, -s * 0.4);
        hg.addColorStop(0, A.tone('#9CCF86', 0.14)); hg.addColorStop(1, '#9CCF86');
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.moveTo(-s * 0.17, -s * 0.42);
        ctx.quadraticCurveTo(-s * 0.2, -s * 0.68, -s * 0.06, -s * 0.82);
        ctx.quadraticCurveTo(0, -s * 0.88, s * 0.06, -s * 0.82);
        ctx.quadraticCurveTo(s * 0.2, -s * 0.68, s * 0.17, -s * 0.42);
        ctx.quadraticCurveTo(0, -s * 0.34, -s * 0.17, -s * 0.42);
        ctx.closePath(); ctx.fill();
        A.eyes(ctx, 0, -s * 0.6, s * 0.135, s * 0.1, '#221C18');

        // ---- long thin antennae, gently trailing ----
        ctx.strokeStyle = '#496F37'; ctx.lineCap = 'round'; ctx.lineWidth = s * 0.035;
        for (let side = -1; side <= 1; side += 2) {
            const sway = Math.sin(wob * 0.7 + side) * s * 0.04;
            ctx.beginPath();
            ctx.moveTo(side * s * 0.06, -s * 0.78);
            ctx.quadraticCurveTo(side * s * 0.28 + sway, -s * 1.15, side * s * 0.44 + sway, -s * 1.5);
            ctx.stroke();
        }
    }
}
