import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { contact } from '../data/products';
import { staggerContainer, fadeUp, viewportConfig } from '../utils/animations';

const heroStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const heroFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeOut', delay: 0.4 },
  },
};

const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center section-padding overflow-hidden"
    >
      {/* Subtle background botanical decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 10 C60 40, 20 80, 40 140 C50 170, 80 190, 100 190 C120 190, 150 170, 160 140 C180 80, 140 40, 100 10Z" stroke="#5A351B" strokeWidth="1" />
          <path d="M100 10 L100 190" stroke="#5A351B" strokeWidth="0.5" />
          <path d="M70 60 Q100 90, 130 60" stroke="#5A351B" strokeWidth="0.5" fill="none" />
          <path d="M60 100 Q100 130, 140 100" stroke="#5A351B" strokeWidth="0.5" fill="none" />
          <path d="M65 140 Q100 165, 135 140" stroke="#5A351B" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="container-narrow w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-24 lg:pt-0">
        {/* Left Column — Text Content */}
        <motion.div
          className="relative z-10 order-2 lg:order-1"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={heroFadeUp} className="inline-flex items-center gap-2.5 bg-cream-dark/70 border border-beige/50 px-3.5 py-1.5 rounded-full mb-5 shadow-soft">
            <img src="/images/logo.png" alt="Tokuri" className="w-5 h-5 rounded-full object-cover shrink-0" />
            <span className="font-sans text-xs font-medium tracking-wider text-brown uppercase">
              Kue Kering Homemade
            </span>
          </motion.div>

          <motion.h1
            variants={heroFadeUp}
            className="font-serif text-display font-bold text-brown mb-6 text-balance"
          >
            Rasa Istimewa{' '}
            <br className="hidden sm:block" />
            untuk Setiap Momen.
          </motion.h1>

          <motion.p
            variants={heroFadeUp}
            className="font-sans text-base sm:text-lg text-brown-light/80 max-w-lg mb-8 leading-relaxed"
          >
            Kue kering homemade dengan rasa yang istimewa,
            dibuat dengan bahan pilihan dan harga yang tetap bersahabat.
          </motion.p>

          <motion.div variants={heroFadeUp} className="flex flex-wrap gap-4">
            <Link to="/produk" className="btn-primary">
              <ShoppingBag size={16} />
              Lihat Produk
            </Link>
            <a
              href={contact.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Pesan Sekarang
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Brand tagline */}
          <motion.div variants={heroFadeUp} className="mt-12 flex items-center gap-3">
            <div className="w-8 h-px bg-beige" />
            <span className="font-sans text-xs tracking-[0.25em] text-brown-light/50 uppercase">
              Homemade • Premium • Terjangkau
            </span>
          </motion.div>
        </motion.div>

        {/* Right Column — Image Collage */}
        <motion.div
          className="relative order-1 lg:order-2 flex items-center justify-center"
          variants={imageReveal}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-lg mx-auto">
            {/* Main image placeholder */}
            <div className="relative z-10 aspect-[4/5] rounded-2xl img-placeholder shadow-card overflow-hidden rotate-1">
              <img
                src="/images/hero-main.jpg"
                alt="Tokuri Kue Kering — koleksi kue kering homemade premium"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center bg-cream-dark p-8">
                      <svg class="w-16 h-16 text-brown-light/30 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <path d="M21 15l-5-5L5 21"/>
                      </svg>
                      <span class="font-serif text-brown-light/40 text-sm italic">Hero Image</span>
                      <span class="font-sans text-brown-light/30 text-xs mt-1">hero-main.jpg</span>
                    </div>
                  `;
                }}
              />
            </div>

            {/* Secondary overlapping image */}
            <div className="absolute -bottom-6 -left-8 z-20 w-36 sm:w-44 aspect-square rounded-xl img-placeholder shadow-soft overflow-hidden -rotate-3">
              <img
                src="/images/hero-secondary.jpg"
                alt="Detail kue kering Tokuri"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center bg-cream-dark/90 p-4">
                      <svg class="w-8 h-8 text-brown-light/30 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <path d="M21 15l-5-5L5 21"/>
                      </svg>
                      <span class="font-sans text-brown-light/30 text-[10px]">secondary.jpg</span>
                    </div>
                  `;
                }}
              />
            </div>

            {/* Third accent image */}
            <div className="absolute -top-4 -right-6 z-20 w-28 sm:w-32 aspect-[3/4] rounded-lg img-placeholder shadow-soft overflow-hidden rotate-3">
              <img
                src="/images/hero-accent.jpg"
                alt="Kemasan kue kering Tokuri"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center bg-cream-dark/80 p-3">
                      <svg class="w-6 h-6 text-brown-light/30 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <path d="M21 15l-5-5L5 21"/>
                      </svg>
                      <span class="font-sans text-brown-light/30 text-[9px]">accent.jpg</span>
                    </div>
                  `;
                }}
              />
            </div>

            {/* Decorative tape element */}
            <div className="tape top-8 -left-3 z-30" />
            <div className="tape -bottom-2 right-12 z-30 rotate-6" />

            {/* Official Tokuri Brand Seal Badge */}
            <div className="absolute -bottom-4 right-6 z-30 w-20 sm:w-24 aspect-square rounded-full bg-ivory p-1.5 shadow-card border border-beige/60 rotate-[-4deg] hover:rotate-0 transition-transform duration-300">
              <img
                src="/images/logo.png"
                alt="Logo Tokuri Kue Kering"
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            {/* Decorative botanical line art */}
            <div className="absolute -bottom-12 -right-12 w-24 h-24 opacity-[0.08]">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 90 C30 70, 10 50, 20 30 C25 20, 40 10, 50 10 C60 10, 75 20, 80 30 C90 50, 70 70, 50 90Z" stroke="#5A351B" strokeWidth="1" />
                <path d="M50 10 L50 90" stroke="#5A351B" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="font-sans text-[10px] tracking-[0.2em] text-brown-light/40 uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-brown-light/20"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
