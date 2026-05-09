class Cockroach extends Bug {
    constructor(isWarning) {
        super(5, isWarning);
    }

    draw(ctx, s, bob) {
        const { color, color2 } = this.bug;

        // --- 1. SPINY LEGS (Drawn underneath) ---
        ctx.strokeStyle = '#2d1a00';
        ctx.lineWidth = s * 0.08;
        ctx.lineCap = 'round';
        
        for (let side = -1; side <= 1; side += 2) {
            for (let j = 0; j < 3; j++) {
                const segmentX = -s * 0.6 + j * s * 0.5;
                const movement = Math.sin(this.legPhase + j) * s * 0.3;
                
                ctx.beginPath();
                ctx.moveTo(segmentX, bob);
                // "Kicked back" legs for speed
                ctx.quadraticCurveTo(
                    segmentX - s * 0.1, bob + (side * s * 0.4),
                    segmentX - s * 0.3 + (movement * 0.5), bob + (side * s * 0.7)
                );
                ctx.stroke();
            }
        }

        // --- 2. THE BODY (Flattened Elytra) ---
        // Main dark underbody
        ctx.fillStyle = '#1a0f00';
        ctx.beginPath();
        ctx.ellipse(0, bob, s * 1.3, s * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();

        // The Wings/Shell (layered and oily)
        ctx.fillStyle = color; // Usually a reddish-brown
        ctx.beginPath();
        ctx.ellipse(-s * 0.1, bob, s * 1.2, s * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();

        // Oily Highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.beginPath();
        ctx.ellipse(-s * 0.2, bob - s * 0.15, s * 0.8, s * 0.1, 0, 0, Math.PI * 2);
        ctx.fill();

        // --- 3. THE PRONOTUM (The 'Shield') ---
        // This is the classic cockroach "hood" that partially covers the head
        ctx.fillStyle = color2; 
        ctx.beginPath();
        ctx.ellipse(s * 0.8, bob, s * 0.4, s * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Dark center spot on the shield (common in many species)
        ctx.fillStyle = '#000';
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(s * 0.85, bob, s * 0.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // --- 4. THE HEAD (Peeking out) ---
        ctx.fillStyle = '#1a0f00';
        ctx.beginPath();
        ctx.ellipse(s * 1.1, bob, s * 0.2, s * 0.15, 0, 0, Math.PI * 2);
        ctx.fill();

        // --- 5. ULTRA-LONG ANTENNAE ---
        ctx.strokeStyle = '#2d1a00';
        ctx.lineWidth = s * 0.04;
        const antMotion = Math.sin(this.antennaPhase);
        
        [-1, 1].forEach(side => {
            ctx.beginPath();
            ctx.moveTo(s * 1.2, bob + (side * s * 0.05));
            // These should be very long and wispy
            ctx.bezierCurveTo(
                s * 1.5, bob + (side * s * 0.2),
                s * 1.8, bob + (side * s * (0.8 + antMotion * 0.5)),
                s * 2.4, bob + (side * s * (0.4 + antMotion))
            );
            ctx.stroke();
        });

        // --- 6. CERCI (The little spikes on the butt) ---
        ctx.beginPath();
        ctx.moveTo(-s * 1.2, bob - s * 0.1);
        ctx.lineTo(-s * 1.5, bob - s * 0.25);
        ctx.moveTo(-s * 1.2, bob + s * 0.1);
        ctx.lineTo(-s * 1.5, bob + s * 0.25);
        ctx.stroke();
    }
}