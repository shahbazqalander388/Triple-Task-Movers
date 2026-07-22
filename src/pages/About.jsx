import { useAOS } from '../hooks/useAOS';
import SEOHead from '../components/common/SEOHead';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
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

export default function AboutPage() {
  useAOS();
  return (
    <>
      <SEOHead
        title="About Triple Task Movers | Alberta's Trusted Moving Company"
        description="Learn about Triple Task Movers — Alberta's premier professional moving company based in Blackfalds. Our story, mission, and values."
        keywords="about Triple Task Movers, Alberta moving company history, professional movers Blackfalds"
        canonical="https://tripletaskmovers.ca/about"
      />
      <PageHero
        title="About Triple Task Movers"
        subtitle="Alberta's most trusted moving team — built on integrity, expertise, and genuine care for our clients."
        breadcrumb="Home / About"
      />
      <About />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
