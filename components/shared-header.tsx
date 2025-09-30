import Link from "next/link"
import Image from "next/image"
import { LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SharedHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          {/* Logo image */}
          <Image
            src="/images/ssot-logo-horizontal.png"
            alt="Superstars of Tomorrow Logo"
            width={220}
            height={50}
            className="h-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <div className="relative group">
            <Link
              href="/programs/foundation-stage"
              className="flex items-center text-sm font-medium hover:text-primary transition-colors"
            >
              Programs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <Link
                  href="/programs/foundation-stage"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Foundation Stage (6-10)
                </Link>
                <Link
                  href="/programs/youth-development"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Youth Development (11-15)
                </Link>
                <Link
                  href="/programs/elite-pathway"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Elite Pathway (16-20)
                </Link>
              </div>
            </div>
          </div>

          {/* Download App Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-sm font-medium hover:text-primary transition-colors">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Download App
              </span>
              <span className="ml-1 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
                NEW
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2 text-green-600" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.684v.065c0 .36.186.687.491.873l.06.033c.228.125.465.159.709.159.396 0 .791-.132 1.01-.351L17.398 12 5.589 0.351A1.42 1.42 0 004.579 0c-.244 0-.481.034-.709.159l-.06.033A1.043 1.043 0 003.319 1.13v.065c0 .261.109.503.29.684z" />
                  </svg>
                  Google Play
                </Link>
                <Link
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2 text-gray-800" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.81.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </Link>
              </div>
            </div>
          </div>

          <Link href="/#coach-section" className="text-sm font-medium hover:text-primary transition-colors">
            For Coaches
          </Link>
          <Link href="/#footer-contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>

          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="http://18.191.72.169:5001/login" passHref>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              <LogIn className="h-4 w-4 mr-1" />
              Login
            </Button>
          </Link>

          <Link href="http://18.191.72.169:5001/register" passHref>
            <Button className="bg-primary hover:bg-primary/90">Register Now</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
