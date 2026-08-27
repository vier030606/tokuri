import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, AtSign, Clock, Send, CheckCircle2, Truck } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FloatingCartBar from '../components/FloatingCartBar';
import { contact } from '../data/products';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

const InstagramIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const contactChannels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp Admin',
    value: contact.whatsapp.number,
    desc: 'Konsultasi cepat, cek stok fresh & pemesanan instan',
    url: contact.whatsapp.url,
    accent: true,
  },
  {
    icon: InstagramIcon,
    label: 'Instagram Resmi',
    value: contact.instagram.handle,
    desc: 'Katalog visual, proses baking di dapur, & update promo',
    url: contact.instagram.url,
  },
  {
    icon: AtSign,
    label: 'LINE Official',
    value: contact.line.id,
    desc: 'Info diskon musiman & broadcast berkala',
    url: contact.line.url,
  },
  {
    icon: MapPin,
    label: 'Lokasi Dapur',
    value: 'Surabaya, Indonesia',
    desc: 'Melayani pengiriman seluruh kota di Indonesia',
    url: null,
  },
];

const ContactPage = () => {
  const [inquiryType, setInquiryType] = useState('Pesanan Pribadi / Camilan');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const text = `Halo Tokuri, saya ingin memesan / bertanya mengenai:
- Kategori Kebutuhan: ${inquiryType}
- Nama: ${formData.name || '-'}
- WhatsApp: ${formData.phone || '-'}
- Detail Pesan: ${formData.message || '-'}`;

    const url = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="overflow-hidden">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Layanan Pelanggan & Pemesanan"
        title="Hubungi Tokuri"
        description="Siap membantu pesanan kue kering Anda untuk konsumsi keluarga, hampers hari raya, parcel korporat, souvenir, maupun kemitraan reseller."
        breadcrumb="Kontak"
      />

      {/* 2. Contact Channels Cards */}
      <section className="section-padding section-spacing bg-ivory grain-overlay">
        <div className="container-narrow">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {contactChannels.map((c, i) => {
              const Icon = c.icon;
              const Wrapper = c.url ? 'a' : 'div';
              const props = c.url
                ? { href: c.url, target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <motion.div key={c.label} variants={fadeUp}>
                  <Wrapper
                    {...props}
                    className={`block h-full p-8 rounded-3xl text-left transition-all duration-300 relative ${
                      c.accent
                        ? 'bg-brown text-ivory shadow-card hover:bg-brown-dark hover:-translate-y-1'
                        : 'bg-cream/60 border border-brown/10 ring-1 ring-brown/5 hover:bg-cream-dark hover:shadow-soft hover:-translate-y-1'
                    } ${c.url ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                        c.accent ? 'bg-ivory/15 text-ivory' : 'bg-cream-dark text-brown'
                      }`}
                    >
                      <Icon size={24} />
                    </div>

                    <span
                      className={`font-sans text-xs font-bold uppercase tracking-wider block mb-1.5 ${
                        c.accent ? 'text-ivory/60' : 'text-brown-muted'
                      }`}
                    >
                      {c.label}
                    </span>

                    <h3
                      className={`font-serif text-2xl font-bold mb-2 ${
                        c.accent ? 'text-ivory' : 'text-brown'
                      }`}
                    >
                      {c.value}
                    </h3>

                    <p
                      className={`font-sans text-xs leading-relaxed ${
                        c.accent ? 'text-ivory/75' : 'text-brown-muted'
                      }`}
                    >
                      {c.desc}
                    </p>
                  </Wrapper>
                </motion.div>
              );
            })}
          </motion.div>

          {/* 3. Inquiry Form & Operational Details */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Operational Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="paper-card">
                <div className="flex items-center gap-3 mb-4 text-brown">
                  <div className="w-10 h-10 rounded-xl bg-cream-dark flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold">Jam Buka Dapur</h3>
                </div>
                <p className="font-sans text-sm text-brown-muted leading-relaxed mb-3">
                  {contact.hours}
                </p>
                <p className="font-sans text-xs text-brown-muted/70 leading-relaxed">
                  Pesan yang masuk di luar jam operasional akan tetap tercatat dan segera dibalas oleh tim admin kami saat jam operasional berikutnya dimulai.
                </p>
              </div>

              <div className="paper-card">
                <div className="flex items-center gap-3 mb-4 text-brown">
                  <div className="w-10 h-10 rounded-xl bg-cream-dark flex items-center justify-center">
                    <Truck size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold">Jangkauan Pengiriman</h3>
                </div>
                <div className="space-y-3 font-sans text-xs sm:text-sm text-brown-muted">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-sage mt-0.5 shrink-0" />
                    <span><strong>Surabaya & Sekitarnya:</strong> Instant (Grab/Gojek), Sameday, atau ambil langsung di lokasi dapur kami.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-sage mt-0.5 shrink-0" />
                    <span><strong>Luar Kota & Seluruh Indonesia:</strong> Ekspedisi khusus makanan (Paxel, JNE YES, SiCepat) dengan proteksi kardus & bubble wrap tebal.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive WhatsApp Message Builder */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSendMessage}
                className="bg-cream/60 rounded-4xl p-8 sm:p-10 border border-brown/10 ring-1 ring-brown/5 shadow-card space-y-6"
              >
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brown mb-1">
                    Kirim Pesan Cepat ke Tokuri
                  </h3>
                  <p className="font-sans text-xs text-brown-muted">
                    Pilih jenis kebutuhan Anda di bawah untuk menghasilkan template pesan WhatsApp otomatis.
                  </p>
                </div>

                {/* Inquiry Type Selector */}
                <div>
                  <label className="block font-sans text-xs font-bold text-brown uppercase tracking-wider mb-2.5">
                    Jenis Kebutuhan:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                    {[
                      'Pesanan Pribadi / Camilan',
                      'Hampers / Parcel Hari Raya',
                      'Souvenir Acara / Event',
                      'Kemitraan Reseller',
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setInquiryType(type)}
                        className={`text-left p-3 rounded-2xl border font-sans text-xs transition-all duration-200 ${
                          inquiryType === type
                            ? 'bg-brown text-ivory border-brown font-semibold shadow-soft'
                            : 'bg-ivory text-brown-muted border-beige/60 hover:border-brown/40 hover:text-brown'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs font-bold text-brown uppercase tracking-wider mb-2">
                      Nama Anda *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nama lengkap Anda"
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-beige/80 text-sm font-sans text-brown placeholder:text-brown-muted/50 focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown"
                    />
                  </div>
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
                </div>

                <div>
                  <label className="block font-sans text-xs font-bold text-brown uppercase tracking-wider mb-2">
                    Detail Pesan / Pertanyaan
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Contoh: Saya mau pesan 3 toples Nastar dan 2 Kastengel untuk dikirim ke Surabaya Timur..."
                    className="w-full px-4 py-3 rounded-xl bg-ivory border border-beige/80 text-sm font-sans text-brown placeholder:text-brown-muted/50 focus:outline-none focus:border-brown resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-center text-sm shadow-soft hover:shadow-card"
                >
                  <Send size={16} />
                  Kirim Pesan ke WhatsApp Tokuri
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FloatingCartBar />
    </div>
  );
};

export default ContactPage;
