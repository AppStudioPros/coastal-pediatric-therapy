"use client";
import { useBooking } from "@/contexts/BookingContext";

export default function CTASection() {
  const { openModal } = useBooking();

  return (
    <section className="relative py-24 px-4 text-white text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&q=80')",
          backgroundPosition: "center 85%",
        }}
      />
      <div className="absolute inset-0 bg-[#1a3a4a]/85" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 gold-underline">Ready to Get Started?</h2>
        <p className="text-white/80 mb-8 text-lg mt-4">
          Fill out a new patient request and our friendly staff will take care of the rest — from insurance verification to scheduling.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={openModal}
            className="bg-[#FFD940] text-[#1e3a4a] font-bold px-8 py-3 rounded-lg hover:bg-[#FFEB70] transition cta-pulse-y1"
          >
            Book an Appointment
          </button>
          <a
            href="tel:9043724070"
            className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            Call (904) 372-4070
          </a>
        </div>
      </div>
    </section>
  );
}
