import React, { useEffect, useRef, useState } from 'react';

const TRAIL_COUNT = 6;

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const spotlightRef = useRef(null);
  const dotRef = useRef(null);
  const trailsRef = useRef([]);

  // Coordinate references (zero React re-renders on mouse movements)
  const mouse = useRef({ x: -200, y: -200 });
  const trailPositions = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -200, y: -200 }))
  );
  const spotPos = useRef({ x: -200, y: -200 });
  const isHovered = useRef(false);
  const isMouseDown = useRef(false);
  const isVisible = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    // Disable on mobile/touch screens and respect reduced motion preference
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
        // Seed initial positions to avoid trails flying in from corner
        trailPositions.current.forEach((t) => {
          t.x = e.clientX;
          t.y = e.clientY;
        });
        spotPos.current.x = e.clientX;
        spotPos.current.y = e.clientY;

        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (spotlightRef.current) spotlightRef.current.style.opacity = '1';
        trailsRef.current.forEach((el) => {
          if (el) el.style.opacity = el.dataset.baseOpacity;
        });
      }
    };

    const onMouseDown = () => {
      isMouseDown.current = true;
    };

    const onMouseUp = () => {
      isMouseDown.current = false;
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (spotlightRef.current) spotlightRef.current.style.opacity = '0';
      trailsRef.current.forEach((el) => {
        if (el) el.style.opacity = '0';
      });
    };

    const onMouseEnter = () => {
      isVisible.current = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (spotlightRef.current) spotlightRef.current.style.opacity = '1';
      trailsRef.current.forEach((el) => {
        if (el) el.style.opacity = el.dataset.baseOpacity;
      });
    };

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
      } else {
        isHovered.current = false;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    // Smooth Ghost Trail render loop with cascading lerp
    const render = () => {
      if (isVisible.current) {
        // First trail node tracks the mouse
        const first = trailPositions.current[0];
        first.x += (mouse.current.x - first.x) * 0.42;
        first.y += (mouse.current.y - first.y) * 0.42;

        // Subsequent trail nodes cascade to create the ghost trail
        for (let i = 1; i < TRAIL_COUNT; i++) {
          const prev = trailPositions.current[i - 1];
          const curr = trailPositions.current[i];
          curr.x += (prev.x - curr.x) * 0.36;
          curr.y += (prev.y - curr.y) * 0.36;
        }

        // Spotlight follows with a cinematic slow lerp
        spotPos.current.x += (mouse.current.x - spotPos.current.x) * 0.08;
        spotPos.current.y += (mouse.current.y - spotPos.current.y) * 0.08;

        // Update lead dot
        if (dotRef.current) {
          const dotScale = isMouseDown.current ? 0.7 : isHovered.current ? 1.4 : 1;
          dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
        }

        // Update ghost trail elements
        trailsRef.current.forEach((el, idx) => {
          if (!el) return;
          const pos = trailPositions.current[idx];
          const hoverBoost = isHovered.current ? 1.3 : 1;
          const clickCompress = isMouseDown.current ? 0.8 : 1;
          const scale = hoverBoost * clickCompress;

          el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        });

        // Update spotlight
        if (spotlightRef.current) {
          spotlightRef.current.style.transform = `translate3d(${spotPos.current.x}px, ${spotPos.current.y}px, 0) translate(-50%, -50%)`;
        }
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

  // Trail configurations (size and subtle blue/purple glow opacity)
  const trailConfigs = [
    { size: 24, baseOpacity: '0.50', bg: 'rgba(109, 93, 252, 0.25)', border: 'rgba(140, 82, 255, 0.45)', shadow: '0 0 12px rgba(109, 93, 252, 0.4)' },
    { size: 20, baseOpacity: '0.40', bg: 'rgba(99, 102, 241, 0.20)', border: 'rgba(129, 140, 248, 0.35)', shadow: '0 0 10px rgba(99, 102, 241, 0.35)' },
    { size: 16, baseOpacity: '0.30', bg: 'rgba(79, 70, 229, 0.16)', border: 'rgba(99, 102, 241, 0.28)', shadow: '0 0 8px rgba(79, 70, 229, 0.28)' },
    { size: 13, baseOpacity: '0.22', bg: 'rgba(67, 97, 238, 0.13)', border: 'rgba(56, 189, 248, 0.22)', shadow: '0 0 6px rgba(67, 97, 238, 0.22)' },
    { size: 10, baseOpacity: '0.15', bg: 'rgba(56, 189, 248, 0.10)', border: 'rgba(56, 189, 248, 0.18)', shadow: '0 0 5px rgba(56, 189, 248, 0.18)' },
    { size: 7,  baseOpacity: '0.08', bg: 'rgba(56, 189, 248, 0.08)', border: 'rgba(56, 189, 248, 0.12)', shadow: '0 0 4px rgba(56, 189, 248, 0.12)' },
  ];

  return (
    <>
      {/* 1. Purple & Blue Glow Ambient Spotlight */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      >
        <div
          ref={spotlightRef}
          className="absolute w-[460px] h-[460px] rounded-full pointer-events-none opacity-0 transition-opacity duration-500 will-change-transform"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, rgba(67, 97, 238, 0.05) 45%, transparent 70%)',
          }}
        />
      </div>

      {/* 2. Ghost Trail Cursor Elements */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      >
        {/* Ghost Trail Nodes (reversed in DOM so newest is on top) */}
        {trailConfigs.map((cfg, idx) => (
          <div
            key={idx}
            ref={(el) => (trailsRef.current[idx] = el)}
            data-base-opacity={cfg.baseOpacity}
            className="absolute rounded-full pointer-events-none opacity-0 will-change-transform transition-opacity duration-300"
            style={{
              width: `${cfg.size}px`,
              height: `${cfg.size}px`,
              backgroundColor: cfg.bg,
              border: `1px solid ${cfg.border}`,
              boxShadow: cfg.shadow,
            }}
          />
        ))}

        {/* Lead Crisp Center Dot */}
        <div
          ref={dotRef}
          className="absolute w-2 h-2 rounded-full bg-white pointer-events-none opacity-0 transition-opacity duration-200 will-change-transform shadow-[0_0_8px_#c084fc]"
        />
      </div>
    </>
  );
}
