import { motion } from 'framer-motion';
import { FaPhone, FaArrowRight, FaTruck, FaStar, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { STATS, COMPANY } from '../../constants/data';
import { useCounter } from '../../hooks/useCounter';

function StatItem({ value, suffix, label }) {
  const { count, ref } = useCounter(value, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl lg:text-4xl font-black text-white">
        {count}{suffix}
      </div>
      <div className="text-green-200 text-xs font-medium mt-1 uppercase tracking-widest">{label}</div>
    </div>
  );
}

// Floating shape
const FloatingShape = ({ size, color, x, y, delay, duration }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none`}
    style={{ width: size, height: size, background: color, left: x, top: y }}
    animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden scroll-mt-24"
      aria-label="Hero - Triple Task Movers"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-[#0a1628] to-gray-950" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(11,143,58,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11,143,58,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating shapes */}
      <FloatingShape size={400} color="#0B8F3A" x="10%" y="10%" delay={0} duration={8} />
      <FloatingShape size={300} color="#FF7A00" x="75%" y="60%" delay={2} duration={10} />
      <FloatingShape size={250} color="#0B8F3A" x="60%" y="5%" delay={1} duration={7} />
      <FloatingShape size={200} color="#FF7A00" x="5%" y="60%" delay={3} duration={9} />

      {/* Gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-green-300
                  bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
                  <FaStar className="text-secondary-400 text-xs" />
                  Alberta's #1 Trusted Moving Company
                  <FaStar className="text-secondary-400 text-xs" />
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                variants={itemVariants}
                className="hero-title font-display font-black text-white leading-[1.05] mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
              >
                Moving Made{' '}
                <span className="relative inline-block">
                  <span className="text-gradient-mixed">Simple,</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
                {' '}Safe &{' '}
                <span className="text-gradient-mixed">Stress-Free</span>
              </motion.h1>

              {/* Sub heading */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl"
              >
                Professional residential & commercial moving, packing, loading, cleaning and junk
                removal services across Alberta. Available{' '}
                <span className="text-green-400 font-semibold">24 hours a day, 7 days a week</span>.
              </motion.p>

              {/* Trust badges */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
                {['Fully Insured', 'On-Time Guarantee', 'Free Quotes', '5-Star Rated'].map((badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-1.5 text-xs sm:text-sm text-green-200 bg-white/10
                      backdrop-blur-sm border border-white/15 px-3 py-1.5 rounded-full"
                  >
                    <FaCheckCircle className="text-green-400 text-xs" />
                    {badge}
                  </span>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="btn-primary text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Call Triple Task Movers"
                >
                  <FaPhone className="text-sm" />
                  Call Now
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="btn-outline text-base"
                    aria-label="Get a free moving quote"
                  >
                    Get Free Quote
                    <FaArrowRight className="text-sm" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating truck decoration — reduced by 25% and grid-aligned */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              <div className="w-44 h-44 xl:w-48 xl:h-48 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10
                flex items-center justify-center shadow-glass">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <FaTruck className="text-primary-400" style={{ fontSize: '4.3rem' }} />
                </motion.div>
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-[-8px] rounded-3xl border border-white/10 pointer-events-none" />
              <div className="absolute inset-[-16px] rounded-3xl border border-white/5 opacity-50 pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Stats Card — positioned safely below with full-width clarity */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl
            bg-white/5 backdrop-blur-md border border-white/10 mt-12 lg:mt-14 shadow-glass"
        >
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#0a1628"
          />
        </svg>
      </div>
    </section>
  );
}
