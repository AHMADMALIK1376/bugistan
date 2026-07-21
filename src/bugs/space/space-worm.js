// ── SPACE WORM: void leviathan, nebula hide, sinuous drift ──────
class SpaceWorm {
    static draw(ctx, s, bob, bug) {
        const hide = '#9a62f0';
        const n = 10;
        // build the spine: a sinuous drift through the void
        const pts = [];
        for (let i = 0; i < n; i++) {
            const p = i / (n - 1);
            pts.push({
                x: Math.sin(bug.wobble * 0.9 + p * 4.2) * s * 0.4 * p,
                y: bob - s * 0.55 + p * s * 1.7,
                r: s * (0.3 - Math.abs(p - 0.25) * 0.22)
            });
        }
        // faint cosmic wake behind the tail
        const wake = ctx.createRadialGradient(pts[n - 1].x, pts[n - 1].y, 0, pts[n - 1].x, pts[n - 1].y, s * 0.8);
        wake.addColorStop(0, 'rgba(180,140,255,0.12)');
        wake.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = wake;
        ctx.beginPath(); ctx.arc(pts[n - 1].x, pts[n - 1].y, s * 0.8, 0, Math.PI * 2); ctx.fill();
        // body segments tail-to-head, nebula-shaded
        for (let i = n - 1; i >= 0; i--) {
            const pt = pts[i];
            A.orb(ctx, pt.x, pt.y, pt.r, pt.r, 0, hide, { specA: 0.24 });
            // starlight freckles along the hide
            if (i % 2 === 0) {
                const tw = 0.3 + Math.abs(Math.sin(bug.wobble * 2 + i)) * 0.5;
                ctx.fillStyle = `rgba(220,200,255,${tw})`;
                ctx.beginPath();
                ctx.arc(pt.x + pt.r * 0.4, pt.y - pt.r * 0.3, s * 0.02, 0, Math.PI * 2);
                ctx.fill();
            }
            // segment ring
            ctx.strokeStyle = 'rgba(70,40,120,0.5)';
            ctx.lineWidth = Math.max(0.5, pt.r * 0.08);
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, pt.r * 0.95, Math.PI * 0.2, Math.PI * 0.8);
            ctx.stroke();
        }
        // dorsal fin membrane rippling down the back
        ctx.fillStyle = 'rgba(190,150,255,0.20)';
        ctx.beginPath();
        ctx.moveTo(pts[1].x, pts[1].y);
        for (let i = 1; i < n - 1; i++) {
            const lift = Math.sin(bug.wobble * 1.6 + i * 0.8) * s * 0.08;
            ctx.lineTo(pts[i].x - pts[i].r - s * 0.12 + lift, pts[i].y);
        }
        ctx.lineTo(pts[n - 2].x, pts[n - 2].y);
        ctx.closePath();
        ctx.fill();
        // head: armored prow with a glowing lure
        const hd = pts[0];
        A.orb(ctx, hd.x, hd.y, s * 0.32, s * 0.3, 0, '#b284f6', { specA: 0.32 });
        // jaw plates
        ctx.strokeStyle = 'rgba(70,40,120,0.7)';
        ctx.lineWidth = s * 0.035;
        ctx.beginPath();
        ctx.arc(hd.x, hd.y + s * 0.02, s * 0.26, Math.PI * 1.25, Math.PI * 1.75);
        ctx.stroke();
        // the crying face on the prow
        A.face(ctx, hd.x, hd.y - s * 0.05, s * 0.5, bug.wobble);
        // the lure: a glowing antenna orb bobbing ahead
        const lureX = hd.x + Math.sin(bug.antennaPhase) * s * 0.1;
        const lureY = hd.y - s * 0.6;
        ctx.strokeStyle = 'rgba(230,150,90,0.6)';
        ctx.lineWidth = s * 0.025;
        ctx.beginPath();
        ctx.moveTo(hd.x, hd.y - s * 0.26);
        ctx.quadraticCurveTo(hd.x + s * 0.1, hd.y - s * 0.45, lureX, lureY);
        ctx.stroke();
        const pulse = 0.6 + Math.sin(bug.wobble * 2.2) * 0.4;
        A.glow(ctx, lureX, lureY, s * 0.3, '#ffd166', pulse * 0.5);
        ctx.fillStyle = `rgba(255,235,200,${0.6 + pulse * 0.4})`;
        ctx.beginPath(); ctx.arc(lureX, lureY, s * 0.05, 0, Math.PI * 2); ctx.fill();
    }
}
