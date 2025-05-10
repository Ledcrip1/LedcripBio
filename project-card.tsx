"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  icon: ReactNode
  tags: string[]
  link?: string
}

export default function ProjectCard({ title, description, icon, tags, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Card className="overflow-hidden border-primary/10 bg-background/60 backdrop-blur-sm h-full hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <motion.div
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                {title}
                {link && (
                  <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                )}
              </h3>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.div key={index} whileHover={{ y: -2, scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
              <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 transition-colors">
                {tag}
              </Badge>
            </motion.div>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
