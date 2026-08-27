import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
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
      className="relative min-h-[92vh] flex items-center section-padding pt-28 pb-16 lg:pt-36 lg:pb-24 bg-neo-bg overflow-hidden border-b-4 border-black"
    >
      <div className="container-narrow w-full grid lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        {/* Left Column — Editorial Story & Headings */}
        <motion.div
          className="lg:col-span-7 relative z-10 order-2 lg:order-1 text-left"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow Badge */}
          <motion.div variants={heroFadeUp} className="inline-flex items-center gap-2.5 bg-neo-yellow px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
            <div className="w-5 h-5 overflow-hidden shrink-0 bg-white border-2 border-black flex items-center justify-center">
              <img src="/images/logo.png" alt="Tokuri" className="w-full h-full object-cover" />
            </div>
            <span className="font-sans text-xs font-bold tracking-widest text-black uppercase">
              Homemade • Butter Wijsman
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={heroFadeUp}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black mb-6 text-balance leading-none tracking-tight uppercase"
          >
            Rasa Istimewa <br />
            <span className="text-neo-primary inline-block transform -rotate-2 bg-neo-yellow px-2 border-4 border-black mt-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Setiap Saat.
            </span>
          </motion.h1>

          {/* Editorial Paragraph */}
          <motion.p
            variants={heroFadeUp}
            className="font-sans font-medium text-lg sm:text-xl text-black max-w-lg mb-10 leading-relaxed bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Kue kering homemade bertekstur lumer di mulut, dipanggang dari racikan butter pilihan murni
            dan selai nanas asli dengan harga yang tetap bersahabat untuk keluarga Anda.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={heroFadeUp} className="flex flex-wrap items-center gap-4 mb-12">
            <Link to="/produk" className="btn-primary flex items-center gap-2">
              <ShoppingBag size={18} strokeWidth={2.5} />
              Jelajahi Menu Kue
            </Link>
            <a
              href={contact.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              Pesan via WhatsApp
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
          </motion.div>

          {/* Guarantee Badges */}
          <motion.div
            variants={heroFadeUp}
            className="pt-8 border-t-4 border-black grid grid-cols-3 gap-6 max-w-lg"
          >
            <div className="bg-neo-secondary p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <span className="font-display text-2xl sm:text-3xl font-black text-black block leading-none mb-1">100%</span>
              <span className="font-sans text-[11px] font-bold text-black uppercase">Bahan Murni</span>
            </div>
            <div className="bg-neo-blue p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <span className="font-display text-2xl sm:text-3xl font-black text-black block leading-none mb-1">Fresh</span>
              <span className="font-sans text-[11px] font-bold text-black uppercase">Baked to Order</span>
            </div>
            <div className="bg-neo-accent p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              <span className="font-display text-2xl sm:text-3xl font-black text-black block leading-none mb-1">Ramah</span>
              <span className="font-sans text-[11px] font-bold text-black uppercase">Harga Bersahabat</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column — Main Image */}
        <motion.div
          className="lg:col-span-5 relative order-1 lg:order-2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="relative w-full max-w-md mx-auto py-6">
            {/* Main Neo Brutal Card */}
            <div className="relative z-10 neo-brutal-card p-4 bg-white rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden border-2 border-black">
                <img
                  src="/images/hero-main.jpg"
                  alt="Tokuri Kue Kering Nastar & Kastengel Homemade"
                  className="w-full h-full object-cover grayscale-[20%] contrast-125"
                />
                
                {/* Decorative Pattern overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(black_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none mix-blend-overlay"></div>
              </div>

              {/* Caption */}
              <div className="mt-4 px-2 flex items-center justify-between border-t-2 border-black pt-3">
                <div>
                  <span className="font-display font-black text-sm md:text-base text-black block uppercase tracking-wide">
                    Koleksi Spesial
                  </span>
                  <span className="font-sans font-bold text-[11px] text-black uppercase">
                    Surabaya, ID
                  </span>
                </div>
                <span className="font-sans font-bold text-xs bg-neo-primary text-white px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
                  "A Taste of Warmth"
                </span>
              </div>
            </div>

            {/* Overlapping Secondary Card: Baker's Note */}
            <motion.div
              className="absolute -bottom-6 -left-4 sm:-left-6 z-20 bg-neo-accent p-3 md:p-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-[210px] rotate-[4deg]"
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-2 text-black font-display font-black text-sm uppercase">
                <Sparkles size={16} strokeWidth={2.5} />
                <span>Resep Otentik</span>
              </div>
              <p className="font-sans font-bold text-[11px] text-black leading-tight">
                Selai nanas segar dimasak perlahan dengan cengkeh harum & butter murni.
              </p>
            </motion.div>

            {/* Official Tokuri Brand Seal */}
            <motion.div
              className="absolute -top-4 -right-2 sm:-right-4 z-30 w-24 h-24 sm:w-28 sm:h-28 bg-neo-yellow border-4 border-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[12deg]"
              whileHover={{ rotate: 0, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/images/logo.png"
                alt="Logo Tokuri Kue Kering"
                className="w-full h-full object-contain bg-white border-2 border-black"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

