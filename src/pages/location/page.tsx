import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import { useState, useEffect } from 'react';
import { useSEO } from '../../utils/seo';
import { useNavigate } from 'react-router-dom';

export default function LocationPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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
    title: 'Location & Hours | Thornhill Drug-Mart | 8108 Yonge St, Thornhill ON',
    description: 'Visit Thornhill Drug-Mart at 8108 Yonge St Unit 3-4, Thornhill, ON L4J 1W4. Open Monday-Friday 9am-6pm, Saturday 10am-4pm. Free parking available. Call (905) 709-9985 for directions.',
    keywords: 'Thornhill Drug-Mart location, pharmacy hours Thornhill, 8108 Yonge Street, Thornhill pharmacy directions, pharmacy near me',
    canonical: `${siteUrl}/location`,
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": "Thornhill Drug-Mart",
      "description": "Professional pharmacy providing addiction treatment services and pharmacy care in Thornhill, Ontario",
      "url": `${siteUrl}/location`,
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
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "00:00",
          "closes": "00:00"
        }
      ],
      "hasMap": "https://www.google.com/maps/place/8108+Yonge+St+Unit+3-4,+Thornhill,+ON+L4J+1W4"
    }
  });

  const slides = [
    {
      image: 'https://readdy.ai/api/search-image?query=Modern%20professional%20pharmacy%20interior%20with%20clean%20white%20counters%2C%20bright%20lighting%2C%20organized%20medication%20shelves%2C%20welcoming%20reception%20area%2C%20contemporary%20healthcare%20facility%20design%2C%20minimalist%20aesthetic%2C%20professional%20medical%20environment&width=1920&height=800&seq=location-slide-1&orientation=landscape',
      title: 'Visit Our Thornhill Location',
      description: 'Professional addiction treatment services in the heart of Thornhill'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Compassionate%20healthcare%20professionals%20in%20modern%20pharmacy%20setting%2C%20friendly%20pharmacist%20team%2C%20welcoming%20medical%20staff%2C%20professional%20healthcare%20environment%2C%20clean%20bright%20pharmacy%20interior%2C%20patient-centered%20care%20atmosphere&width=1920&height=800&seq=location-slide-2&orientation=landscape',
      title: 'Expert Care Team',
      description: 'Experienced doctors and pharmacists dedicated to your recovery'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=Modern%20accessible%20pharmacy%20building%20exterior%2C%20professional%20medical%20facility%2C%20convenient%20parking%20area%2C%20wheelchair%20accessible%20entrance%2C%20contemporary%20healthcare%20building%2C%20welcoming%20storefront%2C%20urban%20medical%20center&width=1920&height=800&seq=location-slide-3&orientation=landscape',
      title: 'Convenient & Accessible',
      description: 'Easy parking, wheelchair accessible, and near public transit'
    }
  ];

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

  const schedule = [
    {
      day: 'Monday',
      hours: '8:00 AM – 3:00 PM',
      doctors: 'Dr. Martis'
    },
    {
      day: 'Tuesday',
      hours: '8:00 AM – 4:00 PM',
      doctors: 'Dr. Taghaddos, Dr. Lao'
    },
    {
      day: 'Wednesday',
      hours: '8:00 AM – 5:00 PM',
      doctors: 'Dr. Taghaddos, Dr. Lao, Dr. Salama, Dr. Martis (9am-3pm)'
    },
    {
      day: 'Thursday',
      hours: '8:00 AM – 4:00 PM',
      doctors: 'Dr. Martis, Dr. Lao'
    },
    {
      day: 'Friday',
      hours: '8:00 AM – 1:00 PM',
      doctors: 'Dr. Taghaddos'
    },
    {
      day: 'Saturday',
      hours: '9:00 AM – 12:00 PM',
      doctors: 'Dr. Taghaddos, Dr. Martis'
    },
    {
      day: 'Sunday',
      hours: '9:00 AM – 11:00 AM',
      doctors: 'Dr. Martis (10am-12pm)'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isScrolled={isScrolled} />
      
      {/* Slider Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slides */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <nav className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <button
                  onClick={() => navigate('/')}
                  className="flex items-center text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="ri-home-4-line text-base sm:text-lg"></i>
                  <span className="ml-2 text-xs sm:text-sm font-medium">Home</span>
                </button>
                <i className="ri-arrow-right-s-line text-white/60 text-base sm:text-lg"></i>
                <span className="text-white text-xs sm:text-sm font-semibold">Location</span>
              </nav>
            </div>

            {/* Slide Content */}
            <div className="text-center mb-8 sm:mb-10" key={currentSlide}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                {slides[currentSlide].description}
              </p>

              {/* Action Buttons - 2 Column Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=8108+Yonge+St+Unit+3-4,+Thornhill,+ON+L4J+1W4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-teal-700 transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg flex items-center justify-center"
                >
                  <i className="ri-navigation-line mr-1 sm:mr-2"></i>
                  <span className="hidden sm:inline">Get Directions</span>
                  <span className="sm:hidden">Directions</span>
                </a>
                <a
                  href="tel:9057099985"
                  className="bg-white text-gray-900 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg flex items-center justify-center"
                >
                  <i className="ri-phone-line mr-1 sm:mr-2"></i>
                  <span className="hidden sm:inline">(905) 709-9985</span>
                  <span className="sm:hidden">Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Desktop */}
        <button
          onClick={prevSlide}
          className="hidden lg:flex absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full items-center justify-center transition-all cursor-pointer group z-20"
          aria-label="Previous slide"
        >
          <i className="ri-arrow-left-s-line text-white text-2xl group-hover:scale-110 transition-transform"></i>
        </button>
        <button
          onClick={nextSlide}
          className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full items-center justify-center transition-all cursor-pointer group z-20"
          aria-label="Next slide"
        >
          <i className="ri-arrow-right-s-line text-white text-2xl group-hover:scale-110 transition-transform"></i>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-2 sm:space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all cursor-pointer ${
                index === currentSlide
                  ? 'w-8 sm:w-10 h-2 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/70'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <i className="ri-arrow-down-line text-white text-2xl sm:text-3xl"></i>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: 'ri-map-pin-line', title: 'Address', content: '8108 Yonge St Unit 3-4<br />Thornhill, ON L4J 1W4<br />Canada' },
              { icon: 'ri-phone-line', title: 'Phone', content: '(905) 709-9985' },
              { icon: 'ri-printer-line', title: 'Fax', content: '(905) 709-9986' },
              { icon: 'ri-mail-line', title: 'Email', content: 'info@thornhilltreatment.com' }
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <i className={`${card.icon} text-teal-600 text-xl sm:text-2xl`}></i>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                {card.title === 'Phone' ? (
                  <>
                    <a href="tel:9057099985" className="text-sm sm:text-base text-teal-600 hover:text-teal-700 font-medium cursor-pointer block mb-1">
                      {card.content}
                    </a>
                    <p className="text-xs sm:text-sm text-gray-500">Call us anytime</p>
                  </>
                ) : card.title === 'Email' ? (
                  <a href="mailto:info@thornhilltreatment.com" className="text-sm sm:text-base text-teal-600 hover:text-teal-700 font-medium cursor-pointer block break-all">
                    {card.content}
                  </a>
                ) : card.title === 'Fax' ? (
                  <>
                    <p className="text-sm sm:text-base text-gray-600 font-medium mb-1">{card.content}</p>
                    <p className="text-xs sm:text-sm text-gray-500">Send documents</p>
                  </>
                ) : (
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: card.content }}></p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.8234567890123!2d-79.4278!3d43.8184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ5JzA2LjIiTiA3OcKwMjUnNDAuMSJX!5e0!3m2!1sen!2sca!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thornhill Drug-Mart Location"
              ></iframe>
            </div>
            <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=8108+Yonge+St+Unit+3-4,+Thornhill,+ON+L4J+1W4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-teal-600 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center cursor-pointer whitespace-nowrap text-sm sm:text-base"
                >
                  <i className="ri-navigation-line mr-2"></i>
                  Get Directions
                </a>
                <a
                  href="tel:9057099985"
                  className="flex-1 bg-white text-teal-600 border-2 border-teal-600 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors text-center cursor-pointer whitespace-nowrap text-sm sm:text-base"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Operating Hours & Doctor Schedule
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Plan your visit with our weekly schedule
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {schedule.map((item, index) => (
              <div
                key={item.day}
                className={`bg-white rounded-lg shadow-md p-4 sm:p-6 transition-all ${
                  currentDay === item.day
                    ? 'ring-2 ring-teal-600 shadow-lg'
                    : 'hover:shadow-lg'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-2 h-2 rounded-full ${currentDay === item.day ? 'bg-teal-600' : 'bg-gray-300'}`}></div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      {item.day}
                      {currentDay === item.day && (
                        <span className="ml-2 text-xs sm:text-sm bg-teal-100 text-teal-700 px-2 py-1 rounded-full font-medium">
                          Today
                        </span>
                      )}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 flex-1 sm:max-w-2xl">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-time-line text-teal-600 text-base sm:text-lg"></i>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500 mb-1">Operating Hours</p>
                        <p className="text-sm sm:text-base font-semibold text-gray-900">{item.hours}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-stethoscope-line text-teal-600 text-base sm:text-lg"></i>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500 mb-1">Doctors Available</p>
                        <p className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">{item.doctors}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 bg-teal-50 border border-teal-200 rounded-lg p-4 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-information-line text-white text-lg"></i>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Important Notice</h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Doctor schedules may vary. Please call ahead at <a href="tel:9057099985" className="text-teal-600 hover:text-teal-700 font-semibold cursor-pointer">(905) 709-9985</a> to confirm availability and book your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Areas We Serve
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {['Thornhill', 'North York', 'Richmond Hill', 'Vaughan', 'Toronto'].map((area) => (
                <div key={area} className="bg-teal-50 rounded-lg p-3 sm:p-4 text-center">
                  <i className="ri-map-pin-2-fill text-teal-600 text-xl sm:text-2xl mb-2"></i>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parking & Accessibility */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Parking & Accessibility
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <i className="ri-parking-box-line text-teal-600 text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Free Parking</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Ample free parking available on-site for all visitors
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <i className="ri-wheelchair-line text-teal-600 text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Wheelchair Accessible</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Fully accessible facility with ramps and elevators
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <i className="ri-bus-line text-teal-600 text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Public Transit</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Conveniently located near major bus routes on Yonge Street
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
