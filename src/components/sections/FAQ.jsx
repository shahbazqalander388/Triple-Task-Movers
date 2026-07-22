import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { FAQS } from '../../constants/data';

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'border-primary-400 bg-white/10 shadow-glow-primary'
          : 'border-white/10 bg-white/5 hover:border-primary-400/50 hover:bg-white/10'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className={`font-display font-semibold text-base transition-colors duration-200 ${
          isOpen ? 'text-primary-300' : 'text-white'
        }`}>
          {faq.q}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen
            ? 'bg-primary-500 text-white rotate-0 shadow-glow-primary'
            : 'bg-white/10 text-gray-300 hover:bg-primary-500 hover:text-white'
        }`}>
          {isOpen ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section
      id="faq"
      className="section-padding relative overflow-hidden bg-gray-950 text-white"
      aria-labelledby="faq-heading"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0d2a1a 100%)',
      }}
    >
      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Frequently Asked Questions"
          title={<>Got <span className="text-gradient-primary">Questions?</span></>}
          subtitle="Find answers to the most common questions about our moving services and process."
          light={true}
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md
            border border-white/10 max-w-2xl mx-auto"
        >
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-300 text-sm mb-6">
            Our friendly team is available 24/7 to answer any questions you have about your move.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+13654400188" className="btn-primary !py-3 !px-6 !text-sm">
              📞 Call Us Now
            </a>
            <a
              href="https://wa.me/13654400188?text=Hi%2C%20I%20have%20a%20question%20about%20moving"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold
                bg-[#25D366] text-white hover:scale-105 transition-transform duration-200"
              aria-label="WhatsApp Triple Task Movers"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
