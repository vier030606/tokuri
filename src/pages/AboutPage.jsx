import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Award, ShieldCheck, Sparkles, UtensilsCrossed, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import WhyTokuri from '../components/WhyTokuri';
import FloatingCartBar from '../components/FloatingCartBar';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportConfig } from '../utils/animations';

const timeline = [
  {
    year: 'Awal Mula',
    title: 'Dapur Rumahan yang Selalu Wangi',
    text: 'Semua berawal dari hobi membuat kue kering keluarga saat hari raya tiba. Resep turun-temurun dengan takaran butter yang pas menjadi favorit sanak saudara dan tetangga sekitar.',
  },
  {
    year: 'Berkembang',
    title: 'Pesanan yang Terus Bertumbuh',
    text: 'Dari mulut ke mulut, pesanan mulai berdatangan untuk momen pernikahan, parcel Idul Fitri, hingga souvenir gathering kantor yang memesan hingga ratusan toples.',
  },
  {
    year: 'Kini & Masa Depan',
    title: 'Brand Tokuri Resmi Hadir',
    text: 'Tokuri resmi dilahirkan untuk membawa kehangatan cita rasa kue kering rumahan ke seluruh Indonesia—tanpa mengorbankan kualitas bahan dan tetap menjaga harga yang bersahabat.',
  },
];

const philosophies = [
  {
    icon: Heart,
    title: 'Ketulusan di Setiap Adonan',
    desc: 'Setiap toples kue kering diolah dengan tangan secara cermat, menjaga tekstur renyah dan aroma mentega yang memikat.',
  },
  {
    icon: Award,
    title: 'Butter & Bahan Alami Murni',
    desc: 'Kami memilih mentega Wijsman murni, keju Edam tua, dan selai nanas asli tanpa pengawet sintesis berbahaya.',
  },
  {
    icon: ShieldCheck,
    title: 'Kemasan Rapi & Higienis',
    desc: 'Toples segel kedap udara memastikan kerenyahan kue bertahan lama dan siap disajikan dalam segala momen bahagia.',
  },
];

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="Kisah & Filosofi"
        title="Cerita di Balik Tokuri"
        description="Sebuah perjalanan rasa yang bermula dari ketulusan dapur rumah, menghadirkan kue kering lezat yang dapat dibanggakan di meja tamu Anda."
        breadcrumb="Tentang Kami"
      />

      {/* 2. Story Section with Editorial Drop Cap */}
      <section className="section-padding section-spacing bg-ivory grain-overlay">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Side — Founder Scrapbook Badge */}
            <motion.div
              className="lg:col-span-5 relative flex justify-center"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="relative w-full max-w-sm">
                <div className="bg-cream/70 p-6 pb-8 rounded-4xl border border-brown/10 ring-1 ring-brown/5 shadow-card text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-2 border-beige shadow-soft bg-ivory p-2">
                    <img
                      src="/images/logo.png"
                      alt="Logo Tokuri Kue Kering"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>

                  <span className="font-sans text-xs font-bold text-brown-muted tracking-[0.25em] uppercase block mb-1">
                    Authentic Homemade
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-brown mb-3">
                    TOKURI KUE KERING
                  </h3>

                  <div className="editorial-divider my-4" />

                  <p className="font-serif italic text-sm text-brown-muted leading-relaxed px-2">
                    &ldquo;Kami percaya kebahagiaan sederhana bisa dimulai dari sepiring kue kering yang dipanggang dengan hati.&rdquo;
                  </p>
                </div>

                {/* Decorative washi tapes */}
                <div className="washi-tape -top-3 left-6 w-20 h-6 rotate-[-3deg]" />
                <div className="washi-tape -bottom-2 right-6 w-20 h-6 rotate-[4deg]" />
              </div>
            </motion.div>

            {/* Editorial Story Text */}
            <motion.div
              className="lg:col-span-7"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.span variants={fadeUp} className="eyebrow block mb-3">
                Asal Usul Nama
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-heading font-semibold text-brown mb-6 text-balance leading-tight"
              >
                Arti di Balik Singkatan &ldquo;Tokuri&rdquo;
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-4 text-brown-muted text-base sm:text-lg leading-relaxed">
                <p className="drop-cap">
                  <strong>Tokuri</strong> lahir dari singkatan bersahaja: <em>Toko Kue Kering</em>.
                  Nama yang sederhana, jujur, dan mudah diingat oleh siapa saja. Di balik kesederhanaan nama itu, tersimpan dedikasi tinggi untuk menyajikan kue kering bercita rasa istimewa.
                </p>
                <p>
                  Bagi kami, kue kering bukan sekadar camilan musiman yang hadir setahun sekali saat hari raya. Kue kering adalah teman bercengkerama saat sore hari, pelengkap secangkir kopi hangat, dan simbol perhatian tulus saat dihadiahkan kepada kerabat.
                </p>
                <p>
                  Itulah mengapa Tokuri memegang teguh prinsip <strong>Affordable Premium</strong>: menghadirkan kualitas bahan bintang lima dengan harga yang tetap terjangkau dan tidak membebani.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 pt-6 border-t border-beige/60 flex items-center gap-3">
                <span className="w-6 h-px bg-brown" />
                <span className="font-sans text-xs tracking-[0.25em] text-brown uppercase font-semibold">
                  Homemade • Premium • Terjangkau
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Three Promises Cards */}
      <section className="section-padding section-spacing bg-cream/40 grain-overlay">
        <div className="container-narrow">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span variants={fadeUp} className="eyebrow block mb-2">
              Prinsip Kami
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-heading font-semibold text-brown text-balance"
            >
              Tiga Janji Mutu Tokuri
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
                  className="paper-card p-8 flex flex-col justify-between"
                  whileHover={{ y: -6 }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cream-dark flex items-center justify-center mb-6 text-brown shadow-soft">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <span className="font-serif text-3xl font-light text-beige-dark/60 block mb-2">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-brown mb-3">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-brown-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
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
            <motion.span variants={fadeUp} className="eyebrow block mb-2">
              Linimasa Perjalanan
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-heading font-semibold text-brown text-balance"
            >
              Langkah Demi Langkah
            </motion.h2>
          </motion.div>

          <div className="relative pl-6 md:pl-0">
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-beige-dark/40 -translate-x-1/2" />
            <div className="md:hidden absolute left-3 top-4 bottom-4 w-px bg-beige-dark/40" />

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
                    <div
                      className={`w-full md:w-1/2 ${
                        isEven ? 'md:text-left' : 'md:text-right'
                      }`}
                    >
                      <span className="inline-block font-sans text-xs font-bold tracking-wider text-brown-muted bg-cream-dark px-3 py-1 rounded-full mb-2 border border-beige">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-brown mb-2">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-brown-muted leading-relaxed">
                        {item.text}
                      </p>
                    </div>

                    <div className="absolute left-[-1.5rem] md:left-1/2 top-1.5 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-beige bg-ivory flex items-center justify-center z-10 shadow-soft">
                      <div className="w-2.5 h-2.5 rounded-full bg-brown" />
                    </div>

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
      <section className="section-padding py-20 bg-cream/40 text-center border-t border-beige/40">
        <div className="container-narrow max-w-2xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mb-4">
              Siap Menemukan Rasa Favoritmu?
            </h2>
            <p className="font-sans text-base text-brown-muted mb-8 max-w-lg mx-auto">
              Jelajahi berbagai pilihan kue kering kami dan pesan langsung dengan mudah via WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/produk" className="btn-primary">
                Katalog Produk Lengkap
                <ArrowRight size={16} />
              </Link>
              <Link to="/kontak" className="btn-secondary">
                Hubungi Tokuri
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingCartBar />
    </div>
  );
};

export default AboutPage;
