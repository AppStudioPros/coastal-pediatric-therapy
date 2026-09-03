import type { Metadata } from "next";
import { BookOpen, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Coastal Pediatric Therapy Center",
  description: "Tips, resources, and insights on pediatric speech, occupational, and physical therapy from the team at Coastal Pediatric Therapy Center in Jacksonville, FL.",
};

const skeletonPosts = [
  {
    category: "Speech & Language",
    title: "Coming Soon",
    excerpt: "Stay tuned — our therapists are working on helpful articles and guides for families.",
    readTime: "5 min read",
  },
  {
    category: "Occupational Therapy",
    title: "Coming Soon",
    excerpt: "We&apos;ll be sharing practical tips and research-backed strategies to support your child at home.",
    readTime: "4 min read",
  },
  {
    category: "Development",
    title: "Coming Soon",
    excerpt: "From milestone guides to sensory activities, our blog will be your go-to resource for pediatric development.",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#eaf7f9] py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1e3a4a] mb-4">The Coastal Therapy Blog</h1>
          <p className="text-lg text-[#4a7a8a]">
            Tips, guides, and insights from our pediatric therapy team — written for families, by therapists.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Coming soon banner */}
          <div className="bg-[#eaf7f9] border border-[#2fb8c6]/20 rounded-2xl p-6 text-center mb-12">
            <BookOpen size={32} className="text-[#2fb8c6] mx-auto mb-3" />
            <h2 className="text-xl font-bold text-[#1e3a4a] mb-2">Blog Coming Soon</h2>
            <p className="text-[#4a7a8a] text-sm max-w-md mx-auto">
              Our therapists are preparing helpful articles and resources. Check back soon, or follow us on Instagram for early tips and updates.
            </p>
            <a
              href="https://www.instagram.com/coastalpediatrictherapy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-[#2fb8c6] font-semibold text-sm hover:underline"
            >
              Follow @coastalpediatrictherapy
            </a>
          </div>

          {/* Skeleton cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {skeletonPosts.map((post, i) => (
              <div key={i} className="bg-white border border-[#cce8ef] rounded-2xl overflow-hidden">
                <div className="bg-[#eaf7f9] h-44 flex items-center justify-center">
                  <BookOpen size={32} className="text-gray-300" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag size={13} className="text-[#2fb8c6]" />
                    <span className="text-xs font-semibold text-[#2fb8c6] uppercase tracking-wide">{post.category}</span>
                  </div>
                  <div className="h-5 bg-gray-200 rounded-full w-3/4 mb-3 animate-pulse" />
                  <div className="space-y-2 mb-4">
                    <div className="h-3 bg-[#eaf7f9] rounded-full w-full animate-pulse" />
                    <div className="h-3 bg-[#eaf7f9] rounded-full w-5/6 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Coastal Pediatric Therapy Center Blog",
            "url": "https://coastaltherapy.net/blog",
            "description": "Pediatric therapy tips, milestone guides, and family resources from Coastal Pediatric Therapy Center.",
            "publisher": {
              "@type": "MedicalBusiness",
              "name": "Coastal Pediatric Therapy Center",
              "telephone": "(904) 372-4070"
            }
          })
        }}
      />
    </>
  );
}
