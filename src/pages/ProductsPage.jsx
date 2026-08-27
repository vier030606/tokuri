import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Sparkles, X, MessageCircle, Info, Gift, Check, Plus, Minus, Tag, HeartHandshake } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Occasions from '../components/Occasions';
import FloatingCartBar from '../components/FloatingCartBar';
import { products, categories, contact } from '../data/products';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Custom Hampers Box Builder State
  const [boxItems, setBoxItems] = useState(['nastar', 'kastengel', 'choco-chip']);
  const [boxTheme, setBoxTheme] = useState('Pita Emas Mewah');
  const [greetingTo, setGreetingTo] = useState('');
  const [greetingFrom, setGreetingFrom] = useState('');
  const [greetingMessage, setGreetingMessage] = useState('Selamat Menikmati Kehangatan Kue Kering Tokuri!');

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      activeCategory === 'Semua' || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.tasteTags && p.tasteTags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const getOrderUrl = (productName) => {
    const msg = encodeURIComponent(
      `Halo Tokuri, saya ingin memesan produk "${productName}". Boleh minta info stok fresh hari ini dan opsi pengirimannya?`
    );
    return `https://wa.me/6281234567890?text=${msg}`;
  };

  const toggleBoxItem = (id) => {
    if (boxItems.includes(id)) {
      if (boxItems.length > 2) {
        setBoxItems(boxItems.filter((item) => item !== id));
      }
    } else {
      if (boxItems.length < 4) {
        setBoxItems([...boxItems, id]);
      }
    }
  };

  // Calculate Hampers estimated price (Box & Ribbons + Jars)
  const boxPackagingFee = boxItems.length === 2 ? 35000 : boxItems.length === 3 ? 45000 : 55000;
  const jarsTotalPrice = boxItems.reduce((acc, id) => {
    const p = products.find((prod) => prod.id === id);
    const avgPrice = p ? (p.priceEstimate ? p.priceEstimate['350g'] || p.priceEstimate['300g'] || 80000 : 80000) : 80000;
    return acc + avgPrice;
  }, 0);
  const totalHampersEstimate = jarsTotalPrice + boxPackagingFee;

  const handleOrderCustomBox = () => {
    const selectedNames = boxItems
      .map((id) => products.find((p) => p.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const greetingSummary = greetingTo || greetingFrom ? `\n- Kartu Ucapan:\n  Untuk: ${greetingTo || '-'}\n  Dari: ${greetingFrom || '-'}\n  Pesan: "${greetingMessage}"` : '';

    const text = encodeURIComponent(
      `Halo Tokuri, saya ingin memesan Paket Custom Hampers Gift Box:\n- Jumlah Toples: ${boxItems.length} Toples\n- Varian Isi: ${selectedNames}\n- Pilihan Tema: ${boxTheme}${greetingSummary}\n- Estimasi Harga Paket: Rp ${totalHampersEstimate.toLocaleString('id-ID')}\nMohon info ketersediaan slot pengerjaan dan pengirimannya.`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <div className="overflow-hidden">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Katalog Aneka Rasa"
        title="Menu Kue Kering Tokuri"
        description="Dipanggang segar dalam batch harian menggunakan butter Wijsman murni, keju Edam tua, dan selai nanas asli untuk kelezatan maksimal di setiap toples."
        breadcrumb="Katalog Produk"
      />

      {/* 2. Products Section & Filter */}
      <section className="section-padding section-spacing bg-ivory grain-overlay">
        <div className="container-narrow">
          {/* Filter Bar with Visual Counts */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-beige/60">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const count =
                  cat === 'Semua'
                    ? products.length
                    : products.filter((p) => p.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`font-sans text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 ${
                      activeCategory === cat
                        ? 'bg-brown text-ivory shadow-soft'
                        : 'bg-cream text-brown-muted hover:bg-cream-dark hover:text-brown border border-beige/60'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        activeCategory === cat
                          ? 'bg-ivory/20 text-ivory'
                          : 'bg-beige/60 text-brown'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px] md:w-72">
              <input
                type="text"
                placeholder="Cari varian kue atau rasa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 rounded-full bg-cream border border-beige/80 text-sm font-sans text-brown placeholder:text-brown-muted/50 focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-all"
              />
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brown-muted/60"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brown-muted hover:text-brown"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-cream/70 rounded-3xl border border-beige/60 max-w-md mx-auto">
              <p className="font-serif text-2xl text-brown mb-2">
                Varian Tidak Ditemukan
              </p>
              <p className="font-sans text-sm text-brown-muted mb-6">
                Coba gunakan kata kunci lain atau reset filter kategori.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('Semua');
                  setSearchQuery('');
                }}
                className="btn-secondary text-xs py-2.5 px-6"
              >
                Tampilkan Semua Menu
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
              {filteredProducts.map((product) => (
                <motion.article
                  key={product.id}
                  variants={fadeUp}
                  className="group relative bg-ivory rounded-3xl overflow-hidden border border-brown/10 ring-1 ring-brown/5 shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between"
                  whileHover={{ y: -6 }}
                >
                  {/* Washi Tape on top */}
                  <div className="washi-tape -top-2.5 left-8 w-16 h-5 z-20" />

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Category badge */}
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

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {product.tagline && (
                        <span className="font-serif italic text-xs text-cinnamon block mb-1">
                          &ldquo;{product.tagline}&rdquo;
                        </span>
                      )}
                      <h3 className="font-serif text-2xl font-bold text-brown mb-2 group-hover:text-cinnamon transition-colors">
                        {product.name}
                      </h3>
                      <p className="font-sans text-sm text-brown-muted leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {/* Taste tags */}
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

                      <div className="mb-4 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-medium text-brown-warm bg-cream-dark/60 px-3 py-1 rounded-lg border border-beige/40">
                          📦 Toples {product.weight}
                        </span>
                        {product.priceEstimate && (
                          <span className="font-serif font-bold text-sm text-brown">
                            Mulai Rp {Object.values(product.priceEstimate)[0].toLocaleString('id-ID')}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-beige/60 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-brown-warm hover:text-brown transition-colors"
                      >
                        <Info size={14} />
                        Detail Bahan
                      </button>

                      <a
                        href={getOrderUrl(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs py-2.5 px-4 shadow-soft"
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

      {/* 3. Interactive Custom Hampers / Box Customizer with Live Pricing */}
      <section className="section-padding section-spacing bg-cream/40 grain-overlay border-t border-beige/40">
        <div className="container-narrow max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-cream-dark px-3.5 py-1.5 rounded-full mb-3 border border-beige">
              <Gift size={14} className="text-cinnamon" />
              <span className="font-sans text-xs font-semibold text-brown uppercase tracking-wider">
                Kreasi Hadiah Eksklusif
              </span>
            </div>
            <h2 className="font-serif text-heading font-bold text-brown mb-3">
              Buat Paket Hampers Sendiri
            </h2>
            <p className="font-sans text-sm sm:text-base text-brown-muted">
              Pilih 2 hingga 4 varian toples kue kering untuk dikemas dalam gift box mewah dengan pita cantik & kartu ucapan kustom.
            </p>
          </div>

          <div className="bg-ivory rounded-4xl p-6 sm:p-10 border border-brown/10 ring-1 ring-brown/5 shadow-card grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Varian Selector & Ribbon Options */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans text-xs font-bold text-brown uppercase tracking-wider">
                    Pilih Toples ({boxItems.length} dari 2–4 toples):
                  </span>
                  <span className="font-sans text-[11px] text-brown-muted">
                    Klik untuk tambah/hapus
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {products.map((p) => {
                    const isSelected = boxItems.includes(p.id);
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => toggleBoxItem(p.id)}
                        className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all duration-200 ${
                          isSelected
                            ? 'bg-cream-dark border-brown text-brown shadow-soft ring-1 ring-brown/20'
                            : 'bg-cream/40 border-beige/60 text-brown-muted hover:border-brown/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-10 h-10 rounded-xl object-cover border border-beige shrink-0"
                          />
                          <div>
                            <span className="font-serif font-bold text-base block text-brown leading-tight">
                              {p.name.split(' ')[0]}
                            </span>
                            <span className="font-sans text-[11px] opacity-75">
                              {p.category}
                            </span>
                          </div>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                            isSelected
                              ? 'bg-brown text-ivory border-brown'
                              : 'border-beige text-transparent'
                          }`}
                        >
                          <Check size={14} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Box Theme Option */}
              <div>
                <label className="block font-sans text-xs font-bold text-brown uppercase tracking-wider mb-2.5">
                  Pilihan Tema & Hiasan Pita:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Pita Emas Mewah',
                    'Tema Idul Fitri / Lebaran',
                    'Tema Natal & Tahun Baru',
                    'Tema Chinese New Year',
                    'Rustic Kraft Box Alami',
                  ].map((theme) => (
                    <button
                      key={theme}
                      type="button"
                      onClick={() => setBoxTheme(theme)}
                      className={`px-3.5 py-2 rounded-full text-xs font-sans transition-colors ${
                        boxTheme === theme
                          ? 'bg-brown text-ivory font-semibold shadow-sm'
                          : 'bg-cream text-brown-muted border border-beige/60 hover:text-brown'
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>

              {/* Greeting Card Note */}
              <div className="bg-cream/50 p-4 rounded-2xl border border-beige/60 space-y-3">
                <span className="font-sans text-xs font-bold text-brown uppercase tracking-wider block">
                  Kartu Ucapan Kustom (Opsional):
                </span>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Kepada / Penerima"
                    value={greetingTo}
                    onChange={(e) => setGreetingTo(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-ivory border border-beige text-xs font-sans text-brown placeholder:text-brown-muted/50 focus:outline-none focus:border-brown"
                  />
                  <input
                    type="text"
                    placeholder="Dari / Pengirim"
                    value={greetingFrom}
                    onChange={(e) => setGreetingFrom(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-ivory border border-beige text-xs font-sans text-brown placeholder:text-brown-muted/50 focus:outline-none focus:border-brown"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Pesan ucapan singkat..."
                  value={greetingMessage}
                  onChange={(e) => setGreetingMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-ivory border border-beige text-xs font-sans text-brown placeholder:text-brown-muted/50 focus:outline-none focus:border-brown"
                />
              </div>
            </div>

            {/* Right: Live Gift Box Preview & Pricing */}
            <div className="lg:col-span-5 bg-cream-dark/60 p-6 sm:p-8 rounded-3xl border border-beige flex flex-col justify-between text-center space-y-6">
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-card border border-beige">
                  <img
                    src="/images/hampers.jpg"
                    alt="Hampers Tokuri"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-brown text-ivory text-[10px] font-sans font-bold px-3 py-1 rounded-full shadow-sm">
                    {boxItems.length} Toples
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-brown mb-1">
                  Paket Hampers {boxItems.length} Toples
                </h3>
                <p className="font-sans text-xs text-brown-muted mb-4">
                  Tema: <strong>{boxTheme}</strong>
                </p>

                <div className="bg-ivory/90 rounded-2xl p-4 border border-beige text-left mb-4 space-y-1">
                  <span className="font-sans text-[10px] font-bold text-brown-muted uppercase tracking-wider block mb-1.5">
                    Varian Dipilih:
                  </span>
                  {boxItems.map((id) => {
                    const p = products.find((item) => item.id === id);
                    return (
                      <div key={id} className="flex items-center justify-between text-xs font-sans text-brown">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cinnamon" />
                          {p?.name || id}
                        </span>
                        <span className="text-brown-muted text-[11px]">
                          ~Rp {(p?.priceEstimate ? p.priceEstimate['350g'] || 85000 : 85000).toLocaleString('id-ID')}
                        </span>
                      </div>
                    );
                  })}
                  <div className="pt-2 mt-2 border-t border-beige/60 flex justify-between text-[11px] text-brown-muted">
                    <span>Hardbox, Pita & Greeting Card:</span>
                    <span>Rp {boxPackagingFee.toLocaleString('id-ID')}</span>
                  </div>
                </div>

                <div className="bg-cream/90 rounded-2xl p-3.5 border border-beige flex items-center justify-between">
                  <span className="font-sans text-xs text-brown font-semibold">
                    Estimasi Total Paket:
                  </span>
                  <span className="font-serif text-2xl font-bold text-cinnamon">
                    Rp {totalHampersEstimate.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <button
                onClick={handleOrderCustomBox}
                className="btn-primary w-full py-3.5 text-center text-xs sm:text-sm shadow-card"
              >
                <MessageCircle size={16} />
                Pesan Hampers Custom via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Occasions Section for Inspiration */}
      <Occasions />

      {/* 5. Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-brown-dark/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative bg-ivory rounded-4xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-brown/15 z-10 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="washi-tape -top-2.5 left-10 w-20 h-5 rotate-[-2deg]" />

              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-cream flex items-center justify-center text-brown hover:bg-beige transition-colors border border-beige/60 z-20"
                aria-label="Tutup modal"
              >
                <X size={18} />
              </button>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-cream-dark mb-5 border border-beige shadow-sm">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-ivory/95 backdrop-blur-sm text-brown text-[10px] font-sans font-bold uppercase px-3 py-1 rounded-full shadow-sm">
                    {selectedProduct.category}
                  </span>
                </div>
              </div>

              <span className="eyebrow block mb-1">{selectedProduct.tagline}</span>
              <h3 className="font-serif text-3xl font-bold text-brown mb-2">
                {selectedProduct.name}
              </h3>
              <p className="font-sans text-sm text-brown-muted leading-relaxed mb-5">
                {selectedProduct.description}
              </p>

              {/* Taste Radar Level Pills */}
              {selectedProduct.tasteProfile && (
                <div className="bg-cream/60 rounded-2xl p-4 border border-beige mb-5 space-y-2">
                  <span className="font-sans text-xs font-bold text-brown uppercase tracking-wider block mb-2">
                    Profil Karakter Rasa:
                  </span>
                  <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                    <div className="flex items-center justify-between">
                      <span className="text-brown-muted">Tingkat Manis:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((d) => (
                          <span
                            key={d}
                            className={`w-2 h-2 rounded-full ${
                              d <= selectedProduct.tasteProfile.manis ? 'bg-cinnamon' : 'bg-beige'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-brown-muted">Butter Wijsman:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((d) => (
                          <span
                            key={d}
                            className={`w-2 h-2 rounded-full ${
                              d <= selectedProduct.tasteProfile.butter ? 'bg-cinnamon' : 'bg-beige'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-brown-muted">Gurih Keju:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((d) => (
                          <span
                            key={d}
                            className={`w-2 h-2 rounded-full ${
                              d <= selectedProduct.tasteProfile.gurih ? 'bg-cinnamon' : 'bg-beige'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-brown-muted">Kerenyahan:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((d) => (
                          <span
                            key={d}
                            className={`w-2 h-2 rounded-full ${
                              d <= selectedProduct.tasteProfile.renyah ? 'bg-cinnamon' : 'bg-beige'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Recipe & Quality Specs Box */}
              <div className="space-y-4 bg-cream/70 rounded-2xl p-5 border border-beige/60 mb-6">
                <div>
                  <span className="font-sans text-xs font-bold text-brown uppercase tracking-wider block mb-1">
                    Komposisi Bahan Murni:
                  </span>
                  <p className="font-sans text-xs text-brown-muted leading-relaxed">
                    {selectedProduct.ingredients}
                  </p>
                </div>

                <div>
                  <span className="font-sans text-xs font-bold text-brown uppercase tracking-wider block mb-1">
                    Petunjuk Penyimpanan:
                  </span>
                  <p className="font-sans text-xs text-brown-muted leading-relaxed">
                    {selectedProduct.storageInfo}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={getOrderUrl(selectedProduct.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center text-xs sm:text-sm"
                >
                  <MessageCircle size={16} />
                  Pesan via WhatsApp
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="btn-secondary text-xs px-5"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <FloatingCartBar />
    </div>
  );
};

export default ProductsPage;
