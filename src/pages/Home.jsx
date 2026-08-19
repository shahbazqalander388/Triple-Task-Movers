import { useAOS } from '../hooks/useAOS';
import PageSeo from '../components/common/PageSeo';
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

const homeStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': ['MovingCompany', 'LocalBusiness'],
    '@id': 'https://tripletaskmovers.business/#business',
    'name': 'Triple Task Movers',
    'alternateName': 'Triple Task Moving Company',
    'description': 'Professional moving company offering residential moving, commercial moving, packing & unpacking, loading & unloading, cleaning services, and junk removal across Alberta, Canada.',
    'url': 'https://tripletaskmovers.business/',
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
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 52.3706,
      'longitude': -113.8094,
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'opens': '00:00',
      'closes': '23:59',
    },
    'sameAs': [
      'https://www.facebook.com/tripletaskmovers',
      'https://www.instagram.com/tripletaskmovers',
      'https://www.tiktok.com/@triple.task.mover',
      'https://www.linkedin.com/company/tripletaskmovers',
      'https://maps.app.goo.gl/eCjaCXaKeMN5Lg877',
    ],
    'priceRange': '$$',
    'currenciesAccepted': 'CAD',
    'paymentAccepted': 'Cash, Credit Card, E-Transfer',
    'areaServed': [
      { '@type': 'City', 'name': 'Blackfalds' },
      { '@type': 'City', 'name': 'Red Deer' },
      { '@type': 'City', 'name': 'Lacombe' },
      { '@type': 'City', 'name': 'Ponoka' },
      { '@type': 'City', 'name': 'Sylvan Lake' },
      { '@type': 'City', 'name': 'Innisfail' },
      { '@type': 'City', 'name': 'Olds' },
      { '@type': 'City', 'name': 'Didsbury' },
      { '@type': 'City', 'name': 'Airdrie' },
      { '@type': 'City', 'name': 'Calgary' },
      { '@type': 'City', 'name': 'Edmonton' },
      { '@type': 'City', 'name': 'Rimbey' },
      { '@type': 'State', 'name': 'Alberta' },
    ],
    'image': 'https://tripletaskmovers.business/icon-512.png',
    'logo': 'https://tripletaskmovers.business/logo.jpg',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://tripletaskmovers.business/#website',
    'url': 'https://tripletaskmovers.business/',
    'name': 'Triple Task Movers',
    'description': 'Professional Moving & Relocation Services in Alberta',
    'publisher': {
      '@id': 'https://tripletaskmovers.business/#business',
    },
  },
];

export default function Home() {
  useAOS();

  return (
    <>
      <PageSeo
        title="Triple Task Movers | Moving, Cleaning & Junk Removal"
        description="Triple Task Movers provides 24/7 residential & commercial moving, packing, cleaning, and junk removal services across Alberta. Get your free moving quote today!"
        keywords="moving company Alberta, Triple Task Movers, Blackfalds movers, Red Deer movers, residential moving, commercial moving, packing services, junk removal, moving company Canada"
        canonical="https://tripletaskmovers.business/"
        ogImage="https://tripletaskmovers.business/icon-512.png"
        structuredData={homeStructuredData}
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
