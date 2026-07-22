import { useAOS } from '../hooks/useAOS';
import SEOHead from '../components/common/SEOHead';
import Gallery from '../components/sections/Gallery';
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

export default function GalleryPage() {
  useAOS();
  return (
    <>
      <SEOHead
        title="Gallery | Triple Task Movers — Our Work Across Alberta"
        description="Browse photos of Triple Task Movers' completed residential moves, commercial relocations, packing projects, and junk removals across Alberta."
        keywords="moving gallery Alberta, Triple Task Movers photos, before after moving photos"
        canonical="https://tripletaskmovers.ca/gallery"
      />
      <PageHero
        title="Our Gallery"
        subtitle="A visual showcase of our professional moving work across Alberta."
        breadcrumb="Home / Gallery"
      />
      <Gallery />
    </>
  );
}
