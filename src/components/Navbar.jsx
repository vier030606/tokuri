import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import TokuriBrand from './TokuriBrand';
import { navLinks, contact } from '../data/products';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 section-padding border-b-4 border-black bg-white">
        <div className="container-narrow flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <TokuriBrand size="sm" />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans text-sm tracking-wide transition-transform duration-75 active:translate-y-0.5 relative py-1 group ${
                    isActive
                      ? 'text-neo-primary font-bold'
                      : 'text-black hover:text-neo-primary font-bold'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive ? (
                      <span className="absolute -bottom-1 left-0 right-0 h-1 bg-neo-primary" />
                    ) : (
                      <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all duration-150 group-hover:w-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={contact.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex btn-primary text-xs py-2.5 px-5"
          >
            Pesan Sekarang
            <ArrowRight size={14} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-black border-2 border-black bg-neo-yellow active:translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-neo-bg flex flex-col items-center justify-center lg:hidden px-6"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="mb-12">
              <TokuriBrand size="lg" />
            </div>

            <div className="flex flex-col items-center gap-6 w-full max-w-xs">
              {navLinks.map((link) => (
                <div key={link.path} className="w-full text-center">
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block font-display text-3xl sm:text-4xl py-2 border-b-4 border-transparent hover:border-black transition-colors ${
                        isActive
                          ? 'text-neo-primary font-bold border-black'
                          : 'text-black hover:text-neo-primary font-bold'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </div>
              ))}

              <div className="w-full pt-8">
                <a
                  href={contact.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center text-lg py-4"
                >
                  Pesan Sekarang
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
