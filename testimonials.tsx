"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Алексей К.",
    role: "CEO, Tech Company",
    content:
      "Отличная работа! Проект был выполнен в срок и с высоким качеством. Коммуникация на высшем уровне, всегда на связи и готов внести правки.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Мария С.",
    role: "Marketing Director",
    content:
      "Очень доволен результатом! Сайт работает быстро, выглядит современно и привлекательно. Рекомендую как профессионала своего дела.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Дмитрий П.",
    role: "Startup Founder",
    content:
      "Превзошел все ожидания! Разработчик не только выполнил все требования, но и предложил несколько интересных решений, которые значительно улучшили проект.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative py-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -skew-y-3 transform-gpu"></div>

      <div className="container relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Отзывы клиентов
          </span>
          <motion.span
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          ></motion.span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full"
              >
                <Card className="border-primary/10 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Quote className="h-12 w-12 text-primary/30 mb-4" />
                      <p className="text-lg mb-6">{testimonials[current].content}</p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4 border-2 border-primary/20">
                          <AvatarImage
                            src={testimonials[current].avatar || "/placeholder.svg"}
                            alt={testimonials[current].name}
                          />
                          <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="font-semibold">{testimonials[current].name}</p>
                          <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    current === index ? "bg-primary" : "bg-primary/20"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
