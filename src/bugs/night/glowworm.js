// ── GLOWWORM: Segmented glowing body, slow crawling ──────
class Glowworm {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.0;
        // Glow aura
        const pulse = Math.sin(bug.wobble * 2) * 0.3 + 0.7;
        const glowGrad = ctx.createRadialGradient(0, bob+size*0.2, 0, 0, bob+size*0.2, size*0.4);
        glowGrad.addColorStop(0, `rgba(100, 255, 100, ${pulse * 0.5})`);
        glowGrad.addColorStop(1, 'rgba(0, 255, 0, 0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath(); ctx.arc(0, bob+size*0.2, size*0.4, 0, Math.PI*2); ctx.fill();
        // Segmented body
        const segs = 5;
        for (let i = segs-1; i >= 0; i--) {
            const segX = (i-(segs-1)/2)*size*0.3;
            const segY = bob+Math.sin(bug.legPhase+i)*size*0.1;
            const r = size*0.2;
            const segG = ctx.createRadialGradient(segX, segY-r*0.2, 0, segX, segY, r);
            segG.addColorStop(0, i >= 3 ? `rgba(150,255,150,${pulse})` : '#2E7D32');
            segG.addColorStop(0.5, '#1B5E20'); segG.addColorStop(1, '#0A3300');
            ctx.fillStyle = segG;
            ctx.beginPath(); ctx.arc(segX, segY, r, 0, Math.PI*2); ctx.fill();
            // Segment glow
            if (i >= 3) {
                ctx.fillStyle = `rgba(100,255,100,${pulse*0.4})`;
                ctx.beginPath(); ctx.arc(segX, segY, r*0.6, 0, Math.PI*2); ctx.fill();
            }
        }
        // Head
        ctx.fillStyle = '#1A3300';
        ctx.beginPath(); ctx.arc((0-(segs-1)/2)*size*0.3, bob, size*0.18, 0, Math.PI*2); ctx.fill();
        // Tiny eyes
        ctx.fillStyle = '#FFD700';
        ctx.beginPath(); ctx.arc((0-(segs-1)/2)*size*0.3-size*0.06, bob-size*0.05, size*0.04, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc((0-(segs-1)/2)*size*0.3+size*0.06, bob-size*0.05, size*0.04, 0, Math.PI*2); ctx.fill();
    }
}