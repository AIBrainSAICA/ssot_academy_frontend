import Link from "next/link"
import Image from "next/image"
import { Download, Smartphone, Zap, BarChart3, Trophy, Target, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SharedHeader } from "@/components/shared-header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SharedHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background to-muted/20 py-16 md:py-24 overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side content */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                  <span className="text-foreground">Train Smarter.</span>{" "}
                  <span className="relative inline-block">
                    <span className="text-primary">Anywhere.</span>
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
                  AI-powered football training that works with just your smartphone's front camera — no extra hardware,
                  no setup.
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
                      Download on Google Play
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
                    App Store (Coming Soon)
                  </Button>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  MVP · Early Access
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What SSOT Does</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to train like a pro, right in your pocket
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Zap,
                  title: "Real-time AI Tracking",
                  description:
                    "Get instant feedback during drills. Our AI analyzes your movements as you train, no post-session waiting.",
                },
                {
                  icon: Target,
                  title: "On-screen Guidance",
                  description:
                    "Visual cues and instructions overlay on your camera view to guide you through every drill perfectly.",
                },
                {
                  icon: Trophy,
                  title: "Daily Challenges",
                  description:
                    "Personalized challenges keep you motivated and help you build consistency in your training routine.",
                },
                {
                  icon: BarChart3,
                  title: "Progress Tracking",
                  description:
                    "Track your performance history and see your improvement over time with detailed analytics.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-Only",
                  description:
                    "No uploads, no extra devices. Everything happens instantly on your phone using just the front camera.",
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
                  title: "Multiple Skills",
                  description:
                    "Train across various football skills from dribbling to shooting, not limited to one category.",
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why SSOT</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                What makes SSOT different from traditional training methods
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "100% Phone-Based",
                  description:
                    "No wearables, no sensors, no extra equipment. Just your smartphone and you're ready to train.",
                },
                {
                  title: "Instant In-Drill Feedback",
                  description:
                    "Get real-time corrections as you train, not hours later after uploading videos for review.",
                },
                {
                  title: "Multiple Football Skills",
                  description: "Train dribbling, shooting, passing, and more. Not limited to one skill category.",
                },
                {
                  title: "Personalized Progression",
                  description:
                    "Like having a digital coach that adapts to your skill level and creates custom training plans.",
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Who It's For</h2>
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
                <h3 className="text-2xl font-bold mb-4 text-center">Players</h3>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                  Download the SSOT Player App today and start training smarter
                </p>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.aibrain.ssot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="bg-primary hover:bg-primary/90 w-full h-12 text-base font-semibold shadow-md hover:shadow-lg transition-all">
                    <Download className="mr-2 h-5 w-5" />
                    Download Now
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
                <h3 className="text-2xl font-bold mb-4 text-center">Parents & Coaches</h3>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                  Academy Dashboard coming soon to track player progress
                </p>
                <Button variant="outline" disabled className="w-full h-12 text-base font-semibold bg-transparent">
                  Coming Soon
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
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Start Training Smarter</h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  Join thousands of players improving their skills with AI-powered training
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
                      Download on Google Play
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-white/70">App Store version coming soon</p>
              </div>
              <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                  src="https://www.ssot.football/images/design-mode/122412430.jpg"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact & Feedback</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Have questions or feedback? We'd love to hear from you.
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

      {/* Footer */}
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
              <p className="text-sm text-gray-500 mb-4">AI-powered football training app. Train smarter, anywhere.</p>
            </div>

            <div>
              <h3 className="text-base font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-500 hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-500 hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-500 hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold mb-3">Download</h3>
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
                  <span>Google Play</span>
                </Link>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 rounded-lg text-sm cursor-not-allowed">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span>App Store (Soon)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold mb-3">Contact</h3>
              <div className="text-sm text-gray-500 space-y-3">
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Email</p>
                  <a href="mailto:ssot@aibrain.com" className="text-primary hover:underline">
                    ssot@aibrain.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Global Offices</p>
                  <div className="space-y-1 text-xs">
                    <p>🇨🇭 Prilly, Switzerland</p>
                    <p>🇩🇪 Berlin, Germany</p>
                    <p>🇺🇸 Menlo Park, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Superstars of Tomorrow. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-500 hover:underline text-xs">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
