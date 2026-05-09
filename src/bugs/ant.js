class Ant extends Bug {
    constructor(isWarning) {
        super(2, isWarning);
    }

    draw(ctx, s, bob) {
        ctx.fillStyle = this.bug.color;
        ctx.beginPath(); ctx.ellipse(-s * 0.4, bob, s * 0.25, s * 0.18, 0, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(0, bob, s * 0.2, s * 0.2, 0, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(s * 0.4, bob, s * 0.3, s * 0.22, 0, 0, Math.PI * 2); ctx.fill();
        for (let i = -1; i <= 1; i += 2) {
            for (let j = 0; j < 3; j++) {
                ctx.strokeStyle = '#111'; ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(-s * 0.25 + j * s * 0.3, i * s * 0.08 + bob);
                ctx.lineTo(-s * 0.25 + j * s * 0.3 + Math.sin(this.legPhase + j) * s * 0.2, i * s * 0.45 + bob);
                ctx.stroke();
            }
        }
        ctx.strokeStyle = '#111'; ctx.lineWidth = 0.6;
        ctx.beginPath(); ctx.moveTo(s * 0.6, bob);
        ctx.lineTo(s * 1 + Math.sin(this.antennaPhase) * s * 0.12, bob - s * 0.25); ctx.stroke();
    }
}