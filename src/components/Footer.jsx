import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Heart, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const footerLinks = {
    product: [
      { name: 'Features', path: '/features' },
      { name: 'Safety', path: '/safety' }
    ],
    company: [
      { name: 'About', path: '/about' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact', path: '/contact' }
    ],
    legal: [
      { name: 'Privacy', path: '/privacy' },
      { name: 'Terms', path: '/terms' },
      { name: 'Guidelines', path: '/community-guidelines' },
      { name: 'Child Safety', path: '/child-safety' }
    ]
  };

  const socials = [
    { icon: Facebook, path: '#', label: 'Facebook' },
    { icon: Twitter, path: '#', label: 'Twitter' },
    { icon: Instagram, path: '#', label: 'Instagram' },
    { icon: Linkedin, path: '#', label: 'LinkedIn' }
  ];

  return (
    <footer ref={containerRef} className="relative bg-brand-dark text-white font-sans overflow-hidden border-t border-white/5">
      {/* Soft warm centered ambient glow flares */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Oversized Background Brand Text */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[18vw] leading-none font-black text-white/[0.012] whitespace-nowrap select-none uppercase tracking-[0.08em]"
        >
          BLYNQE
        </motion.div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pt-24 lg:pt-32 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">

            {/* Brand Column (4 columns) */}
            <div className="lg:col-span-4 space-y-8 text-left">
              <Link to="/" className="flex items-center gap-3 group w-fit">
                <div className="h-10 flex items-center">
                  <img src={logo} alt="blynQe Logo" className="h-full w-auto" />
                </div>
              </Link>

              <p className="text-white/60 text-base lg:text-lg font-light leading-relaxed max-w-sm">
                A serene, intentional space built for two people to find each other. No noise, no endless search—just genuine depth.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socials.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.path}
                      aria-label={social.label}
                      className="group w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 shadow-sm"
                    >
                      <Icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Columns (5 columns) */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-6 text-left">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title} className="space-y-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-orange">
                    {title}
                  </h4>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className="group flex items-center gap-1 text-white/50 hover:text-white transition-colors duration-300 text-sm font-light"
                        >
                          <span className="relative py-0.5">
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-orange group-hover:w-full transition-all duration-300" />
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-orange" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter Column (3 columns) */}
            <div className="lg:col-span-3 space-y-6 text-left">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-orange">
                Newsletter
              </h4>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                Receive updates, quiet reflections, and curated relationship insights directly to your inbox.
              </p>
              
              <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center max-w-sm">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3.5 pr-14 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all duration-300"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-10 h-10 rounded-full bg-brand-orange hover:bg-brand-orange/95 flex items-center justify-center text-white transition-all duration-300 cursor-pointer shadow-md shadow-brand-orange/10 hover:scale-105 active:scale-95"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-white/30 text-xs font-light">
                © {currentYear} blynQe Inc. All rights reserved.
              </div>

              <div className="flex items-center gap-1.5 text-white/30 text-xs">
                <span className="font-light">Made with</span>
                <Heart className="w-3.5 h-3.5 text-brand-orange fill-brand-orange animate-pulse" />
                <span className="font-light">for those seeking</span>
                <span className="text-white font-medium">something real</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
