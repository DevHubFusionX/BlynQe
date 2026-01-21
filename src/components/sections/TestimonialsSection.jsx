import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const testimonials = [
    {
      name: "Sarah & Mike",
      location: "New York, USA",
      quote: "We weren't looking for just anyone. We were looking for someone who understood our quiet moments. blynQe found that alignment.",
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&h=400&fit=crop"
    },
    {
      name: "Lucas & Elena",
      location: "Berlin, Germany",
      quote: "The intentionality of the platform is palpable. No noise, just a clear path to the person I was meant to meet.",
      image: "https://images.unsplash.com/photo-1623330188314-8f4645626731?w=400&h=400&fit=crop"
    },
    {
      name: "David",
      location: "London, UK",
      quote: "I was tired of the games. blynQe offered a dignified way to date, respectful of my time and my values.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 lg:py-48 bg-brand-bg font-sans overflow-hidden">
      {/* Oversized Background Text */}
      <div className="absolute inset-0 pointer-events-none z-0 flex flex-col justify-center items-end py-20 overflow-hidden mix-blend-multiply opacity-[0.03]">
        <motion.div style={{ y: y1 }} className="text-[25vw] leading-none font-black text-brand-dark whitespace-nowrap mr-[-2vw]">
          STORIES
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 lg:mb-32">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs mb-8 block"
            >
              Real Connections
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-thin text-brand-dark leading-[1] tracking-tight"
            >
              Voices from the <br />
              <span className="font-bold text-brand-orange">community.</span>
            </motion.h2>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="hidden lg:flex items-center gap-2 text-brand-dark font-bold uppercase tracking-widest text-xs hover:text-brand-orange transition-colors"
          >
            Read all stories <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Editorial Slider Layout */}
        <div className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 lg:overflow-visible lg:grid lg:grid-cols-3 lg:gap-12 lg:mx-0 lg:px-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="min-w-[85vw] md:min-w-[60vw] lg:min-w-0 snap-center rounded-[2rem] bg-white p-8 lg:p-12 shadow-xl shadow-brand-dark/5 flex flex-col justify-between h-full relative group border border-transparent hover:border-brand-orange/10 transition-colors"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-orange/10 group-hover:text-brand-orange/30 transition-colors duration-500" />

              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-brand-dark/10">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-dark text-lg">{testimonial.name}</div>
                    <div className="text-brand-grey text-xs uppercase tracking-widest">{testimonial.location}</div>
                  </div>
                </div>
                <p className="text-xl lg:text-2xl font-light text-brand-dark leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="h-1 w-12 bg-brand-orange/20 rounded-full group-hover:w-full group-hover:bg-brand-orange transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
