import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown, MessageCircle, Send, Sparkles, TrendingUp, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { resellerBenefits, resellerSteps, resellerFaqs, contact } from '../data/products';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportConfig } from '../utils/animations';

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
    const text = `Halo Tokuri, saya ingin mendaftar sebagai Reseller:
- Nama: ${formData.name || '-'}
- No. WhatsApp: ${formData.phone || '-'}
- Kota/Domisili: ${formData.city || '-'}
- Pengalaman Usaha: ${formData.experience}
- Catatan: ${formData.note || '-'}`;

    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="overflow-hidden">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Peluang Kemitraan"
        title="Jadi Reseller Tokuri"
        description="Bangun usaha bersama Tokuri dengan produk kue kering berkualitas yang mudah dipasarkan, disukai banyak kalangan, dan margin profit menarik."
        breadcrumb="Reseller"
      />

      {/* 2. Overview & Highlight Banner */}
      <section className="section-padding section-spacing bg-ivory">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual side */}
            <motion.div
              className="lg:col-span-5 relative"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-cream-dark shadow-card border border-beige/60">
                <img
                  src="/images/reseller.jpg"
                  alt="Kemitraan Reseller Tokuri"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center bg-cream-dark p-8 text-center">
                        <div class="w-20 h-20 rounded-full bg-ivory p-1.5 shadow-soft mb-4 border border-beige/60">
                          <img src="/images/logo.png" alt="Tokuri" class="w-full h-full object-contain rounded-full" />
                        </div>
                        <h4 class="font-serif text-xl font-bold text-brown">Mitra Tokuri</h4>
                        <p class="font-sans text-xs text-brown-light/60 mt-1">reseller.jpg</p>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-5 -right-5 z-20 bg-brown text-ivory p-4 rounded-2xl shadow-card flex items-center gap-3">
                <TrendingUp size={24} className="text-beige" />
                <div>
                  <span className="font-serif text-lg font-bold block leading-none">
                    Margin Tinggi
                  </span>
                  <span className="font-sans text-[10px] text-ivory/60 uppercase tracking-wider">
                    Untung Maksimal
                  </span>
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
                className="font-serif text-heading font-semibold text-brown mb-6 text-balance leading-tight"
              >
                Peluang Manis Menambah Penghasilan
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-sans text-base text-brown-light/80 leading-relaxed mb-8"
              >
                Bisnis kue kering memiliki permintaan yang sangat tinggi dan stabil, terutama menjelang momen hari raya, perayaan keluarga, hampers kantor, dan souvenir acara.
                Dengan bergabung bersama Tokuri, Anda tidak perlu repot memikirkan produksi, resep, atau kontrol kualitas.
              </motion.p>

              <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
                {[
                  'Bahan premium rasa rumahan',
                  'Kemasan mewah siap jual',
                  'Minimal order awal terjangkau',
                  'Support foto & materi promosi',
                ].map((perk) => (
                  <div key={perk} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-brown shrink-0" />
                    <span className="font-sans text-sm text-brown font-medium">
                      {perk}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Benefits Grid */}
      <section className="section-padding section-spacing bg-cream">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span variants={fadeUp} className="eyebrow block mb-3">
              Keuntungan Reseller
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-heading font-semibold text-brown text-balance"
            >
              Fasilitas & Kemudahan Untuk Anda
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
                className="bg-ivory rounded-2xl p-7 border border-beige/40 shadow-soft hover:shadow-card transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-4xl font-light text-beige block mb-4">
                    {b.number}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-brown mb-2.5">
                    {b.title}
                  </h3>
                  <p className="font-sans text-sm text-brown-light/75 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. How It Works Steps */}
      <section className="section-padding section-spacing bg-ivory">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span variants={fadeUp} className="eyebrow block mb-3">
              Alur Bergabung
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-heading font-semibold text-brown text-balance"
            >
              4 Langkah Mudah Menjadi Reseller
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {resellerSteps.map((s, idx) => (
              <motion.div
                key={s.step}
                className="relative text-center sm:text-left"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                <div className="w-12 h-12 rounded-full bg-cream-dark border border-beige/60 flex items-center justify-center font-serif text-xl font-bold text-brown mb-5 mx-auto sm:mx-0 shadow-soft">
                  {s.step}
                </div>
                <h3 className="font-serif text-xl font-semibold text-brown mb-2">
                  {s.title}
                </h3>
                <p className="font-sans text-sm text-brown-light/75 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Registration Form & WhatsApp Direct Connect */}
      <section className="section-padding section-spacing bg-cream border-t border-beige/40">
        <div className="container-narrow max-w-4xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="eyebrow block mb-3">Daftar Sekarang</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mb-4 leading-tight">
                Mulai Usaha Kue Kering Hari Ini
              </h2>
              <p className="font-sans text-sm text-brown-light/80 leading-relaxed mb-6">
                Isi formulir singkat di samping atau langsung hubungi WhatsApp kami untuk konsultasi dan mendapatkan katalog harga khusus kemitraan.
              </p>
              <div className="bg-ivory p-5 rounded-2xl border border-beige/40 shadow-soft">
                <div className="flex items-center gap-3 text-brown mb-1 font-semibold text-sm">
                  <MessageCircle size={18} />
                  WhatsApp Reseller Resmi
                </div>
                <p className="font-sans text-xs text-brown-light/70">
                  Respon cepat & ramah pada jam operasional: Senin - Sabtu (08.00 - 17.00 WIB)
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleFormSubmit}
                className="bg-ivory p-8 sm:p-10 rounded-3xl border border-beige/60 shadow-card space-y-5"
              >
                <div>
                  <label className="block font-sans text-xs font-semibold text-brown uppercase tracking-wider mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Contoh: Sarah Anindita"
                    className="w-full px-4 py-3 rounded-xl bg-cream/70 border border-beige/60 text-sm font-sans text-brown placeholder:text-brown-light/40 focus:outline-none focus:border-brown"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-brown uppercase tracking-wider mb-2">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0812xxxxxxxx"
                      className="w-full px-4 py-3 rounded-xl bg-cream/70 border border-beige/60 text-sm font-sans text-brown placeholder:text-brown-light/40 focus:outline-none focus:border-brown"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-brown uppercase tracking-wider mb-2">
                      Kota Domisili *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Contoh: Surabaya"
                      className="w-full px-4 py-3 rounded-xl bg-cream/70 border border-beige/60 text-sm font-sans text-brown placeholder:text-brown-light/40 focus:outline-none focus:border-brown"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-brown uppercase tracking-wider mb-2">
                    Pengalaman Berjualan
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-cream/70 border border-beige/60 text-sm font-sans text-brown focus:outline-none focus:border-brown"
                  >
                    <option value="Pemula / Baru mau memulai">Pemula / Baru mau memulai</option>
                    <option value="Sudah pernah berjualan online">Sudah pernah berjualan online</option>
                    <option value="Memiliki toko / outlet fisik">Memiliki toko / outlet fisik</option>
                    <option value="Sering menjual musiman / hari raya">Sering menjual musiman / hari raya</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-brown uppercase tracking-wider mb-2">
                    Catatan / Pertanyaan Tambahan
                  </label>
                  <textarea
                    name="note"
                    rows="2"
                    value={formData.note}
                    onChange={handleInputChange}
                    placeholder="Tuliskan pertanyaan atau rencana penjualan Anda..."
                    className="w-full px-4 py-3 rounded-xl bg-cream/70 border border-beige/60 text-sm font-sans text-brown placeholder:text-brown-light/40 focus:outline-none focus:border-brown resize-none"
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

      {/* 6. FAQ Section */}
      <section className="section-padding section-spacing bg-ivory">
        <div className="container-narrow max-w-3xl">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">Tanya Jawab</span>
            <h2 className="font-serif text-heading font-semibold text-brown">
              Pertanyaan Seputar Reseller
            </h2>
          </div>

          <div className="space-y-4">
            {resellerFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="border border-beige/50 rounded-2xl overflow-hidden bg-cream/40 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-semibold text-brown hover:text-brown-light"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-brown-light shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 font-sans text-sm text-brown-light/80 leading-relaxed border-t border-beige/30 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResellerPage;
