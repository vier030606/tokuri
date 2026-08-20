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
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 section-padding bg-cream border-b border-beige/40 overflow-hidden">
      {/* Decorative botanical element */}
      <div className="absolute top-12 right-12 w-48 h-48 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 10 C60 40, 20 80, 40 140 C50 170, 80 190, 100 190 C120 190, 150 170, 160 140 C180 80, 140 40, 100 10Z"
            stroke="#5A351B"
            strokeWidth="1.5"
          />
          <path d="M100 10 L100 190" stroke="#5A351B" strokeWidth="0.8" />
          <path d="M70 60 Q100 90, 130 60" stroke="#5A351B" strokeWidth="0.8" fill="none" />
          <path d="M60 100 Q100 130, 140 100" stroke="#5A351B" strokeWidth="0.8" fill="none" />
          <path d="M65 140 Q100 165, 135 140" stroke="#5A351B" strokeWidth="0.8" fill="none" />
        </svg>
      </div>

      <div className="container-narrow relative z-10 max-w-3xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          {/* Breadcrumb */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-1.5 font-sans text-xs text-brown-light/60 mb-4"
          >
            <Link to="/" className="hover:text-brown transition-colors">
              Beranda
            </Link>
            <ChevronRight size={12} className="text-brown-light/40" />
            <span className="text-brown font-medium">{breadcrumb || title}</span>
          </motion.div>

          {/* Eyebrow */}
          {eyebrow && (
            <motion.span variants={fadeUp} className="eyebrow block mb-3">
              {eyebrow}
            </motion.span>
          )}

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-heading font-bold text-brown mb-4 text-balance leading-tight"
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              variants={fadeUp}
              className="font-sans text-base sm:text-lg text-brown-light/75 leading-relaxed max-w-2xl"
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
