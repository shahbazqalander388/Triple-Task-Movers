import { Link } from 'react-router-dom';
import { useAOS } from '../hooks/useAOS';
import PageSeo from '../components/common/PageSeo';
import Gallery from '../components/sections/Gallery';
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
                Gallery
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

export default function GalleryPage() {
  useAOS();

  return (
    <>
      <PageSeo
        title="Our Work & Moving Gallery | Triple Task Movers Alberta"
        description="View our portfolio of completed residential moves, commercial relocations, packing jobs, and junk removals across Red Deer, Blackfalds, and Central Alberta."
        keywords="moving gallery Alberta, Triple Task Movers photos, before after moving photos, moving company portfolio"
        canonical="https://tripletaskmovers.business/gallery"
        ogImage="https://tripletaskmovers.business/icon-512.png"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ]}
      />
      <PageHero
        title="Our Gallery"
        subtitle="A visual showcase of our professional moving work across Alberta."
      />
      <Gallery />
    </>
  );
}
