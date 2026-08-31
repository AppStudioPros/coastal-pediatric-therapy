import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Locations | Coastal Pediatric Therapy Center Jacksonville Beach & Mandarin FL",
  description: "Coastal Pediatric Therapy Center has two convenient locations in Jacksonville Beach and Mandarin, FL. Open Monday through Friday, 8:00 AM to 6:30 PM.",
};

const locations = [
  {
    name: "Jacksonville Beach",
    region: "Northeast Florida",
    phone: "(904) 372-4070",
    hours: "Monday – Friday: 8:00 AM – 6:30 PM",
    note: "Our original location, serving Jacksonville Beach and the surrounding coastal communities.",
  },
  {
    name: "Mandarin",
    region: "South Jacksonville",
    phone: "(904) 372-4070",
    hours: "Monday – Friday: 8:00 AM – 6:30 PM",
    note: "Our Mandarin location serves families in South Jacksonville and the St. Johns County area.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <section className="bg-[#e8f4f9] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h1>
          <p className="text-lg text-gray-600">Two convenient locations in Northeast Florida — serving Jacksonville Beach, Mandarin, and surrounding communities.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {locations.map((loc) => (
            <div key={loc.name} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-[#1e7faa] text-white px-6 py-5">
                <h2 className="text-xl font-bold">{loc.name}</h2>
                <p className="text-white/80 text-sm">{loc.region}</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#1e7faa] mt-0.5 shrink-0" />
                  <p className="text-gray-600 text-sm">{loc.note}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#1e7faa] shrink-0" />
                  <a href="tel:9043724070" className="text-gray-600 text-sm hover:text-[#1e7faa]">{loc.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-[#1e7faa] shrink-0" />
                  <p className="text-gray-600 text-sm">{loc.hours}</p>
                </div>
                <div className="pt-2">
                  <p className="text-gray-500 text-xs">After-school appointments (after 3:00 PM) are in high demand. Earlier appointments offer more scheduling flexibility.</p>
                </div>
                <a href="tel:9043724070" className="block w-full text-center bg-[#1e7faa] text-white py-2.5 rounded-lg font-semibold hover:bg-[#155f82] transition text-sm mt-2">
                  Call to Schedule
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-10 bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
          <h3 className="font-bold text-gray-900 mb-2">Also Available: Telehealth and Private Schools</h3>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">In addition to our clinic locations, we offer telehealth sessions and therapy services at select private schools in Northeast Florida. Contact us to learn more about these settings.</p>
        </div>
      </section>
    </>
  );
}
