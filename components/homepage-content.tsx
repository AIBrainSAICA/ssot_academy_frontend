"use client"

import Link from "next/link"
import { ArrowRight, BarChart3, Check, Download, Gauge, Sparkles, Target, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.aibrain.ssot"
const appStoreUrl = "https://apps.apple.com/us/app/ssot-ai-football-training/id6756636923"

const homepageCopy = {
  en: { coach: "SSOT · Your Personal AI Coach", heroTitle: "Discover Your Super-Self,|Develop Your Super-Talent.", hero: "Understand the player you are becoming.", heroBody: "Train with your Personal AI Coach, turn practice into measurable football evidence, and connect with an AI-augmented Human Coach who helps you improve what matters next.", start: "Start Training", how: "See How SSOT Works", download: "Download SSOT and start with one phone.", downloadSub: "Real-time AI tracking · Player Passport · AI Coach · measurable development.", triadLabel: "Major Value Proposition · Triadic Co-Evolutionary Learning", triadTitle: "Beyond AI Coaching. Beyond Human Coaching.", triadLead: "The Player, AI Coach and AI-Augmented Human Coach evolve together.", triadBody: "Each contributes a different intelligence, learns from the same outcome, and improves the next development cycle.", journeyLabel: "Your Football Intelligence Journey", journeyTitle: "Train. Understand. Improve. Prove. Advance.", journeyBody: "Every useful session should move you toward a development goal—not just generate another score.", passportLabel: "Your Development Identity", passportTitle: "Build a Player Passport that grows with you.", passportBody: "Your Player Passport turns isolated scores into a portable, permissioned view of your football development, connected to the Player Twin that powers your AI Coach.", pathLabel: "One Player · One Continuous Journey", pathTitle: "Your development evidence should grow with you.", pathBody: "SSOT is the Player experience of the Global AI Football Platform. Your identity and permissioned Player Twin can connect training, coaching and future football opportunities without forcing you to start over.", ctaLabel: "Download App", ctaTitle: "Discover the player you can become.", ctaBody: "Start with one phone. Build your Player Twin. Train with your Personal AI Coach.", feedback: "Have feedback?", feedbackBody: "We'd love to hear from you." },
  es: { coach: "SSOT · Tu entrenador personal de IA", heroTitle: "Descubre tu Super-Ser,|Desarrolla tu Super-Talento.", hero: "Comprende el jugador en el que te estás convirtiendo.", heroBody: "Entrena con tu Entrenador Personal de IA, convierte la práctica en evidencia futbolística medible y conecta con un Entrenador Humano Aumentado por IA que te ayuda a mejorar lo que importa.", start: "Empezar a entrenar", how: "Descubre cómo funciona SSOT", download: "Descarga SSOT y empieza con un solo teléfono.", downloadSub: "Seguimiento de IA en tiempo real · Pasaporte del jugador · Entrenador IA · desarrollo medible.", triadLabel: "Propuesta de valor · Aprendizaje triádico coevolutivo", triadTitle: "Más allá del entrenamiento con IA. Más allá del entrenamiento humano.", triadLead: "El jugador, el entrenador IA y el entrenador humano aumentado por IA evolucionan juntos.", triadBody: "Cada uno aporta una inteligencia diferente, aprende del mismo resultado y mejora el siguiente ciclo de desarrollo.", journeyLabel: "Tu viaje de inteligencia futbolística", journeyTitle: "Entrena. Comprende. Mejora. Demuestra. Avanza.", journeyBody: "Cada sesión útil debe acercarte a un objetivo de desarrollo, no solo generar otra puntuación.", passportLabel: "Tu identidad de desarrollo", passportTitle: "Construye un Pasaporte del Jugador que crezca contigo.", passportBody: "Tu Pasaporte del Jugador convierte puntuaciones aisladas en una visión portátil y autorizada de tu desarrollo futbolístico, conectada a tu Gemelo del Jugador.", pathLabel: "Un jugador · Un viaje continuo", pathTitle: "Tu evidencia de desarrollo debe crecer contigo.", pathBody: "SSOT es la experiencia del jugador de la Plataforma Global de Fútbol con IA. Tu identidad y Gemelo del Jugador autorizado pueden conectar entrenamiento, coaching y oportunidades futuras.", ctaLabel: "Descarga la app", ctaTitle: "Descubre el jugador que puedes llegar a ser.", ctaBody: "Empieza con un teléfono. Construye tu Gemelo del Jugador. Entrena con tu Entrenador Personal de IA.", feedback: "¿Tienes comentarios?", feedbackBody: "Nos encantaría escucharte." },
  pt: { coach: "SSOT · Seu Treinador Pessoal de IA", heroTitle: "Descubra o seu Super-Eu,|Desenvolva o seu Super-Talento.", hero: "Entenda o jogador que você está se tornando.", heroBody: "Treine com seu Treinador Pessoal de IA, transforme a prática em evidências mensuráveis de futebol e conecte-se a um Treinador Humano Aumentado por IA que ajuda você a melhorar o que importa.", start: "Começar a treinar", how: "Veja como o SSOT funciona", download: "Baixe o SSOT e comece com um telefone.", downloadSub: "Acompanhamento de IA em tempo real · Passaporte do jogador · Treinador IA · desenvolvimento mensurável.", triadLabel: "Proposta de valor · Aprendizagem triádica coevolutiva", triadTitle: "Além do treinamento com IA. Além do treinamento humano.", triadLead: "O jogador, o treinador IA e o treinador humano aumentado por IA evoluem juntos.", triadBody: "Cada um contribui com uma inteligência diferente, aprende com o mesmo resultado e melhora o próximo ciclo de desenvolvimento.", journeyLabel: "Sua jornada de inteligência futebolística", journeyTitle: "Treine. Entenda. Melhore. Comprove. Avance.", journeyBody: "Cada sessão útil deve levar você a uma meta de desenvolvimento, não apenas gerar outra pontuação.", passportLabel: "Sua identidade de desenvolvimento", passportTitle: "Crie um Passaporte do Jogador que cresça com você.", passportBody: "Seu Passaporte do Jogador transforma pontuações isoladas em uma visão portátil e autorizada do seu desenvolvimento no futebol.", pathLabel: "Um jogador · Uma jornada contínua", pathTitle: "Suas evidências de desenvolvimento devem crescer com você.", pathBody: "O SSOT é a experiência do jogador da Plataforma Global de Futebol com IA. Sua identidade e seu Gêmeo do Jogador podem conectar treino, coaching e oportunidades futuras.", ctaLabel: "Baixe o app", ctaTitle: "Descubra o jogador que você pode se tornar.", ctaBody: "Comece com um telefone. Construa seu Gêmeo do Jogador. Treine com seu Treinador Pessoal de IA.", feedback: "Tem algum feedback?", feedbackBody: "Adoraríamos ouvir você." },
} as const

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
  const { language } = useLanguage()
  const c = homepageCopy[language]

  return (
    <main className="flex-1 bg-background text-foreground">
      <section className="border-b border-border py-12 md:py-16">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.03fr_.97fr] lg:gap-12">
          <div className="flex flex-col items-start gap-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">{c.coach}</p>
            <h1 className="max-w-3xl whitespace-pre-line text-balance text-5xl font-black leading-[.98] tracking-[-0.055em] md:text-7xl">{c.heroTitle.split("|").map((line) => <span key={line} className="block">{line}</span>)}</h1>
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground md:text-lg"><strong className="text-foreground">{c.hero}</strong> {c.heroBody}</p>
            <div className="flex flex-wrap gap-3"><Button size="lg" asChild className="bg-primary font-bold text-primary-foreground hover:bg-primary/90"><Link href={googlePlayUrl} target="_blank" rel="noopener noreferrer">{c.start}</Link></Button><Button size="lg" asChild variant="outline" className="font-bold"><Link href="#how">{c.how}</Link></Button></div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground"><span><b className="text-foreground">One smartphone</b> to start</span><span><b className="text-foreground">5 essential drills</b></span><span><b className="text-foreground">Player Digital Twin</b></span><span><b className="text-foreground">Human + AI coaching</b></span></div>
          </div>
          <div className="overflow-hidden rounded-3xl bg-secondary shadow-xl">
            <img
              src="/images/player-passport-v1.png"
              alt="AI-augmented human coach and Player Passport preview"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="download" className="border-b border-border py-7"><div className="container flex flex-col items-start justify-between gap-5 md:flex-row md:items-center"><div><h2 className="text-xl font-black">{c.download}</h2><p className="text-xs text-muted-foreground">{c.downloadSub}</p></div><StoreButtons /></div></section>

      <section id="how" className="bg-muted/40 py-16 md:py-20"><div className="container"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[.14em] text-primary">{c.triadLabel}</p><h2 className="mt-2 text-balance text-3xl font-black tracking-tight md:text-5xl">{c.triadTitle}</h2><p className="mt-3 font-bold">{c.triadLead}</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{c.triadBody}</p></div><div className="mt-8 grid gap-3 md:grid-cols-3"><Role tone="bg-primary" label="01 · HUMAN LEARNER" title="PLAYER" text="Sets goals, trains, experiences the intervention, responds emotionally and physically, and creates the development outcome." learn="What works best for me?" /><Role tone="bg-secondary" label="02 · MACHINE LEARNER" title="AI COACH" text="Observes evidence, remembers longitudinal context, proposes the next action and updates recommendations from outcomes." learn="When and how should I help?" /><Role tone="bg-accent" label="03 · HUMAN INTELLIGENCE" title="AI-AUGMENTED HUMAN COACH" text="Adds context, empathy, football judgment and motivation; accepts, modifies or rejects AI advice and explains why." learn="Which judgment helps which player?" /></div><div className="mt-3 rounded-xl border border-border bg-background p-4 text-center"><b className="text-xs">ONE EVIDENCE-BASED CO-EVOLUTION CYCLE</b><div className="mt-3 flex flex-wrap justify-center gap-2 text-[10px] font-bold">{["Player Goal & Context", "AI Observes", "AI Proposes", "Human Judges", "Train", "Player Responds", "Outcome Evidence", "All Three Learn", "Better Next Cycle"].map((item) => <span key={item} className="rounded-full bg-muted px-3 py-2">{item}</span>)}</div></div></div></section>

      <section id="skills" className="py-16 md:py-20"><div className="container"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-black uppercase tracking-[.18em] text-primary">{c.journeyLabel}</p><h2 className="mt-2 text-3xl font-black md:text-5xl">{c.journeyTitle}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{c.journeyBody}</p></div><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{cards.map(([title, text]) => <article key={title} className="rounded-xl border border-border bg-background p-4"><b className="text-sm">{title}</b><p className="mt-2 text-xs leading-5 text-muted-foreground">{text}</p></article>)}</div></div></section>

      <section id="passport" className="bg-muted/40 py-16 md:py-20"><div className="container grid items-center gap-8 lg:grid-cols-[.9fr_1.1fr]"><div className="overflow-hidden rounded-3xl bg-background shadow-lg"><img src="/images/mid-section.png" alt="SSOT AI Player Passport showing Gabriel Ferreira's verified football development identity" className="h-auto w-full object-cover" /></div><div><p className="text-xs font-black uppercase tracking-[.18em] text-primary">{c.passportLabel}</p><h2 className="mt-2 text-3xl font-black md:text-4xl">{c.passportTitle}</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">{c.passportBody}</p><ul className="mt-4 grid gap-2 text-sm">{["Age- and skill-specific rankings", "Five-drill and Football Intelligence evidence", "Progress and longitudinal development", "Verified evidence and confidence", "Permissioned sharing with trusted stakeholders"].map((item) => <li key={item} className="flex items-center gap-2"><Check className="text-primary" />{item}</li>)}</ul><Button asChild className="mt-6 bg-primary font-bold text-primary-foreground hover:bg-primary/90"><Link href="#download">Build My Player Passport <ArrowRight data-icon="inline-end" /></Link></Button></div></div></section>

      <section id="path" className="bg-secondary py-16 text-secondary-foreground md:py-20"><div className="container"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-black uppercase tracking-[.18em] text-primary">{c.pathLabel}</p><h2 className="mt-2 text-3xl font-black md:text-5xl">{c.pathTitle}</h2><p className="mt-4 text-sm leading-6 text-secondary-foreground/75">{c.pathBody}</p></div><div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">{[["1 · Discover", "Baseline + goals"], ["2 · Develop", "Personalized training"], ["3 · Prove", "Verified evidence"], ["4 · Connect", "Human coach + trusted network"], ["5 · Advance", "Next development opportunity"]].map(([title, text]) => <div key={title} className="rounded-xl border border-secondary-foreground/15 bg-secondary-foreground/10 p-4"><b className="text-sm">{title}</b><span className="mt-2 block text-xs text-secondary-foreground/70">{text}</span></div>)}</div></div></section>

      <section className="py-14 text-center"><div className="container"><p className="text-xs font-black uppercase tracking-[.18em] text-primary">{c.ctaLabel}</p><h2 className="mt-2 text-3xl font-black md:text-4xl">{c.ctaTitle}</h2><p className="mt-3 text-sm text-muted-foreground">{c.ctaBody}</p><div className="mt-6"><StoreButtons centered /></div></div></section>
      <section id="contact" className="border-t border-border py-10 text-center"><div className="container"><h2 className="text-2xl font-black">{c.feedback}</h2><p className="mt-2 text-sm text-muted-foreground">{c.feedbackBody}</p><a href="mailto:ssot@aibrain.com" className="mt-3 inline-block font-bold text-primary hover:underline">ssot@aibrain.com</a></div></section>
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
