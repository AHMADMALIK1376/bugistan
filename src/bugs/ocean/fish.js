// ── REEF FISH: coral-red body, counter-shaded, flowing fins ──────
class Fish {
    static draw(ctx, s, bob, bug) {
        const body = '#ff8c3a';
        const swim = bug.wobble * 0.8;
        const tailWave = Math.sin(swim) * s * 0.3;
        // tail fin: forked, translucent, driving the motion
        ctx.save();
        ctx.translate(0, bob + s * 0.72);
        ctx.rotate(tailWave * 0.4 / s * 2);
        const tg = ctx.createLinearGradient(0, 0, 0, s * 0.6);
        tg.addColorStop(0, A.tone(body, -0.1, 0.75));
        tg.addColorStop(1, A.tone(body, 0.25, 0.3));
        ctx.fillStyle = tg;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-s * 0.24 + tailWave, s * 0.34, -s * 0.3 + tailWave, s * 0.62);
        ctx.quadraticCurveTo(0 + tailWave * 0.5, s * 0.4, s * 0.3 + tailWave, s * 0.62);
        ctx.quadraticCurveTo(s * 0.24 + tailWave, s * 0.34, 0, 0);
        ctx.fill();
        ctx.restore();
        // pectoral fins fanning at the sides
        for (let side = -1; side <= 1; side += 2) {
            ctx.save();
            ctx.translate(side * s * 0.3, bob - s * 0.02);
            ctx.rotate(side * (0.5 + Math.sin(swim + 1) * 0.25));
            const pg = ctx.createLinearGradient(0, 0, side * s * 0.4, s * 0.2);
            pg.addColorStop(0, A.tone(body, 0.2, 0.6));
            pg.addColorStop(1, A.tone(body, 0.35, 0.12));
            ctx.fillStyle = pg;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(side * s * 0.42, s * 0.06, side * s * 0.34, s * 0.32);
            ctx.quadraticCurveTo(side * s * 0.12, s * 0.2, 0, 0);
            ctx.fill();
            ctx.restore();
        }
        // body: deep oval, counter-shaded dark above / pale below
        ctx.save();
        ctx.translate(0, bob);
        const bg = ctx.createLinearGradient(-s * 0.4, 0, s * 0.4, 0);
        bg.addColorStop(0, A.tone(body, -0.45));
        bg.addColorStop(0.42, body);
        bg.addColorStop(0.75, A.tone(body, 0.35));
        bg.addColorStop(1, '#ffe4c0');
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.ellipse(0, 0, s * 0.4, s * 0.72, 0, 0, Math.PI * 2);
        ctx.fill();
        // vertical bar markings
        ctx.fillStyle = 'rgba(50,22,10,0.28)';
        for (let k = 0; k < 3; k++) {
            ctx.beginPath();
            ctx.ellipse(0, -s * 0.34 + k * s * 0.34, s * 0.36 - k * 0.03 * s, s * 0.08, 0, 0, Math.PI * 2);
            ctx.fill();
        }
        // scale shimmer
        const sh = ctx.createRadialGradient(-s * 0.14, -s * 0.2, 0, -s * 0.14, -s * 0.2, s * 0.5);
        sh.addColorStop(0, 'rgba(255,235,210,0.35)');
        sh.addColorStop(1, 'rgba(255,235,210,0)');
        ctx.fillStyle = sh;
        ctx.beginPath(); ctx.ellipse(0, 0, s * 0.4, s * 0.72, 0, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        // dorsal fin ridge
        ctx.strokeStyle = A.tone(body, -0.3, 0.8);
        ctx.lineWidth = s * 0.06;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(-s * 0.38, bob - s * 0.2);
        ctx.quadraticCurveTo(-s * 0.56, bob + s * 0.05, -s * 0.4, bob + s * 0.3);
        ctx.stroke();
        // head details: gill line + realistic round eye
        ctx.strokeStyle = 'rgba(60,26,12,0.5)';
        ctx.lineWidth = s * 0.035;
        ctx.beginPath();
        ctx.arc(0, bob - s * 0.3, s * 0.26, Math.PI * 0.25, Math.PI * 0.75);
        ctx.stroke();
        A.eyes(ctx, 0, bob - s * 0.4, s * 0.5 * 0.26, s * 0.5 * 0.135, '#1c1712');
    }
}
