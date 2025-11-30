export default function Services() {
  const services = [
    {
      icon: 'ri-medicine-bottle-line',
      title: 'Methadone Treatment',
      description: 'Evidence-based opioid replacement therapy administered by licensed professionals in a safe, supportive environment.',
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Suboxone Programs',
      description: 'Comprehensive buprenorphine/naloxone treatment with ongoing medical supervision and counseling support.',
    },
    {
      icon: 'ri-stethoscope-line',
      title: 'Medical Assessments',
      description: 'Thorough health evaluations to create personalized treatment plans tailored to your specific needs.',
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Counseling Services',
      description: 'Professional addiction counseling and mental health support to address the root causes of substance use.',
    },
    {
      icon: 'ri-capsule-line',
      title: 'Full Pharmacy Services',
      description: 'Complete prescription services, medication management, and pharmaceutical care all in one location.',
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Ongoing Support',
      description: 'Regular follow-ups, progress monitoring, and continuous care to ensure long-term recovery success.',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
            <i className="ri-service-line text-teal-600 text-sm sm:text-base"></i>
            <span className="text-teal-700 text-xs sm:text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Comprehensive <span className="text-teal-600">Addiction Treatment</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We offer a full range of evidence-based treatment services designed to support your recovery journey every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <i className={`${service.icon} text-teal-600 text-2xl sm:text-3xl`}></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-6 sm:p-8 md:p-12 text-center shadow-xl">
          <a
            href="tel:9057099985"
            className="inline-block bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
