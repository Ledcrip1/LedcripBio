"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

interface CertificatesModalProps {
  isOpen: boolean
  onClose: () => void
  friends: string[]
}

export default function CertificatesModal({ isOpen, onClose, friends }: CertificatesModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">кенты кодеры</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Users className="h-8 w-8" />
            </div>
            <ul className="space-y-2 text-center">
              {friends.map((friend, index) => (
                <li key={index} className="font-medium">
                  {friend}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <Button onClick={onClose}>Закрыть</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
