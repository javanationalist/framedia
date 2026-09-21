/**
 * ==============================================================================
 * MANUAL TRANSLATION FALLBACK TEMPLATE
 * ==============================================================================
 * This file identifies user-facing texts that require manual, verified Indonesian
 * translation by the website owner (e.g. specialized curatorial statements, statutory
 * clauses, indigenous data sovereignty protocols, and custom institutional covenants).
 *
 * Each entry initially contains the exact required placeholder:
 *   "{teks bahasa Indonesianya}"
 *
 * When the website owner provides the translated text, simply replace the placeholder
 * value here. The website translation pipeline automatically prioritizes non-placeholder
 * values from this file without requiring any structural rebuilding or code changes.
 *
 * FORMAT SUMMARY FOR OWNER:
 * project.frametive_methodology_disclaimer = {teks bahasa Indonesianya}
 * project.curatorial_statement_lead = {teks bahasa Indonesianya}
 * ethics.charter_statutory_preamble = {teks bahasa Indonesianya}
 * ethics.indigenous_data_sovereignty_clause = {teks bahasa Indonesianya}
 * ethics.labor_dignity_remuneration_standard = {teks bahasa Indonesianya}
 * inclusivity.neurodivergent_sensory_protocol = {teks bahasa Indonesianya}
 * inclusivity.co_authorship_covenant = {teks bahasa Indonesianya}
 * contact.custom_nda_clause = {teks bahasa Indonesianya}
 * admin.database_schema_disclaimer = {teks bahasa Indonesianya}
 * ==============================================================================
 */

export interface ManualTranslationItem {
  key: string;
  location: string;
  englishSource: string;
  context: string;
  value: string;
}

export const MANUAL_TRANSLATION_TEMPLATE: Record<string, string> = {
  // 1. Frametive Project: Traditional sacred pattern methodology & copyright notice
  "project.frametive_methodology_disclaimer":
    "Metodologi Frametive yang digunakan dalam proyek ini bersifat eksploratif dan dapat berkembang seiring proses kerja. Pendekatan ini tidak dimaksudkan sebagai standar baku, melainkan sebagai kerangka kerja adaptif yang disesuaikan dengan konteks, kebutuhan, dan dinamika setiap kolaborasi.",

  // 2. Frametive Project: Curatorial statement for international museum biennale exhibitions
  "project.curatorial_statement_lead":
    "Karya ini lahir dari dialog panjang antara gagasan, ruang, dan komunitas yang terlibat di dalamnya — sebuah upaya untuk menghadirkan narasi yang tidak sekadar dilihat, tetapi juga dirasakan dan dipertanyakan.",

  // 3. AI Ethics: Formal statutory legal preamble aligning with Indonesian cultural heritage protection laws
  "ethics.charter_statutory_preamble":
    "Piagam ini disusun sebagai landasan etis dan hukum bagi seluruh pihak yang terlibat dalam proyek, dengan mengacu pada prinsip keadilan, transparansi, dan tanggung jawab bersama, serta tunduk pada peraturan perundang-undangan yang berlaku.",

  // 4. AI Ethics: Indigenous community collective data sovereignty & perpetual IP governance clause
  "ethics.indigenous_data_sovereignty_clause":
    "Segala data, pengetahuan, dan ekspresi budaya yang bersumber dari masyarakat adat tetap menjadi hak dan kedaulatan penuh komunitas asal. Penggunaan, penyimpanan, dan penyebarluasannya hanya dapat dilakukan dengan persetujuan bebas, didahulukan, dan diinformasikan (FPIC) dari komunitas terkait.",

  // 5. AI Ethics: Standard remuneration model formula for living cultural artisans in AI datasets
  "ethics.labor_dignity_remuneration_standard":
    "Setiap individu yang berkontribusi dalam proyek ini berhak atas remunerasi yang adil dan tepat waktu, sesuai dengan nilai kerja, keahlian, dan waktu yang dicurahkan, tanpa mengabaikan martabat dan kesejahteraan sebagai pekerja.",

  // 6. Inclusivity: Clinical and architectural sensory comfort protocol for neurodivergent visitors
  "inclusivity.neurodivergent_sensory_protocol":
    "Ruang dan proses kerja dalam proyek ini dirancang dengan mempertimbangkan kebutuhan sensorik individu neurodivergen, termasuk penyediaan opsi pencahayaan, tingkat kebisingan, dan alur komunikasi yang dapat disesuaikan sesuai kenyamanan masing-masing peserta.",

  // 7. Inclusivity: Non-extractive community co-authorship covenant & shared revenue model
  "inclusivity.co_authorship_covenant":
    "Setiap kontributor yang terlibat secara substansial dalam proses kreatif berhak diakui sebagai co-author, dengan pencantuman nama dan peran yang jelas dalam setiap publikasi atau presentasi karya.",

  // 8. Contact Form: Custom institutional non-disclosure & intellectual property clause
  "contact.custom_nda_clause":
    "Segala informasi rahasia yang dipertukarkan dalam komunikasi ini tunduk pada perjanjian kerahasiaan (NDA) dan tidak boleh diungkapkan kepada pihak ketiga tanpa persetujuan tertulis dari pihak yang bersangkutan.",

  // 9. Admin Studio Gateway: Cloud infrastructure sovereign data residency compliance notice
  "admin.database_schema_disclaimer":
    "Skema basis data yang ditampilkan bersifat internal dan dapat berubah sewaktu-waktu tanpa pemberitahuan. Struktur ini tidak dimaksudkan sebagai dokumentasi final dan tidak untuk direplikasi tanpa izin.",
};

/**
 * Metadata table detailing the exact UI element, source text, and translation context
 * for each manual translation entry.
 */
export const MANUAL_TRANSLATION_METADATA: ManualTranslationItem[] = [
  {
    key: "project.frametive_methodology_disclaimer",
    location: "Pages > ProjectPage > Section: Cultural Guardianship Protocol",
    englishSource: "The Frametive methodology employed in this project is exploratory and develops alongside the creative process. This approach is not intended as a rigid standard, but rather as an adaptive framework tailored to the context, needs, and dynamics of each collaboration.",
    context: "Frametive adaptive methodology statement.",
    value: "Metodologi Frametive yang digunakan dalam proyek ini bersifat eksploratif dan dapat berkembang seiring proses kerja. Pendekatan ini tidak dimaksudkan sebagai standar baku, melainkan sebagai kerangka kerja adaptif yang disesuaikan dengan konteks, kebutuhan, dan dinamika setiap kolaborasi.",
  },
  {
    key: "project.curatorial_statement_lead",
    location: "Pages > ProjectPage > Section: Exhibition Curatorial Note",
    englishSource: "This work emerges from an extended dialogue among ideas, space, and the participating community — an endeavor to present narratives that are not merely observed, but deeply felt and questioned.",
    context: "Exhibition curatorial statement.",
    value: "Karya ini lahir dari dialog panjang antara gagasan, ruang, dan komunitas yang terlibat di dalamnya — sebuah upaya untuk menghadirkan narasi yang tidak sekadar dilihat, tetapi juga dirasakan dan dipertanyakan.",
  },
  {
    key: "ethics.charter_statutory_preamble",
    location: "Pages > EthicsPage > Section: Statutory AI Governance Preamble",
    englishSource: "This charter is established as an ethical and legal foundation for all parties participating in the project, grounded in principles of justice, transparency, and shared responsibility, and subject to prevailing statutory laws.",
    context: "Statutory preamble for project governance.",
    value: "Piagam ini disusun sebagai landasan etis dan hukum bagi seluruh pihak yang terlibat dalam proyek, dengan mengacu pada prinsip keadilan, transparansi, dan tanggung jawab bersama, serta tunduk pada peraturan perundang-undangan yang berlaku.",
  },
  {
    key: "ethics.indigenous_data_sovereignty_clause",
    location: "Pages > EthicsPage > Section: Principle 3 (Consent & Data Sovereignty)",
    englishSource: "All data, knowledge, and cultural expressions originating from indigenous communities remain under the complete sovereignty and ownership of the originating communities. Their use, storage, and dissemination may only proceed with Free, Prior, and Informed Consent (FPIC) from the relevant communities.",
    context: "Indigenous data sovereignty and FPIC governance clause.",
    value: "Segala data, pengetahuan, dan ekspresi budaya yang bersumber dari masyarakat adat tetap menjadi hak dan kedaulatan penuh komunitas asal. Penggunaan, penyimpanan, dan penyebarluasannya hanya dapat dilakukan dengan persetujuan bebas, didahulukan, dan diinformasikan (FPIC) dari komunitas terkait.",
  },
  {
    key: "ethics.labor_dignity_remuneration_standard",
    location: "Pages > EthicsPage > Section: Principle 5 (Labor Dignity & Compensation)",
    englishSource: "Every individual contributing to this project is entitled to fair and timely remuneration corresponding to the value of work, expertise, and time dedicated, upholding human dignity and worker well-being.",
    context: "Labor dignity and fair compensation standard.",
    value: "Setiap individu yang berkontribusi dalam proyek ini berhak atas remunerasi yang adil dan tepat waktu, sesuai dengan nilai kerja, keahlian, dan waktu yang dicurahkan, tanpa mengabaikan martabat dan kesejahteraan sebagai pekerja.",
  },
  {
    key: "inclusivity.neurodivergent_sensory_protocol",
    location: "Pages > InclusivityPage > Section: Sensory & Cognitive Accessibility",
    englishSource: "Physical spaces and working processes within this project are designed mindful of neurodivergent sensory requirements, including provisions for adjustable lighting, acoustic noise thresholds, and customized communication cadences for individual participant comfort.",
    context: "Neurodivergent sensory comfort protocol.",
    value: "Ruang dan proses kerja dalam proyek ini dirancang dengan mempertimbangkan kebutuhan sensorik individu neurodivergen, termasuk penyediaan opsi pencahayaan, tingkat kebisingan, dan alur komunikasi yang dapat disesuaikan sesuai kenyamanan masing-masing peserta.",
  },
  {
    key: "inclusivity.co_authorship_covenant",
    location: "Pages > InclusivityPage > Section: Non-Extractive Storytelling",
    englishSource: "Every contributor participating substantially in the creative process holds the right to co-authorship recognition, with clear attribution of names and roles across all publications and project presentations.",
    context: "Substantive co-authorship covenant.",
    value: "Setiap kontributor yang terlibat secara substansial dalam proses kreatif berhak diakui sebagai co-author, dengan pencantuman nama dan peran yang jelas dalam setiap publikasi atau presentasi karya.",
  },
  {
    key: "contact.custom_nda_clause",
    location: "Pages > LandingPage > Section: Studio Contact / Inquiry Modal",
    englishSource: "All confidential information exchanged in this communication is governed by a Non-Disclosure Agreement (NDA) and cannot be disclosed to third parties without prior written consent from the relevant party.",
    context: "Confidentiality and non-disclosure agreement clause.",
    value: "Segala informasi rahasia yang dipertukarkan dalam komunikasi ini tunduk pada perjanjian kerahasiaan (NDA) dan tidak boleh diungkapkan kepada pihak ketiga tanpa persetujuan tertulis dari pihak yang bersangkutan.",
  },
  {
    key: "admin.database_schema_disclaimer",
    location: "Pages > AdminPage > Section: Cloud Storage & Database Architecture",
    englishSource: "The database schemas displayed here are strictly internal and subject to change at any time without prior notice. This structure is not intended as final documentation and must not be replicated without authorization.",
    context: "Internal database schema disclaimer.",
    value: "Skema basis data yang ditampilkan bersifat internal dan dapat berubah sewaktu-waktu tanpa pemberitahuan. Struktur ini tidak dimaksudkan sebagai dokumentasi final dan tidak untuk direplikasi tanpa izin.",
  },
];
