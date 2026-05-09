class Snake extends Bug {
    constructor(isWarning) {
        super(9, isWarning);
        this.segments = [];
        this.segmentCount = 12; // More segments = smoother snake
        for (let i = 0; i < this.segmentCount; i++) {
            this.segments.push({ x: 0, y: 0 });
        }
    }

    update() {
        super.update();
        // Shift segments to follow the head
        this.segments.unshift({ x: this.x, y: this.y });
        if (this.segments.length > this.segmentCount) this.segments.pop();
    }

    draw(ctx, s, bob) {
        const { color, color2 } = this.bug;

        // --- 1. THE BODY (The Slither) ---
        for (let i = this.segments.length - 1; i >= 0; i--) {
            const seg = this.segments[i];
            
            // Calculate a wave offset based on segment index and time
            // This creates the "winding" motion
            const wave = Math.sin(this.legPhase * 0.5 - i * 0.4) * s * 0.3;
            
            // Taper the body: fat in the middle, thin at the tail
            const taper = Math.sin((i / this.segments.length) * Math.PI + 0.2);
            const segSize = s * 0.4 * taper;

            // Positioning relative to the head (0,0) or absolute if your engine allows
            // If drawing relative to 'this.x', we use offsets. 
            // Here we use the stored history for the trailing effect.
            const drawX = (seg.x - this.x);
            const drawY = (seg.y - this.y) + bob + wave;

            // Draw shadow/outline
            ctx.fillStyle = '#1a2e0a';
            ctx.beginPath();
            ctx.arc(drawX, drawY, segSize + 1, 0, Math.PI * 2);
            ctx.fill();

            // Main body color with a scale-like alternate color
            ctx.fillStyle = i % 2 === 0 ? color : color2;
            ctx.beginPath();
            ctx.arc(drawX, drawY, segSize, 0, Math.PI * 2);
            ctx.fill();

            // Belly highlight
            ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.beginPath();
            ctx.arc(drawX - segSize * 0.2, drawY - segSize * 0.2, segSize * 0.4, 0, Math.PI * 2);
            ctx.fill();
        }

        // --- 2. THE TONGUE (Flickering) ---
        const tongueFlicker = Math.max(0, Math.sin(this.antennaPhase * 3));
        if (tongueFlicker > 0.5) {
            ctx.strokeStyle = '#ff4444';
            ctx.lineWidth = s * 0.05;
            ctx.beginPath();
            ctx.moveTo(s * 0.5, bob);
            ctx.lineTo(s * 0.9, bob);
            // Forked tips
            ctx.lineTo(s * 1.0, bob - s * 0.1);
            ctx.moveTo(s * 0.9, bob);
            ctx.lineTo(s * 1.0, bob + s * 0.1);
            ctx.stroke();
        }

        // --- 3. THE HEAD (Diamond Shape) ---
        ctx.fillStyle = color;
        ctx.beginPath();
        // Classic viper/diamond head shape
        ctx.moveTo(s * -0.2, bob);
        ctx.bezierCurveTo(s * 0.1, bob - s * 0.5, s * 0.5, bob - s * 0.4, s * 0.7, bob);
        ctx.bezierCurveTo(s * 0.5, bob + s * 0.4, s * 0.1, bob + s * 0.5, s * -0.2, bob);
        ctx.fill();

        // --- 4. THE EYES (Predatory) ---
        [-1, 1].forEach(side => {
            const eyeY = bob + (side * s * 0.15);
            // Yellow eye
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(s * 0.4, eyeY, s * 0.1, 0, Math.PI * 2);
            ctx.fill();
            // Slit pupil
            ctx.fillStyle = '#000';
            ctx.beginPath();
            ctx.ellipse(s * 0.42, eyeY, s * 0.02, s * 0.07, 0, 0, Math.PI * 2);
            ctx.fill();
        });
    }
}