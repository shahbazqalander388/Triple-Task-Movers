import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTruck, FaHome, FaArrowLeft } from 'react-icons/fa';
import SEOHead from '../components/common/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404 – Page Not Found | Triple Task Movers"
        description="Oops! The page you're looking for doesn't exist. Return to Triple Task Movers homepage."
        canonical="https://tripletaskmovers.ca/404"
      />
      <div
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2a1a 100%)' }}
      >
        {/* Floating shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: [200, 150, 100, 250, 120][i],
              height: [200, 150, 100, 250, 120][i],
              background: i % 2 === 0 ? '#0B8F3A' : '#FF7A00',
              left: `${[10, 70, 50, 80, 5][i]}%`,
              top: `${[20, 10, 70, 60, 80][i]}%`,
              filter: 'blur(60px)',
            }}
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}

        <div className="container-custom relative z-10 text-center py-20">
          {/* 404 number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className="mb-8"
          >
            <span
              className="font-display font-black text-white block leading-none select-none"
              style={{ fontSize: 'clamp(6rem, 20vw, 14rem)', opacity: 0.07 }}
            >
              404
            </span>
          </motion.div>

          {/* Truck illustration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="-mt-32 mb-8"
          >
            <div className="inline-flex items-center justify-center w-28 h-28 rounded-full
              bg-gradient-to-br from-primary-500 to-primary-700 shadow-glow-primary">
              <motion.div
                animate={{ x: [-6, 6] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              >
                <FaTruck className="text-white text-5xl" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="font-display text-3xl lg:text-5xl font-black text-white mb-4">
              Oops! Truck took a wrong turn.
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
              The page you're looking for seems to have moved. Let's get you back on track!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="btn-primary text-base"
              >
                <FaHome className="text-sm" />
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="btn-outline text-base"
              >
                <FaArrowLeft className="text-sm" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
