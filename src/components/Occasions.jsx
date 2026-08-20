import { motion } from 'framer-motion';
import { occasions } from '../data/products';
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, viewportConfig } from '../utils/animations';

// Assign animation directions based on position
const getVariant = (index) => {
  const variants = [fadeLeft, fadeRight, scaleIn, fadeLeft, fadeRight, scaleIn];
  return variants[index % variants.length];
};

// Layout positions for editorial collage
const positions = [
  'col-span-2 row-span-2',    // Camilan — large
  'col-span-1 row-span-1',    // Hampers
  'col-span-1 row-span-1',    // Parcel
  'col-span-1 row-span-1',    // Souvenir
  'col-span-1 row-span-1',    // Oleh-oleh
  'col-span-2 row-span-1',    // Reseller — wide
];

const Occasions = () => {
  return (
    <section className="section-padding section-spacing bg-cream grain-overlay">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span variants={fadeUp} className="eyebrow block mb-4">
            Berbagai Momen
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-heading font-semibold text-brown text-balance"
          >
            Untuk Setiap Momen.
          </motion.h2>
        </motion.div>

        {/* Collage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px]">
          {occasions.map((occasion, index) => (
            <motion.div
              key={occasion.id}
              className={`relative group rounded-xl sm:rounded-2xl overflow-hidden cursor-default ${positions[index] || 'col-span-1'}`}
              variants={getVariant(index)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {/* Image */}
              <img
                src={occasion.image}
                alt={occasion.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback placeholder */}
              <div className="hidden absolute inset-0 bg-cream-dark flex items-center justify-center">
                <div className="text-center p-4">
                  <svg className="w-8 h-8 text-brown-light/20 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                  <span className="font-sans text-brown-light/30 text-xs">{occasion.image.split('/').pop()}</span>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-brown/10 to-transparent
                              group-hover:from-brown/70 transition-all duration-500" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="font-serif text-lg sm:text-xl font-semibold text-ivory drop-shadow-md">
                  {occasion.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Occasions;
