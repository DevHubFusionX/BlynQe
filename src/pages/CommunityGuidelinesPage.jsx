import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Mail, ArrowRight } from 'lucide-react';

const sections = [
    { id: 'section-1', title: '1. Be Who You Say You Are' },
    { id: 'section-2', title: '2. Prohibited Content & Behavior' },
    { id: 'section-3', title: '3. Reporting & Blocking' },
    { id: 'section-4', title: '4. Enforcement' },
    { id: 'section-5', title: '5. Staying Safe In Person' },
    { id: 'section-6', title: '6. Contact' }
];

const CommunityGuidelinesPage = () => {
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
                            <Heart className="w-3.5 h-3.5" />
                            <span>Community First</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-thin text-brand-dark tracking-tight leading-none mb-6">
                            Community <span className="font-bold text-brand-orange">Guidelines</span>
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

                            <p className="text-lg text-brand-grey leading-relaxed">
                                BlynQe is built on trust. These Community Guidelines explain what is and isn't allowed, and what happens if you break the rules. They apply to your profile, photos, messages, and any other interaction on the Service.
                            </p>

                            <section id="section-1" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    1. Be Who You Say You Are
                                </h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>You must be 18 or older to use BlynQe.</li>
                                    <li>Use your own real photos and accurate information. Impersonating another person, using someone else's photos, or misrepresenting your age is prohibited.</li>
                                    <li>Verify your profile with a quick selfie to earn a verified badge and help others trust that you're real.</li>
                                    <li>One account per person. Do not create a new account to evade a ban.</li>
                                </ul>
                            </section>

                            <section id="section-2" className="scroll-mt-28 space-y-6">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    2. Prohibited Content & Behavior
                                </h2>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-brand-dark">2.1 Harassment & Abuse</h3>
                                    <p>
                                        Do not threaten, stalk, demean, or repeatedly contact someone who has asked you to stop or has blocked you.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-brand-dark">2.2 Hate Speech</h3>
                                    <p>
                                        Content that attacks or dehumanizes people based on race, ethnicity, religion, disability, gender, gender identity, sexual orientation, or national origin is not allowed.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-brand-dark">2.3 Sexual Content</h3>
                                    <p>
                                        Nudity, sexually explicit photos, or requests for explicit content are not allowed on profiles or in unsolicited messages. Any sexual content involving or appearing to involve a minor will be removed immediately and reported to the relevant authorities, including the National Center for Missing & Exploited Children (NCMEC) where applicable.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-brand-dark">2.4 Scams, Solicitation & Commercial Activity</h3>
                                    <p>
                                        Do not use BlynQe to sell products or services, solicit money or financial information, promote OnlyFans or similar accounts, or engage in any form of romance scam or catfishing. BlynQe is for real connections — never send money or financial details to another user.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-brand-dark">2.5 Violence & Dangerous Behavior</h3>
                                    <p>
                                        Threats of violence, incitement, or glorification of self-harm are not allowed. If you or someone you know is at risk, please contact local emergency services.
                                    </p>
                                </div>
                            </section>

                            <section id="section-3" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    3. Reporting & Blocking
                                </h2>
                                <p>
                                    Every profile and conversation has a report and block option. Reporting flags the user to our Trust & Safety team for review; blocking immediately prevents further contact from that user. We review reports and aim to respond within a reasonable timeframe. You will not be identified to the person you report.
                                </p>
                            </section>

                            <section id="section-4" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    4. Enforcement
                                </h2>
                                <p>
                                    Violations of these Guidelines may result in, depending on severity:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>A warning and content removal.</li>
                                    <li>Temporary suspension of your account.</li>
                                    <li>Permanent ban from the Service.</li>
                                    <li>Referral to law enforcement, where the conduct may be criminal.</li>
                                </ul>
                                <p className="mt-4">
                                    Enforcement decisions are made by our Trust & Safety team. If you believe your account was actioned in error, you may appeal via <a href="mailto:blynqe3@gmail.com" className="text-brand-orange font-semibold hover:underline">blynqe3@gmail.com</a> or the in-app report tools.
                                </p>
                            </section>

                            <section id="section-5" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    5. Staying Safe In Person
                                </h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Video chat or talk on the phone before meeting in person.</li>
                                    <li>Meet for the first time in a public place.</li>
                                    <li>Tell a friend or family member your plans and location.</li>
                                    <li>Arrange your own transportation to and from the date.</li>
                                    <li>Never send money, gift cards, or financial or account information to someone you have not met in person.</li>
                                    <li>Trust your instincts — leave if you feel unsafe, and report the user afterward.</li>
                                </ul>
                            </section>

                            <section id="section-6" className="scroll-mt-28 space-y-4">
                                <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark border-b border-brand-dark/5 pb-4">
                                    6. Contact
                                </h2>
                                <p>
                                    Questions about these Guidelines can be sent to <a href="mailto:blynqe3@gmail.com" className="text-brand-orange font-semibold hover:underline">blynqe3@gmail.com</a>.
                                </p>
                            </section>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CommunityGuidelinesPage;
