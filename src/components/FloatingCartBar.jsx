import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp, ShoppingBag, X } from 'lucide-react';
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
          transition={{ duration: 0.15 }}
          className="fixed bottom-6 right-5 sm:right-8 z-40 flex flex-col items-end gap-3 pointer-events-auto"
        >
          {/* Helpful Chat Prompt Tooltip */}
          {isChatTipOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-neo-yellow border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-2.5 rounded-none text-left max-w-[220px] relative hidden sm:block"
            >
              <button
                onClick={() => setIsChatTipOpen(false)}
                className="absolute -top-3 -left-3 w-6 h-6 rounded-none bg-white text-black hover:bg-black hover:text-white flex items-center justify-center border-2 border-black transition-colors"
                aria-label="Tutup pesan"
              >
                <X size={14} strokeWidth={3} />
              </button>
              <span className="font-display font-bold text-xs text-black block">
                Butuh Rekomendasi?
              </span>
              <span className="font-sans text-[11px] text-black font-semibold block leading-tight mt-0.5">
                Chat admin Tokuri via WhatsApp untuk cek stok fresh hari ini.
              </span>
            </motion.div>
          )}

          {/* Action Buttons Group */}
          <div className="flex items-center gap-2.5 bg-white border-2 border-black p-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {location.pathname !== '/produk' && (
              <Link
                to="/produk"
                className="inline-flex items-center gap-1.5 bg-neo-bg hover:bg-neo-secondary hover:text-black text-black font-sans font-bold text-xs px-3.5 py-2 border-2 border-black transition-colors"
                title="Buka Katalog"
              >
                <ShoppingBag size={14} strokeWidth={2.5} />
                <span className="hidden sm:inline">Katalog</span>
              </Link>
            )}

            <a
              href={contact.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-black text-white font-sans font-bold text-xs px-4 py-2.5 border-2 border-black transition-all active:translate-y-0.5 active:translate-x-0.5"
            >
              <MessageCircle size={16} strokeWidth={2.5} />
              <span>Chat WhatsApp</span>
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-neo-primary hover:bg-black text-white flex items-center justify-center border-2 border-black transition-colors active:translate-y-0.5 active:translate-x-0.5"
              aria-label="Kembali ke atas"
              title="Kembali ke atas"
            >
              <ArrowUp size={20} strokeWidth={3} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCartBar;
