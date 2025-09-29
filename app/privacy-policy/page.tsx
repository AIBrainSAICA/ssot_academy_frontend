"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { SharedHeader } from "@/components/shared-header"
import { useState, useEffect } from "react"

export default function PrivacyPolicy() {
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
    { id: "preamble", title: "Preamble" },
    { id: "controller", title: "Controller" },
    { id: "overview", title: "Overview of Processing Operations" },
    { id: "legal-bases", title: "Legal Bases for the Processing" },
    { id: "security", title: "Security Precautions" },
    { id: "transmission", title: "Transmission of Personal Data" },
    { id: "third-countries", title: "Data Processing in Third Countries" },
    { id: "erasure", title: "Erasure of Data" },
    { id: "cookies", title: "Use of Cookies" },
    { id: "business-services", title: "Business Services" },
    { id: "web-hosting", title: "Provision of Online Services and Web Hosting" },
    { id: "contact-management", title: "Contact and Inquiry Management" },
    { id: "social-media", title: "Profiles in Social Networks (Social Media)" },
    { id: "changes", title: "Changes and Updates to the Privacy Policy" },
    { id: "rights", title: "Rights of Data Subjects" },
    { id: "terminology", title: "Terminology and Definitions" },
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
                  <nav className="space-y-2">
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
                  <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>

                  <p className="text-gray-600 mb-8">
                    <strong>Last updated:</strong> Sep 25, 2025
                  </p>

                  <div className="space-y-12">
                    <section id="preamble">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Preamble</h2>
                      <p className="text-gray-700 leading-relaxed">
                        With the following privacy policy we would like to inform you which types of your personal data
                        (hereinafter also abbreviated as "data") we process for which purposes and in which scope. The
                        privacy statement applies to all processing of personal data carried out by us, both in the
                        context of providing our services and in particular on our websites, in mobile applications and
                        within external online presences, such as our social media profiles (hereinafter collectively
                        referred to as "online services").
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-4">The terms used are not gender-specific.</p>
                    </section>

                    <section id="controller">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Controller</h2>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700 mb-2">
                          <strong>Superstars of Tomorrow Football Academy</strong>
                        </p>
                        <p className="text-gray-700 mb-2">1040 Noel Drive, Suite 100-B</p>
                        <p className="text-gray-700 mb-2">Menlo Park, CA 94025</p>
                        <p className="text-gray-700 mb-4">United States</p>

                        <p className="text-gray-700 mb-2">
                          <strong>Authorized Representatives:</strong>
                        </p>
                        <p className="text-gray-700 mb-4">Richard Shinn, CEO</p>

                        <p className="text-gray-700">
                          <strong>E-mail address:</strong> privacy@superstarstomorrow.com
                        </p>
                      </div>
                    </section>

                    <section id="overview">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Overview of Processing Operations</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        The following table summarises the types of data processed, the purposes for which they are
                        processed and the concerned data subjects.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-foreground">Categories of Processed Data</h3>
                          <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Inventory data (names, addresses, contact information)</li>
                            <li>Payment Data (billing information, transaction records)</li>
                            <li>Contact data (email addresses, phone numbers)</li>
                            <li>Content data (training videos, performance analysis)</li>
                            <li>Contract data (subscription details, service agreements)</li>
                            <li>Usage data (app interactions, feature usage)</li>
                            <li>Meta/communication data (device information, IP addresses)</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-foreground">Categories of Data Subjects</h3>
                          <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Prospective customers and trial users</li>
                            <li>Communication partners and inquirers</li>
                            <li>Active users and subscribers</li>
                            <li>Business and contractual partners</li>
                            <li>Parents and guardians (for minor participants)</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-foreground">Purposes of Processing</h3>
                          <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Provision of contractual services and customer support</li>
                            <li>Contact requests and communication management</li>
                            <li>Office and organisational procedures</li>
                            <li>Managing and responding to inquiries</li>
                            <li>Feedback collection and service improvement</li>
                            <li>Marketing and promotional activities</li>
                            <li>Provision of our online services and usability enhancement</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section id="legal-bases">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Legal Bases for the Processing</h2>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        In the following, you will find an overview of the legal basis of the GDPR on which we base the
                        processing of personal data. Please note that in addition to the provisions of the GDPR,
                        national data protection provisions of your or our country of residence or domicile may apply.
                      </p>

                      <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-foreground">
                            Performance of a contract and prior requests (Article 6 (1) (b) GDPR)
                          </h4>
                          <p className="text-gray-700 text-sm mt-1">
                            Processing necessary for the performance of a contract to which the data subject is party or
                            in order to take steps at the request of the data subject prior to entering into a contract.
                          </p>
                        </div>

                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-foreground">
                            Compliance with a legal obligation (Article 6 (1) (c) GDPR)
                          </h4>
                          <p className="text-gray-700 text-sm mt-1">
                            Processing is necessary for compliance with a legal obligation to which the controller is
                            subject.
                          </p>
                        </div>

                        <div className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold text-foreground">
                            Legitimate Interests (Article 6 (1) (f) GDPR)
                          </h4>
                          <p className="text-gray-700 text-sm mt-1">
                            Processing is necessary for the purposes of the legitimate interests pursued by the
                            controller or by a third party, except where such interests are overridden by the interests
                            or fundamental rights and freedoms of the data subject.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section id="security">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Security Precautions</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We take appropriate technical and organisational measures in accordance with the legal
                        requirements, taking into account the state of the art, the costs of implementation and the
                        nature, scope, context and purposes of processing as well as the risk of varying likelihood and
                        severity for the rights and freedoms of natural persons.
                      </p>

                      <p className="text-gray-700 leading-relaxed mb-4">
                        The measures include, in particular, safeguarding the confidentiality, integrity and
                        availability of data by controlling physical and electronic access to the data as well as access
                        to, input, transmission, securing and separation of the data.
                      </p>

                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">SSL Encryption (HTTPS)</h4>
                        <p className="text-blue-800 text-sm">
                          In order to protect your data transmitted via our online services in the best possible way, we
                          use SSL encryption. You can recognize such encrypted connections by the prefix https:// in the
                          address bar of your browser.
                        </p>
                      </div>
                    </section>

                    <section id="transmission">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Transmission of Personal Data</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        In the context of our processing of personal data, it may happen that the data is transferred to
                        other places, companies or persons or that it is disclosed to them. Recipients of this data may
                        include, for example, service providers commissioned with IT tasks or providers of services and
                        content that are embedded in a website.
                      </p>

                      <p className="text-gray-700 leading-relaxed">
                        In such a case, the legal requirements will be respected and in particular corresponding
                        contracts or agreements, which serve the protection of your data, will be concluded with the
                        recipients of your data.
                      </p>
                    </section>

                    <section id="third-countries">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Data Processing in Third Countries</h2>
                      <p className="text-gray-700 leading-relaxed">
                        If we process data in a third country (i.e. outside the European Union (EU), the European
                        Economic Area (EEA)) or the processing takes place in the context of the use of third party
                        services or disclosure or transfer of data to other persons, bodies or companies, this will only
                        take place in accordance with the legal requirements and with appropriate safeguards such as
                        standard contractual clauses or adequacy decisions.
                      </p>
                    </section>

                    <section id="erasure">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Erasure of Data</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The data processed by us will be erased in accordance with the statutory provisions as soon as
                        their processing is revoked or other permissions no longer apply (e.g. if the purpose of
                        processing this data no longer applies or they are not required for the purpose).
                      </p>

                      <p className="text-gray-700 leading-relaxed">
                        If the data is not deleted because they are required for other and legally permissible purposes,
                        their processing is limited to these purposes. This means that the data will be restricted and
                        not processed for other purposes.
                      </p>
                    </section>

                    <section id="cookies">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Use of Cookies</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Cookies are small text files or other data records that store information on end devices and
                        read information from the end devices. For example, to store the login status in a user account,
                        the contents of a shopping cart in an e-shop, the contents accessed or the functions used.
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Information on Consent</h4>
                          <p className="text-gray-700 text-sm">
                            We use cookies in accordance with the statutory provisions. Therefore, we obtain prior
                            consent from users, except when it is not required by law.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Retention Period</h4>
                          <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                            <li>
                              <strong>Temporary cookies (session cookies):</strong> Deleted when you close your browser
                            </li>
                            <li>
                              <strong>Permanent cookies:</strong> Remain stored for up to two years unless explicitly
                              deleted
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    <section id="business-services">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Business Services</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We process data of our contractual and business partners, e.g. customers and interested parties
                        (collectively referred to as "contractual partners") within the context of contractual and
                        comparable legal relationships as well as associated actions and communication.
                      </p>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Software and Platform Services</h4>
                        <p className="text-gray-700 text-sm mb-2">
                          We process the data of our users in order to provide them with our contractual services and on
                          the basis of legitimate interests to ensure the security of our offer and to develop it
                          further.
                        </p>
                        <p className="text-gray-700 text-sm">
                          <strong>Data retention:</strong> We delete the data after expiry of statutory warranty and
                          comparable obligations, typically after 4 years, unless required for legal archiving purposes.
                        </p>
                      </div>
                    </section>

                    <section id="web-hosting">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">
                        Provision of Online Services and Web Hosting
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        In order to provide our online services securely and efficiently, we use the services of web
                        hosting providers from whose servers the online services can be accessed. For these purposes, we
                        may use infrastructure and platform services, computing capacity, storage space and database
                        services.
                      </p>

                      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">Collection of Access Data and Log Files</h4>
                        <p className="text-yellow-800 text-sm">
                          We collect data on each access to the server (server log files) for security purposes and to
                          ensure optimal performance. Log file information is stored for a maximum period of 30 days and
                          then deleted or anonymized.
                        </p>
                      </div>
                    </section>

                    <section id="contact-management">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Contact and Inquiry Management</h2>
                      <p className="text-gray-700 leading-relaxed">
                        When contacting us (e.g. via contact form, e-mail, telephone or via social media) as well as in
                        the context of existing user and business relationships, the information of the inquiring
                        persons is processed to the extent necessary to respond to the contact requests and any
                        requested measures.
                      </p>
                    </section>

                    <section id="social-media">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">
                        Profiles in Social Networks (Social Media)
                      </h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        We maintain online presences within social networks and process user data in this context in
                        order to communicate with the users active there or to offer information about us.
                      </p>

                      <div className="space-y-3">
                        <div className="border border-gray-200 p-3 rounded">
                          <h5 className="font-medium text-foreground">Instagram</h5>
                          <p className="text-gray-600 text-sm">Social network operated by Instagram Inc.</p>
                        </div>
                        <div className="border border-gray-200 p-3 rounded">
                          <h5 className="font-medium text-foreground">Facebook</h5>
                          <p className="text-gray-600 text-sm">
                            Social network operated by Meta Platforms Ireland Limited
                          </p>
                        </div>
                        <div className="border border-gray-200 p-3 rounded">
                          <h5 className="font-medium text-foreground">LinkedIn</h5>
                          <p className="text-gray-600 text-sm">
                            Professional network operated by LinkedIn Ireland Unlimited Company
                          </p>
                        </div>
                      </div>
                    </section>

                    <section id="changes">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">
                        Changes and Updates to the Privacy Policy
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        We kindly ask you to inform yourself regularly about the contents of our data protection
                        declaration. We will adjust the privacy policy as changes in our data processing practices make
                        this necessary. We will inform you as soon as the changes require your cooperation (e.g.
                        consent) or other individual notification.
                      </p>
                    </section>

                    <section id="rights">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Rights of Data Subjects</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        As data subject, you are entitled to various rights under the GDPR, which arise in particular
                        from Articles 15 to 21 of the GDPR:
                      </p>

                      <div className="space-y-4">
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-foreground">Right to Object</h4>
                          <p className="text-gray-700 text-sm mt-1">
                            You have the right to object at any time to the processing of your personal data for direct
                            marketing purposes or based on legitimate interests.
                          </p>
                        </div>

                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-foreground">Right of Withdrawal for Consents</h4>
                          <p className="text-gray-700 text-sm mt-1">
                            You have the right to revoke consents at any time.
                          </p>
                        </div>

                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-foreground">Right of Access</h4>
                          <p className="text-gray-700 text-sm mt-1">
                            You have the right to request confirmation as to whether data concerning you is being
                            processed and to receive information about this data.
                          </p>
                        </div>

                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-foreground">Right to Rectification</h4>
                          <p className="text-gray-700 text-sm mt-1">
                            You have the right to request the completion or rectification of incorrect data concerning
                            you.
                          </p>
                        </div>

                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-foreground">Right to Erasure and Restriction</h4>
                          <p className="text-gray-700 text-sm mt-1">
                            You have the right to demand that relevant data be erased immediately or that processing be
                            restricted.
                          </p>
                        </div>

                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-foreground">Right to Data Portability</h4>
                          <p className="text-gray-700 text-sm mt-1">
                            You have the right to receive data concerning you in a structured, machine-readable format.
                          </p>
                        </div>

                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-foreground">Complaint to Supervisory Authority</h4>
                          <p className="text-gray-700 text-sm mt-1">
                            You have the right to lodge a complaint with a data protection supervisory authority.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section id="terminology">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Terminology and Definitions</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        This section provides an overview of the terms used in this privacy policy. Many of the terms
                        are drawn from the law and defined mainly in Article 4 GDPR.
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground">Controller</h4>
                          <p className="text-gray-700 text-sm">
                            "Controller" means the natural or legal person, public authority, agency or other body
                            which, alone or jointly with others, determines the purposes and means of the processing of
                            personal data.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground">Personal Data</h4>
                          <p className="text-gray-700 text-sm">
                            "Personal data" means any information relating to an identified or identifiable natural
                            person; an identifiable natural person is one who can be identified, directly or indirectly.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground">Processing</h4>
                          <p className="text-gray-700 text-sm">
                            The term "processing" covers a wide range and practically every handling of data, be it
                            collection, evaluation, storage, transmission or erasure.
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
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
              <Link href="/privacy-policy" className="text-gray-500 hover:underline text-xs font-medium">
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
