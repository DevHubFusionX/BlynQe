import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const heroImage = "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=1287&auto=format&fit=crop";

  const scrollToDownload = () => {
    const downloadSection = document.getElementById('app-download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen font-sans overflow-hidden pt-12">
      {/* Mobile: Full Background Image */}
      <div
        className="lg:hidden absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 via-brand-bg/70 to-brand-bg/95" />
      </div>

      {/* Desktop: Solid Background */}
      <div className="hidden lg:block absolute inset-0 bg-brand-bg z-0" />

      {/* Oversized Background Text */}
      <div className="absolute inset-0 pointer-events-none z-[1] flex flex-col justify-between py-10 lg:py-20 overflow-hidden mix-blend-multiply opacity-[0.03]">
        <motion.div style={{ x: y1 }} className="text-[18vw] leading-none font-black text-brand-dark whitespace-nowrap ml-[-5vw]">
          CONNECTION
        </motion.div>
        <motion.div style={{ x: y2 }} className="text-[18vw] leading-none font-black text-brand-dark whitespace-nowrap self-end mr-[-5vw]">
          AUTHENTIC
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-20 pt-28 pb-12 lg:py-20">

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-center lg:text-left z-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs border-b border-brand-orange/30 pb-1">
              The Future of Romance
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-[7rem] font-thin text-brand-dark leading-[0.9] tracking-tighter mb-6 lg:mb-12">
            Find love, <br />
            <span className="font-bold text-brand-orange relative inline-block">
              quietly.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-orange opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-base lg:text-2xl text-brand-grey font-light leading-relaxed mb-8 lg:mb-14 max-w-lg mx-auto lg:mx-0">
            A bespoke dating experience built for depth. No noise, no gamification—just a serene space for two people to find each other.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <motion.button
              onClick={scrollToDownload}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto bg-brand-dark text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-orange transition-all duration-300 shadow-xl hover:shadow-brand-orange/20 flex items-center justify-center gap-3"
            >
              <Download className="w-4 h-4" />
              Begin Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto text-brand-dark font-bold uppercase tracking-widest text-xs px-8 py-4 lg:px-8 lg:py-5 rounded-full border border-brand-dark/10 hover:border-brand-orange hover:text-brand-orange transition-all duration-300 flex items-center justify-center gap-2 bg-white/50 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none"
            >
              Our Philosophy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Mobile: Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="lg:hidden flex justify-center mt-10"
          >
            <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4">
              <div className="text-2xl font-thin text-brand-dark">4.9/5</div>
              <div className="text-[10px] uppercase tracking-widest text-brand-grey font-bold">Trusted by Humans</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Desktop: Cinematic Visual Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block relative w-full max-w-[600px] h-[80vh] flex-shrink-0"
        >
          <div className="absolute inset-0 rounded-t-[20rem] rounded-b-[0rem] overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Couple in Love"
              className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent mix-blend-multiply" />
          </div>

          {/* Floating 'Trust' Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-12 -left-12 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-[200px]"
          >
            <div className="text-3xl font-thin text-brand-dark mb-1">4.9/5</div>
            <div className="text-[10px] uppercase tracking-widest text-brand-grey font-bold">Trusted by Humans</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
