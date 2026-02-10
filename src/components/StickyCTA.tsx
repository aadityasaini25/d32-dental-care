interface StickyCtaProps {
  isVisible: boolean;
  onBookAppointment: () => void;
}

export default function StickyCTA({ isVisible, onBookAppointment }: StickyCtaProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-50 transition-transform duration-300">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg">Ready to Transform Your Smile?</h3>
          <p className="text-sm">Professional Consultation & Digital scan</p>
        </div>
        <div className="flex gap-2">
          <button onClick={onBookAppointment} className="bg-brandBlue text-white px-4 py-2 rounded-lg font-bold text-sm">
            BOOK APPOINTMENT
          </button>
          <a href="tel:+919828079898" className="bg-brandBlue text-white px-4 py-2 rounded-lg font-bold text-sm">
            CALL NOW ☏
          </a>
        </div>
      </div>
    </div>
  );
} 