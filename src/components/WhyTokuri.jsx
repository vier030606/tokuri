import { motion } from 'framer-motion';
import { Heart, Sparkles, Award, Wallet, Coffee, PackageCheck } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

const reasons = [
  {
    icon: Heart,
    title: 'Dibuat dengan Cinta & Teliti',
    desc: 'Setiap toples kue kering diolah dalam batch harian agar rasa mentega, keju, dan selai tetap dalam kondisi paling prima saat dinikmati.',
    tag: 'Small Batch Production',
  },
  {
    icon: Award,
    title: 'Bahan Pilihan Tanpa Pengawet',
    desc: 'Menggunakan butter Wijsman pilihan, keju Edam tua, dan selai nanas asli buatan sendiri tanpa pemanis buatan berlebih.',
    tag: '100% Bahan Murni',
  },
  {
    icon: Wallet,
    title: 'Rasa Mewah, Harga Bersahabat',
    desc: 'Kami membuktikan bahwa kue kering premium tidak harus dibanderol dengan harga yang mahal. Sangat ramah untuk konsumsi keluarga maupun hampers.',
    tag: 'Affordable Premium',
  },
  {
    icon: PackageCheck,
    title: 'Kemasan Rapi & Siap Hadiah',
    desc: 'Disajikan dalam toples segel kedap udara yang higienis, cantik, dan siap dijadikan buah tangan, hampers lebaran, natal, maupun souvenir acara.',
    tag: 'Gift & Hampers Ready',
  },
];

const WhyTokuri = () => {
  return (
    <section className="section-padding section-spacing bg-cream/30 grain-overlay">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Header & Baker's Manifesto */}
          <motion.div
            className="lg:col-span-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span variants={fadeUp} className="eyebrow block mb-3">
              Keunggulan Tokuri
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-heading font-bold text-brown mb-6 text-balance leading-tight"
            >
              Kenapa Memilih{' '}
              <span className="font-serif italic font-normal text-cinnamon">
                Tokuri?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-sans text-base text-brown-muted leading-relaxed mb-8"
            >
              Bagi kami, membuat kue kering bukan sekadar mencampur tepung dan gula, melainkan merawat kenangan manis kebersamaan yang hangat bersama orang-orang tercinta.
            </motion.p>

            {/* Quote Card */}
            <motion.div
              variants={fadeUp}
              className="relative p-6 sm:p-7 rounded-3xl bg-ivory border border-brown/10 ring-1 ring-brown/5 shadow-soft"
            >
              <div className="washi-tape -top-3 left-6 w-16 h-5 rotate-[-3deg]" />
              <p className="font-serif italic text-lg sm:text-xl text-brown leading-snug mb-3">
                &ldquo;Kue yang lezat adalah kue yang membuat siapapun tersenyum di gigitan pertama.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-beige/40">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-brown/20 bg-ivory">
                  <img src="/images/logo.png" alt="Tokuri" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="font-serif font-bold text-sm text-brown block">
                    Dapur Tokuri
                  </span>
                  <span className="font-sans text-[11px] text-brown-muted">
                    Surabaya Homemade Bakery
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: 4 Reasons Bento Grid */}
          <motion.div
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  variants={fadeUp}
                  className="paper-card p-6 sm:p-7 flex flex-col justify-between group"
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cream-dark flex items-center justify-center text-brown group-hover:bg-brown group-hover:text-ivory transition-colors duration-300">
                        <Icon size={20} />
                      </div>
                      <span className="font-sans text-[10px] font-bold text-brown-muted uppercase tracking-wider bg-cream px-2.5 py-1 rounded-md border border-beige/40">
                        {r.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-brown mb-2.5">
                      {r.title}
                    </h3>
                    <p className="font-sans text-sm text-brown-muted leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyTokuri;
