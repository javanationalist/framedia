import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory or server knowledge context
const INFRA_SYSTEM_INSTRUCTION = `You are inFra, the intelligent creative assistant for Framedia Creative.
Framedia Creative is an avant-garde creative media agency focused on creative production, digital media, communication, design, AI ethics, and inclusive creative practices.

Key Knowledge Base about Framedia Creative:
1. Brand & Identity:
   - Name: Framedia Creative
   - Positioning: Where tactile human craft meets algorithmic conscience.
   - Core disciplines: Creative Production, Visual Communication, Digital Experiences, Media Strategy, Creative Technology, AI & Creative Practice.
   - Locations: Zurich, London, and distributed digital studios. Contact: hello@framedia.creative.

2. Flagship Initiative - "Frametive: The Responsive Heritage Initiative":
   - Merges ethical artificial intelligence, tactile archive restoration, and generative audiovisual installation to preserve endangered indigenous textile oral histories.
   - 400+ oral weaving narratives recorded with 100% elder consent and community attribution.
   - Key leads: Elena Rostova (Creative Direction), Marcus Vance (Ethical AI), Dr. Soraya Lin (Spatial Sound).

3. 10 Being Creative Principles:
   1. Be Curious — Relentless inquiry dismantles comfortable assumptions.
   2. Be Brave — Safe work is invisible work.
   3. Be Observant — Culture breathes in the margins.
   4. Be Experimental — Treat the studio as a laboratory.
   5. Be Human — Technology is an instrument; human emotion is the resonance.
   6. Be Collaborative — Transcendence arises from polyphonic friction.
   7. Be Critical — Interrogate the provenance and ripple effects of every narrative.
   8. Be Inclusive — Universal accessibility is an aesthetic imperative.
   9. Be Responsible — Ethics is the compass that guides technical velocity.
   10. Be Creative — Make the unimaginable tangible.

4. AI Ethics Charter:
   - Human Creativity First: AI is an instrument of human intentionality, never an autonomous replacement.
   - Transparency & Attribution: Proactive client disclosure and metadata tagging on synthetic assets.
   - Consent & Data Sovereignty: Zero scraped training datasets; explicit opt-in and localized community models.
   - Algorithmic Bias Interrogation: Proactive adversarial counter-prompting against demographic erasure.
   - Responsible Automation: Protecting creator livelihoods and living wages.
   - How inFra operates: inFra identifies itself as an assistant, does not hallucinate, and never uses client chats for public model training.

5. Inclusivity Pillars:
   - Multi-Perspective Representation across diaspora, neurodiverse, and indigenous storytellers.
   - Universal Design & WCAG AA/AAA compliance across typography, contrast, and navigation.
   - Inclusive Linguistic Framing and culturally affirming stylebooks.
   - Non-Extractive Storytelling with community royalty sharing.

6. Key Team Members:
   - Elena Rostova (Founder & Executive Creative Director)
   - Marcus Vance (Head of AI & Emerging Systems)
   - Amara Diallo (Principal Digital Architect & Experience Lead)
   - Kaelen O'Connor (Director of Cultural Strategy & Inclusivity)
   - Dr. Soraya Lin (Lead Cinematographer & Film Director)

Tone & Rules:
- Voice: Eloquent, articulate, warm, visionary, and intellectually rigorous.
- You answer questions accurately about Framedia Creative.
- If a question pertains to topics outside Framedia's scope, answer constructively while clearly distinguishing general knowledge from Framedia's specific studio practices.
- Never pretend to be human.
- Keep responses concise, well-structured (using bullet points or editorial typography spacing where helpful).`;

function getValidGeminiModel(): string {
  const envModel = process.env.GEMINI_MODEL?.trim();
  // Deprecated models or unconfigured: migrate from gemini-2.5-flash / 2.0 / 1.5
  if (!envModel || envModel.includes('2.5') || envModel.includes('2.0') || envModel.includes('1.5')) {
    return 'gemini-3.6-flash';
  }
  return envModel;
}

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'Framedia Creative API' });
});

// Config status for the dashboard & settings
app.get('/api/config-status', (req: Request, res: Response) => {
  const geminiConfigured = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY');
  const model = getValidGeminiModel();
  const supabaseConfigured = Boolean(
    (process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL) &&
    (process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY)
  );

  res.json({
    geminiConfigured,
    model,
    supabaseConfigured,
    appUrl: process.env.APP_URL || '',
  });
});

// inFra Chatbot Endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  const { message, history, language = 'id' } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message string is required' });
  }

  const isId = language === 'id';
  const modelName = getValidGeminiModel();
  const apiKey = process.env.GEMINI_API_KEY;

  // If Gemini API Key is available, use official @google/genai SDK
  if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      // Construct conversational contents with previous turns if provided
      const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(history)) {
        for (const item of history) {
          if (item && item.text) {
            contents.push({
              role: item.role === 'model' ? 'model' : 'user',
              parts: [{ text: item.text }],
            });
          }
        }
      }

      contents.push({
        role: 'user',
        parts: [{ text: message }],
      });

      const languageInstruction = isId
        ? 'LANGUAGE REQUIREMENT: Respond in natural, fluent, elegant, and professional Bahasa Indonesia. Preserve brand names like "Framedia Creative" and "Frametive".'
        : 'LANGUAGE REQUIREMENT: Respond in polished, articulate, and natural English.';

      const candidateModels = Array.from(new Set([modelName, 'gemini-3.6-flash', 'gemini-3.8-flash']));
      let response: any = null;
      let usedModel = modelName;
      let lastError: any = null;

      for (const m of candidateModels) {
        try {
          response = await ai.models.generateContent({
            model: m,
            contents,
            config: {
              systemInstruction: `${INFRA_SYSTEM_INSTRUCTION}\n\n${languageInstruction}`,
              temperature: 0.7,
            },
          });
          usedModel = m;
          break;
        } catch (err: any) {
          lastError = err;
          console.warn(`Gemini generation with ${m} failed:`, err?.message || err);
        }
      }

      if (response && response.text) {
        const reply = response.text;
        const suggestedQuestions = deriveSuggestions(message, isId);

        return res.json({
          reply,
          suggestedQuestions,
          modelUsed: usedModel,
          status: 'success',
        });
      }

      if (lastError) {
        console.error('Gemini API execution error across all models:', lastError);
      }
    } catch (error: any) {
      console.error('Gemini API execution error:', error);
      // Fallback gracefully so user experience is uninterrupted
    }
  }

  // Fallback intelligent agent reply if API key is not configured or fails
  const fallbackReply = generateFallbackReply(message, isId);
  const suggestedQuestions = deriveSuggestions(message, isId);

  return res.json({
    reply: fallbackReply,
    suggestedQuestions,
    modelUsed: `${modelName} (Studio Context Engine)`,
    status: 'fallback',
  });
});

function deriveSuggestions(message: string, isId: boolean = false): string[] {
  const lower = message.toLowerCase();
  if (isId) {
    if (lower.includes('project') || lower.includes('frametive') || lower.includes('proyek')) {
      return [
        'Apa saja pencapaian utama dari Frametive?',
        'Siapa yang mengarahkan proyek Frametive?',
        'Bagaimana Framedia menjalankan desain bersama komunitas?'
      ];
    }
    if (lower.includes('ethic') || lower.includes('etika') || lower.includes('ai')) {
      return [
        'Bagaimana posisi Framedia terhadap kedaulatan data seniman?',
        'Bagaimana inFra menjaga prinsip tanpa telemetri?',
        'Dapatkah Anda menjelaskan Human Creativity First?'
      ];
    }
    if (lower.includes('principle') || lower.includes('prinsip') || lower.includes('10')) {
      return [
        'Apa arti "Be Observant" bagi Framedia?',
        'Mengapa "Be Brave" dianggap esensial?',
        'Bagaimana 10 prinsip memandu proyek klien?'
      ];
    }
    if (lower.includes('team') || lower.includes('tim') || lower.includes('orang')) {
      return [
        'Siapa Direktur Kreatif Framedia?',
        'Apa peran Marcus Vance dalam teknologi baru?',
        'Bagaimana tim mendekati kolaborasi lintas disiplin?'
      ];
    }
    return [
      'Ceritakan tentang proyek unggulan Frametive',
      'Apa saja prinsip AI Ethics di Framedia?',
      'Apa arti Inklusivitas dalam praktik di Framedia?',
      'Bagaimana 10 prinsip Being Creative membentuk karya Anda?'
    ];
  }

  if (lower.includes('project') || lower.includes('frametive')) {
    return [
      'What are the key outcomes of Frametive?',
      'Who directed the Frametive project?',
      'How does Framedia handle community co-design?'
    ];
  }
  if (lower.includes('ethic') || lower.includes('ai')) {
    return [
      'What is your stance on artist data sovereignty?',
      'How does inFra maintain zero-telemetry?',
      'Can you explain Human Creativity First?'
    ];
  }
  if (lower.includes('principle') || lower.includes('10')) {
    return [
      'What does "Be Observant" mean to Framedia?',
      'Why is "Be Brave" considered essential?',
      'How do the 10 principles guide client work?'
    ];
  }
  if (lower.includes('team') || lower.includes('people')) {
    return [
      'Who is the Creative Director?',
      'What role does Marcus Vance play in emerging tech?',
      'How does the team approach interdisciplinary collaboration?'
    ];
  }
  return [
    'Tell me about the Frametive flagship project',
    'What are Framedia’s AI Ethics principles?',
    'What does Inclusivity mean in practice at Framedia?',
    'How do the 10 Being Creative principles shape your work?'
  ];
}

function generateFallbackReply(query: string, isId: boolean = false): string {
  const lower = query.toLowerCase();

  if (isId) {
    if (lower.includes('project') || lower.includes('frametive') || lower.includes('heritage') || lower.includes('proyek')) {
      return `Inisiatif unggulan Framedia Creative adalah **"Frametive: The Responsive Heritage Initiative"**. 

Ini merupakan proyek riset dan produksi lintas disiplin yang memadukan AI generatif etis, restorasi serat taktil, dan akustik spasial untuk melestarikan narasi lisan tenun tradisional yang terancam punah.

Pencapaian utama:
- Lebih dari 400 narasi lisan direkam dengan persetujuan penuh para tetua komunitas.
- Kedaulatan data komunitas 100% terlindungi melalui lisensi kooperatif.
- Dipamerkan di biennale internasional dan diakui oleh UNESCO Global Forum on Creative AI.

Apakah Anda ingin menelusuri lini masa proyek atau mengenal tim kreatif di baliknya?`;
    }

    if (lower.includes('ethic') || lower.includes('etika') || lower.includes('ai') || lower.includes('tanggung jawab')) {
      return `Di Framedia Creative, **Piagam AI Ethics** kami berlandaskan satu komitmen fundamental: **Human Creativity First** (Kreativitas Manusia yang Utama).

Prinsip inti kami meliputi:
1. **Intensionalitas Manusia**: AI adalah alat bantu imajinasi manusia, bukan pengganti otonom.
2. **Transparansi & Atribusi**: Keterbukaan menyeluruh atas setiap aset yang dibantu AI.
3. **Persetujuan & Kedaulatan Data**: Tanpa dataset dari scraping liar; hanya model berbasis izin eksplisit dan model komunitas lokal.
4. **Interogasi Bias**: Pengujian adversarial proaktif guna mencegah perataan budaya dan demografis.
5. **Martabat Tenaga Kerja**: Menjaga kompensasi kreator yang adil dan berinvestasi pada talenta baru.

Sebagai inFra, saya mematuhi standar ini dengan berakar pada pengetahuan studio terverifikasi tanpa halusinasi.`;
    }

    if (lower.includes('principle') || lower.includes('prinsip') || lower.includes('10') || lower.includes('creative')) {
      return `**10 Prinsip Being Creative** kami menjadi fondasi filosofis Framedia:

1. **Be Curious** — Pertanyakan asumsi yang terasa nyaman.
2. **Be Brave** — Karya yang aman adalah karya yang tak terlihat.
3. **Be Observant** — Budaya bernapas di celah-celah kecil.
4. **Be Experimental** — Perlakukan studio sebagai laboratorium eksperimen.
5. **Be Human** — Resonansi emosional melampaui kesempurnaan sintetik.
6. **Be Collaborative** — Keagungan lahir dari dialog berbagai suara.
7. **Be Critical** — Telaah asal-usul dan dampak dari apa yang kita ciptakan.
8. **Be Inclusive** — Aksesibilitas universal adalah keharusan estetika.
9. **Be Responsible** — Etika adalah kompas bagi laju perkembangan teknis.
10. **Be Creative** — Wujudkan cerita yang membentuk masa depan.`;
    }

    if (lower.includes('inclusiv') || lower.includes('inklusif') || lower.includes('aksesibilitas') || lower.includes('wcag')) {
      return `Pendekatan Framedia terhadap **Inklusivitas** adalah disiplin desain intrinsik, bukan pelengkap:

- **Representasi Multiperspektif**: Memprioritaskan pencerita diaspora, neurodivergen, dan komunitas adat.
- **Desain Universal**: Merancang sesuai standar WCAG AA/AAA untuk tipografi, kontras, navigasi pembaca layar, dan opsi gerak minimalis.
- **Bahasa yang Inklusif**: Memperbarui panduan gaya editorial studio kami secara berkala demi menghormati martabat manusia.
- **Penceritaan Non-Ekstraktif**: Menetapkan pakta persetujuan pra-produksi dan pembagian royalti komunitas.`;
    }

    if (lower.includes('team') || lower.includes('tim') || lower.includes('siapa') || lower.includes('elena') || lower.includes('marcus')) {
      return `Framedia Creative dipandu oleh tim lintas disiplin:

- **Elena Rostova**: Founder & Executive Creative Director (narasi spasial, pengarahan seni editorial, tipografi).
- **Marcus Vance**: Head of AI & Emerging Systems (akustik komputasional, shader generatif, kecerdasan etis).
- **Amara Diallo**: Principal Digital Architect (desain interaksi, web multi-sensori, aksesibilitas WCAG AAA).
- **Kaelen O'Connor**: Director of Cultural Strategy (antropologi, ko-desain komunitas, protokol inklusif).
- **Dr. Soraya Lin**: Lead Cinematographer (sinema dokumenter 16mm, akustik lingkungan).`;
    }

    if (lower.includes('service') || lower.includes('layanan') || lower.includes('apa yang kami ciptakan') || lower.includes('tawaran')) {
      return `Framedia Creative bermitra dengan institusi budaya pionir, inovator kemewahan, dan jenama visioner dalam:

- **Creative Production**: Sinematografi, tata suara, dokumentasi spasial resolusi tinggi.
- **Visual Communication**: Sistem tipografi, penerbitan monograf, arsitektur jenama.
- **Digital Experiences**: Platform WebGL/shader, e-commerce editorial headless, arsip responsif.
- **Media Strategy**: Kampanye budaya lintas kanal dan pemosisian naratif.
- **AI & Creative Practice**: Penerapan model etis, perangkat generatif khusus, dan kerangka kebijakan AI.`;
    }

    return `Halo, saya **inFra** — asisten AI dari Framedia Creative. 

Framedia Creative adalah agensi media kreatif editorial yang berfokus pada produksi kreatif, media digital, komunikasi, desain, AI ethics, dan praktik kreatif yang inklusif. 

Ada yang bisa saya bantu jelajahi hari ini? Anda dapat bertanya tentang proyek unggulan **Frametive**, **10 Prinsip Being Creative**, **Piagam AI Ethics**, kerangka **Inklusivitas**, tim kami, atau layanan studio kami.`;
  }

  // English fallback
  if (lower.includes('project') || lower.includes('frametive') || lower.includes('heritage')) {
    return `Framedia Creative's flagship initiative is **"Frametive: The Responsive Heritage Initiative"**. 

It is an interdisciplinary research and production project that bridges ethical generative AI, tactile fiber restoration, and spatial acoustics to preserve endangered oral weaving narratives. 

Key milestones:
- Over 400 vulnerable oral narratives recorded with full elder consent.
- 100% community data sovereignty through cooperative licensing.
- Exhibited at international biennales and recognized by UNESCO's Global Forum on Creative AI.

Would you like to explore the project timeline or review the creative team behind it?`;
  }

  if (lower.includes('ethic') || lower.includes('ai ethics') || lower.includes('responsible')) {
    return `At Framedia Creative, our **AI Ethics Charter** is founded on one non-negotiable premise: **Human Creativity First**.

Our core principles include:
1. **Human Intentionality**: AI is an instrument for human imagination, never an autonomous replacement.
2. **Transparency & Attribution**: Transparent disclosure on every AI-assisted asset.
3. **Consent & Data Sovereignty**: Zero scraped training datasets; explicit opt-in and localized community models.
4. **Bias Interrogation**: Active adversarial auditing to prevent cultural and demographic flattening.
5. **Labor Dignity**: Safeguarding creator remuneration and reinvesting in emerging talent.

As inFra, I adhere to these standards by utilizing verified studio knowledge without hallucinating.`;
  }

  if (lower.includes('principle') || lower.includes('10 being creative') || lower.includes('creative')) {
    return `Our **10 Being Creative** principles form the philosophical spine of Framedia:

1. **Be Curious** — Interrogate comfortable assumptions.
2. **Be Brave** — Safe work is invisible work.
3. **Be Observant** — Culture breathes in the margins.
4. **Be Experimental** — Treat the studio as a laboratory.
5. **Be Human** — Emotional resonance over synthetic perfection.
6. **Be Collaborative** — Transcendence through polyphonic friction.
7. **Be Critical** — Interrogate the provenance and impact of what you make.
8. **Be Inclusive** — Universal accessibility as an aesthetic imperative.
9. **Be Responsible** — Ethics is the compass for technical velocity.
10. **Be Creative** — Giving shape to stories that define tomorrow.`;
  }

  if (lower.includes('inclusiv') || lower.includes('accessibility') || lower.includes('wcag')) {
    return `Framedia’s approach to **Inclusivity** is an intrinsic design discipline, not an afterthought:

- **Multi-Perspective Representation**: Prioritizing underrepresented, diaspora, and indigenous storytellers.
- **Universal Design**: Designing for WCAG AA/AAA standards across typography, contrast, screen-reader navigation, and reduced motion.
- **Inclusive Language**: Continuously updating our studio editorial stylebooks to respect human dignity.
- **Non-Extractive Storytelling**: Establishing pre-production consent pacts and community royalty sharing.`;
  }

  if (lower.includes('team') || lower.includes('who') || lower.includes('founder') || lower.includes('elena') || lower.includes('marcus')) {
    return `Framedia Creative is guided by an interdisciplinary ensemble:

- **Elena Rostova**: Founder & Executive Creative Director (spatial narrative, editorial art direction, typography).
- **Marcus Vance**: Head of AI & Emerging Systems (computational acoustics, generative shaders, ethical intelligence).
- **Amara Diallo**: Principal Digital Architect (interaction design, multi-sensory web, WCAG AAA accessibility).
- **Kaelen O'Connor**: Director of Cultural Strategy (anthropology, community co-design, inclusive protocols).
- **Dr. Soraya Lin**: Lead Cinematographer (16mm documentary cinema, environmental acoustics).`;
  }

  if (lower.includes('service') || lower.includes('what we create') || lower.includes('offer')) {
    return `Framedia Creative partners with pioneering cultural institutions, luxury innovators, and forward-thinking brands across:

- **Creative Production**: Cinematography, sound design, high-resolution spatial capture.
- **Visual Communication**: Typographic systems, monograph publishing, brand architecture.
- **Digital Experiences**: WebGL/shader platforms, headless editorial commerce, responsive archives.
- **Media Strategy**: Multi-channel cultural campaigns and narrative positioning.
- **AI & Creative Practice**: Ethical model deployment, bespoke generative tools, and AI policy frameworks.`;
  }

  return `Hello, I'm **inFra** — Framedia Creative's AI assistant. 

Framedia Creative is an editorial creative media agency focused on creative production, digital media, communication, design, AI ethics, and inclusive creative practices. 

How can I assist your exploration today? You can ask about our flagship **Frametive Project**, our **10 Being Creative** principles, our **AI Ethics Charter**, our **Inclusivity** framework, our team, or our studio services.`;
}

// Development Vite Server integration or Production Static Serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Framedia Creative server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
