import React from 'react';

const KitContentsCTA: React.FC = () => {
  return (
    <section className="w-full max-w-full overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              <img
                src="https://static.readdy.ai/image/621fe86c950ded9745dd2c19cd7c5595/a36700dc16966cfab161abbbf62498f4.jpeg"
                alt="EndOverdose Naloxone Kit Contents"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What's Inside Your Kit?
            </h2>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <i className="ri-checkbox-circle-fill text-teal-600 text-2xl"></i>
                </div>
                <span className="text-lg text-gray-800">Naloxone nasal spray</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <i className="ri-checkbox-circle-fill text-teal-600 text-2xl"></i>
                </div>
                <span className="text-lg text-gray-800">Rescue breathing barrier mask</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <i className="ri-checkbox-circle-fill text-teal-600 text-2xl"></i>
                </div>
                <span className="text-lg text-gray-800">Step-of-step instructional guide</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <i className="ri-checkbox-circle-fill text-teal-600 text-2xl"></i>
                </div>
                <span className="text-lg text-gray-800">Protective case</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <i className="ri-checkbox-circle-fill text-teal-600 text-2xl"></i>
                </div>
                <span className="text-lg text-gray-800">Injectable naloxone ampoules*</span>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <i className="ri-checkbox-circle-fill text-teal-600 text-2xl"></i>
                </div>
                <span className="text-lg text-gray-800">Safety-engineered syringes*</span>
              </li>
            </ul>

            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer">
              REQUEST YOUR FREE KIT
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitContentsCTA;
