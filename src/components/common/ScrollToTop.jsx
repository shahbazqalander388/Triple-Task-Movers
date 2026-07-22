import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'backOut' }}
          onClick={scrollTop}
          aria-label="Scroll to top"
          className="fixed bottom-28 right-5 z-50 w-12 h-12 rounded-full
            bg-gradient-to-br from-primary-500 to-primary-700
            text-white shadow-glow-primary flex items-center justify-center
            hover:scale-110 hover:shadow-glow-primary transition-transform duration-200
            focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
        >
          <FaArrowUp className="text-sm" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
