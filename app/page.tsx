import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Phone, MapPin, LogIn, UserX, Lock, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo image */}
            <Image
              src="/images/ssot-logo.png"
              alt="Superstars of Tomorrow Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Superstars of Tomorrow</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium hover:text-primary transition-colors">
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
              </button>
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
            <Link href="#coach-section" className="text-sm font-medium hover:text-primary transition-colors">
              For Coaches
            </Link>
            <Link href="#footer-contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="https://old-quail-54.telebit.io/login" passHref>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5">
                <LogIn className="h-4 w-4 mr-1" />
                Login
              </Button>
            </Link>

            <Link href="https://old-quail-54.telebit.io/register" passHref>
              <Button className="bg-primary hover:bg-primary/90">Register Now</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with primary color */}
        <section className="relative bg-background">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=250&width=1200')] bg-cover bg-center opacity-0 z-0" />
          <div className="container relative z-10 py-6 md:py-10 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
              {/* Left side content */}
              <div>
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                    <span className="text-foreground">Join</span>{" "}
                    <span className="relative inline-block text-primary">
                      SUPERSTARS
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary shadow-glow-red"></span>
                    </span>{" "}
                    <span className="text-foreground">of Tomorrow</span>
                  </h1>
                  <h2 className="text-xl md:text-2xl font-bold text-primary/90 mt-2 italic">
                    An AI-Powered Football Academy
                  </h2>
                </div>

                <p className="mt-4 text-lg text-foreground leading-relaxed font-semibold">
                  <span className="text-primary font-extrabold">AI-powered motion analysis</span> for instant skill
                  improvement and faster development.
                </p>

                <div className="mt-8">
                  <Link href="https://old-quail-54.telebit.io/register" passHref>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
                      Start Free Trial <ChevronRight className="ml-1 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right side visualization - keep this unchanged */}
              <div className="relative h-[150px] md:h-[250px] rounded-xl overflow-hidden shadow-lg">
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

        <section id="programs" className="py-8 md:py-10 bg-background border-t border-gray-200">
          <div className="container text-center max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              <span className="text-black">Why Players Struggle</span> —{" "}
              <span className="text-primary">and How We Solve It</span>
            </h2>

            <div className="grid gap-10 md:grid-cols-3">
              {/* Foundation Stage */}
              <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow text-left flex flex-col h-full">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <TrendingDown className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black text-center mb-2">Foundation Stage</h3>
                <p className="text-center text-black mb-2 text-lg font-bold">Age Group: 6–10</p>

                <div className="mb-4 text-center">
                  <div className="inline-block bg-red-50 text-foreground text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    X Slow, Unclear Progress
                  </div>
                  <p className="text-md font-medium text-foreground text-center">
                    <span className="text-primary font-semibold">✔ Weekly plans</span> with clear, trackable goals.
                  </p>
                </div>

                <p className="text-md text-center text-foreground/80 mb-6">
                  Fun introduction to football fundamentals.
                </p>

                <div className="text-center mt-auto space-y-2">
                  <div className="flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-green-100 flex items-center justify-center mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3 h-3 text-green-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-green-700">Try core skills for free</span>
                  </div>
                  <p className="text-xl font-bold mb-2">$99/month</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Link href="/programs/foundation-stage" passHref>
                      <Button className="w-full" variant="outline" size="sm">
                        Learn More
                      </Button>
                    </Link>
                    <Link href="https://old-quail-54.telebit.io/register?plan=free&program=foundation" passHref>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="sm">
                        Start Free
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Youth Development */}
              <div className="bg-white p-6 rounded-xl border ring-2 ring-primary shadow-md hover:shadow-lg transition-shadow text-left flex flex-col h-full">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <UserX className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black text-center mb-2">Youth Development</h3>
                <p className="text-center text-black mb-2 text-lg font-bold">Age Group: 11–15</p>

                <div className="flex flex-col items-center mb-4">
                  <div className="inline-block bg-red-50 text-foreground text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    X No Personalized Feedback
                  </div>
                  <p className="text-md font-medium text-foreground text-center">
                    <span className="text-primary font-semibold">✔ Instant AI feedback</span> to correct mistakes early.
                  </p>
                </div>

                <p className="text-md text-center text-foreground/80 mb-6">
                  Advanced training with full AI motion analysis.
                </p>

                <div className="text-center mt-auto space-y-2">
                  <div className="flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-green-100 flex items-center justify-center mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3 h-3 text-green-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-green-700">Free access to essential training</span>
                  </div>
                  <p className="text-xl font-bold mb-2">$149/month</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Link href="/programs/youth-development" passHref>
                      <Button className="w-full" variant="outline" size="sm">
                        Learn More
                      </Button>
                    </Link>
                    <Link href="https://old-quail-54.telebit.io/register?plan=free&program=youth" passHref>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="sm">
                        Start Free
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Elite Pathway */}
              <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow text-left flex flex-col h-full">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black text-center mb-2">Elite Pathway</h3>
                <p className="text-center text-black mb-2 text-lg font-bold">Age Group: 16–20</p>

                <div className="mb-4 text-center">
                  <div className="inline-block bg-red-50 text-foreground text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    X Limited Coaching Access
                  </div>
                  <p className="text-md font-medium text-foreground text-center">
                    <span className="text-primary font-semibold">✔ 24/7 access</span> to expert and AI guidance.
                  </p>
                </div>

                <p className="text-md text-center text-foreground/80 mb-6">
                  Professional-level preparation with AI coaching.
                </p>

                <div className="text-center mt-auto space-y-2">
                  <div className="flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-green-100 flex items-center justify-center mr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3 h-3 text-green-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-green-700">Experience advanced training free</span>
                  </div>
                  <p className="text-xl font-bold mb-2">$199/month</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Link href="/programs/elite-pathway" passHref>
                      <Button className="w-full" variant="outline" size="sm">
                        Learn More
                      </Button>
                    </Link>
                    <Link href="https://old-quail-54.telebit.io/register?plan=free&program=elite" passHref>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="sm">
                        Start Free
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coach Section */}
        <section id="coach-section" className="py-8 md:py-10 bg-white border-t border-gray-200">
          <div className="container max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="https://cdn-images.understood.org/p0qf7j048i0q/A1A4FD34640145DD82F6F7BB101114BA/5d2adb12e3b0aa7627823ae3bec2a156/122412430.jpg?w=1200&q=75&h=630&fm=jpg"
                    alt="Football coach working with players"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-left">
                  <span className="text-black">Shaping Tomorrow's Stars</span> —{" "}
                  <span className="text-primary">Your Role as a Coach</span>
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Guide Player Growth</h3>
                      <p className="text-sm text-gray-600">
                        Stay in touch and monitor player development in real time.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Deliver Feedback</h3>
                      <p className="text-sm text-gray-600">
                        Give sharp, actionable insights powered by your expertise.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Coach on Your Terms</h3>
                      <p className="text-sm text-gray-600">Work when and where you want — on your schedule.</p>
                    </div>
                  </div>
                </div>

                <Link href="/coach-application" passHref>
                  <Button className="bg-primary hover:bg-primary/90 text-white">Join as Coach</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-6 md:py-8" style={{ backgroundColor: "#FEF2F2" }}>
          <div className="container text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to Start Your Journey?</h2>
            <p className="mt-3 text-base text-gray-700 max-w-2xl mx-auto">
              Join <span className="font-bold text-primary">Superstars of Tomorrow</span> and develop the champions of
              tomorrow.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="https://old-quail-54.telebit.io/register" passHref>
                <Button size="lg" className="bg-white text-primary border border-primary hover:bg-gray-100">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-black py-4">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Image
                  src="/images/ssot-logo.png"
                  alt="Superstars of Tomorrow Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-lg font-bold">Superstars of Tomorrow</span>
              </div>
              <p className="text-sm text-gray-500">
                AI-powered football academy developing the next generation of talent.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold mb-3">Quick Links</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#features" className="text-gray-500 hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="text-gray-500 hover:underline">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-500 hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold mb-3">Programs</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:underline">
                    Junior Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:underline">
                    Elite Academy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:underline">
                    Pro Pathway
                  </Link>
                </li>
              </ul>
            </div>

            <div id="footer-contact">
              <h3 className="text-base font-bold mb-3">Contact Us</h3>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm">Phone</h3>
                  <p className="text-sm text-gray-500">+1 (650) 267-4314</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm">Location</h3>
                  <p className="text-sm text-gray-500">1040 Noel Drive, Suite 100-B, Menlo Park, CA 94025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Superstars of Tomorrow. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <Link href="#" className="text-gray-500 hover:underline text-xs">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:underline text-xs">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:underline text-xs">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
