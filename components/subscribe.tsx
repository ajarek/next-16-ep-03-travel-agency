"use client"

import React, { useState } from "react"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Toast from "./ui/toast"

const Subscribe = () => {
  const [email, setEmail] = useState("")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Replace with real submission logic
    console.log("Subscribe:", email)
    setEmail("")
    showToast("Subscribed successfully", "success")
  }

  const [toast, setToast] = useState<{ message: string; variant?: "success" | "error" } | null>(null)

  function showToast(message: string, variant: "success" | "error" = "success") {
    setToast({ message, variant })
    window.setTimeout(() => setToast(null), 3000)
  }

  return (
    <>
      <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center px-4"
    >
      <Card className="max-w-6xl w-full rounded-xl bg-linear-to-br from-muted/40 to-transparent border-0 p-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Subscribe to get information, latest news and other
            interesting offers about Magellan
          </h3>

          <form
            onSubmit={onSubmit}
            className="w-full max-w-2xl flex flex-col gap-4 items-center md:flex-row md:justify-center"
          >
            <div className="relative w-full md:flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <Label className="sr-only">Email</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="pl-10"
                type="email"
                required
              />
            </div>

            <Button type="submit" className="ml-0 md:ml-4 w-full md:w-auto" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </Card>
    </motion.div>

      <AnimatePresence>
        {toast && (
          <div className="fixed right-6 bottom-6 z-50">
            <Toast
              key={toast.message}
              message={toast.message}
              variant={toast.variant}
              onClose={() => setToast(null)}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Subscribe