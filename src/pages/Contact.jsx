import { useAOS } from '../hooks/useAOS';
import SEOHead from '../components/common/SEOHead';
import Contact from '../components/sections/Contact';
import ServiceAreas from '../components/sections/ServiceAreas';
import { motion } from 'framer-motion';

function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="relative pt-36 pb-16 overflow-hidden bg-gray-950"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2a1a 100%)' }}>
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(11,143,58,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="container-custom relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-xs text-gray-400 uppercase tracking-widest">{breadcrumb}</span>
          <h1 className="font-display text-4xl lg:text-6xl font-black text-white mt-4 mb-4">{title}</h1>
          {subtitle && <p className="text-gray-300 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  useAOS();
  return (
    <>
      <SEOHead
        title="Contact Triple Task Movers | Get a Free Moving Quote"
        description="Get in touch with Triple Task Movers for a free moving quote. Call +1 (365) 440-0188, WhatsApp, email, or fill out our online form. Available 24/7 in Alberta."
        keywords="contact Triple Task Movers, free moving quote Alberta, moving company phone number, book movers Blackfalds"
        canonical="https://tripletaskmovers.ca/contact"
      />
      <PageHero
        title="Contact Us"
        subtitle="Get your free, no-obligation quote today. We're available 24/7 across Alberta."
        breadcrumb="Home / Contact"
      />
      <Contact />
      <ServiceAreas />
    </>
  );
}
