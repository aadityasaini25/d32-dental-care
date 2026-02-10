import Image from "next/image";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="relative p-4 md:p-12 lg:p-16 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight tracking-tight text-gray-900">
        Transform Your Smile With<br />
        <span className="text-gradient-gold">D32 The Dental Centre</span>
      </h1>

      <div className="md:flex md:items-center md:gap-8 md:mb-16">
        <div className="relative rounded-2xl aspect-[9/16] md:aspect-auto md:h-[450px] mb-8 md:mb-0 md:flex-1 overflow-hidden shadow-2xl border-4 border-white/50 group hover:scale-[1.02] transition-transform duration-500">
          <div className="bg-black w-full h-full flex items-center justify-center">
            <video
              className="w-full h-full object-contain rounded-xl"
              src="/images/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Special Offer Section */}
        <div className="md:flex-1 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl text-center shadow-2xl border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Advanced Dental Implants</h2>
            <div className="w-16 h-1 bg-brandGold mx-auto rounded-full mb-6 opacity-80"></div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-left">
                <span className="text-brandGold text-xl">✓</span>
                <p className="text-lg text-gray-300">International Quality Standards</p>
              </div>
              <div className="flex items-center gap-3 text-left">
                <span className="text-brandGold text-xl">✓</span>
                <p className="text-lg text-gray-300">Digital Precision & Planning</p>
              </div>
              <div className="flex items-center gap-3 text-left">
                <span className="text-brandGold text-xl">✓</span>
                <p className="text-lg text-gray-300">Easy EMI Options Available</p>
              </div>
            </div>

            <button
              onClick={onBookAppointment}
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#b4941f] text-black px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300 group-hover:ring-2 ring-white/20"
            >
              <div>✨ Book Free Consult</div>
              <div className="text-xs font-medium mt-1 opacity-90">Start Your Smile Journey Today</div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-16 md:flex-row md:justify-center">
        <button
          onClick={onBookAppointment}
          className="bg-brandBlue text-white py-4 px-10 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all md:min-w-[240px]"
        >
          Book Consultation
        </button>
        <a
          href="tel:+919811063930"
          className="bg-white text-brandBlue border-2 border-brandBlue py-4 px-10 rounded-full font-bold text-lg text-center shadow-lg hover:bg-blue-50 hover:-translate-y-1 transition-all md:min-w-[240px]"
        >
          Call Now ☏
        </a>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-12">
        <h3 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Why choose <span className="text-gradient-gold">D32 The Dental Centre?</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {[
            { icon: "/images/heroicons/Experience.png", title: "28 Years Experience", desc: "Clinical excellence & trust" },
            { icon: "/images/heroicons/premium.png", title: "Premium Implants", desc: "International Quality" },
            { icon: "/images/heroicons/team.png", title: "Expert Orthodontist", desc: "Specialist Care" },
            { icon: "/images/heroicons/sterilization.png", title: "100% Sterilization", desc: "Highest Safety Standards" },
            { icon: "/images/heroicons/tech.png", title: "Advanced Tech", desc: "Modern Digital Dentistry" },
            { icon: "/images/heroicons/painless.png", title: "Painless Treatment", desc: "Stress-free Experience" }
          ].map((usp, index) => (
            <div
              key={index}
              className="glass p-4 rounded-xl text-center hover:shadow-premium hover:-translate-y-1 transition-all duration-300 cursor-default group"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Image src={usp.icon} alt={usp.title} width={32} height={32} className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1 leading-tight">{usp.title}</h4>
              <p className="text-xs text-gray-500 leading-snug">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-6 md:p-10 rounded-2xl md:max-w-4xl md:mx-auto">
        <h3 className="font-bold text-[#1a897f] mb-6 md:text-2xl text-center border-b pb-4">Our Commitment to Excellence</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          <li className="flex items-start gap-3">
            <span className="text-[#d4af37] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700"><strong>28 Years of Excellence</strong> caring for smiles with dedication.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#d4af37] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700">Strict <strong>F.D.A. guidelines</strong> for total infection control.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#d4af37] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700">Ensuring patients keep their teeth strong & healthy <strong>forever</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#d4af37] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700">Focus on <strong>preventive care</strong> and regular checkups.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#d4af37] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700">Belief in thorough <strong>patient education</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#d4af37] text-xl">★</span>
            <span className="text-sm md:text-base text-gray-700">Practice built on <strong>satisfied patient referrals</strong>.</span>
          </li>
        </ul>
        <div className="mt-8 text-center">
          <button
            onClick={onBookAppointment}
            className="bg-brandBlue text-white py-3 px-8 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full md:w-auto"
          >
            Request a Call Back ➤
          </button>
          <small className="block mt-3 text-gray-500 text-sm">
            Includes Professional Consultation & Digital Scan
          </small>
        </div>
      </div>
    </section>
  );
}