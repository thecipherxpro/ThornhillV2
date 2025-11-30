export default function EndOverdoseCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#006666] w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-12">
            What's Inside<br />Your Kit?
          </h2>

          {/* Checklist Items */}
          <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-12">
            <div className="flex items-start gap-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <i className="ri-check-line text-[#006666] text-xl sm:text-2xl font-bold"></i>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-white font-medium text-left">
                Naloxone nasal spray
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <i className="ri-check-line text-[#006666] text-xl sm:text-2xl font-bold"></i>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-white font-medium text-left">
                Rescue breathing barrier mask
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <i className="ri-check-line text-[#006666] text-xl sm:text-2xl font-bold"></i>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-white font-medium text-left">
                Step-of-step instructional guide
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <i className="ri-check-line text-[#006666] text-xl sm:text-2xl font-bold"></i>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-white font-medium text-left">
                Protective case
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <i className="ri-check-line text-[#006666] text-xl sm:text-2xl font-bold"></i>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-white font-medium text-left">
                Injectable naloxone ampoules*
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <i className="ri-check-line text-[#006666] text-xl sm:text-2xl font-bold"></i>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-white font-medium text-left">
                Safety-engineered syringes*
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="tel:9057099985"
              className="inline-flex items-center gap-3 bg-[#004d4d] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-bold hover:bg-[#003d3d] transition-colors whitespace-nowrap cursor-pointer"
            >
              REQUEST YOUR FREE KIT
              <i className="ri-arrow-right-line text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
