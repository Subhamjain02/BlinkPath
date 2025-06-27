import React, { useRef, useState } from 'react'
import styles from './Card.module.css'

export default function Card({ imageSrc, videoSrc, width = 630, height = 630 }) {
  const videoRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={styles.card}
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseEnter={() => {
        setHovered(true)
        videoRef.current && (videoRef.current.currentTime = 0, videoRef.current.play())
      }}
      onMouseLeave={() => {
        setHovered(false)
        videoRef.current && videoRef.current.pause()
      }}
    >
      <img src={imageSrc} alt="" className={styles.coverImage} />
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        className={`${styles.coverVideo} ${hovered ? styles.visible : ''}`}
      />
      
    </div>
  )
}
