// ── JEWEL BEETLE: Iridescent shell, gold trim, 6 articulated legs ──────
class JewelBeetle {
    static draw(ctx, s, bob, bug) {
        const legPairs = [[-0.45,-0.3],[0,0],[0.45,0.3]];
        for(let side of [-1,1]) {
            for(let i=0;i<3;i++){
                const lx=legPairs[i][0]*s, ly=legPairs[i][1]*s+bob;
                const swing = Math.sin(bug.legPhase + i*1.1 + (side>0?Math.PI:0))*s*0.5;
                const knee = { x: lx+side*s*0.7, y: ly+s*0.3+swing*0.4 };
                const foot = { x: lx+side*s*1.2, y: ly+s*0.65+swing };
                ctx.strokeStyle='#4A3000'; ctx.lineWidth=1.5;
                ctx.beginPath(); ctx.moveTo(lx,ly); ctx.lineTo(knee.x,knee.y); ctx.lineTo(foot.x,foot.y); ctx.stroke();
                ctx.fillStyle='#2A1800'; ctx.beginPath(); ctx.arc(foot.x,foot.y,s*0.06,0,Math.PI*2); ctx.fill();
            }
        }
        const elG = ctx.createLinearGradient(-s*0.8,bob-s*0.8,s*0.8,bob+s*0.8);
        elG.addColorStop(0,'#00C8A0'); elG.addColorStop(0.25,'#0090FF');
        elG.addColorStop(0.5,'#8800FF'); elG.addColorStop(0.75,'#00E050'); elG.addColorStop(1,'#00AAFF');
        ctx.fillStyle=elG; ctx.beginPath(); ctx.ellipse(0,bob,s*0.72,s*1.05,0,0,Math.PI*2); ctx.fill();
        ctx.strokeStyle='rgba(0,0,0,0.4)'; ctx.lineWidth=1;
        ctx.beginPath(); ctx.moveTo(0,bob-s*1.0); ctx.lineTo(0,bob+s*1.0); ctx.stroke();
        ctx.strokeStyle='rgba(255,200,0,0.55)'; ctx.lineWidth=1.5;
        ctx.beginPath(); ctx.ellipse(0,bob,s*0.72,s*1.05,0,0,Math.PI*2); ctx.stroke();
        const gloss = ctx.createRadialGradient(-s*0.2,bob-s*0.5,0,-s*0.2,bob-s*0.5,s*0.55);
        gloss.addColorStop(0,'rgba(255,255,255,0.45)'); gloss.addColorStop(1,'rgba(255,255,255,0)');
        ctx.fillStyle=gloss; ctx.beginPath(); ctx.ellipse(0,bob,s*0.72,s*1.05,0,0,Math.PI*2); ctx.fill();
        const thG = ctx.createRadialGradient(0,bob-s*1.1,0,0,bob-s*1.1,s*0.38);
        thG.addColorStop(0,'#005050'); thG.addColorStop(1,'#002020');
        ctx.fillStyle=thG; ctx.beginPath(); ctx.ellipse(0,bob-s*1.0,s*0.38,s*0.28,0,0,Math.PI*2); ctx.fill();
        const hdG = ctx.createRadialGradient(0,bob-s*1.45,0,0,bob-s*1.45,s*0.32);
        hdG.addColorStop(0,'#007060'); hdG.addColorStop(1,'#003030');
        ctx.fillStyle=hdG; ctx.beginPath(); ctx.arc(0,bob-s*1.42,s*0.3,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#FFEE00'; ctx.beginPath(); ctx.arc(-s*0.14,bob-s*1.48,s*0.1,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#FFEE00'; ctx.beginPath(); ctx.arc(s*0.14,bob-s*1.48,s*0.1,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#000'; ctx.beginPath(); ctx.arc(-s*0.14,bob-s*1.48,s*0.05,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#000'; ctx.beginPath(); ctx.arc(s*0.14,bob-s*1.48,s*0.05,0,Math.PI*2); ctx.fill();
        ctx.strokeStyle='#003030'; ctx.lineWidth=0.9;
        ctx.beginPath(); ctx.moveTo(-s*0.1,bob-s*1.68);
        ctx.quadraticCurveTo(-s*0.4+Math.sin(bug.antennaPhase)*s*0.2,bob-s*2.1,-s*0.5+Math.sin(bug.antennaPhase)*s*0.3,bob-s*2.35); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(s*0.1,bob-s*1.68);
        ctx.quadraticCurveTo(s*0.4+Math.cos(bug.antennaPhase)*s*0.2,bob-s*2.1,s*0.5+Math.cos(bug.antennaPhase)*s*0.3,bob-s*2.35); ctx.stroke();
        ctx.fillStyle='#FFEE00'; ctx.beginPath(); ctx.arc(-s*0.5+Math.sin(bug.antennaPhase)*s*0.3,bob-s*2.35,s*0.07,0,Math.PI*2); ctx.fill();
        ctx.fillStyle='#FFEE00'; ctx.beginPath(); ctx.arc(s*0.5+Math.cos(bug.antennaPhase)*s*0.3,bob-s*2.35,s*0.07,0,Math.PI*2); ctx.fill();
    }
}