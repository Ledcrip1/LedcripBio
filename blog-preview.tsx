"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Как я создал высоконагруженное приложение на Django",
    excerpt: "Делюсь опытом разработки и оптимизации Django-приложения для обработки миллионов запросов в день.",
    date: "10 мая 2023",
    readTime: "8 мин",
    tags: ["Django", "Python", "Оптимизация"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "React vs Vue: что выбрать в 2023 году",
    excerpt: "Сравнение популярных JavaScript-фреймворков, их преимущества и недостатки для разных типов проектов.",
    date: "5 апреля 2023",
    readTime: "10 мин",
    tags: ["React", "Vue", "JavaScript"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Микросервисы на Node.js: практический опыт",
    excerpt: "Как мы перешли от монолита к микросервисной архитектуре и какие проблемы решили по пути.",
    date: "20 марта 2023",
    readTime: "12 мин",
    tags: ["Node.js", "Микросервисы", "Docker"],
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function BlogPreview() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold relative">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Мой блог
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-24 h-1 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              ></motion.span>
            </h2>
            <p className="text-muted-foreground mt-4">Делюсь знаниями и опытом в веб-разработке</p>
          </div>

          <Button variant="outline" className="gap-2">
            Все статьи
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-primary/10 bg-background/60 backdrop-blur-sm h-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10">
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
