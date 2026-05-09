class Caterpillar extends Bug {
    constructor(isWarning) {
        super(4, isWarning);
        this.segments = 6; // More segments for a smoother body
    }

    draw(ctx, s, bob) {
        const { color, color2 } = this.bug;

        // --- 1. PROLEGS (The tiny feet) ---
        ctx.strokeStyle = '#2d1a00';
        ctx.lineWidth = s * 0.08;
        ctx.lineCap = 'round';

        for (let i = 0; i < this.segments; i++) {
            const wave = Math.sin(this.legPhase + i * 0.8) * s * 0.15;
            const segmentX = -s * 0.8 + (i * s * 0.35);
            const segmentY = bob + wave;

            // Draw tiny feet on each side of the segment
            [-1, 1].forEach(side => {
                ctx.beginPath();
                ctx.moveTo(segmentX, segmentY);
                ctx.lineTo(segmentX + (side * s * 0.1), segmentY + s * 0.25);
                ctx.stroke();
            });
        }

        // --- 2. SEGMENTED BODY ---
        for (let i = 0; i < this.segments; i++) {
            // Calculate position with a wave offset
            const wave = Math.sin(this.legPhase + i * 0.8) * s * 0.15;
            const segmentX = -s * 0.8 + (i * s * 0.35);
            const segmentY = bob + wave;
            
            // Alternate colors with a subtle gradient effect
            const baseColor = i % 2 === 0 ? color : color2;
            ctx.fillStyle = baseColor;
            
            // Draw segment shadow
            ctx.shadowColor = 'rgba(0,0,0,0.2)';
            ctx.shadowBlur = 4;
            
            ctx.beginPath();
            // Tail segments are smaller, middle segments are chubbier
            const sizeMult = 1 - Math.abs((i - (this.segments / 2)) / this.segments) * 0.5;
            ctx.arc(segmentX, segmentY, s * 0.22 * sizeMult, 0, Math.PI * 2);
            ctx.fill();
            
            // Reset shadow for highlights
            ctx.shadowBlur = 0;

            // Shine/Highlight on each segment for 3D depth
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.beginPath();
            ctx.arc(segmentX - s * 0.05, segmentY - s * 0.05, s * 0.08 * sizeMult, 0, Math.PI * 2);
            ctx.fill();
        }

        // --- 3. THE HEAD ---
        const headWave = Math.sin(this.legPhase + this.segments * 0.8) * s * 0.15;
        const headX = -s * 0.8 + (this.segments * s * 0.35);
        const headY = bob + headWave;

        ctx.fillStyle = color2; 
        ctx.beginPath();
        ctx.arc(headX, headY, s * 0.25, 0, Math.PI * 2);
        ctx.fill();

        // Tiny antennae/mandibles
        ctx.strokeStyle = '#1a0f00';
        ctx.lineWidth = s * 0.05;
        [-1, 1].forEach(side => {
            ctx.beginPath();
            ctx.moveTo(headX + s * 0.1, headY + (side * s * 0.1));
            ctx.lineTo(headX + s * 0.3, headY + (side * s * 0.2));
            ctx.stroke();
        });

        // Eyes (Simple and cute)
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(headX + s * 0.12, headY - s * 0.08, s * 0.06, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(headX + s * 0.15, headY - s * 0.08, s * 0.03, 0, Math.PI * 2);
        ctx.fill();
    }
}