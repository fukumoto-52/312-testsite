import React, { useEffect, useRef, useState } from "react"  
import * as style from "./style.module.css"

const AnimationText = ({ text }) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref} className={style.title}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={style.char}
          style={{
            animationDelay: `${i * 0.15}s`,
            animationPlayState: isVisible ? "running" : "paused",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}

export default AnimationText