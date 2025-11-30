interface PageHeroProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function PageHero({
  title,
  description,
  backgroundImage,
  gradientFrom = 'teal-600',
  gradientTo = 'teal-700'
}: PageHeroProps) {
  return (
    <section className={`relative pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden ${backgroundImage ? 'h-[50vh] flex items-center' : ''}`}>
      {/* Background Image or Gradient */}
      {backgroundImage ? (
        <>
          <div className="absolute inset-0">
            <img 
              src={backgroundImage}
              alt={title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </>
      ) : (
        <div className={`bg-gradient-to-br from-${gradientFrom} to-${gradientTo}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
