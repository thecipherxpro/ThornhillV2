export default function ServiceCards() {
  const services = [
    {
      icon: 'ri-heart-add-line',
      title: 'Smoking Cessation',
      description: 'Comprehensive programs including Zonnic nicotine replacement therapy and personalized quit plans.',
      image: 'https://readdy.ai/api/search-image?query=Person%20breaking%20cigarette%20in%20half%20with%20determination%2C%20bright%20hopeful%20background%20with%20fresh%20air%20and%20blue%20sky%2C%20symbolizing%20freedom%20from%20smoking%20addiction%2C%20clean%20minimalist%20composition%20with%20soft%20natural%20lighting%2C%20professional%20healthcare%20photography%20style&width=600&height=400&seq=smoking-cessation-001&orientation=landscape',
    },
    {
      icon: 'ri-mental-health-line',
      title: 'Mental Health Support',
      description: 'Integrated mental health services addressing co-occurring disorders alongside addiction treatment.',
      image: 'https://readdy.ai/api/search-image?query=Peaceful%20meditation%20and%20mindfulness%20scene%2C%20person%20in%20calm%20contemplative%20state%2C%20soft%20natural%20lighting%20with%20plants%20and%20serene%20environment%2C%20representing%20mental%20wellness%20and%20emotional%20healing%2C%20professional%20healthcare%20photography%20with%20warm%20tones&width=600&height=400&seq=mental-health-001&orientation=landscape',
    },
    {
      icon: 'ri-group-line',
      title: 'Family Support',
      description: 'Resources and guidance for families supporting loved ones through addiction recovery.',
      image: 'https://readdy.ai/api/search-image?query=Supportive%20family%20holding%20hands%20together%20in%20circle%2C%20warm%20caring%20atmosphere%20with%20natural%20lighting%2C%20diverse%20family%20members%20showing%20unity%20and%20support%2C%20professional%20healthcare%20photography%20style%20with%20soft%20focus%20background&width=600&height=400&seq=family-support-001&orientation=landscape',
    },
    {
      icon: 'ri-first-aid-kit-line',
      title: 'Harm Reduction',
      description: 'Evidence-based harm reduction strategies to promote safety and health during recovery.',
      image: 'https://readdy.ai/api/search-image?query=Medical%20safety%20equipment%20and%20harm%20reduction%20supplies%20arranged%20professionally%2C%20clean%20clinical%20setting%20with%20bright%20lighting%2C%20first%20aid%20kit%20and%20medical%20supplies%2C%20professional%20healthcare%20photography%20with%20teal%20accents&width=600&height=400&seq=harm-reduction-001&orientation=landscape',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
            <i className="ri-star-line text-teal-600 text-sm sm:text-base"></i>
            <span className="text-teal-700 text-xs sm:text-sm font-semibold">Specialty Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Specialty <span className="text-teal-600">Healthcare Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Beyond addiction treatment, we offer specialized services to support your overall health and wellness.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {services.map((service, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-teal-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <div className="text-center mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
            <i className="ri-arrow-left-line"></i>
            <span>Swipe to explore</span>
            <i className="ri-arrow-right-line"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
