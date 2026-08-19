import { Helmet } from 'react-helmet-async';

export default function SEOHead({
  title = 'Triple Task Movers | Moving, Cleaning & Junk Removal',
  description = 'Triple Task Movers provides professional moving, cleaning, and junk removal services in Red Deer, Alberta and nearby areas.',
  keywords = 'moving company Alberta, Triple Task Movers, residential moving, commercial moving, cleaning services, junk removal',
  canonical = 'https://tripletaskmovers.business/',
  ogImage = 'https://tripletaskmovers.business/icon-512.png',
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
