"use client";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const plans = [
  "Blue Cross Blue Shield (BCBS)",
  "Medica (MMSI)",
  "CMS Medicaid",
  "Tricare Select",
  "Tricare Prime",
  "UMR",
  "United Healthcare",
  "Step Up For Students",
  "DSAJ Scholarships",
  "SIS VPK Funding",
];

export default function InsurancePlans() {
  return (
    <motion.ul
      className="space-y-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.07 } },
      }}
    >
      {plans.map((plan, pi) => (
        <motion.li
          key={plan}
          variants={{
            hidden: { opacity: 0, scale: 0.7 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="flex items-center gap-3 bg-[#EAF6FB] border border-[#B8E4F0] rounded-lg px-4 py-3 text-[#4a7a8a]"
        >
          <ShieldCheck
            size={18}
            className={`shrink-0 ${pi % 2 === 1 ? "text-[#AF29BE]" : "text-[#24B5D0]"}`}
          />
          {plan}
        </motion.li>
      ))}
    </motion.ul>
  );
}
