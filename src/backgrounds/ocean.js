function drawOceanBackground() {
    const t = frame * 0.005;
    const ocean = ctx.createLinearGradient(0, 0, 0, H);
    ocean.addColorStop(0, '#006994'); ocean.addColorStop(0.3, '#004466'); ocean.addColorStop(1, '#001a33');
    ctx.fillStyle = ocean; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 8; i++) {
        const rx = W * (0.1 + i * 0.1);
        ctx.fillStyle = `rgba(100,180,255,${0.03 + Math.sin(t + i) * 0.02})`;
        ctx.beginPath(); ctx.moveTo(rx, 0); ctx.lineTo(rx + 30, H); ctx.lineTo(rx - 20, H); ctx.closePath(); ctx.fill();
    }
    for (let i = 0; i < 20; i++) {
        const bx = (Math.sin(i * 3.2 + t * 0.2) * 0.5 + 0.5) * W;
        const by = H - ((frame * 0.2 + i * 40) % H);
        ctx.fillStyle = 'rgba(150,220,255,0.2)';
        ctx.beginPath(); ctx.arc(bx, by, 2 + Math.sin(i + t) * 1.5, 0, Math.PI * 2); ctx.fill();
    }
}