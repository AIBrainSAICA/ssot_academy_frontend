"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, UserX, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { VideoModal } from "@/components/video-modal"

export default function YouthDevelopment() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState({
    title: "",
    url: "",
  })

  const openVideoModal = (title: string, url: string) => {
    setCurrentVideo({ title, url })
    setVideoModalOpen(true)
  }

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
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold"
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
        <section className="bg-gradient-to-b from-yellow-50 to-white py-6 md:py-10">
          <div className="container">
            <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="md:w-1/2">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 mb-4">
                  <UserX className="h-4 w-4 mr-2" />
                  Ages 11–15
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Youth Development</h1>
                <p className="text-lg text-gray-700 mb-6">
                  Take your game to the next level with our advanced training program designed specifically for
                  developing players. Our AI-powered analysis provides personalized feedback to accelerate skill
                  development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                    Register Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50">
                    Schedule a Trial
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.newyorkredbulls.com/image/private/t_photogallery/f_auto/mls-rbny-prd/fyqjj1fo274wapt8k8gk.jpg"
                    alt="Youth players in training"
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
                    <TableCell className="font-medium">Sprint (20 Meter)</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Low
                      </Badge>
                    </TableCell>
                    <TableCell>7–10 days (1–2 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                        onClick={() => openVideoModal("Sprint (20 Meter)", "https://streamable.com/e/m61pti")}
                      >
                        View Demo <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Single-Leg Hops (Ladder)</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Medium
                      </Badge>
                    </TableCell>
                    <TableCell>14–21 days (3–4 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                        onClick={() => openVideoModal("Single-Leg Hops (Ladder)", "https://streamable.com/e/m61pti")}
                      >
                        View Demo <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Dribbling with Zigzag</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Medium
                      </Badge>
                    </TableCell>
                    <TableCell>21–30 days (4–5 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                        onClick={() => openVideoModal("Dribbling with Zigzag", "https://streamable.com/e/m61pti")}
                      >
                        View Demo <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Wall Passing</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Medium
                      </Badge>
                    </TableCell>
                    <TableCell>21–30 days (4–5 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                        onClick={() => openVideoModal("Wall Passing", "https://streamable.com/e/m61pti")}
                      >
                        View Demo <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-green-50/50">
                    <TableCell className="font-medium">
                      Juggling (Continuous)
                      <div className="inline-flex items-center ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Free Plan
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Medium
                      </Badge>
                    </TableCell>
                    <TableCell>60–90 days (9–13 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50"
                        onClick={() => openVideoModal("Juggling (Continuous)", "https://streamable.com/e/m61pti")}
                      >
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
        <section className="py-8 bg-yellow-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Feedback</h3>
                <p className="text-gray-600">
                  AI analysis of every training session provides detailed feedback on technique and performance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Accelerated Learning</h3>
                <p className="text-gray-600">
                  Targeted drills and exercises designed to rapidly improve specific skills and techniques.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-600"
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
                <h3 className="text-xl font-bold mb-2">Team Integration</h3>
                <p className="text-gray-600">
                  Regular small-sided games and team activities to apply individual skills in match situations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 bg-white">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Take Your Game to the Next Level</h2>
            <p className="text-lg text-gray-600 mb-4">
              Join our Youth Development program and receive personalized AI coaching to accelerate your football
              development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50">
                Schedule a Trial
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Limited spots available. Monthly fee: $149/month</p>
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
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Superstars of Tomorrow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        title={currentVideo.title}
        videoUrl={currentVideo.url}
      />
    </div>
  )
}
