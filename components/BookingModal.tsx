"use client";
import { useState, FormEvent } from "react";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/booking-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, phone, preferredTime }),
      });
    } catch {
      // Best effort — still open the booking portal
    }
    window.open(
      "https://oceanfriends.ai/reference/patient?centerId=NGFM-5LZ",
      "_blank"
    );
    setLoading(false);
    setFirstName("");
    setPhone("");
    setPreferredTime("");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl max-w-md w-full shadow-xl p-8 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Let&apos;s get your child scheduled
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Share a few quick details to confirm your spot, then we&apos;ll send you straight to our booking calendar to choose your time.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="bm-first-name">
              First Name <span className="text-[#e8734a]">*</span>
            </label>
            <input
              id="bm-first-name"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Your first name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e7faa]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="bm-phone">
              Phone Number <span className="text-[#e8734a]">*</span>
            </label>
            <input
              id="bm-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(904) 555-0000"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e7faa]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="bm-time">
              Preferred Time <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <select
              id="bm-time"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e7faa] bg-white"
            >
              <option value="">Select a preferred time</option>
              <option value="Morning 9am-12pm">Morning 9am–12pm</option>
              <option value="Afternoon 12pm-3pm">Afternoon 12pm–3pm</option>
              <option value="After School 3pm-5:30pm">After School 3pm–5:30pm</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#e8734a] text-white font-semibold py-3 rounded-lg hover:bg-[#d4623b] transition disabled:opacity-60"
          >
            {loading ? "Redirecting…" : "Continue to Booking Calendar →"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Or call us:{" "}
          <a href="tel:9043724070" className="text-[#1e7faa] font-semibold hover:underline">
            (904) 372-4070
          </a>
        </p>
      </div>
    </div>
  );
}
