import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles, Award, ShieldCheck } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import WhyTokuri from '../components/WhyTokuri';
import { contact } from '../data/products';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportConfig } from '../utils/animations';

const timeline = [
  {
    year: 'Awal Mula',
    title: 'Dapur Rumahan Penuh Kehangatan',
    text: 'Bermula dari kecintaan membuat kue kering keluarga dengan resep turun-temurun, menghadirkan aroma mentega yang semerbak di setiap hari raya.',
  },
  {
    year: 'Berkembang',
    title: 'Kepercayaan yang Meluas',
    text: 'Dipercaya oleh kerabat, keluarga, dan pelanggan setia sebagai pilihan utama hampers, parcel, dan hantaran istimewa untuk momen berharga.',
  },
  {
    year: 'Kini & Nanti',
    title: 'Lahirnya Brand Tokuri',
    text: 'Tokuri resmi hadir untuk memperluas jangkauan rasa istimewa rumahan ke seluruh Indonesia dengan standar mutu premium dan harga yang tetap terjangkau.',
  },
];

const philosophies = [
  {
    icon: Heart,
    title: 'Sentuhan Kasih & Ketelitian',
    desc: 'Setiap toples kue kering dipanggang dengan perhatian pada detail—mulai dari takaran adonan hingga kematangan yang sempurna.',
  },
  {
    icon: Award,
    title: 'Bahan Pilihan Tanpa Kompromi',
    desc: 'Kami menggunakan butter bermutu tinggi, keju asli pilihan, dan cokelat murni tanpa pewarna buatan berlebih.',
  },
  {
    icon: ShieldCheck,
    title: 'Higienis & Segar',
    desc: 'Diproduksi dalam batch segar secara berkala untuk memastikan kerenyahan maksimal saat sampai di tangan Anda.',
  },
];

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Cerita di Balik Rasa"
        title="Lebih dari Sekadar Kue Kering."
        description="Tokuri hadir dari sebuah keyakinan sederhana: bahwa kue kering berkualitas berkelas dengan rasa istimewa tidak harus selalu mahal."
        breadcrumb="Tentang Kami"
      />

      {/* 2. Brand Story & Origin */}
      <section className="section-padding section-spacing bg-ivory grain-overlay">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image / Visual Stamp Side */}
            <motion.div
              className="lg:col-span-5 relative flex justify-center"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="relative w-full max-w-sm">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-cream-dark shadow-card border border-beige/60 p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-beige/60 shadow-soft bg-ivory p-1.5">
                    <img
                      src="/images/logo.png"
                      alt="Logo Tokuri Kue Kering"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brown mb-2">
                    TOKURI KUE KERING
                  </h3>
                  <p className="font-sans text-xs tracking-[0.2em] text-brown-light uppercase mb-4">
                    Toko Kue Kering
                  </p>
                  <div className="w-16 h-px bg-beige mx-auto mb-4" />
                  <p className="font-serif text-sm italic text-brown-light/75 px-4 leading-relaxed">
                    &ldquo;Menghadirkan kehangatan cita rasa rumahan di setiap toples.&rdquo;
                  </p>
                </div>

                {/* Decorative tape */}
                <div className="tape -top-3 left-8 z-10" />
                <div className="tape -bottom-2 right-8 z-10 rotate-6" />
              </div>
            </motion.div>

            {/* Story Text Side */}
            <motion.div
              className="lg:col-span-7"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.span variants={fadeUp} className="eyebrow block mb-3">
                Filosofi Nama
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-heading font-semibold text-brown mb-6 text-balance"
              >
                Arti di Balik Nama &ldquo;Tokuri&rdquo;
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-brown-light/80 text-base leading-relaxed">
                <p>
                  <strong className="text-brown font-semibold font-serif text-lg">Tokuri</strong> berakar
                  dari singkatan sederhana: <em className="font-serif text-brown not-italic font-semibold">Toko Kue Kering</em>.
                  Sebuah nama yang jujur, bersahabat, dan membumi untuk sebuah usaha yang bermimpi besar.
                </p>
                <p>
                  Kami meyakini bahwa kemewahan rasa bukanlah tentang kemasan yang intimidatif atau harga yang tak terjangkau,
                  melainkan tentang keaslian bahan, ketulusan pembuatnya, dan kenangan indah yang tercipta saat menikmati setiap butir kuenya.
                </p>
                <p>
                  Setiap resep diracik dengan takaran seimbang: kelembutan mentega, rasa manis yang pas, dan kerenyahan yang memanjakan lidah di setiap gigitan.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 pt-6 border-t border-beige/60 flex items-center gap-4">
                <span className="font-sans text-xs tracking-[0.25em] text-brown uppercase font-medium">
                  Homemade • Premium • Terjangkau
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Philosophies Grid */}
      <section className="section-padding section-spacing bg-cream">
        <div className="container-narrow">
          <motion.div
            className="text-center mb-14"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span variants={fadeUp} className="eyebrow block mb-3">
              Komitmen Kualitas
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-heading font-semibold text-brown text-balance"
            >
              Tiga Janji Rasa Tokuri
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {philosophies.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="bg-ivory rounded-2xl p-8 border border-beige/40 shadow-card hover:shadow-card-hover transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-cream-dark flex items-center justify-center mb-6 text-brown">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-serif text-3xl font-light text-beige block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-brown mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-brown-light/75 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. Timeline Section */}
      <section className="section-padding section-spacing bg-ivory">
        <div className="container-narrow max-w-4xl">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span variants={fadeUp} className="eyebrow block mb-3">
              Perjalanan Kami
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-heading font-semibold text-brown text-balance"
            >
              Langkah Demi Langkah
            </motion.h2>
          </motion.div>

          <div className="relative pl-6 md:pl-0">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-beige/60 -translate-x-1/2" />
            <div className="md:hidden absolute left-3 top-4 bottom-4 w-px bg-beige/60" />

            <div className="space-y-12 md:space-y-16">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } gap-6 md:gap-12`}
                    variants={isEven ? fadeRight : fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                  >
                    {/* Content Box */}
                    <div
                      className={`w-full md:w-1/2 ${
                        isEven ? 'md:text-left' : 'md:text-right'
                      }`}
                    >
                      <span className="inline-block font-sans text-xs font-semibold tracking-wider text-brown-light bg-cream px-3 py-1 rounded-full mb-2 border border-beige/40">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-2xl font-semibold text-brown mb-2">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-brown-light/75 leading-relaxed">
                        {item.text}
                      </p>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-[-1.5rem] md:left-1/2 top-1.5 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-beige bg-cream flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-brown" />
                    </div>

                    {/* Spacer for other half */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Detailed Why Tokuri */}
      <WhyTokuri />

      {/* 6. CTA Banner */}
      <section className="section-padding py-20 bg-cream text-center border-t border-beige/40">
        <div className="container-narrow max-w-2xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl font-semibold text-brown mb-4"
            >
              Ingin Merasakan Kelezatan Tokuri?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-base text-brown-light/70 mb-8 max-w-lg mx-auto"
            >
              Pilih varian rasa favorit Anda dari menu kue kering buatan tangan kami.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link to="/produk" className="btn-primary">
                Lihat Katalog Produk
                <ArrowRight size={16} />
              </Link>
              <Link to="/kontak" className="btn-secondary">
                Hubungi Kami
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
