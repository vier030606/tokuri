import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, MessageCircle, Info } from 'lucide-react';
import { contact } from '../data/products';

const ProductCard = ({ product, index = 0, onOpenDetail }) => {
  const getOrderUrl = (name) => {
    const text = encodeURIComponent(
      `Halo Tokuri, saya ingin memesan kue kering "${name}". Boleh info ketersediaan dan pengirimannya?`
    );
    return `https://wa.me/6281234567890?text=${text}`;
  };

  // Subtle natural angle for organic craft feel
  const rotations = ['rotate-[-0.6deg]', 'rotate-[0.5deg]', 'rotate-[-0.4deg]', 'rotate-[0.6deg]'];
  const cardRotation = rotations[index % rotations.length];

  return (
    <motion.article
      className={`group relative bg-ivory rounded-3xl overflow-hidden border border-brown/10 ring-1 ring-brown/5 shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between ${cardRotation} hover:rotate-0`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Decorative Washi Tape */}
      <div className="washi-tape -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 z-20" />

      {/* Image Container with Inner Vignette & Badges */}
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
        <motion.img
          src={product.image}
          alt={`${product.name} — ${product.description}`}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          loading="lazy"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block bg-ivory/95 backdrop-blur-sm text-brown font-sans text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-soft border border-brown/10">
            {product.category}
          </span>
        </div>

        {product.badge && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1 bg-brown text-ivory font-sans text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-full shadow-soft">
              <Sparkles size={11} className="text-caramel" />
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {product.tagline && (
            <span className="font-serif italic text-xs text-cinnamon block mb-1">
              &ldquo;{product.tagline}&rdquo;
            </span>
          )}

          <h3 className="font-serif text-2xl font-bold text-brown mb-2 group-hover:text-cinnamon transition-colors">
            {product.name}
          </h3>

          <p className="font-sans text-sm text-brown-muted leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Taste Tag Pills */}
          {product.tasteTags && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.tasteTags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[10px] text-brown-warm bg-cream px-2.5 py-0.5 rounded-full border border-beige/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Weight & Packaging details */}
          {product.weight && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-medium text-brown-warm bg-cream-dark/60 px-3 py-1 rounded-lg border border-beige/40">
                📦 Toples {product.weight}
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-beige/60 flex items-center justify-between gap-2">
          {onOpenDetail ? (
            <button
              onClick={() => onOpenDetail(product)}
              className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-brown-warm hover:text-brown transition-colors"
            >
              <Info size={14} />
              Detail Resep
            </button>
          ) : (
            <span className="font-sans text-xs text-brown-muted font-medium">
              Butter Wijsman
            </span>
          )}

          <a
            href={getOrderUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wide text-ivory bg-brown hover:bg-brown-dark px-4 py-2.5 rounded-full shadow-soft transition-all duration-300"
          >
            <MessageCircle size={14} />
            Pesan
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
