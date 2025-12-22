import Link from "next/link"
import Image from "next/image"
import { Target, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SharedHeader } from "@/components/shared-header"

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">
      <SharedHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-white">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  About <span className="text-primary">Superstars of Tomorrow</span>
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We're revolutionizing football training with AI technology that works with just your smartphone. No
                  wearables, no sensors, no complicated setup — just intelligent, real-time feedback that helps players
                  train smarter, anywhere.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Founded by passionate football enthusiasts and technology experts, our mission is to make
                  professional-level training accessible to every player, regardless of location or resources.
                </p>
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
                <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To democratize elite football training by providing AI-powered, real-time coaching through a simple
                  smartphone app. We believe every player deserves access to professional-level feedback, regardless of
                  their location or resources.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To become the global standard for AI-powered sports training, creating a world where every aspiring
                  athlete has access to intelligent, personalized coaching that adapts to their unique needs and helps
                  them achieve their full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Superstars of Tomorrow was born from a simple observation: talented players around the world lack access
                to quality, real-time coaching feedback. Traditional training methods require expensive equipment,
                professional coaches, or complex video analysis that takes hours.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our founders, combining decades of experience in professional football and cutting-edge AI technology,
                set out to solve this problem. By leveraging computer vision and machine learning that runs directly on
                smartphones, we've created an app that provides instant, professional-level feedback using just your
                phone's front camera.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we're proud to serve thousands of players with our MVP early access program, helping them improve
                their skills through personalized daily challenges, real-time tracking, and intelligent progress
                analysis — all without any extra hardware.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What Makes Us Different</h2>
            <div className="bg-primary/5 rounded-xl p-8 mb-8 max-w-4xl mx-auto">
              <p className="text-center text-gray-700 leading-relaxed text-lg">
                Our drills are formulated together with professional club and academy coaches across Europe, ensuring
                you're training with methods used by the world's best teams.
              </p>
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
                <h3 className="text-lg font-bold mb-2 text-foreground">Mobile-First</h3>
                <p className="text-gray-600 text-sm">
                  No wearables, sensors, or uploads. Everything happens instantly on your phone using computer vision.
                </p>
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
                <h3 className="text-lg font-bold mb-2 text-foreground">Real-Time Feedback</h3>
                <p className="text-gray-600 text-sm">
                  Get instant corrections during drills, not hours later. Our AI analyzes your form as you train.
                </p>
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
                <h3 className="text-lg font-bold mb-2 text-foreground">Personalized Training</h3>
                <p className="text-gray-600 text-sm">
                  Adaptive daily challenges and progress tracking that adjusts to your skill level and goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Global Presence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Switzerland Office */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-foreground">Switzerland Office</h3>
                <p className="text-sm text-primary font-semibold mb-4">European Headquarters</p>
                <address className="text-gray-600 not-italic text-sm leading-relaxed">
                  Rte des Flumeaux 42
                  <br />
                  Prilly Vaud, Suisse
                </address>
              </div>

              {/* German Office */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-foreground">German Office</h3>
                <p className="text-sm text-primary font-semibold mb-4">Central European Operations</p>
                <address className="text-gray-600 not-italic text-sm leading-relaxed">
                  Bismarckstraße 10-12
                  <br />
                  10625 Berlin, Germany
                </address>
              </div>

              {/* US Office */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-foreground">US Office</h3>
                <p className="text-sm text-primary font-semibold mb-4">North American Headquarters</p>
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">Join the Revolution</h2>
            <p className="text-lg text-gray-600 mb-8">
              Download SSOT today and experience the future of football training
            </p>
            <Link
              href="https://play.google.com/store/apps/details?id=com.aibrain.ssot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Download on Google Play
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-4">MVP · Early Access | App Store Coming Soon</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-black py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/images/ssot-logo-horizontal.png"
                alt="Superstars of Tomorrow Logo"
                width={180}
                height={40}
                className="h-auto"
              />
            </div>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-gray-500 hover:underline text-xs">
                Privacy Policy
              </Link>
              <Link href="/#contact" className="text-gray-500 hover:underline text-xs">
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-4 pt-4 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Superstars of Tomorrow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
