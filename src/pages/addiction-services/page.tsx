import { useState, useEffect } from 'react';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import { useSEO } from '../../utils/seo';
import { useNavigate } from 'react-router-dom';

export default function AddictionServices() {
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
    title: 'Thornhill Addiction Services | Methadone, Suboxone & Kadian Treatment Programs',
    description: 'Professional addiction treatment services in Thornhill including Methadone Maintenance Treatment (MMT), Suboxone, Kadian, alcohol use disorder treatment, and smoking cessation programs. Expert care serving Thornhill, North York, Richmond Hill, Vaughan, and Toronto. Call (905) 709-9985 for compassionate addiction recovery support.',
    keywords: 'addiction treatment Thornhill, methadone treatment, Suboxone therapy, Kadian treatment, alcohol use disorder, smoking cessation, opioid replacement therapy, addiction recovery Thornhill',
    canonical: `${siteUrl}/addiction-services`,
    ogType: 'website',
    schema: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Thornhill Drug-Mart Addiction Services",
      "description": "Comprehensive addiction treatment programs including methadone maintenance treatment, Suboxone therapy, Kadian treatment, alcohol use disorder treatment, and smoking cessation services in Thornhill, Ontario",
      "url": `${siteUrl}/addiction-services`,
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
      "medicalSpecialty": "Addiction Medicine",
      "availableService": [
        {
          "@type": "MedicalTherapy",
          "name": "Methadone Maintenance Treatment",
          "description": "Evidence-based opioid replacement therapy using methadone for addiction recovery"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Suboxone Maintenance Treatment",
          "description": "Buprenorphine-naloxone therapy for opioid use disorder treatment"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Kadian Treatment",
          "description": "Long-acting morphine therapy for chronic pain and addiction management"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Alcohol Use Disorder Treatment",
          "description": "Comprehensive treatment programs for alcohol addiction recovery"
        },
        {
          "@type": "MedicalTherapy",
          "name": "Smoking Cessation",
          "description": "Professional support and medication for quitting smoking"
        }
      ],
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

  const slides = [
    {
      image: 'https://readdy.ai/api/search-image?query=compassionate%20healthcare%20professional%20in%20modern%20medical%20consultation%20room%20with%20warm%20lighting%2C%20supportive%20addiction%20treatment%20environment%2C%20professional%20counseling%20setting%2C%20clean%20teal%20and%20white%20colors%2C%20hopeful%20recovery%20atmosphere%2C%20private%20consultation%20space%2C%20medical%20expertise%20and%20care&width=1920&height=800&seq=addiction-slide-1&orientation=landscape',
      title: 'Thornhill Addiction Services',
      description: 'Compassionate, evidence-based addiction treatment programs in Thornhill'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=professional%20medical%20team%20in%20modern%20addiction%20treatment%20clinic%2C%20supportive%20healthcare%20environment%2C%20clean%20bright%20facility%20with%20teal%20accents%2C%20medication-assisted%20treatment%20setting%2C%20recovery-focused%20atmosphere%2C%20professional%20medical%20staff%2C%20welcoming%20healthcare%20space&width=1920&height=800&seq=addiction-slide-2&orientation=landscape',
      title: 'Expert Addiction Treatment',
      description: 'Methadone, Suboxone, and Kadian programs with dedicated medical support'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=peaceful%20recovery%20journey%20concept%20with%20sunrise%20over%20calm%20landscape%2C%20hope%20and%20healing%20symbolism%2C%20new%20beginning%20atmosphere%2C%20soft%20teal%20and%20warm%20colors%2C%20inspirational%20healthcare%20imagery%2C%20path%20to%20wellness%2C%20serene%20medical%20environment&width=1920&height=800&seq=addiction-slide-3&orientation=landscape',
      title: 'Your Recovery Journey Starts Here',
      description: 'Personalized treatment plans for lasting recovery and wellness'
    }
  ];

  const treatmentPrograms = [
    {
      icon: 'ri-medicine-bottle-line',
      title: 'Methadone Maintenance Treatment (MMT)',
      description: 'Evidence-based opioid replacement therapy using methadone to help manage withdrawal symptoms and reduce cravings. Our <strong>methadone treatment program</strong> in <strong>Thornhill</strong> provides daily supervised dosing with comprehensive medical monitoring.',
      features: [
        'Daily supervised dosing',
        'Individualized treatment plans',
        'Medical monitoring and support',
        'Counseling referrals',
        'Take-home privileges available',
        'Long-term recovery support'
      ],
      benefits: 'Reduces withdrawal symptoms, decreases drug cravings, and helps patients regain stability in their lives.',
      color: 'teal',
      image: 'https://readdy.ai/api/search-image?query=professional%20medical%20methadone%20treatment%20clinic%20interior%20with%20modern%20medication%20dispensing%20area%2C%20clean%20healthcare%20environment%20with%20teal%20accents%2C%20supervised%20dosing%20station%2C%20compassionate%20addiction%20medicine%20setting%2C%20bright%20natural%20lighting%2C%20professional%20pharmaceutical%20care%20space%20with%20organized%20medical%20supplies&width=800&height=600&seq=methadone-treatment-001&orientation=landscape'
    },
    {
      icon: 'ri-capsule-line',
      title: 'Suboxone Maintenance Treatment',
      description: 'Buprenorphine-naloxone combination therapy for <strong>opioid use disorder treatment</strong>. Our <strong>Suboxone program</strong> offers flexible dosing schedules and reduced clinic visit requirements for qualified patients.',
      features: [
        'Flexible dosing schedules',
        'Reduced clinic visits',
        'Lower abuse potential',
        'Effective withdrawal management',
        'Prescription refills available',
        'Ongoing medical supervision'
      ],
      benefits: 'Provides effective relief from withdrawal symptoms with a lower risk of misuse compared to other treatments.',
      color: 'cyan',
      image: 'https://readdy.ai/api/search-image?query=modern%20suboxone%20treatment%20consultation%20room%20with%20comfortable%20seating%2C%20professional%20medical%20counseling%20space%2C%20warm%20teal%20and%20white%20colors%2C%20private%20healthcare%20setting%2C%20medication-assisted%20treatment%20environment%2C%20supportive%20recovery%20atmosphere%20with%20natural%20lighting%20and%20contemporary%20design&width=800&height=600&seq=suboxone-treatment-001&orientation=landscape'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Kadian Treatment',
      description: 'Long-acting morphine sulfate therapy for chronic pain management and <strong>addiction treatment</strong>. Our <strong>Kadian program</strong> in <strong>Thornhill</strong> provides extended-release medication for 24-hour pain control.',
      features: [
        'Extended-release formulation',
        '24-hour pain control',
        'Once or twice daily dosing',
        'Reduced peak-trough fluctuations',
        'Comprehensive pain management',
        'Regular medical assessments'
      ],
      benefits: 'Provides consistent pain relief throughout the day while supporting addiction recovery goals.',
      color: 'teal',
      image: 'https://readdy.ai/api/search-image?query=professional%20pain%20management%20and%20addiction%20treatment%20clinic%20with%20medical%20consultation%20area%2C%20clean%20modern%20healthcare%20facility%20with%20teal%20accents%2C%20chronic%20pain%20therapy%20setting%2C%20extended-release%20medication%20management%20space%2C%20compassionate%20medical%20care%20environment%20with%20organized%20pharmaceutical%20supplies&width=800&height=600&seq=kadian-treatment-001&orientation=landscape'
    },
    {
      icon: 'ri-flask-line',
      title: 'Alcohol Use Disorder Treatment',
      description: 'Comprehensive <strong>alcohol addiction treatment</strong> programs including medication-assisted treatment and support services. Our team provides personalized care for <strong>alcohol use disorder</strong> recovery.',
      features: [
        'Medication-assisted treatment',
        'Withdrawal management',
        'Craving reduction therapy',
        'Relapse prevention support',
        'Counseling coordination',
        'Long-term recovery planning'
      ],
      benefits: 'Helps manage withdrawal symptoms, reduces alcohol cravings, and supports long-term sobriety.',
      color: 'cyan',
      image: 'https://readdy.ai/api/search-image?query=supportive%20alcohol%20addiction%20treatment%20counseling%20room%20with%20comfortable%20seating%2C%20professional%20recovery%20support%20environment%2C%20warm%20teal%20colors%2C%20private%20medical%20consultation%20space%2C%20medication-assisted%20treatment%20setting%2C%20hopeful%20healing%20atmosphere%20with%20natural%20lighting%20and%20calming%20design&width=800&height=600&seq=alcohol-treatment-001&orientation=landscape'
    },
    {
      icon: 'ri-smoke-line',
      title: 'Smoking Cessation',
      description: 'Professional <strong>smoking cessation programs</strong> with medication support and behavioral counseling. Our <strong>quit smoking services</strong> in <strong>Thornhill</strong> help you achieve a tobacco-free life.',
      features: [
        'Nicotine replacement therapy',
        'Prescription medications',
        'Behavioral support strategies',
        'Personalized quit plans',
        'Follow-up monitoring',
        'Relapse prevention techniques'
      ],
      benefits: 'Increases success rates for quitting smoking and improves overall health outcomes.',
      color: 'teal',
      link: '/pharmacy-services',
      image: 'https://readdy.ai/api/search-image?query=bright%20smoking%20cessation%20support%20clinic%20with%20nicotine%20replacement%20therapy%20products%20display%2C%20professional%20quit%20smoking%20consultation%20area%2C%20clean%20healthcare%20environment%20with%20teal%20accents%2C%20tobacco-free%20wellness%20setting%2C%20motivational%20recovery%20space%20with%20organized%20medical%20supplies%20and%20natural%20lighting&width=800&height=600&seq=smoking-cessation-001&orientation=landscape'
    }
  ];

  const whyChooseUs = [
    {
      icon: 'ri-shield-check-line',
      title: 'Licensed & Accredited',
      description: 'Fully licensed addiction treatment facility with certified medical professionals'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Compassionate Care',
      description: 'Non-judgmental, patient-centered approach to addiction recovery'
    },
    {
      icon: 'ri-time-line',
      title: 'Flexible Hours',
      description: 'Convenient scheduling to accommodate work and family commitments'
    },
    {
      icon: 'ri-team-line',
      title: 'Expert Medical Team',
      description: 'Experienced doctors and pharmacists specializing in addiction medicine'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Convenient Location',
      description: 'Easily accessible in Thornhill with free parking and transit access'
    },
    {
      icon: 'ri-shield-user-line',
      title: 'Confidential Services',
      description: 'Complete privacy and confidentiality for all patients'
    }
  ];

  const faqs = [
    {
      question: 'What is Methadone Maintenance Treatment (MMT)?',
      answer: 'Methadone Maintenance Treatment is an evidence-based therapy for opioid use disorder. Methadone is a long-acting opioid medication that reduces withdrawal symptoms and cravings without producing the euphoric high of other opioids. Our MMT program in Thornhill includes daily supervised dosing, medical monitoring, and comprehensive support services to help patients achieve long-term recovery.'
    },
    {
      question: 'How does Suboxone treatment differ from Methadone?',
      answer: 'Suboxone (buprenorphine-naloxone) is a partial opioid agonist, while methadone is a full agonist. Suboxone has a lower risk of misuse and overdose, and patients can often take it at home after stabilization. Methadone requires daily clinic visits initially. Both are effective for opioid use disorder treatment, and our doctors will help determine which option is best for your individual needs.'
    },
    {
      question: 'What is Kadian and who is it for?',
      answer: 'Kadian is an extended-release morphine sulfate medication used for chronic pain management and addiction treatment. It provides 24-hour pain control with once or twice daily dosing. Kadian is suitable for patients who require around-the-clock pain management and are working toward addiction recovery goals under medical supervision.'
    },
    {
      question: 'Do you offer treatment for alcohol addiction?',
      answer: 'Yes, we provide comprehensive alcohol use disorder treatment including medication-assisted treatment options like naltrexone and acamprosate. Our program includes withdrawal management, craving reduction therapy, and coordination with counseling services to support your recovery journey from alcohol addiction.'
    },
    {
      question: 'What smoking cessation options are available?',
      answer: 'Our smoking cessation program offers multiple approaches including nicotine replacement therapy (patches, gum, lozenges), prescription medications like varenicline (Champix) and bupropion (Zyban), and behavioral support strategies. We create personalized quit plans and provide ongoing monitoring to help you successfully quit smoking.'
    },
    {
      question: 'Is my treatment confidential?',
      answer: 'Absolutely. All addiction treatment services are completely confidential and protected by healthcare privacy laws. Your personal health information is secure, and we maintain strict confidentiality for all patients seeking addiction treatment at our Thornhill facility.'
    },
    {
      question: 'Do I need a referral to start treatment?',
      answer: 'For most addiction treatment programs, you will need a referral from a physician. However, we encourage you to call us at (905) 709-9985 to discuss your specific situation. Our team can guide you through the referral process and help you get started on your recovery journey as quickly as possible.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We proudly serve patients from Thornhill, North York, Richmond Hill, Vaughan, Toronto, and surrounding areas in the Greater Toronto Area. Our convenient Yonge Street location is easily accessible by car and public transit.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToFAQ = () => {
    const faqSection = document.getElementById('faq-section');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
                <span className="text-white text-xs sm:text-sm font-semibold">Addiction Services</span>
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
                  href="tel:9057099985"
                  className="bg-teal-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-teal-700 transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg flex items-center justify-center"
                >
                  <i className="ri-phone-line mr-1 sm:mr-2"></i>
                  <span className="hidden sm:inline">(905) 709-9985</span>
                  <span className="sm:hidden">Call Now</span>
                </a>
                <a
                  href="/location"
                  className="bg-white text-gray-900 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg flex items-center justify-center"
                >
                  <i className="ri-map-pin-line mr-1 sm:mr-2"></i>
                  <span className="hidden sm:inline">Visit Us</span>
                  <span className="sm:hidden">Location</span>
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

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Professional <span className="text-teal-600">Addiction Treatment</span> in Thornhill
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-left">
              At <strong>Thornhill Drug-Mart</strong>, we provide comprehensive <strong>addiction treatment services</strong> with compassion and expertise. Our evidence-based programs include <strong>Methadone Maintenance Treatment</strong>, <strong>Suboxone therapy</strong>, <strong>Kadian treatment</strong>, <strong>alcohol use disorder treatment</strong>, and <strong>smoking cessation</strong> services.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-left">
              Serving <strong>Thornhill</strong>, <strong>North York</strong>, <strong>Richmond Hill</strong>, <strong>Vaughan</strong>, and <strong>Toronto</strong>, our experienced medical team is dedicated to supporting your recovery journey with personalized care and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Programs - Image Cards with Overlay */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our <span className="text-teal-600">Addiction Treatment Programs</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Evidence-based <strong>addiction treatment programs</strong> tailored to your individual recovery needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {treatmentPrograms.map((program, index) => (
              <article 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Image Header with Title Overlay */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* 60% Transparent Overlay */}
                  <div className={`absolute inset-0 ${
                    program.color === 'teal' 
                      ? 'bg-teal-900/60' 
                      : 'bg-cyan-900/60'
                  } group-hover:bg-black/70 transition-all duration-300`}></div>
                  
                  {/* Title Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    {/* Icon */}
                    <div className="flex justify-start">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl group-hover:bg-white/30 transition-all">
                        <i className={`${program.icon} text-white text-2xl sm:text-3xl`}></i>
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        {program.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Body - White Background */}
                <div className="p-6 sm:p-8 bg-white">
                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                    {program.description.replace(/<\/?strong>/g, '')}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <i className="ri-checkbox-circle-fill text-teal-600 text-base mr-2 flex-shrink-0 mt-0.5"></i>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="bg-teal-50 border border-teal-100 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <i className="ri-lightbulb-line text-teal-600 text-lg mr-2 flex-shrink-0 mt-0.5"></i>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Benefits</h4>
                        <p className="text-xs sm:text-sm text-gray-700">{program.benefits}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={scrollToFAQ}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition-all hover:scale-105 cursor-pointer flex items-center justify-center"
                  >
                    <span className="text-sm sm:text-base">Learn More</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose <span className="text-teal-600">Thornhill Drug-Mart</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for <strong>addiction recovery</strong> in <strong>Thornhill</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-teal-50 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-teal-600 text-white rounded-lg mb-4">
                  <i className={`${item.icon} text-2xl sm:text-3xl`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Frequently Asked <span className="text-teal-600">Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Common questions about our <strong>addiction treatment services</strong>
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <article 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <h3 
                    className="text-base sm:text-lg font-semibold text-gray-900 pr-4"
                  >
                    {faq.question}
                  </h3>
                  <i className={`ri-arrow-${expandedFaq === index ? 'up' : 'down'}-s-line text-teal-600 text-2xl flex-shrink-0`}></i>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* FAQ Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </section>

      {/* Service Areas */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Serving Communities Across the <span className="text-teal-600">Greater Toronto Area</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Professional <strong>addiction treatment services</strong> for patients throughout the GTA
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { name: 'Thornhill', highlight: true },
              { name: 'North York', highlight: false },
              { name: 'Richmond Hill', highlight: false },
              { name: 'Vaughan', highlight: false },
              { name: 'Toronto', highlight: false }
            ].map((area) => (
              <div 
                key={area.name}
                className={`${
                  area.highlight ? 'bg-teal-600 text-white' : 'bg-gray-50 text-gray-900'
                } rounded-xl p-6 text-center hover:shadow-lg transition-all`}
              >
                <i className={`ri-map-pin-2-fill ${
                  area.highlight ? 'text-white' : 'text-teal-600'
                } text-3xl mb-3`}></i>
                <p className="text-base sm:text-lg font-bold">{area.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-teal-600 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-10 leading-relaxed">
            Take the first step toward lasting recovery. Our compassionate team is here to support you every step of the way. Call us today for a confidential consultation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="tel:9057099985"
              className="bg-white text-teal-600 px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg flex items-center justify-center"
            >
              <i className="ri-phone-line mr-2"></i>
              (905) 709-9985
            </a>
            <a
              href="/location"
              className="bg-teal-800 text-white px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-teal-900 transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg flex items-center justify-center"
            >
              <i className="ri-map-pin-line mr-2"></i>
              Visit Our Location
            </a>
          </div>

          <div className="mt-8 sm:mt-10 flex items-center justify-center space-x-2 text-white/80">
            <i className="ri-shield-check-line text-xl"></i>
            <p className="text-sm sm:text-base">All services are completely confidential</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
