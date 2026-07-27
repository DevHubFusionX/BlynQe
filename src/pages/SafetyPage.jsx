import { motion } from 'framer-motion';
import { Shield, Lock, Eye, ShieldCheck, UserCheck } from 'lucide-react';

const SafetyPage = () => {
  const safetyProtocols = [
    {
      icon: UserCheck,
      title: "Mandatory Verification",
      description: "Every face is verified by advanced biometric checks. A community of 100% verified real humans, with zero tolerance for fake profiles.",
      stat: "100% Verified"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Your conversations are completely private. We use industry-standard cryptographic keys to protect your messages and identity details.",
      stat: "AES-256 Protocol"
    },
    {
      icon: ShieldCheck,
      title: "Proactive Behavior Check",
      description: "Smart monitoring detects suspicious interactions and reports toxic behavior before it affects your dating experience.",
      stat: "24/7 Shield"
    },
    {
      icon: Eye,
      title: "Incognito Navigation",
      description: "Browse matching feeds completely invisible until you choose to reveal yourself. Total control over your digital visibility.",
      stat: "Invisible Mode"
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
            Safety Architecture
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl lg:text-7xl font-extrabold leading-[1] tracking-tight mb-8"
          >
            Peace of mind <br />
            <span className="font-extralight italic text-[#FF7A00]">as a standard.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/60 text-lg lg:text-xl font-light leading-relaxed max-w-xl"
          >
            We built BlynQe on a foundation of trust. Advanced security measures operate quietly in the background, so you can focus on connection.
          </motion.p>
        </div>
      </div>

      {/* Grid Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        
        {/* Safety Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safetyProtocols.map((protocol, index) => {
            const Icon = protocol.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-neutral-100 rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group text-left"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center border border-neutral-100/50 group-hover:bg-[#FF7A00] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
                    </div>
                    {/* Status Badge */}
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest bg-neutral-50 px-3 py-1 rounded-full group-hover:text-[#FF7A00] group-hover:bg-orange-50 transition-all duration-300">
                      {protocol.stat}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-dark mb-4">
                    {protocol.title}
                  </h3>

                  <p className="text-brand-grey text-sm font-light leading-relaxed">
                    {protocol.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Human Oversight Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-32 border-t border-neutral-200/60 pt-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 text-left"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Human Oversight</h2>
            <p className="text-brand-grey text-base font-light leading-relaxed">
              Behind our algorithms is a dedicated team of safety experts standing by 24/7.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-8 lg:gap-12">
            <div>
              <div className="text-4xl font-extralight text-[#FF7A00] mb-1">12m</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">Response Time</div>
            </div>
            
            <div className="w-px h-12 bg-neutral-200 hidden sm:block"></div>
            
            <div>
              <a 
                href="mailto:safety@blynqe.com" 
                className="bg-brand-dark hover:bg-[#2D2A26] text-white px-7 py-3.5 rounded-full font-bold uppercase tracking-widest text-[10px] transition-colors cursor-pointer inline-block shadow-md"
              >
                Contact Safety Team
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default SafetyPage;
