'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "+919828079898";
  const message = "Hello! I would like to book an appointment at Veda Dentistry.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-brandBlue text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 hover:opacity-90"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
} 