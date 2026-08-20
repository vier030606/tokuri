import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, staggerContainer, viewportConfig } from '../utils/animations';

const timeline = [
  { year: 'Awal Mula', text: 'Bermula dari dapur rumah dengan resep turun-temurun.' },
  { year: 'Berkembang', text: 'Dipercaya oleh keluarga dan teman untuk hampers dan parcel.' },
  { year: 'Tokuri', text: 'Lahir sebagai brand kue kering yang menghadirkan rasa premium dengan harga bersahabat.' },
];

const About = () => {
  return (
    <section className="section-padding section-spacing bg-cream grain-overlay">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.span variants={fadeUp} className="eyebrow block mb-4">
              Cerita Kami
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-heading font-semibold text-brown mb-6 text-balance"
            >
              Lebih dari Sekadar Kue Kering.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-sans text-base text-brown-light/70 leading-relaxed mb-6"
            >
              Tokuri berasal dari kata <em className="font-serif not-italic text-brown">Toko Kue Kering</em>,
              sebuah nama sederhana untuk sebuah usaha yang ingin menghadirkan rasa rumahan
              dengan kualitas yang dapat dibanggakan.
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="w-8 h-px bg-beige" />
              <span className="font-sans text-xs tracking-[0.2em] text-brown-light/50 uppercase">
                Homemade • Premium • Terjangkau
              </span>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-beige/60" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={fadeLeft}
                  className="relative pl-10"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-beige bg-cream flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brown" />
                  </div>

                  <span className="font-serif text-sm font-semibold text-brown tracking-wide block mb-1">
                    {item.year}
                  </span>
                  <p className="font-sans text-sm text-brown-light/65 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
