"use client";
import Link from "next/link";
import Image from "next/image";
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
    <header className="bg-[#1AAFC9] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Coastal Pediatric Therapy Center"
            width={180}
            height={37}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-white/80 hover:text-white transition">
              {l.label}
            </Link>
          ))}
          <button
            onClick={openModal}
            className="bg-[#F5C518] text-[#1e3a4a] font-bold px-5 py-2 rounded-lg hover:bg-[#E0B210] transition ml-2"
          >
            Book an Appointment
          </button>
        </nav>

        {/* Phone + mobile toggle */}
        <div className="flex items-center gap-3">
          <a href="tel:9043724070" className="hidden sm:flex lg:hidden items-center gap-1 text-sm font-semibold text-white/70 hover:text-white transition">
            <Phone size={15} />
            (904) 372-4070
          </a>
          <a href="tel:9043724070" className="hidden xl:flex items-center gap-1 text-sm font-semibold text-white/70 hover:text-white transition">
            <Phone size={15} />
            (904) 372-4070
          </a>
          <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#1499b0] px-4 pb-4">
          <a href="tel:9043724070" className="flex items-center gap-2 py-3 text-sm font-semibold text-white/70 border-b border-white/20">
            <Phone size={15} />
            (904) 372-4070
          </a>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-sm text-white/80 border-b border-white/10 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => { setOpen(false); openModal(); }}
            className="mt-4 w-full bg-[#F5C518] text-[#1e3a4a] py-3 rounded-lg font-bold text-sm hover:bg-[#E0B210] transition"
          >
            Book an Appointment
          </button>
        </div>
      )}
    </header>
  );
}
