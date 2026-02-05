"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

export function SharedFooter() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white text-black py-8 border-t">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/ssot-logo-horizontal.png"
              alt="Superstars of Tomorrow Logo"
              width={180}
              height={40}
              className="h-auto mb-4"
            />
            <p className="text-sm text-gray-500 mb-4">
              {t("aiPoweredApp")} {t("trainSmarterAnywhere")}
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold mb-3">{t("quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:underline">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:underline">
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-500 hover:underline">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-3">{t("download")}</h3>
            <div className="space-y-3">
              <Link
                href="https://play.google.com/store/apps/details?id=com.aibrain.ssot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.684v.065c0 .36.186.687.491.873l.06.033c.228.125.465.159.709.159.396 0 .791-.132 1.01-.351L17.398 12 5.589 0.351A1.42 1.42 0 004.579 0c-.244 0-.481.034-.709.159l-.06.033A1.043 1.043 0 003.319 1.13v.065c0 .261.109.503.29.684z" />
                </svg>
                <span>{t("googlePlay")}</span>
              </Link>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 rounded-lg text-sm cursor-not-allowed">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span>{t("appStoreSoon")}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold mb-3">{t("contact")}</h3>
            <div className="text-sm text-gray-500 space-y-3">
              <div>
                <p className="font-semibold text-gray-700 mb-1">{t("email")}</p>
                <a href="mailto:ssot@aibrain.com" className="text-primary hover:underline">
                  ssot@aibrain.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-1">{t("globalOffices")}</p>
                <div className="space-y-1 text-xs">
                  <p>🇨🇭 {t("prillySwitzerland")}</p>
                  <p>🇩🇪 {t("berlinGermany")}</p>
                  <p>🇺🇸 {t("menloParkCa")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Superstars of Tomorrow. {t("allRightsReserved")}
          </p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-500 hover:underline text-xs">
              {t("privacyPolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
