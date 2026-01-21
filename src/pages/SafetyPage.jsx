import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Lock, Eye, Flag, UserCheck, ShieldCheck, Zap, AlertCircle } from 'lucide-react';

const SafetyPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);

    const features = [
        {
            icon: UserCheck,
            title: "Mandatory Verification",
            description: "Every face is verified by AI. A community of real humans, with zero tolerance for bots.",
            stat: "100% Verified"
        },
        {
            icon: Lock,
            title: "End-to-End Encryption",
            description: "Your conversations are private. We use industry-standard encryption for every message.",
            stat: "AES-256"
        },
        {
            icon: ShieldCheck,
            title: "Behavioral Analysis",
            description: "Proactive monitoring detects suspicious patterns before they affect your experience.",
            stat: "24/7 Active"
        },
        {
            icon: Eye,
            title: "Incognito Mode",
            description: "Browse without being seen. Complete control over your visibility.",
            stat: "Invisible"
        }
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-brand-bg relative overflow-hidden font-sans pb-20">
            {/* Oversized Background Text */}
            <div className="fixed inset-0 pointer-events-none z-0 flex flex-col justify-end py-20 overflow-hidden">
                <motion.div style={{ y: y1, opacity: 0.03 }} className="text-[18vw] leading-none font-black text-brand-dark whitespace-nowrap ml-[-5vw]">
                    PROTECTION
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-40">
                {/* Minimalist Header */}
                <div className="max-w-3xl mb-32">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs mb-8 block"
                    >
                        Safety Architecture
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl lg:text-7xl font-thin text-brand-dark leading-[1] tracking-tight"
                    >
                        Peace of mind <br />
                        <span className="font-bold text-brand-orange">as a standard.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 text-brand-grey text-lg font-light max-w-xl leading-relaxed"
                    >
                        We built blynQe on a foundation of trust. Advanced security measures operate quietly in the background, so you can focus on connection.
                    </motion.p>
                </div>

                {/* Protocol Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                className="group border-t border-brand-dark/10 pt-12"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-500">
                                        <Icon className="w-5 h-5 text-brand-dark group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <span className="font-mono text-xs text-brand-orange uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {feature.stat}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-thin text-brand-dark mb-4">
                                    {feature.title}
                                </h3>

                                <p className="text-brand-grey text-lg leading-relaxed font-light max-w-md">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Human Oversight Section - Minimalist */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="mt-40 border-t border-brand-dark/10 pt-20 flex flex-col lg:flex-row justify-between items-start gap-12"
                >
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-thin text-brand-dark mb-6">Human Oversight</h2>
                        <p className="text-brand-grey text-lg font-light leading-relaxed">
                            Behind our algorithms is a dedicated team of safety experts standing by 24/7.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="text-left">
                            <div className="text-4xl font-thin text-brand-orange mb-1">12m</div>
                            <div className="text-xs uppercase tracking-widest text-brand-grey">Response Time</div>
                        </div>
                        <div className="w-px bg-brand-dark/10 hidden sm:block"></div>
                        <div>
                            <button className="text-brand-dark font-bold border-b border-brand-dark pb-1 hover:text-brand-orange hover:border-brand-orange transition-colors">
                                Contact Safety Team
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SafetyPage;
