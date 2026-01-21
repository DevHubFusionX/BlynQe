import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Check } from 'lucide-react';

const HowItWorksSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const steps = [
    {
      number: "01",
      title: "The Profile",
      description: "We start with the real you. Our behavioral intake goes beyond the surface, capturing the nuances of your personality and values.",
    },
    {
      number: "02",
      title: "The Match",
      description: "Our algorithm works quietly to find alignment. We only introduce you to people where there is a high probability of deep connection.",
    },
    {
      number: "03",
      title: "The Introduction",
      description: "No cold opens. We facilitate the first conversation with guided prompts based on your shared interests.",
    },
    {
      number: "04",
      title: "The Connection",
      description: "Move from the app to the real world. We help plan your first meet-up to ensure it's safe, comfortable, and memorable.",
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-white font-sans">
      {/* Oversized Background Text */}
      <div className="absolute inset-0 pointer-events-none z-0 flex flex-col justify-start items-center py-20 overflow-hidden mix-blend-multiply opacity-[0.03]">
        <motion.div style={{ y: y1 }} className="text-[20vw] leading-none font-black text-brand-dark whitespace-nowrap">
          JOURNEY
        </motion.div>
      </div>

      {/* Desktop: Two-Column Sticky Scroll Layout */}
      <div className="hidden lg:block relative z-10">
        <div className="flex max-w-7xl mx-auto px-6">
          {/* Left Column: Sticky Content */}
          <div className="w-2/5 relative">
            <div className="sticky top-0 h-screen flex items-center">
              <div className="pr-12 max-w-md">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs mb-8 block"
                >
                  How It Works
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl lg:text-7xl font-thin text-brand-dark leading-[1] tracking-tight mb-8"
                >
                  A path to <br />
                  <span className="font-bold text-brand-orange">something real.</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-brand-grey font-light leading-relaxed mb-12"
                >
                  Dating doesn't have to be a game. We've redesigned the process to be simple, transparent, and focused entirely on you.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <ArrowDown className="w-8 h-8 text-brand-orange animate-bounce font-light" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Steps */}
          <div className="w-3/5 py-32 space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col md:flex-row gap-8 md:gap-12 items-start group"
              >
                <div className="flex-shrink-0 relative">
                  <div className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-dark/10 to-transparent group-hover:from-brand-orange/20 transition-all duration-500">
                    {step.number}
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-brand-orange/50" />
                </div>

                <div className="pt-4">
                  <h3 className="text-3xl lg:text-4xl font-thin text-brand-dark mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {step.title}
                  </h3>
                  <p className="text-xl text-brand-grey font-light leading-relaxed border-l border-brand-dark/10 pl-6 group-hover:border-brand-orange transition-colors duration-500">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-brand-dark text-white rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-5xl font-thin mb-8">Ready to begin?</h3>
                <button className="bg-white text-brand-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl">
                  Download App
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile: Stacked Layout */}
      <div className="lg:hidden relative z-10 px-6 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl font-thin text-brand-dark leading-[1] tracking-tight mb-6">
            A path to <br />
            <span className="font-bold text-brand-orange">something real.</span>
          </h2>
          <p className="text-lg text-brand-grey font-light leading-relaxed">
            Dating doesn't have to be a game. We've redesigned the process to be simple, transparent, and focused entirely on you.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-orange/40 to-brand-dark/20">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-brand-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-brand-grey leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-dark text-white rounded-3xl p-10 text-center relative overflow-hidden mt-16"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-thin mb-6">Ready to begin?</h3>
            <button className="bg-white text-brand-dark px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl">
              Download App
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

