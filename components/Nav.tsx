"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";

const links = [
  { href: "/services", label: "Services" },
  { href: "/getting-started", label: "Getting Started" },
  { href: "/insurance", label: "Insurance" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { openModal } = useBooking();

  return (
    <header className="bg-[#1e7faa] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-bold text-lg">Coastal Pediatric</span>
          <span className="text-sm opacity-90">Therapy Center</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:opacity-80 transition">
              {l.label}
            </Link>
          ))}
          <button
            onClick={openModal}
            className="bg-[#e8734a] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#d4623b] transition ml-2"
          >
            Book an Appointment
          </button>
        </nav>

        {/* Phone + mobile toggle */}
        <div className="flex items-center gap-3">
          <a href="tel:9043724070" className="hidden sm:flex lg:hidden items-center gap-1 text-sm font-semibold hover:opacity-80">
            <Phone size={15} />
            (904) 372-4070
          </a>
          <a href="tel:9043724070" className="hidden xl:flex items-center gap-1 text-sm font-semibold hover:opacity-80">
            <Phone size={15} />
            (904) 372-4070
          </a>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#155f82] px-4 pb-4">
          <a href="tel:9043724070" className="flex items-center gap-2 py-3 text-sm font-semibold border-b border-white/20">
            <Phone size={15} />
            (904) 372-4070
          </a>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-sm border-b border-white/10 hover:opacity-80"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => { setOpen(false); openModal(); }}
            className="mt-4 w-full bg-[#e8734a] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#d4623b] transition"
          >
            Book an Appointment
          </button>
        </div>
      )}
    </header>
  );
}
