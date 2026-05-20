function drawNightBackground() {
    const t = frame * 0.005;
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#0a0a2e'); sky.addColorStop(0.5, '#1a1a3e'); sky.addColorStop(1, '#0d1b2a');
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 80; i++) {
        const sx = (Math.sin(i * 13.7) * 0.5 + 0.5) * W;
        const sy = (Math.cos(i * 17.3) * 0.5 + 0.5) * H * 0.7;
        const twinkle = 0.3 + Math.sin(t * 2 + i) * 0.4;
        ctx.fillStyle = `rgba(255,255,220,${twinkle})`;
        ctx.beginPath(); ctx.arc(sx, sy, 0.5 + Math.abs(Math.sin(t + i)) * 1.5, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = '#FFEECC';
    ctx.beginPath(); ctx.arc(W * 0.8, H * 0.2, 35, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#0a0a2e';
    ctx.beginPath(); ctx.arc(W * 0.82, H * 0.18, 30, 0, Math.PI * 2); ctx.fill();
}