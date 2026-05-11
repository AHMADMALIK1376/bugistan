// ── CATERPILLAR: 7 plump segments, cute face, tiny feet ─────────────
class Caterpillar {
    static draw(ctx, s, bob, bug) {
        const segs=7;
        const segColors=['#44AA22','#55CC33','#33991A','#66DD44','#33991A','#55CC33','#44AA22'];
        const segGlow=['#88EE55','#AAFFAA','#66CC33','#99FF66','#66CC33','#AAFFAA','#88EE55'];
        for(let i=segs-1;i>=0;i--){
            const segX=(i-(segs-1)/2)*s*0.42;
            const segY=bob+Math.sin(bug.legPhase+i*0.9)*s*0.18;
            const r=s*(0.3+Math.sin(i*0.5)*0.07);
            ctx.fillStyle='rgba(0,0,0,0.15)';
            ctx.beginPath(); ctx.ellipse(segX+s*0.04,segY+r*0.7,r*0.9,r*0.22,0,0,Math.PI*2); ctx.fill();
            const sG=ctx.createRadialGradient(segX-r*0.3,segY-r*0.3,0,segX,segY,r);
            sG.addColorStop(0,segGlow[i]); sG.addColorStop(0.5,segColors[i]); sG.addColorStop(1,'#1A5500');
            ctx.fillStyle=sG; ctx.beginPath(); ctx.arc(segX,segY,r,0,Math.PI*2); ctx.fill();
            ctx.strokeStyle='rgba(0,60,0,0.35)'; ctx.lineWidth=0.8;
            ctx.beginPath(); ctx.arc(segX,segY,r,0,Math.PI*2); ctx.stroke();
            if(i<segs-1) {
                for(let side of [-1,1]){
                    ctx.fillStyle='#2A7A00';
                    ctx.beginPath(); ctx.ellipse(segX+side*r*0.75,segY+r*0.7,r*0.2,r*0.3,0,0,Math.PI*2); ctx.fill();
                }
            }
        }
        const hx=(0-(segs-1)/2)*s*0.42;
        const hy=bob+Math.sin(bug.legPhase)*s*0.18;
        const hG=ctx.createRadialGradient(hx-s*0.15,hy-s*0.15,0,hx,hy,s*0.38);
        hG.addColorStop(0,'#AAFFAA'); hG.addColorStop(0.5,'#55CC33'); hG.addColorStop(1,'#1A6600');
        ctx.fillStyle=hG; ctx.beginPath(); ctx.arc(hx,hy,s*0.38,0,Math.PI*2); ctx.fill();
        for(let ex of [-0.18,0.18]){
            ctx.fillStyle='white'; ctx.beginPath(); ctx.arc(hx+ex*s,hy-s*0.12,s*0.12,0,Math.PI*2); ctx.fill();
            ctx.fillStyle='#111';  ctx.beginPath(); ctx.arc(hx+ex*s,hy-s*0.12,s*0.07,0,Math.PI*2); ctx.fill();
            ctx.fillStyle='white'; ctx.beginPath(); ctx.arc(hx+ex*s-s*0.02,hy-s*0.15,s*0.025,0,Math.PI*2); ctx.fill();
        }
        ctx.strokeStyle='#1A6600'; ctx.lineWidth=0.9;
        ctx.beginPath(); ctx.arc(hx,hy+s*0.02,s*0.15,0.3,Math.PI-0.3); ctx.stroke();
        ctx.strokeStyle='#1A6600'; ctx.lineWidth=1;
        ctx.beginPath(); ctx.moveTo(hx-s*0.1,hy-s*0.34);
        ctx.quadraticCurveTo(hx-s*0.3,hy-s*0.7,hx-s*0.25+Math.sin(bug.antennaPhase)*s*0.12,hy-s*0.9); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(hx+s*0.1,hy-s*0.34);
        ctx.quadraticCurveTo(hx+s*0.3,hy-s*0.7,hx+s*0.25+Math.cos(bug.antennaPhase)*s*0.12,hy-s*0.9); ctx.stroke();
        ctx.fillStyle='#FFDD00'; ctx.beginPath(); ctx.arc(hx-s*0.25+Math.sin(bug.antennaPhase)*s*0.12,hy-s*0.9,s*0.09,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#FFDD00'; ctx.beginPath(); ctx.arc(hx+s*0.25+Math.cos(bug.antennaPhase)*s*0.12,hy-s*0.9,s*0.09,0,Math.PI*2); ctx.fill();
    }
}