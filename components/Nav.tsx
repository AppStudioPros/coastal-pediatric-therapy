"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";

const links = [
  { href: "/pediatric-therapy-services", label: "Services" },
  { href: "/new-patient-request-form", label: "Getting Started" },
  { href: "/insurance", label: "Insurance" },
  { href: "/about", label: "About" },
  { href: "/parent-resources", label: "Resources" },
  { href: "/coastal-therapy-blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

function ContactIcon({
  icon,
  tooltip,
  href,
}: {
  icon: React.ReactNode;
  tooltip: React.ReactNode;
  href: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <a
        href={href}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 transition text-white"
        aria-label={href}
      >
        {icon}
      </a>
      {hovered && (
        <div className="absolute right-0 top-10 bg-white text-[#1e3a4a] rounded-lg shadow-lg py-2 px-3 text-xs whitespace-nowrap z-50 border border-gray-100">
          <div className="absolute -top-1.5 right-2.5 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
          {tooltip}
        </div>
      )}
    </div>
  );
}

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
            className="cta-pulse-y2 bg-[#FFD940] text-[#1e3a4a] font-bold px-5 py-2 rounded-lg hover:bg-[#FFEB70] transition ml-2"
          >
            Book an Appointment
          </button>
        </nav>

        {/* Contact icons + mobile toggle */}
        <div className="flex items-center gap-2 ml-3">
          {/* Phone icon */}
          <ContactIcon
            href="tel:9043724070"
            icon={<Phone size={15} />}
            tooltip={
              <div>
                <p className="font-semibold text-[#1AAFC9] mb-0.5">Call Us</p>
                <a href="tel:9043724070" className="text-[#1e3a4a] font-bold hover:text-[#1AAFC9]">(904) 372-4070</a>
                <p className="text-gray-400 mt-0.5">Mon–Fri 8:30 AM – 5:30 PM</p>
              </div>
            }
          />
          {/* Email icon */}
          <ContactIcon
            href="mailto:info@coastaltherapy.net"
            icon={<Mail size={15} />}
            tooltip={
              <div>
                <p className="font-semibold text-[#1AAFC9] mb-0.5">Email Us</p>
                <a href="mailto:info@coastaltherapy.net" className="text-[#1e3a4a] font-bold hover:text-[#1AAFC9]">info@coastaltherapy.net</a>
              </div>
            }
          />
          {/* Mobile hamburger */}
          <button className="lg:hidden text-white ml-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#1499b0] px-4 pb-4">
          <div className="flex items-center gap-4 py-3 border-b border-white/20">
            <a href="tel:9043724070" className="flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition">
              <Phone size={14} />
              (904) 372-4070
            </a>
            <a href="mailto:info@coastaltherapy.net" className="flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white transition">
              <Mail size={14} />
              info@coastaltherapy.net
            </a>
          </div>
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
            className="mt-4 w-full cta-pulse-y3 bg-[#FFD940] text-[#1e3a4a] py-3 rounded-lg font-bold text-sm hover:bg-[#FFEB70] transition"
          >
            Book an Appointment
          </button>
        </div>
      )}
    </header>
  );
}
