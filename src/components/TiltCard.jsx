import React, { useRef, useState, useEffect } from 'react';

export default function TiltCard({
  children,
  className = '',
  maxTilt = 7,
  scale = 1.02,
  enableGlare = true,
  onClick,
}) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const [canTilt, setCanTilt] = useState(false);
  const rafId = useRef(null);

  useEffect(() => {
    // Only enable 3D tilt on devices with a mouse (not touch) and without reduced motion preference
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setCanTilt(finePointer && !reducedMotion);
  }, []);

  const handleMouseMove = (e) => {
    if (!canTilt || !cardRef.current) return;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (-maxTilt to +maxTilt)
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;

      if (enableGlare && glareRef.current) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glareRef.current.style.opacity = '1';
        glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.08) 0%, transparent 65%)`;
      }
    });
  };

  const handleMouseEnter = () => {
    if (!canTilt || !cardRef.current) return;
    cardRef.current.style.transition = 'transform 0.15s ease-out';
  };

  const handleMouseLeave = () => {
    if (!canTilt || !cardRef.current) return;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    const card = cardRef.current;
    card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

    if (enableGlare && glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative transform-gpu will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}

      {/* Dynamic Specular Sheen Glare */}
      {enableGlare && canTilt && (
        <div
          ref={glareRef}
          aria-hidden="true"
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 transition-opacity duration-300 z-30 overflow-hidden mix-blend-overlay"
        />
      )}
    </div>
  );
}
