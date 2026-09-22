import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Speech and Language Milestones | Age-Appropriate Evaluation | Coastal Pediatric Therapy',
  description: 'Review age-appropriate speech and language milestones from 0–7+ years. Coastal Pediatric Therapy Center in Jacksonville Beach and Mandarin, FL helps children reach their full communication potential.',
}

const milestones = [
  {
    age: '0–6 Months',
    items: [
      'Makes cooing sounds',
      'Quiets if crying when hearing a voice',
      'Localizes sound by turning head',
      'Listens to speech and music',
      'Notices toys that make sound',
      'Makes speech-like babbling sounds /b/, /p/, & /m/ (3–6 mos)',
      'Uses sound to indicate wants (3–6 mos)',
    ],
  },
  {
    age: '7–12 Months',
    items: [
      'Turns and looks in the direction of sounds',
      'Understands & responds to own name',
      'Listens to & imitates sounds',
      'Recognizes words for common items and people like "truck", "cup", "juice", "daddy"',
      'Uses large variety of sounds in babbling',
      'Uses speech sounds rather than crying to get attention',
      'Listens to songs and stories',
      'Babbles long strings of sounds; begins to change babbling to jargon',
      'Vocabulary of 1 to 3 words',
      'Plays games like peek-a-boo and pat-a-cake',
      'Looks when you point; uses gestures like waving bye, reaching for "up", and shaking head for "no"',
    ],
  },
  {
    age: '13–18 Months',
    items: [
      'Uses adult-like intonation patterns',
      'Uses echolalia and jargon',
      'Omits some initial consonants and almost all final consonants',
      'Produces mostly unintelligible speech',
      'Follows simple commands',
      'Receptively identifies 1 to 3 body parts',
      'Shows interest in pictures',
      'Has expressive vocabulary of 3 to 20 words',
      'Combines gestures and vocalization',
      'Makes requests for more of desired items',
    ],
  },
  {
    age: '19–24 Months',
    items: [
      'Uses words more frequently than jargon',
      'Has expressive vocabulary of 50–75 words',
      'Receptive vocabulary of 300 words',
      'Starts to combine nouns & verbs',
      'Begins to use pronouns (me, you, my)',
      'Approximately 25–50% intelligible to strangers',
      'Answers "What\'s that?" questions',
      'Enjoys listening to stories',
      'Knows 3–5 body parts',
      'Accurately names familiar objects',
    ],
  },
  {
    age: '2–3 Years',
    items: [
      'Speech is 50–75% intelligible',
      'Understands "one" & "all"',
      'Requests items by name',
      'Identifies several body parts',
      'Follows simple commands & answers simple questions',
      'Gives first name, holds up fingers to tell age',
      'Enjoys listening to short stories, songs & rhymes',
      'Asks 1–2 word questions; combines nouns and verbs ("mommy go")',
      'Has approximately 450 word vocabulary',
      'Uses vowels correctly; consistently uses initial consonants',
      'Produces simple sentences ("I want book")',
      'Forms some plurals by adding "s"',
      'Understands simple time concepts: "last night", "tomorrow"',
    ],
  },
  {
    age: '3–4 Years',
    items: [
      'Understands object functions and difference in meanings',
      'Follows 2 and 3 step commands',
      'Asks & answers questions; uses language to express emotion',
      'Repeats 6–13 syllable sentences accurately',
      'Uses up to 5 word sentences',
      'Increases vocabulary to approximately 1,000 words',
      'Masters 50% consonants; speech is 80% intelligible',
      'Tells two events in chronological order',
      'Engages in conversations; uses contractions',
    ],
  },
  {
    age: '4–5 Years',
    items: [
      'Understands concept of numbers up to 3',
      'Recognizes 1–4 colors; recognizes shapes',
      'Counts to 10',
      'Uses mostly grammatically correct sentences with 4–6 words',
      'Answers 2-part questions; asks many "what", "where", "who", "why" questions',
      'Enjoys rhymes & rhythms',
      'Speech intelligible to strangers',
      'Talks about experiences at school, friends\' homes',
      'Accurately relays long story; uses past tense correctly',
    ],
  },
  {
    age: '5–6 Years',
    items: [
      'Names 6 colors & at least 3 shapes',
      'Follows 3-part commands; understands "same" and "different"',
      'Uses past & future tense; uses conjunctions',
      'Knows spatial relations: "on top", "behind", "far", "near"',
      'Defines objects by their use',
      'Sequentially names days of week; counts to 30',
      'Exchanges information and asks questions',
      'Sings entire song and recites nursery rhymes',
      'Communicates easily with adults & children; uses appropriate grammar',
    ],
  },
  {
    age: '6–7 Years',
    items: [
      'Names letters, numbers, and currencies',
      'Sequences numbers; understands left and right',
      'Uses increasingly more complex descriptions',
      'Engages in conversations with extensive vocabulary',
      'Uses sentences with 6 or more words',
    ],
  },
]

const faqs = [
  {
    q: 'What are the speech milestones for a 2-year-old?',
    a: 'By age 2, children should have an expressive vocabulary of 50–75 words, start combining nouns and verbs, be 25–50% intelligible to strangers, and answer simple "What\'s that?" questions.',
  },
  {
    q: 'When should I be concerned about my child\'s speech development?',
    a: 'If your child is not meeting the milestones for their age group, or if you notice a regression in skills, contact a speech-language pathologist. Early intervention leads to the best outcomes.',
  },
  {
    q: 'Does Coastal Pediatric Therapy Center offer speech therapy evaluations?',
    a: 'Yes. Our licensed speech-language pathologists provide comprehensive evaluations for children of all ages at our Jacksonville Beach and Mandarin locations. Call (904) 372-4070 to get started.',
  },
]

export default function SpeechMilestonesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        name: 'Children\'s Speech and Language Milestones',
        description: 'Age-appropriate speech and language milestones from birth through age 7, from Coastal Pediatric Therapy Center in Jacksonville, FL.',
        url: 'https://coastaltherapy.net/speech-and-language-milestones',
        about: { '@type': 'MedicalCondition', name: 'Speech and Language Delay' },
        publisher: {
          '@type': 'MedicalOrganization',
          name: 'Coastal Pediatric Therapy Center',
          telephone: '(904) 372-4070',
          url: 'https://coastaltherapy.net',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://coastaltherapy.net' },
          { '@type': 'ListItem', position: 2, name: 'Parent Resources', item: 'https://coastaltherapy.net/parent-resources' },
          { '@type': 'ListItem', position: 3, name: 'Speech and Language Milestones', item: 'https://coastaltherapy.net/speech-and-language-milestones' },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
        {/* Hero */}
        <section style={{ backgroundColor: '#1e7faa', color: '#fff', padding: '3rem 1.5rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.5rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link>
              {' › '}
              <Link href="/parent-resources" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Parent Resources</Link>
              {' › '}Speech & Language Milestones
            </p>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
              Children&apos;s Speech &amp; Language Milestones
            </h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', lineHeight: 1.6 }}>
              Use this guide to review your child&apos;s age-appropriate communication development. Concerned about a delay? Our speech-language pathologists are here to help.
            </p>
            <Link href="/new-patient-request-form" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 2rem', backgroundColor: '#fff', color: '#1e7faa', fontWeight: 700, borderRadius: '6px', textDecoration: 'none', fontSize: '0.9rem' }}>
              Request an Evaluation
            </Link>
          </div>
        </section>

        {/* Milestones */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {milestones.map((group) => (
              <div key={group.age} style={{ backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <div style={{ backgroundColor: '#1e7faa', padding: '0.75rem 1.5rem' }}>
                  <h2 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>{group.age}</h2>
                </div>
                <ul style={{ margin: 0, padding: '1.25rem 1.5rem', listStyle: 'none' }}>
                  {group.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.75rem', padding: '0.35rem 0', fontSize: '0.95rem', color: '#374151', borderBottom: i < group.items.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                      <span style={{ color: '#1e7faa', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e3a5f', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', padding: '1.25rem 1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1e3a5f', marginBottom: '0.5rem' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: '#1e7faa', color: '#fff', padding: '3rem 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Is your child missing milestones?</h2>
          <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>Early intervention makes all the difference. Our therapists serve Jacksonville Beach and Mandarin, FL.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/new-patient-request-form" style={{ padding: '0.75rem 2rem', backgroundColor: '#fff', color: '#1e7faa', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>
              Get Started
            </Link>
            <a href="tel:9043724070" style={{ padding: '0.75rem 2rem', border: '2px solid #fff', color: '#fff', fontWeight: 700, borderRadius: '6px', textDecoration: 'none' }}>
              Call (904) 372-4070
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
