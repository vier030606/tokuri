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
    strokeWidth="2.5"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="section-padding pt-16 pb-8 bg-neo-bg border-t-4 border-black">
      <div className="container-narrow">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 pb-12 border-b-4 border-black">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <TokuriBrand theme="light" size="md" />
            </div>
            <p className="font-display text-xl font-black text-black mb-5 uppercase leading-none">
              "A Taste of Elegance."
            </p>
            <p className="font-sans font-medium text-sm text-black leading-relaxed max-w-xs p-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Kue kering homemade dengan rasa istimewa, dibuat dengan bahan pilihan dan harga yang tetap bersahabat.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs font-black tracking-widest uppercase text-white bg-black px-3 py-1 inline-block mb-6 border-2 border-black">
              Navigasi
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-sans font-black text-base text-black hover:bg-neo-primary hover:text-white px-2 py-1 w-fit border-2 border-transparent hover:border-black transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-sans text-xs font-black tracking-widest uppercase text-white bg-black px-3 py-1 inline-block mb-6 border-2 border-black">
              Hubungi Kami
            </h4>
            <div className="flex flex-col gap-4 mb-8">
              <a
                href={contact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-black text-sm text-black hover:bg-neo-yellow px-2 py-1 border-2 border-transparent hover:border-black transition-colors flex items-center gap-2 w-fit uppercase"
              >
                <MessageCircle size={18} strokeWidth={2.5} />
                {contact.whatsapp.number}
              </a>
              <a
                href={contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-black text-sm text-black hover:bg-neo-yellow px-2 py-1 border-2 border-transparent hover:border-black transition-colors flex items-center gap-2 w-fit uppercase"
              >
                <InstagramIcon size={18} />
                {contact.instagram.handle}
              </a>
              <span className="font-sans font-black text-sm text-black flex items-center gap-2 px-2 py-1 uppercase">
                📍 {contact.location}
              </span>
            </div>

            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href={contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-neo-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={contact.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:bg-neo-accent hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans font-black text-xs text-black uppercase">
            &copy; 2026 Tokuri Kue Kering. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-sans font-black text-[10px] tracking-widest text-black bg-white px-2 py-1 border-2 border-black uppercase">
              Homemade &bull; Premium &bull; Terjangkau
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
