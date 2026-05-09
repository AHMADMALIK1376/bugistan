class Spider extends Bug {
    constructor(isWarning) {
        super(3, isWarning);
    }

    draw(ctx, s, bob) {
        const { color, color2 } = this.bug;

        // --- 1. THE LEGS (High-jointed) ---
        ctx.strokeStyle = '#111';
        ctx.lineWidth = s * 0.08;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 0; i < 8; i++) {
            // Group 4 legs on the left, 4 on the right
            const side = i < 4 ? -1 : 1;
            const legIndex = i % 4; // 0 to 3
            
            // Angle the legs: some forward, some backward
            const angleBase = (legIndex - 1.5) * 0.6;
            const movement = Math.sin(this.legPhase + i) * s * 0.15;
            
            ctx.beginPath();
            // All legs start from the front body segment (Cephalothorax)
            ctx.moveTo(side * s * 0.1, bob - s * 0.2); 
            
            // The "Knee" (Spiders have high, arched joints)
            const kneeX = side * s * (0.6 + legIndex * 0.1);
            const kneeY = bob - s * 0.6 + angleBase * s + movement;
            
            // The "Foot"
            const footX = side * s * (0.8 + legIndex * 0.2);
            const footY = bob + s * 0.4 + angleBase * s;

            ctx.quadraticCurveTo(kneeX, kneeY, footX, footY);
            ctx.stroke();
        }

        // --- 2. ABDOMEN (The big back part) ---
        ctx.fillStyle = color;
        ctx.beginPath();
        // Shifted back, larger than the head
        ctx.ellipse(0, bob + s * 0.3, s * 0.55, s * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();

        // Pattern on the abdomen (e.g., a cross or diamond)
        ctx.fillStyle = color2;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.ellipse(0, bob + s * 0.3, s * 0.15, s * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // --- 3. CEPHALOTHORAX (The front part) ---
        ctx.fillStyle = '#1a1a1a'; // Darker base for the head
        ctx.beginPath();
        ctx.ellipse(0, bob - s * 0.2, s * 0.35, s * 0.3, 0, 0, Math.PI * 2);
        ctx.fill();

        // --- 4. MULTIPLE EYES ---
        ctx.fillStyle = '#fff';
        // Large main eyes
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.arc(side * s * 0.12, bob - s * 0.35, s * 0.07, 0, Math.PI * 2);
            ctx.fill();
        }
        // Tiny secondary eyes (total of 8 is hard to see, but 4–6 looks great)
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.arc(side * s * 0.22, bob - s * 0.28, s * 0.04, 0, Math.PI * 2);
            ctx.arc(side * s * 0.08, bob - s * 0.45, s * 0.03, 0, Math.PI * 2);
            ctx.fill();
        }

        // --- 5. THE CHELICERAE (Fangs) ---
        ctx.fillStyle = '#000';
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side * s * 0.05, bob - s * 0.45);
            ctx.quadraticCurveTo(side * s * 0.15, bob - s * 0.6, side * s * 0.05, bob - s * 0.7);
            ctx.fill();
        }
    }
}