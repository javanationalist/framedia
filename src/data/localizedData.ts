import { Language } from '../types/language';
import {
  CreativePrinciple,
  Project,
  PortfolioItem,
  Profile,
  AIEthicsItem,
  InclusivityItem,
} from '../types';

// Localized 10 Being Creative Principles
export const LOCALIZED_PRINCIPLES: Record<Language, Record<number, Partial<CreativePrinciple>>> = {
  id: {
    1: {
      title: 'Be Curious — Miliki Rasa Ingin Tahu',
      description:
        'Rasa ingin tahu adalah pemicu awal dari setiap proses inovasi. Kami tidak puas hanya dengan jawaban yang sudah tersedia di permukaan; kami menyelami konteks sosial, budaya, dan teknologi untuk menemukan sudut pandang yang belum terjamah.',
      quote: '"Kreativitas dimulai saat kita berani bertanya hal yang belum pernah terpikirkan oleh orang lain."',
    },
    2: {
      title: 'Think Different — Berpikir Berbeda',
      description:
        'Karya yang memiliki dampak nyata tidak pernah lahir dari kebiasaan meniru atau mengikuti arus utama. Kami secara sadar menantang cara berpikir konvensional, merombak struktur yang usang, dan menyusun kembali narasi dengan pendekatan yang segar dan otentik.',
      quote: '"Perbedaan bukanlah tujuan, melainkan keberanian untuk melihat dari sudut yang belum pernah dilihat orang lain."',
    },
    3: {
      title: 'Be Brave — Berani Mengambil Risiko',
      description:
        'Inovasi sejati menuntut keberanian untuk melangkah ke wilayah yang belum pasti. Kami tidak takut gagal dalam bereksperimen, karena setiap kegagalan membawa wawasan baru yang memperkaya karya akhir.',
      quote: '"Keberanian bukanlah ketiadaan rasa takut, melainkan keputusan untuk terus maju melampauinya."',
    },
    4: {
      title: 'Embrace Failure — Rangkul Kegagalan',
      description:
        'Kami memandang kegagalan bukan sebagai akhir, melainkan sebagai data berharga yang memperkaya pemahaman. Dalam setiap eksperimen yang tidak berjalan sesuai rencana, tersimpan petunjuk berharga untuk karya yang lebih matang.',
      quote: '"Gagal lebih cepat berarti belajar lebih cepat; merangkul kegagalan adalah fondasi dari keahlian sejati."',
    },
    5: {
      title: 'Collaborate Freely — Berkolaborasi Terbuka',
      description:
        'Karya yang luar biasa lahir dari pertemuan banyak gagasan, disiplin, dan perspektif. Kami membangun ekosistem kolaborasi yang setara dan inklusif, di mana setiap kontributor memiliki ruang untuk bersuara dan berkarya secara bermakna.',
      quote: '"Satu ide hebat dapat memicu banyak keajaiban saat dibagikan secara bebas."',
    },
    6: {
      title: 'Stay Focused — Jaga Fokus',
      description:
        'Di tengah banjir informasi dan distraksi digital, kemampuan untuk tetap fokus pada esensi karya adalah sebuah keistimewaan. Kami memprioritaskan kedalaman makna dan kualitas eksekusi di atas kecepatan atau tren sesaat.',
      quote: '"Fokus adalah seni mengetahui apa yang harus diabaikan demi menjaga kesempurnaan."',
    },
    7: {
      title: 'Practice Empathy — Terapkan Empati',
      description:
        'Teknologi dan seni hanya memiliki arti jika menyentuh kehidupan manusia. Kami menempatkan empati sebagai pusat dari setiap proses desain dan narasi, mendengarkan kebutuhan nyata dari komunitas yang kami layani.',
      quote: '"Karya yang paling menyentuh adalah karya yang lahir dari pemahaman mendalam tentang orang lain."',
    },
    8: {
      title: 'Keep Learning — Terus Belajar',
      description:
        'Dunia terus bergerak, dan pengetahuan tidak pernah final. Kami berkomitmen untuk terus memperbarui pemahaman, mempelajari metodologi baru, dan tetap rendah hati di hadapan setiap tantangan kreatif.',
      quote: '"Pikiran yang terus belajar adalah pikiran yang tidak pernah kehilangan daya ciptanya."',
    },
    9: {
      title: 'Simplify Things — Sederhanakan yang Rumit',
      description:
        'Keahlian tertinggi tercermin dari kemampuan menyederhanakan gagasan rumit menjadi sesuatu yang jernih, dapat diakses, dan bermakna. Kami menolak kerumitan yang dibuat-buat demi komunikasi yang tulus dan berdampak.',
      quote: '"Kesederhanaan adalah bentuk kecanggihan yang paling murni."',
    },
    10: {
      title: 'Act Responsibly — Bertindak Bertanggung Jawab',
      description:
        'Setiap karya yang kami hasilkan membawa konsekuensi bagi masyarakat, budaya, dan lingkungan. Kami bertanggung jawab penuh atas apa yang kami ciptakan, dengan menjunjung tinggi transparansi, etika, dan integritas profesional.',
      quote: '"Kreativitas tanpa tanggung jawab adalah kesembronoan; kreativitas yang beretika adalah kekuatan pengubah dunia."',
    },
  },
  en: {
    1: {
      title: 'Be Curious',
      description:
        'Relentless inquiry is the catalyst for genuine novelty. We ask questions that dismantle comfortable assumptions and look beyond industry echo chambers to uncover dormant possibilities.',
      quote: 'The question is always more fertile than the definitive answer.',
    },
    2: {
      title: 'Be Brave',
      description:
        'Safe work is invisible work. True craftsmanship requires the conviction to pursue unverified ideas, reject aesthetic complacency, and stand behind uncompromised creative choices.',
      quote: 'Daring is not the absence of doubt, but the refusal to be paralyzed by safety.',
    },
    3: {
      title: 'Be Observant',
      description:
        'Culture breathes in the margins. We practice deep noticing—listening to the cadence of language, the tension of negative space, and the subtle shifts in human behavior before placing the first pixel.',
      quote: 'Observation transforms the everyday into the extraordinary.',
    },
    4: {
      title: 'Be Experimental',
      description:
        'Treat the studio as a laboratory. We prototype vigorously, celebrate constructive failures, and collide dissimilar mediums—blending print tradition with generative computation.',
      quote: 'An experiment that fails still expands the map of what is known.',
    },
    5: {
      title: 'Be Human',
      description:
        'Technology is an instrument; human emotion is the resonance. We reject synthetic superficiality in favor of warmth, visceral texture, vulnerability, and genuine human empathy.',
      quote: 'If it doesn’t move a human heart, technical perfection is meaningless.',
    },
    6: {
      title: 'Be Collaborative',
      description:
        'The myth of the lone creative genius is obsolete. The most transcendent work arises from polyphonic friction—where filmmakers, ethicists, developers, and communities create in mutual dialogue.',
      quote: 'Diversity of thought is our primary design material.',
    },
    7: {
      title: 'Be Critical',
      description:
        'We interrogate the provenance, the environmental footprint, and the societal ripple effects of every narrative we produce. Craft without criticality is mere decoration.',
      quote: 'To create responsibly is to question who benefits and who is silenced.',
    },
    8: {
      title: 'Be Inclusive',
      description:
        'Universal accessibility is an aesthetic imperative, not a compliance checkbox. We design across cognitive, physical, linguistic, and cultural spectrums from the very first spark.',
      quote: 'When design includes everyone, it unlocks dimensions previously unimagined.',
    },
    9: {
      title: 'Be Responsible',
      description:
        'With modern generative tools comes extraordinary communicative power. We champion explicit attribution, transparency, environmental frugality, and sovereign intellectual property.',
      quote: 'Ethics is the compass that guides technical velocity.',
    },
    10: {
      title: 'Be Creative',
      description:
        'Beyond formulas, metrics, and algorithmic certainty lies the inexplicable joy of synthesis. We make the unimaginable tangible, giving shape to stories that define tomorrow.',
      quote: 'Creativity is our ultimate declaration of purpose and connection.',
    },
  },
};

// Localized AI Ethics
export const LOCALIZED_AI_ETHICS: Record<Language, Record<string, Partial<AIEthicsItem>>> = {
  id: {
    'eth-1': {
      title: 'Kreativitas Manusia yang Utama',
      content:
        'Kami memandang generative AI murni sebagai instrumen intensi manusia — penopang imajinasi, bukan pengganti otomatis bagi kerentanan, pengalaman hidup, atau kepengarangan manusia.',
      key_points: [
        'Arah artistik manusia yang autentik memandu setiap prompt, kurasi, dan persetujuan akhir.',
        'Tidak ada project klien yang diserahkan murni melalui jalur sintetik otonom.',
        'Kepemimpinan kreatif berakar kuat pada nuansa emosional manusia.',
      ],
    },
    'eth-2': {
      title: 'Transparansi & Atribusi',
      content:
        'Kami menjunjung kejelasan mutlak mengenai di mana, bagaimana, dan mengapa perangkat sintetik digunakan. Klien dan audiens menerima laporan transparansi komprehensif yang memaparkan bantuan algoritmik.',
      key_points: [
        'Pengungkapan proaktif kepada klien pada seluruh aset dan alur kerja berbantuan AI.',
        'Penandaan metadata terstandar untuk output media sintetik dan hibrida.',
        'Atribusi yang jelas terhadap dataset acuan, model, dan sumber inspirasi.',
      ],
    },
    'eth-3': {
      title: 'Persetujuan & Kedaulatan Data',
      content:
        'Kami menolak penggunaan dataset dari karya yang dikeruk tanpa sepengetahuan atau izin seniman. Saat menyesuaikan model khusus, kami bekerja eksklusif dengan data yang ditugaskan resmi, berlisensi, atau milik komunitas berdaulat.',
      key_points: [
        'Protokol persetujuan eksplisit untuk setiap kontribusi karya seniman ke dalam basis data pelatihan.',
        'Lokalisasi data memastikan aset sensitif tidak pernah mengalir ke model komersial publik terbuka.',
        'Kedaulatan komunitas atas warisan lisan dan visual kolektif mereka.',
      ],
    },
    'eth-4': {
      title: 'Pemeriksaan Bias & Representasi',
      content:
        'Model AI bawaan sering mereplikasi prasangka masa lalu dan stereotip visual yang seragam. Kami secara proaktif mengaudit output terhadap penyeragaman budaya, penghapusan demografi, dan tokenisme sistemik.',
      key_points: [
        'Pengujian adversarial dan counter-prompting ketat demi kesetaraan representasi.',
        'Kolaborasi bersama konsultan budaya untuk menantang bias bawaan algoritma.',
        'Penolakan tegas memproduksi persona sintetik yang mendehumanisasi atau manipulatif.',
      ],
    },
    'eth-5': {
      title: 'Otomasi Bertanggung Jawab & Martabat Tenaga Kerja',
      content:
        'Kami memperjuangkan imbalan yang adil bagi kreator dan menolak devaluasi karya seni. AI dimanfaatkan untuk meringankan tugas manual repetitif, bukan untuk menghilangkan mata pencaharian kreatif.',
      key_points: [
        'Komitmen pada upah layak dan hak-hak kreator di seluruh ekosistem kerja kami.',
        'Investasi kembali efisiensi ke dalam riset eksperimental dan hibah komunitas.',
        'Program pendampingan untuk membekali talenta baru dengan literasi AI etis.',
      ],
    },
    'eth-6': {
      title: 'Bagaimana inFra Menerapkan Prinsip Ini',
      content:
        'Asisten AI kami, inFra, beroperasi dalam batasan kontekstual yang ketat. Berbekal arsip studio terverifikasi, inFra secara jelas membedakan fakta kapabilitas Framedia dari dialog kreatif spekulatif.',
      key_points: [
        'Berakar pada arsip kerja nyata studio guna mencegah halusinasi informasi.',
        'Transparansi penuh: inFra selalu memperkenalkan diri sebagai asisten, tidak berpura-pura menjadi manusia.',
        'Kebijakan tanpa telemetri: percakapan tidak pernah dipakai melatih LLM publik eksternal.',
      ],
    },
  },
  en: {
    'eth-1': {
      title: 'Human Creativity First',
      content:
        'We view generative artificial intelligence strictly as an instrument of human intentionality—a prosthetic for the imagination, never an automated replacement for human vulnerability, lived experience, or authorial conviction.',
      key_points: [
        'Authentic human direction guides every prompt, curation, and final sign-off.',
        'No client project is delivered purely through autonomous synthetic pipelines.',
        'Creative leadership remains rooted in human emotional nuance.',
      ],
    },
    'eth-2': {
      title: 'Transparency & Attribution',
      content:
        'We uphold absolute clarity regarding where, how, and why synthetic tools are utilized in our workflow. Clients and audiences receive complete transparency reports disclosing algorithmic assistance.',
      key_points: [
        'Proactive client disclosure on all AI-assisted assets and workflows.',
        'Standardized metadata tagging for synthetic and hybrid media outputs.',
        'Clear attribution to underlying datasets, models, and inspiration sources.',
      ],
    },
    'eth-3': {
      title: 'Consent & Data Sovereignty',
      content:
        'We refuse to utilize datasets trained on scraped work without artist knowledge or consent. When fine-tuning bespoke models, we work exclusively with commissioned, licensed, or sovereign community data.',
      key_points: [
        'Strict opt-in protocols for any artist contributions to training corpuses.',
        'Data localization ensuring sensitive assets never feed public commercial foundation models.',
        'Community sovereignty over collective oral and visual heritages.',
      ],
    },
    'eth-4': {
      title: 'Bias Interrogation & Representation',
      content:
        'Foundational AI models replicate historical prejudices and homogenized visual stereotypes. We proactively audit outputs for cultural flattening, demographic erasure, and systemic tokenism.',
      key_points: [
        'Rigorous counter-prompting and adversarial testing for representation equity.',
        'Collaboration with cultural consultants to challenge baseline algorithmic biases.',
        'Refusal to generate dehumanizing, stereotypical, or deceptive synthetic personas.',
      ],
    },
    'eth-5': {
      title: 'Responsible Automation & Labor Dignity',
      content:
        'We advocate for fair remuneration for creators and reject the race-to-the-bottom devaluation of artistic craft. AI is deployed to alleviate mundane manual tasks, not to eliminate creative livelihoods.',
      key_points: [
        'Commitment to equitable living wages and creator rights across our ecosystem.',
        'Reinvestment of efficiency gains into experimental research and community grants.',
        'Mentorship programs bridging emerging talent into ethical AI literacy.',
      ],
    },
    'eth-6': {
      title: 'How inFra Follows These Principles',
      content:
        'Our bespoke AI assistant, inFra, operates under strict contextual boundaries. Powered by verified studio knowledge, it clearly demarcates between factual Framedia capabilities and speculative creative dialogue.',
      key_points: [
        'Grounding in live studio archives to prevent factual hallucinations.',
        'Transparent disclosure: inFra always identifies itself as an assistant, never simulating human personhood.',
        'Zero-telemetry policy: conversations are never used to train external public LLMs.',
      ],
    },
  },
};

// Localized Inclusivity Pillars
export const LOCALIZED_INCLUSIVITY: Record<Language, Record<string, Partial<InclusivityItem>>> = {
  id: {
    'inc-1': {
      title: 'Representasi Multi-Perspektif',
      content:
        'Karya harus mencerminkan kekayaan pengalaman manusia. Kami secara sadar merangkul dan mengangkat kreator diaspora, perspektif neurodivergen, serta narasi masyarakat adat.',
      pillars: [
        'Komposisi tim dan talent dengan kesetaraan demografis yang berkeadilan.',
        'Kemitraan setara (co-authorship), menolak penceritaan komunitas yang bersifat ekstraktif.',
        'Mendekonstruksi sudut pandang visual yang sempit dalam kampanye global.',
      ],
    },
    'inc-2': {
      title: 'Desain Universal & Aksesibilitas Digital',
      content:
        'Aksesibilitas bukanlah beban teknis tambahan, melainkan elemen hakiki dari keindahan desain tingkat tinggi. Kami membangun ruang digital yang ramah bagi seluruh indra dan cara pemrosesan kognitif.',
      pillars: [
        'Menargetkan standar WCAG 2.2 AA / AAA pada tipografi, kontras, dan kemudahan navigasi.',
        'Struktur landmark pembaca layar, transkrip, dan deskripsi alternatif gambar yang dirancang cermat.',
        'Opsi bebas gerak (reduced motion) untuk meminimalkan kelelahan kognitif pengguna.',
      ],
    },
    'inc-3': {
      title: 'Kerangka Bahasa yang Inklusif',
      content:
        'Bahasa membentuk pemikiran dan menetapkan batasan budaya. Kami menerapkan bahasa yang memuliakan martabat, menghormati identitas gender, dan menjauhi ungkapan yang merendahkan (ableist).',
      pillars: [
        'Penyempurnaan berkelanjutan atas panduan gaya editorial studio dan mitra.',
        'Pendekatan desain multibahasa yang fleksibel terhadap kepadatan tipografi aksara.',
        'Ringkasan bahasa sederhana (plain-language) untuk gagasan konseptual yang kompleks.',
      ],
    },
    'inc-4': {
      title: 'Kesadaran Budaya & Penceritaan Non-Ekstraktif',
      content:
        'Menceritakan kisah orang lain adalah amanah yang menuntut kerendahan hati, kebersediaan menyimak secara mendalam, serta pertukaran nilai yang timbal balik.',
      pillars: [
        'Diskusi pra-produksi dan kesepakatan persetujuan adat bersama masyarakat terkait.',
        'Pembagian hasil dan lisensi kolektif bagi penjaga budaya akar rumput.',
        'Menolak eksploitasi kesedihan atau perjuangan hidup demi sensasi semata.',
      ],
    },
  },
  en: {
    'inc-1': {
      title: 'Multi-Perspective Representation',
      content:
        'Stories should reflect the vast complexity of human life. We deliberately seek out and amplify underrepresented creators, diaspora narratives, neurodiverse perspectives, and indigenous storytellers.',
      pillars: [
        'Casting and crew composition with intentional demographic equity.',
        'Co-authorship rather than extractive documentation of community stories.',
        'Decentering Western-centric visual tropes in global campaigns.',
      ],
    },
    'inc-2': {
      title: 'Universal Design & Digital Accessibility',
      content:
        'Accessibility is neither an afterthought nor a secondary compliance burden; it is an intrinsic element of high-craft design. We build digital spaces that welcome all senses, cognitive processing styles, and assistive technologies.',
      pillars: [
        'Targeting WCAG 2.2 AA / AAA standards across typography, contrast, and navigation.',
        'Thoughtfully engineered screen-reader landmarks, transcripts, and alternative descriptions.',
        'Reduced motion toggles and cognitive fatigue reduction in user flow architecture.',
      ],
    },
    'inc-3': {
      title: 'Inclusive Linguistic Framing',
      content:
        'Language shapes thought and sets cultural boundaries. We employ language that affirms dignity, respects evolving gender identities, honors regional dialects, and rejects ableist idioms.',
      pillars: [
        'Continuous refinement of studio editorial stylebooks and client guidelines.',
        'Multilingual design thinking that adapts for variable script direction and typographic density.',
        'Plain-language summaries for technical, legal, and conceptual whitepapers.',
      ],
    },
    'inc-4': {
      title: 'Cultural Awareness & Non-Extractive Storytelling',
      content:
        'We believe that telling someone else’s story is a profound privilege that demands deep humility, prolonged listening, and reciprocal value exchange.',
      pillars: [
        'Pre-production community roundtables and consent pacts.',
        'Revenue sharing and collective licensing models for grassroots cultural contributors.',
        'Refusal to sensationalize grief, hardship, or systemic struggle for brand spectacle.',
      ],
    },
  },
};

// Localized Frametive Project Details
export const LOCALIZED_PROJECT: Record<Language, Partial<Project>> = {
  id: {
    title: 'Frametive: Inisiatif Warisan yang Responsif',
    subtitle: 'Praktik Unggulan Memori Budaya & Kreativitas Berbasis AI',
    description:
      'Frametive adalah inisiatif riset dan produksi lintas disiplin dari Framedia Creative yang memadukan kecerdasan buatan yang beretika, restorasi arsip taktil, dan instalasi audiovisual generatif untuk melestarikan narasi lisan tenun masyarakat adat yang terancam punah.',
    objectives: [
      'Melestarikan lebih dari 400 narasi lisan tenun yang rentan melalui rekaman audio spasial tanpa kompresi dan fotogrametri beresolusi tinggi.',
      'Melatih model generatif yang etis, terbatas, dan bersifat lokal dengan protokol persetujuan penuh dan atribusi dari para tetua adat.',
      'Merancang instalasi taktil keliling yang terbuka untuk umum, menghadirkan warisan budaya melalui lanskap suara haptik.',
      'Membangun model tata kelola royalti dan kepemilikan kolektif yang adil bagi para kontributor komunitas.',
    ],
    concept:
      'Konsep utama proyek ini mengeksplorasi "resonansi taktil" — memperlakukan penuturan lisan bukan sebagai catatan sejarah yang statis, melainkan sebagai media kreatif yang hidup dan dinamis. Dengan memadukan citra makro serat beresolusi tinggi dan sintesis audio algoritmik, Frametive menerjemahkan motif tenun menjadi lanskap auditori.',
    process:
      'Metodologi tiga tahap yang iteratif ini berlangsung selama delapan bulan, meliputi lokakarya ko-desain di lokasi, perekaman akustik berulang, transkripsi linguistik kolaboratif, dan pengembangan shader secara real-time bersama para maestro tenun komunitas.',
    production:
      'Diproduksi menggunakan susunan mikrofon spasial buatan khusus, resonator akustik kayu buatan tangan, serta sistem edge computing tanpa telemetri berhak paten, guna memastikan rekaman budaya yang sensitif tetap berdaulat dan tidak disusupi pihak luar.',
    outcomes: [
      'Lebih dari 14.000 pengunjung fisik terlibat di tiga pameran museum internasional.',
      '100% kepemilikan budaya tetap dipegang oleh komunitas mitra melalui skema lisensi koperatif.',
      'Menjadi studi kasus acuan pada UNESCO Global Forum on Ethics in Creative AI.',
      'Meraih penghargaan Prix Ars Electronica Award of Distinction 2025.',
    ],
    timeline: [
      {
        phase: '01. Ko-Desain & Dewan Tetua',
        period: 'Jan – Mar 2025',
        details: 'Lingkaran mendengarkan, penyusunan kerangka persetujuan, kesepakatan protokol.',
      },
      {
        phase: '02. Perekaman Lapangan & Sonik',
        period: 'Apr – Mei 2025',
        details: 'Dokumentasi audio spasial, fotografi makro multispektral, pemodelan haptik.',
      },
      {
        phase: '03. Sintesis Algoritmik & Rigging',
        period: 'Jun – Jul 2025',
        details: 'Pelatihan model yang etis, perakitan perangkat keras edge, pengujian enklosur akustik.',
      },
      {
        phase: '04. Peluncuran & Pameran Publik',
        period: 'Agu – Nov 2025',
        details: 'Peluncuran pameran keliling, kuliah umum, lokakarya partisipatif komunitas.',
      },
    ],
    team_credits: [
      { role: 'Arahan Kreatif & Konsep', name: 'Elena Rostova' },
      { role: 'AI Etis & Arsitektur', name: 'Marcus Vance' },
      { role: 'Desain Suara Spasial', name: 'Dr. Soraya Lin' },
      { role: 'Pemimpin Ko-Desain Komunitas', name: 'Kaelen O\'Connor' },
      { role: 'Insinyur Media Komputasional', name: 'Amara Diallo' },
    ],
  },
  en: {
    title: 'Frametive: The Responsive Heritage Initiative',
    subtitle: 'A Flagship Cultural Memory & Creative AI Practice',
    description:
      'Frametive is Framedia Creative’s cross-disciplinary research and production initiative merging ethical artificial intelligence, tactile archive restoration, and generative audiovisual installation to preserve endangered indigenous textile oral histories.',
    objectives: [
      'Preserve over 400 vulnerable oral weaving narratives through lossless spatial audio and high-fidelity photogrammetry.',
      'Train ethically bounded, localized generative models with 100% elder consent and attribution protocols.',
      'Design an open-access touring tactile installation that communicates cultural heritage through haptic soundscapes.',
      'Establish an equitable royalty and collective ownership governance model for community contributors.',
    ],
    concept:
      'The core concept investigates "tactile resonance" — treating oral storytelling not as static historical transcripts, but as dynamic, living creative media. By pairing high-definition macro fiber imagery with algorithmic audio synthesis, Frametive translates weaving patterns into auditory landscapes.',
    process:
      'The three-stage iterative methodology spanned eight months of on-site co-design workshops, iterative acoustic recording, collaborative linguistic transcription, and real-time shader development with community textile masters.',
    production:
      'Produced using custom-built spatial microphone arrays, hand-crafted timber acoustic resonators, and a proprietary zero-telemetry edge computing system ensuring that sensitive cultural recordings remain sovereign and uncompromised.',
    outcomes: [
      'Over 14,000 physical visitors engaged across three international museum exhibitions.',
      '100% retention of cultural ownership retained by partner communities via cooperative licensing.',
      'Featured as a benchmark case study at the UNESCO Global Forum on Ethics in Creative AI.',
      'Received the 2025 Prix Ars Electronica Award of Distinction.',
    ],
    timeline: [
      {
        phase: '01. Co-Design & Elder Councils',
        period: 'Jan – Mar 2025',
        details: 'Listening circles, consent framework definition, protocol agreements.',
      },
      {
        phase: '02. Field Capture & Sonics',
        period: 'Apr – May 2025',
        details: 'Spatial audio documentation, multispectral macro photography, haptic modeling.',
      },
      {
        phase: '03. Algorithmic Synthesis & Rigging',
        period: 'Jun – Jul 2025',
        details: 'Ethical model training, edge hardware assembly, acoustic enclosure testing.',
      },
      {
        phase: '04. Premiere & Public Exhibition',
        period: 'Aug – Nov 2025',
        details: 'Touring exhibition launch, public lectures, participatory community workshops.',
      },
    ],
    team_credits: [
      { role: 'Creative Direction & Concept', name: 'Elena Rostova' },
      { role: 'Ethical AI & Architecture', name: 'Marcus Vance' },
      { role: 'Spatial Sound Design', name: 'Dr. Soraya Lin' },
      { role: 'Community Co-Design Lead', name: 'Kaelen O\'Connor' },
      { role: 'Computational Media Engineer', name: 'Amara Diallo' },
    ],
  },
};

// Localized Team Profiles
export const LOCALIZED_TEAM: Record<Language, Record<string, Partial<Profile>>> = {
  id: {
    'team-1': {
      name: 'Elena Rostova',
      role: 'Pendiri & Direktur Kreatif Eksekutif',
      bio: 'Mantan direktur seni editorial di MoMA & Wallpaper*. Spesialis dalam narasi spasial, sistem tipografi, dan identitas merek progresif dengan dua dekade pengakuan internasional.',
      skills: ['Arah Seni Editorial', 'Identitas Spasial', 'Tipografi Kustom', 'Kurasi Pameran'],
    },
    'team-2': {
      name: 'Marcus Vance',
      role: 'Kepala AI & Sistem Baru',
      bio: 'Seniman komputasional dan teknolog yang meneliti keselarasan AI, akustik generatif, dan kecerdasan yang bertanggung jawab. Mantan peneliti di Media Lab Europe.',
      skills: ['Arsitektur AI Etis', 'Desain Model Edge', 'Sintesis Algoritmik', 'Akustik Spasial'],
    },
    'team-3': {
      name: 'David Morales',
      role: 'Arsitek Digital Utama & Pemimpin Pengalaman',
      bio: 'Pelopor pengalaman web multisensoris yang aksesibel. Sangat mendalami mikrointeraksi, tipografi responsif, dan antarmuka digital yang taktil.',
      skills: ['WebGPU / Shaders', 'Aksesibilitas Universal', 'Desain Interaksi Taktil', 'Arsitektur Sistem'],
    },
    'team-4': {
      name: 'Amina Chen',
      role: 'Direktur Strategi Budaya & Inklusivitas',
      bio: 'Antropolog budaya dan advokat komunitas yang memastikan penceritaan yang adil, protokol persetujuan etis, dan representasi linguistik di setiap karya studio.',
      skills: ['Antropologi Budaya', 'Kerangka Persetujuan Etis', 'Strategi Bahasa Inklusif', 'Fasilitasi Komunitas'],
    },
    'team-5': {
      name: 'Siddharth Nair',
      role: 'Sinematografer Utama & Sutradara Film',
      bio: 'Dokumenter peraih penghargaan yang berfokus pada akustik lingkungan dan sinema kondisi manusia. Menyutradarai iklan eksperimental dan instalasi video spasial.',
      skills: ['Sinematografi 16mm & Digital', 'Perekaman Suara Lapangan', 'Instalasi Video Spasial', 'Penyuntingan Dokumenter'],
    },
  },
  en: {
    'team-1': {
      role: 'Founder & Executive Creative Director',
      bio: 'Former editorial art director at MOMA & Wallpaper*. Specializing in spatial narrative, typography systems, and progressive brand identities with two decades of international acclaim.',
    },
    'team-2': {
      role: 'Head of AI & Emerging Systems',
      bio: 'Computational artist and technologist researching alignment, generative acoustics, and responsible intelligence. Former researcher at Media Lab Europe.',
    },
    'team-3': {
      role: 'Principal Digital Architect & Experience Lead',
      bio: 'Pioneering accessible multi-sensory web experiences. Obsessed with micro-interactions, responsive typography, and tactile digital interfaces.',
    },
    'team-4': {
      role: 'Director of Cultural Strategy & Inclusivity',
      bio: 'Cultural anthropologist and community advocate ensuring equitable storytelling, ethical consent protocols, and linguistic representation across all creative initiatives.',
    },
    'team-5': {
      role: 'Lead Cinematographer & Film Director',
      bio: 'Award-winning documentarian focused on environmental acoustics and human condition cinema. Directs experimental commercials and spatial video installations.',
    },
  },
};

// Localized Portfolio Items
export const LOCALIZED_PORTFOLIO: Record<Language, Record<string, Partial<PortfolioItem>>> = {
  id: {
    'port-1': {
      title: 'Monolith: Identitas Arsitektur & Media Spasial',
      description:
        'Sistem identitas kontemporer dan sistem penanda generatif untuk paviliun budaya brutalis di Zurich.',
      category: 'Branding',
    },
    'port-2': {
      title: 'Echoes of the Solstice: Film Pendek Sensorik',
      description:
        'Film dokumenter puitis 16mm yang menjelajahi ketahanan flora nokturnal di tengah perambahan cahaya perkotaan.',
      category: 'Film',
    },
    'port-3': {
      title: 'Kinetic Dialect: Mesin Tipografi Interaktif',
      description:
        'Eksperimen tipografi generatif sumber terbuka yang memetakan infleksi vokal dan fonetik multibahasa ke dalam glif vektor dinamis real-time.',
      category: 'Creative Technology',
    },
    'port-4': {
      title: 'Verdant Futures: Kampanye Desain Sirkular',
      description:
        'Kampanye visual dan taktil multisaluran yang menyoroti pertanian regeneratif dengan sablon biodegradable dan penceritaan AR.',
      category: 'Campaign',
    },
    'port-5': {
      title: 'Form & Silence: Monograf Fotografi Editorial',
      description:
        'Monograf dua warna setebal 280 halaman yang mendokumentasikan struktur beton modernis sakral di sepanjang garis pantai Mediterania.',
      category: 'Photography',
    },
    'port-6': {
      title: 'Synthetica: Platform Digital Fluida & Dagang',
      description:
        'Pengalaman web 3D imersif dan antarmuka niaga aksesibel untuk label busana berkelanjutan avant-garde.',
      category: 'Digital',
    },
  },
  en: {
    'port-1': {
      title: 'Monolith: Architectural Identity & Spatial Media',
      description:
        'A contemporary identity system and generative signage system for a brutalist cultural pavilion in Zurich.',
      category: 'Branding',
    },
    'port-2': {
      title: 'Echoes of the Solstice: Sensory Short Film',
      description:
        'A 16mm poetic documentary exploring nocturnal flora resilience amidst urban light encroachment.',
      category: 'Film',
    },
    'port-3': {
      title: 'Kinetic Dialect: Interactive Typography Engine',
      description:
        'An open-source generative typography experiment mapping vocal inflection and multilingual phonetics into real-time variable vector glyphs.',
      category: 'Creative Technology',
    },
    'port-4': {
      title: 'Verdant Futures: Circular Design Campaign',
      description:
        'Multi-channel visual and tactile campaign highlighting regenerative agriculture with biodegradable screen-printed materials and AR storytelling.',
      category: 'Campaign',
    },
    'port-5': {
      title: 'Form & Silence: Editorial Photography Monograph',
      description:
        'A 280-page dual-tone monograph documenting sacred modernist concrete structures across the Mediterranean coastline.',
      category: 'Photography',
    },
    'port-6': {
      title: 'Synthetica: Fluid Digital Platform & Commerce',
      description:
        'Immersive 3D web experience and accessible commerce interface for an avant-garde sustainable fashion label.',
      category: 'Digital',
    },
  },
};

// Helpers to get localized content arrays/objects
export function localizePrinciples(principles: CreativePrinciple[], lang: Language): CreativePrinciple[] {
  return principles.map((p) => {
    const override = LOCALIZED_PRINCIPLES[lang]?.[p.number];
    if (override) {
      return { ...p, ...override };
    }
    return p;
  });
}

export function localizeAIEthics(items: AIEthicsItem[], lang: Language): AIEthicsItem[] {
  return items.map((item) => {
    const override = LOCALIZED_AI_ETHICS[lang]?.[item.id];
    if (override) {
      return { ...item, ...override };
    }
    return item;
  });
}

export function localizeInclusivity(items: InclusivityItem[], lang: Language): InclusivityItem[] {
  return items.map((item) => {
    const override = LOCALIZED_INCLUSIVITY[lang]?.[item.id];
    if (override) {
      return { ...item, ...override };
    }
    return item;
  });
}

export function localizeProject(project: Project | null, lang: Language): Project | null {
  if (!project) return null;
  const override = LOCALIZED_PROJECT[lang];
  if (override) {
    return { ...project, ...override };
  }
  return project;
}

export function localizeTeam(team: Profile[], lang: Language): Profile[] {
  return team.map((member) => {
    const override = LOCALIZED_TEAM[lang]?.[member.id];
    if (override) {
      return { ...member, ...override };
    }
    return member;
  });
}

export function localizePortfolio(portfolio: PortfolioItem[], lang: Language): PortfolioItem[] {
  return portfolio.map((item) => {
    const override = LOCALIZED_PORTFOLIO[lang]?.[item.id];
    if (override) {
      return { ...item, ...override };
    }
    return item;
  });
}
