"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code } from "lucide-react"

export function PreLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Имитация загрузки ресурсов
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="text-primary mb-4"
            >
              <Code size={48} />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-muted-foreground"
            >
              Загрузка...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
