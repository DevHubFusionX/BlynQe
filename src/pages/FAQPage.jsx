import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQPage = () => {
    const containerRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);

    const faqs = [
        {
            question: "What makes blynQe different?",
            answer: "We prioritize depth. Our 'Value-First' protocol matches you based on core beliefs and communication styles, not just skin-deep preferences."
        },
        {
            question: "How does verification work?",
            answer: "Authenticity is our standard. Every profile undergoes mandatory biometric facial verification to ensure a community of 100% real humans."
        },
        {
            question: "Is blynQe available globally?",
            answer: "We are currently live in 50+ countries. Our rollout is intentional, ensuring high-quality communities in every region we serve."
        },
        {
            question: "Can I use blynQe for free?",
            answer: "Yes. Connection should be accessible. Our 'Guest' membership allows you to match and message, while paid plans offer enhanced intent signals."
        },
        {
            question: "What is 'Intentional Mode'?",
            answer: "A feature that pauses your visibility in the feed while you focus on existing matches. We encourage stopping the swipe cycle to build real connections."
        }
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-brand-bg relative overflow-hidden font-sans pb-20">
            {/* Oversized Background Text */}
            <div className="fixed inset-0 pointer-events-none z-0 flex flex-col justify-start py-20 overflow-hidden">
                <motion.div style={{ y: y1, opacity: 0.03 }} className="text-[20vw] leading-none font-black text-brand-dark whitespace-nowrap ml-[-2vw]">
                    ANSWERS
                </motion.div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 lg:pt-40">
                {/* Minimalist Header */}
                <div className="text-center mb-24 lg:mb-32">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs mb-8 block"
                    >
                        Support & Clarity
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl lg:text-7xl font-thin text-brand-dark leading-[1] tracking-tight"
                    >
                        Common <br />
                        <span className="font-bold text-brand-orange">questions.</span>
                    </motion.h1>
                </div>

                {/* Quiet Luxury Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group border-b border-brand-dark/5 last:border-0"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-8 lg:py-10 text-left"
                            >
                                <span className={`text-xl lg:text-3xl font-light transition-colors duration-500 ${openIndex === index ? 'text-brand-orange' : 'text-brand-dark group-hover:text-brand-grey'
                                    }`}>
                                    {faq.question}
                                </span>
                                <span className={`relative flex items-center justify-center w-8 h-8 transition-transform duration-500 ${openIndex === index ? 'rotate-180' : 'rotate-0'
                                    }`}>
                                    <ChevronDown className={`w-6 h-6 ${openIndex === index ? 'text-brand-orange' : 'text-brand-dark'}`} />
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-10 text-lg text-brand-grey font-light leading-relaxed max-w-3xl">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Minimal Contact CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="mt-32 text-center"
                >
                    <p className="text-brand-grey text-lg font-light mb-8">
                        Need more specific guidance?
                    </p>
                    <a
                        href="mailto:support@blynqe.com"
                        className="inline-flex items-center gap-3 text-brand-dark font-bold text-lg border-b border-brand-dark pb-1 hover:text-brand-orange hover:border-brand-orange transition-all duration-300"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Contact Concierge
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default FAQPage;
