import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';
import blyneDevice from '../../assets/blyne-device.png';

const AppDownloadSection = () => {
  return (
    <section 
      className="relative py-24 lg:py-36 bg-[#F7F5F2] font-sans overflow-hidden border-t border-neutral-200/50"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* Left Column: Visual Mockup Showcase (5 Columns) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1 relative">
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[280px] lg:w-[320px] aspect-[1/2] select-none"
            >
              {/* Phone Mockup Image */}
              <img
                src={blyneDevice}
                alt="blynQe App Interface"
                className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)]"
              />

              {/* Floating Match Card (Translucent Glassmorphism) */}
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute bottom-16 -right-4 lg:-right-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.08)] border border-white/60 w-60 text-left"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/15 flex items-center justify-center text-xs font-bold text-brand-orange">
                    E
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-dark">Emma, 27</div>
                    <div className="text-[9px] text-[#FF7A00] font-bold uppercase tracking-wider">Just matched</div>
                  </div>
                </div>
                <div className="text-xs font-light text-brand-grey leading-relaxed italic">
                  "This feels different. In a good way."
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Copy & Store Buttons (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 lg:pl-12">
            
            {/* Header Badge */}
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.25em] mb-4 block">
              Everywhere You Are
            </span>

            {/* Premium Heading */}
            <h2 className="text-5xl lg:text-[4.25rem] font-extrabold tracking-tight text-brand-dark leading-[0.95] mb-6">
              Your connection, <br />
              <span className="font-extralight italic text-brand-orange">in your pocket.</span>
            </h2>

            {/* Description Subtext */}
            <p className="text-base sm:text-lg text-brand-grey font-light leading-relaxed mb-10 max-w-lg">
              Seamlessly transition from introspection to interaction. Experience the full depth of blynQe on iOS and Android.
            </p>

            {/* Matching App Store & Play Store Pills */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-brand-dark hover:bg-[#2D2A26] text-white px-7 py-3 rounded-full shadow-md transition-colors duration-300 border border-white/5 cursor-pointer"
              >
                <Apple className="w-5 h-5 fill-current" />
                <div className="text-left">
                  <div className="text-[9px] uppercase font-bold tracking-widest opacity-60 leading-none mb-0.5">Download on the</div>
                  <div className="text-sm font-extrabold leading-none">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-3 bg-brand-dark hover:bg-[#2D2A26] text-white px-7 py-3 rounded-full shadow-md transition-colors duration-300 border border-white/5 cursor-pointer"
              >
                <Play className="w-5 h-5 fill-current" />
                <div className="text-left">
                  <div className="text-[9px] uppercase font-bold tracking-widest opacity-60 leading-none mb-0.5">Get it on</div>
                  <div className="text-sm font-extrabold leading-none">Google Play</div>
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
