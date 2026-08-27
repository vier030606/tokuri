import { motion } from 'framer-motion';
import { Star, CheckCircle2, MessageSquareHeart } from 'lucide-react';
import { customerReviews } from '../data/products';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

const CustomerReviews = () => {
  const cardColors = ['bg-neo-yellow', 'bg-white', 'bg-neo-blue', 'bg-neo-accent'];

  return (
    <section className="section-padding section-spacing relative overflow-hidden bg-neo-bg border-b-4 border-black">
      <div className="container-narrow relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-neo-primary text-white px-4 py-2 mb-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
            <MessageSquareHeart size={18} strokeWidth={2.5} />
            <span className="font-sans text-xs font-black uppercase tracking-widest">
              Ulasan & Cerita Pelanggan
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl font-black text-black mb-4 text-balance uppercase tracking-tight leading-none"
          >
            Hangatnya Cita Rasa yang Diakui
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans font-bold text-sm sm:text-base text-black bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-lg mx-auto"
          >
            Cerita jujur dari keluarga, pelanggan setia, dan mitra reseller yang telah menikmati kue kering Tokuri.
          </motion.p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {customerReviews.map((item, idx) => {
            const bgColor = cardColors[idx % cardColors.length];
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className={`neo-brutal-card ${bgColor} p-6 sm:p-7 relative flex flex-col justify-between group hover:-translate-y-2 transition-transform`}
              >
                <div>
                  {/* Rating Stars & Verified Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-black">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" strokeWidth={2.5} />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-sans font-black text-white bg-black px-2 py-1 uppercase tracking-wider border-2 border-black">
                      <CheckCircle2 size={12} strokeWidth={3} />
                      Verified
                    </span>
                  </div>

                  {/* Quote Text */}
                  <p className="font-sans font-medium text-sm text-black leading-relaxed mb-8">
                    "{item.review}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t-4 border-black">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center font-display font-black text-xl text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
                      {item.avatarText}
                    </div>
                    <div>
                      <span className="font-display font-black text-lg text-black block leading-none uppercase">
                        {item.name}
                      </span>
                      <span className="font-sans font-bold text-[11px] text-black uppercase mt-1 block">
                        {item.city} • {item.product}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;
