// GovtExamHub - Curated Free Legal Study Materials & Public Domain Resources

export const MATERIAL_CATEGORIES = [
  { id: 'all', name: 'All Resources' },
  { id: 'notes', name: 'Subject-wise Notes' },
  { id: 'pyq', name: 'Previous Year Papers (PYQs)' },
  { id: 'syllabus', name: 'Syllabus & Guides' },
  { id: 'free-pdf', name: 'Free Legal PDFs' },
];

export const SUBJECT_TAGS = [
  'All Subjects',
  'Indian Polity',
  'Modern Indian History',
  'Geography',
  'Economy',
  'Quantitative Aptitude',
  'Reasoning',
  'General Science',
  'Current Affairs',
  'English Language'
];

export const STUDY_MATERIALS_DATA = [
  {
    id: 'mat-polity-01',
    title: 'Indian Constitution: Preamble & Fundamental Rights (Articles 12–35)',
    category: 'notes',
    subject: 'Indian Polity',
    authorOrSource: 'GovtExamHub Academic Cell & Official Legislative Texts',
    license: 'Public Domain / Open Educational Resource (OER)',
    fileFormat: 'PDF',
    pages: 42,
    fileSize: '3.4 MB',
    downloads: 14200,
    rating: 4.9,
    description: 'Comprehensive tabular analysis of Fundamental Rights, landmark Supreme Court rulings (Kesavananda Bharati, Maneka Gandhi), writ jurisdictions (Article 32 & 226), and recent constitutional amendments.',
    previewContent: `
### Key Highlights & Table of Contents:
1. **Preamble of the Constitution**: Sovereign, Socialist, Secular, Democratic, Republic, Justice, Liberty, Equality, Fraternity.
2. **Right to Equality (Articles 14–18)**: Rule of law, prohibition of discrimination, equality of opportunity in public employment (Art 16), Abolition of Untouchability (Art 17).
3. **Right to Freedom (Articles 19–22)**: Protection of 6 basic freedoms, Protection in respect of conviction for offences, Protection of life & personal liberty (Art 21), Right to education (Art 21A).
4. **Right against Exploitation (Articles 23–24)**: Human trafficking, forced labor prohibition, child labor ban in hazardous employment.
5. **Right to Freedom of Religion (Articles 25–28)**: Freedom of conscience, management of religious affairs.
6. **Cultural & Educational Rights (Articles 29–30)**: Minority language, script and educational institutional rights.
7. **Constitutional Remedies (Article 32)**: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto writs.
    `,
    downloadUrl: '#',
    isRecommended: true
  },
  {
    id: 'mat-history-02',
    title: 'Modern Indian History: Freedom Struggle & Timeline (1857 to 1947)',
    category: 'notes',
    subject: 'Modern Indian History',
    authorOrSource: 'National Archives & NCERT Open Repository Summaries',
    license: 'Open Access / Creative Commons BY-SA',
    fileFormat: 'PDF',
    pages: 68,
    fileSize: '5.2 MB',
    downloads: 21500,
    rating: 4.8,
    description: 'Chronological timeline, major governor-generals, socio-religious reform movements, tribal/peasant uprisings, and Gandhian phases with quick-revision mind maps.',
    previewContent: `
### Chronological Master Timeline:
- **1857**: First War of Independence (Sepoy Mutiny) & Crown Rule transition.
- **1885**: Formation of Indian National Congress (A.O. Hume, W.C. Bonnerjee).
- **1905**: Partition of Bengal & Swadeshi Movement launch.
- **1919**: Montagu-Chelmsford Reforms & Jallianwala Bagh Massacre.
- **1920–1922**: Non-Cooperation Movement & Chauri Chaura incident.
- **1930**: Dandi March & Civil Disobedience Movement.
- **1942**: Quit India Resolution ('Do or Die').
- **1947**: Indian Independence Act passed by British Parliament.
    `,
    downloadUrl: '#',
    isRecommended: true
  },
  {
    id: 'mat-upsc-pyq-2025',
    title: 'UPSC Civil Services Prelims 2025: Solved Question Paper with Official Key',
    category: 'pyq',
    subject: 'Indian Polity',
    authorOrSource: 'UPSC Official Archives with GovtExamHub Verified Explanations',
    license: 'Public Record (Fair Dealing Educational Review)',
    fileFormat: 'PDF',
    pages: 36,
    fileSize: '2.8 MB',
    downloads: 38900,
    rating: 4.9,
    description: 'Complete 100 questions from General Studies Paper-1 with in-depth analytical explanations, syllabus mapping, and difficulty level categorization.',
    previewContent: `
### Solved Paper Breakdown:
- **Polity & Governance**: 15 Questions (High analytical depth)
- **Economy & Budget**: 16 Questions (Trend-based & Banking fundamentals)
- **Environment & Ecology**: 18 Questions (Species, National Parks, Ramsar sites)
- **History & Culture**: 14 Questions (Ancient Art & Bhakti-Sufi movements)
- **Science & Technology**: 12 Questions (AI, Quantum computing, Space missions)
- **Geography & International Relations**: 25 Questions (Mapping, Straits, Global conflicts)
    `,
    downloadUrl: '#',
    isRecommended: true
  },
  {
    id: 'mat-ssc-cgl-pyq',
    title: 'SSC CGL Tier-1 Previous 5 Years Solved Papers Compendium (2021–2025)',
    category: 'pyq',
    subject: 'Quantitative Aptitude',
    authorOrSource: 'SSC Previous Exam Board Transcripts',
    license: 'Educational Non-Commercial Use',
    fileFormat: 'PDF',
    pages: 112,
    fileSize: '8.6 MB',
    downloads: 45200,
    rating: 4.9,
    description: 'Over 500 hand-picked questions across Quantitative Aptitude, Reasoning, English Comprehension, and General Awareness with shortcut tricks.',
    previewContent: `
### Included Shift Papers:
- SSC CGL 2025 All Tier-1 Shift Papers (Shift 1, 2, 3)
- Topic-wise Weightage Analysis (Trigonometry 3 Qs, Geometry 3 Qs, Algebra 2 Qs)
- Speed math formulas and elimination techniques
- Error-free step-by-step solutions with alternative methods
    `,
    downloadUrl: '#',
    isRecommended: true
  },
  {
    id: 'mat-economy-budget',
    title: 'Union Budget 2026-27 & Economic Survey: Aspirant Quick Summary Handbook',
    category: 'free-pdf',
    subject: 'Economy',
    authorOrSource: 'Ministry of Finance / PIB Summarized for Aspirants',
    license: 'Government Public Information / Free Distribution',
    fileFormat: 'PDF',
    pages: 28,
    fileSize: '2.1 MB',
    downloads: 18400,
    rating: 4.7,
    description: 'Crisp bullet points on fiscal deficit targets, capital expenditure allocations, PLI schemes, green hydrogen mission, and tax slab highlights.',
    previewContent: `
### Union Budget Executive Digest:
- **Capital Expenditure (Capex)**: Allocation scaled for high-multiplier infrastructure projects.
- **Fiscal Deficit**: Target glidepath toward 4.5% of GDP.
- **Agriculture & Rural Growth**: PM-KISAN, Digital Agriculture Infrastructure, Agri-startups fund.
- **Key Schemas**: Semiconductor mission, PM Surya Ghar Muft Bijli Yojana, Rooftop solar expansion.
    `,
    downloadUrl: '#',
    isRecommended: true
  },
  {
    id: 'mat-quant-formula-book',
    title: 'Quantitative Aptitude Master Formula Sheet & Short Tricks Guide',
    category: 'notes',
    subject: 'Quantitative Aptitude',
    authorOrSource: 'GovtExamHub Math Faculty',
    license: 'Open Access CC-BY',
    fileFormat: 'PDF',
    pages: 32,
    fileSize: '2.9 MB',
    downloads: 29800,
    rating: 4.8,
    description: 'Essential formulas, quick square/cube root mental math, percentage fraction equivalents, time-speed-distance, and mensuration 2D/3D charts.',
    previewContent: `
### Formula Toolkit:
- **Fraction to % conversions**: 1/6 = 16.66%, 1/7 = 14.28%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%
- **Time & Work**: Men-Hours-Days work equivalence formula ($M_1 D_1 H_1 / W_1 = M_2 D_2 H_2 / W_2$)
- **Compound Interest**: 2-year difference between CI and SI = $P(R/100)^2$
- **Mensuration**: Curved surface area, total surface area, and volumes for cylinders, cones, and spheres.
    `,
    downloadUrl: '#',
    isRecommended: false
  },
  {
    id: 'mat-syllabus-upsc-guide',
    title: 'Official UPSC CSE Comprehensive Syllabus & Booklist Preparation Strategy',
    category: 'syllabus',
    subject: 'Indian Polity',
    authorOrSource: 'GovtExamHub Mentorship Team',
    license: 'Free Educational Guide',
    fileFormat: 'PDF',
    pages: 24,
    fileSize: '1.8 MB',
    downloads: 32100,
    rating: 4.9,
    description: 'Micro-listing of every GS 1, 2, 3, 4 topic, suggested standard textbooks, newspaper reading framework, and answer writing roadmap for beginners.',
    previewContent: `
### Preparation Blueprint:
- **Phase 1: Foundation (Months 1–4)**: NCERT Class 6–12 reading, basic concept building.
- **Phase 2: Standard Books (Months 5–9)**: Laxmikanth, Spectrum, Ramesh Singh / Sanjeev Sanyal.
- **Phase 3: Answer Writing & Current Affairs (Months 10–12)**: Daily editorial note-making, GS Mains test series.
- **Phase 4: Prelims Intensive (Last 3 Months)**: 40+ full length mock tests and PYQ mapping.
    `,
    downloadUrl: '#',
    isRecommended: false
  },
  {
    id: 'mat-science-handbook',
    title: 'General Science & Tech: Biology, Physics & Chemistry Quick Capsules',
    category: 'free-pdf',
    subject: 'General Science',
    authorOrSource: 'CSIR / NCERT Open Educational Resources',
    license: 'Public Domain / Free for Non-Commercial Distribution',
    fileFormat: 'PDF',
    pages: 54,
    fileSize: '4.7 MB',
    downloads: 16700,
    rating: 4.7,
    description: 'Human body systems, vitamins & deficiency diseases, light & optics, chemical compounds in daily life, nuclear tech, and space exploration missions.',
    previewContent: `
### Key Science Capsules:
- **Vitamins**: Vitamin A (Retinol - Night blindness), Vitamin C (Ascorbic acid - Scurvy), Vitamin D (Calciferol - Rickets).
- **Physics**: Newton's laws, total internal reflection, Doppler effect, convex vs concave lenses.
- **Chemistry**: pH scale, alloys (Bronze: Cu+Sn, Brass: Cu+Zn, Stainless Steel: Fe+Cr+Ni+C), common salts.
- **Space & Defence**: ISRO Gaganyaan mission, Chandrayaan, Agni-V MIRV missile technology.
    `,
    downloadUrl: '#',
    isRecommended: false
  }
];

