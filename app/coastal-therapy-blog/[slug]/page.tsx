import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const posts: Record<string, {
  title: string
  date: string
  excerpt: string
  content: string
  category: string
}> = {
  'speech-therapy-introducing-the-g-sound': {
    title: 'Speech Therapy: Introducing the G Sound',
    date: 'May 24, 2023',
    category: 'Speech Therapy',
    excerpt: 'Replacing /d/ for /g/ is called a phonological pattern "fronting." It\'s typical for young kids to substitute sounds, but once past a certain age, we expect them to be able to produce the sound naturally.',
    content: `Introducing New Sounds

Let's talk about the challenges we see in Speech Therapy when introducing the G sound to little ones. Replacing /d/ for /g/ is called a phonological pattern "fronting." It's typical for young kids to substitute sounds, but once past a certain age, we expect them to be able to produce the sound naturally. For the /d/ and /g/ sounds, we expect them to be able to produce these sounds by age 3.

When errors persist, a Speech Language Pathologist can help intervene in Speech Therapy and determine if it's a motor planning deficit or phonological in nature. For example, can the child use their "speech helpers" (mouth, lips, tongue, palate) in isolation to produce the sound? Or is it a pattern where the child always replaces /g/ with /d/?

How We Help

Our SLPs use a variety of techniques including visual cues like mouth models to show correct tongue placement, tactile cues, and minimal pair activities to help children distinguish between sounds. Early intervention is key — if your child is over 3 and still substituting /d/ for /g/, a speech evaluation is a great next step.

If you're concerned about your child's speech development, our team at Coastal Pediatric Therapy Center is here to help. We serve families in Jacksonville Beach and Mandarin, FL.`,
  },
  '5-easy-ways-to-incorporate-sensory-play': {
    title: '5 Easy Ways to Incorporate Sensory Play',
    date: 'April 25, 2023',
    category: 'Occupational Therapy',
    excerpt: 'Sensory play can seem daunting, but it doesn\'t have to be complicated. Here are 5 simple ways to incorporate sensory play into your child\'s routine using things you already have at home.',
    content: `5 Easy Ways to Incorporate Sensory Play

Today's topic is for parents who want to add sensory play to their child's playtime. We always hear how beneficial sensory play can be, but it can seem daunting to think of how to exactly expose our children to this awesome play concept. Here are 5 simple ways to incorporate sensory play.

1. Easy Sensory Play Bins

Most likely, you already have the ingredients you need to make a sensory bin in your pantry. It does not have to be complicated at all. First, make sure the box you use is a clear container and has a top for easy storage. The main ingredient can be dry rice, dry pasta, or dry beans. Next, add small toys and tools such as small spoons, scoopers, pom poms, and small cups/containers.

2. Water Play

Water is one of the most accessible and versatile sensory materials. Fill a bin or the bathtub and add cups, funnels, sponges, and small toys. Water play develops pouring and fine motor skills while providing calming tactile input.

3. Playdough and Kinetic Sand

These materials are great for strengthening hand muscles while providing deep tactile input. You can make playdough at home with flour, salt, water, and food coloring.

4. Outdoor Exploration

Nature is the ultimate sensory playground. Sand, dirt, grass, rocks, and leaves all provide varying textures. Let your child explore, dig, and feel — messy is good!

5. Arts and Crafts

Finger painting, gluing, cutting, and stamping all provide sensory input while developing fine motor skills. Don't worry about the end product — the process is what matters.

Benefits of Sensory Play

Sensory play builds nerve connections in the brain's pathways, which leads to the ability to complete more complex learning tasks. It supports language development, cognitive growth, motor skills, problem-solving skills, and social interaction.

If your child has difficulty tolerating sensory input or seeks excessive sensory stimulation, our occupational therapists can help. Contact Coastal Pediatric Therapy Center at (904) 372-4070.`,
  },
  'physical-therapy-for-torticollis': {
    title: 'Physical Therapy for Torticollis',
    date: 'March 28, 2023',
    category: 'Physical Therapy',
    excerpt: 'Did you know pediatric physical therapy can help treat babies with Torticollis? Congenital Muscular Torticollis (CMT) affects around 3% of babies.',
    content: `What is Torticollis?

Did you know pediatric physical therapy can help treat babies with Torticollis? Congenital Muscular Torticollis (CMT) affects around 3% of babies.

Torticollis occurs when one of the muscles in the neck, called the sternocleidomastoid, becomes tight. When this happens, it causes the baby to look mainly to one side. They also have a slight tilt of their head toward the opposite side. Although not all rotation preferences indicate torticollis, it is good to encourage your baby to spend time looking at both sides — this encourages symmetrical strength and range of motion of their neck and spinal muscles.

Effects on Development

Torticollis can affect the baby's whole body. Head/neck positioning can also contribute to:
- Feeding difficulties
- Trunk and shoulder tightness
- Difficulty attaining developmental milestones
- Flat spots on the head (plagiocephaly)

How Physical Therapy Helps

A licensed pediatric physical therapist will evaluate your baby's neck range of motion, muscle strength, and overall movement patterns. Treatment typically includes:
- Gentle stretching exercises
- Strengthening activities
- Positioning recommendations for home
- Tummy time guidance

The good news: when caught early and treated consistently, most cases of torticollis resolve completely with physical therapy. Early intervention is key.

If you notice your baby consistently turning their head to one side, contact your pediatrician and ask for a physical therapy referral. The team at Coastal Pediatric Therapy Center in Jacksonville Beach and Mandarin, FL is experienced in treating infants and young children with torticollis.`,
  },
  'world-down-syndrome-day': {
    title: 'World Down Syndrome Day!',
    date: 'March 21, 2023',
    category: 'Community',
    excerpt: 'Every year on March 21st we celebrate World Down Syndrome Day to honor the uniqueness of the triplication of the 21st chromosome — the genetic cause of Down Syndrome.',
    content: `March 21st Is World Down Syndrome Day!

Happy World Down Syndrome Day! Every year on March 21st we celebrate to honor the uniqueness of the triplication (trisomy – 3) of the 21st chromosome, which is the genetic cause of Down Syndrome.

Presently, Down Syndrome is the most common chromosomal condition. Down Syndrome occurs in 1 out of every 700 births in the United States.

Celebrating Abilities

During World Down Syndrome Day, we want to recognize and celebrate the abilities of people with Down Syndrome, of all ages! Today we are sharing pictures of a few young adults with Down Syndrome, who are siblings of some of our very own therapists here at Coastal Pediatric Therapy Center.

Our Physical Therapist, Karli, and her sister Kaci have inspired us all. Emily, another member of our therapy team, was also inspired by her sibling to pursue a career helping children reach their full potential.

How We Can Help

Children with Down Syndrome often benefit from a combination of speech therapy, occupational therapy, and physical therapy — all of which are offered at Coastal Pediatric Therapy Center. Our therapists work one-on-one with each child to develop individualized treatment plans that build on their strengths.

To learn more about our services or to schedule an evaluation, call us at (904) 372-4070.`,
  },
  'sisters-4-sight-my-familys-journey-through-gene-replacement-therapy': {
    title: "Sisters 4 Sight: My Family's Journey Through Gene Replacement Therapy",
    date: 'September 11, 2020',
    category: 'Family Stories',
    excerpt: "The day my family received the news my niece, Sophia, was diagnosed with Leber's Congenital Amaurosis (LCA), it raised many questions. Here's our family's journey.",
    content: `A Family's Journey

The day my family received the news my niece, Sophia, was diagnosed with Leber's Congenital Amaurosis (LCA), a mutation to the RPE65 gene, as well as SPATA5, it was quite a shock and raised many questions within my family. We learned these conditions cause developmental and health issues.

Once Sophia was diagnosed, we pushed for the doctors to look more closely at my oldest niece Ava, who was having visual abnormalities as well. If it had not been for Sophia's early diagnoses we might not have had the opportunity and knowledge for early intervention with Ava.

From an early age, we noticed that Ava had some vision difficulties; she was drawn to bright lights and did not make eye contact. She presented with a lazy eye that my family attempted to correct with eye muscle surgery when she was 2 years old.

The Power of Early Intervention

This story is a testament to the importance of early intervention. When families advocate for their children and seek evaluations early, outcomes improve dramatically. At Coastal Pediatric Therapy Center, we see the power of early intervention every day.

If you have concerns about your child's development — vision, motor, speech, or sensory — don't wait. Call us at (904) 372-4070 to schedule an evaluation.`,
  },
  'how-to-reduce-back-to-school-anxiety': {
    title: 'How to Reduce Back-to-School Anxiety',
    date: 'September 11, 2020',
    category: 'Parent Tips',
    excerpt: 'As our little ones get ready to head back to school, it can be an anxious time for both parents and students alike. Here are practical tips to help your child transition smoothly.',
    content: `Preparing for a Successful School Year

As our little ones get ready to head back to school, it can be an anxious time for both parents and students alike. How can we prepare for a successful start to the new school year?

You can help your child reduce anxiety by helping them understand what to expect. One of the reasons children have difficulty with back to school transitions is the fear of an unknown routine or adapting to unexpected changes.

5 Tips to Ease the Transition

1. Make the most of orientation. Giving your child a chance to see the classroom and meet important people before the first day will give them peace of mind. Take photos while you're there so you can look at them at home with your child to prepare for things like where they will sit and who their teacher is.

2. Practice the new routine. Start adjusting sleep and wake times a week or two before school starts. Practice the morning routine — getting dressed, eating breakfast, packing the backpack — so it feels familiar.

3. Talk about feelings. Let your child know it's normal to feel nervous or excited. Share your own back-to-school memories. Validate their feelings without dismissing them.

4. Create a goodbye ritual. A consistent, brief goodbye ritual (a special handshake, a hug, a phrase) gives children a sense of security and predictability.

5. Stay connected after school. Create a routine after school where your child can decompress, share about their day, and have a snack. Transition times can be overwhelming — give them space to land.

When Anxiety is More Than Typical

Some children experience anxiety that significantly impacts their ability to participate in school. If your child's anxiety is interfering with daily functioning, our therapists can help. Contact Coastal Pediatric Therapy Center at (904) 372-4070.`,
  },
  'common-myths-and-misconceptions-about-aac': {
    title: 'Common Myths and Misconceptions About AAC',
    date: 'September 11, 2020',
    category: 'Speech Therapy',
    excerpt: "It's AAC awareness month! AAC (Augmentative and Alternative Communication) is an intervention approach using manual signs, communication boards, and devices to aid communication.",
    content: `What is AAC?

It's Augmentative and Alternative Communication (AAC) awareness month! AAC is an intervention approach that utilizes manual signs, communication boards, and computerized devices that speak and aid in the child's full communication abilities (requesting, protesting, commenting, and making choices).

Common Myths About AAC

Myth #1: AAC hinders verbal speech development
Fact: Research has shown that AAC can actually improve vocabulary understanding and overall verbal speech development.

Myth #2: Only non-verbal children need AAC
Fact: Individuals who are verbal can benefit from AAC usage to increase communication understanding, intelligibility with communication partners, and reduce communication breakdowns.

Myth #3: Children have to be a certain age to begin using AAC
Fact: There is no minimum age for AAC. Research supports introduction of AAC as early as possible when a child shows communication needs.

Myth #4: Using AAC means giving up on speech
Fact: AAC is used alongside speech, not instead of it. The goal is always to maximize overall communication, which may include verbal speech, signs, pictures, and/or devices.

Myth #5: AAC is too complicated for young children
Fact: AAC systems can be as simple as a few pictures on a board or as complex as a speech-generating device. Our SLPs match the system to the child's needs and abilities.

Is AAC Right for Your Child?

If your child has difficulty communicating verbally — whether due to autism, apraxia, cerebral palsy, Down syndrome, or other conditions — an AAC evaluation may be beneficial. Contact Coastal Pediatric Therapy Center at (904) 372-4070 to learn more.`,
  },
  'phonological-disorders-tan-we-do-play-a-dame': {
    title: 'Phonological Disorders: "Tan we do play a dame?"',
    date: 'September 11, 2020',
    category: 'Speech Therapy',
    excerpt: 'Phonological disorders focus on predictable, rule-based errors that affect more than one sound. Learn about common patterns and how speech therapy can help.',
    content: `What Are Phonological Disorders?

According to the American Speech-Language and Hearing Association, "phonological disorders focus on predictable, rule-based errors (e.g., fronting, stopping, and final consonant deletion) that affect more than one sound."

The title of this post — "Tan we do play a dame?" — is a perfect example. A child with phonological fronting replaces back sounds (/k/, /g/) with front sounds (/t/, /d/). So "Can we go play a game?" becomes "Tan we do play a dame?"

Common Phonological Patterns

- Fronting: Replacing back sounds (/k/, /g/) with front sounds (/t/, /d/)
- Stopping: Replacing fricatives (/f/, /s/, /sh/) with stop sounds (/p/, /t/, /d/)
- Final Consonant Deletion: Leaving off the last sound of words ("ca" for "cat")
- Cluster Reduction: Simplifying consonant clusters ("top" for "stop")

Treatment Approaches

There are many different treatment approaches your speech pathologist may use:

Minimal Pairs Approach: Using pairs of words that differ by only one sound. This is used to establish contrasts not present in the child's phonological system (e.g., "light" vs. "white," "key" vs. "tea").

Cycles Approach: Designed for children with highly unintelligible speech who have extensive omissions and substitutions. During each cycle, one or more phonological patterns are targeted.

When to Seek Help

By age 3, children should be understood by strangers about 75% of the time. By age 4, speech should be mostly clear to anyone. If your child's speech is difficult to understand beyond these ages, a speech-language pathology evaluation is recommended.

Contact Coastal Pediatric Therapy Center at (904) 372-4070 to schedule an evaluation in Jacksonville Beach or Mandarin, FL.`,
  },
  'is-it-ok-if-my-baby-always-holds-their-head-tilted-to-the-same-side': {
    title: 'Is It Ok if My Baby Always Holds Their Head Tilted to the Same Side?',
    date: 'September 11, 2020',
    category: 'Physical Therapy',
    excerpt: 'Holding a head tilted to the same side or always looking in one direction could be a sign your child has Torticollis — and early physical therapy can help.',
    content: `Head Tilting in Babies

Just shortly after a baby is born, they develop the ability to turn their heads to both sides equally. Holding a head tilted to the same side or always looking in one direction could be a sign your child has a condition called Torticollis.

What is Torticollis?

Torticollis is the inability to straighten or turn the head to each side equally. Torticollis is the third most common congenital musculoskeletal anomaly in children and will generally be present in the first week to 10 days after birth, although most people notice this in their baby/child in the first two months.

Signs to Watch For

- Baby consistently turns head to only one side
- Head tilts to one side while the chin points to the other
- A small lump or mass on one side of the neck
- Difficulty breastfeeding on one side
- Flat spot developing on one side of the head

What Should I Do?

If you think your child may have torticollis, talk to your pediatrician and get a referral for a physical therapy evaluation and treatment.

The Good News

If discovered early and treatment is implemented, most cases of Torticollis can be corrected with no lasting effects. Physical therapy includes gentle stretching, strengthening exercises, and positioning recommendations to use at home.

Don't wait — early intervention leads to the best outcomes. Contact Coastal Pediatric Therapy Center at (904) 372-4070 to schedule an evaluation at our Jacksonville Beach or Mandarin locations.`,
  },
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} | Coastal Pediatric Therapy Blog`,
    description: post.excerpt,
  }
}

export function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Coastal Pediatric Therapy Center',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Coastal Pediatric Therapy Center',
      url: 'https://coastaltherapy.net',
    },
    mainEntityOfPage: `https://coastaltherapy.net/coastal-therapy-blog/${slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
        {/* Header */}
        <section style={{ backgroundColor: '#1e7faa', color: '#fff', padding: '3rem 1.5rem' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.75rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link>
              {' › '}
              <Link href="/coastal-therapy-blog" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Blog</Link>
              {' › '}{post.category}
            </p>
            <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, lineHeight: 1.25, marginBottom: '1rem' }}>{post.title}</h1>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{post.date} · {post.category}</p>
          </div>
        </section>

        {/* Content */}
        <article style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 1.5rem' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '2.5rem' }}>
            {post.content.split('\n\n').map((block, i) => {
              if (!block.trim()) return null
              const isHeading = !block.startsWith('-') && block.length < 80 && !block.includes('.')
              const isList = block.split('\n').every(l => l.startsWith('-'))
              if (isList) {
                return (
                  <ul key={i} style={{ margin: '0 0 1.25rem 1.25rem', padding: 0 }}>
                    {block.split('\n').filter(Boolean).map((item, j) => (
                      <li key={j} style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.75, marginBottom: '0.4rem' }}>{item.replace(/^-\s*/, '')}</li>
                    ))}
                  </ul>
                )
              }
              if (isHeading) {
                return <h2 key={i} style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1e3a5f', margin: '2rem 0 0.75rem' }}>{block}</h2>
              }
              return <p key={i} style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.8, marginBottom: '1.25rem' }}>{block}</p>
            })}
          </div>

          {/* Back link */}
          <div style={{ marginTop: '2rem' }}>
            <Link href="/coastal-therapy-blog" style={{ color: '#1e7faa', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
              ← Back to Blog
            </Link>
          </div>
        </article>

        {/* CTA */}
        <section style={{ backgroundColor: '#1e7faa', color: '#fff', padding: '3rem 1.5rem', textAlign: 'center', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>Ready to get your child evaluated?</h2>
          <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>Serving Jacksonville Beach and Mandarin, FL since 1996.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/new-patient-request-form" style={{ padding: '0.75rem 2rem', backgroundColor: '#fff', color: '#1e7faa', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>Request an Evaluation</Link>
            <a href="tel:9043724070" style={{ padding: '0.75rem 2rem', border: '2px solid #fff', color: '#fff', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>Call (904) 372-4070</a>
          </div>
        </section>
      </div>
    </>
  )
}
