import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Calendar, Mail, ArrowRight } from 'lucide-react';

const sections = [
    { id: 'section-1', title: '1. Scope & Definitions' },
    { id: 'section-2', title: '2. Prohibited Content & Conduct' },
    { id: 'section-3', title: '3. Keeping Minors Off BlynQe' },
    { id: 'section-4', title: '4. Detecting & Removing Violations' },
    { id: 'section-5', title: '5. Reporting to Authorities' },
    { id: 'section-6', title: '6. How to Report a Concern' },
    { id: 'section-7', title: '7. Consequences of Violations' },
    { id: 'section-8', title: '8. Point of Contact & Review' }
];

const ChildSafetyPage = () => {
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
                            <ShieldAlert className="w-3.5 h-3.5" />
                            <span>CSAE Standards</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-thin text-brand-dark tracking-tight leading-none mb-6">
                            Child <span className="font-bold text-brand-orange">Safety</span>
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-brand-grey text-sm font-light">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-brand-orange" />
                                <span>Last updated: July 22, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-brand-orange" />
                                <a href="mailto:blynqe3@gmail.com" className="hover:text-brand-orange transition-colors">blynqe3@gmail.com</a>
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

                            <div className="space-y-4">
                                <p className="text-lg text-brand-grey leading-relaxed">
                                    BlynQe is an adults-only (18+) dating and social discovery app. We have zero tolerance for child sexual abuse and exploitation. This document sets out the standards and measures we maintain to keep children off our platform and to act decisively against any related content or conduct.
                                </p>

                                <p className="text-brand-dark/70 italic bg-brand-orange/5 p-6 rounded-2xl border border-brand-orange/10">
                                    <strong>Zero tolerance.</strong> BlynQe prohibits child sexual abuse and exploitation (CSAE) and child sexual abuse material (CSAM) in every form. We remove violating content and accounts, preserve evidence, and report to the appropriate authorities. We comply with applicable child-safety laws in the jurisdictions in which we operate.
                                </p>
                            </div>

                            <section id="section-1" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    1. Scope & Definitions
                                </h2>
                                <p>
                                    These standards apply to every part of the BlynQe service — profiles, photos, messages, and any other interaction. For the purpose of this document:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Child</strong> means any person under 18 years of age.</li>
                                    <li><strong>CSAM</strong> means any image, video, or other material that depicts the sexual abuse or sexual exploitation of a child.</li>
                                    <li><strong>CSAE</strong> means any conduct that sexually abuses or exploits a child, including grooming, sextortion, trafficking, solicitation of a minor, and the sexualization of children.</li>
                                </ul>
                            </section>

                            <section id="section-2" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    2. Prohibited Content & Conduct
                                </h2>
                                <p>
                                    The following are strictly prohibited on BlynQe and will result in immediate removal and a permanent ban:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Creating, sharing, requesting, or linking to CSAM.</li>
                                    <li>Grooming, or any attempt to sexually solicit, coerce, or exploit a minor.</li>
                                    <li>Sextortion, trafficking, or facilitating the sexual exploitation of a child.</li>
                                    <li>Sexualizing minors, including in text, images, or AI-generated or animated media.</li>
                                    <li>Any use of BlynQe by a person under 18, or any attempt to help a minor create or access an account.</li>
                                </ul>
                            </section>

                            <section id="section-3" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    3. Keeping Minors Off BlynQe
                                </h2>
                                <p>
                                    BlynQe is intended solely for adults aged 18 and over. To prevent minors from accessing the service, we:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Require a date of birth at sign-up and permit registration only for users who are 18 or older.</li>
                                    <li>Require users to confirm they are 18+ and to provide accurate information as a condition of using the service.</li>
                                    <li>Offer selfie-based profile verification to help confirm that a real, adult person is behind an account.</li>
                                    <li>Terminate and remove any account we identify as belonging to, or misrepresenting the age of, a minor.</li>
                                </ul>
                            </section>

                            <section id="section-4" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    4. Detecting & Removing Violations
                                </h2>
                                <p>
                                    We combine user reporting with human review by our Trust & Safety team. When a report or review identifies CSAE or CSAM, we:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Remove the content and disable the account without delay.</li>
                                    <li>Preserve the relevant content and account information as evidence, to the extent permitted by law.</li>
                                    <li>Block re-registration by banned users where technically feasible.</li>
                                </ul>
                            </section>

                            <section id="section-5" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    5. Reporting to Authorities
                                </h2>
                                <p>
                                    Where we identify apparent CSAM or an imminent risk to a child, we report it to the appropriate authorities and cooperate with law enforcement. This includes reporting to the National Center for Missing & Exploited Children (NCMEC) and/or the relevant national authority in the applicable jurisdiction, as required by law.
                                </p>
                            </section>

                            <section id="section-6" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    6. How to Report a Concern
                                </h2>
                                <p>
                                    Every profile and conversation on BlynQe includes in-app <strong>report</strong> and <strong>block</strong> tools. Reports are sent to our Trust & Safety team for review, and blocking immediately stops further contact. You will not be identified to the person you report.
                                </p>
                                <p>
                                    To report suspected child sexual abuse or exploitation directly, contact our child-safety point of contact at <a href="mailto:blynqe3@gmail.com" className="text-brand-orange font-semibold hover:underline">blynqe3@gmail.com</a>. <strong>If a child is in immediate danger, contact your local emergency services first.</strong>
                                </p>
                            </section>

                            <section id="section-7" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    7. Consequences of Violations
                                </h2>
                                <p>
                                    Accounts involved in CSAE or CSAM are permanently banned with no appeal. Depending on the conduct, we may also preserve evidence, report the account to the relevant authorities, and cooperate fully with any resulting investigation.
                                </p>
                            </section>

                            <section id="section-8" className="scroll-mt-28 space-y-6">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    8. Point of Contact & Review
                                </h2>
                                <p>
                                    NEMVOL LTD maintains a designated point of contact for child-safety matters and for correspondence from regulators and platform providers. We review these standards periodically and update them to reflect changes in law, platform requirements, and best practice.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                                    <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">Child-safety contact</h4>
                                        <a href="mailto:blynqe3@gmail.com" className="text-brand-dark hover:text-brand-orange font-medium text-sm break-all">blynqe3@gmail.com</a>
                                    </div>
                                    <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">Operator</h4>
                                        <p className="text-brand-dark font-medium text-sm">NEMVOL LTD</p>
                                    </div>
                                    <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">Parent company</h4>
                                        <a href="mailto:nemvolltd@gmail.com" className="text-brand-dark hover:text-brand-orange font-medium text-sm break-all">nemvolltd@gmail.com</a>
                                    </div>
                                </div>

                                <p className="text-sm text-brand-grey pt-4">
                                    These Child Safety Standards form part of the BlynQe Terms of Service and Community Guidelines. BlynQe is operated by NEMVOL LTD.
                                </p>
                            </section>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChildSafetyPage;
