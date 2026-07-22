import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHome, FaBuilding, FaBoxOpen, FaTruck, FaBroom, FaRecycle, FaArrowRight
} from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { SERVICES } from '../../constants/data';

const iconMap = { FaHome, FaBuilding, FaBoxOpen, FaTruck, FaBroom, FaRecycle };

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || FaTruck;
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-7 shadow-glass
        border border-white/10 hover:border-primary-400/50 hover:bg-white/10
        overflow-hidden transition-all duration-300 flex flex-col justify-between"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0
        group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />

      <div>
        {/* Icon */}
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color}
          flex items-center justify-center mb-5 shadow-glow-primary
          group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="text-white text-xl" />
        </div>

        <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-5">{service.shortDesc}</p>

        {/* Feature list */}
        <ul className="space-y-2 mb-6">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-gray-300">
              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <Link
        to={`/services#${service.slug}`}
        className="inline-flex items-center gap-2 text-sm font-bold text-primary-400
          hover:text-primary-300 hover:gap-3 transition-all duration-200"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More <FaArrowRight className="text-xs" />
      </Link>

      {/* Bottom border accent */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color}
        opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-gray-950 text-white scroll-mt-24"
      aria-labelledby="services-heading"
      style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #0a1628 50%, #0d2a1a 100%)',
      }}
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="What We Offer"
          title={<>Our Professional <span className="text-gradient-primary">Services</span></>}
          subtitle="From residential moves to junk removal, we cover every aspect of your relocation needs with precision and care."
          light={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <Link to="/services" className="btn-primary text-base">
            View All Services <FaArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
