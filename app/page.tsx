import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Mail, Phone, MapPin, LogIn, UserX, Lock, TrendingDown } from "lucide-react"
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
              src="https://saiva003.mycafe24.com/wp-content/uploads/2025/03/Logo_aBL_Top.webp"
              alt="Augmented Brain Labs Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Superstars of Tomorrow</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#programs" className="text-sm font-medium hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
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
          <div className="container relative z-10 py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  <span className="text-foreground">Become a</span>{" "}
                  <span className="relative inline-block text-primary">
                    SUPERSTAR
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary shadow-glow-red"></span>
                  </span>{" "}
                  <span className="text-foreground">of Tomorrow</span>
                </h1>

                <p className="mt-6 text-lg text-foreground leading-relaxed font-semibold">
                  <span className="text-primary font-extrabold">Develop 3x faster</span> with AI-powered personalized
                  training.
                </p>

                <ul className="mt-4 list-disc pl-6 space-y-2 text-base text-foreground/80">
                  <li>
                    <span className="text-primary font-semibold">Personalized weekly goals</span> for steady progress.
                  </li>
                  <li>
                    <span className="text-primary font-semibold">AI-powered motion analysis</span> for instant
                    improvement.
                  </li>
                  <li>
                    <span className="text-primary font-semibold">24/7 expert and AI coaching</span> for continuous
                    support.
                  </li>
                </ul>

                <div className="mt-8">
                  <Link href="https://old-quail-54.telebit.io/login" passHref>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
                      Start Your Journey <ChevronRight className="ml-1 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right side visualization - keep this unchanged */}
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
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

        <section id="programs" className="py-12 md:py-16 bg-background border-t border-gray-200">
          <div className="container text-center max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">
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

                <div className="text-center mt-auto">
                  <p className="text-xl font-bold mb-2">$99/month</p>
                  <Button className="w-full" variant="outline" size="sm">
                    <Link href="/programs/foundation-stage">Learn More</Link>
                  </Button>
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

                <div className="text-center mt-auto">
                  <p className="text-xl font-bold mb-2">$149/month</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="sm">
                    <Link href="/programs/youth-development">Learn More</Link>
                  </Button>
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

                <div className="text-center mt-auto">
                  <p className="text-xl font-bold mb-2">$199/month</p>
                  <Button className="w-full" variant="outline" size="sm">
                    <Link href="/programs/elite-pathway">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-14" style={{ backgroundColor: "#FEF2F2" }}>
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
      <footer className="bg-white text-black py-8">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Image
                  src="https://saiva003.mycafe24.com/wp-content/uploads/2025/03/Logo_aBL_Top.webp"
                  alt="Augmented Brain Labs Logo"
                  width={32}
                  height={32}
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

            <div>
              <h3 className="text-base font-bold mb-3">Contact Us</h3>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm">Email</h3>
                  <p className="text-sm text-gray-500">info@superstarsoftomorrow.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm">Phone</h3>
                  <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm">Location</h3>
                  <p className="text-sm text-gray-500">123 Sports Complex Drive, Football City</p>
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
