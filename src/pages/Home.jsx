import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Sparkles, Users } from 'lucide-react';
import Hero from '../components/Hero';
import BrandIntro from '../components/BrandIntro';
import ProductCard from '../components/ProductCard';
import WhyTokuri from '../components/WhyTokuri';
import Occasions from '../components/Occasions';
import { products, contact } from '../data/products';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

const Home = () => {
  // Show featured products on home page
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brand Introduction & Core Values */}
      <BrandIntro />

      {/* 3. Featured Products Showcase */}
      <section className="section-padding section-spacing bg-cream">
        <div className="container-narrow">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div>
              <motion.span variants={fadeUp} className="eyebrow block mb-3">
                Koleksi Favorit
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-heading font-semibold text-brown text-balance"
              >
                Aneka Kue Kering Pilihan
              </motion.h2>
            </div>
            <motion.div variants={fadeUp}>
              <Link
                to="/produk"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-brown hover:text-brown-light transition-colors group"
              >
                Lihat Semua Produk
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>

          <div className="text-center">
            <Link to="/produk" className="btn-primary">
              <ShoppingBag size={16} />
              Jelajahi Seluruh Menu
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Tokuri Section */}
      <WhyTokuri />

      {/* 5. Occasions Section */}
      <Occasions />

      {/* 6. Reseller Teaser Banner */}
      <section className="section-padding py-20 bg-ivory border-t border-beige/40">
        <div className="container-narrow">
          <motion.div
            className="relative bg-cream-dark/60 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden border border-beige/60 shadow-soft"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Decorative background circle */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-beige/40 blur-2xl pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 bg-beige/60 px-3.5 py-1 rounded-full text-xs font-sans font-medium text-brown uppercase tracking-wider mb-4"
                >
                  <Users size={14} />
                  Peluang Kemitraan
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brown mb-4 leading-tight"
                >
                  Tumbuh Bersama Tokuri Kue Kering
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="font-sans text-base text-brown-light/75 leading-relaxed max-w-xl"
                >
                  Dapatkan harga khusus reseller dengan margin menarik dan kemasan elegan
                  yang diminati pasar.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 lg:items-end justify-end"
              >
                <Link to="/reseller" className="btn-primary w-full sm:w-auto text-center">
                  Pelajari Program Reseller
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={contact.whatsapp.resellerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto text-center"
                >
                  Daftar via WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Quick Contact CTA Banner */}
      <section className="section-padding py-20 bg-cream text-center">
        <div className="container-narrow max-w-2xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span variants={fadeUp} className="eyebrow block mb-3">
              Ada Pertanyaan?
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl font-semibold text-brown mb-4 text-balance"
            >
              Siap Memilih Kue Kering Favoritmu?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-base text-brown-light/70 mb-8 max-w-lg mx-auto leading-relaxed"
            >
              Konsultasikan kebutuhan hampers, parcel, souvenir, maupun pesanan khusus Anda langsung dengan tim kami.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link to="/kontak" className="btn-primary">
                Halaman Kontak
                <ArrowRight size={16} />
              </Link>
              <a
                href={contact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Chat WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
