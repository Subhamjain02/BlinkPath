// HeroVideo.jsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './HeroVideo.module.css';

export default function HeroVideo() {
  const containerRef     = useRef(null);
  const initialTopOffset = useRef(0);

  // constants
  const initialOuterRadius = 150;
  const initialInnerRadius = 40;
  const initialPadding     = 100;

  const [bgColor, setBgColor] = useState('#e9e9e9');
  const [styleState, setStyleState] = useState({
    outerRadius:   initialOuterRadius,
    outerWidthPct: 100,
    innerRadius:   initialInnerRadius,
    innerWidthPct: 90,
    paddingTop:    initialPadding,
    innerOpacity:  0.5,           // start at 0.5
  });

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      initialTopOffset.current = rect.top + window.scrollY;
    }

    const onScroll = () => {
      if (!containerRef.current) return;
      const rect    = containerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const vh      = window.innerHeight;

      // ── PHASE 1 ──
      const maxDown = initialTopOffset.current;
      const pDown   = Math.min(scrollY / maxDown, 1);
      const radDown = initialOuterRadius * (1 - pDown);
      const padTop  = initialPadding     * (1 - pDown);
      const innerRad1 = initialInnerRadius * (1 - pDown);
      const innerW1   = 90 + (100 - 90) * pDown;
      const innerOp1  = 0.5 + 0.5 * pDown;  // opacity from 0.5→1

      // ── PHASE 2 ──
      const startB = vh, endB = vh * 0.75;
      const pUp = Math.min(Math.max((startB - rect.bottom) / (startB - endB), 0), 1);
      const radUp = 80 * pUp;
      const outerW = 100 + (87 - 100) * pUp;

      // combine outers
      const outerR = radDown + radUp;

      // inners: clamp width to 100% in phase 2, radius to outerR, opacity to 1
      const innerR = pUp > 0 ? outerR    : innerRad1;
      const innerW = pUp > 0 ? 100       : innerW1;
      const innerOp= pUp > 0 ? 1         : innerOp1;

      setStyleState({
        outerRadius:   outerR,
        outerWidthPct: outerW,
        innerRadius:   innerR,
        innerWidthPct: innerW,
        paddingTop:    padTop,
        innerOpacity:  innerOp,
      });

      setBgColor(pDown >= 1 ? '#1E1C1B' : '#e9e9e9');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const {
    outerRadius,
    outerWidthPct,
    innerRadius,
    innerWidthPct,
    paddingTop,
    innerOpacity,
  } = styleState;

  return (
    <div className={styles.bg} style={{ backgroundColor: bgColor }}>
      <div
        ref={containerRef}
        className={styles.container}
        style={{
          borderRadius: `${outerRadius}px`,
          width:        `${outerWidthPct}%`,
          paddingTop:   `${paddingTop}px`,
        }}
      >
        <div
          className={styles.inner}
          style={{
            borderRadius: `${innerRadius}px`,
            width:        `${innerWidthPct}%`,
            opacity:      innerOpacity,
          }}
        />
      </div>
    </div>
  );
}
