import { Link } from 'react-router-dom';
import { useAOS } from '../hooks/useAOS';
import PageSeo from '../components/common/PageSeo';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import { motion } from 'framer-motion';

function PageHero({ title, subtitle }) {
  return (
    <section
      className="relative pt-36 pb-16 overflow-hidden bg-gray-950"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2a1a 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(11,143,58,0.8) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container-custom relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <nav aria-label="Breadcrumb" className="inline-block mb-3">
            <ol className="flex items-center justify-center gap-2 text-xs text-gray-400 uppercase tracking-widest">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-primary-400 font-semibold" aria-current="page">
                About
              </li>
            </ol>
          </nav>
          <h1 className="font-display text-4xl lg:text-6xl font-black text-white mb-4">{title}</h1>
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
      <PageSeo
        title="About Triple Task Movers | Premier Moving Company in Alberta"
        description="Learn about Triple Task Movers, Alberta's trusted moving company based in Blackfalds. Dedicated to safe, reliable, and stress-free residential & commercial moves."
        keywords="about Triple Task Movers, Alberta moving company history, professional movers Blackfalds, reliable movers Red Deer"
        canonical="https://tripletaskmovers.business/about"
        ogImage="https://tripletaskmovers.business/icon-512.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />
      <PageHero
        title="About Triple Task Movers"
        subtitle="Alberta's most trusted moving team — built on integrity, expertise, and genuine care for our clients."
      />
      <About />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
