import { Link } from 'react-router-dom';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaClock, FaInstagram, FaTiktok,
  FaWhatsapp, FaArrowRight
} from 'react-icons/fa';
import { COMPANY, NAV_LINKS, SERVICES } from '../../constants/data';

const FooterLink = ({ to, children }) => (
  <li>
    <a
      href={to}
      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm py-1"
    >
      <FaArrowRight className="text-xs text-primary-500 group-hover:translate-x-1 transition-transform duration-200" />
      {children}
    </a>
  </li>
);

export default function Footer() {
  const year = new Date().getFullYear();
  const cleanWhatsapp = COMPANY.whatsapp.replace(/\D/g, '');

  const socialLinks = [
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: COMPANY.instagram,
      hoverClass: 'hover:bg-primary-500 hover:border-primary-400 hover:text-white',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: `https://wa.me/${cleanWhatsapp}?text=Hi%20Triple%20Task%20Movers%2C%20I%27d%20like%20a%20free%20quote!`,
      hoverClass: 'hover:bg-[#25D366] hover:border-[#25D366] hover:text-white',
    },
    {
      name: 'TikTok',
      icon: FaTiktok,
      href: COMPANY.tiktok,
      hoverClass: 'hover:bg-primary-500 hover:border-primary-400 hover:text-white',
    },
  ];

  return (
    <footer className="bg-gray-950 text-white" role="contentinfo">
      {/* Top CTA band */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-10">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white">
              Ready to Move? Get a Free Quote Today!
            </h2>
            <p className="text-green-100 mt-1">Available 24/7 across Alberta — Call or WhatsApp us!</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-bold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              <FaPhone /> Call Now
            </a>
            <a
              href={`https://wa.me/${cleanWhatsapp}?text=Hi%20Triple%20Task%20Movers%2C%20I%27d%20like%20a%20free%20quote!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-full hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <Link to="/" className="inline-flex items-center gap-3 mb-5">
            <img
              src={COMPANY.logo}
              alt="Triple Task Movers Logo"
              className="w-10 h-10 rounded-xl object-cover border-2 border-primary-500/40 shadow-glow-primary"
            />
            <div>
              <span className="font-display text-lg font-bold text-white block leading-tight">Triple Task</span>
              <span className="text-xs font-semibold text-secondary-400 uppercase tracking-wider block">Movers</span>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Alberta's most trusted professional moving company. Serving residential and commercial clients across the province with care and professionalism.
          </p>

          {/* Social links horizontal row under company info */}
          <div>
            <span className="text-xs font-semibold text-green-400 uppercase tracking-wider block mb-3">
              Follow Us
            </span>
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Triple Task Movers ${social.name}`}
                    title={social.name}
                    className={`w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-green-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-glow-primary/40 ${social.hoverClass}`}
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display font-bold text-white text-base mb-5 uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-1">
            {NAV_LINKS.map((l) => (
              <FooterLink key={l.id} to={`/#${l.id}`}>{l.label}</FooterLink>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display font-bold text-white text-base mb-5 uppercase tracking-wider">
            Our Services
          </h3>
          <ul className="space-y-1">
            {SERVICES.map((s) => (
              <FooterLink key={s.id} to={`/services#${s.slug}`}>{s.title}</FooterLink>
            ))}
          </ul>
        </div>

        {/* Contact Info & Social Media */}
        <div>
          <h3 className="font-display font-bold text-white text-base mb-5 uppercase tracking-wider">
            Contact Info
          </h3>
          <ul className="space-y-4 mb-6">
            <li>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                <FaPhone className="text-primary-400 mt-0.5 flex-shrink-0" />
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                <FaEnvelope className="text-primary-400 mt-0.5 flex-shrink-0" />
                {COMPANY.email}
              </a>
            </li>
            <li>
              <a
                href={COMPANY.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                <FaMapMarkerAlt className="text-primary-400 mt-0.5 flex-shrink-0" />
                {COMPANY.address.full}
              </a>
            </li>
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <FaClock className="text-primary-400 mt-0.5 flex-shrink-0" />
              <span>
                <span className="text-green-400 font-semibold">Open 24/7</span>
                <br />Every day of the year
              </span>
            </li>
          </ul>

          {/* Social media icons under contact section as well */}
          <div className="pt-2 border-t border-white/10">
            <span className="text-xs font-semibold text-green-400 uppercase tracking-wider block mb-3">
              Social Media
            </span>
            <div className="flex items-center gap-2.5 flex-wrap">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={`contact-${social.name}`}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Triple Task Movers ${social.name}`}
                    title={social.name}
                    className={`w-9 h-9 rounded-lg bg-white/10 border border-white/15 text-green-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-glow-primary/40 ${social.hoverClass}`}
                  >
                    <Icon className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {year} Triple Task Movers. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Professional Moving Services in Alberta, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
