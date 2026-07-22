import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { SERVICE_AREAS, COMPANY } from '../../constants/data';

export default function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="section-padding relative overflow-hidden bg-gray-950 text-white"
      aria-labelledby="areas-heading"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0d2a1a 100%)',
      }}
    >
      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Where We Serve"
          title={<>Service Areas Across <span className="text-gradient-primary">Alberta</span></>}
          subtitle="We cover a wide range of communities throughout Alberta. Don't see your city? Call us — we likely serve you too!"
          light={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* City cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SERVICE_AREAS.map((area, i) => (
              <motion.div
                key={area.city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm
                  hover:border-primary-400 hover:bg-white/10 hover:shadow-glow-primary transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-2 mb-2">
                  <FaMapMarkerAlt className="text-primary-400 text-xs flex-shrink-0" />
                  <span className="font-display font-bold text-sm text-white group-hover:text-primary-300 transition-colors">
                    {area.city}
                  </span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Map + info */}
          <div className="space-y-6">
            {/* Google Maps embed */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-glass border border-white/15"
            >
              <iframe
                src={COMPANY.googleMapsEmbed}
                width="100%"
                height="300"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Triple Task Movers location on Google Maps"
                aria-label="Google Maps showing Triple Task Movers location in Blackfalds, Alberta"
              />
            </motion.div>

            {/* Coverage highlights */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
            >
              <h3 className="font-display font-bold text-white text-lg mb-4">Coverage Highlights</h3>
              <ul className="space-y-2">
                {[
                  'Central Alberta coverage: Red Deer, Lacombe, Ponoka',
                  'Mountain and foothills areas on request',
                  'Same-day service in Blackfalds & Red Deer',
                  'Long-distance moves across Alberta',
                  'No travel fees within 50km of Blackfalds',
                ].map((text) => (
                  <li key={text} className="flex items-start gap-2.5 text-sm text-gray-200">
                    <FaCheckCircle className="text-primary-400 mt-0.5 flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
              <a
                href={`tel:+13654400188`}
                className="mt-5 btn-primary !text-sm !py-3 !px-6 inline-flex"
                aria-label="Call to check if we serve your area"
              >
                Check Your Area
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
