'use client';

import { useEffect, useState } from "react";

// Import all components
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImplantTypes from "@/components/ImplantTypes";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import CTABox from "@/components/CTABox";
import GoogleReviews from "@/components/GoogleReviews";
import VideoTestimonial from "@/components/VideoTestimonial";
import DoctorProfile from "@/components/DoctorProfile";
import CelebrityGallery from "@/components/CelebrityGallery";
import ClinicPhotos from "@/components/ClinicPhotos";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";
import StickyCTA from "@/components/StickyCTA";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [minutes, setMinutes] = useState(19);
  const [seconds, setSeconds] = useState(49);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setMinutes(19);
        setSeconds(49);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  // Scroll handler for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-show popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);
  // Section visibility observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const openPopup = () => {
    setShowPopup(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = '';
  };

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-ping"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header onBookAppointment={openPopup} />
        <HeroSection onBookAppointment={openPopup} />
        <AboutSection />
        <ImplantTypes />
        <BeforeAfterGallery onBookAppointment={openPopup} />
        <CTABox onBookAppointment={openPopup} />
        <GoogleReviews />
        <DoctorProfile onBookAppointment={openPopup} />
        <ClinicPhotos onBookAppointment={openPopup} />
        <FAQSection />
        <Footer />
      </div>

      {/* Interactive Components */}
      <StickyCTA isVisible={showStickyCta} onBookAppointment={openPopup} />
      <PopupForm
        isOpen={showPopup}
        onClose={closePopup}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
}
