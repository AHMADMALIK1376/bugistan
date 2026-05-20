// ── TARANTULA: Furry look, 8 thick jointed legs, hourglass markings ─
class Tarantula {
    static draw(ctx, s, bob, bug) {
        const legAngles = [-2.2,-1.4,-0.6,0.2,Math.PI+2.2,Math.PI+1.4,Math.PI+0.6,Math.PI-0.2];
        for(let i=0;i<8;i++){
            const a=legAngles[i];
            const swing=Math.sin(bug.legPhase+i*0.8)*s*0.4;
            const kx=Math.cos(a)*s*0.7, ky=Math.sin(a)*s*0.55+bob;
            const fx=Math.cos(a)*s*1.5+swing*Math.sin(a), fy=Math.sin(a)*s*1.4+bob+swing*Math.cos(a);
            ctx.strokeStyle='#3A2010'; ctx.lineWidth=s*0.18; ctx.lineCap='round';
            ctx.beginPath(); ctx.moveTo(Math.cos(a)*s*0.5,Math.sin(a)*s*0.5+bob); ctx.lineTo(kx,ky); ctx.stroke();
            ctx.strokeStyle='#2A1808'; ctx.lineWidth=s*0.13;
            ctx.beginPath(); ctx.moveTo(kx,ky); ctx.lineTo(fx,fy); ctx.stroke();
            ctx.strokeStyle='rgba(80,50,20,0.5)'; ctx.lineWidth=0.5;
            for(let h=0;h<3;h++){
                const hf=h/3, hx=kx+(fx-kx)*hf, hy=ky+(fy-ky)*hf, perp=s*0.12;
                ctx.beginPath(); ctx.moveTo(hx,hy); ctx.lineTo(hx+Math.sin(a)*perp,hy-Math.cos(a)*perp); ctx.stroke();
            }
        }
        ctx.lineCap='butt';
        const abdG=ctx.createRadialGradient(-s*0.15,bob+s*0.5,0,0,bob+s*0.6,s*0.8);
        abdG.addColorStop(0,'#5A3820'); abdG.addColorStop(0.6,'#3A2010'); abdG.addColorStop(1,'#1E0E06');
        ctx.fillStyle=abdG; ctx.beginPath(); ctx.ellipse(0,bob+s*0.55,s*0.62,s*0.75,0,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='rgba(200,80,0,0.45)';
        ctx.beginPath(); ctx.ellipse(0,bob+s*0.3,s*0.2,s*0.22,0,0,Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(0,bob+s*0.75,s*0.18,s*0.2,0,0,Math.PI*2); ctx.fill();
        const cepG=ctx.createRadialGradient(-s*0.1,bob-s*0.1,0,0,bob,s*0.6);
        cepG.addColorStop(0,'#6A4828'); cepG.addColorStop(1,'#2A1408');
        ctx.fillStyle=cepG; ctx.beginPath(); ctx.ellipse(0,bob,s*0.52,s*0.62,0,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='rgba(100,60,20,0.2)';
        for(let i=0;i<6;i++){ctx.beginPath();ctx.arc((Math.random()-0.5)*s*0.8,bob+(Math.random()-0.5)*s*0.9,s*0.08,0,Math.PI*2);ctx.fill();}
        const eyePos=[{x:-0.22,y:-0.72},{x:0.22,y:-0.72},{x:-0.1,y:-0.6},{x:0.1,y:-0.6},{x:-0.32,y:-0.58},{x:0.32,y:-0.58},{x:-0.18,y:-0.48},{x:0.18,y:-0.48}];
        for(let e of eyePos){
            ctx.fillStyle='rgba(200,230,255,0.9)'; ctx.beginPath(); ctx.arc(e.x*s,bob+e.y*s,s*0.07,0,Math.PI*2); ctx.fill();
            ctx.fillStyle='#000'; ctx.beginPath(); ctx.arc(e.x*s,bob+e.y*s,s*0.04,0,Math.PI*2); ctx.fill();
            ctx.fillStyle='rgba(255,255,255,0.7)'; ctx.beginPath(); ctx.arc(e.x*s-s*0.015,bob+e.y*s-s*0.015,s*0.018,0,Math.PI*2); ctx.fill();
        }
        ctx.fillStyle='#1A0A00';
        ctx.beginPath(); ctx.ellipse(-s*0.14,bob-s*0.88,s*0.08,s*0.18,0.2,0,Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(s*0.14,bob-s*0.88,s*0.08,s*0.18,-0.2,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='rgba(0,200,100,0.7)';
        ctx.beginPath(); ctx.arc(-s*0.14,bob-s*1.02,s*0.06,0,Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(s*0.14,bob-s*1.02,s*0.06,0,Math.PI*2); ctx.fill();
    }
}