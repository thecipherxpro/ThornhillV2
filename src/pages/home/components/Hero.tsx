
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleLocationClick = () => {
    navigate('/location');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://static.readdy.ai/image/621fe86c950ded9745dd2c19cd7c5595/5ad93454dd1fa6850f49e4e33b9e76da.jpeg"
          alt="Addiction Treatment Background"
          className="w-full h-full object-cover object-top"
        />
        {/* Dark Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center w-full py-20 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
            <i className="ri-shield-check-line text-[#004d4d] text-base sm:text-lg"></i>
            <span className="text-white text-xs sm:text-sm font-medium">Trusted Partner of Toronto Safe Clinics and Pharmacies</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Your <span className="text-[#00d4d4]">Journey</span> To <span className="text-[#00d4d4]">Recovery</span> Starts Here!
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-4">
            Professional <strong>addiction treatment programs</strong> with onsite clinic services in <strong>Thornhill</strong>. Your journey to recovery starts here with expert care and support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <button
              onClick={handleLocationClick}
              className="w-full sm:w-auto bg-[#004d4d] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-[#003939] transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg"
            >
              Hours & Location
            </button>
            <a
              href="tel:9057099985"
              className="w-full sm:w-auto bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg"
            >
              <i className="ri-phone-line mr-2"></i>
              (905) 709-9985
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-2xl sm:text-3xl"></i>
      </div>
    </section>
  );
}
