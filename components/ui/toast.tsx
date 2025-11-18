"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle, XCircle, X } from "lucide-react"

import { cn } from "@/lib/utils"

type Variant = "success" | "error"

interface ToastProps {
  message: string
  variant?: Variant
  onClose?: () => void
}

const variantClasses: Record<Variant, string> = {
  success: "bg-emerald-600 text-white",
  error: "bg-destructive text-white",
}

export default function Toast({ message, variant = "success", onClose }: ToastProps) {
  const Icon = variant === "success" ? CheckCircle : XCircle

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
      className={cn(
        "max-w-sm w-full rounded-lg px-4 py-3 shadow-lg flex items-start gap-3",
        variantClasses[variant]
      )}
      role="status"
      aria-live="polite"
    >
      <Icon className="h-5 w-5 shrink-0" />

      <div className="flex-1 text-sm leading-snug">{message}</div>

      <button
        onClick={onClose}
        aria-label="Close"
        className="ml-2 inline-flex items-center justify-center rounded hover:opacity-90"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  )
}
