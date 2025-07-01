import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-[#fffaf5]" id="top">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Please read these terms and conditions carefully before using Auckland Med Tutor's services. By engaging our
                        services, you agree to be bound by these terms.
                    </p>
                </div>

                <Card className="shadow-lg">
                    <CardContent className="p-8 md:p-12 space-y-8">

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Welcome to Auckland Med Tutor. We are delighted that you chose us for your medical entrance and academic
                                preparation. Please read these terms and conditions carefully and contact us if you have any questions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Definitions</h2>
                            <p className="text-gray-700 mb-4">In this agreement:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>"We," "us," and "our" refer to Auckland Med Tutor</li>
                                <li>"You" and "your" refer to the student or client engaging our services</li>
                                <li>
                                    "Services" refer to all tutoring, coaching, and educational services provided by Auckland Med Tutor
                                </li>
                                <li>"Materials" refer to all study resources, practice questions, and educational content provided</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Terms</h2>
                            <p className="text-gray-700 mb-4">
                                Our services are available to students who are genuinely preparing for medical school entrance
                                requirements, including University of Auckland pre-medicine courses, UCAT preparation, and MMI interview
                                coaching.
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>You must be eligible to enter into contracts under applicable New Zealand laws</li>
                                <li>We reserve the right to refuse service to any applicant</li>
                                <li>We reserve the right to suspend or terminate services for violation of these terms</li>
                                <li>Use of our services implies your consent to this agreement</li>
                                <li>Our services are for bona fide medical school applicants only</li>
                                <li>Invalid or fraudulent enrollments will be cancelled without refunds</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Refund and Cancellation Policy</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">General Policy</h3>
                            <p className="text-gray-700 mb-4">
                                Refunds, returns, or exchanges will only be provided in exceptional circumstances, and the decision is
                                solely at Auckland Med Tutor's discretion.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Requests</h3>
                            <p className="text-gray-700 mb-4">To request a refund, you must provide:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                <li>Written request within 7 days of purchase</li>
                                <li>Your name and contact details</li>
                                <li>Complete transaction history</li>
                                <li>Detailed reasons for the refund request</li>
                                <li>Copies of all relevant documents</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Conditions</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>All refund requests incur a minimum 20% administration fee</li>
                                <li>Refunds for individual components of packages will not be considered</li>
                                <li>Changes to university entrance requirements do not constitute grounds for refunds</li>
                                <li>Events outside our control are not considered exceptional circumstances</li>
                                <li>Services that have already commenced may not be eligible for refunds</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Fees and Payment</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Terms</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                <li>All fees are payable in New Zealand Dollars (NZD)</li>
                                <li>Payment is required before services commence unless otherwise agreed</li>
                                <li>We reserve the right to correct pricing errors even after payment</li>
                                <li>You must provide complete and accurate billing information</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Price Changes and Disputes</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>We may change prices with notice posted on our website</li>
                                <li>Fee disputes must be raised within 72 hours of invoice date</li>
                                <li>Late payments may incur finance charges</li>
                                <li>Access to services may be suspended for overdue payments</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Delivery</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Tutoring Sessions</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                <li>Sessions may be conducted online or in-person as agreed</li>
                                <li>You are responsible for providing accurate contact information</li>
                                <li>Session schedules are subject to mutual availability</li>
                                <li>Materials will be provided electronically unless otherwise specified</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Timeframes</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Package components must be used within 12 months of purchase</li>
                                <li>UCAT preparation services must be completed before the relevant test date</li>
                                <li>MMI coaching must be completed before interview periods</li>
                                <li>Requests to extend service periods will be considered on a case-by-case basis</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use</h2>
                            <p className="text-gray-700 mb-4">You agree not to:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Share, resell, or transfer your enrollment to another person</li>
                                <li>Reproduce, distribute, or commercially exploit our materials</li>
                                <li>Use our services for any unlawful purpose</li>
                                <li>Engage in behavior that is abusive, defamatory, or disruptive</li>
                                <li>Attempt to gain unauthorized access to our systems or materials</li>
                                <li>Remove copyright or trademark notices from our materials</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                            <p className="text-gray-700 mb-4">
                                All content, materials, and resources provided by Auckland Med Tutor are protected by copyright and
                                intellectual property laws. This includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                <li>Study guides and practice materials</li>
                                <li>Video and audio content</li>
                                <li>Assessment tools and feedback</li>
                                <li>Proprietary teaching methods</li>
                            </ul>
                            <p className="text-gray-700">
                                Materials are licensed for your personal use only. Any unauthorized use, reproduction, or distribution
                                may result in immediate termination of services and legal action.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                            <p className="text-gray-700 mb-4">
                                Auckland Med Tutor's liability is limited to the total amount paid by you for our services. We shall not
                                be liable for any indirect, special, consequential, or incidental damages, including but not limited to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Loss of academic opportunities or admission to programs</li>
                                <li>Disappointment with test scores or academic performance</li>
                                <li>Loss of time or opportunity costs</li>
                                <li>Emotional distress or other intangible losses</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers</h2>
                            <p className="text-gray-700 mb-4">
                                Our services are provided "as is" without warranties of any kind. We make no guarantees regarding:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                                <li>Specific academic outcomes or test scores</li>
                                <li>Admission to medical school or other programs</li>
                                <li>Compatibility with all learning styles</li>
                                <li>Uninterrupted access to services</li>
                            </ul>
                            <p className="text-gray-700">
                                We have no affiliation with the University of Auckland, UCAT consortium, or any other educational
                                institutions. Success depends on many factors including your effort, preparation time, and individual
                                circumstances.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                            <p className="text-gray-700 mb-4">
                                Either party may terminate this agreement with written notice. Upon termination:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>All rights to use our materials cease immediately</li>
                                <li>Outstanding fees become immediately due</li>
                                <li>Confidentiality obligations continue</li>
                                <li>No refunds will be provided unless required by law</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Complaints and Disputes</h2>
                            <p className="text-gray-700 mb-4">
                                We welcome feedback and aim to resolve complaints efficiently. If you have a complaint:
                            </p>
                            <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
                                <li>First, raise the matter directly with your tutor</li>
                                <li>If unresolved, contact us in writing with full details</li>
                                <li>We will investigate and respond within 14 business days</li>
                                <li>If still unresolved, disputes may be referred to mediation</li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                            <p className="text-gray-700">
                                We may update these terms from time to time. Changes will be posted on our website with an updated
                                effective date. Continued use of our services after changes constitutes acceptance of the new terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                            <p className="text-gray-700 mb-4">
                                For questions about these terms or to submit complaints, please contact us:
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
