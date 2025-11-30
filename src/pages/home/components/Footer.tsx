export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pharmacy Services', path: '/pharmacy-services' },
    { name: 'Addiction Services', path: '/addiction-services' },
    { name: 'Location', path: '/location' },
    { name: 'Privacy Policy', path: '/privacy-policy' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-12 sm:pt-16 pb-6 sm:pb-8 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <img 
                src="https://static.readdy.ai/image/621fe86c950ded9745dd2c19cd7c5595/c0b5a15a2b815315bfd2ccbd2c453721.png" 
                alt="Thornhill Drug-Mart Logo" 
                className="w-12 h-12 object-contain flex-shrink-0"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Thornhill Drug-Mart</h3>
                <p className="text-xs sm:text-sm text-gray-400">TSCP Partner</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
              Providing compassionate addiction treatment and comprehensive pharmacy services to the Greater Toronto Area.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer flex-shrink-0">
                <i className="ri-facebook-fill text-base sm:text-lg"></i>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer flex-shrink-0">
                <i className="ri-twitter-fill text-base sm:text-lg"></i>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer flex-shrink-0">
                <i className="ri-instagram-line text-base sm:text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('hours')}
                  className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Operating Hours
                </button>
              </li>
              <li>
                <a
                  href="/location"
                  className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition-colors cursor-pointer block"
                >
                  Location
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition-colors cursor-pointer block"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-sm sm:text-base text-gray-400">Addiction Treatment Programs</li>
              <li className="text-sm sm:text-base text-gray-400">On-Site Addiction Clinic</li>
              <li className="text-sm sm:text-base text-gray-400">Prescription Medications</li>
              <li className="text-sm sm:text-base text-gray-400">Over-the-Counter Medications</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-teal-400 text-lg sm:text-xl mt-1 flex-shrink-0"></i>
                <span className="text-sm sm:text-base text-gray-400">
                  8108 Yonge St Unit 3-4<br />
                  Thornhill, ON L4J 1W4
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="ri-phone-line text-teal-400 text-lg sm:text-xl flex-shrink-0"></i>
                <a href="tel:9057099985" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  (905) 709-9985
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <i className="ri-mail-line text-teal-400 text-lg sm:text-xl mt-1 flex-shrink-0"></i>
                <a href="mailto:info@thornhilltreatment.com" className="text-sm sm:text-base text-gray-400 hover:text-teal-400 transition-colors cursor-pointer break-all">
                  info@thornhilltreatment.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Thornhill Drug-Mart. All rights reserved. Partner of Toronto Safe Clinics and Pharmacies (TSCP).
            </p>
            <a
              href="https://cpxs.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap"
            >
              Powered by CipherX Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
