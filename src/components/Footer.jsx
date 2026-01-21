import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
      { name: 'Terms', path: '/terms' }
    ]
  };

  const socials = [
    { icon: Facebook, path: '#' },
    { icon: Twitter, path: '#' },
    { icon: Instagram, path: '#' },
    { icon: Linkedin, path: '#' }
  ];

  return (
    <footer className="bg-brand-dark text-white pt-12 lg:pt-20 pb-8 lg:pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand Column */}
          <div className="col-span-2 space-y-6 lg:space-y-8">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <span className="text-xl lg:text-2xl font-bold tracking-tight">blynQe</span>
            </Link>
            <p className="text-gray-400 text-sm lg:text-lg max-w-sm leading-relaxed">
              Human-centered dating. Your journey to love starts with authenticity.
            </p>
            <div className="flex gap-3">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.path}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-all"
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4 lg:space-y-6">
              <h4 className="text-xs lg:text-sm font-bold uppercase tracking-widest text-brand-orange">
                {title}
              </h4>
              <ul className="space-y-2 lg:space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 lg:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-xs lg:text-sm">
            &copy; {currentYear} blynQe Inc.
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs lg:text-sm">
            Made with <Heart className="w-3 h-3 lg:w-4 lg:h-4 text-brand-orange fill-current" /> for lovers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
