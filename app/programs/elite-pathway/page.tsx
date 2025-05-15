"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ElitePathway() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/images/ssot-logo-horizontal.png"
              alt="Superstars of Tomorrow Logo"
              width={220}
              height={50}
              className="h-auto"
            />
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
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold"
                  >
                    Elite Pathway (16-20)
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/#coach-section" className="text-sm font-medium hover:text-primary transition-colors">
              For Coaches
            </Link>
            <Link href="/#footer-contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="https://old-quail-54.telebit.io/login" passHref>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5">
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
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-red-50 to-white py-6 md:py-10">
          <div className="container">
            <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="md:w-1/2">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 mb-4">
                  <Lock className="h-4 w-4 mr-2" />
                  Ages 16–20
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Elite Pathway</h1>
                <p className="text-lg text-gray-700 mb-6">
                  Our most advanced program designed for serious players with professional aspirations. Comprehensive AI
                  analysis, professional coaching, and elite competition prepare you for the highest levels.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Register Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Schedule a Trial
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://simplifaster.com/wp-content/uploads/2021/11/Youth-Soccer-Training-1024x536.jpg"
                    alt="Elite football players in training"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-8 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-6">Skills Development Roadmap</h2>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Skill</TableHead>
                    <TableHead>Difficulty Level</TableHead>
                    <TableHead>Time to Master (Approx.)</TableHead>
                    <TableHead className="text-right">AI-Powered Training</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Shuttle Sprint (2-Cones)</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Medium
                      </Badge>
                    </TableCell>
                    <TableCell>21–30 days (4–5 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        View Demo <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Box Drill (4 Cones)</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Medium
                      </Badge>
                    </TableCell>
                    <TableCell>21–30 days (4–5 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        View Demo <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-green-50/50">
                    <TableCell className="font-medium">
                      Slalom Dribble
                      <div className="inline-flex items-center ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Free Plan
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        High
                      </Badge>
                    </TableCell>
                    <TableCell>60–75 days (9–11 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        View Demo <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Dribbling with Feint</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        High
                      </Badge>
                    </TableCell>
                    <TableCell>60–75 days (9–11 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        View Demo <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Targeted Shooting</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                        High
                      </Badge>
                    </TableCell>
                    <TableCell>90–120 days (13–17 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        View Demo <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="py-8 bg-red-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Pro-Level Analysis</h3>
                <p className="text-gray-600">
                  Advanced AI motion capture and analysis used by professional clubs to perfect technique.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-600"
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
                <h3 className="text-xl font-bold mb-2">Elite Coaching</h3>
                <p className="text-gray-600">Access to UEFA-licensed coaches with professional playing experience.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Pathway to Pro</h3>
                <p className="text-gray-600">
                  Connections to professional clubs, college scouts, and scholarship opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 bg-white">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Reach Your Full Potential</h2>
            <p className="text-lg text-gray-600 mb-4">
              Join our Elite Pathway program and get the professional-level training and exposure needed to reach the
              highest levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Schedule a Trial
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Limited spots available. Monthly fee: $199/month</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-black py-4 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <Image
                src="/images/ssot-logo-horizontal.png"
                alt="Superstars of Tomorrow Logo"
                width={180}
                height={40}
                className="h-auto"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-base font-bold mb-3">Quick Links</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/" className="text-gray-500 hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/#programs" className="text-gray-500 hover:underline">
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link href="/#coach-section" className="text-gray-500 hover:underline">
                      For Coaches
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold mb-3">Programs</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="/programs/foundation-stage" className="text-gray-500 hover:underline">
                      Foundation Stage (6-10)
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs/youth-development" className="text-gray-500 hover:underline">
                      Youth Development (11-15)
                    </Link>
                  </li>
                  <li>
                    <Link href="/programs/elite-pathway" className="text-gray-500 hover:underline font-medium">
                      Elite Pathway (16-20)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-6 pt-4 text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Superstars of Tomorrow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
