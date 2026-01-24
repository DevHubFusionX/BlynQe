import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Safety', path: '/safety' },
    { name: 'FAQ', path: '/faq' }
  ];

  const handleDownloadClick = () => {
    if (location.pathname !== '/') {
      navigate('/#app-download');
    } else {
      const downloadSection = document.getElementById('app-download');
      if (downloadSection) {
        downloadSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className={`relative bg-brand-peach/80 backdrop-blur-3xl transition-all duration-500 ${scrolled
          ? 'shadow-2xl shadow-brand-dark/15 py-2 px-6'
          : 'shadow-xl shadow-brand-dark/5 py-3 px-6'
          }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 pl-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="h-10 flex items-center"
            >
              <img src={logo} alt="blynQe Logo" className="h-full w-auto" />
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-5 py-2 font-medium text-sm transition-all group"
              >
                <span className={`relative z-10 transition-colors duration-300 ${isActive(link.path)
                  ? 'text-brand-orange'
                  : 'text-brand-grey hover:text-brand-dark'
                  }`}>
                  {link.name}
                </span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-brand-orange/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Download CTA */}
          <div className="hidden lg:flex items-center pr-1">
            <motion.button
              onClick={handleDownloadClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 bg-brand-dark text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-brand-orange transition-colors duration-300 shadow-lg shadow-brand-dark/10"
            >
              <Download className="w-4 h-4" />
              <span>Get App</span>
              <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-3 text-brand-dark hover:bg-brand-bg/50 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-brand-dark/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-[280px] bg-brand-peach/95 backdrop-blur-2xl shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-brand-dark hover:bg-brand-bg/50 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-5 py-4 rounded-2xl font-medium transition-all ${isActive(link.path)
                          ? 'bg-brand-orange/10 text-brand-orange'
                          : 'text-brand-dark hover:bg-brand-bg/50'
                          }`}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className={`w-4 h-4 transition-opacity ${isActive(link.path) ? 'opacity-100' : 'opacity-0'
                          }`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={handleDownloadClick}
                  className="flex items-center justify-center gap-3 px-5 py-4 rounded-2xl font-medium bg-brand-dark text-white hover:bg-brand-orange transition-colors mt-auto"
                >
                  <Download className="w-4 h-4" />
                  Download App
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
