import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { fadeUp, fadeRight, staggerContainer, viewportConfig } from '../utils/animations';
import { contact } from '../data/products';

const ResellerSection = () => {
  return (
    <section id="reseller" className="section-padding section-spacing">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden img-placeholder shadow-card rotate-1">
              <img
                src="/images/reseller.jpg"
                alt="Jadi reseller Tokuri Kue Kering"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center bg-cream-dark p-8">
                      <svg class="w-14 h-14 text-brown-light/20 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <path d="M21 15l-5-5L5 21"/>
                      </svg>
                      <span class="font-serif text-brown-light/40 text-sm italic">Reseller Image</span>
                      <span class="font-sans text-brown-light/25 text-xs mt-1">reseller.jpg</span>
                    </div>
                  `;
                }}
              />
            </div>

            {/* Decorative tape */}
            <div className="tape -top-2 left-10 z-10" />

            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 z-20 w-20 h-20 rounded-full bg-brown flex items-center justify-center shadow-card">
              <div className="text-center">
                <Users size={18} className="text-ivory mx-auto mb-0.5" />
                <span className="font-sans text-[9px] font-medium text-ivory/80 block">Reseller</span>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span variants={fadeUp} className="eyebrow block mb-4">
              Mitra Usaha
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-heading font-semibold text-brown mb-5 text-balance"
            >
              Jadi Reseller Tokuri
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-sans text-base text-brown-light/70 leading-relaxed mb-8 max-w-lg"
            >
              Bangun usaha bersama Tokuri dengan pilihan kue kering yang mudah dipasarkan
              dan disukai berbagai kalangan.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-3 mb-8">
              {[
                'Modal terjangkau',
                'Produk mudah dipasarkan',
                'Support penuh dari tim Tokuri',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brown shrink-0" />
                  <span className="font-sans text-sm text-brown-light/80">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href={contact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Hubungi Kami untuk Reseller
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResellerSection;
