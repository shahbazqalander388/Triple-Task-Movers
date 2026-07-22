import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaWhatsapp, FaInstagram, FaTiktok, FaCheckCircle
} from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { COMPANY } from '../../constants/data';

function ContactInfo({ icon: Icon, label, value, href, external }) {
  const inner = (
    <div className="flex items-start gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors">
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
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async submit
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  const inputCls = `w-full px-4 py-3.5 rounded-xl border border-white/20 bg-white/10 text-white text-sm
    focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent
    hover:border-primary-300 transition-all duration-200 placeholder:text-gray-400`;

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-gray-950 text-white"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
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
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Get a Free Quote
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-4 border border-primary-500/30">
                    <FaCheckCircle className="text-primary-400 text-4xl" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300 text-sm">
                    Thanks! We'll be in touch with your free quote within minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-primary-400 text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form to get a free moving quote"
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
                        className={inputCls}
                        autoComplete="name"
                      />
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
                          className={inputCls}
                          autoComplete="email"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-300 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (xxx) xxx-xxxx"
                          className={inputCls}
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`${inputCls} [&>option]:bg-gray-900 [&>option]:text-white`}
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
                        className={`${inputCls} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary !text-base !py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                      aria-label="Submit contact form to get a free quote"
                    >
                      {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        'Get My Free Quote →'
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-gray-400">
                      🔒 Your info is private. We'll never share your details.
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
