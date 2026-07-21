// ============================================================
// CYBER - flat vector digital grid
// Deep near-black void, a neon horizon glow, a perspective
// Tron-style grid floor, a scanline skyline and falling
// data-rain columns.
// ============================================================
function drawCyberBackground() {
    const t = frame * 0.006;
    const horizonY = H * 0.42;

    // ── deep void backdrop ───────────────────────────────────
    const void_ = ctx.createLinearGradient(0, 0, 0, H);
    void_.addColorStop(0, '#0a0a18');
    void_.addColorStop(0.5, '#120a24');
    void_.addColorStop(1, '#050308');
    ctx.fillStyle = void_;
    ctx.fillRect(0, 0, W, H);

    // ── neon horizon glow band ──────────────────────────────
    const glowBand = ctx.createLinearGradient(0, horizonY - H * 0.12, 0, horizonY + H * 0.06);
    glowBand.addColorStop(0, 'rgba(232,88,200,0)');
    glowBand.addColorStop(0.6, 'rgba(232,88,200,0.18)');
    glowBand.addColorStop(1, 'rgba(60,224,224,0.22)');
    ctx.fillStyle = glowBand;
    ctx.fillRect(0, horizonY - H * 0.12, W, H * 0.18);

    // ── star-static above the horizon ───────────────────────
    for (let i = 0; i < 40; i++) {
        const sx = A.hash(i * 1.7) * W;
        const sy = A.hash(i * 3.1) * horizonY;
        const tw = 0.3 + 0.5 * Math.abs(Math.sin(t * 1.8 + i * 1.1));
        ctx.fillStyle = `rgba(160,220,255,${tw * 0.55})`;
        ctx.beginPath(); ctx.arc(sx, sy, 0.7 + A.hash(i * 4.9) * 1.1, 0, Math.PI * 2); ctx.fill();
    }

    // ── neon skyline silhouette ──────────────────────────────
    const skyline = [
        [0.06, 0.16, '#3ce0e0'], [0.16, 0.24, '#e858c8'], [0.24, 0.12, '#4ce06a'],
        [0.62, 0.2, '#e858c8'], [0.72, 0.14, '#3ce0e0'], [0.83, 0.26, '#4ce06a'], [0.92, 0.1, '#e858c8']
    ];
    for (const [fx, fh, col] of skyline) {
        const bx = fx * W, bw = W * 0.07, bh = fh * H * 0.55;
        const by = horizonY - bh;
        ctx.fillStyle = 'rgba(6,4,14,0.92)';
        ctx.fillRect(bx, by, bw, bh + 4);
        ctx.strokeStyle = A.tone(col, 0.1, 0.5);
        ctx.lineWidth = 1;
        ctx.strokeRect(bx + 0.5, by + 0.5, bw - 1, bh);
        // lit windows
        for (let wy = by + 4; wy < horizonY - 4; wy += 7) {
            for (let wx = bx + 4; wx < bx + bw - 4; wx += 6) {
                if (A.hash(wx * 0.7 + wy * 1.3) > 0.55) {
                    ctx.fillStyle = A.tone(col, 0.3, 0.7);
                    ctx.fillRect(wx, wy, 2, 2);
                }
            }
        }
    }

    // ── perspective grid floor ──────────────────────────────
    const vpx = W * 0.5;
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, horizonY, W, H - horizonY);
    ctx.clip();
    // horizontal lines, denser toward the horizon (perspective)
    for (let i = 0; i < 22; i++) {
        const p = i / 22;
        const yy = horizonY + Math.pow(p, 2.4) * (H - horizonY);
        const a = 0.08 + p * 0.42;
        ctx.strokeStyle = `rgba(60,224,224,${a})`;
        ctx.lineWidth = 1 + p * 1.5;
        ctx.beginPath(); ctx.moveTo(0, yy); ctx.lineTo(W, yy); ctx.stroke();
    }
    // vertical lines converging to the vanishing point, slowly scrolling
    const shift = (t * 18) % 60;
    for (let i = -14; i <= 14; i++) {
        const bx = vpx + i * 60 + shift * Math.sign(i || 1);
        ctx.strokeStyle = 'rgba(232,88,200,0.3)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(vpx, horizonY);
        ctx.lineTo(bx, H);
        ctx.stroke();
    }
    ctx.restore();

    // ── falling data-rain columns ───────────────────────────
    for (let i = 0; i < 14; i++) {
        const cx = A.hash(i * 6.3) * W;
        const speed = 60 + A.hash(i * 2.1) * 80;
        const colH = 40 + A.hash(i * 4.4) * 60;
        const cy = (t * speed + A.hash(i * 9.7) * (H + colH) * 3) % (H + colH) - colH;
        const grd = ctx.createLinearGradient(0, cy - colH, 0, cy);
        grd.addColorStop(0, 'rgba(76,224,106,0)');
        grd.addColorStop(1, 'rgba(76,224,106,0.55)');
        ctx.strokeStyle = grd;
        ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(cx, cy - colH); ctx.lineTo(cx, cy); ctx.stroke();
        ctx.fillStyle = 'rgba(180,255,210,0.85)';
        ctx.beginPath(); ctx.arc(cx, cy, 1.6, 0, Math.PI * 2); ctx.fill();
    }

    // ── scanline flicker overlay ─────────────────────────────
    ctx.fillStyle = `rgba(150,220,255,${0.02 + 0.015 * Math.sin(t * 40)})`;
    for (let y = 0; y < H; y += 3) { ctx.fillRect(0, y, W, 1); }

    A.vig(ctx, W, H, 0.22);
}
