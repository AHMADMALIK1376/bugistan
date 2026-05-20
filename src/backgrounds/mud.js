function drawMudBackground() {
    const t = frame * 0.005;
    const mud = ctx.createLinearGradient(0, 0, 0, H);
    mud.addColorStop(0, '#7A5C3A'); mud.addColorStop(0.3, '#8B6B48');
    mud.addColorStop(0.6, '#6B4F28'); mud.addColorStop(1, '#4A3508');
    ctx.fillStyle = mud; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 20; i++) {
        const dx = (Math.sin(i * 3.7 + t * 0.4) * 0.5 + 0.5) * W;
        const dy = (Math.cos(i * 5.1 + t * 0.3) * 0.5 + 0.5) * H;
        ctx.fillStyle = `rgba(180,150,100,${0.1 + Math.sin(i + t * 2) * 0.06})`;
        ctx.beginPath(); ctx.arc(dx, dy, 2, 0, Math.PI * 2); ctx.fill();
    }
}