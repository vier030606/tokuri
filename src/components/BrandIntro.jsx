import { motion } from 'framer-motion';
import { Heart, Gem, Wallet, CheckCircle2 } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

const values = [
  {
    number: '01',
    tag: 'Keaslian Rasa',
    title: 'Homemade with Love',
    subtitle: 'Dibuat dengan sentuhan tangan dan perhatian di setiap adonan.',
    desc: 'Kami memanggang dalam jumlah terkontrol (small batches) untuk menjaga kualitas tekstur, kelembutan mentega, dan kesegaran rasa.',
    icon: Heart,
    color: 'bg-neo-yellow',
  },
  {
    number: '02',
    tag: 'Bahan Pilihan',
    title: 'Premium Ingredients',
    subtitle: 'Bahan-bahan bermutu tinggi untuk cita rasa istimewa.',
    desc: 'Menggunakan perpaduan butter premium, keju tua pilihan, dan cokelat murni tanpa bahan pengawet sintesis yang merusak rasa.',
    icon: Gem,
    color: 'bg-neo-blue',
  },
  {
    number: '03',
    tag: 'Tanpa Beban',
    title: 'Affordable Luxury',
    subtitle: 'Kualitas berkelas yang bersahabat untuk semua kantong.',
    desc: 'Kelezatan kue kering premium yang layak dinikmati setiap saat tanpa harus menunggu momen khusus atau merogoh kocek dalam.',
    icon: Wallet,
    color: 'bg-neo-accent',
  },
];

const BrandIntro = () => {
  return (
    <section id="tentang" className="section-padding section-spacing bg-neo-bg border-b-4 border-black">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4 bg-white border-2 border-black px-4 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
            <span className="font-sans font-black text-xs uppercase tracking-widest text-black">Nilai & Filosofi Tokuri</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl font-black text-black mb-6 text-balance uppercase tracking-tight leading-none"
          >
            Dibuat dari Rumah,{' '}
            <span className="text-white bg-black inline-block px-3 border-4 border-black transform -rotate-2 mt-2 shadow-[4px_4px_0px_0px_rgba(253,224,71,1)]">
              Dihadirkan
            </span>{' '}
            untuk Semua.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sans font-bold text-base sm:text-lg text-black leading-relaxed max-w-2xl mx-auto bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Tokuri hadir sebagai toko kue kering yang menyatukan kehangatan resep keluarga dengan standar cita rasa modern. Kami percaya kue yang istimewa lahir dari ketulusan, bukan sekadar kemasan mahal.
          </motion.p>
        </motion.div>

        {/* 3 Values Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
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
                className={`neo-brutal-card ${v.color} p-6 sm:p-7 relative flex flex-col justify-between group transition-transform hover:-translate-y-2`}
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b-4 border-black">
                    <span className="font-sans font-black text-[11px] tracking-widest text-black uppercase bg-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {v.tag}
                    </span>
                    <span className="font-display font-black text-3xl text-black">
                      {v.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center mb-6 text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:bg-neo-primary transition-colors">
                    <IconComponent size={32} strokeWidth={2.5} />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-black text-3xl text-black mb-3 uppercase leading-none">
                    {v.title}
                  </h3>
                  <p className="font-sans font-black text-sm text-black mb-4 uppercase bg-white border-2 border-black p-2 inline-block">
                    {v.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-sans font-medium text-sm text-black leading-relaxed">
                    {v.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t-4 border-black flex items-center gap-2">
                  <CheckCircle2 size={18} strokeWidth={3} className="text-black" />
                  <span className="font-sans font-black text-xs text-black uppercase">
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
