"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, TrendingDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { VideoModal } from "@/components/video-modal"

export default function FoundationStage() {

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
          <div className="flex items-center gap-2">
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
            <Link href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/#programs" className="text-sm font-medium hover:text-primary transition-colors">
              Programs
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
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
        <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-20">
          <div className="container">
            <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
                  <TrendingDown className="h-4 w-4 mr-2" />
                  Ages 6–10
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Foundation Stage</h1>
                <p className="text-lg text-gray-700 mb-6">
                  The perfect starting point for young players to develop fundamental football skills in a fun,
                  supportive environment. Our AI-powered training helps children build confidence and fall in love with
                  the game.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Register Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Schedule a Trial
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://cdn.prod.website-files.com/64cc9ac785b381c4bb455d20/6523fd4986922b4ded7a47ce_blog-1-header.webp"
                    alt="Young children playing football"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Skills Development Roadmap</h2>

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
                    <TableCell className="font-medium">Toe Taps</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Low
                      </Badge>
                    </TableCell>
                    <TableCell>10–14 days (2–3 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-green-600 hover:text-green-700 hover:bg-green-50"
                      >
                        View Demo <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Step Over</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Low
                      </Badge>
                    </TableCell>
                    <TableCell>14–21 days (3–4 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-green-600 hover:text-green-700 hover:bg-green-50"
                      >
                        View Demo <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Inside Foot Passing</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Low
                      </Badge>
                    </TableCell>
                    <TableCell>14–21 days (3–4 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-green-600 hover:text-green-700 hover:bg-green-50"
                      >
                        View Demo <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Dribbling (Basic)</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Low
                      </Badge>
                    </TableCell>
                    <TableCell>14–21 days (3–4 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-green-600 hover:text-green-700 hover:bg-green-50"
                      >
                        View Demo <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Juggling (Basic)</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Medium
                      </Badge>
                    </TableCell>
                    <TableCell>30–45 days (6–7 weeks)</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-green-600 hover:text-green-700 hover:bg-green-50"
                        onClick={() => openVideoModal("Juggling (Basic)", "https://streamable.com/e/m61pti")}
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
        <section className="py-16 bg-green-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fun-First Approach</h3>
                <p className="text-gray-600">
                  Engaging, game-based training sessions that keep young players motivated and excited about learning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
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
                <h3 className="text-xl font-bold mb-2">Safe Environment</h3>
                <p className="text-gray-600">
                  Age-appropriate training with certified coaches in a supportive atmosphere that builds confidence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Measurable Progress</h3>
                <p className="text-gray-600">
                  AI-powered tracking shows parents and players clear development milestones and achievements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Their Journey?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Give your child the perfect foundation for a lifetime of football enjoyment and skill development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Schedule a Trial
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Limited spots available. Monthly fee: $99/month</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-black py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="https://saiva003.mycafe24.com/wp-content/uploads/2025/03/Logo_aBL_Top.webp"
                alt="Augmented Brain Labs Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-lg font-bold">Superstars of Tomorrow</span>
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
