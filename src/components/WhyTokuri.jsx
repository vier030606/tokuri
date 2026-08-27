import { motion } from 'framer-motion';
import { Heart, Sparkles, Award, Wallet, Coffee, PackageCheck } from 'lucide-react';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

const reasons = [
  {
    icon: Heart,
    title: 'Dibuat dengan Cinta & Teliti',
    desc: 'Setiap toples kue kering diolah dalam batch harian agar rasa mentega, keju, dan selai tetap dalam kondisi paling prima saat dinikmati.',
    tag: 'Small Batch Production',
    color: 'bg-neo-yellow',
  },
  {
    icon: Award,
    title: 'Bahan Pilihan Tanpa Pengawet',
    desc: 'Menggunakan butter Wijsman pilihan, keju Edam tua, dan selai nanas asli buatan sendiri tanpa pemanis buatan berlebih.',
    tag: '100% Bahan Murni',
    color: 'bg-white',
  },
  {
    icon: Wallet,
    title: 'Rasa Mewah, Harga Bersahabat',
    desc: 'Kami membuktikan bahwa kue kering premium tidak harus dibanderol dengan harga yang mahal. Sangat ramah untuk konsumsi keluarga maupun hampers.',
    tag: 'Affordable Premium',
    color: 'bg-neo-blue',
  },
  {
    icon: PackageCheck,
    title: 'Kemasan Rapi & Siap Hadiah',
    desc: 'Disajikan dalam toples segel kedap udara yang higienis, cantik, dan siap dijadikan buah tangan, hampers lebaran, natal, maupun souvenir acara.',
    tag: 'Gift & Hampers Ready',
    color: 'bg-neo-accent',
  },
];

const WhyTokuri = () => {
  return (
    <section className="section-padding section-spacing relative overflow-hidden bg-neo-bg border-b-4 border-black">
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Header & Baker's Manifesto */}
          <motion.div
            className="lg:col-span-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeUp} className="inline-block mb-6 bg-neo-primary text-white px-4 py-2 border-4 border-black transform rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-sans font-black text-sm tracking-widest uppercase">
                Keunggulan Tokuri
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl font-black text-black mb-6 text-balance leading-none uppercase tracking-tight"
            >
              Kenapa Memilih{' '}
              <span className="text-white bg-black inline-block px-3 border-4 border-black transform -rotate-1 mt-2 shadow-[6px_6px_0px_0px_rgba(253,224,71,1)]">
                Tokuri?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-sans font-bold text-lg text-black leading-relaxed mb-10 bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Bagi kami, membuat kue kering bukan sekadar mencampur tepung dan gula, melainkan merawat kenangan manis kebersamaan yang hangat bersama orang-orang tercinta.
            </motion.p>

            {/* Quote Card */}
            <motion.div
              variants={fadeUp}
              className="relative p-6 sm:p-7 bg-neo-secondary border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1"
            >
              <p className="font-display font-black text-xl sm:text-2xl text-black leading-none mb-6 uppercase">
                "Kue yang lezat adalah kue yang membuat siapapun tersenyum di gigitan pertama."
              </p>
              <div className="flex items-center gap-4 pt-4 border-t-4 border-black">
                <div className="w-12 h-12 overflow-hidden border-2 border-black bg-white flex items-center justify-center">
                  <img src="/images/logo.png" alt="Tokuri" className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="font-display font-black text-base text-black block uppercase">
                    Dapur Tokuri
                  </span>
                  <span className="font-sans font-bold text-xs text-black uppercase">
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
                  className={`neo-brutal-card ${r.color} p-6 sm:p-7 flex flex-col justify-between group transition-transform hover:-translate-y-2`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="w-12 h-12 bg-black flex items-center justify-center text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-neo-primary transition-colors">
                        <Icon size={24} strokeWidth={2.5} />
                      </div>
                      <span className="font-sans text-[10px] font-black text-black uppercase tracking-widest bg-white px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {r.tag}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-black text-black mb-4 uppercase leading-none">
                      {r.title}
                    </h3>
                    <p className="font-sans font-medium text-sm text-black leading-relaxed">
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
