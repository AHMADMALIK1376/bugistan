class Ladybug extends Bug {
    constructor(isWarning) {
        super(1, isWarning);
    }

    draw(ctx, s, bob) {
        const { color } = this.bug;

        // --- 1. LEGS (Tucked slightly under) ---
        ctx.strokeStyle = '#111';
        ctx.lineWidth = s * 0.08;
        for (let side = -1; side <= 1; side += 2) {
            for (let i = -1; i <= 1; i++) {
                ctx.beginPath();
                ctx.moveTo(side * s * 0.3, bob + i * s * 0.3);
                ctx.lineTo(side * s * 0.6, bob + i * s * 0.4 + Math.sin(this.legPhase + i) * s * 0.1);
                ctx.stroke();
            }
        }

        // --- 2. THE BODY (Red Shell) ---
        ctx.fillStyle = color; // Usually vibrant red
        ctx.beginPath();
        ctx.arc(0, bob, s * 0.8, 0, Math.PI * 2);
        ctx.fill();

        // Elytra Split (The line down the middle)
        ctx.strokeStyle = 'rgba(0,0,0,0.3)';
        ctx.lineWidth = s * 0.04;
        ctx.beginPath();
        ctx.moveTo(0, bob - s * 0.8);
        ctx.lineTo(0, bob + s * 0.8);
        ctx.stroke();

        // --- 3. THE SPOTS (Symmetric) ---
        ctx.fillStyle = '#111';
        const spotCoords = [
            { x: 0.35, y: -0.35 }, { x: 0.5, y: 0 }, { x: 0.35, y: 0.4 },
            { x: -0.35, y: -0.35 }, { x: -0.5, y: 0 }, { x: -0.35, y: 0.4 }
        ];
        
        for (let spot of spotCoords) {
            ctx.beginPath();
            ctx.arc(spot.x * s, bob + spot.y * s, s * 0.12, 0, Math.PI * 2);
            ctx.fill();
        }

        // --- 4. THE HEAD & PRONOTUM ---
        // Black plate behind head
        ctx.fillStyle = '#111';
        ctx.beginPath();
        ctx.ellipse(0, bob - s * 0.6, s * 0.5, s * 0.35, 0, 0, Math.PI * 2);
        ctx.fill();

        // White "cheek" spots (characteristic of ladybugs)
        ctx.fillStyle = 'white';
        [-1, 1].forEach(side => {
            ctx.beginPath();
            ctx.ellipse(side * s * 0.25, bob - s * 0.7, s * 0.15, s * 0.1, side * 0.5, 0, Math.PI * 2);
            ctx.fill();
        });

        // Small head at the very front
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(0, bob - s * 0.8, s * 0.2, 0, Math.PI * 2);
        ctx.fill();

        // --- 5. FINISHING TOUCHES ---
        // Glossy Shine (Makes it look like a bead)
        const gradient = ctx.createRadialGradient(-s*0.3, bob-s*0.3, s*0.1, -s*0.3, bob-s*0.3, s*0.6);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, bob, s * 0.8, 0, Math.PI * 2);
        ctx.fill();

        // Tiny Antennae
        ctx.strokeStyle = '#000';
        ctx.lineWidth = s * 0.03;
        [-1, 1].forEach(side => {
            ctx.beginPath();
            ctx.moveTo(side * s * 0.1, bob - s * 0.9);
            ctx.quadraticCurveTo(side * s * 0.2, bob - s * 1.1, side * s * 0.3, bob - s * 1.0);
            ctx.stroke();
        });
    }
}