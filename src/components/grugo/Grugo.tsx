"use client"
import { useEffect, useState, useRef, useCallback } from 'react';
import './grugo.css';
import { cn } from '@/lib/utils';

export default function Grugo() {
  const [smile, setSmile] = useState(false);
  const [groguPos, setGroguPos] = useState(0);
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const groguRef = useRef<HTMLDivElement>(null);
  const [movingRight, setMovingRight] = useState(false);

  const moveGrogu = useCallback((e: MouseEvent) => {
    if (!groguRef.current) return;

    const groguRect = groguRef.current.getBoundingClientRect();
    const groguCenterX = groguRect.left + groguRect.width / 2;
    const groguCenterY = groguRect.top + groguRect.height / 2;
    const angle = Math.atan2(e.clientY - groguCenterY, e.clientX - groguCenterX);

    const targetX = e.clientX - groguRect.width / 2;
    setGroguPos(prev => prev + (targetX - prev) * 0.05);

    const eyeMaxMove = 3;
    setEyePos({
      x: Math.cos(angle) * eyeMaxMove,
      y: Math.sin(angle) * eyeMaxMove
    });

    setMovingRight(e.clientX > groguCenterX);
    const isOverLink = (e.target as HTMLElement).closest('a') !== null;
    setSmile(isOverLink);

  }, []);


  useEffect(() => {


    document.addEventListener('mousemove', moveGrogu);

    return () => {
      document.removeEventListener('mousemove', moveGrogu);
    };
    // ignore the warning, we don't want to re-run the effect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div >
      <div
        ref={groguRef}
        className={`grogu-pod ${movingRight ? "right" : ""} -z-0`}
        style={{ left: `${groguPos}px` }}
      >
        <div className="pod">
          <div className="pod-top"></div>
          <div className="pod-bottom"></div>
          <div className="pod-controls"></div>
        </div>
        <div className="grogu">
          <div className="head">
            <div className="ears left-ear"></div>
            <div className="ears right-ear"></div>
            <div className="face">
              <div className="eyes rt">
                <div className="eye left-eye">
                  <div className="pupil" style={{ transform: `translate(${eyePos.x}px, ${eyePos.y}px)` }}></div>
                </div>
                <div className="eye right-eye">
                  <div className="pupil" style={{ transform: `translate(${eyePos.x}px, ${eyePos.y}px)` }}></div>
                </div>
              </div>
              <div className={cn("mouth", !smile && "rotate-180")} ></div>
            </div>
          </div>
          <div className="body"></div>
        </div>
      </div>
    </div>
  );
}