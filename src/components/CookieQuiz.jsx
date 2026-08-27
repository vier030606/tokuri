import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, RotateCcw, Heart, CheckCircle2, MessageCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const quizMoments = [
  { id: 'family', label: 'Camilan Keluarga', desc: 'Disukai anak-anak hingga kakek-nenek', icon: '🏡' },
  { id: 'gift', label: 'Hadiah / Hampers Mewah', desc: 'Bingkisan berkelas untuk kerabat & rekan', icon: '🎁' },
  { id: 'coffee', label: 'Teman Ngopi & Ngeteh', desc: 'Pelengkap rileks di waktu santai', icon: '☕' },
  { id: 'event', label: 'Suguhan Hari Raya & Tamu', desc: 'Wajib ada di meja toples ruang tamu', icon: '✨' },
];

const quizTastes = [
  { id: 'sweet_pineapple', label: 'Manis Legit Selai Buah', desc: 'Isian nanas madu asli dengan wangi butter', matchedId: 'nastar' },
  { id: 'savory_cheese', label: 'Gurih Mantap Keju Tua', desc: 'Keju Edam tua panggang yang renyah asin pas', matchedId: 'kastengel' },
  { id: 'rich_chocolate', label: 'Cokelat Pekat & Crunchy', desc: 'Dark chocolate chips melimpah yang pekat', matchedId: 'choco-chip' },
  { id: 'buttery_melt', label: 'Butter Lembut Lumer', desc: 'Sensasi klasik yang lembut lumer di lidah', matchedId: 'semprit' },
  { id: 'aromatic_matcha', label: 'Wangi Teh Hijau Otentik', desc: 'Matcha Uji Jepang berpadu white chocolate', matchedId: 'matcha-cookies' },
];

const CookieQuiz = () => {
  const [step, setStep] = useState(1);
  const [selectedMoment, setSelectedMoment] = useState(null);
  const [selectedTaste, setSelectedTaste] = useState(null);

  const matchedProduct = selectedTaste
    ? products.find((p) => p.id === selectedTaste.matchedId) || products[0]
    : null;

  const handleReset = () => {
    setStep(1);
    setSelectedMoment(null);
    setSelectedTaste(null);
  };

  const getOrderUrl = (productName) => {
    const text = encodeURIComponent(
      `Halo Tokuri, dari hasil kuis saya cocok dengan "${productName}". Boleh info ketersediaan dan pemesanannya?`
    );
    return `https://wa.me/6281234567890?text=${text}`;
  };

  return (
    <section className="section-padding py-20 bg-ivory relative grain-overlay border-t border-beige/40">
      <div className="container-narrow max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cream-dark px-3.5 py-1.5 rounded-full mb-3 border border-beige">
            <Sparkles size={14} className="text-caramel" />
            <span className="font-sans text-xs font-semibold text-brown uppercase tracking-wider">
              Panduan Cita Rasa Interaktif
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mb-3">
            Bingung Pilih Varian? Temukan Kue Favoritmu
          </h2>
          <p className="font-sans text-sm sm:text-base text-brown-muted max-w-lg mx-auto">
            Jawab 2 pertanyaan singkat ini untuk menemukan kue kering Tokuri yang paling cocok dengan selera lidah Anda.
          </p>
        </div>

        <div className="bg-cream/60 rounded-4xl p-6 sm:p-10 border border-brown/10 ring-1 ring-brown/5 shadow-card relative overflow-hidden">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between max-w-xs mx-auto mb-8">
            <div className="flex items-center gap-2">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                step >= 1 ? 'bg-brown text-ivory' : 'bg-beige/60 text-brown-muted'
              }`}>
                1
              </span>
              <span className="font-sans text-xs font-medium text-brown">Momen</span>
            </div>
            <div className={`flex-1 h-0.5 mx-3 ${step >= 2 ? 'bg-brown' : 'bg-beige'}`} />
            <div className="flex items-center gap-2">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                step >= 2 ? 'bg-brown text-ivory' : 'bg-beige/60 text-brown-muted'
              }`}>
                2
              </span>
              <span className="font-sans text-xs font-medium text-brown">Selera Rasa</span>
            </div>
            <div className={`flex-1 h-0.5 mx-3 ${step >= 3 ? 'bg-brown' : 'bg-beige'}`} />
            <div className="flex items-center gap-2">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                step === 3 ? 'bg-cinnamon text-ivory' : 'bg-beige/60 text-brown-muted'
              }`}>
                ✓
              </span>
              <span className="font-sans text-xs font-medium text-brown">Hasil</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: Momen */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-2xl font-bold text-brown text-center mb-6">
                  Langkah 1: Untuk momen apa Anda mencari kue kering?
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {quizMoments.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setSelectedMoment(m);
                        setStep(2);
                      }}
                      className="p-5 rounded-2xl bg-ivory border border-brown/10 ring-1 ring-brown/5 text-left hover:bg-cream-dark hover:border-brown/30 hover:shadow-soft transition-all duration-300 group flex items-start gap-4"
                    >
                      <span className="text-3xl p-2 rounded-xl bg-cream group-hover:scale-110 transition-transform">
                        {m.icon}
                      </span>
                      <div>
                        <span className="font-serif text-lg font-bold text-brown block mb-1 group-hover:text-cinnamon transition-colors">
                          {m.label}
                        </span>
                        <span className="font-sans text-xs text-brown-muted leading-relaxed">
                          {m.desc}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: Selera Rasa */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between max-w-2xl mx-auto mb-6">
                  <h3 className="font-serif text-2xl font-bold text-brown">
                    Langkah 2: Karakter rasa apa yang paling Anda dambakan?
                  </h3>
                  <button
                    onClick={() => setStep(1)}
                    className="font-sans text-xs text-brown-muted hover:text-brown underline"
                  >
                    Kembali
                  </button>
                </div>

                <div className="space-y-3 max-w-2xl mx-auto">
                  {quizTastes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setSelectedTaste(t);
                        setStep(3);
                      }}
                      className="w-full p-4 sm:p-5 rounded-2xl bg-ivory border border-brown/10 ring-1 ring-brown/5 text-left hover:bg-cream-dark hover:border-brown/30 hover:shadow-soft transition-all duration-300 flex items-center justify-between group"
                    >
                      <div>
                        <span className="font-serif text-lg font-bold text-brown block group-hover:text-cinnamon transition-colors">
                          {t.label}
                        </span>
                        <span className="font-sans text-xs text-brown-muted">
                          {t.desc}
                        </span>
                      </div>
                      <ArrowRight size={18} className="text-brown-muted group-hover:translate-x-1 group-hover:text-brown transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: HASIL REKOMENDASI */}
            {step === 3 && matchedProduct && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl mx-auto"
              >
                <div className="text-center mb-6">
                  <span className="font-sans text-xs font-bold text-cinnamon uppercase tracking-widest block mb-1">
                    🎉 Rekomendasi Paling Pas Untuk Anda
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-brown">
                    {matchedProduct.name}
                  </h3>
                  <p className="font-serif italic text-sm text-brown-muted mt-1">
                    Cocok untuk {selectedMoment?.label.toLowerCase()} dengan cita rasa {selectedTaste?.label.toLowerCase()}.
                  </p>
                </div>

                <div className="bg-ivory rounded-3xl p-6 sm:p-8 border border-brown/10 ring-1 ring-brown/5 shadow-card grid sm:grid-cols-12 gap-6 items-center mb-6">
                  <div className="sm:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-cream-dark shadow-soft">
                    <img
                      src={matchedProduct.image}
                      alt={matchedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="sm:col-span-7 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="bg-cream-dark text-brown text-[11px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-beige">
                        {matchedProduct.category}
                      </span>
                      <span className="bg-brown text-ivory text-[11px] font-sans font-medium px-3 py-1 rounded-full">
                        {matchedProduct.badge}
                      </span>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-brown-muted leading-relaxed">
                      {matchedProduct.description}
                    </p>

                    {/* Taste Radar Level Pills */}
                    <div className="pt-2 border-t border-beige/60 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] font-sans">
                        <span className="text-brown-muted">Tingkat Manis:</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((d) => (
                            <span
                              key={d}
                              className={`w-2 h-2 rounded-full ${
                                d <= matchedProduct.tasteProfile.manis
                                  ? 'bg-cinnamon'
                                  : 'bg-beige/60'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-sans">
                        <span className="text-brown-muted">Aroma Butter Wijsman:</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((d) => (
                            <span
                              key={d}
                              className={`w-2 h-2 rounded-full ${
                                d <= matchedProduct.tasteProfile.butter
                                  ? 'bg-cinnamon'
                                  : 'bg-beige/60'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-sans">
                        <span className="text-brown-muted">Tingkat Gurih / Keju:</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((d) => (
                            <span
                              key={d}
                              className={`w-2 h-2 rounded-full ${
                                d <= matchedProduct.tasteProfile.gurih
                                  ? 'bg-cinnamon'
                                  : 'bg-beige/60'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={getOrderUrl(matchedProduct.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-3 px-6 text-xs sm:text-sm"
                  >
                    <MessageCircle size={16} />
                    Pesan Varian Ini via WhatsApp
                  </a>
                  <Link
                    to="/produk"
                    className="btn-secondary py-3 px-5 text-xs sm:text-sm"
                  >
                    Lihat Semua Menu
                  </Link>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 font-sans text-xs text-brown-muted hover:text-brown px-3 py-2"
                  >
                    <RotateCcw size={14} />
                    Coba Kuis Lagi
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CookieQuiz;
