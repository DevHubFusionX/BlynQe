import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Mail, ArrowRight } from 'lucide-react';

const sections = [
    { id: 'section-1', title: '1. Eligibility' },
    { id: 'section-2', title: '2. Account Registration & Security' },
    { id: 'section-3', title: '3. Description of the Service' },
    { id: 'section-4', title: '4. Subscriptions, In-App Purchases & Billing' },
    { id: 'section-5', title: '5. User Conduct' },
    { id: 'section-6', title: '6. User-Generated Content' },
    { id: 'section-7', title: '7. Reporting, Blocking & Content Moderation' },
    { id: 'section-8', title: '8. Safety Disclaimer' },
    { id: 'section-9', title: '9. Intellectual Property' },
    { id: 'section-10', title: '10. Termination' },
    { id: 'section-11', title: '11. Disclaimers' },
    { id: 'section-12', title: '12. Limitation of Liability' },
    { id: 'section-13', title: '13. Indemnification' },
    { id: 'section-14', title: '14. Governing Law & Dispute Resolution' },
    { id: 'section-15', title: '15. Changes to These Terms' },
    { id: 'section-16', title: '16. Contact' }
];

const TermsPage = () => {
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
                            <FileText className="w-3.5 h-3.5" />
                            <span>Terms & Conditions</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-thin text-brand-dark tracking-tight leading-none mb-6">
                            Terms of <span className="font-bold text-brand-orange">Service</span>
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-brand-grey text-sm font-light">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-brand-orange" />
                                <span>Last updated: July 22, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-brand-orange" />
                                <a href="mailto:legal@blynqe.com" className="hover:text-brand-orange transition-colors">legal@blynqe.com</a>
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
                                    1. Eligibility
                                </h2>
                                <p>
                                    By creating an account, you represent that all information you provide, including your date of birth, is accurate and that you are not prohibited from using the Service under the laws of your jurisdiction.
                                </p>
                                <p>
                                    We reserve the right to request proof of age or identity at any time and to suspend or terminate accounts where eligibility cannot be verified.
                                </p>
                                <p>
                                    The Service is not directed at, and must not be used by, anyone under 18. We do not knowingly permit minors to register.
                                </p>
                            </section>

                            <section id="section-2" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    2. Account Registration & Security
                                </h2>
                                <p>
                                    You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. You agree to notify us promptly at <a href="mailto:blynqe3@gmail.com" className="text-brand-orange font-semibold hover:underline">blynqe3@gmail.com</a> of any unauthorized use. We are not liable for losses arising from unauthorized access resulting from your failure to safeguard your credentials.
                                </p>
                                <p>
                                    You may only maintain one account per person. Creating multiple or duplicate accounts to evade a ban or moderation action is prohibited and grounds for permanent termination.
                                </p>
                            </section>

                            <section id="section-3" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    3. Description of the Service
                                </h2>
                                <p>
                                    BlynQe lets users create profiles, browse other users' profiles, and communicate with matches for the purpose of social and romantic connection. The Service is free to use and supported by advertising; optional paid subscriptions remove ads and unlock additional features. We do not conduct criminal background checks on users unless expressly stated within the app, and we do not guarantee the identity, intentions, or conduct of any user. You are solely responsible for your interactions with other users, both online and in person.
                                </p>
                            </section>

                            <section id="section-4" className="scroll-mt-28 space-y-6">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    4. Subscriptions, In-App Purchases & Billing
                                </h2>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-brand-dark">4.1 Paid Subscriptions</h3>
                                    <p>
                                        BlynQe offers an optional paid subscription ("BlynQe Premium") that unlocks additional features and removes ads. Prices, billing frequency, and included features are shown in the app before you purchase, and are retrieved dynamically from the app store, so the price you see is the price that applies in your region and currency.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-brand-dark">4.2 Auto-Renewal</h3>
                                    <p>
                                        Subscriptions automatically renew at the end of each billing period unless cancelled at least 24 hours before the renewal date. Your payment method will be charged for renewal through the app store account used to buy the subscription (Apple App Store or Google Play).
                                    </p>
                                    <p>
                                        You can manage or cancel your subscription at any time through your Apple ID settings or your Google Play subscriptions page. Cancelling within the app itself may not stop billing, because purchases are processed by the platform.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-brand-dark">4.3 Payment Processing</h3>
                                    <p>
                                        All purchases made through the iOS or Android app are processed exclusively through Apple's In-App Purchase system or Google Play Billing, as applicable, and managed on our side by RevenueCat. We do not directly process or store your payment card details.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-brand-dark">4.4 Refunds</h3>
                                    <p>
                                        Refund requests are subject to the policies of the Apple App Store or Google Play, as applicable, and not directly to us, except where required by applicable consumer-protection law (including EU/UK statutory withdrawal rights and Nigerian consumer-protection law).
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-brand-dark">4.5 Price Changes</h3>
                                    <p>
                                        We may change subscription pricing from time to time. Where required by law or platform policy, we will give advance notice before any price increase takes effect for existing subscribers.
                                    </p>
                                </div>
                            </section>

                            <section id="section-5" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    5. User Conduct
                                </h2>
                                <p>
                                    You agree not to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Harass, threaten, stalk, or intimidate any other user.</li>
                                    <li>Post or send content that is sexually explicit involving minors, non-consensual intimate imagery, hate speech, or incitement to violence.</li>
                                    <li>Impersonate any person or misrepresent your identity, age, or affiliation.</li>
                                    <li>Use the Service for commercial solicitation, advertising, prostitution, human trafficking, or any unlawful exchange of services for money.</li>
                                    <li>Scrape, harvest, or misuse other users' data or images.</li>
                                    <li>Attempt to circumvent moderation, verification, or blocking mechanisms.</li>
                                    <li>Use the Service if you have been previously banned, or on behalf of someone who has.</li>
                                </ul>
                                <p className="mt-4">
                                    Violation of this section may result in immediate suspension or termination without refund.
                                </p>
                            </section>

                            <section id="section-6" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    6. User-Generated Content
                                </h2>
                                <p>
                                    You retain ownership of the photos, messages, and profile content you submit ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to host, display, reproduce, and distribute it solely for the purpose of operating and promoting the Service. You represent that you own or have the necessary rights to all User Content you submit and that it does not infringe any third party’s rights.
                                </p>
                            </section>

                            <section id="section-7" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    7. Reporting, Blocking & Content Moderation
                                </h2>
                                <p>
                                    The Service provides in-app tools to report and block other users and to flag content that violates these Terms or our Community Guidelines. We review reports and aim to take appropriate action, which may include content removal, warnings, suspension, or permanent bans. Our moderation decisions are made at our discretion and are not subject to appeal except as described in our Community Guidelines.
                                </p>
                            </section>

                            <section id="section-8" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    8. Safety Disclaimer
                                </h2>
                                <p>
                                    We do not conduct comprehensive background checks on users. You are solely responsible for your own safety when interacting with other users, including when arranging to meet in person. We strongly recommend meeting first in a public place, telling a friend or family member of your plans, and never sending money or financial information to anyone you meet on the Service. We are not responsible for the conduct of any user, on or off the Service.
                                </p>
                            </section>

                            <section id="section-9" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    9. Intellectual Property
                                </h2>
                                <p>
                                    The Service, including its design, logos, trademarks, and underlying software, is owned by or licensed to the Company and protected by intellectual-property laws. You may not copy, modify, or create derivative works from the Service without our written consent.
                                </p>
                            </section>

                            <section id="section-10" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    10. Termination
                                </h2>
                                <p>
                                    You may delete your account at any time using the in-app account-deletion feature (Settings → Delete Account). We may suspend or terminate your account at our discretion, with or without notice, for violation of these Terms, suspected fraud, or safety concerns. Upon termination, your right to use the Service ceases immediately; certain data may be retained as described in our Privacy Policy.
                                </p>
                            </section>

                            <section id="section-11" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    11. Disclaimers
                                </h2>
                                <p className="font-mono text-sm uppercase bg-brand-dark/5 p-6 rounded-2xl border border-brand-dark/5">
                                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY MATCH WILL RESULT IN A SAFE OR SUCCESSFUL RELATIONSHIP.
                                </p>
                            </section>

                            <section id="section-12" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    12. Limitation of Liability
                                </h2>
                                <p className="font-mono text-sm uppercase bg-brand-dark/5 p-6 rounded-2xl border border-brand-dark/5">
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR DATA, ARISING FROM YOUR USE OF THE SERVICE OR INTERACTIONS WITH OTHER USERS, WHETHER BASED IN CONTRACT, TORT, OR OTHERWISE. OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM. NOTHING IN THESE TERMS LIMITS LIABILITY THAT CANNOT BE EXCLUDED UNDER APPLICABLE LAW (INCLUDING FOR DEATH, PERSONAL INJURY, OR FRAUD).
                                </p>
                            </section>

                            <section id="section-13" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    13. Indemnification
                                </h2>
                                <p>
                                    You agree to indemnify and hold harmless the Company, its officers, employees, and affiliates from any claims, damages, or expenses (including legal fees) arising from your use of the Service, your User Content, or your violation of these Terms.
                                </p>
                            </section>

                            <section id="section-14" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    14. Governing Law & Dispute Resolution
                                </h2>
                                <p>
                                    These Terms are governed by the laws of the Federal Republic of Nigeria, without regard to conflict-of-law principles, except where mandatory local consumer-protection law requires otherwise for users located in the EU, UK, or US. Any dispute shall first be addressed informally by contacting <a href="mailto:blynqe3@gmail.com" className="text-brand-orange font-semibold hover:underline">blynqe3@gmail.com</a>. Users in the EU may also have access to the European Commission's Online Dispute Resolution platform.
                                </p>
                            </section>

                            <section id="section-15" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    15. Changes to These Terms
                                </h2>
                                <p>
                                    We may update these Terms from time to time. Material changes will be notified via in-app notice or email at least 14 days before taking effect. Continued use of the Service after changes take effect constitutes acceptance.
                                </p>
                            </section>

                            <section id="section-16" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    16. Contact
                                </h2>
                                <p>
                                    Questions about these Terms can be sent to <a href="mailto:blynqe3@gmail.com" className="text-brand-orange font-semibold hover:underline">blynqe3@gmail.com</a> or NEMVOL LTD, Lagos, Nigeria.
                                </p>
                            </section>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TermsPage;
