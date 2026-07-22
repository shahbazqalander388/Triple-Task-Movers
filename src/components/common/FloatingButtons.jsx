import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { COMPANY } from '../../constants/data';

function FAB({ href, onClick, icon, tooltip, className, ariaLabel, pulseColor, external = true }) {
  const [showTip, setShowTip] = useState(false);

  const buttonElement = (
    <motion.button
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`relative w-[57px] h-[57px] sm:w-[72px] sm:h-[72px] rounded-full flex items-center justify-center shadow-2xl text-white transition-all duration-300 cursor-pointer ${className}`}
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
      onFocus={() => setShowTip(true)}
      onBlur={() => setShowTip(false)}
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {pulseColor && (
        <span
          className={`absolute -inset-1 rounded-full ${pulseColor} opacity-30 animate-pulse pointer-events-none`}
        />
      )}
      <span className="relative z-10 flex items-center justify-center">{icon}</span>
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
            className="absolute right-20 bg-gray-900/95 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl whitespace-nowrap shadow-2xl border border-white/10 z-50 pointer-events-none"
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
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-7 z-[99] flex flex-col items-end gap-4 sm:gap-5 pointer-events-auto"
      role="complementary"
      aria-label="Quick contact buttons"
    >
      {/* Call Button */}
      <FAB
        href={`tel:${COMPANY.phoneRaw}`}
        icon={<FaPhone className="text-[25px] sm:text-[33px]" />}
        tooltip="Call Us Now"
        ariaLabel="Call Triple Task Movers"
        external={false}
        pulseColor="bg-primary-500"
        className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 shadow-glow-primary hover:shadow-glow-primary/90 border-2 border-primary-400/40"
      />

      {/* WhatsApp Button */}
      <FAB
        href={`https://wa.me/${cleanWhatsapp}?text=Hi%20Triple%20Task%20Movers%2C%20I%27d%20like%20to%20get%20a%20free%20quote!`}
        icon={<FaWhatsapp className="text-[25px] sm:text-[33px]" />}
        tooltip="Chat on WhatsApp"
        ariaLabel="Chat with Triple Task Movers on WhatsApp"
        pulseColor="bg-[#25D366]"
        className="bg-gradient-to-br from-[#25D366] to-[#1da851] hover:from-[#22c55e] hover:to-[#16a34a] shadow-xl shadow-[#25D366]/40 border-2 border-[#25D366]/40"
      />
    </div>
  );
}

