function drawSpaceBackground() {
    const t = frame * 0.005;
    const space = ctx.createLinearGradient(0, 0, 0, H);
    space.addColorStop(0, '#000011'); space.addColorStop(0.5, '#0a0a2a'); space.addColorStop(1, '#050510');
    ctx.fillStyle = space; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 120; i++) {
        const sx = (Math.sin(i * 7.7 + i * i * 0.1) * 0.5 + 0.5) * W;
        const sy = (Math.cos(i * 11.3 + i * i * 0.05) * 0.5 + 0.5) * H;
        const twinkle = 0.3 + Math.sin(t * 3 + i) * 0.5;
        ctx.fillStyle = `rgba(255,255,255,${twinkle})`;
        ctx.beginPath(); ctx.arc(sx, sy, 0.3 + Math.abs(Math.sin(t * 2 + i)) * 1.2, 0, Math.PI * 2); ctx.fill();
    }
    for (let i = 0; i < 4; i++) {
        const nx = W * (0.2 + i * 0.2);
        const ny = H * (0.3 + i * 0.1);
        const ng = ctx.createRadialGradient(nx, ny, 0, nx, ny, 100);
        ng.addColorStop(0, `rgba(${100 + i * 30},${50 + i * 20},${200 - i * 30},0.08)`);
        ng.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = ng;
        ctx.beginPath(); ctx.arc(nx, ny, 100, 0, Math.PI * 2); ctx.fill();
    }
}