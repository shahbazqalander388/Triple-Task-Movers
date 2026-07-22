import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaTruck, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaClock, FaInstagram, FaTiktok, FaArrowRight
} from 'react-icons/fa';
import { COMPANY, NAV_LINKS, SERVICES } from '../../constants/data';

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm py-1"
    >
      <FaArrowRight className="text-xs text-primary-500 group-hover:translate-x-1 transition-transform duration-200" />
      {children}
    </Link>
  </li>
);

export default function Footer() {
  const year = new Date().getFullYear();

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
              href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20Triple%20Task%20Movers%2C%20I%27d%20like%20a%20free%20quote!`}
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <FaTruck className="text-white text-base" />
            </div>
            <div>
              <span className="font-display text-lg font-bold text-white block leading-tight">Triple Task</span>
              <span className="text-xs font-semibold text-secondary-400 uppercase tracking-wider block">Movers</span>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Alberta's most trusted professional moving company. Serving residential and commercial clients across the province with care and professionalism.
          </p>
          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Triple Task Movers Instagram"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 flex items-center justify-center transition-all duration-300"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href={COMPANY.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Triple Task Movers TikTok"
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-black flex items-center justify-center transition-all duration-300"
            >
              <FaTiktok className="text-white" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display font-bold text-white text-base mb-5 uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-1">
            {NAV_LINKS.map((l) => (
              <FooterLink key={l.path} to={l.path}>{l.label}</FooterLink>
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

        {/* Contact */}
        <div>
          <h3 className="font-display font-bold text-white text-base mb-5 uppercase tracking-wider">
            Contact Info
          </h3>
          <ul className="space-y-4">
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
