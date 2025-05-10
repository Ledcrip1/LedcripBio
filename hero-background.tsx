"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Устанавливаем размер canvas
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Создаем частицы
    const particlesArray: Particle[] = []
    const numberOfParticles = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.offsetWidth
        this.y = Math.random() * canvas.offsetHeight
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = theme === "dark" ? "rgba(139, 92, 246, " : "rgba(99, 102, 241, "
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.offsetWidth) this.x = 0
        else if (this.x < 0) this.x = canvas.offsetWidth

        if (this.y > canvas.offsetHeight) this.y = 0
        else if (this.y < 0) this.y = canvas.offsetHeight
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color + (Math.random() * this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color + (Math.random() * 0.3 + 0.2) + ")"
        ctx.fill()
      }
    }

    // Создаем начальные частицы
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    // Соединяем частицы линиями
    const connect = () => {
      const maxDistance = 100
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle =
              theme === "dark" ? `rgba(139, 92, 246, ${opacity * 0.5})` : `rgba(99, 102, 241, ${opacity * 0.5})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Анимация
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      connect()
      requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10 opacity-30" />
}
