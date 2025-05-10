"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface SkillCardProps {
  name: string
  icon: ReactNode
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Card className="overflow-hidden border-primary/10 bg-background/60 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
          <motion.div
            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <h3 className="font-medium">{name}</h3>
        </CardContent>
      </Card>
    </motion.div>
  )
}
