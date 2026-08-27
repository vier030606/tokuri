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

  return (
    <motion.article
      className="group relative neo-brutal-card bg-white flex flex-col justify-between"
      whileHover={{ y: -4, x: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Image Container with Neo-Brutal Borders & Badges */}
      <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-black bg-white">
        <motion.img
          src={product.image}
          alt={`${product.name} — ${product.description}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block bg-neo-yellow text-black border-2 border-black font-sans text-xs font-black tracking-widest uppercase px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {product.category}
          </span>
        </div>

        {product.badge && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1 bg-neo-primary text-white border-2 border-black font-sans text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles size={12} strokeWidth={3} />
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between relative z-10">
        <div>
          {product.tagline && (
            <span className="font-display font-black text-xs text-black block mb-2 uppercase tracking-wide bg-neo-secondary inline-block px-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              {product.tagline}
            </span>
          )}

          <h3 className="font-display text-2xl font-black text-black mb-3 leading-tight uppercase group-hover:text-neo-primary transition-colors">
            {product.name}
          </h3>

          <p className="font-sans font-medium text-sm text-black leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Taste Tag Pills */}
          {product.tasteTags && (
            <div className="flex flex-wrap gap-2 mb-5">
              {product.tasteTags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans font-bold text-[10px] uppercase tracking-wider text-black bg-neo-bg px-2.5 py-1 border-2 border-black"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Weight & Packaging details */}
          {product.weight && (
            <div className="mb-5">
              <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-bold uppercase text-black bg-neo-accent px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-sm">📦</span> Toples {product.weight}
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-5 border-t-2 border-black flex items-center justify-between gap-2 mt-auto">
          {onOpenDetail ? (
            <button
              onClick={() => onOpenDetail(product)}
              className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-black hover:text-neo-primary transition-colors uppercase tracking-wide group/btn"
            >
              <span className="bg-neo-blue p-1 border-2 border-black group-hover/btn:bg-neo-primary group-hover/btn:text-white transition-colors">
                <Info size={14} strokeWidth={2.5} />
              </span>
              Detail Resep
            </button>
          ) : (
            <span className="font-sans text-xs text-black font-black uppercase tracking-wider">
              Butter Wijsman
            </span>
          )}

          <a
            href={getOrderUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2"
          >
            <MessageCircle size={14} strokeWidth={2.5} />
            Pesan
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
