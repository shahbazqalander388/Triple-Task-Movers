import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://tripletaskmovers.business';
const DEFAULT_IMAGE = 'https://tripletaskmovers.business/logo.jpg';
const SITE_NAME = 'Triple Task Movers';

export default function PageSeo({
  title = 'Triple Task Movers | Moving, Cleaning & Junk Removal',
  description = 'Triple Task Movers provides 24/7 residential & commercial moving, packing, cleaning, and junk removal services across Alberta. Get your free quote today!',
  keywords = 'moving company Alberta, Triple Task Movers, Blackfalds movers, Red Deer movers, residential moving, commercial moving, packing services, junk removal, moving company Canada',
  canonical = SITE_URL,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noindex = false,
  structuredData = null,
  breadcrumbs = null,
}) {
  // Build breadcrumb JSON-LD if breadcrumbs array is passed
  let breadcrumbSchema = null;
  if (breadcrumbs && Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
    breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': crumb.name,
        'item': crumb.path.startsWith('http') ? crumb.path : `${SITE_URL}${crumb.path}`,
      })),
    };
  }

  // Combine schemas
  const schemasToRender = [];
  if (structuredData) {
    if (Array.isArray(structuredData)) {
      schemasToRender.push(...structuredData);
    } else {
      schemasToRender.push(structuredData);
    }
  }
  if (breadcrumbSchema) {
    schemasToRender.push(breadcrumbSchema);
  }

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />

      {/* Canonical Link */}
      {!noindex && canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Tags */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {!noindex && canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_CA" />

      {/* Twitter / X Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* Structured Data / JSON-LD */}
      {schemasToRender.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
