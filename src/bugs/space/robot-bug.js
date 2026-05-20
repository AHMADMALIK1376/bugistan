// ── ROBOT BUG: Metallic body, LED eyes, mechanical legs ──────
class RobotBug {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.2;
        // Mechanical legs
        ctx.strokeStyle = '#90A4AE'; ctx.lineWidth = size * 0.08; ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) {
            for (let i = -1; i <= 1; i++) {
                const legY = bob + i * (size * 0.3);
                const movement = Math.sin(bug.legPhase + i + (side > 0 ? 0 : Math.PI)) * (size * 0.12);
                // Upper leg
                ctx.beginPath();
                ctx.moveTo(side * size * 0.12, legY);
                ctx.lineTo(side * size * 0.4, legY - size * 0.05);
                ctx.stroke();
                // Lower leg
                ctx.strokeStyle = '#78909C';
                ctx.beginPath();
                ctx.moveTo(side * size * 0.4, legY - size * 0.05);
                ctx.lineTo(side * size * 0.65 + movement, legY + size * 0.2);
                ctx.stroke();
                // Joint
                ctx.fillStyle = '#FFD54F';
                ctx.beginPath();
                ctx.arc(side * size * 0.4, legY - size * 0.05, size * 0.04, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#90A4AE';
            }
        }
        // Metallic body
        const bodyGrad = ctx.createRadialGradient(-size * 0.15, bob - size * 0.1, size * 0.05, 0, bob, size * 0.65);
        bodyGrad.addColorStop(0, '#CFD8DC');
        bodyGrad.addColorStop(0.5, '#90A4AE');
        bodyGrad.addColorStop(1, '#546E7A');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.ellipse(0, bob, size * 0.5, size * 0.6, 0, 0, Math.PI * 2); ctx.fill();
        // Panel lines
        ctx.strokeStyle = 'rgba(0,0,0,0.3)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, bob - size * 0.55); ctx.lineTo(0, bob + size * 0.55); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(-size * 0.35, bob - size * 0.1); ctx.lineTo(size * 0.35, bob - size * 0.1); ctx.stroke();
        // Rivets
        ctx.fillStyle = '#455A64';
        const rivets = [{x:-0.2,y:-0.3},{x:0.2,y:-0.3},{x:-0.2,y:0.1},{x:0.2,y:0.1},{x:0,y:0.4}];
        for (let r of rivets) {
            ctx.beginPath();
            ctx.arc(r.x * size, bob + r.y * size, size * 0.04, 0, Math.PI * 2);
            ctx.fill();
        }
        // Head
        const headGrad = ctx.createRadialGradient(0, bob - size * 0.7, size * 0.05, 0, bob - size * 0.65, size * 0.3);
        headGrad.addColorStop(0, '#B0BEC5'); headGrad.addColorStop(1, '#607D8B');
        ctx.fillStyle = headGrad;
        ctx.beginPath(); ctx.arc(0, bob - size * 0.65, size * 0.28, 0, Math.PI * 2); ctx.fill();
        // LED eyes
        for (let side = -1; side <= 1; side += 2) {
            const ledGlow = ctx.createRadialGradient(side * size * 0.12, bob - size * 0.72, 0, side * size * 0.12, bob - size * 0.72, size * 0.12);
            ledGlow.addColorStop(0, 'rgba(0, 255, 255, 0.8)');
            ledGlow.addColorStop(0.5, 'rgba(0, 200, 255, 0.4)');
            ledGlow.addColorStop(1, 'rgba(0, 100, 255, 0)');
            ctx.fillStyle = ledGlow;
            ctx.beginPath(); ctx.arc(side * size * 0.12, bob - size * 0.72, size * 0.12, 0, Math.PI * 2); ctx.fill();
            // LED center
            ctx.fillStyle = '#00FFFF';
            ctx.beginPath(); ctx.arc(side * size * 0.12, bob - size * 0.72, size * 0.06, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = 'white';
            ctx.beginPath(); ctx.arc(side * size * 0.1, bob - size * 0.75, size * 0.03, 0, Math.PI * 2); ctx.fill();
        }
        // Antenna
        ctx.strokeStyle = '#78909C'; ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, bob - size * 0.9);
        ctx.lineTo(size * 0.15, bob - size * 1.2);
        ctx.stroke();
        ctx.fillStyle = '#FF0000';
        ctx.beginPath(); ctx.arc(size * 0.15, bob - size * 1.2, size * 0.05, 0, Math.PI * 2); ctx.fill();
        // Blinking LED
        if (Math.sin(bug.wobble * 5) > 0) {
            ctx.fillStyle = '#FF0000';
        } else {
            ctx.fillStyle = '#660000';
        }
        ctx.beginPath(); ctx.arc(size * 0.15, bob - size * 1.2, size * 0.05, 0, Math.PI * 2); ctx.fill();
    }
}