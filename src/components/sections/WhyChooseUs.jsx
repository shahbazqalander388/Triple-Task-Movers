import { motion } from 'framer-motion';
import {
  FaShieldAlt, FaClock, FaUsers, FaDollarSign, FaStar, FaLeaf
} from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { WHY_CHOOSE } from '../../constants/data';

const iconMap = { FaShieldAlt, FaClock, FaUsers, FaDollarSign, FaStar, FaLeaf };

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="section-padding relative overflow-hidden"
      aria-labelledby="why-heading"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0d2a1a 50%, #0a1628 100%)',
      }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/15 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/10 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Why Choose Us"
          title={<>The Triple Task <span className="text-gradient-secondary">Difference</span></>}
          subtitle="We don't just move your belongings — we deliver a premium experience backed by expertise, integrity, and genuine care."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = iconMap[item.icon] || FaStar;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group p-7 rounded-2xl bg-white/5 backdrop-blur-md
                  border border-white/10 hover:border-primary-400/50
                  hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mb-4
                  group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-primary-400 text-lg group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-primary-500/20 to-secondary-500/10
            border border-white/10 text-center"
        >
          <p className="text-white text-lg font-semibold">
            🏆 Rated Alberta's Most Reliable Moving Company
          </p>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-secondary-400 text-lg" />
            ))}
            <span className="text-gray-300 text-sm ml-2">5.0 based on 500+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
