import { motion } from 'framer-motion';
import { MessageCircle, MapPin, AtSign } from 'lucide-react';
import { contact } from '../data/products';
import { fadeUp, staggerContainer, viewportConfig } from '../utils/animations';

const InstagramIcon = ({ size = 20, className = '' }) => (
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

const contactChannels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: contact.whatsapp.number,
    url: contact.whatsapp.url,
    accent: true,
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: contact.instagram.handle,
    url: contact.instagram.url,
  },
  {
    icon: AtSign,
    label: 'LINE',
    value: contact.line.id,
    url: contact.line.url,
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: contact.location,
    url: null,
  },
];

const Contact = () => {
  return (
    <section id="kontak" className="section-padding section-spacing relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-cream">
        <div className="absolute top-0 left-0 right-0 h-px bg-beige/40" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Decorative element */}
          <motion.div variants={fadeUp} className="mb-6">
            <div className="w-16 h-16 rounded-full bg-cream-dark mx-auto flex items-center justify-center mb-6">
              <MessageCircle size={24} className="text-brown" strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-serif text-heading font-semibold text-brown mb-5 text-balance"
          >
            Siap Menemukan Favoritmu?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-sans text-base sm:text-lg text-brown-light/70 leading-relaxed max-w-xl mx-auto mb-10"
          >
            Untuk pesanan, hampers, parcel, souvenir, maupun reseller,
            hubungi Tokuri melalui kanal berikut.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href={contact.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href={contact.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <InstagramIcon size={16} />
              Instagram
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {contactChannels.map((channel) => {
            const IconComponent = channel.icon;
            const Wrapper = channel.url ? 'a' : 'div';
            const wrapperProps = channel.url
              ? {
                  href: channel.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : {};

            return (
              <motion.div key={channel.label} variants={fadeUp}>
                <Wrapper
                  {...wrapperProps}
                  className={`block p-5 sm:p-6 rounded-2xl text-center transition-all duration-300
                    ${channel.accent
                      ? 'bg-brown text-ivory hover:bg-brown-light'
                      : 'bg-ivory hover:bg-cream-dark border border-beige/30'
                    }
                    ${channel.url ? 'cursor-pointer' : 'cursor-default'}
                  `}
                >
                  <IconComponent
                    size={22}
                    className={`mx-auto mb-3 ${channel.accent ? 'text-ivory/80' : 'text-brown-light'}`}
                  />
                  <span className={`block font-sans text-xs font-medium tracking-wider uppercase mb-1.5
                    ${channel.accent ? 'text-ivory/60' : 'text-brown-light/50'}`}
                  >
                    {channel.label}
                  </span>
                  <span className={`block font-sans text-sm font-semibold
                    ${channel.accent ? 'text-ivory' : 'text-brown'}`}
                  >
                    {channel.value}
                  </span>
                </Wrapper>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
