// Replace the entire 3D scene component with this simplified version that avoids the error

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ThreeDScene() {
  const [show3D, setShow3D] = useState(false)

  return (
    <div className="relative w-full h-[400px] my-12">
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/5 rounded-lg border border-primary/10">
        {show3D ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1.5, type: "spring" }}
                className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center"
              >
                <span className="text-4xl">👨‍💻</span>
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Ledcrip Coder</h3>
              <p className="text-muted-foreground mb-6">
                3D компоненты временно отключены для обеспечения стабильности
              </p>
              <Button onClick={() => setShow3D(false)} className="bg-gradient-to-r from-primary to-primary-dark">
                Скрыть
              </Button>
            </div>
          </div>
        ) : (
          <>
            <p className="mb-4 text-muted-foreground">3D демонстрация временно недоступна</p>
            <Button onClick={() => setShow3D(true)} className="bg-gradient-to-r from-primary to-primary-dark">
              Показать альтернативу
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
