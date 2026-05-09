class Mosquito extends Bug {
    constructor(isWarning) {
        super(8, isWarning);
        this.wingPhase = Math.random() * Math.PI * 2;
    }

    update() {
        super.update();
        // Mosquitoes have a very fast wing beat
        this.wingPhase += 0.8; 
    }

    draw(ctx, s, bob) {
        const gray = '#444';
        const darkGray = '#222';

        // --- 1. LONG SPINDLY LEGS ---
        ctx.strokeStyle = darkGray;
        ctx.lineWidth = s * 0.04;
        ctx.lineCap = 'round';
        
        // Mosquitoes have 6 very long, jointed legs
        for (let side = -1; side <= 1; side += 2) {
            for (let i = 0; i < 3; i++) {
                const legY = bob + (i - 1) * s * 0.15;
                const movement = Math.sin(this.legPhase + i) * s * 0.1;
                
                ctx.beginPath();
                ctx.moveTo(0, legY);
                // "Kneed" leg shape (bent upwards then down)
                ctx.bezierCurveTo(
                    side * s * 0.4, legY - s * 0.4, 
                    side * s * 0.8, legY + s * 0.2, 
                    side * s * 0.7 + movement, legY + s * 1.1
                );
                ctx.stroke();
            }
        }

        // --- 2. THE WINGS (High Frequency) ---
        ctx.fillStyle = 'rgba(200, 220, 255, 0.35)';
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.2)';
        ctx.lineWidth = 0.5;
        
        const flap = Math.sin(this.wingPhase) * 0.8;
        [-1, 1].forEach(side => {
            ctx.save();
            ctx.translate(0, bob - s * 0.2);
            ctx.rotate(side * (Math.PI * 0.4 + flap * 0.2));
            
            ctx.beginPath();
            // Long, narrow, smoky wings
            ctx.ellipse(0, -s * 0.4, s * 0.15, s * 0.7, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        });

        // --- 3. THE BODY (Segmented & Hunchbacked) ---
        // Thorax (The "Hunch")
        ctx.fillStyle = gray;
        ctx.beginPath();
        ctx.ellipse(0, bob - s * 0.1, s * 0.25, s * 0.2, 0, 0, Math.PI * 2);
        ctx.fill();

        // Abdomen (Long and thin)
        ctx.fillStyle = this.isWarning ? '#A33' : '#555'; // Reddish if it just "ate"
        ctx.beginPath();
        ctx.ellipse(0, bob + s * 0.4, s * 0.12, s * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();

        // --- 4. THE HEAD & PROBOSCIS ---
        // Head
        ctx.fillStyle = darkGray;
        ctx.beginPath();
        ctx.arc(0, bob - s * 0.35, s * 0.15, 0, Math.PI * 2);
        ctx.fill();

        // The Needle (Proboscis)
        ctx.strokeStyle = '#111';
        ctx.lineWidth = s * 0.05;
        ctx.beginPath();
        ctx.moveTo(0, bob - s * 0.45);
        ctx.lineTo(0, bob - s * 1.1); // Pointing forward/up
        ctx.stroke();

        // Feathered Antennae (Mosquitoes have tiny "fuzzy" feelers)
        ctx.lineWidth = 0.5;
        [-1, 1].forEach(side => {
            ctx.beginPath();
            ctx.moveTo(0, bob - s * 0.45);
            ctx.quadraticCurveTo(side * s * 0.3, bob - s * 0.6, side * s * 0.2, bob - s * 0.7);
            ctx.stroke();
        });

        // Small bead eyes
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(-s * 0.06, bob - s * 0.4, s * 0.05, 0, Math.PI * 2);
        ctx.arc(s * 0.06, bob - s * 0.4, s * 0.05, 0, Math.PI * 2);
        ctx.fill();
    }
}