// ============================================================
// ART - shared pseudo-3D shading toolkit
// One global light source (top-left). Every creature is built
// from these primitives so the whole terrarium reads as one
// physically-lit world: graded chitin, specular gloss, glassy
// wings, articulated legs, faceted eyes, soft contact shadows.
// ============================================================
const A = {

    // ---- color utilities ------------------------------------
    rgb(hex) {
        const n = parseInt(hex.slice(1), 16);
        return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    },

    css(r, g, b, a) {
        return `rgba(${r | 0},${g | 0},${b | 0},${a === undefined ? 1 : a})`;
    },

    // tone(base, f): f>0 lightens toward white, f<0 darkens
    tone(hex, f, a) {
        let [r, g, b] = A.rgb(hex);
        if (f >= 0) { r += (255 - r) * f; g += (255 - g) * f; b += (255 - b) * f; }
        else { r *= 1 + f; g *= 1 + f; b *= 1 + f; }
        return A.css(r, g, b, a);
    },

    mix(hexA, hexB, t, a) {
        const ca = A.rgb(hexA), cb = A.rgb(hexB);
        return A.css(ca[0] + (cb[0] - ca[0]) * t, ca[1] + (cb[1] - ca[1]) * t, ca[2] + (cb[2] - ca[2]) * t, a);
    },

    // deterministic pseudo-random (backgrounds must not flicker)
    hash(n) {
        const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
        return x - Math.floor(x);
    },

    // ---- core body primitive --------------------------------
    // Flat-vector ellipsoid: smooth line-less shape with a soft
    // two-tone gradient and one subtle glossy highlight.
    orb(ctx, x, y, rx, ry, rot, base, o) {
        o = o || {};
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot || 0);
        const g = ctx.createLinearGradient(0, -ry, 0, ry);
        g.addColorStop(0, A.tone(base, o.lit === undefined ? 0.16 : Math.min(o.lit, 0.3)));
        g.addColorStop(1, A.tone(base, -0.14));
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2); ctx.fill();
        // one soft glossy highlight, top-left
        if (o.spec !== false) {
            const sa = Math.min(0.45, (o.specA === undefined ? 0.32 : o.specA) * 0.9);
            const sg = ctx.createRadialGradient(-rx * 0.3, -ry * 0.35, 0, -rx * 0.3, -ry * 0.35, Math.max(rx, ry) * 0.55);
            sg.addColorStop(0, `rgba(255,255,255,${sa})`);
            sg.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = sg;
            ctx.beginPath(); ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2); ctx.fill();
        }
        ctx.restore();
    },

    // ---- the friendly face -----------------------------------
    // The shared expression: relaxed brows, big round open eyes
    // with a bright sparkle (occasionally blinking for life),
    // and a small content smile. w is the face width; phase
    // animates it.
    face(ctx, cx, cy, w, phase) {
        const f = '#4a1420';
        const p = phase || 0;
        const ex = w * 0.26, ey = cy - w * 0.02;
        ctx.lineCap = 'round';
        // relaxed brows, gentle upward arc
        ctx.strokeStyle = f;
        ctx.lineWidth = Math.max(1, w * 0.05);
        for (let sd = -1; sd <= 1; sd += 2) {
            ctx.beginPath();
            ctx.moveTo(cx + sd * ex * 1.3, ey - w * 0.24);
            ctx.quadraticCurveTo(cx + sd * ex * 0.75, ey - w * 0.3, cx + sd * ex * 0.3, ey - w * 0.24);
            ctx.stroke();
        }
        // big round open eyes, with a quick occasional blink
        const blink = Math.sin(p * 0.35) > 0.985 ? 0.12 : 1;
        const er = w * 0.135;
        for (let sd = -1; sd <= 1; sd += 2) {
            const ecx = cx + sd * ex, ecy = ey + w * 0.04;
            ctx.save();
            ctx.translate(ecx, ecy);
            ctx.scale(1, blink);
            ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.arc(0, 0, er, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = f;
            ctx.lineWidth = Math.max(0.8, er * 0.18);
            ctx.beginPath(); ctx.arc(0, 0, er, 0, Math.PI * 2); ctx.stroke();
            ctx.fillStyle = '#3a2a20';
            ctx.beginPath(); ctx.arc(sd * er * 0.15, er * 0.14, er * 0.6, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#161010';
            ctx.beginPath(); ctx.arc(sd * er * 0.15, er * 0.14, er * 0.3, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = 'rgba(255,255,255,0.95)';
            ctx.beginPath(); ctx.arc(-er * 0.3, -er * 0.32, er * 0.22, 0, Math.PI * 2); ctx.fill();
            ctx.restore();
        }
        // small content smile
        const sm = w * (0.14 + 0.02 * Math.sin(p * 1.4));
        const my = cy + w * 0.28;
        ctx.strokeStyle = f;
        ctx.lineWidth = Math.max(1.1, w * 0.055);
        ctx.beginPath();
        ctx.moveTo(cx - sm, my - sm * 0.15);
        ctx.quadraticCurveTo(cx, my + sm * 0.55, cx + sm, my - sm * 0.15);
        ctx.stroke();
    },

    // ---- segmented abdomen ----------------------------------
    // Chain of shaded segments along +y, tapering to the tail.
    // wob adds a lazy lateral sway (pass bug.wobble).
    segs(ctx, x, y, count, r0, step, taper, base, wob) {
        for (let i = count - 1; i >= 0; i--) {
            const r = r0 * (1 - taper * (i / count));
            const sway = wob === undefined ? 0 : Math.sin(wob * 0.6 + i * 0.45) * r0 * 0.16 * (i / count);
            A.orb(ctx, x + sway, y + step * i, r, r * 1.06, 0, base, { specA: 0.16 });
            }
    },

    // ---- articulated leg ------------------------------------
    // Smooth flat-vector limb: rounded line-less strokes, two
    // tapered segments with a bent knee; bend flips per side.
    leg(ctx, x0, y0, x1, y1, bend, w, color) {
        const mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
        const dx = x1 - x0, dy = y1 - y0;
        const len = Math.hypot(dx, dy) || 1;
        const kx = mx - (dy / len) * bend, ky = my + (dx / len) * bend;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;
        ctx.lineWidth = w * 1.25;
        ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(kx, ky); ctx.stroke();
        ctx.lineWidth = w * 0.8;
        ctx.beginPath(); ctx.moveTo(kx, ky); ctx.lineTo(x1, y1); ctx.stroke();
    },

    // ---- standard insect leg set ----------------------------
    // Three pairs from the thorax, alternating gait via phase.
    legSet(ctx, s, bob, phase, color, o) {
        o = o || {};
        const reach = o.reach === undefined ? 1.0 : o.reach;
        const w = o.w === undefined ? s * 0.09 : o.w;
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const ay = bob + (i - 1) * s * 0.34;
                const swing = Math.sin(phase + i * 1.9 + (side > 0 ? Math.PI : 0)) * s * 0.22;
                const spread = (0.75 + i * 0.28) * reach;
                A.leg(ctx,
                    side * s * 0.18, ay,
                    side * s * spread + swing * 0.4, ay + s * 0.42 + swing,
                    side * s * 0.34, w, color);
            }
        }
    },

    // ---- antennae -------------------------------------------
    antennae(ctx, s, headY, phase, color, o) {
        o = o || {};
        const len = o.len === undefined ? 1.0 : o.len;
        ctx.strokeStyle = color;
        ctx.lineCap = 'round';
        ctx.lineWidth = Math.max(1.0, s * 0.07);
        for (let side = -1; side <= 1; side += 2) {
            const wave = Math.sin(phase + (side > 0 ? 1.3 : 0)) * s * 0.12;
            const tx = side * s * 0.5 * len + wave;
            const ty = headY - s * 0.85 * len;
            ctx.beginPath();
            ctx.moveTo(side * s * 0.1, headY);
            ctx.quadraticCurveTo(side * s * 0.38 * len, headY - s * 0.55 * len, tx, ty);
            ctx.stroke();
            if (o.club) {
                ctx.fillStyle = color;
                ctx.beginPath(); ctx.arc(tx, ty, s * 0.07, 0, Math.PI * 2); ctx.fill();
            }
        }
    },

    // ---- cartoon eye ----------------------------------------
    // Big white sclera, colored iris, chunky pupil, sparkles.
    eye(ctx, x, y, r, tint) {
        const iris = tint && tint[0] === '#' ? A.tone(tint, 0.35) : '#4a4a5a';
        ctx.fillStyle = '#ffffff';
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(18,18,30,0.8)';
        ctx.lineWidth = Math.max(0.8, r * 0.16);
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = iris;
        ctx.beginPath(); ctx.arc(x, y + r * 0.12, r * 0.62, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#14141c';
        ctx.beginPath(); ctx.arc(x, y + r * 0.16, r * 0.34, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        ctx.beginPath(); ctx.arc(x - r * 0.26, y - r * 0.28, r * 0.2, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.beginPath(); ctx.arc(x + r * 0.22, y + r * 0.3, r * 0.1, 0, Math.PI * 2); ctx.fill();
    },

    // ---- glassy wing ----------------------------------------
    // Teardrop membrane with iridescent gradient, radiating
    // veins and a moving sheen. ang aims the wing; flap tilts it.
    wing(ctx, x, y, len, wid, ang, flap, tint, alpha) {
        const a = Math.min(0.85, (alpha === undefined ? 0.4 : alpha) * 1.35);
        const t = tint || '#bcd8e8';
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(ang + flap);
        const g = ctx.createLinearGradient(0, 0, len, 0);
        g.addColorStop(0, A.tone(t, 0.5, a * 1.1));
        g.addColorStop(0.45, A.tone(t, 0.1, a));
        g.addColorStop(0.8, A.mix(t, '#9db4ff', 0.4, a * 0.75));
        g.addColorStop(1, A.tone(t, -0.15, a * 0.25));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(len * 0.25, -wid, len * 0.85, -wid * 0.85, len, -wid * 0.12);
        ctx.bezierCurveTo(len * 0.85, wid * 0.5, len * 0.3, wid * 0.42, 0, 0);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = `rgba(255,255,255,${a * 0.4})`;
        ctx.beginPath();
        ctx.ellipse(len * 0.45, -wid * 0.3, len * 0.28, wid * 0.16, -0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    },

    // ---- glow / shadow --------------------------------------
    glow(ctx, x, y, r, color, a) {
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, A.tone(color, 0.2, a));
        g.addColorStop(1, A.tone(color, 0.2, 0));
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    },

    // soft ambient-occlusion contact shadow (world-space)
    ao(ctx, x, y, rx, ry, a) {
        const g = ctx.createRadialGradient(x, y, 0, x, y, rx);
        g.addColorStop(0, `rgba(8,6,4,${a === undefined ? 0.34 : a})`);
        g.addColorStop(0.65, `rgba(8,6,4,${(a === undefined ? 0.34 : a) * 0.4})`);
        g.addColorStop(1, 'rgba(8,6,4,0)');
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(1, ry / rx);
        ctx.translate(-x, -y);
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(x, y, rx, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
    },

    // ---- background helpers ---------------------------------
    // cinematic vignette + subtle top light, call last
    vig(ctx, W, H, strength) {
        const s = strength === undefined ? 0.5 : strength;
        const g = ctx.createRadialGradient(W * 0.5, H * 0.42, Math.min(W, H) * 0.35, W * 0.5, H * 0.55, Math.max(W, H) * 0.85);
        g.addColorStop(0, 'rgba(0,0,0,0)');
        g.addColorStop(1, `rgba(0,0,0,${s})`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
        const top = ctx.createLinearGradient(0, 0, 0, H * 0.5);
        top.addColorStop(0, 'rgba(255,250,235,0.05)');
        top.addColorStop(1, 'rgba(255,250,235,0)');
        ctx.fillStyle = top;
        ctx.fillRect(0, 0, W, H * 0.5);
    },

    // ============================================================
    // FLAT-VECTOR SET — matte shading, small realistic eyes, no
    // cartoon face. Same light source and palette conventions as
    // the primitives above; used by the redesigned creatures.
    // ============================================================

    // matte body ellipse: flat fill + soft top-left gradient + gentle sheen
    body(ctx, x, y, rx, ry, rot, base, spec) {
        ctx.save(); ctx.translate(x, y); ctx.rotate(rot || 0);
        const g = ctx.createLinearGradient(-rx, -ry, rx, ry);
        g.addColorStop(0, A.tone(base, 0.16)); g.addColorStop(0.55, base); g.addColorStop(1, A.tone(base, -0.15));
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2); ctx.fill();
        if (spec !== false) {
            const sg = ctx.createRadialGradient(-rx * 0.35, -ry * 0.4, 0, -rx * 0.35, -ry * 0.4, Math.max(rx, ry) * 0.85);
            sg.addColorStop(0, 'rgba(255,255,255,0.20)'); sg.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = sg;
            ctx.beginPath(); ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2); ctx.fill();
        }
        ctx.restore();
    },

    // little tarsus foot dot at the end of a leg
    foot(ctx, x, y, r, color) { ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); },

    // walking legs: alternating-tripod gait tied to bug.legPhase (which
    // now scales with actual travel speed), with little feet.
    walk(ctx, s, gait, rows, color, lw) {
        rows.forEach((row, i) => {
            for (let side = -1; side <= 1; side += 2) {
                const tri = ((i + (side > 0 ? 1 : 0)) & 1) ? Math.PI : 0;
                const step = Math.sin(gait + tri), lift = Math.max(0, Math.cos(gait + tri));
                const hip = row.hip === undefined ? 0.5 : row.hip;
                const x0 = side * s * hip, y0 = row.ay * s;
                const x1 = side * s * (row.out - lift * 0.1), y1 = (row.ay + row.mid) * s + step * s * 0.22;
                A.leg(ctx, x0, y0, x1, y1, side * s * 0.2, lw, color);
                A.foot(ctx, x1, y1, lw * 0.78, color);
            }
        });
    },

    // small realistic eyes: dark bead + catch-light, no sparkle, no mouth
    eyes(ctx, cx, cy, spread, r, dark) {
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = '#FBF4E6';
            ctx.beginPath(); ctx.ellipse(cx + side * spread, cy, r, r * 1.15, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = dark;
            ctx.beginPath(); ctx.arc(cx + side * spread + r * 0.08, cy + r * 0.16, r * 0.5, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = 'rgba(255,255,255,0.9)';
            ctx.beginPath(); ctx.arc(cx + side * spread - r * 0.22, cy - r * 0.26, r * 0.28, 0, Math.PI * 2); ctx.fill();
        }
    },

    // antenna from (bx,by) to (tx,ty), optional gold club tip
    antenna(ctx, s, bx, by, tx, ty, color, club) {
        ctx.strokeStyle = color; ctx.lineCap = 'round'; ctx.lineWidth = s * 0.055;
        ctx.beginPath(); ctx.moveTo(bx, by); ctx.quadraticCurveTo((bx + tx) * 0.5, by - (by - ty) * 0.6, tx, ty); ctx.stroke();
        if (club) {
            ctx.fillStyle = '#F5C95A';
            ctx.beginPath(); ctx.arc(tx, ty, s * 0.09, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = 'rgba(255,255,255,0.4)';
            ctx.beginPath(); ctx.arc(tx - s * 0.03, ty - s * 0.03, s * 0.035, 0, Math.PI * 2); ctx.fill();
        }
    },

    // shaded spot/patch (spots, markings) with a soft light catch
    spot(ctx, x, y, r, hi, lo) {
        const g = ctx.createRadialGradient(x - r * 0.28, y - r * 0.3, 0, x, y, r);
        g.addColorStop(0, hi); g.addColorStop(1, lo);
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(255,248,214,0.4)';
        ctx.beginPath(); ctx.arc(x - r * 0.28, y - r * 0.3, r * 0.3, 0, Math.PI * 2); ctx.fill();
    }
};
