"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

interface ExperienceItem {
  period: string
  title: string
  company: string
  description: string
}

interface ExperienceTimelineProps {
  experience: ExperienceItem[]
}

export default function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <div className="max-w-3xl mx-auto relative">
      {/* Timeline line */}
      <motion.div
        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:translate-x-px"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {experience.map((item, index) => (
        <div key={index} className="mb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Timeline dot */}
            <motion.div
              className="absolute left-0 md:left-1/2 w-5 h-5 bg-primary rounded-full transform -translate-x-1/2 mt-6 z-10 border-2 border-background"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.5 }}
            ></motion.div>

            {/* Date */}
            <div className="md:w-1/2 pb-8 md:pb-0 md:px-8 text-center md:text-right flex flex-col items-center md:items-end">
              <motion.div
                className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium inline-block mb-2"
                initial={{ x: index % 2 === 0 ? 20 : -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.period}
              </motion.div>
            </div>

            {/* Content */}
            <div className="md:w-1/2 pl-8 md:pl-0 md:pr-8">
              <motion.div
                initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden border-primary/10 bg-background/60 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Briefcase className="h-5 w-5" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-primary font-medium text-sm mb-2">{item.company}</p>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
