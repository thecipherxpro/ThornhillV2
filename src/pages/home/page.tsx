import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurServicesCards from './components/OurServicesCards';
import KitCTA from './components/KitCTA';
import ZonnicCTA from './components/ZonnicCTA';
import Care365CTA from './components/Care365CTA';
import Hours from './components/Hours';
import Footer from './components/Footer';
import { useSEO } from '../../utils/seo';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://thornhilltreatment.com';

  useSEO({
    title: 'Thornhill Drug-Mart  | Pharmacy Services Ontario',
    description: 'Thornhill Drug-Mart in Thornhill, Ontario. We provide life-saving overdose prevention resources, pharmacy services, and addiction support through the Ontario Naloxone Program.',
    keywords: 'free naloxone kits Thornhill, pharmacy services Ontario, overdose prevention, addiction services, Thornhill Drug-Mart',
    canonical: siteUrl,
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": "Thornhill Drug-Mart",
      "description": "Professional pharmacy providing life-saving overdose prevention resources, pharmacy services, and addiction support through the Ontario Naloxone Program in Thornhill, Ontario",
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
        "name": "Pharmacy and Addiction Treatment Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Free Naloxone Kits",
              "description": "Life-saving naloxone kits available through the Ontario Naloxone Program for overdose prevention"
            }
          },
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
    }
  });

  return (
    <div className="min-h-screen">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <OurServicesCards />
      <KitCTA />
      <ZonnicCTA />
      <Care365CTA />
      <Hours />
      <Footer />
    </div>
  );
}
