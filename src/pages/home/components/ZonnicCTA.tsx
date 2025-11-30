export default function ZonnicCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Title and Description */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Start Your Smoke-Free Journey with <span className="text-teal-600">Zonnic</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover a discreet, tobacco-free way to quit smoking. Available at a special discounted price at all TSCP locations.
          </p>
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-teal-700 to-teal-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Side - Product Image */}
          <div className="relative h-full min-h-[500px] bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10"></div>
            <img
              src="https://static.readdy.ai/image/621fe86c950ded9745dd2c19cd7c5595/480a7bbedefb0a19d9a2044905757425.png"
              alt="Zonnic Quit Smoking Pouch"
              className="relative z-10 w-full max-w-md h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Side - Content */}
          <div className="p-12 text-white">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              <i className="ri-fire-fill"></i>
              <span>SPECIAL OFFER</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Zonnic Quit<br />Smoking Pouch
            </h2>

            <div className="inline-flex items-baseline gap-3 mb-6">
              <span className="text-5xl font-bold">$15.59</span>
              <span className="text-2xl line-through opacity-75">$19.99</span>
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">22% OFF</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-lg">Nicotine replacement therapy pouches</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-lg">Helps reduce cravings and withdrawal symptoms</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-lg">Discreet and tobacco-free</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-lg">Available in multiple strengths</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-lg">Available at all TSCP locations</span>
              </li>
            </ul>

            <a
              href="https://tscp.ca/locations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-teal-700 px-8 py-4 rounded-lg text-base font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              <span>FIND A LOCATION NEAR YOU</span>
              <i className="ri-arrow-right-line text-xl"></i>
            </a>
          </div>
        </div>

        {/* Mobile & Tablet Version */}
        <div className="lg:hidden bg-gradient-to-b from-teal-700 to-teal-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Product Image */}
          <div className="relative bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center p-8 sm:p-12">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10"></div>
            <img
              src="https://static.readdy.ai/image/621fe86c950ded9745dd2c19cd7c5595/480a7bbedefb0a19d9a2044905757425.png"
              alt="Zonnic Quit Smoking Pouch"
              className="relative z-10 w-full max-w-sm h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-10 text-white">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              <i className="ri-fire-fill"></i>
              <span>SPECIAL OFFER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Zonnic Quit<br />Smoking Pouch
            </h2>

            <div className="inline-flex items-baseline gap-2 sm:gap-3 mb-6">
              <span className="text-4xl sm:text-5xl font-bold">$15.59</span>
              <span className="text-xl sm:text-2xl line-through opacity-75">$19.99</span>
              <span className="bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">22% OFF</span>
            </div>
            
            <ul className="space-y-3 sm:space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-base sm:text-lg">Nicotine replacement therapy pouches</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-base sm:text-lg">Helps reduce cravings and withdrawal symptoms</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-base sm:text-lg">Discreet and tobacco-free</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-base sm:text-lg">Available in multiple strengths</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-base sm:text-lg">Available at all TSCP locations</span>
              </li>
            </ul>

            <a
              href="https://tscp.ca/locations"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-white text-teal-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer w-full sm:w-auto"
            >
              <span>FIND A LOCATION NEAR YOU</span>
              <i className="ri-arrow-right-line text-lg sm:text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
