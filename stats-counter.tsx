"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Coffee, Clock } from "lucide-react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function Counter({ end, duration = 2, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const startAnimation = (timestamp: number) => {
      startTime = timestamp
      animate(timestamp)
    }

    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(startAnimation)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <div className="py-16 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Цифры и факты
          </span>
          <motion.span
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          ></motion.span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Code className="h-8 w-8" />, value: 50000, suffix: "+", label: "Строк кода" },
            { icon: <Users className="h-8 w-8" />, value: 25, suffix: "+", label: "Довольных клиентов" },
            { icon: <Coffee className="h-8 w-8" />, value: 1200, suffix: "", label: "Чашек кофе" },
            { icon: <Clock className="h-8 w-8" />, value: 3, suffix: "+", label: "Лет опыта" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-primary/10 bg-background/60 backdrop-blur-sm h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
