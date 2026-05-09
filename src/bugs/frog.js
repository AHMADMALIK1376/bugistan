class Frog extends Bug {
    constructor(isWarning) {
        super(6, isWarning);
    }

    draw(ctx, s, bob) {
        const bodyColor = '#4CAF50';
        const bellyColor = '#C5E1A5';
        const darkGreen = '#2D6A1E';

        // --- 1. BACK LEGS (The "Jumpers") ---
        ctx.strokeStyle = bodyColor;
        ctx.lineWidth = s * 0.15;
        ctx.lineCap = 'round';
        
        [-1, 1].forEach(side => {
            ctx.beginPath();
            ctx.moveTo(side * s * 0.4, bob + s * 0.2);
            // Strong, folded leg shape
            ctx.bezierCurveTo(
                side * s * 1.2, bob + s * 0.4, 
                side * s * 0.9, bob + s * 0.9, 
                side * s * 0.5, bob + s * 0.7
            );
            ctx.stroke();
        });

        // --- 2. THE BODY (Pearly shape) ---
        // Main back
        ctx.fillStyle = bodyColor;
        ctx.beginPath();
        ctx.ellipse(0, bob + s * 0.2, s * 0.9, s * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();

        // Belly (Light colored underside)
        ctx.fillStyle = bellyColor;
        ctx.beginPath();
        ctx.ellipse(0, bob + s * 0.4, s * 0.6, s * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();

        // --- 3. FRONT ARMS ---
        ctx.strokeStyle = bodyColor;
        ctx.lineWidth = s * 0.1;
        [-1, 1].forEach(side => {
            ctx.beginPath();
            ctx.moveTo(side * s * 0.4, bob + s * 0.4);
            ctx.lineTo(side * s * 0.5, bob + s * 0.8);
            ctx.stroke();
        });

        // --- 4. THE HEAD ---
        ctx.fillStyle = bodyColor;
        ctx.beginPath();
        // Wider head that merges into the body
        ctx.ellipse(0, bob - s * 0.2, s * 0.7, s * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();

        // --- 5. BULGING EYES ---
        [-1, 1].forEach(side => {
            const eyeX = side * s * 0.4;
            const eyeY = bob - s * 0.5;

            // Eye sockets (The green bumps)
            ctx.fillStyle = bodyColor;
            ctx.beginPath();
            ctx.arc(eyeX, eyeY, s * 0.25, 0, Math.PI * 2);
            ctx.fill();

            // Whites
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(eyeX, eyeY, s * 0.2, 0, Math.PI * 2);
            ctx.fill();

            // Pupils (Horizontal "frog" pupils look cool)
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.ellipse(eyeX, eyeY, s * 0.12, s * 0.07, 0, 0, Math.PI * 2);
            ctx.fill();
        });

        // --- 6. MOUTH & SPOTS ---
        // Wide grin
        ctx.strokeStyle = darkGreen;
        ctx.lineWidth = s * 0.05;
        ctx.beginPath();
        ctx.arc(0, bob - s * 0.1, s * 0.4, 0.2, Math.PI - 0.2);
        ctx.stroke();

        // Decorative spots
        ctx.fillStyle = darkGreen;
        ctx.globalAlpha = 0.3;
        [[-0.3, 0.1], [0.3, 0.1], [0, 0.3]].forEach(([px, py]) => {
            ctx.beginPath();
            ctx.arc(px * s, bob + py * s, s * 0.1, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1.0;
    }
}