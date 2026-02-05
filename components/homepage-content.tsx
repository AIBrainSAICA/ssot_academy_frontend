"use client"

import Link from "next/link"
import Image from "next/image"
import { Download, Smartphone, Zap, BarChart3, Trophy, Target, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

export function HomepageContent() {
  const { t } = useLanguage()

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-muted/20 py-16 md:py-24 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-foreground">{t("trainSmarter")}</span>{" "}
                <span className="relative inline-block">
                  <span className="text-primary">{t("anywhere")}</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path
                      d="M0 4C50 4 150 4 200 4"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-primary opacity-30"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                {t("heroDescription")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.aibrain.ssot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto h-14 px-8 text-base"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    {t("downloadGooglePlay")}
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-border text-foreground hover:bg-muted/50 w-full sm:w-auto h-14 px-8 text-base font-semibold bg-transparent"
                  disabled
                >
                  <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  {t("appStoreComingSoon")}
                </Button>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t("mvpEarlyAccess")}
              </div>
            </div>

            {/* Right side visualization */}
            <div className="relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <video
                autoPlay
                loop
                playsInline
                muted
                className="w-full h-full object-cover"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/latest_banner_video-00e16f4-VA8CTiTio9noEGAWGMd6r68NzAN03c.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* What SSOT Does Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("whatSsotDoes")}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("whatSsotDoesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: t("realTimeAiTracking"),
                description: t("realTimeAiTrackingDesc"),
              },
              {
                icon: Target,
                title: t("onScreenArGuidance"),
                description: t("onScreenArGuidanceDesc"),
              },
              {
                icon: Trophy,
                title: t("dailyChallenges"),
                description: t("dailyChallengesDesc"),
              },
              {
                icon: BarChart3,
                title: t("progressTracking"),
                description: t("progressTrackingDesc"),
              },
              {
                icon: Smartphone,
                title: t("mobileOnly"),
                description: t("mobileOnlyDesc"),
              },
              {
                icon: () => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: t("multipleSkills"),
                description: t("multipleSkillsDesc"),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg border border-border transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SSOT Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("whySsot")}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("whySsotSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: t("phoneBased"),
                description: t("phoneBasedDesc"),
              },
              {
                title: t("instantFeedback"),
                description: t("instantFeedbackDesc"),
              },
              {
                title: t("multipleFootballSkills"),
                description: t("multipleFootballSkillsDesc"),
              },
              {
                title: t("personalizedProgression"),
                description: t("personalizedProgressionDesc"),
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-11 w-11 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("whoItsFor")}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-10 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{t("players")}</h3>
              <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                {t("playersDesc")}
              </p>
              <Link
                href="https://play.google.com/store/apps/details?id=com.aibrain.ssot"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="bg-primary hover:bg-primary/90 w-full h-12 text-base font-semibold shadow-md hover:shadow-lg transition-all">
                  <Download className="mr-2 h-5 w-5" />
                  {t("downloadNow")}
                </Button>
              </Link>
            </div>

            <div className="bg-card p-10 rounded-2xl shadow-lg border border-border opacity-70">
              <div className="h-20 w-20 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{t("parentsCoaches")}</h3>
              <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                {t("parentsCoachesDesc")}
              </p>
              <Button variant="outline" disabled className="w-full h-12 text-base font-semibold bg-transparent">
                {t("comingSoon")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">{t("startTrainingSmarter")}</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                {t("ctaDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.aibrain.ssot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/95 w-full sm:w-auto h-14 px-8 text-base font-semibold shadow-xl hover:shadow-2xl transition-all"
                  >
                    <svg viewBox="0 0 24 24" className="mr-2 h-5 w-5" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.684v.065c0 .36.186.687.491.873l.06.033c.228.125.465.159.709.159.396 0 .791-.132 1.01-.351L17.398 12 5.589 0.351A1.42 1.42 0 004.579 0c-.244 0-.481.034-.709.159l-.06.033A1.043 1.043 0 003.319 1.13v.065c0 .261.109.503.29.684z" />
                    </svg>
                    {t("downloadGooglePlay")}
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-white/70">{t("appStoreVersionComingSoon")}</p>
            </div>
            <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src="/images/design-mode/122412430(1).jpg"
                alt="SSOT App Training in Action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contactFeedback")}</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t("contactDescription")}
          </p>
          <a
            href="mailto:ssot@aibrain.com"
            className="inline-flex items-center gap-3 text-lg font-semibold text-primary hover:text-primary/80 transition-colors px-6 py-3 rounded-xl hover:bg-primary/5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            ssot@aibrain.com
          </a>
        </div>
      </section>
    </main>
  )
}
