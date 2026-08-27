import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles, Heart, Award } from 'lucide-react';
import { contact } from '../data/products';

const heroStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const heroFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] flex items-center section-padding pt-28 pb-16 lg:pt-36 lg:pb-24 bg-ivory grain-overlay overflow-hidden"
    >
      {/* Background Soft Glow & Ambient Elements */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-cream-dark/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-beige/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container-narrow w-full grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column — Editorial Story & Headings */}
        <motion.div
          className="lg:col-span-7 relative z-10 order-2 lg:order-1 text-left"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow Artisan Badge */}
          <motion.div variants={heroFadeUp} className="inline-flex items-center gap-2.5 bg-cream/90 border border-brown/15 px-4 py-1.5 rounded-full mb-6 shadow-soft">
            <div className="w-4 h-4 rounded-full overflow-hidden shrink-0 border border-brown/20 bg-ivory">
              <img src="/images/logo.png" alt="Tokuri" className="w-full h-full object-cover" />
            </div>
            <span className="font-sans text-xs font-semibold tracking-[0.2em] text-brown uppercase">
              Homemade • Butter Wijsman • Tanpa Pengawet
            </span>
          </motion.div>

          {/* Main Title with Elegant Editorial Contrast */}
          <motion.h1
            variants={heroFadeUp}
            className="font-serif text-display font-bold text-brown mb-6 text-balance leading-[1.06]"
          >
            Rasa Istimewa <br />
            <span className="font-serif italic font-normal text-cinnamon">
              untuk Setiap
            </span>{' '}
            Momen Hangat.
          </motion.h1>

          {/* Editorial Paragraph */}
          <motion.p
            variants={heroFadeUp}
            className="font-sans text-base sm:text-lg text-brown-muted max-w-lg mb-9 leading-relaxed"
          >
            Kue kering homemade bertekstur lumer di mulut, dipanggang dari racikan butter pilihan murni
            dan selai nanas asli dengan harga yang tetap bersahabat untuk meja keluarga Anda.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={heroFadeUp} className="flex flex-wrap items-center gap-4 mb-12">
            <Link to="/produk" className="btn-primary">
              <ShoppingBag size={17} />
              Jelajahi Menu Kue
            </Link>
            <a
              href={contact.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Pesan via WhatsApp
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Baker's Guarantee Badges */}
          <motion.div
            variants={heroFadeUp}
            className="pt-8 border-t border-beige/60 grid grid-cols-3 gap-4 max-w-lg"
          >
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-brown block">100%</span>
              <span className="font-sans text-xs text-brown-muted">Bahan Pilihan Murni</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-brown block">Fresh</span>
              <span className="font-sans text-xs text-brown-muted">Baked to Order</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-brown block">Ramah</span>
              <span className="font-sans text-xs text-brown-muted">Harga Bersahabat</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column — Handcrafted Scrapbook & Polaroid Composition with Real Photography */}
        <motion.div
          className="lg:col-span-5 relative order-1 lg:order-2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="relative w-full max-w-md mx-auto py-6">
            {/* Main Polaroid Card */}
            <div className="relative z-10 bg-ivory p-4 pb-7 rounded-3xl shadow-card hover:shadow-card-hover border border-brown/10 ring-1 ring-brown/5 rotate-[-1.5deg] transition-all duration-500">
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-cream-dark">
                <img
                  src="/images/hero-main.jpg"
                  alt="Tokuri Kue Kering Nastar & Kastengel Homemade"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Hand-written Style Caption on Polaroid */}
              <div className="mt-4 px-2 flex items-center justify-between">
                <div>
                  <span className="font-serif font-bold text-base text-brown block">
                    Koleksi Klasik & Spesial
                  </span>
                  <span className="font-sans text-[11px] text-brown-muted">
                    Surabaya, Indonesia
                  </span>
                </div>
                <span className="font-serif italic text-sm text-cinnamon">
                  &ldquo;A Taste of Warmth&rdquo;
                </span>
              </div>

              {/* Washi Tape Top Accent */}
              <div className="washi-tape -top-3 left-1/2 -translate-x-1/2 rotate-1" />
            </div>

            {/* Overlapping Secondary Card: Baker's Note */}
            <motion.div
              className="absolute -bottom-6 -left-4 sm:-left-6 z-20 bg-cream-dark/95 backdrop-blur-sm p-4 rounded-2xl border border-beige shadow-card max-w-[210px] rotate-[3deg]"
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-1.5 text-brown font-serif font-bold text-sm">
                <Sparkles size={14} className="text-caramel" />
                <span>Resep Otentik</span>
              </div>
              <p className="font-sans text-[11px] text-brown-muted leading-relaxed">
                Selai nanas segar dimasak perlahan dengan cengkeh harum & butter murni.
              </p>
              <div className="washi-tape -top-2.5 right-4 w-12 h-4 rotate-[-6deg]" />
            </motion.div>

            {/* Official Tokuri Brand Circular Seal */}
            <motion.div
              className="absolute -top-4 -right-2 sm:-right-4 z-30 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-ivory p-1.5 shadow-card border-2 border-beige rotate-[6deg]"
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/logo.png"
                alt="Logo Tokuri Kue Kering"
                className="w-full h-full object-contain rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
