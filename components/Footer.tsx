"use client";
import Link from "next/link";
import { Phone, Mail, Printer } from "lucide-react";
import MadeByWDP365 from "@/components/MadeByWDP365";
function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}
import { useState } from "react";

const quickLinks = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Getting Started", "/getting-started"],
  ["Insurance", "/insurance"],
  ["About", "/about"],
  ["Resources", "/resources"],
  ["Physician Resources", "/physician-resources"],

  ["Blog", "/blog"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "sent" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubStatus("sent");
    } catch {
      setSubStatus("error");
    }
  };

  return (
    <footer clas¶»§q«^