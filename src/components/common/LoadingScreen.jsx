import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaTruck } from 'react-icons/fa';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return p + Math.random() * 15;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950
            flex flex-col items-center justify-center gap-8"
          role="status"
          aria-label="Loading Triple Task Movers"
        >
          {/* Floating shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="floating-shape w-64 h-64 bg-primary-500 animate-float"
                style={{
                  left: `${[10, 70, 30, 80, 5, 60][i]}%`,
                  top: `${[20, 10, 70, 60, 50, 80][i]}%`,
                  animationDelay: `${i * 0.8}s`,
                }}
              />
            ))}
          </div>

          {/* Logo area */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            {/* Truck icon with animation */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-700
                flex items-center justify-center shadow-glow-primary">
                <motion.div
                  animate={{ x: [-4, 4] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                >
                  <FaTruck className="text-white text-4xl" />
                </motion.div>
              </div>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full border-4 border-primary-400 opacity-40
                animate-ping" />
            </div>

            {/* Company name */}
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-white tracking-tight">
                Triple Task <span className="text-gradient-primary">Movers</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">Alberta's Most Trusted Movers</p>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="relative z-10 w-72">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-gray-500 text-xs text-center mt-3">Loading your experience...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
