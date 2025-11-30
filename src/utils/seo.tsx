import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: Record<string, unknown>;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = 'https://static.readdy.ai/image/621fe86c950ded9745dd2c19cd7c5595/c0b5a15a2b815315bfd2ccbd2c453721.png',
  schema
}: SEOProps) => {
  const location = useLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://thornhilldrugmart.com';

  useEffect(() => {
    // Set title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Set basic meta tags
    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Set canonical URL
    const canonicalUrl = canonical || `${siteUrl}${location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Set Open Graph tags
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:site_name', 'Thornhill Drug-Mart', true);
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:image:secure_url', ogImage, true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:image:alt', `${title} - Thornhill Drug-Mart`, true);
    setMetaTag('og:locale', 'en_CA', true);

    // Set Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:url', canonicalUrl);
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);
    setMetaTag('twitter:image:alt', `${title} - Thornhill Drug-Mart`);

    // Set last modified date
    const lastModified = new Date().toISOString();
    setMetaTag('last-modified', lastModified);

    // Add Schema.org JSON-LD
    if (schema) {
      const schemaId = 'seo-schema-jsonld';
      let scriptTag = document.getElementById(schemaId) as HTMLScriptElement;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = schemaId;
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    }

    // Cleanup function
    return () => {
      // Remove schema script when component unmounts
      const schemaScript = document.getElementById('seo-schema-jsonld');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, keywords, canonical, ogType, ogImage, schema, location.pathname, siteUrl]);
};

// Schema.org generators
export const generateSchema = {
  pharmacy: () => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://thornhilldrugmart.com';
    return {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": "Thornhill Drug-Mart",
      "description": "Professional addiction treatment pharmacy providing methadone, suboxone, and smoking cessation services in Thornhill, Ontario",
      "url": siteUrl,
      "logo": "https://static.readdy.ai/image/621fe86c950ded9745dd2c19cd7c5595/c0b5a15a2b815315bfd2ccbd2c453721.png",
      "image": "https://static.readdy.ai/image/621fe86c950ded9745dd2c19cd7c5595/c0b5a15a2b815315bfd2ccbd2c453721.png",
      "telephone": "+1-905-709-9985",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8108 Yonge St Unit 3-4",
        "addressLocality": "Thornhill",
        "addressRegion": "ON",
        "postalCode": "L4J 1W4",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.8184",
        "longitude": "-79.4278"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "16:00"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Thornhill"
        },
        {
          "@type": "City",
          "name": "North York"
        },
        {
          "@type": "City",
          "name": "Richmond Hill"
        },
        {
          "@type": "City",
          "name": "Vaughan"
        },
        {
          "@type": "City",
          "name": "Toronto"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Addiction Treatment Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Methadone Treatment",
              "description": "Professional methadone maintenance treatment for opioid addiction recovery"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Suboxone Treatment",
              "description": "Comprehensive suboxone therapy for addiction treatment and recovery support"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Smoking Cessation",
              "description": "Expert guidance and products to help quit smoking including Zonnic pouches"
            }
          }
        ]
      }
    };
  }
};
