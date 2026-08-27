import { motion } from 'framer-motion';
import { occasions, products } from '../data/products';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';
import { Link } from 'react-router-dom';

const Occasions = () => {
  const cardColors = ['bg-neo-yellow', 'bg-neo-blue', 'bg-neo-secondary'];

  return (
    <section className="section-padding section-spacing bg-white border-b-4 border-black relative overflow-hidden">
      <div className="container-narrow relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14 md:mb-18"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div variants={fadeUp} className="inline-block mb-4 bg-black text-white px-4 py-1.5 border-2 border-black transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(225,29,72,1)]">
            <span className="font-sans font-bold text-sm tracking-widest uppercase">Momen Bersama Tokuri</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl font-black text-black text-balance uppercase tracking-tight leading-none mt-4"
          >
            Untuk Setiap{' '}
            <span className="text-white bg-neo-primary inline-block px-3 border-4 border-black transform rotate-1 mt-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              Momen.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans font-medium text-lg text-black mt-6 border-2 border-black p-3 bg-neo-bg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-lg mx-auto"
          >
            Dari santai minum teh di sore hari hingga bingkisan hampers perayaan mewah.
          </motion.p>
        </motion.div>

        {/* Bento/Brutal Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {occasions.map((occ, idx) => {
            const bgColor = cardColors[idx % cardColors.length];
            return (
              <motion.div
                key={occ.id}
                variants={fadeUp}
                className={`group neo-brutal-card ${bgColor} flex flex-col justify-between`}
              >
                <div>
                  {/* Image Block */}
                  <div className="relative aspect-[4/3] border-b-4 border-black overflow-hidden bg-white">
                    <img
                      src={occ.image}
                      alt={occ.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[20%] contrast-125"
                      loading="lazy"
                    />
                    
                    {/* Index tag */}
                    <div className="absolute top-0 left-0 bg-black text-white px-3 py-2 border-r-4 border-b-4 border-black">
                      <span className="font-display text-lg font-black leading-none">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-5">
                    <h3 className="font-display text-2xl md:text-3xl font-black text-black mb-3 uppercase leading-none group-hover:translate-x-1 transition-transform">
                      {occ.label}
                    </h3>
                    <p className="font-sans font-medium text-sm text-black leading-relaxed">
                      {occ.desc}
                    </p>
                  </div>
                </div>

                {/* Recommended Tags */}
                {occ.recommended && (
                  <div className="p-5 pt-0 mt-auto">
                    <div className="border-t-4 border-black pt-4 flex flex-col gap-2">
                      <span className="font-sans text-xs uppercase font-black text-black tracking-widest">
                        Varian Cocok:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {occ.recommended.slice(0, 2).map((recId) => (
                          <span
                            key={recId}
                            className="font-sans font-bold text-[11px] uppercase tracking-wider text-black bg-white px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          >
                            {products.find((p) => p.id === recId)?.name.split(' ')[0] || recId}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Occasions;
