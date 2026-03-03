"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID_1 = "G-1H8YR5GV3W"
  const GA_MEASUREMENT_ID_2 = "G-QTKR61DYG5"

  useEffect(() => {
    // Load gtag.js script
    const script = document.createElement("script")
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID_1}`
    script.async = true
    document.head.appendChild(script)

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
    gtag("js", new Date())
    gtag("config", GA_MEASUREMENT_ID_1)
    gtag("config", GA_MEASUREMENT_ID_2)
  }, [])

  return null
}
