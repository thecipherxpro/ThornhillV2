import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pharmacy Services', path: '/pharmacy-services' },
    { name: 'Addiction Services', path: '/addiction-services' },
    { name: 'Location', path: '/location' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://static.readdy.ai/image/621fe86c950ded9745dd2c19cd7c5595/c0b5a15a2b815315bfd2ccbd2c453721.png" 
              alt="Thornhill Drug-Mart Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
            />
            <div>
              <h1 className="text-base sm:text-xl font-bold text-gray-900">
                Thornhill Drug-Mart
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                Addiction Treatment & Pharmacy
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer flex-shrink-0"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-gray-900`}></i>
          </button>
        </div>

        {/* Modern Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 animate-slideDown w-full">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="space-y-1">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-600 font-medium transition-all cursor-pointer group"
                  >
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 group-hover:bg-teal-100 transition-colors flex-shrink-0">
                      <i className={`${
                        index === 0 ? 'ri-home-line' :
                        index === 1 ? 'ri-capsule-line' :
                        'ri-map-pin-line'
                      } text-lg text-gray-700 group-hover:text-teal-600`}></i>
                    </div>
                    <span className="text-base">{link.name}</span>
                  </a>
                ))}
              </nav>

              {/* Call Button */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <a
                  href="tel:9057099985"
                  className="flex items-center justify-center space-x-2 w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors cursor-pointer shadow-md"
                >
                  <i className="ri-phone-line text-lg"></i>
                  <span>(905) 709-9985</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
