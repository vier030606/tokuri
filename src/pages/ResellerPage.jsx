import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, MessageCircle, Send, Sparkles, TrendingUp, Users, ShieldCheck, HeartHandshake, Download } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ProfitCalculator from '../components/ProfitCalculator';
import FloatingCartBar from '../components/FloatingCartBar';
import { resellerBenefits, resellerSteps, resellerFaqs, contact } from '../data/products';
import { fadeUp, fadeLeft, staggerContainer, viewportConfig } from '../utils/animations';

const ResellerPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    experience: 'Sudah pernah berjualan online',
    note: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const text = `Halo Tim Kemitraan Tokuri, saya ingin mendaftar sebagai Reseller Tokuri:
- Nama Lengkap: ${formData.name || '-'}
- WhatsApp: ${formData.phone || '-'}
- Domisili / Kota: ${formData.city || '-'}
- Pengalaman: ${formData.experience}
- Catatan / Target Pesanan: ${formData.note || '-'}`;

    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="overflow-hidden">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Kemitraan & Peluang Usaha"
        title="Tumbuh Bersama Tokuri"
        description="Bangun usaha kue kering yang menguntungkan dengan produk bermutu tinggi, kemasan berkelas, dan margin profit menarik yang siap dipasarkan ke jaringan Anda."
        breadcrumb="Reseller"
      />

      {/* 2. Overview & Highlight Banner */}
      <section className="section-padding section-spacing bg-ivory grain-overlay">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual side with Real Photo */}
            <motion.div
              className="lg:col-span-5 relative flex justify-center"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="relative w-full max-w-md">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-cream-dark shadow-card border border-brown/10 ring-1 ring-brown/5 rotate-[-1.5deg]">
                  <img
                    src="/images/reseller.jpg"
                    alt="Kemitraan Reseller Tokuri"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="washi-tape -top-3 left-10 w-20 h-6 rotate-[-4deg]" />

                {/* Floating Profit Badge */}
                <div className="absolute -bottom-5 -right-5 z-20 bg-brown text-ivory p-4 sm:p-5 rounded-2xl shadow-card flex items-center gap-3 border border-brown-dark/30">
                  <TrendingUp size={26} className="text-caramel" />
                  <div>
                    <span className="font-serif text-xl font-bold block leading-none">
                      Margin 25% – 35%
                    </span>
                    <span className="font-sans text-[10px] text-ivory/70 uppercase tracking-wider mt-0.5 block">
                      Potensi Omset Jutaan / Bulan
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content side */}
            <motion.div
              className="lg:col-span-7"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.span variants={fadeUp} className="eyebrow block mb-3">
                Mengapa Memilih Kami?
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-heading font-bold text-brown mb-6 text-balance leading-tight"
              >
                Bisnis Manis Tanpa Repot Produksi & Oven
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-sans text-base sm:text-lg text-brown-muted leading-relaxed mb-8"
              >
                Kue kering adalah produk dengan loyalitas tinggi dan selalu dibutuhkan sepanjang tahun, terutama saat momen perayaan hari raya. Bersama Tokuri, Anda fokus menjangkau pelanggan sementara dapur kami menjamin kesegaran dan cita rasa bintang lima di setiap toples.
              </motion.p>

              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Butter Wijsman murni rasa rumahan',
                  'Kemasan toples seal mewah siap jual',
                  'Minimal order awal terjangkau (1 lusin)',
                  'Akses bank foto promosi tanpa watermark',
                ].map((perk) => (
                  <div key={perk} className="flex items-center gap-2.5">
                    <CheckCircle2 size={18} className="text-sage shrink-0" />
                    <span className="font-sans text-sm text-brown font-medium">
                      {perk}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                <a
                  href="#daftar"
                  className="btn-primary"
                >
                  Daftar Jadi Reseller
                  <Send size={16} />
                </a>
                <a
                  href={contact.whatsapp.resellerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <MessageCircle size={16} />
                  Tanya Admin Kemitraan
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Profit Margin Calculator */}
      <ProfitCalculator />

      {/* 4. Benefits Grid */}
      <section className="section-padding section-spacing bg-ivory grain-overlay">
        <div className="container-narrow">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span variants={fadeUp} className="eyebrow block mb-2">
              Keuntungan Reseller
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-heading font-semibold text-brown text-balance"
            >
              Fasilitas Lengkap Untuk Mitra
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {resellerBenefits.map((b) => (
              <motion.div
                key={b.number}
                variants={fadeUp}
                className="paper-card p-7 flex flex-col justify-between"
                whileHover={{ y: -5 }}
              >
                <div>
                  <span className="font-serif text-4xl font-light text-beige-dark/60 block mb-4">
                    {b.number}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-brown mb-2.5">
                    {b.title}
                  </h3>
                  <p className="font-sans text-sm text-brown-muted leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. How It Works Steps */}
      <section className="section-padding section-spacing bg-cream/40 grain-overlay border-t border-beige/40">
        <div className="container-narrow">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span variants={fadeUp} className="eyebrow block mb-2">
              Alur Bergabung
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-heading font-semibold text-brown text-balance"
            >
              4 Langkah Mudah Menjadi Reseller
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {resellerSteps.map((s) => (
              <motion.div
                key={s.step}
                className="relative text-center sm:text-left bg-ivory p-7 rounded-3xl border border-brown/10 ring-1 ring-brown/5 shadow-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                <div className="w-12 h-12 rounded-2xl bg-brown text-ivory flex items-center justify-center font-serif text-xl font-bold mb-4 mx-auto sm:mx-0 shadow-soft">
                  {s.step}
                </div>
                <h3 className="font-serif text-xl font-bold text-brown mb-2">
                  {s.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brown-muted leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Registration Form */}
      <section id="daftar" className="section-padding section-spacing bg-ivory grain-overlay border-t border-beige/40">
        <div className="container-narrow max-w-4xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="eyebrow block mb-2">Pendaftaran Mitra</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mb-4 leading-tight">
                Mulai Bergabung Bersama Tokuri
              </h2>
              <p className="font-sans text-sm text-brown-muted leading-relaxed mb-6">
                Isi formulir pendaftaran di samping. Tim kami akan segera mengirimkan katalog harga grosir, price list toples, dan materi awal jualan ke WhatsApp Anda.
              </p>
              <div className="bg-cream p-5 rounded-2xl border border-beige/80 shadow-soft">
                <div className="flex items-center gap-2.5 text-brown mb-1 font-semibold text-sm font-serif">
                  <MessageCircle size={17} className="text-cinnamon" />
                  WhatsApp Reseller Resmi
                </div>
                <p className="font-sans text-xs text-brown-muted">
                  Senin – Sabtu: 08.00 – 17.00 WIB
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleFormSubmit}
                className="bg-cream/60 p-8 sm:p-10 rounded-4xl border border-brown/10 ring-1 ring-brown/5 shadow-card space-y-5"
              >
                <div>
                  <label className="block font-sans text-xs font-bold text-brown uppercase tracking-wider mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Contoh: Amanda Permata"
                    className="w-full px-4 py-3 rounded-xl bg-ivory border border-beige/80 text-sm font-sans text-brown placeholder:text-brown-muted/50 focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs font-bold text-brown uppercase tracking-wider mb-2">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0812xxxxxxxx"
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-beige/80 text-sm font-sans text-brown placeholder:text-brown-muted/50 focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-bold text-brown uppercase tracking-wider mb-2">
                      Kota Domisili *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Contoh: Surabaya / Sidoarjo"
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-beige/80 text-sm font-sans text-brown placeholder:text-brown-muted/50 focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs font-bold text-brown uppercase tracking-wider mb-2">
                    Pengalaman Berjualan
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-ivory border border-beige/80 text-sm font-sans text-brown focus:outline-none focus:border-brown"
                  >
                    <option value="Pemula / Baru mau memulai">Pemula / Baru mau memulai</option>
                    <option value="Sudah pernah berjualan online">Sudah pernah berjualan online</option>
                    <option value="Memiliki toko / outlet fisik">Memiliki toko / outlet fisik</option>
                    <option value="Sering menjual musiman / hari raya">Sering menjual musiman / hari raya</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-xs font-bold text-brown uppercase tracking-wider mb-2">
                    Catatan / Target Pesanan
                  </label>
                  <textarea
                    name="note"
                    rows="2"
                    value={formData.note}
                    onChange={handleInputChange}
                    placeholder="Tuliskan rencana penjualan atau target kuantiti Anda..."
                    className="w-full px-4 py-3 rounded-xl bg-ivory border border-beige/80 text-sm font-sans text-brown placeholder:text-brown-muted/50 focus:outline-none focus:border-brown resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-center text-sm shadow-soft hover:shadow-card"
                >
                  <Send size={16} />
                  Kirim Pendaftaran via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="section-padding section-spacing bg-cream/40 grain-overlay border-t border-beige/40">
        <div className="container-narrow max-w-3xl">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-2">Tanya Jawab</span>
            <h2 className="font-serif text-heading font-semibold text-brown">
              Pertanyaan Seputar Kemitraan
            </h2>
          </div>

          <div className="space-y-4">
            {resellerFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="border border-beige/80 rounded-2xl overflow-hidden bg-ivory transition-colors shadow-soft"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-brown hover:text-cinnamon transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-brown-muted shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 font-sans text-sm text-brown-muted leading-relaxed border-t border-beige/40 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FloatingCartBar />
    </div>
  );
};

export default ResellerPage;
