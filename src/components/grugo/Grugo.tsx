"use client"

import { useEffect, useRef, useCallback } from 'react';
import './grugo.css';

export default function Grugo() {
  const groguRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);

  // Store mutable animation state in refs to avoid re-renders
  const stateRef = useRef({
    groguPos: 0,
    targetX: 0,
    eyeX: 0,
    eyeY: 0,
    movingRight: false,
    smile: false,
    // Touch/drag state
    dragging: false,
    dragStartX: 0,
    dragStartPos: 0,
  });
  const rafRef = useRef<number>(0);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  const mouthRef = useRef<HTMLDivElement>(null);

  // Animation loop using requestAnimationFrame — no React re-renders
  const animate = useCallback(() => {
    const s = stateRef.current;
    const el = groguRef.current;
    if (!el) {
      rafRef.current = requestAnimationFrame(animate);
      return;
    }

    // Smoothly interpolate position
    const lerpSpeed = s.dragging ? 0.15 : 0.04;
    s.groguPos += (s.targetX - s.groguPos) * lerpSpeed;

    // Clamp to container bounds
    const container = el.parentElement;
    if (container) {
      const maxX = container.clientWidth - el.clientWidth;
      s.groguPos = Math.max(0, Math.min(s.groguPos, maxX));
      s.targetX = Math.max(0, Math.min(s.targetX, maxX));
    }

    // Apply transforms directly to DOM (bypasses React render)
    el.style.left = `${s.groguPos}px`;
    el.style.transform = s.movingRight ? 'scaleX(-1)' : 'scaleX(1)';

    // Eyes
    const eyeTransform = `translate(${s.eyeX}px, ${s.eyeY}px)`;
    if (leftPupilRef.current) leftPupilRef.current.style.transform = eyeTransform;
    if (rightPupilRef.current) rightPupilRef.current.style.transform = eyeTransform;

    // Mouth
    if (mouthRef.current) {
      mouthRef.current.style.transform = s.smile ? 'rotateX(0deg)' : 'rotateX(180deg)';
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  // Mouse handler — just updates ref values, no setState
  const handleMouse = useCallback((e: MouseEvent) => {
    const el = groguRef.current;
    if (!el || isMobileRef.current) return;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - cy, e.clientX - cx);

    const s = stateRef.current;
    s.targetX = e.clientX - rect.width / 2;
    s.eyeX = Math.cos(angle) * 4;
    s.eyeY = Math.sin(angle) * 4;
    s.movingRight = e.clientX > cx;
    s.smile = (e.target as HTMLElement).closest('a') !== null;
  }, []);

  // Touch handlers for mobile drag
  const handleTouchStart = useCallback((e: TouchEvent) => {
    const el = groguRef.current;
    if (!el) return;
    const touch = e.touches[0];
    const s = stateRef.current;
    s.dragging = true;
    s.dragStartX = touch.clientX;
    s.dragStartPos = s.groguPos;
    s.smile = true;
    s.eyeX = 0;
    s.eyeY = -2;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const s = stateRef.current;
    if (!s.dragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    const dx = touch.clientX - s.dragStartX;
    s.targetX = s.dragStartPos + dx;
    s.movingRight = dx > 0;
    // Eyes look in drag direction
    s.eyeX = Math.sign(dx) * 4;
    s.eyeY = -1;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const s = stateRef.current;
    s.dragging = false;
    s.smile = false;
    s.eyeX = 0;
    s.eyeY = 0;
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth < 640;
      // Center Grogu on mobile initially
      if (isMobileRef.current && groguRef.current?.parentElement) {
        const container = groguRef.current.parentElement;
        const center = (container.clientWidth - groguRef.current.clientWidth) / 2;
        stateRef.current.groguPos = center;
        stateRef.current.targetX = center;
      }
    };
    checkMobile();

    const el = groguRef.current;

    window.addEventListener('resize', checkMobile);
    document.addEventListener('mousemove', handleMouse);
    // Touch events on the Grogu element itself
    if (el) {
      el.addEventListener('touchstart', handleTouchStart, { passive: false });
      el.addEventListener('touchmove', handleTouchMove, { passive: false });
      el.addEventListener('touchend', handleTouchEnd);
    }
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousemove', handleMouse);
      if (el) {
        el.removeEventListener('touchstart', handleTouchStart);
        el.removeEventListener('touchmove', handleTouchMove);
        el.removeEventListener('touchend', handleTouchEnd);
      }
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouse, handleTouchStart, handleTouchMove, handleTouchEnd, animate]);

  return (
    <div className="w-full h-28 relative grogu-container-wrapper">
      <div
        ref={groguRef}
        className="grogu-pod touch-none cursor-grab active:cursor-grabbing"
      >
        <div className="pod">
          <div className="pod-top" />
          <div className="pod-bottom" />
          <div className="pod-controls" />
        </div>
        <div className="grogu">
          <div className="head">
            <div className="ears left-ear" />
            <div className="ears right-ear" />
            <div className="face">
              <div className="eyes">
                <div className="eye left-eye">
                  <div className="pupil" ref={leftPupilRef} />
                </div>
                <div className="eye right-eye">
                  <div className="pupil" ref={rightPupilRef} />
                </div>
              </div>
              <div className="mouth" ref={mouthRef} />
            </div>
          </div>
          <div className="body" />
        </div>
      </div>
    </div>
  );
}