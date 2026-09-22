import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://coastaltherapy.net'

  const blogSlugs = [
    'speech-therapy-introducing-the-g-sound',
    '5-easy-ways-to-incorporate-sensory-play',
    'physical-therapy-for-torticollis',
    'world-down-syndrome-day',
    'sisters-4-sight-my-familys-journey-through-gene-replacement-therapy',
    'how-to-reduce-back-to-school-anxiety',
    'common-myths-and-misconceptions-about-aac',
    'phonological-disorders-tan-we-do-play-a-dame',
    'is-it-ok-if-my-baby-always-holds-their-head-tilted-to-the-same-side',
  ]

  return [
    // Core pages
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/pediatric-therapy-services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/new-patient-request-form`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/locations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Milestone pages — HIGH priority (driving rankings)
    { url: `${base}/speech-and-language-milestones`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/gross-motor-milestones`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/fine-motor-milestones`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/possible-sensory-indicators`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

    // Supporting pages
    { url: `${base}/parent-resources`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/physician-resources`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/insurance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/reviews`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/career`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.65 },
    { url: `${base}/makeapayment`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },

    // Blog index
    { url: `${base}/coastal-therapy-blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },

    // Blog posts
    ...blogSlugs.map(slug => ({
      url: `${base}/coastal-therapy-blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ]
}
