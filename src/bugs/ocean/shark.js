// ── SHARK: Sleek swimming predator, realistic movement ──────
class Shark {
    static draw(ctx, s, bob, bug) {
        const size = s * 1.4;
        const swimPhase = bug.wobble * 0.5;
        
        // ── BODY SWAY ANIMATION ────────────────────────────
        const bodyWave = Math.sin(swimPhase) * size * 0.08;
        
        // ── POWERFUL TAIL FIN ──────────────────────────────
        const tailWave = Math.sin(swimPhase) * size * 0.15;
        ctx.fillStyle = '#78909C';
        ctx.beginPath();
        ctx.moveTo(-size * 0.55, bob);
        ctx.quadraticCurveTo(
            -size * 0.8, bob - size * 0.35 + tailWave,
            -size * 1.1, bob - size * 0.4 + tailWave
        );
        ctx.quadraticCurveTo(
            -size * 0.75, bob + size * 0.05 + tailWave,
            -size * 0.85, bob + size * 0.2 + tailWave
        );
        ctx.quadraticCurveTo(
            -size * 0.6, bob + size * 0.1,
            -size * 0.55, bob
        );
        ctx.closePath(); ctx.fill();
        
        // ── SLEEK TORPEDO BODY ─────────────────────────────
        const bodyGrad = ctx.createLinearGradient(0, bob - size * 0.3, 0, bob + size * 0.3);
        bodyGrad.addColorStop(0, '#78909C');
        bodyGrad.addColorStop(0.3, '#607D8B');
        bodyGrad.addColorStop(0.5, '#546E7A');
        bodyGrad.addColorStop(0.7, '#607D8B');
        bodyGrad.addColorStop(1, '#90A4AE');
        ctx.fillStyle = bodyGrad;
        ctx.beginPath();
        ctx.moveTo(-size * 0.55, bob - size * 0.2);
        ctx.quadraticCurveTo(
            size * 0.1, bob - size * 0.28 + bodyWave,
            size * 0.5, bob - size * 0.18
        );
        ctx.quadraticCurveTo(
            size * 0.6, bob - size * 0.05,
            size * 0.55, bob
        );
        ctx.quadraticCurveTo(
            size * 0.6, bob + size * 0.05,
            size * 0.5, bob + size * 0.15
        );
        ctx.quadraticCurveTo(
            size * 0.1, bob + size * 0.22 + bodyWave,
            -size * 0.55, bob + size * 0.15
        );
        ctx.closePath(); ctx.fill();
        
        // ── WHITE BELLY ────────────────────────────────────
        ctx.fillStyle = '#CFD8DC';
        ctx.beginPath();
        ctx.moveTo(-size * 0.3, bob + size * 0.08);
        ctx.quadraticCurveTo(
            size * 0.1, bob + size * 0.15 + bodyWave,
            size * 0.35, bob + size * 0.08
        );
        ctx.quadraticCurveTo(
            size * 0.1, bob + size * 0.02,
            -size * 0.3, bob + size * 0.02
        );
        ctx.closePath(); ctx.fill();
        
        // ── BODY STRIPES ───────────────────────────────────
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = size * 0.06;
        for (let i = 0; i < 3; i++) {
            const sx = -size * 0.2 + i * size * 0.2;
            ctx.beginPath();
            ctx.moveTo(sx, bob - size * 0.15);
            ctx.quadraticCurveTo(sx + size * 0.05, bob, sx, bob + size * 0.1);
            ctx.stroke();
        }
        
        // ── LARGE DORSAL FIN ───────────────────────────────
        const dorsalWave = Math.sin(swimPhase * 1.5) * size * 0.05;
        ctx.fillStyle = '#546E7A';
        ctx.beginPath();
        ctx.moveTo(-size * 0.1, bob - size * 0.22);
        ctx.quadraticCurveTo(
            size * 0.05, bob - size * 0.7 + dorsalWave,
            size * 0.2, bob - size * 0.25
        );
        ctx.quadraticCurveTo(
            size * 0.1, bob - size * 0.2,
            -size * 0.1, bob - size * 0.22
        );
        ctx.closePath(); ctx.fill();
        
        // Small rear dorsal fin
        ctx.fillStyle = '#546E7A';
        ctx.beginPath();
        ctx.moveTo(-size * 0.25, bob - size * 0.18);
        ctx.quadraticCurveTo(
            -size * 0.2, bob - size * 0.4,
            -size * 0.1, bob - size * 0.2
        );
        ctx.quadraticCurveTo(
            -size * 0.15, bob - size * 0.18,
            -size * 0.25, bob - size * 0.18
        );
        ctx.closePath(); ctx.fill();
        
        // ── PECTORAL FINS (swimming motion) ────────────────
        for (let side = -1; side <= 1; side += 2) {
            const finWave = Math.sin(swimPhase + side) * size * 0.1;
            ctx.fillStyle = '#607D8B';
            ctx.beginPath();
            ctx.moveTo(size * 0.05, bob + size * 0.12);
            ctx.quadraticCurveTo(
                side * size * 0.3, bob + size * 0.3 + finWave,
                side * size * 0.45, bob + size * 0.05 + finWave
            );
            ctx.quadraticCurveTo(
                side * size * 0.2, bob + size * 0.05,
                size * 0.05, bob + size * 0.12
            );
            ctx.closePath(); ctx.fill();
        }
        
        // ── PELVIC FINS ────────────────────────────────────
        for (let side = -1; side <= 1; side += 2) {
            ctx.fillStyle = '#607D8B';
            ctx.beginPath();
            ctx.moveTo(-size * 0.05, bob + size * 0.15);
            ctx.quadraticCurveTo(
                side * size * 0.2, bob + size * 0.3,
                side * size * 0.25, bob + size * 0.1
            );
            ctx.quadraticCurveTo(
                side * size * 0.1, bob + size * 0.1,
                -size * 0.05, bob + size * 0.15
            );
            ctx.closePath(); ctx.fill();
        }
        
        // ── POINTED HEAD ───────────────────────────────────
        ctx.fillStyle = '#607D8B';
        ctx.beginPath();
        ctx.moveTo(size * 0.4, bob - size * 0.15);
        ctx.quadraticCurveTo(size * 0.6, bob, size * 0.65, bob);
        ctx.quadraticCurveTo(size * 0.6, bob + size * 0.05, size * 0.4, bob + size * 0.12);
        ctx.closePath(); ctx.fill();
        
        // ── MENACING EYE ───────────────────────────────────
        // Eye socket
        ctx.fillStyle = '#37474F';
        ctx.beginPath();
        ctx.arc(size * 0.42, bob - size * 0.08, size * 0.1, 0, Math.PI * 2);
        ctx.fill();
        
        // Eye white
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(size * 0.42, bob - size * 0.08, size * 0.07, 0, Math.PI * 2);
        ctx.fill();
        
        // Black pupil
        ctx.fillStyle = '#111';
        ctx.beginPath();
        ctx.arc(size * 0.44, bob - size * 0.08, size * 0.04, 0, Math.PI * 2);
        ctx.fill();
        
        // Eye gleam
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(size * 0.43, bob - size * 0.11, size * 0.02, 0, Math.PI * 2);
        ctx.fill();
        
        // ── MOUTH WITH SHARP TEETH ─────────────────────────
        ctx.fillStyle = '#FFCCCC';
        ctx.beginPath();
        ctx.moveTo(size * 0.5, bob + size * 0.02);
        ctx.quadraticCurveTo(
            size * 0.58, bob + size * 0.08,
            size * 0.62, bob + size * 0.04
        );
        ctx.quadraticCurveTo(
            size * 0.55, bob + size * 0.02,
            size * 0.5, bob + size * 0.02
        );
        ctx.closePath(); ctx.fill();
        
        // Upper teeth
        ctx.fillStyle = 'white';
        for (let i = 0; i < 5; i++) {
            const tx = size * 0.5 + i * size * 0.025;
            ctx.beginPath();
            ctx.moveTo(tx, bob + size * 0.03);
            ctx.lineTo(tx + size * 0.008, bob + size * 0.02);
            ctx.lineTo(tx + size * 0.015, bob + size * 0.07);
            ctx.lineTo(tx + size * 0.022, bob + size * 0.02);
            ctx.lineTo(tx + size * 0.03, bob + size * 0.03);
            ctx.lineTo(tx + size * 0.015, bob + size * 0.01);
            ctx.closePath(); ctx.fill();
        }
        
        // ── GILL SLITS ─────────────────────────────────────
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.lineWidth = 1.2;
        for (let i = 0; i < 4; i++) {
            const gx = size * 0.12 + i * size * 0.05;
            ctx.beginPath();
            ctx.moveTo(gx, bob - size * 0.16);
            ctx.quadraticCurveTo(
                gx - size * 0.02,
                bob + size * 0.02,
                gx + size * 0.02,
                bob + size * 0.1
            );
            ctx.stroke();
        }
        
        // ── SPEED LINES ────────────────────────────────────
        if (bug.bug.speed > 1.2) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 0.8;
            for (let i = 0; i < 3; i++) {
                const lx = -size * 0.6 - i * size * 0.15;
                ctx.beginPath();
                ctx.moveTo(lx, bob - size * 0.15);
                ctx.lineTo(lx - size * 0.2, bob - size * 0.15);
                ctx.stroke();
            }
        }
    }
}