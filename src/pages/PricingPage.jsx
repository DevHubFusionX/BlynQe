import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, X, Sparkles, Crown, Zap, ArrowRight } from 'lucide-react';

const PricingPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);

    const scrollToDownload = () => {
        const downloadSection = document.getElementById('app-download');
        if (downloadSection) {
            downloadSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/#app-download';
        }
    };

    const plans = [
        {
            name: "Guest",
            price: "$0",
            period: "forever",
            description: "Experience the community.",
            icon: Zap,
            accent: "from-gray-500 to-gray-600",
            features: [
                { name: "Create profile", included: true },
                { name: "Browse members", included: true },
                { name: "5 likes per day", included: true },
                { name: "Unlimited messaging", included: false },
                { name: "See who likes you", included: false }
            ]
        },
        {
            name: "Member",
            price: "$19",
            period: "/month",
            description: "For meaningful connection.",
            icon: Sparkles,
            accent: "from-brand-orange to-brand-red",
            popular: true,
            features: [
                { name: "Everything in Guest", included: true },
                { name: "Unlimited likes", included: true },
                { name: "See who likes you", included: true },
                { name: "Unlimited messaging", included: true },
                { name: "1 weekly boost", included: true }
            ]
        },
        {
            name: "Verified VIP",
            price: "$39",
            period: "/month",
            description: "The ultimate status.",
            icon: Crown,
            accent: "from-brand-dark to-black",
            features: [
                { name: "Everything in Member", included: true },
                { name: "Unlimited boosts", included: true },
                { name: "Priority support", included: true },
                { name: "Verified badge", included: true },
                { name: "Incognito mode", included: true }
            ]
        }
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-brand-bg relative overflow-hidden font-sans pb-20">
            {/* Oversized Background Text */}
            <div className="fixed inset-0 pointer-events-none z-0 flex flex-col justify-start py-20 overflow-hidden">
                <motion.div style={{ y: y1, opacity: 0.03 }} className="text-[18vw] leading-none font-black text-brand-dark whitespace-nowrap ml-[-5vw]">
                    MEMBERSHIP
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-40">
                {/* Minimalist Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 lg:mb-32">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs mb-8 block"
                        >
                            Invest in Yourself
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl lg:text-7xl font-thin text-brand-dark leading-[1] tracking-tight"
                        >
                            Choose your <br />
                            <span className="font-bold text-brand-orange">commitment level.</span>
                        </motion.h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-brand-grey text-lg font-light max-w-xs"
                    >
                        Flexible plans designed to match your pace. Cancel or change anytime.
                    </motion.div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
                    {plans.map((plan, index) => {
                        const Icon = plan.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                className={`relative group bg-white rounded-[2.5rem] p-8 lg:p-10 border border-brand-dark/5 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-dark/5 ${plan.popular ? 'lg:-mt-12 z-10 shadow-xl' : ''}`}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 p-8">
                                        <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.accent} flex items-center justify-center mb-8 shadow-lg`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-brand-dark mb-2">{plan.name}</h3>
                                <p className="text-brand-grey text-sm mb-8 font-medium">{plan.description}</p>

                                <div className="mb-8 border-b border-brand-dark/5 pb-8">
                                    <span className="text-5xl font-black text-brand-dark tracking-tight">{plan.price}</span>
                                    <span className="text-brand-grey font-medium">{plan.period}</span>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            {feature.included ? (
                                                <Check className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                                            ) : (
                                                <X className="w-5 h-5 text-brand-grey/20 shrink-0 mt-0.5" />
                                            )}
                                            <span className={`text-sm ${feature.included ? 'text-brand-dark font-medium' : 'text-brand-grey/40'}`}>
                                                {feature.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={scrollToDownload}
                                    className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide uppercase transition-all flex items-center justify-center gap-2 ${plan.popular
                                            ? 'bg-brand-orange text-white hover:bg-brand-dark'
                                            : 'bg-brand-bg text-brand-dark hover:bg-brand-dark hover:text-white'
                                        }`}
                                >
                                    Get Started <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
