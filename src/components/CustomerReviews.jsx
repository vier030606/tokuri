import { motion } from 'framer-motion';
import { Star, Heart, Quote, CheckCircle2, MessageSquareHeart } from 'lucide-react';
import { customerReviews } from '../data/products';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

const CustomerReviews = () => {
  return (
    <section className="section-padding section-spacing bg-ivory relative grain-overlay border-t border-beige/40">
      <div className="container-narrow">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-cream-dark px-3.5 py-1.5 rounded-full mb-3 border border-beige">
            <MessageSquareHeart size={14} className="text-cinnamon" />
            <span className="font-sans text-xs font-semibold text-brown uppercase tracking-wider">
              Ulasan & Cerita Pelanggan
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-heading font-bold text-brown mb-3 text-balance"
          >
            Hangatnya Cita Rasa yang Diakui
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-sm sm:text-base text-brown-muted"
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
          {customerReviews.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="paper-card relative flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Subtle washi tape for card */}
              <div className="washi-tape -top-2.5 right-6 w-14 h-4 rotate-[3deg]" />

              <div>
                {/* Rating Stars & Verified Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-caramel">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-sans font-semibold text-sage bg-sage-light/60 px-2 py-0.5 rounded-full">
                    <CheckCircle2 size={11} />
                    Verified
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-sans text-sm text-brown-muted leading-relaxed mb-6 italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-beige/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cream-dark border border-beige flex items-center justify-center font-serif font-bold text-sm text-brown shadow-soft">
                    {item.avatarText}
                  </div>
                  <div>
                    <span className="font-serif font-bold text-base text-brown block leading-tight">
                      {item.name}
                    </span>
                    <span className="font-sans text-[11px] text-brown-muted block">
                      {item.city} • {item.product}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;
