import Link from "next/link"
import Image from "next/image"
import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { AboutContent } from "@/components/about-content"

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">
      <SharedHeader />
      <AboutContent />
      <footer className="bg-white text-black py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/images/ssot-logo-horizontal.png"
                alt="Superstars of Tomorrow Logo"
                width={180}
                height={40}
                className="h-auto"
              />
            </div>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-gray-500 hover:underline text-xs">
                Privacy Policy
              </Link>
              <Link href="/#contact" className="text-gray-500 hover:underline text-xs">
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-4 pt-4 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Superstars of Tomorrow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
