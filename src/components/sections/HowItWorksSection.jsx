import { motion } from 'framer-motion';
import { User, Fingerprint, MessageCircle, MapPin, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "The Profile",
      description: "We start with the real you. Our behavioral intake goes beyond the surface, capturing the nuances of your personality and values.",
      icon: User,
      className: "md:col-span-2 bg-brand-peach/30",
    },
    {
      number: "02",
      title: "The Match",
      description: "Our algorithm works quietly to find alignment.",
      icon: Fingerprint,
      className: "md:col-span-1 bg-white/40",
    },
    {
      number: "03",
      title: "The Introduction",
      description: "No cold opens. Guided prompts.",
      icon: MessageCircle,
      className: "md:col-span-1 bg-white/40",
    },
    {
      number: "04",
      title: "The Connection",
      description: "Move from the app to the real world. We help plan your first meet-up to ensure it's safe, comfortable, and memorable.",
      icon: MapPin,
      className: "md:col-span-2 bg-brand-peach/30",
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 lg:py-40 bg-brand-bg font-sans overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-brand-orange/20"
            >
              The blynQe Way
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-heading font-bold text-brand-dark leading-tight tracking-tight"
            >
              A path to <br />
              <span className="text-brand-orange font-thin italic">something real.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-brand-grey font-light leading-relaxed max-w-sm"
          >
            Dating redefined. Simple, transparent, and focused entirely on human depth.
          </motion.p>
        </div>

        {/* Bento Grid / Mobile Carousel */}
        <div className="relative">
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 pb-8 md:pb-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className={`group relative p-8 lg:p-10 rounded-[2.5rem] border border-brand-dark/5 backdrop-blur-xl transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-dark/5 snap-center min-w-[85vw] md:min-w-0 ${step.className}`}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-4xl font-black opacity-5 group-hover:opacity-10 transition-opacity">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark mb-4 group-hover:text-brand-orange transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-brand-grey font-light leading-relaxed group-hover:text-brand-dark transition-colors">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative background circle */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-orange/5 rounded-full blur-2xl group-hover:bg-brand-orange/10 transition-all" />
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Scroll Indicator Indicators */}
          <div className="flex md:hidden justify-center gap-2 mt-4">
            {steps.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-dark/10" />
            ))}
          </div>
        </div>

        {/* Final CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-brand-dark rounded-[2.5rem] p-8 lg:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl lg:text-4xl font-thin mb-2">Ready to find depth?</h3>
            <p className="text-white/60 font-light">Join thousands of humans seeking something real.</p>
          </div>
          <button className="relative z-10 group flex items-center gap-3 bg-white text-brand-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-orange hover:text-white transition-all duration-300">
            Begin Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
