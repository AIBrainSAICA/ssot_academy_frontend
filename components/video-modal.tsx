"use client"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  videoUrl: string
}

export function VideoModal({ isOpen, onClose, title, videoUrl }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-black">
        <DialogHeader className="p-2 flex flex-row items-center justify-between bg-black text-white">
          <DialogTitle>{title}</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/10">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="aspect-video w-full">
          <iframe src={videoUrl} className="w-full h-full" frameBorder="0" allowFullScreen title={title}></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}
