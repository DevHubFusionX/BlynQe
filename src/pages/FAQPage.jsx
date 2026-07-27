import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes blynQe different?",
      answer: "We prioritize depth. Our 'Value-First' protocol matches you based on core beliefs and communication styles, rather than just superficial appearance checks."
    },
    {
      question: "How does facial verification work?",
      answer: "Authenticity is our core standard. Every user undergoes mandatory biometric face scan checks during signup to maintain a verified community of real humans."
    },
    {
      question: "Is blynQe available globally?",
      answer: "We are currently live in 50+ countries. Our rollout is intentional, ensuring active, high-quality local communities in every region we serve."
    },
    {
      question: "Can I use blynQe for free?",
      answer: "Yes. Basic matching and messaging are fully accessible. Paid memberships are optional and offer advanced signals to express intent."
    },
    {
      question: "What is 'Intentional Mode'?",
      answer: "A feature that pauses your visibility in matching feeds while you focus on existing conversations, encouraging you to stop swiping and start connecting."
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
            Support & Clarity
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl lg:text-7xl font-extrabold leading-[1] tracking-tight mb-8"
          >
            Common <br />
            <span className="font-extralight italic text-[#FF7A00]">questions.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-xl"
          >
            Everything you need to know about our matching algorithm, security systems, and community guidelines.
          </motion.p>
        </div>
      </div>

      {/* Accordion List Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left cursor-pointer transition-colors"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                    isOpen ? 'text-[#FF7A00]' : 'text-[#120E0A]'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <span className={`w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-orange-50 text-[#FF7A00]' : 'text-neutral-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 lg:px-8 lg:pb-10 text-brand-grey text-sm sm:text-base font-light leading-relaxed text-left border-t border-neutral-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Support Concierge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 border-t border-neutral-200/60 pt-16 text-center"
        >
          <p className="text-brand-grey text-base font-light mb-6">
            Need more specific guidance?
          </p>
          <a
            href="mailto:support@blynqe.com"
            className="inline-flex items-center gap-2.5 bg-brand-dark hover:bg-[#2D2A26] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-colors cursor-pointer shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact Concierge</span>
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default FAQPage;
