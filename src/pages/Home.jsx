import { useAOS } from '../hooks/useAOS';
import SEOHead from '../components/common/SEOHead';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import HowWeWork from '../components/sections/HowWeWork';
import Gallery from '../components/sections/Gallery';
import ServiceAreas from '../components/sections/ServiceAreas';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

export default function Home() {
  useAOS();

  return (
    <>
      <SEOHead
        title="Triple Task Movers | Professional Moving Company in Alberta, Canada"
        description="Triple Task Movers offers premium residential & commercial moving, packing, loading, cleaning, and junk removal across Alberta. Available 24/7. Call +1 (365) 440-0188."
        keywords="moving company Alberta, Triple Task Movers, Blackfalds movers, residential moving, commercial moving, packing services, junk removal, Red Deer movers"
        canonical="https://tripletaskmovers.ca/"
      />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <HowWeWork />
      <Gallery />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
