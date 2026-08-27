import { motion } from 'framer-motion';
import { Heart, Sparkles, Gem, Wallet, UtensilsCrossed, CheckCircle2 } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

const values = [
  {
    number: '01',
    tag: 'Keaslian Rasa',
    title: 'Homemade with Love',
    subtitle: 'Dibuat dengan sentuhan tangan dan perhatian di setiap adonan.',
    desc: 'Kami memanggang dalam jumlah terkontrol (small batches) untuk menjaga kualitas tekstur, kelembutan mentega, dan kesegaran rasa.',
    icon: Heart,
    accent: 'bg-cream-dark',
  },
  {
    number: '02',
    tag: 'Bahan Pilihan',
    title: 'Premium Ingredients',
    subtitle: 'Bahan-bahan bermutu tinggi untuk cita rasa istimewa.',
    desc: 'Menggunakan perpaduan butter premium, keju tua pilihan, dan cokelat murni tanpa bahan pengawet sintesis yang merusak rasa.',
    icon: Gem,
    accent: 'bg-beige/50',
  },
  {
    number: '03',
    tag: 'Tanpa Beban',
    title: 'Affordable Luxury',
    subtitle: 'Kualitas berkelas yang bersahabat untuk semua kantong.',
    desc: 'Kelezatan kue kering premium yang layak dinikmati setiap saat tanpa harus menunggu momen khusus atau merogoh kocek dalam.',
    icon: Wallet,
    accent: 'bg-cream-dark',
  },
];

const BrandIntro = () => {
  return (
    <section id="tentang" className="section-padding section-spacing bg-cream/40 grain-overlay">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-beige-dark" />
            <span className="eyebrow">Nilai & Filosofi Tokuri</span>
            <span className="w-8 h-px bg-beige-dark" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-heading font-semibold text-brown mb-6 text-balance"
          >
            Dibuat dari Rumah,{' '}
            <span className="font-serif italic font-normal text-cinnamon">
              Dihadirkan
            </span>{' '}
            untuk Semua.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sans text-base sm:text-lg text-brown-muted leading-relaxed max-w-2xl mx-auto"
          >
            Tokuri hadir sebagai toko kue kering yang menyatukan kehangatan resep keluarga dengan
            standar cita rasa modern. Kami percaya kue yang istimewa lahir dari ketulusan, bukan sekadar kemasan mahal.
          </motion.p>
        </motion.div>

        {/* 3 Values Cards with Tactile Craft Paper Aesthetic */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {values.map((v) => {
            const IconComponent = v.icon;
            return (
              <motion.div
                key={v.number}
                variants={fadeUp}
                className="paper-card relative group flex flex-col justify-between"
                whileHover={{ y: -6 }}
              >
                {/* Washi tape on card */}
                <div className="washi-tape -top-3 left-8 w-16 h-5 rotate-[-2deg]" />

                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-beige/60">
                    <span className="font-sans text-[11px] font-semibold tracking-wider text-brown-muted uppercase bg-cream px-3 py-1 rounded-full border border-beige/40">
                      {v.tag}
                    </span>
                    <span className="font-serif text-3xl font-light text-beige-dark/60">
                      {v.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-cream-dark flex items-center justify-center mb-5 text-brown group-hover:bg-brown group-hover:text-ivory transition-colors duration-300 shadow-soft">
                    <IconComponent size={22} strokeWidth={1.75} />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-2xl font-bold text-brown mb-2">
                    {v.title}
                  </h3>
                  <p className="font-serif italic text-sm text-cinnamon mb-3">
                    &ldquo;{v.subtitle}&rdquo;
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm text-brown-muted leading-relaxed">
                    {v.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-beige/40 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-sage" />
                  <span className="font-sans text-xs text-brown-muted">
                    Standar Mutu Tokuri
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandIntro;
