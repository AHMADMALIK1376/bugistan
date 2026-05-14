class Beetle {
    static draw(ctx, s, bob, bug) {
        const color = bug.bug.color;
        const color2 = bug.bug.color2;
        const size = s * 1.4;

        // Legs
        ctx.strokeStyle = '#1a1a1a';
        ctx.lineWidth = size * 0.1;
        ctx.lineCap = 'round';
        for (let side = -1; side <= 1; side += 2) {
            for (let i = -1; i <= 1; i++) {
                const legY = bob + i * (size * 0.4);
                const movement = Math.sin(bug.legPhase + i) * (size * 0.2);
                ctx.beginPath();
                ctx.moveTo(side * size * 0.2, legY);
                ctx.lineTo(side * size * 0.8 + movement, legY + size * 0.2);
                ctx.stroke();
            }
        }

        // Body
        ctx.fillStyle = color;
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, bob + size * 0.2, size * 0.8, size * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Head
        ctx.fillStyle = color2;
        ctx.beginPath();
        ctx.ellipse(0, bob - size * 0.4, size * 0.7, size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Mandibles
        ctx.strokeStyle = '#222';
        ctx.lineWidth = size * 0.12;
        [-1, 1].forEach(side => {
            ctx.beginPath();
            ctx.moveTo(side * size * 0.2, bob - size * 0.8);
            ctx.quadraticCurveTo(side * size * 0.6, bob - size * 1.2, side * size * 0.3, bob - size * 1.4);
            ctx.stroke();
        });

        // Eyes and Blush
        ctx.fillStyle = 'white';
        [-1, 1].forEach(side => {
            ctx.beginPath();
            ctx.arc(side * size * 0.3, bob - size * 0.5, size * 0.15, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.arc(side * size * 0.32, bob - size * 0.5, size * 0.07, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = 'rgba(255, 100, 100, 0.5)';
            ctx.beginPath();
            ctx.arc(side * size * 0.45, bob - size * 0.3, size * 0.1, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = 'white';
        });
    }
}