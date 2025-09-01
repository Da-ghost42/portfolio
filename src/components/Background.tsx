import React, { useEffect, useRef } from 'react';

export const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Array<{ x: number; y: number; z: number; phase: number; speed: number }>>([]);
  const animRef = useRef<number>();
  const STAR_COUNT = 380;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize stars (x,y relative to center translation applied later)
    starsRef.current = Array.from({ length: STAR_COUNT }, () => ({
      x: (Math.random() * 2 - 1) * window.innerWidth,
      y: (Math.random() * 2 - 1) * window.innerHeight,
      z: Math.random() * 0.9 + 0.1,
      phase: Math.random() * Math.PI * 2,
      speed: 0.002 + Math.random() * 0.004
    }));

    const render = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(canvas.width / 2 / (window.devicePixelRatio || 1), canvas.height / 2 / (window.devicePixelRatio || 1));

      for (const star of starsRef.current) {
        // Motion drift
        star.y += 0.18 * star.z * 1.4;
        star.x += 0.03 * star.z;
        if (star.y > window.innerHeight) star.y = -window.innerHeight;
        if (star.x > window.innerWidth) star.x = -window.innerWidth;

        // Twinkle update
        star.phase += star.speed;
        if (star.phase > Math.PI * 2) star.phase -= Math.PI * 2;

        const twinkle = 0.55 + 0.45 * Math.sin(star.phase);
        const baseBrightness = 180 + Math.floor(star.z * 75);
        const alpha = (0.35 + star.z * 0.55) * twinkle;
        const size = (star.z * 2.2 + twinkle * 0.8);

        // Soft glow
        ctx.fillStyle = `rgba(${baseBrightness},${baseBrightness},${baseBrightness},${alpha * 0.5})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(${255},${255},${255},${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 0.75, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      animRef.current = requestAnimationFrame(render);
    };
    animRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
