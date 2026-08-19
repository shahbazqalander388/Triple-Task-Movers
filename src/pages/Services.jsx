import { Link } from 'react-router-dom';
import { useAOS } from '../hooks/useAOS';
import PageSeo from '../components/common/PageSeo';
import Services from '../components/sections/Services';
import HowWeWork from '../components/sections/HowWeWork';
import FAQ from '../components/sections/FAQ';
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
                Services
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

const servicesStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Moving & Relocation Services',
    'provider': {
      '@type': 'MovingCompany',
      'name': 'Triple Task Movers',
      'url': 'https://tripletaskmovers.business/',
      'telephone': '+13654400188',
    },
    'areaServed': {
      '@type': 'State',
      'name': 'Alberta',
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Moving and Cleaning Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Residential Moving',
            'description': 'Safe, efficient moves for apartments, condos & houses of any size across Alberta.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Commercial Moving',
            'description': 'Minimal downtime office & business relocations handled professionally.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Packing & Unpacking',
            'description': 'Professional packing with premium materials to protect every item.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Loading & Unloading',
            'description': 'Heavy lifting made easy — loading and unloading trucks or storage containers.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Cleaning Services',
            'description': 'Move-out & move-in deep cleaning to leave your space spotless.',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Junk Removal',
            'description': 'Fast, eco-friendly removal of unwanted items, furniture, and debris.',
          },
        },
      ],
    },
  },
];

export default function ServicesPage() {
  useAOS();

  return (
    <>
      <PageSeo
        title="Moving Services | Residential, Commercial & Junk Removal | Triple Task Movers"
        description="Explore full-service moving solutions in Alberta: residential & office moving, packing, heavy lifting, move-out cleaning, and eco-friendly junk removal."
        keywords="moving services Alberta, residential moving, commercial moving, packing services, junk removal, loading unloading, cleaning services Alberta"
        canonical="https://tripletaskmovers.business/services"
        ogImage="https://tripletaskmovers.business/icon-512.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
        structuredData={servicesStructuredData}
      />
      <PageHero
        title="Our Moving Services"
        subtitle="Six comprehensive services to cover every aspect of your move — from packing to cleaning."
      />
      <Services />
      <HowWeWork />
      <FAQ />
    </>
  );
}
