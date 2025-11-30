export default function OurServicesCards() {
  const services = [
    {
      title: 'Pharmacy Services',
      description: 'Comprehensive pharmaceutical care including prescription medications, health consultations, and medication management.',
      image: 'https://readdy.ai/api/search-image?query=modern%20bright%20pharmacy%20interior%20with%20organized%20medicine%20shelves%20professional%20prescription%20counter%20healthcare%20products%20display%20clean%20white%20and%20teal%20color%20scheme%20welcoming%20atmosphere%20natural%20lighting%20contemporary%20design%20professional%20pharmaceutical%20care%20environment&width=600&height=400&seq=pharmacy-services-card&orientation=landscape',
      link: '/pharmacy-services',
      isExternal: false,
      features: [
        'Prescription filling',
        'Health consultations',
        'Medication reviews',
        'Vaccination services'
      ]
    },
    {
      title: 'Addiction Services',
      description: 'Specialized addiction treatment programs including methadone, suboxone, and comprehensive recovery support.',
      image: 'https://readdy.ai/api/search-image?query=compassionate%20healthcare%20professional%20counseling%20patient%20in%20modern%20medical%20setting%20supportive%20addiction%20treatment%20environment%20warm%20teal%20and%20white%20colors%20professional%20medical%20consultation%20recovery%20support%20caring%20atmosphere&width=600&height=400&seq=addiction-services-card&orientation=landscape',
      link: '/pharmacy-services',
      isExternal: false,
      features: [
        'Opioid replacement therapy',
        'Same-day treatment',
        'Kadian treatment'
      ]
    },
    {
      title: 'TSCP Partner',
      description: 'Proud partner of the Toronto South Catchment Program providing integrated community healthcare services.',
      image: 'https://readdy.ai/api/search-image?query=professional%20healthcare%20partnership%20community%20medical%20services%20modern%20clinic%20setting%20collaborative%20healthcare%20environment%20teal%20and%20white%20color%20scheme%20medical%20professionals%20working%20together%20integrated%20care%20system&width=600&height=400&seq=tscp-partner-card&orientation=landscape',
      link: 'https://www.tscp.ca',
      isExternal: true,
      features: [
        'Community healthcare',
        'Integrated services',
        'Mental health support'
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className="text-teal-600">Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive healthcare solutions tailored to your needs
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 sm:space-x-6 pb-4">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  target={service.isExternal ? '_blank' : '_self'}
                  rel={service.isExternal ? 'noopener noreferrer' : undefined}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2 flex-shrink-0"></span>
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center text-teal-600 font-semibold text-sm sm:text-base">
                      <span>Learn More</span>
                      <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center items-center mt-6 space-x-2 text-teal-600">
            <i className="ri-arrow-left-line text-lg"></i>
            <span className="text-sm font-medium">Swipe to explore</span>
            <i className="ri-arrow-right-line text-lg"></i>
          </div>
        </div>

        {/* Desktop: 3 Column Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              target={service.isExternal ? '_blank' : '_self'}
              rel={service.isExternal ? 'noopener noreferrer' : undefined}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2 flex-shrink-0"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-teal-600 font-semibold">
                  <span>Learn More</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
