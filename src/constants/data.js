// Company Information
export const COMPANY = {
  name: 'Triple Task Movers',
  tagline: 'Alberta\'s Most Trusted Moving Company',
  phone: '+1 (365) 440-0188',
  phoneRaw: '+13654400188',
  whatsapp: '+13654400188',
  email: 'info.brotherscab@gmail.com',
  address: {
    street: '4500 Blackfalds Crossing Way',
    city: 'Blackfalds',
    province: 'AB',
    postalCode: 'T0C 0J0',
    country: 'Canada',
    full: '4500 Blackfalds Crossing Way, Blackfalds, AB T0C 0J0, Canada',
  },
  hours: 'Open 24 Hours / 7 Days a Week',
  instagram: 'https://www.instagram.com/tripletaskmovers',
  tiktok: 'https://www.tiktok.com/@triple.task.mover',
  googleMaps: 'https://maps.app.goo.gl/eCjaCXaKeMN5Lg877',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2408.91!2d-113.8094!3d52.3706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzE0LjIiTiAxMTPCsDQ4JzMzLjgiVw!5e0!3m2!1sen!2sca!4v1690000000000!5m2!1sen!2sca',
};

// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

// Services
export const SERVICES = [
  {
    id: 1,
    title: 'Residential Moving',
    slug: 'residential-moving',
    shortDesc: 'Safe, efficient moves for apartments, condos & houses of any size.',
    desc: 'Our residential moving service ensures your household belongings are packed, transported, and delivered with the utmost care. Whether moving across the street or across the province, we handle everything.',
    icon: 'FaHome',
    color: 'from-primary-500 to-primary-700',
    features: ['Full-service packing', 'Furniture disassembly & reassembly', 'Safe transport', 'Same-day moving available'],
  },
  {
    id: 2,
    title: 'Commercial Moving',
    slug: 'commercial-moving',
    shortDesc: 'Minimal downtime office & business relocations handled professionally.',
    desc: 'We specialize in office relocations, retail moves, and commercial transitions with minimal disruption to your business operations. Our team works efficiently around your schedule.',
    icon: 'FaBuilding',
    color: 'from-secondary-500 to-secondary-700',
    features: ['Weekend & after-hours moves', 'IT equipment handling', 'Modular furniture moving', 'Secure document transport'],
  },
  {
    id: 3,
    title: 'Packing & Unpacking',
    slug: 'packing-unpacking',
    shortDesc: 'Professional packing with premium materials to protect every item.',
    desc: 'Our expert packers use premium materials and proven techniques to ensure every item — from fragile china to heavy appliances — is perfectly packed and protected during transit.',
    icon: 'FaBoxOpen',
    color: 'from-blue-500 to-blue-700',
    features: ['Premium packing materials', 'Fragile item specialists', 'Labelled & organized boxes', 'Full unpacking service'],
  },
  {
    id: 4,
    title: 'Loading & Unloading',
    slug: 'loading-unloading',
    shortDesc: 'Heavy lifting made easy — we load and unload your truck or container.',
    desc: 'Need help loading a rental truck or unloading a POD? Our strong, experienced team handles all the heavy lifting so you don\'t have to worry about a thing.',
    icon: 'FaTruck',
    color: 'from-purple-500 to-purple-700',
    features: ['Rental truck loading', 'POD & container service', 'Heavy furniture handling', 'Appliance moving'],
  },
  {
    id: 5,
    title: 'Cleaning Services',
    slug: 'cleaning-services',
    shortDesc: 'Move-out & move-in deep cleaning to leave your space spotless.',
    desc: 'Our professional cleaning team provides thorough move-in and move-out cleaning services, ensuring your old home is spotless for the next occupants and your new home is fresh for you.',
    icon: 'FaBroom',
    color: 'from-teal-500 to-teal-700',
    features: ['Deep clean kitchens & baths', 'Carpet & floor cleaning', 'Window washing', 'Move-out inspection ready'],
  },
  {
    id: 6,
    title: 'Junk Removal',
    slug: 'junk-removal',
    shortDesc: 'Fast, eco-friendly removal of unwanted items and debris.',
    desc: 'Clear out the clutter with our fast and eco-friendly junk removal service. We handle furniture, appliances, yard waste, and general debris — with responsible disposal and recycling practices.',
    icon: 'FaRecycle',
    color: 'from-orange-500 to-red-600',
    features: ['Same-day pickup available', 'Eco-friendly disposal', 'Furniture & appliance removal', 'Estate cleanouts'],
  },
];

// Stats
export const STATS = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Happy Clients' },
  { value: 1000, suffix: '+', label: 'Successful Moves' },
  { value: 24, suffix: '/7', label: 'Always Available' },
];

// Why Choose Us
export const WHY_CHOOSE = [
  {
    icon: 'FaShieldAlt',
    title: 'Fully Insured',
    desc: 'Your belongings are covered with comprehensive insurance for complete peace of mind.',
  },
  {
    icon: 'FaClock',
    title: 'On-Time Guarantee',
    desc: 'We respect your time. Our team always arrives on schedule, no excuses.',
  },
  {
    icon: 'FaUsers',
    title: 'Expert Team',
    desc: 'Trained, background-checked professionals who treat your items like their own.',
  },
  {
    icon: 'FaDollarSign',
    title: 'Transparent Pricing',
    desc: 'No hidden fees. Get an upfront quote with no surprise charges on moving day.',
  },
  {
    icon: 'FaStar',
    title: '5-Star Rated',
    desc: 'Hundreds of happy customers across Alberta consistently rate us 5 stars.',
  },
  {
    icon: 'FaLeaf',
    title: 'Eco-Friendly',
    desc: 'We use sustainable packing materials and responsible disposal methods.',
  },
];

// How We Work Steps
export const HOW_WE_WORK = [
  {
    step: '01',
    title: 'Get a Free Quote',
    desc: 'Contact us via phone, WhatsApp, or our online form. We\'ll assess your needs and provide a transparent, no-obligation quote within minutes.',
    icon: 'FaPhoneAlt',
  },
  {
    step: '02',
    title: 'Schedule Your Move',
    desc: 'Pick a date and time that works best for you. We\'re available 24/7 including weekends and holidays for your convenience.',
    icon: 'FaCalendarCheck',
  },
  {
    step: '03',
    title: 'We Pack & Load',
    desc: 'Our professional team arrives on time, carefully packs your belongings, and loads everything securely onto our truck.',
    icon: 'FaBoxOpen',
  },
  {
    step: '04',
    title: 'Safe Delivery',
    desc: 'We transport your items safely to your new location and unload, unpack, and set everything up exactly where you want it.',
    icon: 'FaCheckCircle',
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    location: 'Red Deer, AB',
    rating: 5,
    text: 'Triple Task Movers made our move completely stress-free! The team was punctual, professional, and handled all our furniture with incredible care. I couldn\'t be happier with the service.',
    avatar: null,
  },
  {
    id: 2,
    name: 'James Kowalski',
    location: 'Lacombe, AB',
    rating: 5,
    text: 'Hired them for our office relocation and they finished everything in record time. Zero downtime for our business. Highly professional team — will use them again!',
    avatar: null,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    location: 'Sylvan Lake, AB',
    rating: 5,
    text: 'Absolutely amazing service! They packed our entire 4-bedroom house in just a few hours. Everything arrived perfectly, not a single item damaged. 100% recommend!',
    avatar: null,
  },
  {
    id: 4,
    name: 'Michael Thompson',
    location: 'Calgary, AB',
    rating: 5,
    text: 'Best moving company in Alberta, hands down. Their junk removal service cleared out my garage in no time. Fast, affordable, and super friendly. Will definitely call again.',
    avatar: null,
  },
  {
    id: 5,
    name: 'Jennifer Larson',
    location: 'Innisfail, AB',
    rating: 5,
    text: 'I was nervous about moving long-distance but Triple Task Movers put me at ease immediately. They were transparent about pricing and delivered everything on time. Fantastic!',
    avatar: null,
  },
];

// FAQ
export const FAQS = [
  {
    q: 'What areas in Alberta do you serve?',
    a: 'We serve Blackfalds, Red Deer, Lacombe, Ponoka, Sylvan Lake, Innisfail, Olds, Didsbury, Airdrie, Calgary, Edmonton, and all surrounding communities in Alberta.',
  },
  {
    q: 'Are you available on weekends and holidays?',
    a: 'Absolutely! Triple Task Movers is open 24 hours a day, 7 days a week — including weekends and all holidays. We work around your schedule.',
  },
  {
    q: 'Do you provide free moving quotes?',
    a: 'Yes, we provide free, no-obligation quotes. Simply contact us via phone, WhatsApp, or our online contact form and we\'ll assess your needs and provide a transparent price.',
  },
  {
    q: 'Is my furniture insured during the move?',
    a: 'Yes. All items are covered with comprehensive moving insurance throughout the entire move. Your peace of mind is our priority.',
  },
  {
    q: 'Do you supply packing materials?',
    a: 'Yes! We bring all necessary packing materials including boxes, bubble wrap, moving blankets, tape, and specialty packaging for fragile items.',
  },
  {
    q: 'Can you help with furniture disassembly and reassembly?',
    a: 'Absolutely. Our team is experienced in disassembling and reassembling all types of furniture, including IKEA, modular, and custom pieces.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'We recommend booking at least 1-2 weeks in advance for best availability, especially for weekend moves. However, we also accommodate last-minute and same-day moves when possible.',
  },
  {
    q: 'Do you offer commercial/office moving services?',
    a: 'Yes, we specialize in commercial relocations. We can schedule moves after hours or on weekends to minimize disruption to your business operations.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, credit/debit cards, and e-transfer for your convenience.',
  },
  {
    q: 'Do you offer junk removal without a full move?',
    a: 'Yes! Our junk removal service is standalone. Whether it\'s old furniture, appliances, renovation debris, or general clutter — we\'ll clear it out quickly and responsibly.',
  },
];

// Service Areas
export const SERVICE_AREAS = [
  { city: 'Blackfalds', desc: 'Our home base — fastest response times.' },
  { city: 'Red Deer', desc: 'Central Alberta\'s largest city, fully covered.' },
  { city: 'Lacombe', desc: 'Residential & commercial moves served daily.' },
  { city: 'Ponoka', desc: 'Full moving services available.' },
  { city: 'Sylvan Lake', desc: 'Cottage & seasonal property specialists.' },
  { city: 'Innisfail', desc: 'Reliable service for the Innisfail area.' },
  { city: 'Olds', desc: 'Moving solutions for the Olds community.' },
  { city: 'Didsbury', desc: 'Northern corridor fully covered.' },
  { city: 'Airdrie', desc: 'Fast service to the Calgary metro area.' },
  { city: 'Calgary', desc: 'Full metropolitan Calgary coverage.' },
  { city: 'Edmonton', desc: 'Provincial capital moves handled with care.' },
  { city: 'Rimbey', desc: 'West-central Alberta service available.' },
];

// Gallery placeholder items
export const GALLERY_ITEMS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Move #${i + 1}`,
  category: ['residential', 'commercial', 'packing', 'junk-removal'][i % 4],
  alt: `Triple Task Movers - Professional moving service photo ${i + 1}`,
}));
