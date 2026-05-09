class Beetle extends Bug {
    constructor(isWarning) {
        super(0, isWarning);
    }

    draw(ctx, s, bob) {
        const { color, color2 } = this.bug;

        // --- 1. LEGS (Drawn first so they are behind the body) ---
        ctx.strokeStyle = '#222';
        ctx.lineWidth = s * 0.1;
        ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) { // Left and Right
            for (let row = -1; row <= 1; row++) {   // Three pairs
                const legX = side * s * 0.4;
                const legY = row * s * 0.4 + bob;
                const movement = Math.sin(this.legPhase + row) * s * 0.2;

                ctx.beginPath();
                ctx.moveTo(side * s * 0.2, legY); // Joint at body
                // Bend the legs for a more organic feel
                ctx.quadraticCurveTo(
                    side * s * 0.8, legY - s * 0.2, 
                    side * s * 0.7 + (side * movement), legY + s * 0.3
                );
                ctx.stroke();
            }
        }

        // --- 2. THE BODY (The "Elytra" or Wing Covers) ---
        // Shadow/Underbody
        ctx.fillStyle = '#111';
        ctx.beginPath();
        ctx.ellipse(0, bob, s * 1.15, s * 0.85, 0, 0, Math.PI * 2);
        ctx.fill();

        // Main Shell halves
        ctx.fillStyle = color;
        // Left Wing
        ctx.beginPath();
        ctx.ellipse(-s * 0.05, bob, s * 1.0, s * 0.75, 0.1, Math.PI * 0.5, Math.PI * 1.5);
        ctx.fill();
        // Right Wing
        ctx.beginPath();
        ctx.ellipse(s * 0.05, bob, s * 1.0, s * 0.75, -0.1, -Math.PI * 0.5, Math.PI * 0.5);
        ctx.fill();

        // Glossy Highlight on the shell
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.beginPath();
        ctx.ellipse(-s * 0.3, bob - s * 0.3, s * 0.4, s * 0.2, Math.PI * 0.2, 0, Math.PI * 2);
        ctx.fill();

        // --- 3. THE HEAD ---
        ctx.fillStyle = color2;
        ctx.beginPath();
        // Positioned at the front (assuming front is positive X or Y based on your original)
        // Adjusting to s * 0.8 to sit snugly against the body
        ctx.ellipse(s * 0.8, bob, s * 0.5, s * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();

        // --- 4. ANTENNAE ---
        ctx.strokeStyle = '#222';
        ctx.lineWidth = s * 0.05;
        const antMotion = Math.sin(this.antennaPhase) * 0.2;
        
        [-1, 1].forEach(side => {
            ctx.beginPath();
            ctx.moveTo(s * 1.1, bob + (side * s * 0.2));
            ctx.bezierCurveTo(
                s * 1.4, bob + (side * s * 0.5),
                s * 1.5, bob + (side * s * (0.2 + antMotion)),
                s * 1.8, bob + (side * s * (0.4 + antMotion))
            );
            ctx.stroke();
        });

        // --- 5. EYES (Symmetric) ---
        ctx.fillStyle = 'white';
        [-1, 1].forEach(side => {
            const eyeY = bob + (side * s * 0.2);
            ctx.beginPath();
            ctx.arc(s * 1.0, eyeY, s * 0.12, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.arc(s * 1.05, eyeY, s * 0.06, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = 'white'; // pupil reset for next loop
        });
    }
}