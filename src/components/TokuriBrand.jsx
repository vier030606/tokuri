import { Link } from 'react-router-dom';

/**
 * Tokuri Brand Logo Component
 * Uses the authentic Tokuri circular brand logo image with intact proportions and React Router Link.
 */
const TokuriBrand = ({
  className = '',
  size = 'md',
  showText = true,
  theme = 'dark', // 'dark' for brown text, 'light' for ivory text (e.g. in footer)
}) => {
  const imageSizes = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10 md:w-11 md:h-11',
    md: 'w-12 h-12 md:w-14 md:h-14',
    lg: 'w-16 h-16 md:w-20 md:h-20',
    xl: 'w-24 h-24 md:w-28 md:h-28',
  };

  const textSizes = {
    xs: { title: 'text-base', sub: 'text-[9px]' },
    sm: { title: 'text-lg md:text-xl', sub: 'text-[10px]' },
    md: { title: 'text-xl md:text-2xl', sub: 'text-[11px]' },
    lg: { title: 'text-2xl md:text-3xl', sub: 'text-xs' },
    xl: { title: 'text-3xl md:text-4xl', sub: 'text-sm' },
  };

  const textColor = theme === 'light' ? 'text-ivory' : 'text-brown';
  const subTextColor = theme === 'light' ? 'text-ivory/60' : 'text-brown-light';

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group transition-transform duration-300 active:scale-95 ${className}`}
    >
      {/* Official Circular Logo */}
      <div
        className={`relative ${imageSizes[size]} aspect-square shrink-0 rounded-full overflow-hidden border border-brown/10 bg-ivory shadow-soft group-hover:shadow-card transition-shadow duration-300`}
      >
        <img
          src="/images/logo.png"
          alt="Logo Tokuri Kue Kering"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Companion Brand Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-serif font-bold tracking-[0.1em] ${textColor} ${textSizes[size].title} transition-colors`}
          >
            TOKURI
          </span>
          <span
            className={`font-sans font-medium tracking-[0.24em] uppercase mt-1 ${subTextColor} ${textSizes[size].sub}`}
          >
            Kue Kering
          </span>
        </div>
      )}
    </Link>
  );
};

export default TokuriBrand;
