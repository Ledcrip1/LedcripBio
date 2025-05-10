"use client"

import type { ReactNode } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface Contact {
  icon: ReactNode
  text: string
}

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  contacts: Contact[]
}

export default function ContactModal({ isOpen, onClose, contacts }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Контакты</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="space-y-4">
            {contacts.map((contact, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
                <div className="text-primary">{contact.icon}</div>
                <span>{contact.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Button onClick={onClose}>Закрыть</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
