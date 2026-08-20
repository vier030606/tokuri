import { useState } from 'react';
import { motion } from 'framer-motion';
import { products, categories } from '../data/products';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import ProductCard from './ProductCard';

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProducts =
    activeCategory === 'Semua'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="produk" className="section-padding section-spacing bg-cream">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span variants={fadeUp} className="eyebrow block mb-4">
            Produk Kami
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-heading font-semibold text-brown mb-4 text-balance"
          >
            Aneka Kue Kering
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-base text-brown-light/70 max-w-md mx-auto"
          >
            Pilihan rasa untuk menemani berbagai momen.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-xs sm:text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brown text-ivory shadow-soft'
                  : 'bg-cream-dark/60 text-brown-light hover:bg-cream-dark hover:text-brown'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Product Grid — Editorial/Masonry Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          key={activeCategory}
        >
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
