import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import appShots from '../../assets/appShots.png';

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="relative py-24 lg:py-48 bg-gradient-to-b from-brand-bg to-white font-sans overflow-hidden">
      {/* Immersive background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-orange/5 rounded-full blur-[150px] mix-blend-multiply" />
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-brand-peach/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-brand-orange/20">
              The Interface of Intent
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl lg:text-[8rem] font-heading font-bold text-brand-dark leading-[1] mb-10 tracking-[-0.04em]"
          >
            How App <br />
            <span className="text-brand-orange font-thin italic">works.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl lg:text-3xl text-brand-grey font-light leading-relaxed max-w-3xl mb-12"
          >
            Flow is for everyone, from freelancers and business owners to young families. <br className="hidden lg:block" />
            Designed to bridge the gap between digital interaction and real human depth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(244, 176, 86, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 bg-[#F4B056] text-brand-dark px-12 py-6 rounded-full font-bold text-xl shadow-xl transition-all duration-300"
            >
              <span>Explore blynQe</span>
              <div className="w-8 h-8 rounded-full bg-brand-dark/10 flex items-center justify-center group-hover:bg-brand-dark transition-all">
                <ArrowRight className="w-5 h-5 group-hover:text-white transition-colors" />
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Massive Centered Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-6xl mx-auto -mx-6 md:mx-auto"
        >
          <div className="relative rounded-3xl lg:rounded-[3rem] p-1 lg:p-8 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden">
            <img
              src={appShots}
              alt="blynQe App Interface"
              className="w-full h-auto rounded-[2rem] shadow-2xl scale-[1.02] hover:scale-100 transition-transform duration-[2s]"
            />

            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Decorative floating elements */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -left-12 w-48 h-48 bg-brand-orange-light/50 backdrop-blur-3xl rounded-full -z-10 border border-white/40 shadow-inner"
          />
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-16 -right-16 w-64 h-64 bg-brand-dark/5 backdrop-blur-2xl rounded-full -z-10 border border-brand-dark/5"
          />
        </motion.div>
      </div>

      {/* Oversized Signature Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-[0.02] pointer-events-none select-none translate-y-1/2">
        <h3 className="text-[30vw] font-black leading-none text-brand-dark whitespace-nowrap">
          SYSTEM
        </h3>
      </div>
    </section>
  );
};

export default WhyChooseSection;
