"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import TypewriterEffect from "./typewriter-effect"

interface AboutMeModalProps {
  isOpen: boolean
  onClose: () => void
  content: string
}

export default function AboutMeModal({ isOpen, onClose, content }: AboutMeModalProps) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowContent(true)
    } else {
      setShowContent(false)
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-background/95 backdrop-blur-sm border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-center text-xl gradient-text">Привет!</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <AnimatePresence>
            {showContent && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <TypewriterEffect text={content} delay={10} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={onClose} className="bg-gradient-to-r from-primary to-primary-dark hover:opacity-90">
              Закрыть
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
