import Link from "next/link"
import Image from "next/image"
import { Users, Target, Award, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SharedHeader } from "@/components/shared-header"

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">
      <SharedHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-primary/5 to-white">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  About <span className="text-primary">Superstars of Tomorrow</span>
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We help professional and youth players become the{" "}
                  <strong className="text-primary">superstars of tomorrow</strong> through cutting-edge AI-powered
                  training and analysis, making elite-level coaching accessible to players of all ages and skill levels
                  around the world.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Founded by passionate football enthusiasts and technology experts, our mission is to democratize elite
                  football training and help every player reach their full potential through innovative AI technology.
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
        <section className="py-8 md:py-12 bg-white">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary/5 p-8 rounded-xl">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To transform professional and youth players into the <strong>superstars of tomorrow</strong> through
                  innovative AI-powered training and analysis technology that provides instant, personalized feedback
                  and accelerates skill development, regardless of location or background.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To become the global leader in AI-powered sports training, creating a world where every aspiring
                  athlete has access to professional-level coaching and the tools they need to achieve their dreams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Superstars of Tomorrow was born from a simple observation: talented young players around the world lack
                access to quality coaching and personalized feedback that could help them become the next generation of
                football superstars. Traditional football academies are expensive, geographically limited, and often
                have long waiting lists.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our founders, combining decades of experience in professional football and cutting-edge AI technology,
                set out to solve this problem. By leveraging computer vision, machine learning, and motion analysis,
                we've created a platform that can analyze a player's technique in real-time and provide the same level
                of detailed feedback that was previously only available to elite athletes, helping shape the{" "}
                <strong>superstars of tomorrow</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we're proud to serve thousands of players across three continents, helping them improve their
                skills, build confidence, and pursue their football dreams with the support of both AI-powered analysis
                and experienced human coaches.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What Makes Us Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">AI-Powered Analysis</h3>
                <p className="text-gray-600">
                  Advanced computer vision technology analyzes every movement, providing instant feedback on technique,
                  form, and performance.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Expert Coaches</h3>
                <p className="text-gray-600">
                  UEFA-licensed coaches and former professional players provide personalized guidance and mentorship to
                  complement our AI analysis.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Proven Results</h3>
                <p className="text-gray-600">
                  Our players show measurable improvement in skill development, with 85% achieving their training goals
                  within the first 3 months.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-8 md:py-12 bg-primary/5">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Our Global Presence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-2 text-primary">Switzerland Office</h3>
                  <p className="text-sm text-gray-600 mb-2">European Headquarters</p>
                  <p className="text-xs text-gray-500">
                    Rte des Flumeaux 42
                    <br />
                    Prilly Vaud, Suisse
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-2 text-primary">German Office</h3>
                  <p className="text-sm text-gray-600 mb-2">Central European Operations</p>
                  <p className="text-xs text-gray-500">
                    Bismarckstraße 10-12
                    <br />
                    10625 Berlin, Germany
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-2 text-primary">US Office</h3>
                  <p className="text-sm text-gray-600 mb-2">North American Headquarters</p>
                  <p className="text-xs text-gray-500">
                    1040 Noel Drive, Suite 100-B
                    <br />
                    Menlo Park, CA 94025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Join Our Community</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to become one of the <strong>superstars of tomorrow</strong>? Join thousands of players who are
              already improving their skills with our AI-powered training and analysis platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="http://3.129.44.216:5001/register" passHref>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/programs/foundation-stage" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  View Programs
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-black py-4 border-t">
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
              <Link href="#" className="text-gray-500 hover:underline text-xs">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:underline text-xs">
                Cookie Policy
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
