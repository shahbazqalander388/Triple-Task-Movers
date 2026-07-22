import { useAOS } from '../hooks/useAOS';
import SEOHead from '../components/common/SEOHead';
import Services from '../components/sections/Services';
import HowWeWork from '../components/sections/HowWeWork';
import FAQ from '../components/sections/FAQ';
import { motion } from 'framer-motion';

function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="relative pt-36 pb-16 overflow-hidden bg-gray-950"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2a1a 100%)' }}>
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(11,143,58,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2" />
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

export default function ServicesPage() {
  useAOS();
  return (
    <>
      <SEOHead
        title="Moving Services | Triple Task Movers Alberta"
        description="Full-service moving solutions including residential moving, commercial relocation, packing & unpacking, loading & unloading, cleaning services, and junk removal in Alberta."
        keywords="moving services Alberta, residential moving, commercial moving, packing services, junk removal, loading unloading"
        canonical="https://tripletaskmovers.ca/services"
      />
      <PageHero
        title="Our Moving Services"
        subtitle="Six comprehensive services to cover every aspect of your move — from packing to cleaning."
        breadcrumb="Home / Services"
      />
      <Services />
      <HowWeWork />
      <FAQ />
    </>
  );
}
