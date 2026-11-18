'use client';

import { useEffect, useRef } from 'react';

export default function CyberCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Particles — lime green only
    const count = Math.min(Math.floor(W / 28), 55);
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.3,
    }));

    let gridOff = 0;

    const draw = () => {
      // Dark navy background
      ctx.fillStyle = '#050816';
      ctx.fillRect(0, 0, W, H);

      // Hero radial glow top-center (lime tinted)
      const heroGlow = ctx.createRadialGradient(W * 0.5, 0, 0, W * 0.5, 0, W * 0.65);
      heroGlow.addColorStop(0, 'rgba(198,255,54,0.07)');
      heroGlow.addColorStop(0.5, 'rgba(198,255,54,0.02)');
      heroGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = heroGlow;
      ctx.fillRect(0, 0, W, H);

      // Subtle lime grid
      gridOff = (gridOff + 0.2) % 50;
      ctx.strokeStyle = 'rgba(198,255,54,0.035)';
      ctx.lineWidth = 1;
      for (let x = 0; x <= W; x += 50) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = gridOff; y <= H; y += 50) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        ctx.save();
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#C6FF36';
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = '#C6FF36';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Connect nearby
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.save();
            ctx.globalAlpha = 0.08 * (1 - d / 100);
            ctx.strokeStyle = '#C6FF36';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(animId); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.9 }} />;
}
