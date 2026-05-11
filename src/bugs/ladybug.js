// ── LADYBUG: Glossy dome, vivid spots, cute face ────────────────────
class Ladybug {
    static draw(ctx, s, bob, bug) {
        for(let side of [-1,1]) {
            for(let i=0;i<3;i++){
                const lx=(i-1)*s*0.35, ly=bob+s*0.3;
                const swing=Math.sin(bug.legPhase+i*1.2+(side>0?Math.PI:0))*s*0.4;
                ctx.strokeStyle='#1A0000'; ctx.lineWidth=1.3;
                ctx.beginPath(); ctx.moveTo(lx,ly); ctx.lineTo(lx+side*s*0.55,ly+s*0.4+swing); ctx.stroke();
            }
        }
        const shellG = ctx.createRadialGradient(-s*0.2,bob-s*0.3,0,0,bob,s*1.0);
        shellG.addColorStop(0,'#FF6060'); shellG.addColorStop(0.5,'#E00000'); shellG.addColorStop(1,'#880000');
        ctx.fillStyle=shellG; ctx.beginPath(); ctx.ellipse(0,bob,s*0.78,s*0.92,0,0,Math.PI*2); ctx.fill();
        ctx.strokeStyle='rgba(0,0,0,0.5)'; ctx.lineWidth=1.2;
        ctx.beginPath(); ctx.moveTo(0,bob-s*0.9); ctx.lineTo(0,bob+s*0.9); ctx.stroke();
        const spots=[{x:-0.28,y:-0.45,r:0.14},{x:0.3,y:-0.5,r:0.12},{x:-0.32,y:0.05,r:0.13},{x:0.34,y:0.0,r:0.15},{x:-0.18,y:0.52,r:0.1},{x:0.22,y:0.5,r:0.1}];
        for(let sp of spots){ ctx.fillStyle='#1A0000'; ctx.beginPath(); ctx.arc(sp.x*s,bob+sp.y*s,sp.r*s,0,Math.PI*2); ctx.fill(); }
        const gloss=ctx.createRadialGradient(-s*0.25,bob-s*0.4,0,-s*0.25,bob-s*0.4,s*0.6);
        gloss.addColorStop(0,'rgba(255,255,255,0.5)'); gloss.addColorStop(1,'rgba(255,255,255,0)');
        ctx.fillStyle=gloss; ctx.beginPath(); ctx.ellipse(0,bob,s*0.78,s*0.92,0,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#111'; ctx.beginPath(); ctx.arc(0,bob-s*1.02,s*0.32,0,Math.PI*2); ctx.fill();
        for(let ex of [-0.16,0.16]) {
            ctx.fillStyle='white'; ctx.beginPath(); ctx.arc(ex*s,bob-s*1.08,s*0.12,0,Math.PI*2); ctx.fill();
            ctx.fillStyle='#111';  ctx.beginPath(); ctx.arc(ex*s,bob-s*1.08,s*0.06,0,Math.PI*2); ctx.fill();
            ctx.fillStyle='white'; ctx.beginPath(); ctx.arc(ex*s-s*0.02,bob-s*1.11,s*0.025,0,Math.PI*2); ctx.fill();
        }
        ctx.strokeStyle='#333'; ctx.lineWidth=0.8;
        ctx.beginPath(); ctx.moveTo(-s*0.1,bob-s*1.3); ctx.lineTo(-s*0.35+Math.sin(bug.antennaPhase)*s*0.1,bob-s*1.7); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(s*0.1,bob-s*1.3); ctx.lineTo(s*0.35+Math.cos(bug.antennaPhase)*s*0.1,bob-s*1.7); ctx.stroke();
        ctx.fillStyle='#DD0000'; ctx.beginPath(); ctx.arc(-s*0.35+Math.sin(bug.antennaPhase)*s*0.1,bob-s*1.7,s*0.08,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#DD0000'; ctx.beginPath(); ctx.arc(s*0.35+Math.cos(bug.antennaPhase)*s*0.1,bob-s*1.7,s*0.08,0,Math.PI*2); ctx.fill();
    }
}