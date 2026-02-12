import Image from 'next/image';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  const photos = [
    '/images/clinic/2021-02-11.jpg',
    '/images/clinic/2021-02-11-2.jpg',
    '/images/clinic/2022-08-09.jpg',
    '/images/clinic/6961dfb147663a1500857b38.jpg.avif'
  ];

  return (
    <section className="bg-gray-50 p-4 md:p-12 lg:p-16 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">Our <span className="text-gradient-gold">State-of-the-Art</span> Clinic</h2>
          <div className="w-24 h-1 bg-[#1a897f] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Step into D32 The Dental Centre and experience world-class dental care in a modern, comfortable environment.
          </p>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {photos.map((img, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl h-64 md:h-80 lg:h-[500px] relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <Image
                src={img}
                alt={`Clinic Photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBookAppointment}
            className="bg-brandBlue text-white py-4 px-12 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-lg transition-all shadow-md transform hover:-translate-y-1"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
} 