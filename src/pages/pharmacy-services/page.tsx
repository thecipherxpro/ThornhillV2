import { useState, useEffect } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import { useSEO, generateSchema } from '../../utils/seo';
import { useNavigate } from 'react-router-dom';

export default function PharmacyServices() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://thornhilltreatment.com';

  useSEO({
    title: 'Pharmacy Services Thornhill | Prescriptions, Compounding & Smoking Cessation',
    description: 'Comprehensive pharmacy services in Thornhill including prescription dispensing, medication reviews, compounding, smoking cessation with Zonnic pouches, and free delivery. Expert pharmaceutical care serving Thornhill, North York, Richmond Hill, and Vaughan. Call (905) 709-9985.',
    keywords: 'pharmacy services Thornhill, prescription dispensing, medication compounding, smoking cessation, Zonnic pouches, medication reviews, free delivery pharmacy',
    canonical: `${siteUrl}/pharmacy-services`,
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": "Thornhill Drug-Mart Pharmacy Services",
      "description": "Comprehensive pharmacy services including prescription dispensing, medication reviews, compounding, smoking cessation programs, and free delivery in Thornhill, Ontario",
      "url": `${siteUrl}/pharmacy-services`,
      "telephone": "+1-905-709-9985",
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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pharmacy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Prescription Dispensing",
              "description": "Fast and accurate prescription filling with expert pharmaceutical care"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Medication Reviews",
              "description": "Comprehensive medication reviews to optimize therapy and prevent interactions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Compounding Services",
              "description": "Custom medication compounding for specialized patient needs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Smoking Cessation",
              "description": "Professional smoking cessation support with Zonnic nicotine pouches"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Free Delivery",
              "description": "Convenient free prescription delivery service"
            }
          }
        ]
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "43.8184",
          "longitude": "-79.4278"
        },
        "geoRadius": "50000"
      }
    }
  });

  const heroSlides = [
    {
      title: 'Comprehensive Pharmacy Services',
      description: 'Professional pharmaceutical care and health solutions serving Thornhill communities',
      image: 'https://readdy.ai/api/search-image?query=modern%20bright%20pharmacy%20interior%20with%20organized%20medicine%20shelves%20professional%20prescription%20counter%20healthcare%20products%20display%20clean%20white%20and%20teal%20color%20scheme%20welcoming%20atmosphere%20natural%20lighting%20contemporary%20design&width=1920&height=600&seq=pharmacy-hero-1&orientation=landscape'
    },
    {
      title: 'Expert Health Consultations',
      description: 'Free one-on-one consultations with licensed pharmacists for your health needs',
      image: 'https://readdy.ai/api/search-image?query=friendly%20pharmacist%20consulting%20with%20patient%20in%20modern%20pharmacy%20setting%20professional%20healthcare%20advice%20warm%20teal%20and%20white%20colors%20comfortable%20consultation%20area%20personalized%20care%20medical%20expertise&width=1920&height=600&seq=pharmacy-hero-2&orientation=landscape'
    },
    {
      title: 'Fast Prescription Services',
      description: 'Same-day prescription filling with expert care and competitive pricing',
      image: 'https://readdy.ai/api/search-image?query=pharmacist%20filling%20prescription%20medication%20bottles%20organized%20pharmacy%20workspace%20efficient%20service%20clean%20teal%20and%20white%20environment%20professional%20pharmaceutical%20care%20modern%20equipment&width=1920&height=600&seq=pharmacy-hero-3&orientation=landscape'
    }
  ];

  const coreServices = [
    {
      icon: 'ri-medicine-bottle-line',
      title: 'Prescription Services',
      description: 'Fast and accurate prescription filling with expert consultation. We work with all major insurance providers.',
      features: ['Same-day filling', 'Insurance billing', 'Refill reminders', 'Generic alternatives']
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Health Consultations',
      description: 'Free one-on-one consultations with our licensed pharmacists. Get expert advice on medications.',
      features: ['Medication reviews', 'Health screenings', 'Vaccination services', 'Blood pressure monitoring']
    },
    {
      icon: 'ri-capsule-line',
      title: 'Over-the-Counter Products',
      description: 'Wide selection of OTC medications, vitamins, supplements, and health products.',
      features: ['Pain relief', 'Cold & flu remedies', 'Vitamins & supplements', 'First aid supplies']
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Medication Management',
      description: 'Comprehensive medication management services to help you stay on track with prescriptions.',
      features: ['Blister packaging', 'Compliance monitoring', 'Drug interaction checks', 'Dosage optimization']
    }
  ];

  const specialtyServices = [
    {
      title: 'Compounding Services',
      description: 'Custom medication preparation tailored to your specific needs and specialized dosages.',
      image: 'https://readdy.ai/api/search-image?query=professional%20pharmacist%20preparing%20custom%20compound%20medication%20in%20modern%20clean%20laboratory%20with%20precise%20measuring%20equipment%20white%20and%20teal%20color%20scheme%20sterile%20medical%20environment%20focused%20pharmaceutical%20work&width=600&height=400&seq=compounding-service&orientation=landscape'
    },
    {
      title: 'Diabetes Care',
      description: 'Complete diabetes management support including glucose monitoring supplies and insulin.',
      image: 'https://readdy.ai/api/search-image?query=diabetes%20care%20products%20glucose%20meter%20testing%20supplies%20insulin%20medication%20organized%20display%20in%20modern%20pharmacy%20setting%20teal%20and%20white%20colors%20professional%20healthcare%20environment%20educational%20materials&width=600&height=400&seq=diabetes-care&orientation=landscape'
    },
    {
      title: 'Immunization Services',
      description: 'Walk-in vaccination services including flu shots and travel vaccines by certified pharmacists.',
      image: 'https://readdy.ai/api/search-image?query=professional%20pharmacist%20administering%20vaccine%20injection%20in%20clean%20modern%20clinic%20setting%20comfortable%20patient%20care%20environment%20cyan%20and%20white%20tones%20safe%20immunization%20service%20medical%20professionalism&width=600&height=400&seq=immunization-service&orientation=landscape'
    },
    {
      title: 'Home Healthcare',
      description: 'Medical equipment and supplies for home care including mobility aids and wound care products.',
      image: 'https://readdy.ai/api/search-image?query=home%20healthcare%20medical%20equipment%20display%20including%20mobility%20aids%20wound%20care%20supplies%20respiratory%20devices%20organized%20in%20modern%20pharmacy%20showroom%20teal%20and%20white%20color%20palette%20professional%20medical%20retail%20environment&width=600&height=400&seq=home-healthcare&orientation=landscape'
    }
  ];

  const benefits = [
    {
      icon: 'ri-time-line',
      title: 'Fast Service',
      stat: '15 min',
      description: 'Average prescription fill time'
    },
    {
      icon: 'ri-team-line',
      title: 'Expert Team',
      stat: '10+',
      description: 'Licensed pharmacists on staff'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Quality Assured',
      stat: '100%',
      description: 'Verified medications'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Always Available',
      stat: '24/7',
      description: 'Emergency support line'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isScrolled={isScrolled} />
      
      {/* Hero Slider with Breadcrumb */}
      <section className="relative bg-gray-900 overflow-hidden">
        {/* Breadcrumb */}
        <div className="absolute top-4 left-0 right-0 z-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-white/80 hover:text-white transition-colors cursor-pointer">
                Home
              </a>
              <i className="ri-arrow-right-s-line text-white/60"></i>
              <span className="text-white font-medium">Pharmacy Services</span>
            </nav>
          </div>
        </div>

        {/* Slider */}
        <div className="relative h-[500px] sm:h-[600px]">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
                    {slide.description}
                  </p>
                  
                  {/* 2 Column Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto px-4">
                    <a
                      href="/location"
                      className="bg-teal-600 text-white px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-teal-700 transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg"
                    >
                      <i className="ri-map-pin-line mr-2"></i>
                      Visit Our Location
                    </a>
                    <a
                      href="tel:9057099985"
                      className="bg-white text-gray-900 px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg"
                    >
                      <i className="ri-phone-line mr-2"></i>
                      (905) 709-9985
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Indicators */}
          <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - 2 Column on Mobile */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-teal-50 transition-colors"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 bg-teal-600 text-white rounded-full">
                  <i className={`${benefit.icon} text-xl sm:text-2xl`}></i>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{benefit.stat}</div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services - 2 Column on Mobile */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Core <span className="text-teal-600">Pharmacy Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive <strong>pharmaceutical care</strong> and <strong>health solutions</strong> tailored to your needs in <strong>Thornhill</strong> and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {coreServices.map((service, index) => (
              <article 
                key={index} 
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-teal-100 text-teal-600 rounded-lg sm:rounded-xl mb-4 sm:mb-6">
                  <i className={`${service.icon} text-2xl sm:text-3xl`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <i className="ri-check-line text-teal-600 text-lg sm:text-xl mr-2 sm:mr-3 flex-shrink-0"></i>
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services - Horizontal Scroll on Mobile */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Specialty <span className="text-teal-600">Healthcare Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced <strong>specialty pharmacy services</strong> and <strong>healthcare solutions</strong> for specialized medical needs.
            </p>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="lg:hidden">
            <div className="overflow-x-auto scrollbar-hide px-4 sm:px-6">
              <div className="flex space-x-4 pb-4">
                {specialtyServices.map((service, index) => (
                  <article 
                    key={index} 
                    className="flex-shrink-0 w-[280px] sm:w-[320px] bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="relative w-full h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.title} at Thornhill Drug-Mart`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center items-center mt-4 space-x-2 text-teal-600">
              <i className="ri-arrow-left-line text-lg"></i>
              <span className="text-sm font-medium">Swipe to explore</span>
              <i className="ri-arrow-right-line text-lg"></i>
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:block px-4 sm:px-6">
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {specialtyServices.map((service, index) => (
                <article 
                  key={index} 
                  className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} at Thornhill Drug-Mart`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Style CTA Cards */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-600 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
              Why Choose Thornhill Drug-Mart?
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto px-4">
              Your trusted <strong>pharmacy partner</strong> in <strong>Thornhill</strong> for over a decade
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6 bg-white/20 rounded-full">
                <i className="ri-user-heart-line text-white text-2xl sm:text-3xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Personalized Care</h3>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                We take time to understand your unique health needs and provide tailored pharmaceutical solutions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6 bg-white/20 rounded-full">
                <i className="ri-award-line text-white text-2xl sm:text-3xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Trusted Expertise</h3>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                Our licensed pharmacists bring years of experience and stay current with the latest pharmaceutical advances.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 transition-all sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6 bg-white/20 rounded-full">
                <i className="ri-community-line text-white text-2xl sm:text-3xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Community Focused</h3>
              <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                Proudly serving Thornhill, North York, Richmond Hill, and Vaughan with dedication and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - 2 Column Buttons */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Ready to Experience Better Pharmacy Care?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
            Visit us today or call to speak with one of our expert pharmacists
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="/location"
              className="bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-teal-700 transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg"
            >
              Visit Our Location
            </a>
            <a
              href="tel:9057099985"
              className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-800 transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg"
            >
              <i className="ri-phone-line mr-2"></i>
              (905) 709-9985
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
