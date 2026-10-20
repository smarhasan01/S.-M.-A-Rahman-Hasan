import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const spotlightRef = useRef(null);

  // Position references (avoiding React state re-renders on every mouse tick)
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const spotPos = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);
  const isMouseDown = useRef(false);
  const isVisible = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    // Check if device has a fine pointer (desktop mouse) and no reduced-motion preference
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || reducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
        if (spotlightRef.current) spotlightRef.current.style.opacity = '1';
      }
    };

    const onMouseDown = () => {
      isMouseDown.current = true;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(0.8)`;
      }
    };

    const onMouseUp = () => {
      isMouseDown.current = false;
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (spotlightRef.current) spotlightRef.current.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible.current = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
      if (spotlightRef.current) spotlightRef.current.style.opacity = '1';
    };

    // Hover detection on interactive elements
    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer')
      ) {
        isHovered.current = true;
        if (ringRef.current) {
          ringRef.current.classList.add('cursor-hover');
        }
      } else {
        isHovered.current = false;
        if (ringRef.current) {
          ringRef.current.classList.remove('cursor-hover');
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    // Smooth 60fps render loop with lerp (linear interpolation)
    const render = () => {
      // Smooth interpolation factors:
      // Ring follows smoothly with 0.18 lerp
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.18;

      // Spotlight follows with a cinematic 0.08 lerp
      spotPos.current.x += (mouse.current.x - spotPos.current.x) * 0.08;
      spotPos.current.y += (mouse.current.y - spotPos.current.y) * 0.08;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        const scale = isMouseDown.current ? 0.8 : isHovered.current ? 1.6 : 1;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${spotPos.current.x}px, ${spotPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <>
      {/* 1. Purple Glow Ambient Spotlight following cursor */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
      >
        <div
          ref={spotlightRef}
          className="absolute w-[520px] h-[520px] rounded-full pointer-events-none opacity-0 transition-opacity duration-500 will-change-transform"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.14) 0%, rgba(99, 102, 241, 0.06) 40%, transparent 70%)',
          }}
        />
      </div>

      {/* 2. Custom Glowing Cursor (Center Dot & Outer Glowing Ring) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      >
        {/* Crisp Center Dot */}
        <div
          ref={dotRef}
          className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#8b5cf6] pointer-events-none opacity-0 transition-opacity duration-300 will-change-transform"
        />

        {/* Outer Glowing Trailing Ring */}
        <div
          ref={ringRef}
          className="absolute w-9 h-9 rounded-full border border-brand-purple/70 shadow-[0_0_16px_rgba(124,58,237,0.45)] pointer-events-none opacity-0 transition-all duration-150 will-change-transform flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60 opacity-0 transition-opacity duration-200 [.cursor-hover_&]:opacity-100" />
        </div>
      </div>
    </>
  );
}
