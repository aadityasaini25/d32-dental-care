import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Image
            src="/images/d32logo.png"
            alt="D32 The Dental Centre"
            width={240}
            height={60}
            className="mx-auto mb-6 h-auto opacity-90 hover:opacity-100 transition-opacity"
          />
          <p className="text-gray-500 text-sm max-w-xl mx-auto font-light">
            Excellence in orthodontics and implantology with a personal touch. Specialized care for your perfect smile.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left mb-12">
          <div className="group">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2 inline-block md:block md:w-full group-hover:text-brandTeal transition-colors">Contact Us</h3>
            <div className="flex flex-col gap-1 mb-2">
              <a href="tel:+919811063930" className="block text-[#1a897f] font-bold text-lg hover:text-brandBlue transition-colors">+91 9811063930</a>
              <a href="tel:+919873822832" className="block text-[#1a897f] font-bold text-lg hover:text-brandBlue transition-colors">+91 9873822832</a>
              <a href="tel:01141646090" className="block text-[#1a897f] font-bold text-lg hover:text-brandBlue transition-colors">011-41646090</a>
            </div>
            <p className="text-gray-500 font-medium tracking-wide">D32 The Dental Centre</p>
            <a href="mailto:drgurkeeratsingh@gmail.com" className="text-sm text-gray-400 hover:text-brandTeal transition-colors mt-1 block">drgurkeeratsingh@gmail.com</a>
          </div>

          <div className="group">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2 inline-block md:block md:w-full group-hover:text-brandTeal transition-colors">Open Hours</h3>
            <div className="text-gray-600 space-y-2">
              <div className="flex items-start justify-center md:justify-start gap-2">
                <span className="text-[#1a897f] text-xl mt-0.5">🕒</span>
                <div className="text-left text-sm md:text-base">
                  <p><span className="font-bold">Mon–Fri:</span> 09:00 AM – 07:00 PM</p>
                  <p><span className="font-bold">Sat:</span> 09:00 AM – 04:00 PM</p>
                  <p className="text-red-500"><span className="font-bold">Sun:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="group">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2 inline-block md:block md:w-full group-hover:text-brandTeal transition-colors">Location</h3>
            <a
              href="https://maps.app.goo.gl/1osrFmAtfrakHAH68" // Update this with actual link if available
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brandTeal transition-colors cursor-pointer block leading-relaxed group-hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start justify-center md:justify-start gap-2">
                <span className="text-2xl mt-0.5">📍</span>
                <span>E-90, South Extension Part I, New Delhi – 110049</span>
              </div>
            </a>
            <p className="text-xs text-gray-400 mt-2 hover:text-brandBlue transition-colors">Click to open in Google Maps</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-8 bg-gray-100 rounded-2xl overflow-hidden h-[300px] md:h-[400px] shadow-inner border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224253.21904664088!2d77.0009063!3d28.5710675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25dd4868b65%3A0x804bdc13c2c5af42!2sD32%20The%20Dental%20Centre!5e0!3m2!1sen!2sin!4v1770745694979!5m2!1sen!2sin" // Placeholder approximate location for South Ext Part I
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="D32 The Dental Centre - South Extension Part I, New Delhi"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} D32 The Dental Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}