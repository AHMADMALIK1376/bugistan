// ── DUNE CRICKET: Sandy colored, large back legs ──────
class DuneCricket {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.2;
        // Large jumping back legs
        for (let side = -1; side <= 1; side += 2) {
            ctx.strokeStyle = '#8B7355'; ctx.lineWidth = size * 0.14;
            ctx.beginPath();
            ctx.moveTo(side * size * 0.1, bob + size * 0.15);
            ctx.quadraticCurveTo(side * size * 0.7, bob + size * 0.9, side * size * 0.5, bob + size * 0.5);
            ctx.stroke();
        }
        // Body
        ctx.fillStyle = '#C4A86C';
        ctx.beginPath(); ctx.ellipse(0, bob, size*0.45, size*0.6, 0, 0, Math.PI*2); ctx.fill();
        // Sandy texture
        ctx.fillStyle = 'rgba(160,130,90,0.4)';
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc((Math.sin(i*2.5))*size*0.25, bob+(Math.cos(i*2.5))*size*0.3, size*0.04, 0, Math.PI*2);
            ctx.fill();
        }
        // Head
        ctx.fillStyle = '#A89070';
        ctx.beginPath(); ctx.arc(0, bob-size*0.65, size*0.3, 0, Math.PI*2); ctx.fill();
        // Eyes
        ctx.fillStyle = '#111';
        ctx.beginPath(); ctx.arc(-size*0.15, bob-size*0.72, size*0.06, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(size*0.15, bob-size*0.72, size*0.06, 0, Math.PI*2); ctx.fill();
        // Long antennae
        ctx.strokeStyle = '#8B7355'; ctx.lineWidth = 0.8;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.08, bob-size*0.9);
            ctx.quadraticCurveTo(side*size*0.3, bob-size*1.4, side*size*0.5+Math.sin(bug.antennaPhase)*size*0.2, bob-size*1.6);
            ctx.stroke();
        }
    }
}