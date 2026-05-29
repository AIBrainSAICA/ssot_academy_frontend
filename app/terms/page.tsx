"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { useState, useEffect } from "react"

export default function TermsOfUse() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let currentSection = ""

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const tableOfContents = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "eligibility", title: "2. Eligibility and Minors" },
    { id: "accounts", title: "3. Accounts" },
    { id: "subscription", title: "4. SSOT Pro Subscription" },
    { id: "health", title: "5. Health, Fitness, and Safety" },
    { id: "camera", title: "6. Camera and Recording" },
    { id: "ai-features", title: "7. AI Features" },
    { id: "user-content", title: "8. User Content" },
    { id: "acceptable-use", title: "9. Acceptable Use" },
    { id: "advertising", title: "10. Advertising" },
    { id: "intellectual-property", title: "11. Intellectual Property" },
    { id: "third-party", title: "12. Third-Party Services" },
    { id: "disclaimers", title: "13. Disclaimers" },
    { id: "liability", title: "14. Limitation of Liability" },
    { id: "termination", title: "15. Termination" },
    { id: "changes", title: "16. Changes to These Terms" },
    { id: "governing-law", title: "17. Governing Law" },
    { id: "contact", title: "18. Contact" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SharedHeader />

      <main className="flex-1">
        <section className="py-8 md:py-12 bg-background">
          <div className="container max-w-7xl mx-auto">
            <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Table of Contents - Sticky Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white border rounded-lg p-6 shadow-sm">
                  <h2 className="text-lg font-semibold mb-4 text-foreground">Table of Contents</h2>
                  <nav className="space-y-2 max-h-[70vh] overflow-y-auto">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left text-sm py-2 px-3 rounded transition-colors ${
                          activeSection === item.id
                            ? "bg-primary text-white"
                            : "text-gray-600 hover:text-primary hover:bg-gray-50"
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Use</h1>

                  <p className="text-gray-600 mb-8">
                    <strong>Last updated:</strong> May 29, 2026
                  </p>

                  <div className="space-y-12">
                    <section id="acceptance">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
                      <p className="text-gray-700 leading-relaxed">
                        These Terms of Use (&quot;Terms&quot;) govern your access to and use of the SSOT (SuperStars of Tomorrow) 
                        mobile application and related services (&quot;App,&quot; &quot;Service&quot;), operated by AIBRAIN INC. 
                        (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;). By downloading, accessing, or using the App, you agree to be bound by 
                        these Terms. If you do not agree, do not use the App.
                      </p>
                    </section>

                    <section id="eligibility">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">2. Eligibility and Minors</h2>
                      <p className="text-gray-700 leading-relaxed">
                        The App is intended for football/soccer training. Users under the age of 18 must have permission 
                        from a parent or legal guardian to use the App, and a parent or guardian must agree to these Terms 
                        on their behalf. By using the App, you represent that you meet these requirements. We do not 
                        knowingly collect personal information from children except as permitted by applicable law and as 
                        described in our Privacy Policy.
                      </p>
                    </section>

                    <section id="accounts">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">3. Accounts</h2>
                      <p className="text-gray-700 leading-relaxed">
                        You may use the App as a guest or create an account using email, Google, or Apple sign-in. You are 
                        responsible for maintaining the confidentiality of your account credentials and for all activity 
                        under your account. You agree to provide accurate information and to keep it up to date.
                      </p>
                    </section>

                    <section id="subscription">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">4. SSOT Pro Subscription</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        The App offers an auto-renewing subscription called <strong>SSOT Pro</strong>, which unlocks AI Coach 
                        chat, per-session AI insights, and other premium features.
                      </p>

                      <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-foreground">Billing</h4>
                          <p className="text-gray-700 text-sm mt-1">
                            Payment is charged to your Apple App Store or Google Play account at confirmation of purchase.
                          </p>
                        </div>

                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-foreground">Auto-renewal</h4>
                          <p className="text-gray-700 text-sm mt-1">
                            The subscription automatically renews unless auto-renew is turned off at least 24 hours before 
                            the end of the current period. Your account will be charged for renewal within 24 hours prior 
                            to the end of the current period, at the price of the selected plan.
                          </p>
                        </div>

                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-foreground">Price and period</h4>
                          <p className="text-gray-700 text-sm mt-1">
                            The subscription price and billing period (e.g., monthly) are shown in the App at the time of 
                            purchase and may vary by region.
                          </p>
                        </div>

                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-foreground">Free trial</h4>
                          <p className="text-gray-700 text-sm mt-1">
                            If a free trial is offered, any unused portion of a free trial is forfeited when you purchase 
                            a subscription, where applicable.
                          </p>
                        </div>

                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-foreground">Managing and canceling</h4>
                          <p className="text-gray-700 text-sm mt-1">
                            You can manage or cancel your subscription in your App Store account settings (iOS) or Google 
                            Play account settings (Android) after purchase. Deleting the App does not cancel your subscription.
                          </p>
                        </div>

                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-foreground">Refunds</h4>
                          <p className="text-gray-700 text-sm mt-1">
                            Purchases are handled by Apple or Google and are subject to their respective refund policies. 
                            We do not directly process payments or refunds for in-app subscriptions.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section id="health">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">5. Health, Fitness, and Safety Disclaimer</h2>
                      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-4">
                        <p className="text-amber-900 font-semibold">
                          The App provides physical training drills and activities. You participate at your own risk.
                        </p>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Consult a physician before beginning any exercise program. Ensure you have a safe, clear space 
                        free of hazards before performing any drill. Stop immediately if you feel pain, dizziness, or 
                        discomfort. We are not responsible for any injury, loss, or damage resulting from your use of 
                        the App or participation in any drill. The App&apos;s guidance, scores, and AI feedback are for 
                        informational and entertainment purposes only and are not professional coaching, medical, or 
                        health advice.
                      </p>
                    </section>

                    <section id="camera">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">6. Camera and Recording</h2>
                      <p className="text-gray-700 leading-relaxed">
                        Certain features require access to your device camera to detect body and ball movement during 
                        drills. Camera processing for drill detection runs on your device. If you enable recording, 
                        drill footage may be uploaded to our cloud storage to support features such as your training 
                        history. You are responsible for ensuring you have the right to record any person or location 
                        captured.
                      </p>
                    </section>

                    <section id="ai-features">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">7. AI Features</h2>
                      <p className="text-gray-700 leading-relaxed">
                        The App includes AI-powered coaching features that generate summaries, recommendations, and chat 
                        responses using third-party AI services. AI output may be inaccurate or incomplete and should not 
                        be relied upon as professional advice. We do not guarantee the accuracy, completeness, or usefulness 
                        of any AI-generated content.
                      </p>
                    </section>

                    <section id="user-content">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">8. User Content</h2>
                      <p className="text-gray-700 leading-relaxed">
                        You retain ownership of content you submit (such as profile photos and drill recordings). By 
                        submitting content, you grant us a non-exclusive, worldwide, royalty-free license to host, store, 
                        and display it solely to operate and provide the Service. You are solely responsible for your 
                        content and must not submit anything unlawful, infringing, or offensive.
                      </p>
                    </section>

                    <section id="acceptable-use">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">9. Acceptable Use</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Misuse, reverse-engineer, or attempt to gain unauthorized access to the App</li>
                        <li>Use the App for any unlawful purpose</li>
                        <li>Interfere with the App&apos;s operation or security</li>
                        <li>Upload malicious code</li>
                        <li>Infringe the rights of others</li>
                      </ul>
                    </section>

                    <section id="advertising">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">10. Advertising</h2>
                      <p className="text-gray-700 leading-relaxed">
                        The App may display advertising, including rewarded ads. Ads are provided by third-party networks 
                        subject to their own terms and privacy practices.
                      </p>
                    </section>

                    <section id="intellectual-property">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">11. Intellectual Property</h2>
                      <p className="text-gray-700 leading-relaxed">
                        The App, including its software, design, logos, drills, and content (excluding your user content), 
                        is owned by AIBRAIN INC. or its licensors and is protected by intellectual property laws. You may 
                        not copy, modify, distribute, or create derivative works without our prior written permission.
                      </p>
                    </section>

                    <section id="third-party">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">12. Third-Party Services</h2>
                      <p className="text-gray-700 leading-relaxed">
                        The App integrates third-party services including Apple, Google, Firebase, RevenueCat, and AI 
                        providers. Your use of those services may be subject to their respective terms and privacy 
                        policies. We are not responsible for third-party services.
                      </p>
                    </section>

                    <section id="disclaimers">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">13. Disclaimers</h2>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-gray-700 leading-relaxed uppercase text-sm">
                          THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR 
                          IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND 
                          NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
                        </p>
                      </div>
                    </section>

                    <section id="liability">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">14. Limitation of Liability</h2>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="text-gray-700 leading-relaxed uppercase text-sm">
                          TO THE MAXIMUM EXTENT PERMITTED BY LAW, AIBRAIN INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR 
                          GOODWILL, ARISING FROM YOUR USE OF THE APP. OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED 
                          THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
                        </p>
                      </div>
                    </section>

                    <section id="termination">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">15. Termination</h2>
                      <p className="text-gray-700 leading-relaxed">
                        We may suspend or terminate your access to the App at any time if you violate these Terms. You 
                        may stop using the App at any time. Provisions that by their nature should survive termination 
                        will survive.
                      </p>
                    </section>

                    <section id="changes">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">16. Changes to These Terms</h2>
                      <p className="text-gray-700 leading-relaxed">
                        We may update these Terms from time to time. We will post the updated Terms with a revised 
                        &quot;Last updated&quot; date. Your continued use of the App after changes take effect constitutes 
                        acceptance of the revised Terms.
                      </p>
                    </section>

                    <section id="governing-law">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">17. Governing Law</h2>
                      <p className="text-gray-700 leading-relaxed">
                        These Terms are governed by the laws of the State of Delaware, USA, without regard to 
                        conflict-of-laws principles.
                      </p>
                    </section>

                    <section id="contact">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">18. Contact</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        For questions about these Terms, contact us at:
                      </p>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700">
                          <strong>Email:</strong>{" "}
                          <a href="mailto:support@ssot.football" className="text-primary hover:underline">
                            support@ssot.football
                          </a>
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
