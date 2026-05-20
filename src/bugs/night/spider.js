class Spider {
    static draw(ctx, s, bob, bug) {
        const color = bug.bug.color;
        const color2 = bug.bug.color2;

        // Legs
        ctx.strokeStyle = '#111';
        ctx.lineWidth = s * 0.08;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        for (let i = 0; i < 8; i++) {
            const side = i < 4 ? -1 : 1;
            const legIndex = i % 4;
            const angleBase = (legIndex - 1.5) * 0.6;
            const movement = Math.sin(bug.legPhase + i) * s * 0.15;
            ctx.beginPath();
            ctx.moveTo(side * s * 0.1, bob - s * 0.2);
            const kneeX = side * s * (0.6 + legIndex * 0.1);
            const kneeY = bob - s * 0.6 + angleBase * s + movement;
            const footX = side * s * (0.8 + legIndex * 0.2);
            const footY = bob + s * 0.4 + angleBase * s;
            ctx.quadraticCurveTo(kneeX, kneeY, footX, footY);
            ctx.stroke();
        }

        // Abdomen
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.ellipse(0, bob + s * 0.3, s * 0.55, s * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();

        // Abdomen pattern
        ctx.fillStyle = color2;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.ellipse(0, bob + s * 0.3, s * 0.15, s * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // Cephalothorax
        ctx.fillStyle = '#1a1a1a';
        ctx.beginPath();
        ctx.ellipse(0, bob - s * 0.2, s * 0.35, s * 0.3, 0, 0, Math.PI * 2);
        ctx.fill();

        // Eyes
        ctx.fillStyle = '#fff';
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.arc(side * s * 0.12, bob - s * 0.35, s * 0.07, 0, Math.PI * 2);
            ctx.fill();
        }
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.arc(side * s * 0.22, bob - s * 0.28, s * 0.04, 0, Math.PI * 2);
            ctx.arc(side * s * 0.08, bob - s * 0.45, s * 0.03, 0, Math.PI * 2);
            ctx.fill();
        }

        // Fangs
        ctx.fillStyle = '#000';
        for (let side = -1; side <= 1; side += 2) {
            ctx.beginPath();
            ctx.moveTo(side * s * 0.05, bob - s * 0.45);
            ctx.quadraticCurveTo(side * s * 0.15, bob - s * 0.6, side * s * 0.05, bob - s * 0.7);
            ctx.fill();
        }
    }
}