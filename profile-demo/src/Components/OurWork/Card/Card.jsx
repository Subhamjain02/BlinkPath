import React, { useRef, useState } from 'react';
import styles from './Card.module.css';

export default function Card({ imageSrc, videoSrc, width = 630, height = 630, onHoverChange, onHoverMove }) {
  const ref = useRef(null);
  const videoRef = useRef(null);

  const handleEnter = e => {
    onHoverChange(true);
    const rect = ref.current.getBoundingClientRect();
    onHoverMove({ x: e.clientX - 120, y: e.clientY - 120});
    videoRef.current && (videoRef.current.currentTime = 0, videoRef.current.play());
  };
  const handleMove = e => {
    onHoverMove({ x: e.clientX - 120, y: e.clientY - 120});
  };
  const handleLeave = () => {
    onHoverChange(false);
    videoRef.current && videoRef.current.pause();
  };

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <img src={imageSrc} alt="" className={styles.coverImage} />
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        className={`${styles.coverVideo}`}
      />
    </div>
  );
}