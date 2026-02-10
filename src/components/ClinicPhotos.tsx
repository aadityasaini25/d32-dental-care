import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

const PanoramaViewer = ({ src, alt }: { src: string, alt: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Auto-scroll animation
    let animationId: number;
    const animate = () => {
      if (!isDragging) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (containerRef.current) {
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing border border-gray-200 shadow-lg"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm z-10 font-bold uppercase tracking-wider">
        360° View
      </div>
      <div className="w-[200%] h-full relative">
        {/* Using a wider container to simulate panorama */}
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          quality={100}
          unoptimized
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-4xl drop-shadow-md">↔</span>
      </div>
    </div>
  );
};

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  const regularPhotos = [
    '/images/clinic/2021-02-11.jpg',
    '/images/clinic/2021-02-11-2.jpg'
  ];

  const panoramicPhotos = [
    '/images/clinic/unnamed.jpg',
    '/images/clinic/unnamed-2.jpg'
  ];

  return (
    <section className="bg-gray-50 p-4 md:p-12 lg:p-16 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-900 tracking-tight">Our <span className="text-gradient-gold">State-of-the-Art</span> Clinic</h2>

        {/* Regular Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {regularPhotos.map((img, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl h-64 md:h-80 lg:h-96 relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <Image
                src={img}
                alt={`Clinic Photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* 360 Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {panoramicPhotos.map((img, i) => (
            <PanoramaViewer key={i} src={img} alt={`Clinic 360 View ${i + 1}`} />
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