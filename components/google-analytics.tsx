"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = "G-QTKR61DYG5"

  useEffect(() => {
    // Load gtag.js script
    const script1 = document.createElement("script")
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script1)

    // Initialize gtag configuration
    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag
    gtag("js", new Date())
    gtag("config", GA_MEASUREMENT_ID)
  }, [])

  return null
}
