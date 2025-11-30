export default function Care365CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-100 px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-stethoscope-line text-red-600 text-sm sm:text-base"></i>
            <span className="text-red-700 text-xs sm:text-sm font-semibold">Virtual Healthcare</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Meet <span className="text-red-600">CARE365</span> Virtual Walk-In Clinic
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Same-day appointments for over 40+ health issues and family doctor referrals. Healthcare when you need it, where you need it.
          </p>
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:block bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          {/* Red Header */}
          <div className="bg-red-600 p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <i className="ri-calendar-check-line"></i>
                <span>SAME DAY APPOINTMENTS</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                CARE365 Virtual Walk-In Clinic
              </h2>

              <p className="text-xl opacity-95">
                Access quality healthcare from the comfort of your home. No waiting rooms, no travel time.
              </p>
            </div>
          </div>

          {/* Black Content Section */}
          <div className="bg-black p-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* Features List */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">What We Offer</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <span className="text-lg text-gray-200">Same-day appointments available</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <span className="text-lg text-gray-200">Covers over 40+ health issues</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <span className="text-lg text-gray-200">Family doctor referrals provided</span>
                    </li>
                  </ul>
                </div>

                {/* More Features */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <span className="text-lg text-gray-200">Licensed Ontario physicians</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <span className="text-lg text-gray-200">Prescriptions sent directly to pharmacy</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <span className="text-lg text-gray-200">Virtual consultations from anywhere</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="https://care365.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-red-600 text-white px-10 py-5 rounded-lg text-lg font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  <span>VISIT CARE365.CA</span>
                  <i className="ri-arrow-right-line text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Version */}
        <div className="lg:hidden bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          {/* Red Header */}
          <div className="bg-red-600 p-6 sm:p-8 md:p-10 text-white">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <i className="ri-calendar-check-line"></i>
                <span>SAME DAY APPOINTMENTS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                CARE365 Virtual Walk-In Clinic
              </h2>

              <p className="text-base sm:text-lg opacity-95">
                Access quality healthcare from the comfort of your home. No waiting rooms, no travel time.
              </p>
            </div>
          </div>

          {/* Black Content Section */}
          <div className="bg-black p-6 sm:p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">What We Offer</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <span className="text-base sm:text-lg text-gray-200">Same-day appointments available</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <span className="text-base sm:text-lg text-gray-200">Covers over 40+ health issues</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <span className="text-base sm:text-lg text-gray-200">Family doctor referrals provided</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <span className="text-base sm:text-lg text-gray-200">Licensed Ontario physicians</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <span className="text-base sm:text-lg text-gray-200">Prescriptions sent directly to pharmacy</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <span className="text-base sm:text-lg text-gray-200">Virtual consultations from anywhere</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="https://care365.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer w-full sm:w-auto"
              >
                <span>VISIT CARE365.CA</span>
                <i className="ri-arrow-right-line text-lg sm:text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Health Issues Grid */}
        <div className="mt-8 sm:mt-12 bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            We Can Help With
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              { icon: 'ri-thermometer-line', text: 'Cold & Flu' },
              { icon: 'ri-heart-pulse-line', text: 'High Blood Pressure' },
              { icon: 'ri-lungs-line', text: 'Respiratory Issues' },
              { icon: 'ri-capsule-line', text: 'Prescriptions' },
              { icon: 'ri-mental-health-line', text: 'Mental Health' },
              { icon: 'ri-first-aid-kit-line', text: 'Minor Injuries' },
              { icon: 'ri-virus-line', text: 'Infections' },
              { icon: 'ri-heart-line', text: 'Chronic Conditions' },
              { icon: 'ri-stethoscope-line', text: 'General Checkups' },
              { icon: 'ri-user-heart-line', text: 'Family Medicine' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-3 sm:p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-100 to-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <i className={`${item.icon} text-red-600 text-xl sm:text-2xl`}></i>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm sm:text-base text-gray-600 mt-6 sm:mt-8">
            <strong>And 30+ more health conditions.</strong> Contact us to learn how we can help you today.
          </p>
        </div>
      </div>
    </section>
  );
}
