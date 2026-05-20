// ── ARMYWORM: Brown striped caterpillar, marching style ──────
class Armyworm {
    static draw(ctx, s, bob, bug) {
        const segs = 6;
        const colors = ['#8D6E63','#6D4C41','#8D6E63','#6D4C41','#8D6E63','#6D4C41'];
        for (let i = segs-1; i >= 0; i--) {
            const segX = (i-(segs-1)/2)*s*0.4;
            const segY = bob+Math.sin(bug.legPhase+i*0.8)*s*0.15;
            const r = s*0.28;
            const segG = ctx.createRadialGradient(segX-r*0.3, segY-r*0.3, 0, segX, segY, r);
            segG.addColorStop(0, '#BCAAA4'); segG.addColorStop(0.5, colors[i]); segG.addColorStop(1, '#3E2723');
            ctx.fillStyle = segG;
            ctx.beginPath(); ctx.arc(segX, segY, r, 0, Math.PI*2); ctx.fill();
            // Stripe
            ctx.strokeStyle = 'rgba(255,200,100,0.3)'; ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(segX-r*0.5, segY-r*0.5); ctx.lineTo(segX+r*0.5, segY+r*0.5); ctx.stroke();
            if (i < segs-1) {
                for (let side of [-1,1]) {
                    ctx.fillStyle = '#5D4037';
                    ctx.beginPath(); ctx.ellipse(segX+side*r*0.7, segY+r*0.6, r*0.15, r*0.25, 0, 0, Math.PI*2); ctx.fill();
                }
            }
        }
        // Head
        const hx = (0-(segs-1)/2)*s*0.4;
        const hy = bob+Math.sin(bug.legPhase)*s*0.15;
        ctx.fillStyle = '#4E342E';
        ctx.beginPath(); ctx.arc(hx, hy, s*0.32, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#FFD54F';
        ctx.beginPath(); ctx.arc(hx+s*0.12, hy-s*0.08, s*0.06, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#111';
        ctx.beginPath(); ctx.arc(hx+s*0.13, hy-s*0.08, s*0.03, 0, Math.PI*2); ctx.fill();
    }
}