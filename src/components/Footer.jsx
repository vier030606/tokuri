import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { navLinks, contact } from '../data/products';
import TokuriBrand from './TokuriBrand';

const InstagramIcon = ({ size = 16, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="section-padding pt-16 pb-8 bg-brown text-ivory">
      <div className="container-narrow">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 pb-12 border-b border-ivory/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <TokuriBrand theme="light" size="md" />
            </div>
            <p className="font-serif text-sm italic text-ivory/50 mb-5">
              &ldquo;A Taste of Elegance.&rdquo;
            </p>
            <p className="font-sans text-xs text-ivory/35 leading-relaxed max-w-xs">
              Kue kering homemade dengan rasa istimewa,
              dibuat dengan bahan pilihan dan harga yang tetap bersahabat.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-ivory/40 mb-5">
              Navigasi
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-sans text-sm text-ivory/60 hover:text-ivory transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-ivory/40 mb-5">
              Hubungi Kami
            </h4>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href={contact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-ivory/60 hover:text-ivory transition-colors duration-300 flex items-center gap-2 w-fit"
              >
                <MessageCircle size={14} />
                {contact.whatsapp.number}
              </a>
              <a
                href={contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-ivory/60 hover:text-ivory transition-colors duration-300 flex items-center gap-2 w-fit"
              >
                <InstagramIcon size={14} />
                {contact.instagram.handle}
              </a>
              <span className="font-sans text-sm text-ivory/40 flex items-center gap-2">
                📍 {contact.location}
              </span>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href={contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-ivory/15 flex items-center justify-center
                           hover:bg-ivory/10 transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={15} className="text-ivory/60" />
              </a>
              <a
                href={contact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-ivory/15 flex items-center justify-center
                           hover:bg-ivory/10 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} className="text-ivory/60" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ivory/30">
            &copy; 2026 Tokuri Kue Kering. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-sans text-[10px] tracking-[0.15em] text-ivory/20 uppercase">
              Homemade &bull; Premium &bull; Terjangkau
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
