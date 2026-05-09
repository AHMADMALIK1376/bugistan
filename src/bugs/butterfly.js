class Butterfly extends Bug {
    constructor(isWarning) {
        super(7, isWarning);
        this.wingFlap = Math.random() * Math.PI * 2;
    }

    update() {
        super.update();
        // A slightly variable flap speed feels more organic
        this.wingFlap += 0.12; 
    }

    draw(ctx, s, bob) {
        // Narrow the wing flap to feel like 3D depth
        const flap = Math.cos(this.wingFlap);
        const wingScale = Math.abs(flap) * 0.9 + 0.1;
        
        // --- 1. ANTENNAE ---
        ctx.strokeStyle = '#1a1a1a';
        ctx.lineWidth = s * 0.04;
        [-1, 1].forEach(side => {
            ctx.beginPath();
            ctx.moveTo(0, bob - s * 0.3);
            ctx.quadraticCurveTo(side * s * 0.2, bob - s * 0.6, side * s * 0.45, bob - s * 0.7);
            ctx.stroke();
            // Little knobs on the ends
            ctx.fillStyle = '#1a1a1a';
            ctx.beginPath();
            ctx.arc(side * s * 0.45, bob - s * 0.7, s * 0.05, 0, Math.PI * 2);
            ctx.fill();
        });

        // --- 2. WINGS ---
        const drawWingSet = (isTop) => {
            const color = isTop ? this.bug.color : this.bug.color2;
            ctx.fillStyle = color;
            ctx.strokeStyle = '#000';
            ctx.lineWidth = s * 0.05;

            [-1, 1].forEach(side => {
                ctx.save();
                ctx.translate(side * s * 0.05, bob);
                ctx.scale(side * wingScale, 1); // Flap horizontally for better "flying" look

                ctx.beginPath();
                if (isTop) {
                    // Complex shape for upper wing
                    ctx.moveTo(0, 0);
                    ctx.bezierCurveTo(s * 0.5, -s * 0.2, s * 1.2, -s * 1.0, s * 1.4, -s * 0.4);
                    ctx.bezierCurveTo(s * 1.5, s * 0.1, s * 0.8, s * 0.2, 0, 0);
                } else {
                    // Dainty lower wing
                    ctx.moveTo(0, 0);
                    ctx.bezierCurveTo(s * 0.4, s * 0.1, s * 1.1, s * 0.8, s * 0.6, s * 1.1);
                    ctx.bezierCurveTo(s * 0.2, s * 1.2, s * 0.1, s * 0.5, 0, 0);
                }
                
                ctx.globalAlpha = 0.9;
                ctx.fill();
                ctx.globalAlpha = 1;
                ctx.stroke();

                // --- 3. WING PATTERNS (Spots) ---
                ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
                if (isTop) {
                    ctx.beginPath();
                    ctx.arc(s * 0.9, -s * 0.4, s * 0.15, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.arc(s * 0.6, s * 0.7, s * 0.1, 0, Math.PI * 2);
                    ctx.fill();
                }
                
                ctx.restore();
            });
        };

        drawWingSet(false); // Draw back wings first
        drawWingSet(true);  // Draw front wings over them

        // --- 4. BODY (Segmented) ---
        ctx.fillStyle = '#1a0f00';
        // Thorax
        ctx.beginPath();
        ctx.ellipse(0, bob - s * 0.1, s * 0.12, s * 0.18, 0, 0, Math.PI * 2);
        ctx.fill();
        // Abdomen
        ctx.beginPath();
        ctx.ellipse(0, bob + s * 0.25, s * 0.08, s * 0.3, 0, 0, Math.PI * 2);
        ctx.fill();
        // Head
        ctx.beginPath();
        ctx.arc(0, bob - s * 0.3, s * 0.1, 0, Math.PI * 2);
        ctx.fill();
    }
}