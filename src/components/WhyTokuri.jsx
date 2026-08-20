import { motion } from 'framer-motion';
import { Heart, Leaf, Wallet, PartyPopper } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportConfig } from '../utils/animations';

const benefits = [
  {
    icon: Heart,
    title: 'Dibuat dengan Cinta',
    description: 'Homemade cookies made carefully in every batch.',
    align: 'left',
  },
  {
    icon: Leaf,
    title: 'Bahan Pilihan',
    description: 'Made with selected quality ingredients.',
    align: 'right',
  },
  {
    icon: Wallet,
    title: 'Harga Bersahabat',
    description: 'Premium taste without an intimidating price.',
    align: 'left',
  },
  {
    icon: PartyPopper,
    title: 'Untuk Berbagai Momen',
    description: 'Perfect for snacks, gifts, hampers, parcels, souvenirs, and celebrations.',
    align: 'right',
  },
];

const WhyTokuri = () => {
  return (
    <section className="section-padding section-spacing">
      <div className="container-narrow">
        {/* Heading */}
        <motion.div
          className="mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="eyebrow block mb-4">
            Alasan Memilih Kami
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-heading font-semibold text-brown text-balance"
          >
            Kenapa Tokuri?
          </motion.h2>
        </motion.div>

        {/* Asymmetric Benefits */}
        <div className="space-y-10 md:space-y-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const isRight = benefit.align === 'right';
            const variant = isRight ? fadeRight : fadeLeft;

            return (
              <motion.div
                key={benefit.title}
                className={`flex flex-col md:flex-row items-start gap-5 md:gap-8
                  ${isRight ? 'md:ml-auto md:flex-row-reverse md:text-right' : ''}
                  md:max-w-xl group`}
                variants={variant}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                {/* Icon */}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-cream-dark flex items-center justify-center
                                group-hover:bg-beige transition-colors duration-500">
                  <IconComponent size={22} className="text-brown" strokeWidth={1.5} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-brown mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-brown-light/65 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Decorative number */}
                <span className="hidden md:block font-serif text-4xl font-light text-beige/40 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyTokuri;
