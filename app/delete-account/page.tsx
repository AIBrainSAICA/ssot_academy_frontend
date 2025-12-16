"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setMessage({ type: "error", text: "Please enter your email address" })
      return
    }

    setIsLoading(true)
    setMessage(null)

    try {
      const response = await fetch("https://ssot.saiva.football:5005/request-deletion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: "success", text: data.message })
        setEmail("")
      } else {
        setMessage({ type: "error", text: data.message || "An error occurred. Please try again." })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred. Please try again later." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <Card className="border border-border bg-white shadow-lg">
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Request Account Deletion</h1>
              <p className="text-sm text-muted-foreground">
                We're sorry to see you go. Enter your email below to request account deletion. A confirmation email will
                be sent to you.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  required
                />
                <p className="text-xs text-muted-foreground">Enter the email address associated with your account.</p>
              </div>

              {/* Message Display */}
              {message && (
                <div
                  className={`flex items-start gap-3 p-4 rounded-lg border ${
                    message.type === "success" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                  }`}
                >
                  {message.type === "success" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  )}
                  <p className={`text-sm ${message.type === "success" ? "text-green-800" : "text-red-800"}`}>
                    {message.text}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Request Deletion"
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="my-6 border-t border-border" />

            {/* Info Box */}
            <div className="bg-secondary/50 border border-border rounded-lg p-4 mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">What Happens Next</h3>
              <ul className="text-xs text-muted-foreground space-y-2">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>You'll receive a confirmation email</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Follow the link in the email to confirm deletion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <span>Your account will be permanently deleted within 30 days</span>
                </li>
              </ul>
            </div>

            {/* Back Link */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">Changed your mind?</p>
              <Link href="/" className="text-primary hover:text-primary/80 font-medium text-sm transition-colors">
                Return to Home
              </Link>
            </div>
          </div>
        </Card>

        {/* Privacy Notice */}
        <p className="text-xs text-muted-foreground text-center mt-6">
          Your data is secure. We handle deletion requests in accordance with our{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
