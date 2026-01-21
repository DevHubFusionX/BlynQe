import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Heart, Zap, Shield, Camera, MessageSquare } from 'lucide-react';

const FeaturesPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const features = [
    {
      icon: Zap,
      title: 'Smart Matching',
      desc: 'Moving beyond skin-deep. Our value-driven protocol connects you on what actually matters.',
    },
    {
      icon: Shield,
      title: 'Verified Humans',
      desc: '100% real people. Mandatory biometric verification creates a space free from bots and fakes.',
    },
    {
      icon: Heart,
      title: 'Intentional Dating',
      desc: 'Designed for depth. Thoughtful prompts that foster meaningful conversation over shallow swiping.',
    },
    {
      icon: MessageSquare,
      title: 'Guided Chats',
      desc: 'Never run out of things to say. Intelligent icebreakers that open the door to real connection.',
    },
    {
      icon: Camera,
      title: 'Real Moments',
      desc: 'Unfiltered glimpses into daily life. Share your true self without the pressure of perfection.',
    },
    {
      icon: Sparkles,
      title: 'AI Wingman',
      desc: 'Your personal dating concierge. Refine your profile and plan the perfect first date.',
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-bg relative overflow-hidden font-sans">
      {/* Oversized Background Text */}
      <div className="fixed inset-0 pointer-events-none z-0 flex flex-col justify-between py-20 overflow-hidden">
        <motion.div style={{ x: y1, opacity: 0.03 }} className="text-[15vw] leading-none font-black text-brand-dark whitespace-nowrap">
          AUTHENTICITY CONNECTION
        </motion.div>
        <motion.div style={{ x: y2, opacity: 0.03 }} className="text-[15vw] leading-none font-black text-brand-dark whitespace-nowrap self-end">
          REAL HUMAN MOMENTS
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32">
        {/* Minimalist Header */}
        <div className="max-w-4xl mb-32">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs mb-8 block"
          >
            The blynQe Standard
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-8xl font-thin text-brand-dark leading-[1.1] tracking-tight"
          >
            Capabilities designed for <br />
            <span className="font-bold text-brand-orange">modern romance.</span>
          </motion.h1>
        </div>

        {/* Quiet Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="mb-8 overflow-hidden">
                  <div className="w-16 h-16 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-500">
                    <Icon className="w-6 h-6 text-brand-dark group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {feature.title}
                </h3>

                <p className="text-brand-grey text-lg leading-relaxed font-light border-l border-brand-dark/10 pl-6 group-hover:border-brand-orange transition-colors duration-500">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Spotlight - Large Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-40 relative rounded-[2rem] overflow-hidden bg-brand-dark h-[60vh] flex items-end p-12 lg:p-24"
        >
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&h=900&fit=crop"
            alt="Real Connection"
            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl lg:text-6xl font-thin text-white mb-6">
              Experience <strong className="font-bold text-brand-orange">Quiet</strong> connection.
            </h2>
            <p className="text-white/80 text-xl font-light leading-relaxed mb-10">
              No noise. No gamification. Just a serene space built for two people to find each other.
            </p>
            <button className="bg-white text-brand-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-orange hover:text-white transition-all duration-300">
              Begin Journey
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage;
