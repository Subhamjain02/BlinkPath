// HeroVideo.jsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './HeroVideo.module.css';

export default function HeroVideo() {
  const containerRef     = useRef(null);
  const initialTopOffset = useRef(0);

  const [bgColor, setBgColor] = useState('#e9e9e9');
  const [styleState, setStyleState] = useState({
    radius:   150,
    widthPct: 100,
  });

  useEffect(() => {
    // capture container’s document-offset once
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      initialTopOffset.current = rect.top + window.scrollY;
    }

    const onScroll = () => {
      if (!containerRef.current) return;
      const rect    = containerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const vh      = window.innerHeight;

      // PHASE 1: shrink from 150→0 as top enters viewport
      const maxScrollDown = initialTopOffset.current;
      const pDown = Math.min(scrollY / maxScrollDown, 1);
      const radiusDown = 150 * (1 - pDown);

      // PHASE 2: bottom-edge from vh → 0.75vh
      const startB = vh;          // bottom just enters viewport
      const endB   = vh * 0.75;   // bottom at 25vh above bottom
      const rangeB = startB - endB;
      const deltaB = startB - rect.bottom;
      const pUp   = Math.min(Math.max(deltaB / rangeB, 0), 1);

      // radius grows 0→80, width shrinks 100→87
      const radiusUp = 80 * pUp;
      const widthPct = 100 + (87 - 100) * pUp;

      // toggle BG at end of PHASE 1
      setBgColor(pDown >= 1 ? '#1E1C1B' : '#e9e9e9');

      setStyleState({
        radius:   radiusDown + radiusUp,
        widthPct,
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // init
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const { radius, widthPct } = styleState;
  return (
    <div className={styles.bg} style={{ backgroundColor: bgColor }}>
      <div
        ref={containerRef}
        className={styles.container}
        style={{
          borderRadius: `${radius}px`,
          width:        `${widthPct}%`,
        }}
      >
        <div className={styles.outer}></div>
      </div>
    </div>
  );
}
