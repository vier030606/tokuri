import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Sparkles, Users, Gift, Heart, Award, MessageCircle } from 'lucide-react';
import Hero from '../components/Hero';
import BrandIntro from '../components/BrandIntro';
import ProductCard from '../components/ProductCard';
import CookieQuiz from '../components/CookieQuiz';
import WhyTokuri from '../components/WhyTokuri';
import Occasions from '../components/Occasions';
import CustomerReviews from '../components/CustomerReviews';
import FloatingCartBar from '../components/FloatingCartBar';
import { products, contact } from '../data/products';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brand Introduction & Core Values */}
      <BrandIntro />

      {/* 3. Featured Products Showcase */}
      <section className="section-padding section-spacing bg-cream/40 grain-overlay">
        <div className="container-narrow">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-16 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-brown" />
                <span className="eyebrow">Menu Pilihan Dapur</span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-heading font-bold text-brown text-balance"
              >
                Kue Kering Terfavorit
              </motion.h2>
            </div>

            <motion.div variants={fadeUp}>
              <Link
                to="/produk"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brown hover:text-cinnamon transition-colors group"
              >
                Lihat Semua Katalog
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14"
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
              <ShoppingBag size={17} />
              Jelajahi Semua Varian Rasa
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Interactive Cookie Taste Finder Quiz */}
      <CookieQuiz />

      {/* 5. Why Tokuri Section */}
      <WhyTokuri />

      {/* 6. Customer Testimonials & Reviews */}
      <CustomerReviews />

      {/* 7. Occasions Section */}
      <Occasions />

      {/* 8. Reseller Teaser Banner with Tactile Craft Styling */}
      <section className="section-padding py-20 bg-ivory border-t border-beige/40">
        <div className="container-narrow">
          <motion.div
            className="relative bg-cream/70 rounded-4xl p-8 sm:p-12 lg:p-16 overflow-hidden border border-brown/10 ring-1 ring-brown/5 shadow-card"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="washi-tape -top-3 left-12 w-24 h-6 rotate-[-2deg]" />
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-beige/30 blur-2xl pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 bg-ivory px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold text-brown uppercase tracking-wider mb-4 border border-beige shadow-sm"
                >
                  <Users size={14} className="text-cinnamon" />
                  Kemitraan & Peluang Usaha
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown mb-4 leading-tight"
                >
                  Mulai Usaha Kue Kering Bersama Tokuri
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="font-sans text-base text-brown-muted leading-relaxed max-w-xl"
                >
                  Dapatkan harga grosir khusus kemitraan dengan margin profit hingga 35% dan produk yang selalu laris manis di setiap perayaan.
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

      {/* 9. Quick Contact CTA Banner */}
      <section className="section-padding py-20 bg-cream/30 text-center">
        <div className="container-narrow max-w-2xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span variants={fadeUp} className="eyebrow block mb-2">
              Layanan Pesanan Khusus
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl font-bold text-brown mb-4 text-balance"
            >
              Butuh Hampers atau Pesanan Banyak?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-base text-brown-muted mb-8 max-w-lg mx-auto leading-relaxed"
            >
              Konsultasikan kebutuhan hampers hari raya, parcel korporat, souvenir, maupun pengiriman luar kota langsung dengan tim kami.
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
                Chat WhatsApp Admin
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Cart / WhatsApp Bar */}
      <FloatingCartBar />
    </div>
  );
};

export default Home;
