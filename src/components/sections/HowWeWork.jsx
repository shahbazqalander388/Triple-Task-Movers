import { motion } from 'framer-motion';
import { FaPhoneAlt, FaCalendarCheck, FaBoxOpen, FaCheckCircle } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { HOW_WE_WORK } from '../../constants/data';

const iconMap = { FaPhoneAlt, FaCalendarCheck, FaBoxOpen, FaCheckCircle };

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="section-padding relative overflow-hidden bg-gray-950 text-white"
      aria-labelledby="process-heading"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0d2a1a 100%)',
      }}
    >
      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Our Process"
          title={<>How We <span className="text-gradient-primary">Work</span></>}
          subtitle="A seamless four-step process designed to make your move as easy and stress-free as possible."
          light={true}
        />

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5
            bg-gradient-to-r from-primary-500/30 via-primary-400 to-primary-500/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {HOW_WE_WORK.map((step, i) => {
              const Icon = iconMap[step.icon] || FaCheckCircle;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-700
                      flex flex-col items-center justify-center shadow-glow-primary z-10 relative">
                      <Icon className="text-white text-2xl" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary-500
                      text-white text-xs font-black flex items-center justify-center shadow-md z-20">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6 text-lg">Ready to start your move?</p>
          <a
            href="tel:+13654400188"
            className="btn-primary text-base"
            aria-label="Call to start your moving process"
          >
            <FaPhoneAlt className="text-sm" />
            Book Your Move Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
