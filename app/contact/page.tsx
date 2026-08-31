import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Coastal Pediatric Therapy Center Jacksonville FL",
  description: "Contact Coastal Pediatric Therapy Center in Jacksonville FL. Call (904) 372-4070, email info@coastaltherapy.net, or visit our Jacksonville Beach or Mandarin locations.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#e8f4f9] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">We would love to hear from you. Reach out by phone, email, or use the form below and we will get back to you promptly.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f4f9] flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#1e7faa]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Phone</p>
                  <a href="tel:9043724070" className="text-[#1e7faa] hover:underline">(904) 372-4070</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f4f9] flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#1e7faa]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Email</p>
                  <a href="mailto:info@coastaltherapy.net" className="text-[#1e7faa] hover:underline">info@coastaltherapy.net</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f4f9] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#1e7faa]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Locations</p>
                  <p className="text-gray-600 text-sm">Jacksonville Beach, FL</p>
                  <p className="text-gray-600 text-sm">Mandarin (South Jacksonville), FL</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f4f9] flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#1e7faa]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Office Hours</p>
                  <p className="text-gray-600 text-sm">Monday – Friday: 8:00 AM – 6:30 PM</p>
                  <p className="text-gray-500 text-xs mt-1">After-school slots (after 3pm) fill quickly. Earlier appointments have more availability.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact form */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e7faa]" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e7faa]" placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e7faa]" placeholder="jane@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e7faa]" placeholder="(904) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e7faa]" placeholder="Tell us about your child and how we can help..." />
              </div>
              <button type="submit" className="w-full bg-[#1e7faa] text-white py-3 rounded-lg font-semibold hover:bg-[#155f82] transition text-sm">
                Send Message
              </button>
              <p className="text-xs text-gray-400 text-center">Or call us directly at (904) 372-4070</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
