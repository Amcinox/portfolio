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
    s.groguPos += (s.targetX - s.groguPos) * 0.04;

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

  useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth < 640;
    };
    checkMobile();

    window.addEventListener('resize', checkMobile);
    document.addEventListener('mousemove', handleMouse);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouse, animate]);

  return (
    <div className="w-full h-28 relative grogu-container-wrapper">
      <div
        ref={groguRef}
        className="grogu-pod"
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