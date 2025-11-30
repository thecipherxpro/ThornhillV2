export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-teal-100 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <i className="ri-information-line text-teal-600 text-sm sm:text-base"></i>
              <span className="text-teal-700 text-xs sm:text-sm font-semibold">About Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Your Trusted Partner in <span className="text-teal-600">Addiction Recovery</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Thornhill Drug-Mart is proud to partner with Toronto Safe Clinics and Pharmacies (TSCP) to provide comprehensive addiction treatment services combined with full pharmacy care. Our integrated approach ensures you receive coordinated, professional support throughout your recovery journey.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Located in the heart of Thornhill, our facility combines a modern pharmacy with an onsite addiction clinic, offering a safe, confidential environment where you can access all the care you need under one roof. Our experienced team is dedicated to supporting your health and wellness with compassion and expertise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <i className="ri-team-line text-white text-xl sm:text-2xl"></i>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Expert Team</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Licensed professionals dedicated to your care</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <i className="ri-shield-check-line text-white text-xl sm:text-2xl"></i>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Confidential</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Your privacy is our top priority</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="tel:9057099985"
                className="bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer text-center"
              >
                Contact Us Today
              </a>
              <a
                href="mailto:info@thornhilltreatment.com"
                className="text-teal-600 font-semibold hover:text-teal-700 transition-colors cursor-pointer text-center sm:text-left text-sm sm:text-base break-all"
              >
                info@thornhilltreatment.com
              </a>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-auto">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20healthcare%20team%20in%20modern%20medical%20facility%2C%20diverse%20group%20of%20caring%20medical%20professionals%20including%20pharmacists%20and%20clinicians%20in%20teal%20and%20white%20uniforms%2C%20warm%20welcoming%20smiles%2C%20bright%20clean%20environment%20with%20natural%20lighting%2C%20contemporary%20medical%20office%20setting%20with%20plants%20and%20comfortable%20atmosphere%2C%20conveying%20trust%20compassion%20and%20expertise%20in%20addiction%20treatment&width=800&height=1000&seq=about-team-001&orientation=portrait"
                  alt="Thornhill Drug-Mart Team"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white rounded-xl shadow-xl p-4 sm:p-6 max-w-[200px] sm:max-w-xs">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-award-line text-white text-lg sm:text-2xl"></i>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">TSCP</p>
                  <p className="text-xs sm:text-sm text-gray-600">Certified Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="ri-map-pin-line text-teal-600 text-2xl sm:text-3xl"></i>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Convenient Location</h4>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              8108 Yonge St Unit 3-4<br />
              Thornhill, ON L4J 1W4
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="ri-time-line text-teal-600 text-2xl sm:text-3xl"></i>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Extended Hours</h4>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              Open 7 days a week<br />
              Early morning to evening
            </p>
          </div>
          <div className="text-center sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="ri-customer-service-line text-teal-600 text-2xl sm:text-3xl"></i>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Personalized Care</h4>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              Tailored treatment plans<br />
              Individual attention
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
