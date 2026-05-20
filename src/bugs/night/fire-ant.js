// ── FIRE ANT: Segmented body, vivid orange-red, fast legs ───────────
class FireAnt {
    static draw(ctx, s, bob, bug) {
        for(let side of [-1,1]) {
            for(let i=0;i<3;i++){
                const lx=[-0.5,0,0.45][i]*s;
                const swing=Math.sin(bug.legPhase+i*2.1+(side>0?0:Math.PI))*s*0.55;
                ctx.strokeStyle='#7A2000'; ctx.lineWidth=1.1;
                ctx.beginPath(); ctx.moveTo(lx,bob); ctx.lineTo(lx+side*s*0.7+swing*0.1,bob+s*0.55+swing); ctx.stroke();
            }
        }
        const gasG=ctx.createRadialGradient(0,bob+s*0.65,0,0,bob+s*0.65,s*0.55);
        gasG.addColorStop(0,'#FF5500'); gasG.addColorStop(0.5,'#CC2200'); gasG.addColorStop(1,'#880000');
        ctx.fillStyle=gasG; ctx.beginPath(); ctx.ellipse(0,bob+s*0.6,s*0.42,s*0.58,0,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='rgba(255,200,150,0.3)'; ctx.beginPath(); ctx.ellipse(-s*0.1,bob+s*0.35,s*0.18,s*0.22,0,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#AA2000'; ctx.beginPath(); ctx.arc(0,bob,s*0.14,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#BB2500'; ctx.beginPath(); ctx.arc(0,bob-s*0.22,s*0.13,0,Math.PI*2); ctx.fill();
        const thG=ctx.createRadialGradient(0,bob-s*0.55,0,0,bob-s*0.55,s*0.32);
        thG.addColorStop(0,'#FF4400'); thG.addColorStop(1,'#992200');
        ctx.fillStyle=thG; ctx.beginPath(); ctx.ellipse(0,bob-s*0.52,s*0.3,s*0.35,0,0,Math.PI*2); ctx.fill();
        const hG=ctx.createRadialGradient(0,bob-s*1.0,0,0,bob-s*1.0,s*0.32);
        hG.addColorStop(0,'#FF5500'); hG.addColorStop(1,'#881100');
        ctx.fillStyle=hG; ctx.beginPath(); ctx.arc(0,bob-s*1.0,s*0.3,0,Math.PI*2); ctx.fill();
        ctx.strokeStyle='#550000'; ctx.lineWidth=1.2;
        ctx.beginPath(); ctx.moveTo(-s*0.18,bob-s*1.25); ctx.lineTo(-s*0.38+Math.sin(bug.legPhase)*s*0.08,bob-s*1.42); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(s*0.18,bob-s*1.25); ctx.lineTo(s*0.38+Math.sin(bug.legPhase+Math.PI)*s*0.08,bob-s*1.42); ctx.stroke();
        ctx.fillStyle='#FFCC00'; ctx.beginPath(); ctx.arc(-s*0.13,bob-s*1.05,s*0.09,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#FFCC00'; ctx.beginPath(); ctx.arc(s*0.13,bob-s*1.05,s*0.09,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#1A0000'; ctx.beginPath(); ctx.arc(-s*0.13,bob-s*1.05,s*0.05,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#1A0000'; ctx.beginPath(); ctx.arc(s*0.13,bob-s*1.05,s*0.05,0,Math.PI*2); ctx.fill();
        ctx.strokeStyle='#550000'; ctx.lineWidth=0.9;
        for(let side of[-1,1]){
            ctx.beginPath(); ctx.moveTo(side*s*0.1,bob-s*1.28);
            ctx.lineTo(side*s*0.3,bob-s*1.6);
            ctx.lineTo(side*(s*0.3+Math.sin(bug.antennaPhase+side)*s*0.25),bob-s*1.9); ctx.stroke();
        }
    }
}