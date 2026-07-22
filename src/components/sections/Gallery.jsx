import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import SectionTitle from '../ui/SectionTitle';
import { GALLERY_ITEMS } from '../../constants/data';

const FILTERS = ['All', 'residential', 'commercial', 'packing', 'junk-removal'];
const FILTER_LABELS = {
  All: 'All Work',
  residential: 'Residential',
  commercial: 'Commercial',
  packing: 'Packing',
  'junk-removal': 'Junk Removal',
};

export default function Gallery() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.category === active);

  return (
    <section
      id="gallery"
      className="section-padding relative overflow-hidden bg-gray-950 text-white scroll-mt-24"
      aria-labelledby="gallery-heading"
      style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #0a1628 50%, #0d2a1a 100%)',
      }}
    >
      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Our Work"
          title={<>See Us in <span className="text-gradient-primary">Action</span></>}
          subtitle="Browse our gallery of recent moves across Alberta. Real work, real results."
          light={true}
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" role="tablist" aria-label="Gallery filters">
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActive(f)}
              role="tab"
              aria-selected={active === f}
              aria-label={`Show ${FILTER_LABELS[f]}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                active === f
                  ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-glow-primary'
                  : 'bg-white/10 text-gray-300 border border-white/10 hover:border-primary-400 hover:text-white'
              }`}
            >
              {FILTER_LABELS[f]}
            </motion.button>
          ))}
        </div>

        {/* Gallery grid */}
        <motion.div
          layout
          className="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <ImagePlaceholder
                  alt={item.alt}
                  aspectRatio="aspect-[4/3]"
                  index={i}
                  className="w-full border border-white/10 shadow-glass"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm mb-4">
            💡 Images will be replaced with real photos of your completed moves.
          </p>
          <a
            href="https://www.instagram.com/tripletaskmovers"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Follow Triple Task Movers on Instagram for more photos"
          >
            📸 Follow Us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
