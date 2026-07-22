import { motion } from 'framer-motion';
import { FaCheckCircle, FaTruck, FaLeaf, FaShieldAlt } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import ImagePlaceholder from '../ui/ImagePlaceholder';

const highlights = [
  { icon: FaTruck, text: 'Over 1,000 successful moves across Alberta' },
  { icon: FaShieldAlt, text: 'Fully insured for complete peace of mind' },
  { icon: FaLeaf, text: 'Eco-friendly packing & disposal practices' },
  { icon: FaCheckCircle, text: 'Transparent pricing with no hidden fees' },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-gray-950 text-white"
      aria-labelledby="about-heading"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0d2a1a 50%, #0a1628 100%)',
      }}
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image grid */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ImagePlaceholder
                  alt="Triple Task Movers team loading furniture"
                  aspectRatio="aspect-[3/4]"
                  index={0}
                  className="rounded-3xl shadow-glass border border-white/10"
                />
                <ImagePlaceholder
                  alt="Packing and unpacking services"
                  aspectRatio="aspect-square"
                  index={1}
                  className="rounded-2xl shadow-glass border border-white/10"
                />
              </div>
              <div className="space-y-4 mt-8">
                <ImagePlaceholder
                  alt="Commercial office relocation Alberta"
                  aspectRatio="aspect-square"
                  index={2}
                  className="rounded-2xl shadow-glass border border-white/10"
                />
                <ImagePlaceholder
                  alt="Junk removal and cleaning services"
                  aspectRatio="aspect-[3/4]"
                  index={3}
                  className="rounded-3xl shadow-glass border border-white/10"
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary-500 to-primary-700
                text-white p-5 rounded-2xl shadow-glow-primary border border-white/20"
            >
              <div className="text-3xl font-display font-black">5+</div>
              <div className="text-xs font-semibold text-green-200 uppercase tracking-wide">Years Trusted</div>
            </motion.div>

            {/* Background decoration */}
            <div className="absolute -left-6 -top-6 w-40 h-40 bg-primary-500/10 rounded-3xl -z-10 blur-xl" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              eyebrow="About Our Company"
              title={<>Alberta's Premier <span className="text-gradient-primary">Moving Experts</span></>}
              center={false}
              light={true}
            />

            <div className="space-y-4 text-gray-300 leading-relaxed mb-8 text-base">
              <p>
                Founded with a passion for exceptional service, <strong className="text-white">Triple Task Movers</strong> has
                been helping Alberta families and businesses relocate with confidence and ease. Based in
                Blackfalds, we bring local expertise and professional standards to every single move.
              </p>
              <p>
                Our dedicated team of trained movers understands that moving is more than just transporting
                boxes — it's about transitions, new beginnings, and trust. That's why we treat every
                client's belongings as if they were our own.
              </p>
              <p>
                From small apartment moves to large commercial relocations, our six-service offering
                covers every aspect of your move. With 24/7 availability and transparent pricing,
                we're always here when you need us.
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary-400 text-sm" />
                  </div>
                  <span className="text-gray-200 font-medium">{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${'+13654400188'}`}
                className="btn-primary"
                aria-label="Call Triple Task Movers for a free quote"
              >
                Get Free Quote
              </a>
              <a
                href="https://maps.app.goo.gl/eCjaCXaKeMN5Lg877"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="Find us on Google Maps"
              >
                Find Us on Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
