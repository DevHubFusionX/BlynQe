import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Play, Apple } from 'lucide-react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => location.pathname === path;
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', path: '/features' },
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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      >
        {/* Soft dark gradient top overlay for text legibility (only active when transparent) */}
        <div 
          className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none transition-opacity duration-500 z-0 ${
            scrolled ? 'opacity-0' : 'opacity-100'
          }`} 
        />

        {/* Navbar Inner Container */}
        <div className={`relative transition-all duration-500 z-10 ${
          scrolled
            ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/10'
            : 'bg-transparent py-5'
        }`}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-3 items-center">
            
            {/* Logo (Left Column) */}
            <Link to="/" className="flex items-center gap-3 pl-2 group justify-self-start">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="h-9 flex items-center"
              >
                <img src={logo} alt="blynQe Logo" className="h-full w-auto" />
              </motion.div>
            </Link>

            {/* Centered Navigation Links (Middle Column - Desktop Only) */}
            <div className="hidden lg:flex items-center justify-center gap-2 justify-self-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-5 py-2 font-medium text-sm transition-all group"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-brand-orange'
                      : 'text-white/80 group-hover:text-white'
                  }`}>
                    {link.name}
                  </span>
                  
                  {/* Elegant bottom line on hover */}
                  <span className={`absolute bottom-1.5 left-5 right-5 h-[2px] bg-brand-orange transition-transform duration-300 origin-center ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Action Buttons (Right Column - Desktop Only) */}
            <div className="hidden lg:flex items-center gap-3 justify-self-end pr-2">
              <motion.button
                onClick={handleDownloadClick}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 bg-white text-brand-dark px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase shadow-md transition-all duration-300 hover:bg-white/95 hover:shadow-lg cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-brand-dark text-brand-dark" />
                <span>Google Play</span>
              </motion.button>
              <motion.button
                onClick={handleDownloadClick}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 bg-white text-brand-dark px-5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase shadow-md transition-all duration-300 hover:bg-white/95 hover:shadow-lg cursor-pointer"
              >
                <Apple className="w-3.5 h-3.5 fill-brand-dark text-brand-dark" />
                <span>App Store</span>
              </motion.button>
            </div>

            {/* Mobile Menu Toggle (Right Column - Mobile Only) */}
            <div className="flex lg:hidden justify-end">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
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
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-[280px] bg-brand-dark/95 backdrop-blur-2xl shadow-2xl border-l border-white/5 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full p-6">
                
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Links */}
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
                        className={`flex items-center justify-between px-5 py-4 rounded-2xl font-medium transition-all ${
                          isActive(link.path)
                            ? 'bg-brand-orange/15 text-brand-orange'
                            : 'text-white/80 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className={`w-4 h-4 transition-opacity ${
                          isActive(link.path) ? 'opacity-100 text-brand-orange' : 'opacity-0'
                        }`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className="flex flex-col gap-3 mt-auto">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    onClick={handleDownloadClick}
                    className="flex items-center justify-center gap-2.5 bg-white text-brand-dark px-5 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-md transition-all active:scale-98 cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-brand-dark text-brand-dark" />
                    <span>Google Play</span>
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    onClick={handleDownloadClick}
                    className="flex items-center justify-center gap-2.5 bg-white text-brand-dark px-5 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-md transition-all active:scale-98 cursor-pointer"
                  >
                    <Apple className="w-4 h-4 fill-brand-dark text-brand-dark" />
                    <span>App Store</span>
                  </motion.button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
