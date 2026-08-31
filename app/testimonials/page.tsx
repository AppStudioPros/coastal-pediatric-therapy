import type { Metadata } from "next";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials | Coastal Pediatric Therapy Center Jacksonville FL",
  description: "Read what families are saying about Coastal Pediatric Therapy Center in Jacksonville, FL. Hundreds of children have made life-changing progress at our clinic.",
};

const testimonials = [
  { name: "Cheryl", text: "We have been coming to Coastal Pediatric Therapy Center for almost three years and have seen so much growth and improvement in our son's speech. Our SLP makes speech fun, so it's enjoyable to be there. Our son has never complained about having to go to speech and instead looks forward to speech day!" },
  { name: "Ashley", text: "We started our school year at Fletcher Middle with tears, frustration and zero friends. We now have much less frustration and two friends! Our son is now using words to describe feelings before reaching meltdown in most cases. His therapists, especially Georganna, has taken the time to let me feel HEARD and let our son feel heard. Everyone at Coastal makes us feel like our son is the most important." },
  { name: "Mariesa", text: "I cannot say enough wonderful things about Coastal Therapy, especially about my son's therapist, Ms. Christy. Over the past year and a half, she has helped my son overcome so much with his speech. Diagnosed with apraxia, the progress he has made is truly remarkable." },
  { name: "Melissa", text: "The staff at Coastal are amazing, everyone is so caring! My daughter is doing feeding therapy with Kellie and has made such a big improvement. Kellie always makes the time to listen to any concerns and give me suggestions to help her at home." },
  { name: "Karin", text: "Coastal Therapy is a wonderful, positive, learning experience for the entire family! I have been impressed with the whole staff from the moment I made the first call. Having made many moves, I can honestly say the intake and scheduling to begin services was the easiest and friendliest I have ever experienced." },
  { name: "Bree", text: "We have been in speech therapy and occupational therapy for over 5 years at Coastal. The staff has become like family and the office is like a second home for my son. Coastal gave me so much guidance and support in the beginning, when I was lost in the new world of Autism and sensory disorders." },
  { name: "Elizabeth", text: "We have seen a huge improvement in our child's speech since starting at Coastal Therapy. People are able to understand him so much more now! Our therapist has been so amazing and our child loves his appointment time with her. Very thankful for all the hard work she has put in with our son!" },
  { name: "Michelle", text: "Ms. Kellie always does an amazing job of meeting my child's ever changing needs!" },
  { name: "Wenona", text: "My daughter has learned so many things since beginning therapy at Coastal. Her vocabulary has flourished! In addition, her functional vocabulary is building every day." },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-[#e8f4f9] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What Families Are Saying</h1>
          <p className="text-lg text-gray-600">We are honored by the trust families place in us. Here is what some of them have shared.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map(({ name, text }) => (
            <div key={name} className="break-inside-avoid bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={15} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>
              <p className="font-semibold text-gray-900 text-sm">— {name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-4 bg-[#1e7faa] text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Ready to See Results Like These?</h2>
          <p className="text-white/90 mb-6">Every child is different — and every success story starts with a first appointment.</p>
          <a href="tel:9043724070" className="bg-white text-[#1e7faa] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
            Call (904) 372-4070
          </a>
        </div>
      </section>
    </>
  );
}
