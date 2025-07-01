import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-[#fffaf5]" id="top">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Auckland Med Tutor respects the privacy of our students and clients. This policy outlines how we collect,
                        use, and protect your personal information.
                    </p>
                </div>

                <Card className="shadow-lg">
                    <CardContent className="p-8 md:p-12 space-y-8">

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Auckland Med Tutor ("we," "us," or "our") is committed to protecting your privacy and personal
                                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                                when you use our tutoring services, visit our website, or interact with us in any capacity.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                            <p className="text-gray-700 mb-4">When you register for our services or contact us, we may collect:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                                <li>Name and contact information (email address, phone number, postal address)</li>
                                <li>Academic information (current courses, grades, academic goals)</li>
                                <li>Payment information (processed securely through third-party payment processors)</li>
                                <li>Emergency contact information (for in-person tutoring sessions)</li>
                                <li>Any additional information you voluntarily provide during consultations</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Website Usage Information</h3>
                            <p className="text-gray-700 mb-4">When you visit our website, we may automatically collect:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>IP address and browser information</li>
                                <li>Pages visited and time spent on our website</li>
                                <li>Referring website information</li>
                                <li>Device and operating system information</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                            <p className="text-gray-700 mb-4">We use your personal information to:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Provide personalized tutoring services and academic support</li>
                                <li>Schedule and manage tutoring sessions</li>
                                <li>Process payments and maintain billing records</li>
                                <li>Communicate with you about your progress and upcoming sessions</li>
                                <li>Send educational resources and study materials</li>
                                <li>Improve our services and develop new offerings</li>
                                <li>Comply with legal obligations and protect our rights</li>
                                <li>Send promotional materials about our services (with your consent)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
                            <p className="text-gray-700 mb-4">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information
                                only in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>
                                    <strong>Service Providers:</strong> With trusted third-party service providers who assist us in
                                    operating our business (payment processors, scheduling platforms)
                                </li>
                                <li>
                                    <strong>Legal Requirements:</strong> When required by law, court order, or government regulation
                                </li>
                                <li>
                                    <strong>Safety and Protection:</strong> To protect the rights, property, or safety of Auckland Med
                                    Tutor, our clients, or others
                                </li>
                                <li>
                                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business
                                    assets
                                </li>
                                <li>
                                    <strong>With Your Consent:</strong> When you explicitly authorize us to share your information
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                            <p className="text-gray-700 mb-4">
                                We implement appropriate technical and organizational security measures to protect your personal
                                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Secure data transmission using encryption technology</li>
                                <li>Regular security assessments and updates</li>
                                <li>Limited access to personal information on a need-to-know basis</li>
                                <li>Secure storage of physical and electronic records</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                            <p className="text-gray-700">
                                We retain your personal information for as long as necessary to provide our services and fulfill the
                                purposes outlined in this Privacy Policy. Academic records and progress reports may be retained for up
                                to 7 years for reference purposes, unless you request earlier deletion.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                            <p className="text-gray-700 mb-4">You have the right to:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Access and review the personal information we hold about you</li>
                                <li>Request correction of inaccurate or incomplete information</li>
                                <li>Request deletion of your personal information (subject to legal obligations)</li>
                                <li>Opt-out of marketing communications at any time</li>
                                <li>Request a copy of your personal information in a portable format</li>
                                <li>Lodge a complaint with the Privacy Commissioner if you believe we have breached your privacy</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                            <p className="text-gray-700">
                                Our website may use cookies and similar tracking technologies to enhance your browsing experience and
                                analyze website usage. You can control cookie settings through your browser preferences. Disabling
                                cookies may affect some website functionality.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                            <p className="text-gray-700">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                                or content of these external sites. We encourage you to review the privacy policies of any third-party
                                websites you visit.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                            <p className="text-gray-700">
                                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                                requirements. We will notify you of any material changes by posting the updated policy on our website
                                and updating the "Last Updated" date above.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                            <p className="text-gray-700 mb-4">
                                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                            </p>
                            <div className="bg-red-50 p-6 rounded-lg">
                                <p className="text-gray-700">
                                    <strong>Auckland Med Tutor</strong>
                                </p>
                                <p className="text-gray-700">Email: aucklandmedtutor@gmail.com</p>
                                {/* <p className="text-gray-700">Phone: +64 21 123 4567</p>
                                <p className="text-gray-700">Address: University of Auckland City Campus Area, Auckland, New Zealand</p> */}
                            </div>
                        </section>
                    </CardContent>
                </Card>
            </div>

            <Footer />
        </main>
    )
}
