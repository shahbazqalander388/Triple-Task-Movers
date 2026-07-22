import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaWhatsapp, FaInstagram, FaTiktok, FaExclamationCircle
} from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { COMPANY } from '../../constants/data';

function ContactInfo({ icon: Icon, label, value, href, external }) {
  const inner = (
    <div className="flex items-start gap-4 group p-3.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300">
      <div className="w-11 h-11 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0
        group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
        <Icon className="text-primary-400 group-hover:text-white transition-colors duration-300 text-base" />
      </div>
      <div>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">{label}</p>
        <p className="text-white font-semibold text-sm group-hover:text-primary-300 transition-colors">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="block"
      >
        {inner}
      </a>
    );
  }
  return inner;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!form.service) {
      newErrors.service = 'Please select a service';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message or move details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const cleanWhatsapp = COMPANY.whatsapp.replace(/\D/g, '');
    const textMessage =
      `*New Moving Quote Request*\n\n` +
      `👤 *Full Name:* ${form.name.trim()}\n` +
      `📧 *Email:* ${form.email.trim()}\n` +
      `📞 *Phone:* ${form.phone.trim()}\n` +
      `🚚 *Service Needed:* ${form.service}\n` +
      `📝 *Message / Details:* ${form.message.trim()}`;

    const waUrl = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(textMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  const getInputClass = (fieldName) => `w-full px-4 py-3.5 rounded-xl border bg-white/10 text-white text-sm
    focus:outline-none focus:ring-2 transition-all duration-200 placeholder:text-gray-400
    ${
      errors[fieldName]
        ? 'border-red-500/80 focus:ring-red-400/50 focus:border-red-500'
        : 'border-white/20 focus:ring-primary-400 focus:border-transparent hover:border-primary-300'
    }`;

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-gray-950 text-white scroll-mt-24"
      aria-labelledby="contact-heading"
      style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #0a1628 50%, #0d2a1a 100%)',
      }}
    >
      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Get In Touch"
          title={<>Contact <span className="text-gradient-primary">Triple Task Movers</span></>}
          subtitle="Ready to move? Get a free no-obligation quote in minutes. We're available 24/7!"
          light={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Branding Header Section */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 shadow-glass backdrop-blur-md">
              <img
                src={COMPANY.logo}
                alt="Triple Task Movers Logo"
                className="w-16 h-16 rounded-2xl object-cover border-2 border-primary-500/40 shadow-glow-primary shrink-0"
              />
              <div>
                <span className="font-display text-2xl sm:text-3xl font-bold block leading-tight text-white">
                  Triple Task
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase block leading-tight text-secondary-400 mt-1">
                  Movers
                </span>
              </div>
            </div>

            <div className="grid gap-3">
              <ContactInfo
                icon={FaPhone}
                label="Phone / Call Now"
                value={COMPANY.phone}
                href={`tel:${COMPANY.phoneRaw}`}
              />
              <ContactInfo
                icon={FaWhatsapp}
                label="WhatsApp"
                value={COMPANY.phone}
                href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%2C%20I%27d%20like%20a%20free%20moving%20quote!`}
                external
              />
              <ContactInfo
                icon={FaEnvelope}
                label="Email Address"
                value={COMPANY.email}
                href={`mailto:${COMPANY.email}`}
              />
              <ContactInfo
                icon={FaMapMarkerAlt}
                label="Our Location"
                value={COMPANY.address.full}
                href={COMPANY.googleMaps}
                external
              />
              <ContactInfo
                icon={FaClock}
                label="Business Hours"
                value={COMPANY.hours}
              />
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600
                    flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md"
                >
                  <FaInstagram />
                </a>
                <a
                  href={COMPANY.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-11 h-11 rounded-xl bg-white/10 border border-white/20
                    flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-md"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-glass border border-white/15">
              <iframe
                src={COMPANY.googleMapsEmbed}
                width="100%"
                height="240"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Triple Task Movers on Google Maps"
                aria-label="Embedded Google Map showing Triple Task Movers location"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-glass border border-white/10 p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Get a Free Quote
              </h3>
              <p className="text-sm text-gray-300 mb-6">
                Fill out the form below to initiate your quote directly via WhatsApp.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-[#25D366]/20 flex items-center justify-center mx-auto mb-4 border border-[#25D366]/30">
                    <FaWhatsapp className="text-[#25D366] text-4xl" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white mb-2">Opening WhatsApp...</h4>
                  <p className="text-gray-300 text-sm">
                    Your details have been pre-filled. Complete your quote request right in WhatsApp!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', service: '', message: '' });
                      setErrors({});
                    }}
                    className="mt-6 text-primary-400 text-sm font-semibold hover:underline"
                  >
                    Submit another quote request
                  </button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form to get a free moving quote on WhatsApp"
                >
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Full Name <span className="text-secondary-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={getInputClass('name')}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs font-medium mt-1.5 flex items-center gap-1">
                          <FaExclamationCircle className="shrink-0" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email + Phone row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Email <span className="text-secondary-400">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={getInputClass('email')}
                          autoComplete="email"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs font-medium mt-1.5 flex items-center gap-1">
                            <FaExclamationCircle className="shrink-0" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Phone Number <span className="text-secondary-400">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (xxx) xxx-xxxx"
                          className={getInputClass('phone')}
                          autoComplete="tel"
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-xs font-medium mt-1.5 flex items-center gap-1">
                            <FaExclamationCircle className="shrink-0" />
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Service Needed <span className="text-secondary-400">*</span>
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className={`${getInputClass('service')} [&>option]:bg-gray-900 [&>option]:text-white`}
                      >
                        <option value="">Select a service…</option>
                        <option>Residential Moving</option>
                        <option>Commercial Moving</option>
                        <option>Packing & Unpacking</option>
                        <option>Loading & Unloading</option>
                        <option>Cleaning Services</option>
                        <option>Junk Removal</option>
                        <option>Multiple Services</option>
                      </select>
                      {errors.service && (
                        <p className="text-red-400 text-xs font-medium mt-1.5 flex items-center gap-1">
                          <FaExclamationCircle className="shrink-0" />
                          {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Message / Details <span className="text-secondary-400">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your move — location, date, special requirements…"
                        className={`${getInputClass('message')} resize-none`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs font-medium mt-1.5 flex items-center gap-1">
                          <FaExclamationCircle className="shrink-0" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, translateY: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#25D366]/25 transition-all duration-300 flex items-center justify-center gap-3 text-base group cursor-pointer mt-2"
                      aria-label="Get Quote on WhatsApp"
                    >
                      <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                      <span>Get Quote on WhatsApp</span>
                    </motion.button>

                    <p className="text-center text-xs text-gray-400 pt-2">
                      🔒 Your info is private. Clicking opens WhatsApp with your quote details pre-filled.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

