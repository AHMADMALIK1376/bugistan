class Ant extends Bug {
    constructor(isWarning) {
        super(2, isWarning); // Assuming index 2 based on your registry
    }

    draw(ctx, s, bob) {
        const { color, color2 } = this.bug;

        // --- 1. LEGS (Spindly and fast) ---
        ctx.strokeStyle = color2;
        ctx.lineWidth = s * 0.08;
        ctx.lineCap = 'round';
        
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const movement = Math.sin(this.legPhase + i * 1.5) * s * 0.2;
                const legY = bob + (i - 1) * s * 0.3;
                
                ctx.beginPath();
                ctx.moveTo(0, legY);
                // Angular, busy legs
                ctx.lineTo(side * s * 0.5 + movement, legY - s * 0.2);
                ctx.lineTo(side * s * 0.7 + movement, legY + s * 0.4);
                ctx.stroke();
            }
        }

        // --- 2. BODY SEGMENTS (The Trio) ---
        ctx.fillStyle = color;

        // Gaster (The big back end)
        ctx.beginPath();
        ctx.ellipse(-s * 0.6, bob, s * 0.5, s * 0.35, 0, 0, Math.PI * 2);
        ctx.fill();

        // Thorax (The middle engine)
        ctx.beginPath();
        ctx.ellipse(0, bob, s * 0.3, s * 0.2, 0, 0, Math.PI * 2);
        ctx.fill();

        // Petiole (The tiny thin waist connecting middle and back)
        ctx.lineWidth = s * 0.05;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(-s * 0.2, bob);
        ctx.lineTo(-s * 0.4, bob);
        ctx.stroke();

        // --- 3. THE HEAD ---
        ctx.beginPath();
        ctx.ellipse(s * 0.5, bob, s * 0.35, s * 0.3, 0, 0, Math.PI * 2);
        ctx.fill();

        // --- 4. DETAILS (Antennae & Mandibles) ---
        ctx.strokeStyle = color;
        ctx.lineWidth = s * 0.04;

        // "Elbowed" Antennae
        const antMotion = Math.sin(this.antennaPhase) * 0.1;
        [-1, 1].forEach(side => {
            ctx.beginPath();
            ctx.moveTo(s * 0.6, bob + side * s * 0.1);
            ctx.lineTo(s * 0.8, bob + side * s * 0.4 + antMotion);
            ctx.lineTo(s * 1.1, bob + side * s * 0.5 + antMotion);
            ctx.stroke();
        });

        // Mandibles (Pincers)
        ctx.fillStyle = '#000';
        [-1, 1].forEach(side => {
            ctx.beginPath();
            ctx.moveTo(s * 0.8, bob + side * s * 0.05);
            ctx.quadraticCurveTo(s * 1.0, bob + side * s * 0.2, s * 0.9, bob + side * s * 0.3);
            ctx.fill();
        });

        // Simple shiny eye
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.beginPath();
        ctx.arc(s * 0.6, bob - s * 0.1, s * 0.05, 0, Math.PI * 2);
        ctx.fill();
    }
}