import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Gift, ArrowUp, ShoppingBag, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { contact } from '../data/products';

const FloatingCartBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatTipOpen, setIsChatTipOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-5 sm:right-8 z-40 flex flex-col items-end gap-3 pointer-events-auto"
        >
          {/* Helpful Chat Prompt Tooltip */}
          {isChatTipOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-ivory/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-card border border-brown/15 text-left max-w-[220px] relative hidden sm:block"
            >
              <button
                onClick={() => setIsChatTipOpen(false)}
                className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-cream-dark text-brown-muted hover:text-brown flex items-center justify-center text-[10px]"
                aria-label="Tutup pesan"
              >
                <X size={10} />
              </button>
              <span className="font-serif font-bold text-xs text-brown block">
                Butuh Rekomendasi?
              </span>
              <span className="font-sans text-[11px] text-brown-muted block leading-tight mt-0.5">
                Chat admin Tokuri via WhatsApp untuk cek stok fresh hari ini.
              </span>
            </motion.div>
          )}

          {/* Action Buttons Group */}
          <div className="flex items-center gap-2.5 bg-ivory/90 backdrop-blur-md p-1.5 rounded-full shadow-card border border-brown/10 ring-1 ring-brown/5">
            {location.pathname !== '/produk' && (
              <Link
                to="/produk"
                className="inline-flex items-center gap-1.5 bg-cream-dark hover:bg-beige text-brown font-sans font-medium text-xs px-3.5 py-2 rounded-full transition-colors"
                title="Buka Katalog"
              >
                <ShoppingBag size={14} />
                <span className="hidden sm:inline">Katalog</span>
              </Link>
            )}

            <a
              href={contact.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans font-semibold text-xs px-4 py-2.5 rounded-full shadow-sm transition-transform hover:scale-105"
            >
              <MessageCircle size={16} />
              <span>Chat WhatsApp</span>
            </a>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-cream hover:bg-cream-dark text-brown flex items-center justify-center transition-colors"
              aria-label="Kembali ke atas"
              title="Kembali ke atas"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCartBar;
