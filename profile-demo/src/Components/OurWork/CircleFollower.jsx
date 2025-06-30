import React from 'react';
import styles from './SVGFollower.module.css';
import CircleArrow from './Card/CircleArrow';

export default function CircleFollower({ x, y, size = 120, color = 'orange', delay = 10, duration = 300 }) {
  return (
    <div
      className={styles.follower}
      style={{
        width: size,
        height: size,
        transition: `transform ${duration}ms ease-out ${delay}ms`,
        transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }}
    >
      <CircleArrow color={color} size={size} />
    </div>
  );
}