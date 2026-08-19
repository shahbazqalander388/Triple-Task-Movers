import { Link } from 'react-router-dom';
import { useAOS } from '../hooks/useAOS';
import PageSeo from '../components/common/PageSeo';
import Contact from '../components/sections/Contact';
import ServiceAreas from '../components/sections/ServiceAreas';
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
                Contact
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

const contactStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://tripletaskmovers.business/contact#page',
    'url': 'https://tripletaskmovers.business/contact',
    'name': 'Contact Triple Task Movers',
    'description': 'Get in touch with Triple Task Movers for free moving quotes in Alberta.',
    'mainEntity': {
      '@type': 'MovingCompany',
      'name': 'Triple Task Movers',
      'telephone': '+13654400188',
      'email': 'info.brotherscab@gmail.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '4500 Blackfalds Crossing Way',
        'addressLocality': 'Blackfalds',
        'addressRegion': 'AB',
        'postalCode': 'T0C 0J0',
        'addressCountry': 'CA',
      },
    },
  },
];

export default function ContactPage() {
  useAOS();

  return (
    <>
      <PageSeo
        title="Contact Triple Task Movers | 24/7 Moving Quotes in Alberta"
        description="Contact Triple Task Movers for a fast, free moving quote in Alberta. Call +1 (365) 440-0188 or chat on WhatsApp 24/7. We serve Red Deer, Calgary, Edmonton & beyond."
        keywords="contact Triple Task Movers, free moving quote Alberta, moving company phone number, book movers Blackfalds, Red Deer movers quote"
        canonical="https://tripletaskmovers.business/contact"
        ogImage="https://tripletaskmovers.business/icon-512.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
        structuredData={contactStructuredData}
      />
      <PageHero
        title="Contact Us"
        subtitle="Get your free, no-obligation quote today. We're available 24/7 across Alberta."
      />
      <Contact />
      <ServiceAreas />
    </>
  );
}
