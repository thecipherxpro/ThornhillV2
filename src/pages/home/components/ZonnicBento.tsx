export default function ZonnicBento() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-100 px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4">
            <i className="ri-fire-line text-red-600 text-sm sm:text-base"></i>
            <span className="text-red-700 text-xs sm:text-sm font-semibold">Special Offer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Introducing <span className="text-teal-600">Zonnic Pouches</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Your journey to quit smoking starts here. Always discounted at all <strong>TSCP partner locations</strong>.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full">
          {/* Large Feature Card - Product Image */}
          <div className="sm:col-span-2 lg:row-span-2 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-red-500 text-white px-2.5 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg z-10">
              32% OFF
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                  Zonnic Nicotine Pouches
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mb-3 sm:mb-4 md:mb-6 max-w-md">
                  A smoke-free, discreet way to manage nicotine cravings. Perfect for those committed to quitting smoking.
                </p>
              </div>
              <div className="w-full h-48 sm:h-56 md:h-72 lg:h-96 relative">
                <img 
                  src="https://static.readdy.ai/image/621fe86c950ded9745dd2c19cd7c5595/39038e46d9a8b52d84524afec21aaf74.png"
                  alt="Zonnic Nicotine Pouches"
                  className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Price Card */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-white relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <i className="ri-price-tag-3-line text-xl sm:text-2xl md:text-3xl"></i>
              </div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1.5 sm:mb-2 opacity-90">Special Price</h4>
              <div className="mb-2 sm:mb-3">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-0.5 sm:mb-1">$15.51</div>
                <div className="text-xs sm:text-sm md:text-base opacity-80">CAD per pack</div>
              </div>
              <div className="text-xs sm:text-sm opacity-75 line-through">Original: $22.99</div>
            </div>
          </div>

          {/* Benefits Card */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-teal-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
              <i className="ri-heart-pulse-line text-teal-600 text-xl sm:text-2xl md:text-3xl"></i>
            </div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Quit Smoking</h4>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              Clinically proven to help reduce cigarette cravings and support your smoke-free journey.
            </p>
          </div>

          {/* Features List Card */}
          <div className="sm:col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
              <i className="ri-checkbox-circle-line text-white text-xl sm:text-2xl md:text-3xl"></i>
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">Why Choose Zonnic?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <i className="ri-check-line text-teal-600 text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-xs sm:text-sm md:text-base text-gray-700">Smoke-free &amp; discreet</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <i className="ri-check-line text-teal-600 text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-xs sm:text-sm md:text-base text-gray-700">No tobacco smell</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <i className="ri-check-line text-teal-600 text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-xs sm:text-sm md:text-base text-gray-700">Use anywhere, anytime</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <i className="ri-check-line text-teal-600 text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-xs sm:text-sm md:text-base text-gray-700">Multiple strength options</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <i className="ri-check-line text-teal-600 text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-xs sm:text-sm md:text-base text-gray-700">Fresh mint flavor</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <i className="ri-check-line text-teal-600 text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
                <span className="text-xs sm:text-sm md:text-base text-gray-700">Clinically tested</span>
              </div>
            </div>
          </div>

          {/* TSCP Partner Card */}
          <div className="sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-white relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full -ml-10 sm:-ml-12 -mb-10 sm:-mb-12"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <i className="ri-store-3-line text-xl sm:text-2xl md:text-3xl"></i>
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">Available at All TSCP Locations</h4>
              <p className="text-xs sm:text-sm md:text-base opacity-90 leading-relaxed">
                Find Zonnic Pouches at this special price at all Toronto Safe Clinics and Pharmacies partner locations.
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="sm:col-span-2 lg:col-span-3 bg-gray-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 text-center relative overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent"></div>
            <div className="relative z-10">
              <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Ready to Start Your Smoke-Free Journey?
              </h4>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Visit us today and get Zonnic Pouches at our exclusive discounted price. Our team is here to support you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 md:gap-4">
                <a
                  href="tel:9057099985"
                  className="w-full sm:w-auto bg-teal-600 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-teal-700 transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg"
                >
                  <i className="ri-phone-line mr-1.5 sm:mr-2"></i>
                  Call (905) 709-9985
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-white text-gray-900 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg"
                >
                  Visit Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
