export default function Hours() {
  const schedule = [
    { day: 'Monday', hours: '8:00 AM - 8:00 PM', isOpen: true },
    { day: 'Tuesday', hours: '8:00 AM - 8:00 PM', isOpen: true },
    { day: 'Wednesday', hours: '8:00 AM - 8:00 PM', isOpen: true },
    { day: 'Thursday', hours: '8:00 AM - 8:00 PM', isOpen: true },
    { day: 'Friday', hours: '8:00 AM - 8:00 PM', isOpen: true },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM', isOpen: true },
    { day: 'Sunday', hours: '10:00 AM - 5:00 PM', isOpen: true },
  ];

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

  return (
    <section id="hours" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
            <i className="ri-time-line text-teal-600 text-sm sm:text-base"></i>
            <span className="text-teal-700 text-xs sm:text-sm font-semibold">Hours & Location</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Visit Us <span className="text-teal-600">Today</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4">
            We're open 7 days a week with extended hours to serve you better. Walk-ins welcome, or call ahead to schedule an appointment.
          </p>

          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-map-pin-line text-teal-600 text-lg sm:text-xl"></i>
              </div>
              <div className="text-left">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Address</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  8108 Yonge St Unit 3-4<br />
                  Thornhill, ON L4J 1W4
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-phone-line text-teal-600 text-lg sm:text-xl"></i>
              </div>
              <div className="text-left">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Phone</h4>
                <a href="tel:9057099985" className="text-sm sm:text-base text-teal-600 hover:text-teal-700 font-semibold cursor-pointer">
                  (905) 709-9985
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-mail-line text-teal-600 text-lg sm:text-xl"></i>
              </div>
              <div className="text-left">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Email</h4>
                <a href="mailto:info@thornhilltreatment.com" className="text-sm sm:text-base text-teal-600 hover:text-teal-700 font-semibold cursor-pointer break-all">
                  info@thornhilltreatment.com
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/dir//8108+Yonge+St+Unit+3-4,+Thornhill,+ON+L4J+1W4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            Get Directions
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Operating Hours</h3>
            <div className="space-y-3 sm:space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-sm sm:text-base font-semibold text-gray-900">{item.day}</span>
                  </div>
                  <span className="text-sm sm:text-base text-gray-600">{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 p-4 bg-teal-50 rounded-lg border border-teal-100">
              <div className="flex items-start space-x-3">
                <i className="ri-information-line text-teal-600 text-lg sm:text-xl flex-shrink-0 mt-0.5"></i>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <strong>Note:</strong> Hours may vary on holidays. Please call ahead to confirm availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
