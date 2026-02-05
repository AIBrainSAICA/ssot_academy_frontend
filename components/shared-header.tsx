"use client"

import Link from "next/link"
import Image from "next/image"
import { Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/lib/i18n/language-context"

export function SharedHeader() {
  const { t } = useLanguage()

  const openAuth = (type: "login" | "register") => {
    window.open(`https://ssot.saiva.football:5001/${type}`, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/ssot-logo-horizontal.png"
              alt="Superstars of Tomorrow Logo"
              width={220}
              height={50}
              className="h-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              {t("home")}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              {t("about")}
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              {t("contact")}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSelector />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-1.5 text-sm font-medium">
                  {t("account")}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => openAuth("login")} className="cursor-pointer">
                  <span className="font-medium">{t("login")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => openAuth("register")} className="cursor-pointer">
                  <span className="font-medium">{t("createAccount")}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all">
                  <Download className="h-4 w-4 mr-2" />
                  {t("downloadApp")}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.aibrain.ssot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.684v.065c0 .36.186.687.491.873l.06.033c.228.125.465.159.709.159.396 0 .791-.132 1.01-.351L17.398 12 5.589 0.351A1.42 1.42 0 004.579 0c-.244 0-.481.034-.709.159l-.06.033A1.043 1.043 0 003.319 1.13v.065c0 .261.109.503.29.684z" />
                    </svg>
                    <div className="flex flex-col">
                      <span className="font-semibold">{t("googlePlay")}</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem disabled className="flex items-center gap-3 opacity-60">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="font-semibold">{t("appStoreSoon")}</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  )
}
