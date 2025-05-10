"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (faster)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        const form = e.target as HTMLFormElement
        form.reset()
      }, 2000) // Уменьшаем время показа сообщения об успехе
    }, 800) // Уменьшаем время "отправки"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-primary/10 bg-background/60 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="text-sm font-medium">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Введите ваше имя"
                  required
                  disabled={isSubmitting || isSubmitted}
                  className="bg-background/50 focus:border-primary/50 focus:ring-primary/20"
                />
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="text-sm font-medium">
                  Ваш email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Введите ваш email"
                  required
                  disabled={isSubmitting || isSubmitted}
                  className="bg-background/50 focus:border-primary/50 focus:ring-primary/20"
                />
              </motion.div>
            </div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="message" className="text-sm font-medium">
                Сообщение
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Введите ваше сообщение"
                rows={5}
                required
                disabled={isSubmitting || isSubmitted}
                className="bg-background/50 resize-none focus:border-primary/50 focus:ring-primary/20"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="mr-2"
                    >
                      <Send className="h-4 w-4" />
                    </motion.div>
                    Отправка...
                  </>
                ) : isSubmitted ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="mr-2"
                    >
                      <CheckCircle className="h-4 w-4" />
                    </motion.div>
                    Отправлено!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Отправить сообщение
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
