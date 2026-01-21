import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Shield, Sparkles, Users, ArrowRight } from 'lucide-react';

const WhyChooseSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const features = [
    {
      icon: Users,
      title: "Human First",
      subtitle: "Verified Authenticity",
      description: "Every profile is verified with biometric AI. A community of 100% real people, where trust is the foundation.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=1000&fit=crop"
    },
    {
      icon: Heart,
      title: "Deep Intent",
      subtitle: "Values-Based Matching",
      description: "Our protocol prioritizes core beliefs over superficial preferences, fostering connections that actually last.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop"
    },
    {
      icon: Shield,
      title: "Safe Space",
      subtitle: "Privacy by Design",
      description: "Security isn't a feature, it's our foundation. End-to-end encryption keeps your journey completely private.",
      image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=800&h=1000&fit=crop"
    },
    {
      icon: Sparkles,
      title: "Guided Journey",
      subtitle: "AI Concierge",
      description: "We don't just match you; we help you connect. Intelligent icebreakers and thoughtful date planning.",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=1000&fit=crop"
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-brand-bg font-sans">
      {/* Oversized Background Text - Romantic Style */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 -left-[5vw] text-[15vw] lg:text-[12vw] leading-none font-black text-brand-dark whitespace-nowrap mix-blend-multiply opacity-[0.03]"
        >
          AUTHENTIC
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-40 -right-[5vw] text-[15vw] lg:text-[12vw] leading-none font-black text-brand-dark whitespace-nowrap mix-blend-multiply opacity-[0.03]"
        >
          CONNECTION
        </motion.div>
      </div>

      {/* Desktop: Two-Column Sticky Scroll Layout */}
      <div className="hidden lg:block relative z-10">
        <div className="flex">
          {/* Left Column: Sticky Content */}
          <div className="w-[45%] relative">
            <div className="sticky top-0 h-screen flex items-center">
              <div className="px-12 lg:px-20 max-w-xl">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-8"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs border-b border-brand-orange/30 pb-1 inline-block"
                  >
                    Our Philosophy
                  </motion.span>

                  <h2 className="text-6xl lg:text-7xl font-thin text-brand-dark leading-[0.95] tracking-tight">
                    Why we <br />
                    <span className="font-bold text-brand-orange relative inline-block">
                      exist.
                      <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-orange opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </span>
                  </h2>

                  <p className="text-xl text-brand-grey font-light leading-relaxed max-w-md">
                    We're building a dating experience where authenticity isn't optional—it's everything. A serene space for two people to find each other.
                  </p>

                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-dark hover:text-brand-orange transition-all duration-300 pt-4"
                  >
                    Discover More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.button>

                  {/* Floating Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex gap-12 pt-8"
                  >
                    <div>
                      <div className="text-4xl font-thin text-brand-dark">100%</div>
                      <div className="text-[10px] uppercase tracking-widest text-brand-grey font-bold mt-1">Verified Profiles</div>
                    </div>
                    <div>
                      <div className="text-4xl font-thin text-brand-dark">4.9</div>
                      <div className="text-[10px] uppercase tracking-widest text-brand-grey font-bold mt-1">User Rating</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Feature Cards */}
          <div className="w-[55%] py-32 pr-12 lg:pr-20">
            <div className="space-y-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative"
                  >
                    <div className="flex gap-8">
                      {/* Image Side */}
                      <div className="w-1/2 relative">
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-dark/10">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Floating Number Badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-brand-dark/5"
                        >
                          <span className="text-2xl font-thin text-brand-dark">0{index + 1}</span>
                        </motion.div>
                      </div>

                      {/* Content Side */}
                      <div className="w-1/2 flex flex-col justify-center py-8">
                        <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors duration-500">
                          <Icon className="w-5 h-5 text-brand-orange" />
                        </div>

                        <span className="text-brand-grey text-xs uppercase tracking-widest font-bold mb-2">
                          {feature.subtitle}
                        </span>

                        <h3 className="text-3xl lg:text-4xl font-thin text-brand-dark mb-4 group-hover:translate-x-2 transition-transform duration-500">
                          {feature.title}
                        </h3>

                        <p className="text-brand-grey font-light leading-relaxed border-l-2 border-brand-dark/10 pl-6 group-hover:border-brand-orange transition-colors duration-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Elegant Stacked Layout */}
      <div className="lg:hidden relative z-10 px-6 py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
            Our Philosophy
          </span>
          <h2 className="text-5xl font-thin text-brand-dark leading-[0.95] mb-6">
            Why we <br />
            <span className="font-bold text-brand-orange">exist.</span>
          </h2>
          <p className="text-lg text-brand-grey font-light leading-relaxed max-w-md mx-auto">
            A dating experience where authenticity isn't optional—it's everything.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="space-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Image */}
                <div className="relative mb-8">
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -bottom-4 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xl font-thin text-brand-dark">0{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="pl-4 border-l-2 border-brand-orange/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-brand-orange" />
                    </div>
                    <span className="text-brand-grey text-xs uppercase tracking-widest font-bold">
                      {feature.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-brand-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-brand-grey leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-16 mt-20 pt-10 border-t border-brand-dark/10"
        >
          <div className="text-center">
            <div className="text-3xl font-thin text-brand-dark">100%</div>
            <div className="text-[10px] uppercase tracking-widest text-brand-grey font-bold mt-1">Verified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-thin text-brand-dark">4.9</div>
            <div className="text-[10px] uppercase tracking-widest text-brand-grey font-bold mt-1">Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
