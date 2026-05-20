// ── SAHARAN SILVER ANT: Fast, reflective silver body ──────
class SilverAnt {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.1;
        // Fast legs
        ctx.strokeStyle = '#888'; ctx.lineWidth = size * 0.07; ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const lx = [-0.4, 0, 0.4][i] * size;
                const swing = Math.sin(bug.legPhase + i * 2.1 + (side > 0 ? 0 : Math.PI)) * size * 0.4;
                ctx.beginPath();
                ctx.moveTo(lx, bob);
                ctx.lineTo(lx + side * size * 0.5 + swing * 0.1, bob + size * 0.4 + swing);
                ctx.stroke();
            }
        }
        // Segmented silver body
        const segments = [
            { x: -0.35, y: 0, r: 0.2 },
            { x: 0, y: -0.05, r: 0.22 },
            { x: 0.35, y: 0, r: 0.25 },
        ];
        for (let seg of segments) {
            const segGrad = ctx.createRadialGradient(seg.x*size, seg.y*size+bob, 0, seg.x*size, seg.y*size+bob, seg.r*size);
            segGrad.addColorStop(0, '#E8E8E8');
            segGrad.addColorStop(0.5, '#C0C0C0');
            segGrad.addColorStop(1, '#888888');
            ctx.fillStyle = segGrad;
            ctx.beginPath();
            ctx.arc(seg.x*size, seg.y*size+bob, seg.r*size, 0, Math.PI*2);
            ctx.fill();
        }
        // Head
        const headGrad = ctx.createRadialGradient(0, bob-size*0.55, 0, 0, bob-size*0.5, size*0.25);
        headGrad.addColorStop(0, '#D0D0D0'); headGrad.addColorStop(1, '#707070');
        ctx.fillStyle = headGrad;
        ctx.beginPath(); ctx.arc(0, bob-size*0.5, size*0.22, 0, Math.PI*2); ctx.fill();
        // Eyes
        ctx.fillStyle = '#FF4444';
        ctx.beginPath(); ctx.arc(-size*0.1, bob-size*0.55, size*0.05, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(size*0.1, bob-size*0.55, size*0.05, 0, Math.PI*2); ctx.fill();
        // Antennae
        ctx.strokeStyle = '#999'; ctx.lineWidth = 0.6;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.08, bob-size*0.68);
            ctx.lineTo(side*size*0.2, bob-size*0.95);
            ctx.lineTo(side*size*0.3+Math.sin(bug.antennaPhase+side)*size*0.1, bob-size*1.1);
            ctx.stroke();
        }
    }
}