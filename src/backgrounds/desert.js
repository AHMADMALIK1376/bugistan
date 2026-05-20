function drawDesertBackground() {
    const t = frame * 0.005;
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#FF8C42'); sky.addColorStop(0.4, '#FFB347'); sky.addColorStop(1, '#F5DEB3');
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#E8C872';
    ctx.beginPath(); ctx.moveTo(0, H);
    for (let i = 0; i <= W; i += 20) { ctx.lineTo(i, H * 0.5 + Math.sin(i * 0.01 + t) * 30); }
    ctx.lineTo(W, H); ctx.closePath(); ctx.fill();
    for (let i = 0; i < 25; i++) {
        const sx = (Math.sin(i * 4.5 + t * 0.5) * 0.5 + 0.5) * W;
        const sy = H * 0.3 + (Math.cos(i * 3.5) * 0.5 + 0.5) * H * 0.5;
        ctx.fillStyle = 'rgba(210,180,140,0.3)';
        ctx.beginPath(); ctx.arc(sx, sy, 2, 0, Math.PI * 2); ctx.fill();
    }
}