import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { COMPANY } from '../../constants/data';

function FAB({ href, icon, tooltip, className, ariaLabel, external = true }) {
  const [showTip, setShowTip] = useState(false);

  return (
    <div className="relative flex items-center">
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-16 bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
          >
            {tooltip}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={href}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-white text-2xl ${className}`}
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
        onFocus={() => setShowTip(true)}
        onBlur={() => setShowTip(false)}
        whileTap={{ scale: 0.9 }}
      >
        {icon}
      </motion.a>
    </div>
  );
}

export default function FloatingButtons() {
  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-4"
      role="complementary"
      aria-label="Quick contact buttons"
    >
      {/* Call Button */}
      <FAB
        href={`tel:${COMPANY.phoneRaw}`}
        icon={<FaPhone />}
        tooltip="Call Us Now"
        ariaLabel="Call Triple Task Movers"
        external={false}
        className="fab-call bg-gradient-to-br from-primary-500 to-primary-700 shadow-glow-primary"
      />

      {/* WhatsApp Button */}
      <FAB
        href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%20Triple%20Task%20Movers%2C%20I%27d%20like%20to%20get%20a%20free%20quote!`}
        icon={<FaWhatsapp />}
        tooltip="Chat on WhatsApp"
        ariaLabel="Chat with Triple Task Movers on WhatsApp"
        className="fab-whatsapp bg-[#25D366] shadow-lg"
      />
    </div>
  );
}
