import { Helmet } from 'react-helmet-async';

export default function SEOHead({
  title = 'Triple Task Movers | Professional Moving Company in Alberta, Canada',
  description = 'Triple Task Movers offers premium residential & commercial moving, packing, loading, cleaning, and junk removal services across Alberta, Canada. Available 24/7.',
  keywords = 'moving company Alberta, Triple Task Movers, residential moving, commercial moving',
  canonical = 'https://tripletaskmovers.ca/',
  ogImage = 'https://tripletaskmovers.ca/og-image.jpg',
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
