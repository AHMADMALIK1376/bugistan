// ── VIRUS BYTE: spiky little malware ball, nodes blinking ──────
class VirusByte {
    static draw(ctx, s, bob, bug) {
        const body = '#a858f0';
        const throb = 1 + Math.sin(bug.wobble * 2.4) * 0.06;
        const r = s * 0.5 * throb;
        // data spikes with blinking node tips
        for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2 + bug.wobble * 0.3;
            const len = r * (1.35 + Math.sin(bug.wobble * 2 + i * 1.7) * 0.12);
            const tx = Math.cos(a) * len, ty = bob + Math.sin(a) * len;
            ctx.strokeStyle = '#6a34a8';
            ctx.lineWidth = s * 0.055;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(Math.cos(a) * r * 0.9, bob + Math.sin(a) * r * 0.9);
            ctx.lineTo(tx, ty);
            ctx.stroke();
            const on = Math.sin(bug.wobble * 4 + i * 2.3) > 0.3;
            ctx.fillStyle = on ? '#3ce0e0' : 'rgba(60,224,224,0.25)';
            ctx.beginPath(); ctx.arc(tx, ty, s * 0.05, 0, Math.PI * 2); ctx.fill();
            if (on) { A.glow(ctx, tx, ty, s * 0.12, '#3ce0e0', 0.35); }
        }
        // the throbbing core
        A.orb(ctx, 0, bob, r, r, 0, body, { specA: 0.35 });
        // hex-code freckles drifting on the shell
        ctx.fillStyle = 'rgba(40,16,72,0.5)';
        for (let i = 0; i < 5; i++) {
            const a = A.hash(i * 7.7) * Math.PI * 2 + bug.wobble * 0.2;
            const d = Math.sqrt(A.hash(i * 3.3)) * r * 0.7;
            ctx.beginPath();
            ctx.arc(Math.cos(a) * d, bob + Math.sin(a) * d, s * 0.03, 0, Math.PI * 2);
            ctx.fill();
        }
        // the crying face
        A.face(ctx, 0, bob - s * 0.06, s * 0.52, bug.wobble);
    }
}
