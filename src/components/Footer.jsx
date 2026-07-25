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

  const y1 = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const footerLinks = {
    product: [
      { name: 'Features', path: '/features' },
      { name: 'Safety', path: '/safety' },
      { name: 'Pricing', path: '/pricing' }
    ],
    company: [
      { name: 'About', path: '/about' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact', path: '/contact' }
    ],
    legal: [
      { name: 'Privacy', path: '/privacy' },
      { name: 'Terms', path: '/terms' },
      { name: 'Guidelines', path: '/community-guidelines' }
    ]
  };

  const socials = [
    { icon: Facebook, path: '#', label: 'Facebook' },
    { icon: Twitter, path: '#', label: 'Twitter' },
    { icon: Instagram, path: '#', label: 'Instagram' },
    { icon: Linkedin, path: '#', label: 'LinkedIn' }
  ];

  return (
    <footer ref={containerRef} className="relative bg-brand-dark text-white font-sans overflow-hidden">
      {/* Oversized Background Text */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          style={{ y: y1, opacity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[20vw] leading-none font-black text-white/[0.02] whitespace-nowrap"
        >
          LOVE
        </motion.div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pt-20 lg:pt-32 pb-12 lg:pb-20">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-5 space-y-8">
              <Link to="/" className="flex items-center gap-3 group w-fit">
                <div className="h-12 flex items-center">
                  <img src={logo} alt="blynQe Logo" className="h-full w-auto" />
                </div>
              </Link>

              <p className="text-white/50 text-lg lg:text-xl font-light leading-relaxed max-w-sm">
                A serene space for two people to find each other. Dating, reimagined.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socials.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.path}
                      aria-label={social.label}
                      className="group w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300"
                    >
                      <Icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="lg:col-span-2 space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter / CTA Column */}
            <div className="col-span-2 lg:col-span-1"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-white/30 text-sm font-light">
                © {currentYear} blynQe Inc. All rights reserved.
              </div>

              <div className="flex items-center gap-2 text-white/30 text-sm">
                <span className="font-light">Made with</span>
                <Heart className="w-4 h-4 text-brand-orange fill-brand-orange animate-pulse" />
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
