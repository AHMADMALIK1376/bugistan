// ── SAND WASP: Yellow-orange striped, fast wings ──────
class SandWasp {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.15;
        // Fast translucent wings
        ctx.fillStyle = 'rgba(200,200,220,0.35)';
        ctx.beginPath(); ctx.ellipse(size*0.2, bob-size*0.4, size*0.5, size*0.2, -0.3, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(-size*0.2, bob-size*0.4, size*0.5, size*0.2, 0.3, 0, Math.PI*2); ctx.fill();
        // Striped body
        const segments = [
            { y: 0.4, r: 0.22, c1: '#FFC107', c2: '#FF8F00' },
            { y: 0.05, r: 0.2, c1: '#212121', c2: '#111' },
            { y: -0.35, r: 0.25, c1: '#FFC107', c2: '#FF8F00' },
        ];
        for (let seg of segments) {
            const segGrad = ctx.createRadialGradient(0, bob+seg.y*size, 0, 0, bob+seg.y*size, seg.r*size);
            segGrad.addColorStop(0, seg.c1); segGrad.addColorStop(1, seg.c2);
            ctx.fillStyle = segGrad;
            ctx.beginPath(); ctx.arc(0, bob+seg.y*size, seg.r*size, 0, Math.PI*2); ctx.fill();
        }
        // Head
        ctx.fillStyle = '#FFB300';
        ctx.beginPath(); ctx.arc(0, bob-size*0.7, size*0.22, 0, Math.PI*2); ctx.fill();
        // Eyes
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = '#FF4444';
            ctx.beginPath(); ctx.arc(side*size*0.12, bob-size*0.75, size*0.06, 0, Math.PI*2); ctx.fill();
        }
        // Antennae
        ctx.strokeStyle = '#333'; ctx.lineWidth = 0.7;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.06, bob-size*0.88);
            ctx.lineTo(side*size*0.2, bob-size*1.2);
            ctx.stroke();
        }
        // Legs
        ctx.strokeStyle = '#333'; ctx.lineWidth = size * 0.06;
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.moveTo(side*size*0.1, bob-size*0.1+i*size*0.2);
                ctx.lineTo(side*size*0.45, bob+size*0.2+i*size*0.1);
                ctx.stroke();
            }
        }
    }
}