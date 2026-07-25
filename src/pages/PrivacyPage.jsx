import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Calendar, ArrowRight } from 'lucide-react';

const sections = [
    { id: 'section-1', title: '1. Who Is Responsible for Your Data' },
    { id: 'section-2', title: '2. Information We Collect' },
    { id: 'section-3', title: '3. How We Use Your Information' },
    { id: 'section-4', title: '4. Legal Bases for Processing' },
    { id: 'section-5', title: '5. Sensitive & Biometric Data' },
    { id: 'section-6', title: '6. Advertising' },
    { id: 'section-7', title: '7. How We Share Your Information' },
    { id: 'section-8', title: '8. International Data Transfers' },
    { id: 'section-9', title: '9. Data Retention' },
    { id: 'section-10', title: '10. Your Rights' },
    { id: 'section-11', title: '11. Children\'s Privacy' },
    { id: 'section-12', title: '12. Data Security' },
    { id: 'section-13', title: '13. Cookies & Tracking (Website)' },
    { id: 'section-14', title: '14. Changes to This Policy' },
    { id: 'section-15', title: '15. Contact Us' }
];

const PrivacyPage = () => {
    const [activeSection, setActiveSection] = useState('section-1');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
        );

        sections.forEach((sec) => {
            const el = document.getElementById(sec.id);
            if (el) observer.observe(el);
        });

        return () => {
            sections.forEach((sec) => {
                const el = document.getElementById(sec.id);
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 100; // offset for fixed header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-brand-bg font-sans pb-24">
            {/* Header */}
            <div className="relative overflow-hidden bg-brand-peach/40 border-b border-brand-dark/5 pt-32 pb-16 lg:pt-40 lg:pb-24">
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-orange/10 blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-orange/10 blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-semibold uppercase tracking-wider mb-6">
                            <Shield className="w-3.5 h-3.5" />
                            <span>Legal & Privacy</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-thin text-brand-dark tracking-tight leading-none mb-6">
                            Privacy <span className="font-bold text-brand-orange">Policy</span>
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-brand-grey text-sm font-light">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-brand-orange" />
                                <span>Last updated: July 22, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-brand-orange" />
                                <a href="mailto:privacy@blynqe.com" className="hover:text-brand-orange transition-colors">privacy@blynqe.com</a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-6 mt-16 lg:mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar Navigation */}
                    <div className="hidden lg:block lg:col-span-4">
                        <div className="sticky top-28 max-h-[calc(100vh-120px)] overflow-y-auto pr-4 space-y-1 scrollbar-thin scrollbar-thumb-brand-dark/10">
                            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-6 pl-4">
                                Table of Contents
                            </h3>
                            {sections.map((sec) => (
                                <button
                                    key={sec.id}
                                    onClick={() => scrollToSection(sec.id)}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between group ${activeSection === sec.id
                                            ? 'bg-brand-orange/10 text-brand-orange pl-6'
                                            : 'text-brand-grey hover:text-brand-dark hover:bg-brand-dark/5'
                                        }`}
                                >
                                    <span className="truncate">{sec.title}</span>
                                    <ArrowRight className={`w-4 h-4 transition-all duration-300 ${activeSection === sec.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0'
                                        }`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-8 bg-white rounded-3xl border border-brand-dark/5 p-8 lg:p-12 shadow-sm">
                        <div className="prose prose-brand max-w-none space-y-12 text-brand-dark/80 font-light leading-relaxed">

                            <section id="section-1" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    1. Who Is Responsible for Your Data
                                </h2>
                                <p>
                                    NEMVOL LTD, a company registered in Lagos, Nigeria, is the data controller responsible for your personal data. BlynQe is one of the products operated by NEMVOL LTD. You can reach our privacy contact at <a href="mailto:blynqe3@gmail.com" className="text-brand-orange font-semibold hover:underline">blynqe3@gmail.com</a>, or our parent company at <a href="mailto:nemvolltd@gmail.com" className="text-brand-orange font-semibold hover:underline">nemvolltd@gmail.com</a>.
                                </p>
                            </section>

                            <section id="section-2" className="scroll-mt-28 space-y-6">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    2. Information We Collect
                                </h2>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-brand-dark">2.1 Information You Provide</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Account data:</strong> name, date of birth, gender, who you are interested in, email address, phone number, and password (stored only in hashed form).</li>
                                        <li><strong>Profile data:</strong> photos, bio, interests, hobbies, relationship goals, spoken languages, pets, height, religion, nationality, and preference settings such as your age and distance range.</li>
                                        <li><strong>Verification data:</strong> if you choose to verify your profile, a selfie captured in-app for face and liveness checking. It is used only to confirm that a real, live person matches the profile.</li>
                                        <li><strong>Communications:</strong> messages you send to other users and to our support team.</li>
                                        <li><strong>Payment data:</strong> your subscription tier and transaction status. Card details are handled by Apple or Google and our payments provider, RevenueCat — we never receive or store your full card number.</li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-brand-dark">2.2 Information Collected Automatically</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Location data:</strong> your device's GPS location (precise or approximate), collected with your permission and refreshed automatically as you move, so we can show you people nearby and power proximity-based matching. You can turn off location access at any time in your device settings, although matching may not work without it.</li>
                                        <li><strong>Device information:</strong> device model, operating-system version, unique device identifiers, advertising identifier, and IP address.</li>
                                        <li><strong>Usage data:</strong> app interactions such as swipes, likes, matches, and session length, plus crash diagnostics.</li>
                                        <li><strong>Push notification tokens:</strong> used to deliver match, message, and safety notifications.</li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-brand-dark">2.3 Information From Service Providers</h3>
                                    <p>
                                        We receive limited information from the providers that help us run BlynQe: subscription and entitlement status from our payments provider (RevenueCat) and the app stores; app analytics and crash reports from Google Firebase; and ad-delivery and measurement data from Google AdMob. BlynQe does not currently offer social-network login, and we do not buy personal data about you from data brokers.
                                    </p>
                                </div>
                            </section>

                            <section id="section-3" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    3. How We Use Your Information
                                </h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>To create and operate your account and show your profile to potential matches.</li>
                                    <li>To power location-based matching and recommendations.</li>
                                    <li>To process subscription payments through the applicable app store.</li>
                                    <li>To display and measure advertising for users on the free tier.</li>
                                    <li>To detect fraud, fake accounts, underage users, and safety violations.</li>
                                    <li>To respond to support requests and enforce our Terms of Service and Community Guidelines.</li>
                                    <li>To send service-related and, where you have consented, marketing notifications.</li>
                                    <li>To comply with legal obligations and respond to lawful requests from authorities.</li>
                                </ul>
                            </section>

                            <section id="section-4" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    4. Legal Bases for Processing (GDPR/UK GDPR)
                                </h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Contract:</strong> processing necessary to provide the Service you signed up for.</li>
                                    <li><strong>Consent:</strong> for location tracking, marketing communications, selfie verification (biometric data), and personalized advertising.</li>
                                    <li><strong>Legitimate interests:</strong> for fraud prevention, safety enforcement, ad measurement, and service improvement.</li>
                                    <li><strong>Legal obligation:</strong> for responding to law enforcement or regulatory requests.</li>
                                </ul>
                            </section>

                            <section id="section-5" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    5. Sensitive & Biometric Data
                                </h2>
                                <p>
                                    Profile fields such as sexual orientation or religion, if you choose to add them, are treated as special-category data and are shown only because you opted to display them. If you use profile verification, your selfie is processed to confirm a live human face. Where this amounts to biometric data, we process it only with your explicit consent, use it solely to verify your profile, do not use it to identify you anywhere else, and never share it for advertising. Verification images are kept only for as long as needed to complete verification and any related safety review.
                                </p>
                            </section>

                            <section id="section-6" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    6. Advertising
                                </h2>
                                <p>
                                    BlynQe is free to use and, for users who are not subscribers, supported by advertising delivered through Google AdMob (including banner, native, and occasional full-screen interstitial ads). To serve, limit the frequency of, and measure ads, AdMob and its partners may process your device and advertising identifiers, coarse location, and ad-interaction data, and may show personalized ads where you have consented and local law allows. You can reset or limit ad tracking through your device's advertising-ID controls (Android: Settings › Google › Ads; iOS: Settings › Privacy & Security › Tracking). Active BlynQe Premium subscribers are not shown ads. To learn how Google uses this data, see Google's advertising and partner policies.
                                </p>
                            </section>

                            <section id="section-7" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    7. How We Share Your Information
                                </h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Other users:</strong> your public profile is visible to other users based on your discovery settings.</li>
                                    <li><strong>Service providers:</strong> Google Firebase / Google Cloud (hosting, authentication, messaging, analytics, crash reporting), RevenueCat (subscription management), Google AdMob (advertising), and push-notification providers, each bound by data-processing terms.</li>
                                    <li><strong>Payment platforms:</strong> the Apple App Store and Google Play process subscription payments under their own privacy terms.</li>
                                    <li><strong>Legal & safety:</strong> we may disclose data to law enforcement or regulators where required by law, or to protect the safety of our users.</li>
                                    <li><strong>Business transfers:</strong> in a merger, acquisition, or asset sale, user data may be transferred as part of that transaction.</li>
                                </ul>
                                <p className="mt-4 font-medium text-brand-dark">
                                    We do not sell your personal data to third parties for their own marketing purposes.
                                </p>
                            </section>

                            <section id="section-8" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    8. International Data Transfers
                                </h2>
                                <p>
                                    Your data may be processed in countries outside your own, including Nigeria and the countries where our hosting and service providers operate servers (for example, the United States or the EU). Where we transfer personal data out of the EU/UK, we rely on Standard Contractual Clauses or another approved transfer mechanism.
                                </p>
                            </section>

                            <section id="section-9" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    9. Data Retention
                                </h2>
                                <p>
                                    We retain your data for as long as your account is active. If you delete your account, we delete or anonymize your personal data within 30 days, except where retention is required for legal, safety, fraud-prevention, or dispute-resolution purposes (for example, records of banned accounts may be kept longer to prevent re-registration).
                                </p>
                            </section>

                            <section id="section-10" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    10. Your Rights
                                </h2>
                                <p>
                                    Depending on your location, you may have the right to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Access the personal data we hold about you.</li>
                                    <li>Correct inaccurate data.</li>
                                    <li>Delete your data ("right to be forgotten").</li>
                                    <li>Port your data to another service.</li>
                                    <li>Object to or restrict certain processing, including marketing.</li>
                                    <li>Withdraw consent at any time where processing is based on consent.</li>
                                    <li>Reset or limit your advertising identifier through your device settings.</li>
                                    <li>(California residents) opt out of the "sale" or "sharing" of personal information, with no discrimination for exercising these rights.</li>
                                </ul>
                                <p className="mt-4">
                                    To exercise these rights, contact <a href="mailto:blynqe3@gmail.com" className="text-brand-orange font-semibold hover:underline">blynqe3@gmail.com</a>. You may also lodge a complaint with your local data protection authority, including the Nigeria Data Protection Commission (NDPC) if you are in Nigeria.
                                </p>
                            </section>

                            <section id="section-11" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    11. Children's Privacy
                                </h2>
                                <p>
                                    The Service is strictly for users 18 and older. We do not knowingly collect data from anyone under 18. If we learn that a user is underage, we will terminate the account and delete the associated data.
                                </p>
                            </section>

                            <section id="section-12" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    12. Data Security
                                </h2>
                                <p>
                                    We use industry-standard technical and organizational measures, including encryption in transit and at rest, access controls, and regular security reviews, to protect your data. No system is completely secure, and we cannot guarantee absolute security.
                                </p>
                            </section>

                            <section id="section-13" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    13. Cookies & Tracking (Website)
                                </h2>
                                <p>
                                    If you visit our website, we may use cookies and similar technologies for analytics and marketing. You can manage cookie preferences through your browser settings or our cookie banner, where applicable.
                                </p>
                            </section>

                            <section id="section-14" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    14. Changes to This Policy
                                </h2>
                                <p>
                                    We may update this Privacy Policy from time to time. Material changes will be communicated via in-app notice or email before they take effect.
                                </p>
                            </section>

                            <section id="section-15" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    15. Contact Us
                                </h2>
                                <p>
                                    For privacy questions or to exercise your rights, contact <a href="mailto:blynqe3@gmail.com" className="text-brand-orange font-semibold hover:underline">blynqe3@gmail.com</a> or write to NEMVOL LTD, Lagos, Nigeria.
                                </p>
                            </section>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
