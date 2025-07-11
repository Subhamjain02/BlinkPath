import React, { useState } from 'react';
import styles from './OurWork.module.css';
import SectionText from './SectionText';
import OurWorkNumber from './OurWorkNumber';
import Card from './Card/Card';
import CircleFollower from './CircleFollower';
import poster from './Card/assets/mrityu.webp';
import clip   from './Card/assets/vid1.mov';

import CardText from './Card/CardText';

export default function OurWork() {
  // track if any card is hovered + cursor pos
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const text = "Global teams trust us to take on complex challenges, push creative boundaries, and move fast when it matters most. We bring clarity, momentum, and a little heat to every project."
  const title = "Our Work"
  const num = "01"

  return (
    <div className={styles.container}>
      <div className={styles.textNumberContainer}>
        <SectionText text = {text} title = {title}/>
        <OurWorkNumber className={styles.num} num = {num}/>
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