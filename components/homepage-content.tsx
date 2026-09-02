"use client"

import Link from "next/link"
import { ArrowRight, BarChart3, Check, Download, Gauge, Sparkles, Target, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.aibrain.ssot"
const appStoreUrl = "https://apps.apple.com/us/app/ssot-ai-football-training/id6756636923"

function StoreButtons({ centered = false }: { centered?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
      <Link href={googlePlayUrl} target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="bg-primary font-bold text-primary-foreground hover:bg-primary/90">
          <Download data-icon="inline-start" /> Get it on Google Play
        </Button>
      </Link>
      <Link href={appStoreUrl} target="_blank" rel="noopener noreferrer">
        <Button size="lg" variant="outline" className="font-bold">Download on the App Store</Button>
      </Link>
    </div>
  )
}

const cards = [
  ["Train anywhere", "Start with one phone and structured football drills."],
  ["Build five essentials", "Juggling, Dribbling, Shooting, Passing and First Touch."],
  ["Understand why", "AI explains strengths, weaknesses and the next development priority."],
  ["Build your Player Twin", "Track longitudinal evidence, goals, learning response and progress."],
  ["Connect opportunity", "With consent, verified evidence can support coach, academy and pathway decisions."],
]

export function HomepageContent() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <section className="border-b border-border py-12 md:py-16">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.03fr_.97fr] lg:gap-12">
          <div className="flex flex-col items-start gap-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">SSOT · Your Personal AI Coach</p>
            <h1 className="max-w-3xl text-balance text-5xl font-black leading-[.98] tracking-[-0.055em] md:text-7xl">Discover Your <span className="text-primary">Super-Self,</span><br />Develop Your <span className="text-primary">Super-Talent.</span></h1>
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground md:text-lg"><strong className="text-foreground">Understand the player you are becoming.</strong> Train with your Personal AI Coach, turn practice into measurable football evidence, and connect with an AI-augmented Human Coach who helps you improve what matters next.</p>
            <div className="flex flex-wrap gap-3"><Button size="lg" asChild className="bg-primary font-bold text-primary-foreground hover:bg-primary/90"><Link href={googlePlayUrl} target="_blank" rel="noopener noreferrer">Start Training</Link></Button><Button size="lg" asChild variant="outline" className="font-bold"><Link href="#how">See How SSOT Works</Link></Button></div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground"><span><b className="text-foreground">One smartphone</b> to start</span><span><b className="text-foreground">5 essential drills</b></span><span><b className="text-foreground">Player Digital Twin</b></span><span><b className="text-foreground">Human + AI coaching</b></span></div>
          </div>
          <div className="grid min-h-[410px] items-center gap-3 overflow-hidden rounded-3xl bg-secondary p-5 shadow-xl sm:grid-cols-[.92fr_1.08fr]">
            <div className="relative h-[330px] rounded-2xl bg-primary p-5 text-primary-foreground shadow-lg"><p className="text-[10px] font-black tracking-wider">SSOT · AI PLAYER PASSPORT</p><div className="mt-7 flex items-center gap-3"><div className="grid size-14 place-items-center rounded-xl border border-primary-foreground/50 bg-primary-foreground/10 text-xl font-black">GF</div><div><p className="text-[9px]">U14 · FORWARD · VERIFIED</p><h3 className="text-lg font-black">Gabriel Ferreira</h3><span className="rounded-full bg-primary-foreground/15 px-2 py-1 text-[8px] font-bold">PLAYER TWIN · ACTIVE</span></div></div><div className="absolute bottom-4 left-4 right-4 grid grid-cols-4 rounded-xl bg-background p-3 text-foreground"><div><small className="text-[8px] text-muted-foreground">DRI</small><b className="block text-lg">49</b></div><div><small className="text-[8px] text-muted-foreground">JUG</small><b className="block text-lg">99</b></div><div><small className="text-[8px] text-muted-foreground">PAS</small><b className="block text-lg">83</b></div><div><small className="text-[8px] text-muted-foreground">TOTAL</small><b className="block text-lg">82</b></div></div></div>
            <div className="rounded-2xl bg-background p-5 text-foreground shadow-lg"><p className="text-[9px] font-black tracking-wider text-primary">TODAY&apos;S DEVELOPMENT FOCUS</p><h3 className="mt-2 text-xl font-black">Close control at speed</h3><p className="mt-2 text-xs leading-5 text-muted-foreground"><b>Why:</b> Dribbling is currently your largest development gap. Passing and first-touch are stronger.</p><div className="mt-4 flex flex-col gap-3 text-xs"><p><b>1 · 12 min</b><span className="block text-muted-foreground">close-control progression</span></p><p><b>2 · 6 reps</b><span className="block text-muted-foreground">change of direction</span></p><p><b>3 · Re-test</b><span className="block text-muted-foreground">same evidence standard</span></p></div><div className="mt-4 border-l-2 border-secondary bg-muted p-3 text-[10px] leading-4 text-muted-foreground"><b className="text-secondary-foreground">PERSONAL AI COACH</b> “Keep the task challenging but controllable.”</div></div>
          </div>
        </div>
      </section>

      <section id="download" className="border-b border-border py-7"><div className="container flex flex-col items-start justify-between gap-5 md:flex-row md:items-center"><div><h2 className="text-xl font-black">Download SSOT and start with one phone.</h2><p className="text-xs text-muted-foreground">Real-time AI tracking · Player Passport · AI Coach · measurable development.</p></div><StoreButtons /></div></section>

      <section id="how" className="bg-muted/40 py-16 md:py-20"><div className="container"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[.14em] text-primary">Major Value Proposition · Triadic Co-Evolutionary Learning</p><h2 className="mt-2 text-balance text-3xl font-black tracking-tight md:text-5xl">Beyond AI Coaching. Beyond Human Coaching.</h2><p className="mt-3 font-bold">The Player, AI Coach and AI-Augmented Human Coach evolve together.</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Each contributes a different intelligence, learns from the same outcome, and improves the next development cycle.</p></div><div className="mt-8 grid gap-3 md:grid-cols-3"><Role tone="bg-primary" label="01 · HUMAN LEARNER" title="PLAYER" text="Sets goals, trains, experiences the intervention, responds emotionally and physically, and creates the development outcome." learn="What works best for me?" /><Role tone="bg-secondary" label="02 · MACHINE LEARNER" title="AI COACH" text="Observes evidence, remembers longitudinal context, proposes the next action and updates recommendations from outcomes." learn="When and how should I help?" /><Role tone="bg-accent" label="03 · HUMAN INTELLIGENCE" title="AI-AUGMENTED HUMAN COACH" text="Adds context, empathy, football judgment and motivation; accepts, modifies or rejects AI advice and explains why." learn="Which judgment helps which player?" /></div><div className="mt-3 rounded-xl border border-border bg-background p-4 text-center"><b className="text-xs">ONE EVIDENCE-BASED CO-EVOLUTION CYCLE</b><div className="mt-3 flex flex-wrap justify-center gap-2 text-[10px] font-bold">{["Player Goal & Context", "AI Observes", "AI Proposes", "Human Judges", "Train", "Player Responds", "Outcome Evidence", "All Three Learn", "Better Next Cycle"].map((item) => <span key={item} className="rounded-full bg-muted px-3 py-2">{item}</span>)}</div></div></div></section>

      <section id="skills" className="py-16 md:py-20"><div className="container"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-black uppercase tracking-[.18em] text-primary">Your Football Intelligence Journey</p><h2 className="mt-2 text-3xl font-black md:text-5xl">Train. Understand. Improve. Prove. Advance.</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Every useful session should move you toward a development goal—not just generate another score.</p></div><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{cards.map(([title, text]) => <article key={title} className="rounded-xl border border-border bg-background p-4"><b className="text-sm">{title}</b><p className="mt-2 text-xs leading-5 text-muted-foreground">{text}</p></article>)}</div></div></section>

      <section id="passport" className="bg-muted/40 py-16 md:py-20"><div className="container grid items-center gap-8 lg:grid-cols-[.9fr_1.1fr]"><div className="relative h-64 rounded-3xl bg-primary p-6 text-primary-foreground shadow-lg"><p className="text-[10px] font-black">SSOT · AI PLAYER PASSPORT</p><h3 className="mt-8 text-3xl font-black">Gabriel Ferreira</h3><p className="text-xs">U14 · Forward · Verified Development Identity</p><div className="absolute bottom-4 left-4 right-4 grid grid-cols-4 rounded-xl bg-background p-3 text-foreground">{[["DRI", "49"], ["JUG", "99"], ["PAS", "83"], ["TOTAL", "82"]].map(([label, value]) => <div key={label}><small className="text-[8px] text-muted-foreground">{label}</small><b className="block text-lg">{value}</b></div>)}</div></div><div><p className="text-xs font-black uppercase tracking-[.18em] text-primary">Your Development Identity</p><h2 className="mt-2 text-3xl font-black md:text-4xl">Build a Player Passport that grows with you.</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">Your Player Passport turns isolated scores into a portable, permissioned view of your football development, connected to the Player Twin that powers your AI Coach.</p><ul className="mt-4 grid gap-2 text-sm">{["Age- and skill-specific rankings", "Five-drill and Football Intelligence evidence", "Progress and longitudinal development", "Verified evidence and confidence", "Permissioned sharing with trusted stakeholders"].map((item) => <li key={item} className="flex items-center gap-2"><Check className="text-primary" />{item}</li>)}</ul><Button asChild className="mt-6 bg-primary font-bold text-primary-foreground hover:bg-primary/90"><Link href="#download">Build My Player Passport <ArrowRight data-icon="inline-end" /></Link></Button></div></div></section>

      <section id="path" className="bg-secondary py-16 text-secondary-foreground md:py-20"><div className="container"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[.18em] text-primary">One Player · One Continuous Journey</p><h2 className="mt-2 text-3xl font-black md:text-5xl">Your development evidence should grow with you.</h2><p className="mt-4 text-sm leading-6 text-secondary-foreground/75">SSOT is the Player experience of the Global AI Football Platform. Your identity and permissioned Player Twin can connect training, coaching and future football opportunities without forcing you to start over.</p></div><div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">{[["1 · Discover", "Baseline + goals"], ["2 · Develop", "Personalized training"], ["3 · Prove", "Verified evidence"], ["4 · Connect", "Human coach + trusted network"], ["5 · Advance", "Next development opportunity"]].map(([title, text]) => <div key={title} className="rounded-xl border border-secondary-foreground/15 bg-secondary-foreground/10 p-4"><b className="text-sm">{title}</b><span className="mt-2 block text-xs text-secondary-foreground/70">{text}</span></div>)}</div></div></section>

      <section className="py-14 text-center"><div className="container"><p className="text-xs font-black uppercase tracking-[.18em] text-primary">Download App</p><h2 className="mt-2 text-3xl font-black md:text-4xl">Discover the player you can become.</h2><p className="mt-3 text-sm text-muted-foreground">Start with one phone. Build your Player Twin. Train with your Personal AI Coach.</p><div className="mt-6"><StoreButtons centered /></div></div></section>
      <section id="contact" className="border-t border-border py-10 text-center"><div className="container"><h2 className="text-2xl font-black">Have feedback?</h2><p className="mt-2 text-sm text-muted-foreground">We&apos;d love to hear from you.</p><a href="mailto:ssot@aibrain.com" className="mt-3 inline-block font-bold text-primary hover:underline">ssot@aibrain.com</a></div></section>
    </main>
  )
}

function Role({ tone, label, title, text, learn }: { tone: string; label: string; title: string; text: string; learn: string }) {
  const isPrimary = tone === "bg-primary"
  const textTone = isPrimary ? "text-primary-foreground" : "text-foreground"
  const borderTone = isPrimary ? "border-primary-foreground/25" : "border-foreground/20"

  return (
    <article className={`min-h-48 rounded-2xl p-5 ${textTone} ${tone}`}>
      <p className="text-[9px] font-black opacity-75">{label}</p>
      <h3 className="mt-2 text-lg font-black">{title}</h3>
      <p className="mt-2 text-xs leading-5 opacity-90">{text}</p>
      <p className={`mt-5 border-t ${borderTone} pt-3 text-[10px] font-bold`}>LEARNS → {learn}</p>
    </article>
  )
}
