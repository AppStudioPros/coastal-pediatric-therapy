"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    smsConsent: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-[#EAF6FB] border border-[#B8E4F0] rounded-2xl p-10 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-[#1e3a4a] mb-2">Message Sent!</h3>
        <p className="text-[#4a7a8a]">Thank you for reaching out. Our team will be in touch with you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#B8E4F0] rounded-2xl p-8 space-y-5">
      <h2 className="text-xl font-bold text-[#1e3a4a] mb-2">Send Us a Message</h2>

      <div>
        <label className="block text-sm font-medium text-[#1e3a4a] mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full border border-[#B8E4F0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#24B5D0] text-[#1e3a4a]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1e3a4a] mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full border border-[#B8E4F0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#24B5D0] text-[#1e3a4a]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1e3a4a] mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(904) 000-0000"
          className="w-full border border-[#B8E4F0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#AF29BE] text-[#1e3a4a]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1e3a4a] mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your child and how we can help..."
          className="w-full border border-[#B8E4F0] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#24B5D0] text-[#1e3a4a] resize-none"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="smsConsent"
          id="smsConsent"
          checked={formData.smsConsent}
          onChange={handleChange}
          className="mt-0.5 accent-[#24B5D0]"
        />
        <label htmlFor="smsConsent" className="text-xs text-[#4a7a8a] leading-relaxed cursor-pointer">
          I agree to receive SMS/text messages from Coastal Pediatric Therapy Center. Message and data rates may apply. Reply STOP to opt out.
        </label>
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again or call us at (904) 372-4070.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="cta-pulse w-full bg-[#24B5D0] text-white py-3 rounded-lg font-semibold hover:bg-[#1A9EC0] transition text-sm flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : <>Send Message <ArrowRight size={16} /></>}
      </button>

      <p className="text-xs text-[#4a7a8a] text-center">Or call us directly at (904) 372-4070</p>
    </form>
  );
}
