"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export default function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5])

  return (
    <section ref={ref} className="relative h-[100vh] overflow-hidden flex items-center justify-center py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-primary/5 to-background/0 z-0"></div>

      <motion.div
        style={{ opacity, scale }}
        className="container relative z-10 flex flex-col items-center justify-center"
      >
        <motion.div style={{ y: y1 }} className="mb-8">
          <Badge variant="outline" className="px-4 py-2 text-lg bg-primary/10 border-primary/20">
            <Sparkles className="h-5 w-5 mr-2" />
            Параллакс эффект
          </Badge>
        </motion.div>

        <motion.h2
          style={{ y: y2, rotate }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
        >
          Создаю потрясающие веб-проекты
        </motion.h2>

        <motion.div style={{ y: y3 }} className="max-w-2xl">
          <Card className="border-primary/10 bg-background/60 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <p className="text-lg text-muted-foreground">
                Современные технологии и креативный подход позволяют мне создавать уникальные и запоминающиеся проекты,
                которые не только выглядят привлекательно, но и обеспечивают отличный пользовательский опыт.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  )
}
