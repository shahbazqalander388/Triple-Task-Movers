import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { COMPANY } from '../../constants/data';

function FAB({ href, onClick, icon, tooltip, className, ariaLabel, external = true }) {
  const [showTip, setShowTip] = useState(false);

  const buttonElement = (
    <motion.button
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg text-white text-xl sm:text-2xl transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
      onFocus={() => setShowTip(true)}
      onBlur={() => setShowTip(false)}
      whileHover={{ scale: 1.1, translateY: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.button>
  );

  return (
    <div className="relative flex items-center">
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-16 bg-gray-900/95 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-white/10 z-50 pointer-events-none"
          >
            {tooltip}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900/95" />
          </motion.div>
        )}
      </AnimatePresence>

      {href ? (
        <a
          href={href}
          target={external ? '_blank' : '_self'}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={ariaLabel}
          className="inline-block"
        >
          {buttonElement}
        </a>
      ) : (
        buttonElement
      )}
    </div>
  );
}

export default function FloatingButtons() {
  const cleanWhatsapp = COMPANY.whatsapp.replace(/\D/g, '');

  return (
    <div
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3.5"
      role="complementary"
      aria-label="Quick contact buttons"
    >
      {/* Call Button */}
      <FAB
        href={`tel:${COMPANY.phoneRaw}`}
        icon={<FaPhone className="text-lg sm:text-xl" />}
        tooltip="Call Us Now"
        ariaLabel="Call Triple Task Movers"
        external={false}
        className="bg-gradient-to-br from-primary-500 to-primary-700 shadow-glow-primary hover:shadow-glow-primary/80"
      />

      {/* WhatsApp Button */}
      <FAB
        href={`https://wa.me/${cleanWhatsapp}?text=Hi%20Triple%20Task%20Movers%2C%20I%27d%20like%20to%20get%20a%20free%20quote!`}
        icon={<FaWhatsapp className="text-2xl sm:text-3xl" />}
        tooltip="Chat on WhatsApp"
        ariaLabel="Chat with Triple Task Movers on WhatsApp"
        className="bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-[#25D366]/30"
      />
    </div>
  );
}

