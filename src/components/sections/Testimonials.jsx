import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { TESTIMONIALS } from '../../constants/data';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < rating ? 'text-secondary-400' : 'text-gray-600'} />
      ))}
    </div>
  );
}

function Avatar({ name }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2);
  const colors = [
    'from-primary-500 to-primary-700',
    'from-secondary-500 to-secondary-700',
    'from-blue-500 to-blue-700',
    'from-purple-500 to-purple-700',
    'from-teal-500 to-teal-700',
  ];
  const idx = name.charCodeAt(0) % colors.length;
  return (
    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${colors[idx]}
      flex items-center justify-center text-white font-bold text-lg shadow-glow-primary`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden bg-gray-950 text-white"
      aria-labelledby="testimonials-heading"
      style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #0a1628 50%, #0d2a1a 100%)',
      }}
    >
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Client Testimonials"
          title={<>What Our <span className="text-gradient-primary">Clients Say</span></>}
          subtitle="Real reviews from real customers who trusted Triple Task Movers with their most important moves."
          light={true}
        />

        {/* Testimonial cards — show 3 on desktop, 1 on mobile */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-7 shadow-glass border border-white/10
                hover:border-primary-400/50 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <FaQuoteLeft className="text-primary-400 text-3xl mb-4" aria-hidden="true" />
                <p className="text-gray-200 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <Avatar name={t.name} />
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                  <div className="mt-1">
                    <StarRating rating={t.rating} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-7 shadow-glass border border-white/10"
            >
              <FaQuoteLeft className="text-primary-400 text-3xl mb-4" aria-hidden="true" />
              <p className="text-gray-200 text-sm leading-relaxed mb-6 italic">"{TESTIMONIALS[current].text}"</p>
              <div className="flex items-center gap-4">
                <Avatar name={TESTIMONIALS[current].name} />
                <div>
                  <p className="font-bold text-white text-sm">{TESTIMONIALS[current].name}</p>
                  <p className="text-gray-400 text-xs">{TESTIMONIALS[current].location}</p>
                  <div className="mt-1">
                    <StarRating rating={TESTIMONIALS[current].rating} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 shadow-sm
                flex items-center justify-center text-white hover:bg-primary-500 transition-all"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-primary-500 w-6' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 shadow-sm
                flex items-center justify-center text-white hover:bg-primary-500 transition-all"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
