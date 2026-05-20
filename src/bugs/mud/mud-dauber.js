// ── MUD DAUBER: Slender wasp, thin waist, tube nest builder ──────
class MudDauber {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.15;
        // Translucent wings
        ctx.fillStyle = 'rgba(180,190,210,0.3)';
        ctx.beginPath(); ctx.ellipse(size*0.2, bob-size*0.35, size*0.55, size*0.18, -0.3, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(-size*0.2, bob-size*0.35, size*0.55, size*0.18, 0.3, 0, Math.PI*2); ctx.fill();
        // Thin waist - thread-like petiole
        ctx.fillStyle = '#1A1A2E';
        ctx.beginPath(); ctx.ellipse(0, bob-size*0.1, size*0.05, size*0.15, 0, 0, Math.PI*2); ctx.fill();
        // Thorax
        const thoraxGrad = ctx.createRadialGradient(0, bob-size*0.35, 0, 0, bob-size*0.3, size*0.2);
        thoraxGrad.addColorStop(0, '#4A4A6A'); thoraxGrad.addColorStop(1, '#1A1A2E');
        ctx.fillStyle = thoraxGrad;
        ctx.beginPath(); ctx.arc(0, bob-size*0.3, size*0.18, 0, Math.PI*2); ctx.fill();
        // Abdomen
        const abdGrad = ctx.createRadialGradient(0, bob+size*0.3, 0, 0, bob+size*0.35, size*0.3);
        abdGrad.addColorStop(0, '#3D3D5C'); abdGrad.addColorStop(1, '#1A1A2E');
        ctx.fillStyle = abdGrad;
        ctx.beginPath(); ctx.ellipse(0, bob+size*0.3, size*0.2, size*0.4, 0, 0, Math.PI*2); ctx.fill();
        // Head
        ctx.fillStyle = '#2A2A4A';
        ctx.beginPath(); ctx.arc(0, bob-size*0.55, size*0.15, 0, Math.PI*2); ctx.fill();
        // Eyes
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = '#FFD700';
            ctx.beginPath(); ctx.arc(side*size*0.08, bob-size*0.58, size*0.05, 0, Math.PI*2); ctx.fill();
        }
        // Antennae
        ctx.strokeStyle = '#2A2A4A'; ctx.lineWidth = 0.7;
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side*size*0.05, bob-size*0.68);
            ctx.lineTo(side*size*0.2, bob-size*0.95);
            ctx.stroke();
        }
        // Legs
        ctx.strokeStyle = '#2A2A4A'; ctx.lineWidth = size * 0.05;
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.moveTo(side*size*0.08, bob-size*0.15+i*size*0.2);
                ctx.lineTo(side*size*0.4, bob+size*0.1+i*size*0.15);
                ctx.stroke();
            }
        }
    }
}