"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  text: string
  delay?: number
  className?: string
}

export default function TypewriterEffect({
  text,
  delay = 20, // Уменьшаем задержку с 50 до 20 мс для более быстрого эффекта
  className = "text-base text-muted-foreground",
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(
        () => {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        },
        Math.random() * (delay / 2) + delay / 2, // Более плавная и быстрая анимация
      )

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, delay, text])

  return (
    <p className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </p>
  )
}
