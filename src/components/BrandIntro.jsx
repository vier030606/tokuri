import { motion } from 'framer-motion';
import { Heart, Gem, Wallet } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

const values = [
  {
    number: '01',
    title: 'Homemade',
    description: 'Dibuat dengan perhatian di setiap adonan.',
    icon: Heart,
  },
  {
    number: '02',
    title: 'Premium Quality',
    description: 'Bahan pilihan untuk rasa yang lebih istimewa.',
    icon: Gem,
  },
  {
    number: '03',
    title: 'Affordable',
    description: 'Kualitas berkelas dengan harga bersahabat.',
    icon: Wallet,
  },
];

const BrandIntro = () => {
  return (
    <section id="tentang" className="section-padding section-spacing grain-overlay">
      <div className="container-narrow">
        {/* Heading */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16 md:mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="mb-5">
            <div className="w-12 h-px bg-beige mx-auto mb-6" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-heading font-semibold text-brown mb-6 text-balance"
          >
            Dibuat dari Rumah,
            <br />
            Dihadirkan untuk Semua.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-base sm:text-lg text-brown-light/70 leading-relaxed max-w-xl mx-auto"
          >
            Tokuri hadir sebagai toko kue kering yang menggabungkan cita rasa rumahan
            dengan tampilan dan kualitas yang berkelas. Kami percaya kue yang istimewa
            tidak harus selalu mahal.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.number}
                variants={fadeUp}
                className="relative text-center md:text-left group"
              >
                {/* Number */}
                <span className="font-serif text-5xl sm:text-6xl font-light text-beige/60 leading-none block mb-3">
                  {value.number}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-full bg-cream-dark flex items-center justify-center mb-4 mx-auto md:mx-0 group-hover:bg-beige transition-colors duration-500">
                  <IconComponent size={18} className="text-brown-light" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-brown mb-2">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-brown-light/70 leading-relaxed max-w-xs mx-auto md:mx-0">
                  {value.description}
                </p>

                {/* Decorative line */}
                <div className="hidden md:block absolute -right-3 lg:-right-6 top-8 bottom-8 w-px bg-beige/40 last:hidden" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandIntro;
