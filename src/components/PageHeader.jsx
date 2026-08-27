import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

const PageHeader = ({
  eyebrow = '',
  title = '',
  description = '',
  breadcrumb = '',
}) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-22 section-padding bg-neo-bg border-b-4 border-black overflow-hidden">
      {/* Decorative Neo Brutal Elements */}
      <div className="absolute top-20 right-10 md:right-20 w-32 h-32 bg-neo-yellow border-4 border-black transform rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] pointer-events-none hidden sm:block z-0" />
      <div className="absolute top-40 right-40 w-16 h-16 rounded-full bg-neo-primary border-4 border-black pointer-events-none hidden lg:block z-0" />

      <div className="container-narrow relative z-10 max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          {/* Breadcrumb with Subtle Pill */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-1.5 font-sans font-bold text-xs text-black mb-6 bg-white px-3.5 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider"
          >
            <Link to="/" className="hover:text-neo-primary transition-colors">
              Beranda
            </Link>
            <ChevronRight size={14} className="text-black" strokeWidth={3} />
            <span className="text-black bg-neo-yellow px-2 py-0.5 border-2 border-black">{breadcrumb || title}</span>
          </motion.div>

          {/* Eyebrow */}
          {eyebrow && (
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <span className="inline-block bg-black text-white px-3 py-1 border-2 border-black transform -rotate-2">
                <span className="font-sans font-black text-xs uppercase tracking-widest">{eyebrow}</span>
              </span>
            </motion.div>
          )}

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-black mb-6 text-balance leading-none uppercase tracking-tight"
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              variants={fadeUp}
              className="font-sans font-medium text-lg sm:text-xl text-black leading-relaxed max-w-2xl bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
