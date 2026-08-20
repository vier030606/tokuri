import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { contact } from '../data/products';

const cardFade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ProductCard = ({ product, index }) => {
  // Alternate layout styles for editorial feel
  const isLarge = index === 0 || index === 3;
  const rotation = index % 2 === 0 ? 'rotate-[0.5deg]' : '-rotate-[0.5deg]';

  return (
    <motion.article
      variants={cardFade}
      className={`group relative ${isLarge ? 'md:col-span-2' : ''}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className={`relative bg-ivory rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500 ${rotation}`}>
        {/* Image */}
        <div className={`relative overflow-hidden ${isLarge ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>
          <motion.img
            src={product.image}
            alt={`${product.name} — ${product.description}`}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `
                <div class="w-full h-full flex flex-col items-center justify-center bg-cream-dark p-6">
                  <svg class="w-12 h-12 text-brown-light/20 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                  <span class="font-serif text-brown-light/40 text-base italic">${product.name}</span>
                  <span class="font-sans text-brown-light/25 text-xs mt-1">${product.image.split('/').pop()}</span>
                </div>
              `;
            }}
          />

          {/* Category tag */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block bg-ivory/90 backdrop-blur-sm text-brown font-sans text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-brown mb-1.5">
                {product.name}
              </h3>
              <p className="font-sans text-sm text-brown-light/65 leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.price && (
              <span className="font-sans text-sm font-semibold text-brown whitespace-nowrap mt-1">
                {product.price}
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="mt-4 flex items-center justify-between">
            <a
              href={contact.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-xs font-medium tracking-wide text-brown
                         bg-cream-dark hover:bg-beige px-4 py-2 rounded-full transition-colors duration-300"
            >
              <ShoppingBag size={13} />
              Pesan
            </a>

            {/* Decorative dot */}
            <div className="w-1.5 h-1.5 rounded-full bg-beige" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
