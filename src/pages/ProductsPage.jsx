import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Check, Sparkles, X, MessageCircle, Info } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Occasions from '../components/Occasions';
import { products, categories, contact } from '../data/products';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products by category and search term
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      activeCategory === 'Semua' || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getOrderUrl = (productName) => {
    const msg = encodeURIComponent(
      `Halo Tokuri, saya ingin memesan produk "${productName}". Mohon info ketersediaan dan harga terbaru.`
    );
    return `https://wa.me/6281234567890?text=${msg}`;
  };

  return (
    <div className="overflow-hidden">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Katalog Lengkap"
        title="Aneka Kue Kering"
        description="Pilihan rasa istimewa buatan tangan dari bahan-bahan pilihan untuk menemani momen santai, perayaan, hampers, dan hadiah orang terkasih."
        breadcrumb="Produk"
      />

      {/* 2. Products Section & Filter */}
      <section className="section-padding section-spacing bg-ivory">
        <div className="container-narrow">
          {/* Controls: Search & Category Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-beige/40">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-sans text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-brown text-ivory shadow-soft'
                      : 'bg-cream text-brown-light hover:bg-cream-dark hover:text-brown border border-beige/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px] md:w-72">
              <input
                type="text"
                placeholder="Cari varian kue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-cream border border-beige/50 text-sm font-sans text-brown placeholder:text-brown-light/40 focus:outline-none focus:border-brown transition-colors"
              />
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brown-light/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brown-light/50 hover:text-brown"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-cream rounded-2xl border border-beige/40">
              <p className="font-serif text-2xl text-brown mb-2">
                Tidak ada produk ditemukan
              </p>
              <p className="font-sans text-sm text-brown-light/70 mb-6">
                Coba gunakan kata kunci pencarian lain atau pilih kategori Semua.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('Semua');
                  setSearchQuery('');
                }}
                className="btn-secondary text-xs py-2 px-5"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              key={activeCategory + searchQuery}
            >
              {filteredProducts.map((product, i) => (
                <motion.article
                  key={product.id}
                  variants={fadeUp}
                  className="group bg-cream/60 rounded-3xl overflow-hidden border border-beige/50 shadow-soft hover:shadow-card transition-all duration-500 flex flex-col"
                  whileHover={{ y: -6 }}
                >
                  {/* Image Header */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block bg-ivory/90 backdrop-blur-sm text-brown font-sans text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-soft">
                        {product.category}
                      </span>
                    </div>

                    {product.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-flex items-center gap-1 bg-brown text-ivory font-sans text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-full shadow-soft">
                          <Sparkles size={10} />
                          Favorit
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {product.tagline && (
                        <span className="font-sans text-xs font-medium text-brown-light/60 uppercase tracking-wider block mb-1">
                          {product.tagline}
                        </span>
                      )}
                      <h3 className="font-serif text-2xl font-bold text-brown mb-2">
                        {product.name}
                      </h3>
                      <p className="font-sans text-sm text-brown-light/75 leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {/* Specs badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.weight && (
                          <span className="inline-block bg-beige/40 text-brown font-sans text-xs px-2.5 py-1 rounded-md">
                            📦 Kemasan: {product.weight}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-beige/40 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-brown-light hover:text-brown transition-colors"
                      >
                        <Info size={14} />
                        Detail Bahan
                      </button>

                      <a
                        href={getOrderUrl(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs py-2 px-4 shadow-soft"
                      >
                        <MessageCircle size={14} />
                        Pesan
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* 3. Occasions Section for Inspiration */}
      <Occasions />

      {/* 4. Ordering Info FAQ Section */}
      <section className="section-padding section-spacing bg-cream border-t border-beige/40">
        <div className="container-narrow max-w-4xl">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">Panduan Pemesanan</span>
            <h2 className="font-serif text-heading font-semibold text-brown">
              Cara Memesan Kue Kering Tokuri
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-ivory p-6 rounded-2xl border border-beige/40 shadow-soft">
              <div className="w-8 h-8 rounded-full bg-brown text-ivory font-serif font-bold text-base flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-serif text-lg font-semibold text-brown mb-2">
                Pilih Varian & Jumlah
              </h3>
              <p className="font-sans text-xs text-brown-light/75 leading-relaxed">
                Tentukan varian kue kering dan ukuran toples yang Anda inginkan dari katalog di atas.
              </p>
            </div>

            <div className="bg-ivory p-6 rounded-2xl border border-beige/40 shadow-soft">
              <div className="w-8 h-8 rounded-full bg-brown text-ivory font-serif font-bold text-base flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-serif text-lg font-semibold text-brown mb-2">
                Kirim Pesan WhatsApp
              </h3>
              <p className="font-sans text-xs text-brown-light/75 leading-relaxed">
                Klik tombol pesan atau hubungi WhatsApp Tokuri. Tim kami akan mengonfirmasi total dan ongkir.
              </p>
            </div>

            <div className="bg-ivory p-6 rounded-2xl border border-beige/40 shadow-soft">
              <div className="w-8 h-8 rounded-full bg-brown text-ivory font-serif font-bold text-base flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-serif text-lg font-semibold text-brown mb-2">
                Dipanggang & Dikirim
              </h3>
              <p className="font-sans text-xs text-brown-light/75 leading-relaxed">
                Kue kering dipersiapkan segar dan dikirim dengan kemasan pelindung aman langsung ke alamat Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-brown/50 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-ivory rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-beige z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-cream-dark flex items-center justify-center text-brown hover:bg-beige transition-colors"
                aria-label="Tutup modal"
              >
                <X size={18} />
              </button>

              <span className="eyebrow block mb-2">{selectedProduct.category}</span>
              <h3 className="font-serif text-3xl font-bold text-brown mb-3">
                {selectedProduct.name}
              </h3>
              <p className="font-sans text-sm text-brown-light/80 leading-relaxed mb-6">
                {selectedProduct.description}
              </p>

              <div className="space-y-4 bg-cream/70 rounded-2xl p-5 border border-beige/40 mb-6">
                <div>
                  <span className="font-sans text-xs font-bold text-brown uppercase tracking-wider block mb-1">
                    Bahan-Bahan Utama:
                  </span>
                  <p className="font-sans text-xs text-brown-light leading-relaxed">
                    {selectedProduct.ingredients}
                  </p>
                </div>

                <div>
                  <span className="font-sans text-xs font-bold text-brown uppercase tracking-wider block mb-1">
                    Pilihan Kemasan:
                  </span>
                  <p className="font-sans text-xs text-brown-light">
                    {selectedProduct.weight} dalam toples segel kedap udara eksklusif.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={getOrderUrl(selectedProduct.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center"
                >
                  <MessageCircle size={16} />
                  Pesan via WhatsApp
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="btn-secondary text-xs px-4"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsPage;
