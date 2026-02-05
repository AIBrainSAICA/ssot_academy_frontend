"use client"

import Link from "next/link"
import Image from "next/image"
import { Target, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

export function AboutContent() {
  const { t } = useLanguage()

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {t("aboutSsot").split("Superstars of Tomorrow")[0]}
                <span className="text-primary">Superstars of Tomorrow</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{t("aboutHeroDesc")} {t("aboutHeroDesc2")}</p>
              <p className="text-base text-gray-600 leading-relaxed">{t("aboutHeroDesc3")}</p>
            </div>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1993&q=80"
                alt="Football training with AI technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/5 p-8 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">{t("ourMission")}</h2>
              <p className="text-gray-700 leading-relaxed">{t("ourMissionDesc")}</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-gray-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">{t("ourVision")}</h2>
              <p className="text-gray-700 leading-relaxed">{t("ourVisionDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">{t("ourStory")}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              {t("ourStoryP1")} {t("ourStoryP2")}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t("ourStoryP3")} {t("ourStoryP4")}
            </p>
            <p className="text-gray-700 leading-relaxed">{t("ourStoryP5")}</p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t("whatMakesUsDifferent")}</h2>
          <div className="bg-primary/5 rounded-xl p-8 mb-8 max-w-4xl mx-auto">
            <p className="text-center text-gray-700 leading-relaxed text-lg">{t("coachesCollaboration")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-primary"
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
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{t("mobileFirst")}</h3>
              <p className="text-gray-600 text-sm">{t("mobileFirstDesc")}</p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{t("realTimeFeedback")}</h3>
              <p className="text-gray-600 text-sm">{t("realTimeFeedbackDesc")}</p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{t("personalizedTraining")}</h3>
              <p className="text-gray-600 text-sm">{t("personalizedTrainingDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t("globalPresence")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Switzerland Office */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-foreground">{t("switzerlandOffice")}</h3>
              <p className="text-sm text-primary font-semibold mb-4">{t("europeanHq")}</p>
              <address className="text-gray-600 not-italic text-sm leading-relaxed">
                Rte des Flumeaux 42
                <br />
                Prilly Vaud, Suisse
              </address>
            </div>

            {/* German Office */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-foreground">{t("germanOffice")}</h3>
              <p className="text-sm text-primary font-semibold mb-4">{t("centralEuropeanOps")}</p>
              <address className="text-gray-600 not-italic text-sm leading-relaxed">
                Bismarckstraße 10-12
                <br />
                10625 Berlin, Germany
              </address>
            </div>

            {/* US Office */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-foreground">{t("usOffice")}</h3>
              <p className="text-sm text-primary font-semibold mb-4">{t("northAmericanHq")}</p>
              <address className="text-gray-600 not-italic text-sm leading-relaxed">
                1040 Noel Drive, Suite 100-B
                <br />
                Menlo Park, CA 94025
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">{t("joinRevolution")}</h2>
          <p className="text-lg text-gray-600 mb-8">{t("joinRevolutionDesc")}</p>
          <Link
            href="https://play.google.com/store/apps/details?id=com.aibrain.ssot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              {t("downloadGooglePlay")}
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">{t("mvpEarlyAccessAppStore")}</p>
        </div>
      </section>
    </main>
  )
}
