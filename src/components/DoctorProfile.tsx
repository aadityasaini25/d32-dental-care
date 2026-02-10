import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">Meet The <span className="text-gradient-gold">Expert</span></h2>
          <div className="w-24 h-1 bg-[#1a897f] mx-auto rounded-full mb-6"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Image Side */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-72 h-72 md:w-full md:max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-100">
              <Image
                src="/images/doctor/WhatsApp Image 2026-02-10 at 23.08.30.jpeg"
                alt="Dr. Gurkeerat Singh"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Dr. Gurkeerat Singh
            </h3>
            <p className="text-[#1a897f] font-bold text-lg uppercase tracking-wider mb-6">
              Orthodontist & Implantologist
            </p>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                <strong>MDS - MCODS MANGALORE, BDS - MCODS MANGALORE</strong>
              </p>
              <p>
                With over <strong className="text-gray-900">28 years of experience</strong>, Dr. Gurkeerat Singh is a distinguished prominent figure in the field of Orthodontics and Implantology.
              </p>
              <p>
                He holds the prestigious title of <strong>M.Orth</strong> from the <strong>Royal College of Surgeons, London</strong> & the <strong>Royal College of Physicians and Surgeons of Glasgow</strong>. He is also a <strong>Diplomate of the Indian Board of Orthodontics</strong>.
              </p>
              <p className="italic text-gray-500 border-l-4 border-[#1a897f] pl-4 my-6">
                Registration No: A-3973
              </p>
              <p>
                Dedicated to providing world-class dental care, he specializes in creating beautiful, functional smiles using the latest advancements in orthodontic and implant technology. His approach combines clinical precision with compassionate patient care.
              </p>
            </div>

            <div className="mt-10">
              <button
                onClick={onBookAppointment}
                className="bg-brandBlue text-white py-4 px-10 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}