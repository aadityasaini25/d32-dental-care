import Image from "next/image";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="relative z-50 glass shadow-sm p-2 md:py-2 transition-all duration-300">
      <div className="text-center max-w-7xl mx-auto md:flex md:items-center md:justify-between md:text-left">
        <div className="md:flex md:items-center md:gap-4">
          <Image
            src="/images/d32logo.png"
            alt="D32 The Dental Centre Logo"
            width={160}
            height={40}
            className="h-auto mx-auto mb-2 md:mb-0 md:mx-0 hover:scale-105 transition-transform duration-300"
          />
          <a
            href="https://maps.app.goo.gl/eb46A5CcHnRcx68n6" // Keep or update map link later if provided, now just text
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-700 mb-4 md:mb-0 hover:text-[#1a897f] transition-colors cursor-pointer block tracking-wide"
          >
            <span className="mr-1 text-lg">📍</span>
            <span className="border-b border-transparent hover:border-[#1a897f] transition-all">
              D32 The Dental Centre, E-90, South Extension Part I, New Delhi – 110049
            </span>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-center md:gap-3">
          <button
            onClick={onBookAppointment}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-xs tracking-wider uppercase"
          >
            Book Appointment
          </button>
          <a
            href="tel:+919811063930"
            className="bg-white text-blue-700 border-2 border-blue-600 px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-xs tracking-wider uppercase text-center"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}