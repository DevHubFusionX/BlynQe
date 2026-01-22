import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Apple, Play } from 'lucide-react';
import blyneDevice from '../../assets/blyne-device.png';

const AppDownloadSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <section ref={containerRef} id="app-download" className="relative py-32 lg:py-48 bg-brand-bg font-sans overflow-hidden">
            {/* Oversized Background Text */}
            <div className="absolute inset-0 pointer-events-none z-0 flex flex-col justify-end items-end py-20 overflow-hidden mix-blend-multiply opacity-[0.03]">
                <motion.div style={{ y: y1 }} className="text-[25vw] leading-none font-black text-brand-dark whitespace-nowrap mr-[-2vw]">
                    ACCESS
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Cinematic Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex justify-center order-2 lg:order-1"
                    >
                        <div className="relative w-[300px] lg:w-[400px] aspect-[1/2] overflow-hidden drop-shadow-2xl">
                            <img
                                src={blyneDevice}
                                alt="blynQe App Interface"
                                className="w-full h-full object-contain"
                            />

                            {/* Floating "Live" element */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white text-xs font-bold">EM</div>
                                    <div>
                                        <div className="text-xs font-bold text-brand-dark">Emma</div>
                                        <div className="text-[10px] text-brand-grey uppercase tracking-wider">Just matched</div>
                                    </div>
                                </div>
                                <div className="text-sm font-light text-brand-dark italic">
                                    "This feels different. In a good way."
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Minimal Content */}
                    <div className="order-1 lg:order-2 text-center lg:text-left">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs mb-8 block"
                        >
                            Everywhere You Are
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl lg:text-7xl font-thin text-brand-dark leading-[1] tracking-tight mb-8"
                        >
                            Your connection, <br />
                            <span className="font-bold text-brand-orange">in your pocket.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="text-xl text-brand-grey font-light leading-relaxed mb-12 max-w-md mx-auto lg:mx-0"
                        >
                            Seamlessly transition from introspection to interaction. Experience the full depth of blynQe on iOS and Android.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.a
                                href="#"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-xl shadow-xl hover:bg-brand-orange transition-colors duration-300"
                            >
                                <Apple className="w-6 h-6 fill-current" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-bold tracking-wider opacity-60">Download on the</div>
                                    <div className="text-lg font-bold leading-none">App Store</div>
                                </div>
                            </motion.a>

                            <motion.a
                                href="#"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 bg-white text-brand-dark border border-brand-dark/10 px-8 py-4 rounded-xl hover:border-brand-orange/50 transition-colors duration-300"
                            >
                                <Play className="w-6 h-6 fill-current" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-bold tracking-wider opacity-60">Get it on</div>
                                    <div className="text-lg font-bold leading-none">Google Play</div>
                                </div>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDownloadSection;
