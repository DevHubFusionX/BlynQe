import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Zap, Shield, Camera, MessageSquare, Apple, Play } from 'lucide-react';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const FeaturesPage = () => {
  const features = [
    {
      icon: Zap,
      title: 'Smart Matching',
      desc: 'Moving beyond skin-deep. Our value-driven algorithm connects you on what actually matters, evaluating behavioral and life goal alignment.',
      renderWidget: () => (
        <div className="mt-6 p-3 bg-[#F8F9FA] rounded-xl border border-neutral-100 flex items-center justify-between">
          <span className="text-[10px] text-neutral-500 font-mono">Compatibility Ratio</span>
          <span className="text-xs font-bold text-brand-orange">98% Match</span>
        </div>
      )
    },
    {
      icon: Shield,
      title: 'Verified Humans',
      desc: '100% real people. Mandatory biometric verification creates a secure, authentic space free from bots, catfish, and spam.',
      renderWidget: () => (
        <div className="mt-6 p-3 bg-[#F8F9FA] rounded-xl border border-neutral-100 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[10px] text-neutral-500 font-mono">Biometric Status: Verified</span>
        </div>
      )
    },
    {
      icon: Heart,
      title: 'Intentional Dating',
      desc: 'Designed for depth. Thoughtful profile prompts and behavioral checks foster meaningful conversation over shallow swiping.',
      renderWidget: () => (
        <div className="mt-6 p-3 bg-[#F8F9FA] rounded-xl border border-neutral-100 flex items-center justify-between">
          <span className="text-[10px] text-neutral-500 font-mono">Intent: Serious / Long-term</span>
          <Heart className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
        </div>
      )
    },
    {
      icon: MessageSquare,
      title: 'Guided Chats',
      desc: 'Never run out of things to say. Intelligent icebreakers open the door to real connection without the dry greeting loops.',
      renderWidget: () => (
        <div className="mt-6 p-3 bg-[#F8F9FA] rounded-xl border border-neutral-100 text-left">
          <div className="text-[8px] text-neutral-400 uppercase font-bold tracking-wider mb-1">Icebreaker</div>
          <div className="text-[10px] text-brand-dark italic font-medium">"What's your ideal quiet Sunday morning?"</div>
        </div>
      )
    },
    {
      icon: Camera,
      title: 'Real Moments',
      desc: 'Unfiltered glimpses into daily life. Share your true self through live moments without the pressure of curated perfection.',
      renderWidget: () => (
        <div className="mt-6 p-3 bg-[#F8F9FA] rounded-xl border border-neutral-100 flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-neutral-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=60&h=60&fit=crop" className="w-full h-full object-cover" />
          </div>
          <span className="text-[10px] text-neutral-500 font-mono">Moments Posted Today: 2</span>
        </div>
      )
    },
    {
      icon: Sparkles,
      title: 'Date Concierge',
      desc: 'Your personal connection coordinator. Automatically plan the perfect offline meetup at verified, comfortable local coffee shops.',
      renderWidget: () => (
        <div className="mt-6 p-3 bg-[#F8F9FA] rounded-xl border border-neutral-100 flex items-center justify-between">
          <span className="text-[10px] text-neutral-500 font-mono">Curated Meetup Coords</span>
          <span className="text-[9px] bg-brand-orange/10 text-brand-orange font-bold px-1.5 py-0.5 rounded-full">Curated</span>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      
      {/* Immersive Dark Hero Header */}
      <div className="relative pt-40 pb-24 bg-[#120E0A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,122,0,0.15),transparent_50%)] pointer-events-none z-0" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#FF7A00] font-bold tracking-[0.25em] uppercase text-xs mb-6 block"
          >
            The blynQe Standard
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl lg:text-7xl font-extrabold leading-[1] tracking-tight mb-8"
          >
            Capabilities designed for <br />
            <span className="font-extralight italic text-[#FF7A00]">modern romance.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-xl"
          >
            We built BlynQe with values-based matchmaking, biometric verification, and structured offline date coordination to bring depth back to dating.
          </motion.p>
        </div>
      </div>

      {/* Grid Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        
        {/* Bento Cards Grid */}
        <ScrollAnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white border border-neutral-100 rounded-[2rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-left">
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center border border-neutral-100/50 mb-6 group-hover:bg-[#FF7A00] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-brand-dark mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-brand-grey text-sm font-light leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Custom Mock Illustration widget */}
                  {feature.renderWidget && feature.renderWidget()}
                </motion.div>
              );
            })}
          </div>
        </ScrollAnimatedSection>

        {/* Feature Spotlight Banner */}
        <ScrollAnimatedSection className="mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[3rem] overflow-hidden bg-brand-dark min-h-[400px] flex items-end p-8 lg:p-20 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&h=900&fit=crop"
              alt="Real Connection"
              className="absolute inset-0 w-full h-full object-cover opacity-35 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-xl text-left">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Experience <span className="font-extralight italic text-[#FF7A00]">quiet</span> connection.
              </h2>
              <p className="text-white/70 text-base font-light leading-relaxed mb-8">
                No noise. No gamification. Just a serene space built for two people to find each other and transition organically offline.
              </p>
              <button className="bg-white hover:bg-neutral-100 text-brand-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-colors cursor-pointer shadow-lg">
                Begin Journey
              </button>
            </div>
          </motion.div>
        </ScrollAnimatedSection>
      </div>
    </div>
  );
};

export default FeaturesPage;
