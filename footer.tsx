"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin, Instagram, Send, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-background/80 to-background border-t border-primary/10">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold mb-4 gradient-text"
            >
              Ledcrip Coder
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-6"
            >
              Создаю современные веб-приложения с использованием передовых технологий и лучших практик разработки.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              {[
                { icon: <Github className="h-5 w-5" />, href: "https://github.com" },
                { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com" },
                { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com" },
                { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/60 backdrop-blur-sm p-2 rounded-full border border-primary/10 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              {["Главная", "Проекты", "Опыт", "Блог", "Контакты"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              {["Веб-разработка", "Мобильные приложения", "UI/UX дизайн", "Консультации", "Техническая поддержка"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:underline">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4">Подписка на новости</h3>
            <p className="text-muted-foreground mb-4">Получайте уведомления о новых статьях и проектах</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Ваш email"
                className="bg-background/50 focus:border-primary/50 focus:ring-primary/20"
              />
              <Button size="icon" className="bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-primary/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ledcrip Coder. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-2 md:mt-0">
            Сделано с <Heart className="h-4 w-4 mx-1 text-red-500" /> в России
          </p>
        </div>
      </div>
    </footer>
  )
}
