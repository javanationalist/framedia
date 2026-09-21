import { PortfolioItem, Project, Profile, CreativePrinciple, AIEthicsItem, InclusivityItem, SiteContentItem, MediaItem } from '../types';

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Monolith: Architectural Identity & Spatial Media',
    slug: 'monolith-architectural-identity',
    category: 'Branding',
    description: 'A contemporary identity system and generative signage system for a brutalist cultural pavilion in Zurich.',
    year: '2025',
    thumbnail_url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    client: 'Kunsthalle Helvetia',
    award: 'ADC Gold 2025',
    published: true,
    gallery_images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f7?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'port-2',
    title: 'Echoes of the Solstice: Sensory Short Film',
    slug: 'echoes-of-the-solstice',
    category: 'Film',
    description: 'A 16mm poetic documentary exploring nocturnal flora resilience amidst urban light encroachment.',
    year: '2025',
    thumbnail_url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
    client: 'Nordic Cinema Fund',
    award: 'Rotterdam IFF Official Selection',
    published: true,
    gallery_images: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'port-3',
    title: 'Kinetic Dialect: Interactive Typography Engine',
    slug: 'kinetic-dialect',
    category: 'Creative Technology',
    description: 'An open-source generative typography experiment mapping vocal inflection and multilingual phonetics into real-time variable vector glyphs.',
    year: '2024',
    thumbnail_url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    client: 'TypoGraphic Biennale',
    award: 'Awwwards Site of the Month',
    published: true,
    gallery_images: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'port-4',
    title: 'Verdant Futures: Circular Design Campaign',
    slug: 'verdant-futures',
    category: 'Campaign',
    description: 'Multi-channel visual and tactile campaign highlighting regenerative agriculture with biodegradable screen-printed materials and AR storytelling.',
    year: '2024',
    thumbnail_url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop',
    client: 'Terra Biome Collective',
    published: true,
    gallery_images: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'port-5',
    title: 'Form & Silence: Editorial Photography Monograph',
    slug: 'form-and-silence',
    category: 'Photography',
    description: 'A 280-page dual-tone monograph documenting sacred modernist concrete structures across the Mediterranean coastline.',
    year: '2024',
    thumbnail_url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    client: 'Phaidon / Framedia Press',
    published: true,
    gallery_images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'port-6',
    title: 'Synthetica: Fluid Digital Platform & Commerce',
    slug: 'synthetica-digital-platform',
    category: 'Digital',
    description: 'Immersive 3D web experience and accessible commerce interface for an avant-garde sustainable fashion label.',
    year: '2025',
    thumbnail_url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    client: 'Synthetica Studios Paris',
    published: true,
    gallery_images: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop'
    ]
  }
];

export const INITIAL_PROJECT: Project = {
  id: 'proj-flagship-1',
  title: 'Frametive: The Responsive Heritage Initiative',
  slug: 'frametive-heritage',
  subtitle: 'A Flagship Cultural Memory & Creative AI Practice',
  description: 'Frametive is Framedia Creative’s cross-disciplinary research and production initiative merging ethical artificial intelligence, tactile archive restoration, and generative audiovisual installation to preserve endangered indigenous textile oral histories.',
  objectives: [
    'Preserve over 400 vulnerable oral weaving narratives through lossless spatial audio and high-fidelity photogrammetry.',
    'Train ethically bounded, localized generative models with 100% elder consent and attribution protocols.',
    'Design an open-access touring tactile installation that communicates cultural heritage through haptic soundscapes.',
    'Establish an equitable royalty and collective ownership governance model for community contributors.'
  ],
  concept: 'The core concept investigates "tactile resonance" — treating oral storytelling not as static historical transcripts, but as dynamic, living creative media. By pairing high-definition macro fiber imagery with algorithmic audio synthesis, Frametive translates weaving patterns into auditory landscapes.',
  process: 'The three-stage iterative methodology spanned eight months of on-site co-design workshops, iterative acoustic recording, collaborative linguistic transcription, and real-time shader development with community textile masters.',
  production: 'Produced using custom-built spatial microphone arrays, hand-crafted timber acoustic resonators, and a proprietary zero-telemetry edge computing system ensuring that sensitive cultural recordings remain sovereign and uncompromised.',
  outcomes: [
    'Over 14,000 physical visitors engaged across three international museum exhibitions.',
    '100% retention of cultural ownership retained by partner communities via cooperative licensing.',
    'Featured as a benchmark case study at the UNESCO Global Forum on Ethics in Creative AI.',
    'Received the 2025 Prix Ars Electronica Award of Distinction.'
  ],
  cover_image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1400&auto=format&fit=crop',
  gallery_images: [
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f7?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop'
  ],
  timeline: [
    { phase: '01. Co-Design & Elder Councils', period: 'Jan – Mar 2025', details: 'Listening circles, consent framework definition, protocol agreements.' },
    { phase: '02. Field Capture & Sonics', period: 'Apr – May 2025', details: 'Spatial audio documentation, multispectral macro photography, haptic modeling.' },
    { phase: '03. Algorithmic Synthesis & Rigging', period: 'Jun – Jul 2025', details: 'Ethical model training, edge hardware assembly, acoustic enclosure testing.' },
    { phase: '04. Premiere & Public Exhibition', period: 'Aug – Nov 2025', details: 'Touring exhibition launch, public lectures, participatory community workshops.' }
  ],
  team_credits: [
    { role: 'Creative Direction & Concept', name: 'Elena Rostova' },
    { role: 'Ethical AI & Architecture', name: 'Marcus Vance' },
    { role: 'Spatial Sound Design', name: 'Dr. Soraya Lin' },
    { role: 'Community Co-Design Lead', name: 'Kaelen O\'Connor' },
    { role: 'Computational Media Engineer', name: 'Amara Diallo' }
  ],
  published: true
};

export const INITIAL_PRINCIPLES: CreativePrinciple[] = [
  {
    id: 'principle-1',
    number: 1,
    title: 'Be Curious',
    description: 'Relentless inquiry is the catalyst for genuine novelty. We ask questions that dismantle comfortable assumptions and look beyond industry echo chambers to uncover dormant possibilities.',
    quote: 'The question is always more fertile than the definitive answer.',
    image_url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop',
    published: true,
    sort_order: 1
  },
  {
    id: 'principle-2',
    number: 2,
    title: 'Be Brave',
    description: 'Safe work is invisible work. True craftsmanship requires the conviction to pursue unverified ideas, reject aesthetic complacency, and stand behind uncompromised creative choices.',
    quote: 'Daring is not the absence of doubt, but the refusal to be paralyzed by safety.',
    image_url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
    published: true,
    sort_order: 2
  },
  {
    id: 'principle-3',
    number: 3,
    title: 'Be Observant',
    description: 'Culture breathes in the margins. We practice deep noticing—listening to the cadence of language, the tension of negative space, and the subtle shifts in human behavior before placing the first pixel.',
    quote: 'Observation transforms the everyday into the extraordinary.',
    image_url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
    published: true,
    sort_order: 3
  },
  {
    id: 'principle-4',
    number: 4,
    title: 'Be Experimental',
    description: 'Treat the studio as a laboratory. We prototype vigorously, celebrate constructive failures, and collide dissimilar mediums—blending print tradition with generative computation.',
    quote: 'An experiment that fails still expands the map of what is known.',
    image_url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    published: true,
    sort_order: 4
  },
  {
    id: 'principle-5',
    number: 5,
    title: 'Be Human',
    description: 'Technology is an instrument; human emotion is the resonance. We reject synthetic superficiality in favor of warmth, visceral texture, vulnerability, and genuine human empathy.',
    quote: 'If it doesn’t move a human heart, technical perfection is meaningless.',
    image_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    published: true,
    sort_order: 5
  },
  {
    id: 'principle-6',
    number: 6,
    title: 'Be Collaborative',
    description: 'The myth of the lone creative genius is obsolete. The most transcendent work arises from polyphonic friction—where filmmakers, ethicists, developers, and communities create in mutual dialogue.',
    quote: 'Diversity of thought is our primary design material.',
    image_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
    published: true,
    sort_order: 6
  },
  {
    id: 'principle-7',
    number: 7,
    title: 'Be Critical',
    description: 'We interrogate the provenance, the environmental footprint, and the societal ripple effects of every narrative we produce. Craft without criticality is mere decoration.',
    quote: 'To create responsibly is to question who benefits and who is silenced.',
    image_url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    published: true,
    sort_order: 7
  },
  {
    id: 'principle-8',
    number: 8,
    title: 'Be Inclusive',
    description: 'Universal accessibility is an aesthetic imperative, not a compliance checkbox. We design across cognitive, physical, linguistic, and cultural spectrums from the very first spark.',
    quote: 'When design includes everyone, it unlocks dimensions previously unimagined.',
    image_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
    published: true,
    sort_order: 8
  },
  {
    id: 'principle-9',
    number: 9,
    title: 'Be Responsible',
    description: 'With modern generative tools comes extraordinary communicative power. We champion explicit attribution, transparency, environmental frugality, and sovereign intellectual property.',
    quote: 'Ethics is the compass that guides technical velocity.',
    image_url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
    published: true,
    sort_order: 9
  },
  {
    id: 'principle-10',
    number: 10,
    title: 'Be Creative',
    description: 'Beyond formulas, metrics, and algorithmic certainty lies the inexplicable joy of synthesis. We make the unimaginable tangible, giving shape to stories that define tomorrow.',
    quote: 'Creativity is our ultimate declaration of purpose and connection.',
    image_url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1000&auto=format&fit=crop',
    published: true,
    sort_order: 10
  }
];

export const INITIAL_TEAM: Profile[] = [
  {
    id: 'team-1',
    name: 'Elena Rostova',
    email: 'elena@framedia.creative',
    role: 'Founder & Executive Creative Director',
    bio: 'Former editorial art director at MOMA & Wallpaper*. Specializing in spatial narrative, typography systems, and progressive brand identities with two decades of international acclaim.',
    skills: ['Creative Direction', 'Typography', 'Spatial Design', 'Brand Strategy', 'Editorial Curation'],
    avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    social_links: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'team-2',
    name: 'Marcus Vance',
    email: 'marcus@framedia.creative',
    role: 'Head of AI & Emerging Systems',
    bio: 'Computational artist and technologist researching alignment, generative acoustics, and responsible intelligence. Former researcher at Media Lab Europe.',
    skills: ['Responsible AI', 'Generative Shaders', 'Audio Synthesis', 'System Architecture', 'Ethical Governance'],
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    social_links: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'team-3',
    name: 'Amara Diallo',
    email: 'amara@framedia.creative',
    role: 'Principal Digital Architect & Experience Lead',
    bio: 'Pioneering accessible multi-sensory web experiences. Obsessed with micro-interactions, responsive typography, and tactile digital interfaces.',
    skills: ['Interaction Design', 'WebGL / Shaders', 'Design Systems', 'WCAG AAA Accessibility', 'Fullstack Systems'],
    avatar_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    social_links: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      website: 'https://framedia.creative'
    }
  },
  {
    id: 'team-4',
    name: 'Kaelen O\'Connor',
    email: 'kaelen@framedia.creative',
    role: 'Director of Cultural Strategy & Inclusivity',
    bio: 'Cultural anthropologist and community advocate ensuring equitable storytelling, ethical consent protocols, and linguistic representation across all creative initiatives.',
    skills: ['Inclusive Research', 'Cultural Protocol', 'Community Co-Design', 'Editorial Writing', 'Storytelling Strategy'],
    avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    social_links: {
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 'team-5',
    name: 'Dr. Soraya Lin',
    email: 'soraya@framedia.creative',
    role: 'Lead Cinematographer & Film Director',
    bio: 'Award-winning documentarian focused on environmental acoustics and human condition cinema. Directs experimental commercials and spatial video installations.',
    skills: ['Cinematography', '16mm & Large Format', 'Spatial Audio', 'Color Grading', 'Documentary Narrative'],
    avatar_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    social_links: {
      instagram: 'https://instagram.com',
      website: 'https://framedia.creative'
    }
  }
];

export const INITIAL_AI_ETHICS: AIEthicsItem[] = [
  {
    id: 'eth-1',
    title: 'Human Creativity First',
    content: 'We view generative artificial intelligence strictly as an instrument of human intentionality—a prosthetic for the imagination, never an automated replacement for human vulnerability, lived experience, or authorial conviction.',
    key_points: [
      'Authentic human direction guides every prompt, curation, and final sign-off.',
      'No client project is delivered purely through autonomous synthetic pipelines.',
      'Creative leadership remains rooted in human emotional nuance.'
    ],
    sort_order: 1
  },
  {
    id: 'eth-2',
    title: 'Transparency & Attribution',
    content: 'We uphold absolute clarity regarding where, how, and why synthetic tools are utilized in our workflow. Clients and audiences receive complete transparency reports disclosing algorithmic assistance.',
    key_points: [
      'Proactive client disclosure on all AI-assisted assets and workflows.',
      'Standardized metadata tagging for synthetic and hybrid media outputs.',
      'Clear attribution to underlying datasets, models, and inspiration sources.'
    ],
    sort_order: 2
  },
  {
    id: 'eth-3',
    title: 'Consent & Data Sovereignty',
    content: 'We refuse to utilize datasets trained on scraped work without artist knowledge or consent. When fine-tuning bespoke models, we work exclusively with commissioned, licensed, or sovereign community data.',
    key_points: [
      'Strict opt-in protocols for any artist contributions to training corpuses.',
      'Data localization ensuring sensitive assets never feed public commercial foundation models.',
      'Community sovereignty over collective oral and visual heritages.'
    ],
    sort_order: 3
  },
  {
    id: 'eth-4',
    title: 'Bias Interrogation & Representation',
    content: 'Foundational AI models replicate historical prejudices and homogenized visual stereotypes. We proactively audit outputs for cultural flattening, demographic erasure, and systemic tokenism.',
    key_points: [
      'Rigorous counter-prompting and adversarial testing for representation equity.',
      'Collaboration with cultural consultants to challenge baseline algorithmic biases.',
      'Refusal to generate dehumanizing, stereotypical, or deceptive synthetic personas.'
    ],
    sort_order: 4
  },
  {
    id: 'eth-5',
    title: 'Responsible Automation & Labor Dignity',
    content: 'We advocate for fair remuneration for creators and reject the race-to-the-bottom devaluation of artistic craft. AI is deployed to alleviate mundane manual tasks, not to eliminate creative livelihoods.',
    key_points: [
      'Commitment to equitable living wages and creator rights across our ecosystem.',
      'Reinvestment of efficiency gains into experimental research and community grants.',
      'Mentorship programs bridging emerging talent into ethical AI literacy.'
    ],
    sort_order: 5
  },
  {
    id: 'eth-6',
    title: 'How inFra Follows These Principles',
    content: 'Our bespoke AI assistant, inFra, operates under strict contextual boundaries. Powered by verified studio knowledge, it clearly demarcates between factual Framedia capabilities and speculative creative dialogue.',
    key_points: [
      'Grounding in live studio archives to prevent factual hallucinations.',
      'Transparent disclosure: inFra always identifies itself as an assistant, never simulating human personhood.',
      'Zero-telemetry policy: conversations are never used to train external public LLMs.'
    ],
    sort_order: 6
  }
];

export const INITIAL_INCLUSIVITY: InclusivityItem[] = [
  {
    id: 'inc-1',
    title: 'Multi-Perspective Representation',
    content: 'Stories should reflect the vast complexity of human life. We deliberately seek out and amplify underrepresented creators, diaspora narratives, neurodiverse perspectives, and indigenous storytellers.',
    pillars: [
      'Casting and crew composition with intentional demographic equity.',
      'Co-authorship rather than extractive documentation of community stories.',
      'Decentering Western-centric visual tropes in global campaigns.'
    ],
    sort_order: 1
  },
  {
    id: 'inc-2',
    title: 'Universal Design & Digital Accessibility',
    content: 'Accessibility is neither an afterthought nor a secondary compliance burden; it is an intrinsic element of high-craft design. We build digital spaces that welcome all senses, cognitive processing styles, and assistive technologies.',
    pillars: [
      'Targeting WCAG 2.2 AA / AAA standards across typography, contrast, and navigation.',
      'Thoughtfully engineered screen-reader landmarks, transcripts, and alternative descriptions.',
      'Reduced motion toggles and cognitive fatigue reduction in user flow architecture.'
    ],
    sort_order: 2
  },
  {
    id: 'inc-3',
    title: 'Inclusive Linguistic Framing',
    content: 'Language shapes thought and sets cultural boundaries. We employ language that affirms dignity, respects evolving gender identities, honors regional dialects, and rejects ableist idioms.',
    pillars: [
      'Continuous refinement of studio editorial stylebooks and client guidelines.',
      'Multilingual design thinking that adapts for variable script direction and typographic density.',
      'Plain-language summaries for technical, legal, and conceptual whitepapers.'
    ],
    sort_order: 3
  },
  {
    id: 'inc-4',
    title: 'Cultural Awareness & Non-Extractive Storytelling',
    content: 'We believe that telling someone else’s story is a profound privilege that demands deep humility, prolonged listening, and reciprocal value exchange.',
    pillars: [
      'Pre-production community roundtables and consent pacts.',
      'Revenue sharing and collective licensing models for grassroots cultural contributors.',
      'Refusal to sensationalize grief, hardship, or systemic struggle for brand spectacle.'
    ],
    sort_order: 4
  }
];

export const INITIAL_SITE_CONTENT: SiteContentItem[] = [
  { id: 'sc-1', section: 'hero', key: 'title', value: 'FRAMEDIA CREATIVE' },
  { id: 'sc-2', section: 'hero', key: 'tagline', value: 'Creative production, digital media, communication, design, AI ethics, and inclusive creative practices.' },
  { id: 'sc-3', section: 'hero', key: 'description', value: 'Framedia Creative creates meaningful experiences through media, creativity, technology, and communication.' },
  { id: 'sc-4', section: 'philosophy', key: 'headline', value: 'We design where tactile craft meets algorithmic conscience.' },
  { id: 'sc-5', section: 'philosophy', key: 'body', value: 'At Framedia Creative, we believe that true modernity is not reckless velocity, but considered depth. In an era saturated with synthetic noise, we craft digital and physical media that possess texture, moral clarity, and enduring resonance.' },
  { id: 'sc-6', section: 'about', key: 'mission', value: 'To shape culture by synthesizing world-class design, cinematic media, and ethical technology for brands and institutions shaping a more equitable tomorrow.' },
  { id: 'sc-7', section: 'about', key: 'vision', value: 'A creative media ecosystem where technical prowess elevates human dignity, inclusivity is inherent to beauty, and artificial intelligence remains an accountable tool for human imagination.' },
  { id: 'sc-8', section: 'contact', key: 'email', value: 'hello@framedia.creative' },
  { id: 'sc-9', section: 'contact', key: 'location', value: 'Zurich / London / Digital' },
  { id: 'sc-10', section: 'contact', key: 'phone', value: '+41 44 289 91 00' }
];

export const INITIAL_MEDIA: MediaItem[] = [
  {
    id: 'med-1',
    name: 'monolith-exterior.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    type: 'image/jpeg',
    size: 2450000,
    created_at: '2025-01-15'
  },
  {
    id: 'med-2',
    name: 'frametive-heritage-cover.jpg',
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1400&auto=format&fit=crop',
    type: 'image/jpeg',
    size: 3120000,
    created_at: '2025-02-10'
  },
  {
    id: 'med-3',
    name: 'solstice-film-frame.jpg',
    url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
    type: 'image/jpeg',
    size: 1890000,
    created_at: '2025-02-18'
  },
  {
    id: 'med-4',
    name: 'kinetic-typography.jpg',
    url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    type: 'image/jpeg',
    size: 2150000,
    created_at: '2025-03-01'
  }
];
