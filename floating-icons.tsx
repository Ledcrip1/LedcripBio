"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Database, Globe, Cpu, Server, Layers } from "lucide-react"
import { useTheme } from "next-themes"

interface FloatingIcon {
  id: number
  icon: JSX.Element
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    // Создаем плавающие иконки только на клиенте
    const iconComponents = [
      <Code key="code" />,
      <Database key="database" />,
      <Globe key="globe" />,
      <Cpu key="cpu" />,
      <Server key="server" />,
      <Layers key="layers" />,
    ]

    const newIcons: FloatingIcon[] = []

    for (let i = 0; i < 12; i++) {
      newIcons.push({
        id: i,
        icon: iconComponents[i % iconComponents.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 10 + 20,
        delay: Math.random() * 5,
      })
    }

    setIcons(newIcons)
  }, [])

  if (icons.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-primary/10"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [0, Math.random() * 360, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  )
}
