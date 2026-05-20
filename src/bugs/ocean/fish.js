// ── FISH: Colorful tropical fish, flowing fins, scales ──────
class Fish {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.2;
        // Tail fin
        ctx.fillStyle = '#FF8C55';
        ctx.beginPath();
        ctx.moveTo(-size * 0.55, bob);
        ctx.lineTo(-size * 0.9, bob - size * 0.35);
        ctx.lineTo(-size * 0.9, bob + size * 0.35);
        ctx.closePath(); ctx.fill();
        // Tail pattern
        ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-size * 0.65, bob);
        ctx.lineTo(-size * 0.8, bob - size * 0.15);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-size * 0.65, bob);
        ctx.lineTo(-size * 0.8, bob + size * 0.15);
        ctx.stroke();
        // Body
        const bodyGrad = ctx.createLinearGradient(-size*0.5, bob, size*0.5, bob);
        bodyGrad.addColorStop(0, '#FF6B35'); bodyGrad.addColorStop(0.5, '#FF8C42'); bodyGrad.addColorStop(1, '#FFAA55');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.ellipse(0, bob, size * 0.55, size * 0.3, 0, 0, Math.PI * 2); ctx.fill();
        // Scales pattern
        ctx.strokeStyle = 'rgba(255,200,150,0.3)'; ctx.lineWidth = 0.8;
        for (let r = 0; r < 3; r++) {
            const ry = bob - size*0.15 + r*size*0.15;
            ctx.beginPath();
            ctx.arc(-size*0.1, ry, size*0.08, 0, Math.PI); ctx.stroke();
            ctx.beginPath();
            ctx.arc(size*0.15, ry, size*0.08, 0, Math.PI); ctx.stroke();
        }
        // Dorsal fin
        ctx.fillStyle = '#FFAA66';
        ctx.beginPath();
        ctx.moveTo(-size*0.1, bob-size*0.28);
        ctx.quadraticCurveTo(size*0.1, bob-size*0.55, size*0.2, bob-size*0.25);
        ctx.lineTo(-size*0.05, bob-size*0.25); ctx.closePath(); ctx.fill();
        // Pectoral fin
        ctx.fillStyle = 'rgba(255,140,80,0.6)';
        ctx.beginPath();
        ctx.moveTo(-size*0.1, bob+size*0.05);
        ctx.quadraticCurveTo(-size*0.2, bob+size*0.3, size*0.05, bob+size*0.15);
        ctx.lineTo(size*0.05, bob+size*0.05); ctx.closePath(); ctx.fill();
        // Eye
        ctx.fillStyle = 'white';
        ctx.beginPath(); ctx.arc(size * 0.3, bob - size * 0.05, size * 0.12, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#111';
        ctx.beginPath(); ctx.arc(size * 0.33, bob - size * 0.05, size * 0.06, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'white';
        ctx.beginPath(); ctx.arc(size * 0.31, bob - size * 0.08, size * 0.03, 0, Math.PI * 2); ctx.fill();
        // Mouth
        ctx.strokeStyle = '#CC4400'; ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(size*0.45, bob+size*0.05, size*0.08, 0.2, Math.PI-0.2); ctx.stroke();
        // Bubbles
        ctx.fillStyle = 'rgba(200,230,255,0.3)';
        ctx.beginPath(); ctx.arc(size*0.5, bob-size*0.3, size*0.06, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(size*0.55, bob-size*0.45, size*0.04, 0, Math.PI*2); ctx.fill();
    }
}