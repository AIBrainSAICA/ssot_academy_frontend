"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Check, Download, Gauge, Sparkles, Target, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.aibrain.ssot"
const appStoreUrl = "https://apps.apple.com/us/app/ssot-ai-football-training/id6756636923"

function StoreButtons({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
        <Button size={compact ? "default" : "lg"} className="w-full bg-primary px-6 font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 sm:w-auto">
          <Download data-icon="inline-start" />
          {t("downloadGooglePlay")}
        </Button>
      </Link>
      <Link href={appStoreUrl} target="_blank" rel="noopener noreferrer">
        <Button size={compact ? "default" : "lg"} variant="outline" className="w-full bg-transparent px-6 font-semibold sm:w-auto">
          {t("downloadAppStore")}
        </Button>
      </Link>
    </div>
  )
}

export function HomepageContent() {
  const { t } = useLanguage()

  const pillars = [
    { icon: Target, title: "The Player", description: "Build self-awareness through purposeful sessions, clear goals, and a record of how your game is developing." },
    { icon: Sparkles, title: "The Personal AI Coach", description: "Get immediate, personal feedback that turns every practice into a smarter next step." },
    { icon: Trophy, title: "The AI-Augmented Human Coach", description: "Bring meaningful football evidence to the coach who understands where you want to go." },
  ]

  const journey = [
    { icon: Gauge, title: "Train", text: "Complete focused drills with nothing more than your phone." },
    { icon: BarChart3, title: "Measure", text: "Turn movement, consistency, and progress into football evidence." },
    { icon: ArrowRight, title: "Improve", text: "Know what matters next and keep building your game." },
  ]

  return (
    <main className="flex-1 bg-background">
      <section className="border-b border-border bg-muted/20 py-16 md:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col items-start gap-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              {t("mvpEarlyAccess")}
            </div>
            <h1 className="max-w-3xl text-balance text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              <span className="text-foreground">{t("discoverYour")}</span>{" "}
              <span className="text-primary">{t("superSelf")}</span>{" "}
              <span className="text-foreground">{t("developYour")}</span>{" "}
              <span className="text-primary">{t("superTalent")}</span>
            </h1>
            <p className="max-w-xl text-pretty text-base leading-7 text-muted-foreground md:text-lg">
              <strong className="font-semibold text-foreground">Understand the player you are becoming.</strong>{" "}
              Train with your <strong className="font-semibold text-foreground">Personal AI Coach</strong>, turn practice into{" "}
              <strong className="font-semibold text-foreground">measurable football evidence</strong>, and connect with an{" "}
              <strong className="font-semibold text-foreground">AI-augmented Human Coach</strong> who helps you improve what matters next.
            </p>
            <StoreButtons />
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            <Image src="/images/design-mode/122412430(1).jpg" alt="Player training with the SSOT app" width={900} height={650} className="aspect-[4/3] object-cover" priority />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/60 bg-background/90 p-4 backdrop-blur-sm">
              <p className="text-sm font-semibold text-foreground">One phone. A clearer path.</p>
              <p className="text-sm leading-6 text-muted-foreground">Train anywhere and see your development take shape.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">The SSOT system</p>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">{t("whatSsotDoes")}</h2>
            <p className="mt-4 text-pretty text-lg leading-7 text-muted-foreground">{t("whatSsotDoesSubtitle")}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><pillar.icon /></div>
                <h3 className="text-xl font-bold">{pillar.title}</h3>
                <p className="leading-7 text-muted-foreground">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/20 py-20 md:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">From practice to proof</p>
            <h2 className="max-w-xl text-balance text-3xl font-bold tracking-tight md:text-5xl">Football intelligence that grows with you.</h2>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">Every session gives you more than a score. It helps you understand your strengths, spot the next opportunity, and make better decisions about your development.</p>
            <div className="mt-8 flex flex-col gap-4">
              {journey.map((step) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><step.icon /></div>
                  <div><h3 className="font-bold">{step.title}</h3><p className="mt-1 leading-6 text-muted-foreground">{step.text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Your Player Passport</p>
            <h3 className="mt-4 text-2xl font-bold">A living record of your football journey.</h3>
            <p className="mt-4 leading-7 text-muted-foreground">Your training history, achievements, and progress become a portable picture of the player you are becoming — ready to guide your next session and your next conversation.</p>
            <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6">
              {["Personal progress history", "Evidence from real training", "A sharper next step"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold"><Check className="text-primary" />{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">Your development path</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">Keep moving toward what matters next.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">Start with your phone. Build a habit. Use the evidence to make every decision about your football more intentional.</p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-left sm:grid-cols-3">
            {["Discover your Super-Self", "Develop your Super-Talent", "Connect with the right coach"].map((item, index) => <div key={item} className="rounded-2xl border border-border bg-card p-5"><span className="text-sm font-bold text-primary">0{index + 1}</span><p className="mt-3 font-bold">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl"><h2 className="text-balance text-3xl font-bold md:text-5xl">{t("startTrainingSmarter")}</h2><p className="mt-4 text-lg leading-7 text-primary-foreground/80">{t("ctaDescription")}</p></div>
          <StoreButtons compact />
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container text-center"><h2 className="text-3xl font-bold">{t("contactFeedback")}</h2><p className="mt-3 text-muted-foreground">{t("contactDescription")}</p><a href="mailto:ssot@aibrain.com" className="mt-5 inline-block font-semibold text-primary hover:underline">ssot@aibrain.com</a></div>
      </section>
    </main>
  )
}
