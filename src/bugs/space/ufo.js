// ── UFO: gunmetal saucer, chasing rim lights, tractor shaft ──────
class UFO {
    static draw(ctx, s, bob, bug) {
        const hull = '#9a70ec';
        const spin = bug.wobble * 1.6;
        const tilt = Math.sin(bug.wobble * 0.9) * 0.06;
        ctx.save();
        ctx.rotate(tilt);
        // tractor beam: flickering cone beneath
        const beamOn = Math.sin(bug.wobble * 0.7) > -0.2;
        if (beamOn) {
            const beam = ctx.createLinearGradient(0, bob + s * 0.2, 0, bob + s * 1.5);
            beam.addColorStop(0, 'rgba(150,255,200,0.28)');
            beam.addColorStop(0.6, 'rgba(120,230,180,0.10)');
            beam.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = beam;
            ctx.beginPath();
            ctx.moveTo(-s * 0.2, bob + s * 0.24);
            ctx.lineTo(s * 0.2, bob + s * 0.24);
            ctx.lineTo(s * 0.62, bob + s * 1.5);
            ctx.lineTo(-s * 0.62, bob + s * 1.5);
            ctx.closePath();
            ctx.fill();
            // motes rising in the beam
            for (let i = 0; i < 3; i++) {
                const p = ((bug.wobble * 0.4 + i * 0.33) % 1);
                ctx.fillStyle = `rgba(190,255,220,${0.5 * (1 - p)})`;
                ctx.beginPath();
                ctx.arc(Math.sin(i * 4 + bug.wobble) * s * 0.2 * (1 - p), bob + s * (1.3 - p), s * 0.03, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        // underside dish: dark, concave
        A.orb(ctx, 0, bob + s * 0.2, s * 0.5, s * 0.16, 0, '#5c3fae', { specA: 0.2 });
        // main hull disc: brushed gunmetal lens
        ctx.save();
        ctx.translate(0, bob);
        const hg = ctx.createLinearGradient(0, -s * 0.22, 0, s * 0.24);
        hg.addColorStop(0, A.tone(hull, 0.45));
        hg.addColorStop(0.45, hull);
        hg.addColorStop(1, A.tone(hull, -0.5));
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.ellipse(0, 0, s * 0.85, s * 0.26, 0, 0, Math.PI * 2);
        ctx.fill();
        // rim edge highlight
        ctx.strokeStyle = 'rgba(230,240,250,0.30)';
        ctx.lineWidth = s * 0.03;
        ctx.beginPath();
        ctx.ellipse(0, -s * 0.03, s * 0.82, s * 0.22, 0, Math.PI * 1.05, Math.PI * 1.95);
        ctx.stroke();
        // chasing rim lights: perspective-scaled around the ellipse
        for (let i = 0; i < 8; i++) {
            const a = spin + (i / 8) * Math.PI * 2;
            const lx = Math.cos(a) * s * 0.68;
            const ly = Math.sin(a) * s * 0.16 + s * 0.06;
            const front = Math.sin(a) > -0.25;
            if (front) {
                const on = (Math.floor(spin * 2) + i) % 8 < 2;
                const warm = on ? 'rgba(255,220,130,0.95)' : 'rgba(140,120,80,0.5)';
                ctx.fillStyle = warm;
                ctx.beginPath(); ctx.arc(lx, ly, s * 0.045, 0, Math.PI * 2); ctx.fill();
                if (on) { A.glow(ctx, lx, ly, s * 0.14, '#ffd882', 0.4); }
            }
        }
        ctx.restore();
        // cockpit dome: green-tinted glass with a hard glint
        const dg = ctx.createRadialGradient(-s * 0.12, bob - s * 0.34, s * 0.02, 0, bob - s * 0.22, s * 0.4);
        dg.addColorStop(0, 'rgba(210,255,230,0.75)');
        dg.addColorStop(0.4, 'rgba(120,210,170,0.45)');
        dg.addColorStop(1, 'rgba(50,110,90,0.25)');
        ctx.fillStyle = dg;
        ctx.beginPath();
        ctx.ellipse(0, bob - s * 0.2, s * 0.34, s * 0.3, 0, Math.PI, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.35)';
        ctx.lineWidth = s * 0.02;
        ctx.beginPath();
        ctx.ellipse(-s * 0.1, bob - s * 0.3, s * 0.12, s * 0.07, -0.5, 0, Math.PI * 2);
        ctx.stroke();
        // a crying little pilot in the dome
        A.orb(ctx, s * 0.02, bob - s * 0.26, s * 0.11, s * 0.13, 0, '#8ce07a', { specA: 0.25 });
        A.eyes(ctx, s * 0.02, bob - s * 0.28, s * 0.22 * 0.26, s * 0.22 * 0.135, '#1c1712');
        ctx.restore();
    }
}
