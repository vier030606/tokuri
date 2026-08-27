import { motion } from 'framer-motion';
import { occasions, products } from '../data/products';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import { Link } from 'react-router-dom';

const Occasions = () => {
  return (
    <section className="section-padding section-spacing bg-ivory grain-overlay">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14 md:mb-18"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-beige-dark" />
            <span className="eyebrow">Momen Bersama Tokuri</span>
            <span className="w-8 h-px bg-beige-dark" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-heading font-semibold text-brown text-balance"
          >
            Untuk Setiap{' '}
            <span className="font-serif italic font-normal text-cinnamon">
              Momen Berharga.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-base text-brown-muted mt-4"
          >
            Dari santai minum teh di sore hari hingga bingkisan hampers perayaan mewah.
          </motion.p>
        </motion.div>

        {/* Artful Moodboard Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {occasions.map((occ, idx) => {
            const rotations = ['rotate-[-0.8deg]', 'rotate-[0.9deg]', 'rotate-[-0.6deg]', 'rotate-[0.8deg]', 'rotate-[-0.9deg]', 'rotate-[0.6deg]'];
            const rot = rotations[idx % rotations.length];

            return (
              <motion.div
                key={occ.id}
                variants={fadeUp}
                className={`group bg-cream/70 p-4 pb-6 rounded-3xl border border-brown/10 ring-1 ring-brown/5 shadow-soft hover:shadow-card transition-all duration-500 ${rot} hover:rotate-0 hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                <div>
                  {/* Polaroid Frame Image */}
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-cream-dark mb-4 shadow-sm">
                    <img
                      src={occ.image}
                      alt={occ.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    
                    {/* Subtle index tag */}
                    <div className="absolute top-3 left-3">
                      <span className="font-serif text-xs font-bold text-brown bg-ivory/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="px-2">
                    <h3 className="font-serif text-2xl font-bold text-brown mb-1.5 group-hover:text-cinnamon transition-colors">
                      {occ.label}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-brown-muted leading-relaxed mb-4">
                      {occ.desc}
                    </p>
                  </div>
                </div>

                {/* Recommended Tags */}
                {occ.recommended && (
                  <div className="px-2 pt-3 border-t border-beige/50 flex items-center justify-between">
                    <span className="font-sans text-[10px] uppercase font-bold text-brown-muted tracking-wider">
                      Varian Cocok:
                    </span>
                    <div className="flex gap-1">
                      {occ.recommended.slice(0, 2).map((recId) => (
                        <span
                          key={recId}
                          className="font-sans text-[10px] bg-ivory text-brown px-2 py-0.5 rounded-full border border-beige/60 capitalize"
                        >
                          {products.find((p) => p.id === recId)?.name.split(' ')[0] || recId}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Occasions;
