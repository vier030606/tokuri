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
    <section id="produk" className="section-padding section-spacing bg-white border-b-4 border-black">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="inline-block mb-4 bg-neo-primary text-white px-3 py-1 border-2 border-black transform rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="font-sans font-black text-xs uppercase tracking-widest">
              Produk Kami
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl font-black text-black mb-4 text-balance uppercase tracking-tight"
          >
            Aneka Kue Kering
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans font-bold text-base text-black bg-neo-yellow border-2 border-black p-2 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-md mx-auto transform -rotate-1"
          >
            Pilihan rasa untuk menemani berbagai momen.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans font-black text-sm sm:text-base uppercase px-6 py-2 border-2 border-black transition-all ${
                activeCategory === cat
                  ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -translate-y-1'
                  : 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-neo-yellow hover:-translate-y-1'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Product Grid — Neo-brutalism Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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
