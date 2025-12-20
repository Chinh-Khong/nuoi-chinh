"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  planName: string
  planPrice: string
  img: string
}

export function PaymentModal({ isOpen, onClose, planName, planPrice, img }: PaymentModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">{planName}</DialogTitle>
          <DialogDescription className="text-center text-lg font-semibold text-primary">{planPrice}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 py-4">
          <p className="text-sm text-muted-foreground text-center">Quét mã QR để hoàn tất thanh toán</p>

          <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-border bg-white">
            <img
              src={img}
              alt="QR Code Payment"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-xs text-muted-foreground text-center max-w-xs">
            Sau khi chuyển khoản, vui lòng ghi rõ nội dung: <br />
            <span className="font-semibold">"{planName}"</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
