import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Pricing', path: '/pricing' },
    { name: 'Safety', path: '/safety' },
    { name: 'FAQ', path: '/faq' }
  ];

  const scrollToDownload = () => {
    const downloadSection = document.getElementById('app-download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      {/* Pill Container */}
      <div className="bg-white/80 backdrop-blur-xl rounded-full shadow-2xl shadow-brand-dark/10 border border-brand-orange/5 px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 pl-2 group">
          <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-dark">blynQe</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 bg-brand-bg rounded-full px-2 py-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${isActive(link.path)
                  ? 'bg-brand-orange text-white'
                  : 'text-brand-grey hover:text-brand-dark hover:bg-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Download CTA */}
        <div className="hidden lg:flex items-center pr-2">
          <button
            onClick={scrollToDownload}
            className="flex items-center gap-2 bg-brand-dark text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-orange transition-all"
          >
            <Download className="w-4 h-4" />
            Download App
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-3 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-brand-orange/5 p-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-5 py-3 rounded-xl font-semibold text-center transition-all ${isActive(link.path)
                    ? 'bg-brand-orange text-white'
                    : 'text-brand-dark hover:bg-brand-bg'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-brand-orange/10 my-3" />
            <button
              onClick={scrollToDownload}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-brand-orange text-white"
            >
              <Download className="w-4 h-4" />
              Download App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
