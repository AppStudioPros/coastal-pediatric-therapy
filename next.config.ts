import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "dmdkwhdvgizoignoqpxb.supabase.co" },
    ]
  },
  async redirects() {
    return [
      // Old slugs → canonical URLs (301 permanent)
      { source: '/services', destination: '/pediatric-therapy-services', permanent: true },
      { source: '/getting-started', destination: '/new-patient-request-form', permanent: true },
      { source: '/testimonials', destination: '/reviews', permanent: true },
      { source: '/contact', destination: '/contact-us', permanent: true },
      { source: '/careers', destination: '/career', permanent: true },
      { source: '/make-a-payment', destination: '/makeapayment', permanent: true },
      { source: '/blog', destination: '/coastal-therapy-blog', permanent: true },
      { source: '/blog/:slug*', destination: '/coastal-therapy-blog/:slug*', permanent: true },
      { source: '/resources', destination: '/parent-resources', permanent: true },
      // WordPress trailing slash variants
      { source: '/pediatric-therapy-services/', destination: '/pediatric-therapy-services', permanent: true },
      { source: '/new-patient-request-form/', destination: '/new-patient-request-form', permanent: true },
      { source: '/reviews/', destination: '/reviews', permanent: true },
      { source: '/contact-us/', destination: '/contact-us', permanent: true },
      { source: '/career/', destination: '/career', permanent: true },
      { source: '/makeapayment/', destination: '/makeapayment', permanent: true },
      { source: '/coastal-therapy-blog/', destination: '/coastal-therapy-blog', permanent: true },
      { source: '/parent-resources/', destination: '/parent-resources', permanent: true },
      { source: '/speech-and-language-milestones/', destination: '/speech-and-language-milestones', permanent: true },
      { source: '/gross-motor-milestones/', destination: '/gross-motor-milestones', permanent: true },
      { source: '/fine-motor-milestones/', destination: '/fine-motor-milestones', permanent: true },
      { source: '/possible-sensory-indicators/', destination: '/possible-sensory-indicators', permanent: true },
      { source: '/physician-resources/', destination: '/physician-resources', permanent: true },
    ]
  }
};

export default nextConfig;
