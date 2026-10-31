"use client";

import { useEffect, useRef, useState } from "react";

const LAP_DURATION_MS = 22000; // 22s smooth continuous orbit

type Particle = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
};

export function HeroOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 200, y: 200, angle: 0, scale: 1 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const nextParticleId = useRef(0);

  useEffect(() => {
    let animId: number;
    let startTime: number | null = null;
    let lastParticleTime = 0;

    const loop = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) % LAP_DURATION_MS;
      const progress = elapsed / LAP_DURATION_MS;
      const t = progress * Math.PI * 2;

      const rect = containerRef.current?.getBoundingClientRect();
      const W = rect?.width || 1200;
      const H = rect?.height || 840;

      // Smooth, elegant elliptical path sweeping gracefully across the hero skyline
      const centerX = W * 0.5;
      const centerY = H * 0.42;
      const radiusX = W * 0.44;
      const radiusY = H * 0.36;

      // Harmonic trajectory for natural flight dynamics
      const curX = centerX + Math.cos(t) * radiusX;
      const curY = centerY + Math.sin(t) * radiusY - Math.sin(t * 2) * (H * 0.04);

      // Tangent for forward nose alignment
      const dt = 0.015;
      const nx = centerX + Math.cos(t + dt) * radiusX;
      const ny = centerY + Math.sin(t + dt) * radiusY - Math.sin((t + dt) * 2) * (H * 0.04);

      const dx = nx - curX;
      const dy = ny - curY;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Depth scaling: larger and closer when in front, sleek perspective in distance
      const depthScale = 0.65 + (Math.sin(t) * 0.5 + 0.5) * 0.45;

      setCoords({ x: curX, y: curY, angle, scale: depthScale });

      // Emit glowing engine exhaust contrail particles behind the jet
      if (timestamp - lastParticleTime > 40) {
        lastParticleTime = timestamp;
        const rad = (angle * Math.PI) / 180;
        // Exhaust point trailing behind the jet body
        const exhaustX = curX - Math.cos(rad) * 45 * depthScale;
        const exhaustY = curY - Math.sin(rad) * 45 * depthScale;

        const colors = ["#38bdf8", "#60a5fa", "#f59e0b", "#fef08a", "#ffffff"];
        const p1: Particle = {
          id: nextParticleId.current++,
          x: exhaustX + (Math.random() - 0.5) * 8,
          y: exhaustY + (Math.random() - 0.5) * 8,
          vx: -Math.cos(rad) * 1.8 + (Math.random() - 0.5) * 0.8,
          vy: -Math.sin(rad) * 1.8 + (Math.random() - 0.5) * 0.8,
          size: (3 + Math.random() * 4) * depthScale,
          alpha: 0.85,
          color: colors[Math.floor(Math.random() * colors.length)],
        };

        setParticles((prev) => {
          const updated = prev
            .map((p) => ({
              ...p,
              x: p.x + p.vx,
              y: p.y + p.vy,
              size: p.size * 0.96,
              alpha: p.alpha - 0.025,
            }))
            .filter((p) => p.alpha > 0.04);
          return [...updated.slice(-24), p1];
        });
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-15 overflow-hidden select-none"
    >
      {/* Contrail particles */}
      <svg className="absolute inset-0 h-full w-full pointer-events-none">
        {particles.map((p) => (
          <circle
            key={p.id}
            cx={p.x}
            cy={p.y}
            r={p.size}
            fill={p.color}
            opacity={p.alpha}
            style={{
              filter: `drop-shadow(0 0 ${p.size * 2}px ${p.color})`,
            }}
          />
        ))}
      </svg>

      {/* Photorealistic Executive Jet */}
      <div
        className="absolute left-0 top-0 will-change-transform"
        style={{
          transform: `translate3d(${coords.x}px, ${coords.y}px, 0) translate(-50%, -50%) rotate(${coords.angle - 145}deg) scale(${coords.scale * 0.16})`,
          transformOrigin: "center center",
          filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.65))",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/luxury-private-jet.png"
          alt="Luxury Private Jet"
          className="h-auto w-[620px] max-w-none select-none"
          loading="eager"
        />
        {/* Engine Afterburner Glow Point */}
        <div className="absolute right-[28%] top-[24%] h-8 w-8 rounded-full bg-cyan-400/80 blur-md" />
        <div className="absolute right-[18%] top-[40%] h-8 w-8 rounded-full bg-cyan-400/80 blur-md" />
      </div>
    </div>
  );
}