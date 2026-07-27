import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Track absolute scroll in pixels to avoid offset range issues
  const scale = useTransform(scrollY, [0, 600], [1, 1.12]);
  const y = useTransform(scrollY, [0, 600], [0, 100]);
  const textY = useTransform(scrollY, [0, 400], [0, -30]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const blurVal = useTransform(scrollY, [0, 400], [0, 12]);
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`);

  const heroImage = "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=1287&auto=format&fit=crop";

  const scrollToDownload = () => {
    const downloadSection = document.getElementById('app-download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark"
    >
      {/* Immersive Background Image with Ken-Burns Parallax Effect */}
      <motion.div
        style={{
          backgroundImage: `url(${heroImage})`,
          scale,
          y,
          filter
        }}
        className="absolute inset-0 z-0 bg-cover bg-center"
      />

      {/* Cinematic Overlays: Top dark vignette fading into bottom brand-bg page transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-brand-bg z-10 pointer-events-none" />

      {/* Soft warm centered ambient glow flare to enhance text contrast and premium look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-brand-orange/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none z-10 mix-blend-screen" />

      {/* Main Content (Centered) */}
      <motion.div
        style={{ y: textY, opacity, filter }}
        className="relative z-20 max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center pt-24"
      >



        {/* High-Impact Centered Header */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl lg:text-[7.5rem] font-black text-white leading-[0.95] tracking-tight mb-8"
        >
          Find love, <br />
          <span className="font-extralight italic text-white/95">quietly.</span>
        </motion.h1>

        {/* Cinematic description subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-base sm:text-xl lg:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mb-12"
        >
          A bespoke dating experience built for depth. No noise, no gamification—just a serene space for two people to find each other.
        </motion.p>

        {/* Centered CTA Pill Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToDownload}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white text-brand-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs shadow-2xl transition-all duration-300 hover:bg-white/95 cursor-pointer"
          >
            <span>Begin Journey</span>
            <ArrowRight className="w-4 h-4 text-brand-dark" />
          </motion.button>
        </motion.div>

      </motion.div>

      {/* Dynamic down indicator mouse animation or trust badge */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none hidden sm:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
