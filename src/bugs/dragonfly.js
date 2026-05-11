// ── DRAGONFLY: Long body, 4 iridescent wings, compound eyes ─────────
class Dragonfly {
    static draw(ctx, s, bob, bug) {
        const wFlap=Math.sin(bug.wingPhase)*s*0.12;
        for(let pair of [{y:-0.1,len:1.8,wide:0.55},{y:0.35,len:1.5,wide:0.45}]) {
            for(let side of [-1,1]){
                const wG=ctx.createLinearGradient(0,bob+pair.y*s,side*s*pair.len,bob+pair.y*s);
                wG.addColorStop(0,'rgba(180,240,255,0.0)'); wG.addColorStop(0.2,'rgba(140,220,255,0.7)');
                wG.addColorStop(0.6,'rgba(100,200,255,0.55)'); wG.addColorStop(1,'rgba(80,180,240,0.2)');
                ctx.fillStyle=wG; ctx.beginPath(); ctx.moveTo(0,bob+pair.y*s);
                ctx.bezierCurveTo(side*s*pair.len*0.3,bob+(pair.y-pair.wide)*s+wFlap*side,side*s*pair.len*0.9,bob+(pair.y-pair.wide*0.8)*s+wFlap*side,side*s*pair.len,bob+pair.y*s);
                ctx.bezierCurveTo(side*s*pair.len*0.9,bob+(pair.y+pair.wide*0.3)*s,side*s*pair.len*0.3,bob+(pair.y+pair.wide*0.2)*s,0,bob+pair.y*s); ctx.fill();
                ctx.strokeStyle='rgba(100,180,220,0.4)'; ctx.lineWidth=0.5;
                ctx.beginPath(); ctx.moveTo(0,bob+pair.y*s); ctx.lineTo(side*s*pair.len*0.6,bob+(pair.y-pair.wide*0.5)*s+wFlap*side*0.5); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(side*s*pair.len*0.3,bob+(pair.y-pair.wide*0.4)*s); ctx.lineTo(side*s*pair.len*0.7,bob+pair.y*s); ctx.stroke();
            }
        }
        const abdColors=['#0066AA','#0088CC','#00AAEE','#0099DD','#0077BB','#006699','#0055AA','#004488'];
        for(let i=7;i>=0;i--){
            const ty=bob+s*(0.35+i*0.32), tr=s*(0.22-i*0.018);
            const tilt=Math.sin(bug.wobble*0.5+i*0.4)*s*0.06;
            const aG=ctx.createRadialGradient(tilt-tr*0.3,ty-tr*0.3,0,tilt,ty,tr);
            aG.addColorStop(0,'#55DDFF'); aG.addColorStop(0.5,abdColors[i]||'#003366'); aG.addColorStop(1,'#001A44');
            ctx.fillStyle=aG; ctx.beginPath(); ctx.arc(tilt,ty,tr,0,Math.PI*2); ctx.fill();
            ctx.strokeStyle='rgba(0,80,150,0.4)'; ctx.lineWidth=0.5;
            ctx.beginPath(); ctx.arc(tilt,ty,tr,0,Math.PI*2); ctx.stroke();
        }
        const txG=ctx.createRadialGradient(-s*0.1,bob,0,0,bob,s*0.42);
        txG.addColorStop(0,'#44CCFF'); txG.addColorStop(0.5,'#0088CC'); txG.addColorStop(1,'#003366');
        ctx.fillStyle=txG; ctx.beginPath(); ctx.ellipse(0,bob,s*0.32,s*0.42,0,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#0077BB'; ctx.beginPath(); ctx.arc(0,bob-s*0.52,s*0.3,0,Math.PI*2); ctx.fill();
        for(let side of [-1,1]){
            const eG=ctx.createRadialGradient(side*s*0.22,bob-s*0.55,0,side*s*0.22,bob-s*0.55,s*0.22);
            eG.addColorStop(0,'#AAFFEE'); eG.addColorStop(0.4,'#00EECC'); eG.addColorStop(1,'#004433');
            ctx.fillStyle=eG; ctx.beginPath(); ctx.arc(side*s*0.22,bob-s*0.55,s*0.22,0,Math.PI*2); ctx.fill();
            ctx.strokeStyle='rgba(0,100,80,0.5)'; ctx.lineWidth=0.5;
            ctx.beginPath(); ctx.arc(side*s*0.22,bob-s*0.55,s*0.22,0,Math.PI*2); ctx.stroke();
            ctx.fillStyle='rgba(0,0,0,0.3)'; ctx.beginPath(); ctx.arc(side*s*0.22,bob-s*0.55,s*0.12,0,Math.PI*2); ctx.fill();
            ctx.fillStyle='rgba(180,255,240,0.6)'; ctx.beginPath(); ctx.arc(side*s*0.18,bob-s*0.62,s*0.06,0,Math.PI*2); ctx.fill();
        }
        ctx.fillStyle='rgba(100,220,255,0.25)'; ctx.beginPath(); ctx.arc(-s*0.06,bob-s*0.6,s*0.15,0,Math.PI*2); ctx.fill();
    }
}