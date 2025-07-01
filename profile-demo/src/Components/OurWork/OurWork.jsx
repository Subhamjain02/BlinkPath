import React, { useState } from 'react';
import styles from './OurWork.module.css';
import OurWorkText from './OurWorkText';
import OurWorkNumber from './OurWorkNumber';
import Card from './Card/Card';
import CircleFollower from './CircleFollower';
import poster from './Card/assets/mrityu.webp';
import clip   from './Card/assets/Movie on 27-06-25 at 4.46 PM.mov';

import CardText from './Card/CardText';

export default function OurWork() {
  // track if any card is hovered + cursor pos
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div className={styles.container}>
      <div className={styles.textNumberContainer}>
        <OurWorkText />
        <OurWorkNumber className={styles.num} />
      </div>

      {/* global SVG follower, fixed to viewport */}
      {hovered && <CircleFollower x={pos.x} y={pos.y} />}

      <div className={styles.cardsContainer}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <div className = "flex flex-col gap-[40px]">
            <Card
              key={idx}
              imageSrc={poster}
              videoSrc={clip}
              onHoverChange={setHovered}
              onHoverMove={setPos}
            />
            <CardText/>
          </div>
          
        ))}
      </div>
    </div>
  );
}