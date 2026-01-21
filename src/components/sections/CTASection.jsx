import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
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
    }
  };

  return (
    <section ref={containerRef} className="relative py-48 lg:py-64 bg-white font-sans overflow-hidden">
      {/* Oversized Background Text */}
      <div className="absolute inset-0 pointer-events-none z-0 flex flex-col justify-center items-center py-20 overflow-hidden mix-blend-multiply opacity-[0.03]">
        <motion.div style={{ y: y1 }} className="text-[30vw] leading-none font-black text-brand-dark whitespace-nowrap">
          BEGIN
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs mb-10 block">
            The Final Step
          </span>

          <h2 className="text-6xl lg:text-8xl font-thin text-brand-dark leading-[0.9] tracking-tight mb-12">
            Your story <br />
            <span className="font-bold text-brand-orange">starts here.</span>
          </h2>

          <p className="text-xl lg:text-2xl text-brand-grey font-light leading-relaxed mb-16 max-w-xl mx-auto">
            Join a community of 500,000+ people who have decided that <br className="hidden lg:block" />
            connection deserves to be real.
          </p>

          <motion.button
            onClick={scrollToDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-4 bg-brand-dark text-white text-lg font-bold uppercase tracking-widest px-12 py-6 rounded-full overflow-hidden shadow-2xl hover:bg-brand-orange transition-colors duration-500"
          >
            <span className="relative z-10">Download Now</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>

          <div className="mt-16 flex justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {['Vogue', 'WIRED', 'TechCrunch', 'GQ'].map((brand, i) => (
              <span key={i} className="text-xl font-serif font-bold text-brand-dark">{brand}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
