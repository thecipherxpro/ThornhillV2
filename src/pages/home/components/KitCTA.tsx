export default function KitCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Title and Description */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get Your Free Naloxone Kit<br />And Save a Life
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Every second counts in an overdose emergency. Request your free naloxone kit today and be prepared to save a life in your community.
          </p>
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-teal-700 to-teal-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Side - Product Image */}
          <div className="relative h-full min-h-[500px] bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10"></div>
            <img
              src="https://i.postimg.cc/VkXBQv5r/Towdaddy-Logo-(3).png"
              alt="EndOverdose Naloxone Kit"
              className="relative z-10 w-full max-w-md h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Side - Content */}
          <div className="p-12 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              What's Inside<br />Your Kit?
            </h2>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-lg">Naloxone nasal spray</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-lg">Rescue breathing barrier mask</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-lg">Step-of-step instructional guide</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-lg">Protective case</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-lg">Injectable naloxone ampoules*</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-lg">Safety-engineered syringes*</span>
              </li>
            </ul>

            <a
              href="https://www.endoverdose.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-teal-700 px-8 py-4 rounded-lg text-base font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              <span>REQUEST YOUR FREE KIT</span>
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
              src="https://i.postimg.cc/VkXBQv5r/Towdaddy-Logo-(3).png"
              alt="EndOverdose Naloxone Kit"
              className="relative z-10 w-full max-w-sm h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-10 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              What's Inside<br />Your Kit?
            </h2>
            
            <ul className="space-y-3 sm:space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-base sm:text-lg">Naloxone nasal spray</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-base sm:text-lg">Rescue breathing barrier mask</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-base sm:text-lg">Step-of-step instructional guide</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-base sm:text-lg">Protective case</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-base sm:text-lg">Injectable naloxone ampoules*</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-teal-700 text-sm"></i>
                </div>
                <span className="text-base sm:text-lg">Safety-engineered syringes*</span>
              </li>
            </ul>

            <a
              href="https://www.endoverdose.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-white text-teal-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer w-full sm:w-auto"
            >
              <span>REQUEST YOUR FREE KIT</span>
              <i className="ri-arrow-right-line text-lg sm:text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
