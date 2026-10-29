// GovtExamHub - Comprehensive Exam Data
// Note: All dates and vacancy figures are marked as demo/indicative data for prototype demonstration.
// Aspirants are advised to refer to the official recruitment portal links provided for live notifications.

export const EXAM_CATEGORIES = [
  { id: 'all', name: 'All Exams', icon: 'LayoutGrid' },
  { id: 'upsc', name: 'UPSC', icon: 'Award' },
  { id: 'ssc', name: 'SSC', icon: 'ShieldCheck' },
  { id: 'banking', name: 'Banking', icon: 'Landmark' },
  { id: 'railways', name: 'Railways', icon: 'Train' },
  { id: 'state-psc', name: 'State PSC', icon: 'MapPin' },
  { id: 'defence-police', name: 'Defence & Police', icon: 'Shield' },
  { id: 'teaching', name: 'Teaching', icon: 'GraduationCap' },
];

export const EXAMS_DATA = [
  {
    id: 'upsc-cse-2026',
    name: 'UPSC Civil Services Examination (CSE) 2026',
    shortName: 'UPSC CSE 2026',
    category: 'upsc',
    conductingAuthority: 'Union Public Service Commission (UPSC)',
    eligibility: "Bachelor's Degree in any discipline from a recognized University",
    ageLimit: '21 to 32 years (Relaxations for OBC/SC/ST as per rules)',
    applicationStart: 'February 11, 2026 (Demo)',
    applicationDeadline: 'March 05, 2026 (Demo)',
    examDate: 'May 24, 2026 (Prelims) (Demo)',
    vacancies: '1,056 (Demo Estimate)',
    officialWebsite: 'https://upsc.gov.in',
    status: 'Upcoming Notification',
    badgeColor: 'border-amber-500 text-amber-700 bg-amber-50',
    description: 'The premier national exam to recruit officers for IAS, IPS, IFS, IRS, and other Group A/B central civil services.',
    stages: [
      { name: 'Stage 1: Prelims', details: 'GS Paper I (200 marks) & CSAT Paper II (Qualifying 33%)' },
      { name: 'Stage 2: Mains Written', details: '9 Descriptive Papers (including Essay & Optional)' },
      { name: 'Stage 3: Personality Test', details: 'Interview in Dholpur House, New Delhi (275 marks)' }
    ],
    syllabus: [
      'Indian Polity & Governance: Constitution, Political System, Panchayati Raj, Public Policy',
      'History of India & Indian National Movement: Ancient, Medieval, Modern & Freedom Struggle',
      'Geography: Physical, Social, Economic Geography of India & the World',
      'Economic & Social Development: Sustainable Development, Poverty, Demographics',
      'General Issues on Environmental Ecology, Bio-diversity and Climate Change',
      'General Science & Current Events of National and International Importance'
    ],
    examMode: 'Offline (Pen & Paper OMR for Prelims / Descriptive for Mains)',
    applicationFee: '₹100 (Exempted for Female/SC/ST/PwBD candidates)'
  },
  {
    id: 'ssc-cgl-2026',
    name: 'SSC Combined Graduate Level (CGL) 2026',
    shortName: 'SSC CGL 2026',
    category: 'ssc',
    conductingAuthority: 'Staff Selection Commission (SSC)',
    eligibility: "Graduation in any discipline; specific posts require Math/Statistics",
    ageLimit: '18 to 30/32 years (Post-wise varies)',
    applicationStart: 'April 02, 2026 (Demo)',
    applicationDeadline: 'May 04, 2026 (Demo)',
    examDate: 'July 15–26, 2026 (Tier 1) (Demo)',
    vacancies: '14,500+ (Demo Estimate)',
    officialWebsite: 'https://ssc.gov.in',
    status: 'Applications Open Soon',
    badgeColor: 'border-blue-500 text-blue-700 bg-blue-50',
    description: 'Recruitment for Group B & C gazetted and non-gazetted posts across central government ministries, departments, and subordinate offices.',
    stages: [
      { name: 'Tier 1 (CBT)', details: '100 Questions: Reasoning, GA, Quant, English (200 Marks)' },
      { name: 'Tier 2 (CBT)', details: 'Paper-I: Math, Reasoning, English, GA, Computer Knowledge + Typing Test' }
    ],
    syllabus: [
      'General Intelligence & Reasoning: Analogy, Symbolic/Number Analogy, Syllogisms',
      'General Awareness: History, Culture, Geography, Economic Scene, General Policy & Scientific Research',
      'Quantitative Aptitude: Number Systems, Algebra, Geometry, Trigonometry, Menstruation, Arithmetic',
      'English Comprehension: Vocabulary, Grammar, Reading Comprehension, Error Spotting'
    ],
    examMode: 'Computer Based Test (CBT)',
    applicationFee: '₹100 (Exempted for Women/SC/ST/ESM)'
  },
  {
    id: 'ibps-po-2026',
    name: 'IBPS Probationary Officer (PO / MT-XVI) 2026',
    shortName: 'IBPS PO 2026',
    category: 'banking',
    conductingAuthority: 'Institute of Banking Personnel Selection (IBPS)',
    eligibility: 'Degree (Graduation) in any discipline from a Govt recognized University',
    ageLimit: '20 to 30 years',
    applicationStart: 'August 01, 2026 (Demo)',
    applicationDeadline: 'August 28, 2026 (Demo)',
    examDate: 'October 18–19, 2026 (Prelims) (Demo)',
    vacancies: '4,450 (Demo Estimate)',
    officialWebsite: 'https://www.ibps.in',
    status: 'Upcoming Exam',
    badgeColor: 'border-emerald-500 text-emerald-700 bg-emerald-50',
    description: 'Recruitment of Probationary Officers / Management Trainees across 11 Participating Public Sector Banks in India.',
    stages: [
      { name: 'Prelims Examination', details: '100 MCQs (English, Quantitative Aptitude, Reasoning Ability) - 60 mins' },
      { name: 'Mains Examination', details: 'Objective (200 marks) + Descriptive English Essay & Letter (25 marks)' },
      { name: 'Interview', details: 'Conducted jointly by Participating Banks and coordinated by IBPS (100 marks)' }
    ],
    syllabus: [
      'Reasoning & Computer Aptitude: Puzzles, Seating Arrangement, Coding-Decoding, Machine Input-Output',
      'Data Analysis & Interpretation: Tabular, Pie Chart, Bar Graph, Caselet DI, Probability',
      'General Economy & Banking Awareness: RBI Notifications, Monetary Policy, Financial Inclusion, Static GK',
      'English Language: Reading Comprehension, Cloze Test, Para Jumbles, Error Detection'
    ],
    examMode: 'Online CBT Mode',
    applicationFee: '₹850 (₹175 for SC/ST/PwBD)'
  },
  {
    id: 'sbi-po-2026',
    name: 'State Bank of India (SBI) PO 2026',
    shortName: 'SBI PO 2026',
    category: 'banking',
    conductingAuthority: 'State Bank of India (SBI Central Recruitment Board)',
    eligibility: 'Graduation in any discipline (final year students may also apply provisionally)',
    ageLimit: '21 to 30 years',
    applicationStart: 'September 10, 2026 (Demo)',
    applicationDeadline: 'October 03, 2026 (Demo)',
    examDate: 'November 2026 (Prelims) (Demo)',
    vacancies: '2,000 (Demo Estimate)',
    officialWebsite: 'https://sbi.co.in/careers',
    status: 'Upcoming Exam',
    badgeColor: 'border-indigo-500 text-indigo-700 bg-indigo-50',
    description: 'Premier banking recruitment exam for entry-level officer cadre in India’s largest public sector lender.',
    stages: [
      { name: 'Phase I: Preliminary Exam', details: '100 Marks Objective Test with sectional timing' },
      { name: 'Phase II: Main Exam', details: 'Objective (200 marks) + Descriptive (50 marks)' },
      { name: 'Phase III: Psychometric, GD & Interview', details: 'Group Exercise (20 marks) & Interview (30 marks)' }
    ],
    syllabus: [
      'Logical & High-level Puzzles, Critical Reasoning',
      'Advanced Data Interpretation & Mathematical Models',
      'General / Economy / Financial Awareness and Current Affairs',
      'Letter and Essay Writing in English'
    ],
    examMode: 'Online CBT',
    applicationFee: '₹750 (Nil for SC/ST/PwBD)'
  },
  {
    id: 'rrb-ntpc-2026',
    name: 'Railway Recruitment Board NTPC (Non-Technical Popular Categories)',
    shortName: 'RRB NTPC 2026',
    category: 'railways',
    conductingAuthority: 'Railway Recruitment Boards (Ministry of Railways)',
    eligibility: '12th Pass (Undergraduate posts) or Bachelor’s Degree (Graduate posts)',
    ageLimit: '18 to 33/36 years (with relaxation)',
    applicationStart: 'July 14, 2026 (Demo)',
    applicationDeadline: 'August 15, 2026 (Demo)',
    examDate: 'December 2026 (CBT-1) (Demo)',
    vacancies: '11,558 (Demo Estimate)',
    officialWebsite: 'https://indianrailways.gov.in',
    status: 'Notice Anticipated',
    badgeColor: 'border-orange-500 text-orange-700 bg-orange-50',
    description: 'Recruitment for Station Master, Goods Train Manager, Junior Accounts Assistant, Commercial Clerk, and Traffic Assistant in Indian Railways.',
    stages: [
      { name: '1st Stage CBT', details: '100 Questions: General Awareness (40), Mathematics (30), Reasoning (30)' },
      { name: '2nd Stage CBT', details: '120 Questions: General Awareness (50), Mathematics (35), Reasoning (35)' },
      { name: 'CBAT / Typing Skill Test', details: 'Computer-based Aptitude Test (for Station Master) / Typing' },
      { name: 'Document Verification & Medical', details: 'Strict Railway Medical Standards A2/A3/B2' }
    ],
    syllabus: [
      'Mathematics: Number System, Decimals, Fractions, LCM, HCF, Ratio, Percentages, Mensuration, Time & Work',
      'General Intelligence & Reasoning: Analogies, Syllogism, Jumbling, Venn Diagrams, Coding and Decoding',
      'General Awareness: Current Events of National & International Importance, Games & Sports, Art & Culture of India'
    ],
    examMode: 'Computer Based Test in 15 Languages',
    applicationFee: '₹500 (₹400 refunded on attending CBT-1; ₹250 for reserved categories)'
  },
  {
    id: 'uppsc-pcs-2026',
    name: 'UPPSC Combined State / Upper Subordinate Services (PCS) 2026',
    shortName: 'UPPSC PCS 2026',
    category: 'state-psc',
    conductingAuthority: 'Uttar Pradesh Public Service Commission (UPPSC, Prayagraj)',
    eligibility: "Bachelor's Degree from recognized Indian University; specific posts require Law/Commerce",
    ageLimit: '21 to 40 years (Relaxations for UP domicile categories)',
    applicationStart: 'January 20, 2026 (Demo)',
    applicationDeadline: 'February 22, 2026 (Demo)',
    examDate: 'June 07, 2026 (Prelims) (Demo)',
    vacancies: '220+ (Demo Estimate)',
    officialWebsite: 'https://uppsc.up.nic.in',
    status: 'Application Active (Demo)',
    badgeColor: 'border-purple-500 text-purple-700 bg-purple-50',
    description: 'Executive officers recruitment for Sub-Divisional Magistrate (SDM), Deputy SP, ARTO, Block Development Officer (BDO) in Uttar Pradesh.',
    stages: [
      { name: 'Preliminary Examination', details: 'Paper I (General Studies - 200 marks) & Paper II (CSAT qualifying)' },
      { name: 'Mains Examination', details: '8 Descriptive Papers (General Hindi, Essay, GS-I to GS-VIII with UP Special papers)' },
      { name: 'Interview / Personality Test', details: '100 Marks viva voce in Prayagraj' }
    ],
    syllabus: [
      'General Studies Papers 1 to 4: History, Geography, Polity, Governance, Economy, Ethics',
      'UP Special Papers 5 and 6: Uttar Pradesh History, Culture, Economy, Polity, Science, Environment',
      'CSAT Paper: Interpersonal Skills, Logical Reasoning, General Hindi, General English, Elementary Mathematics'
    ],
    examMode: 'Pen & Paper OMR and Conventional Written',
    applicationFee: '₹125 (General/OBC), ₹65 (SC/ST), ₹25 (PwBD)'
  },
  {
    id: 'bpsc-cce-2026',
    name: 'BPSC 71st Combined Competitive Examination (CCE) 2026',
    shortName: 'BPSC 71st CCE',
    category: 'state-psc',
    conductingAuthority: 'Bihar Public Service Commission (BPSC, Patna)',
    eligibility: 'Graduation in any stream from recognized University',
    ageLimit: '20/21/22 to 37 years (Male) / 40 years (Female)',
    applicationStart: 'May 15, 2026 (Demo)',
    applicationDeadline: 'June 18, 2026 (Demo)',
    examDate: 'September 30, 2026 (Prelims) (Demo)',
    vacancies: '1,950 (Demo Estimate)',
    officialWebsite: 'https://bpsc.bih.nic.in',
    status: 'Upcoming Exam',
    badgeColor: 'border-rose-500 text-rose-700 bg-rose-50',
    description: 'State civil service recruitment for SDM, DSP, Commercial Tax Officer, and Revenue Officers in Government of Bihar.',
    stages: [
      { name: 'Integrated Prelims (CCE)', details: '150 Questions (Negative marking 1/3rd) - 2 Hours' },
      { name: 'Mains Examination', details: 'General Hindi (Qualifying), GS-1, GS-2, Essay (300 Marks), Optional (Qualifying)' },
      { name: 'Personality Test', details: '120 Marks Interview at BPSC Office, Patna' }
    ],
    syllabus: [
      'General Science, Contemporary Events of National and International Importance',
      'History of India and Salient Features of the History of Bihar, Bihar Modern Freedom Movement',
      'General Geography and Geographical Division of Bihar & its Major River Systems',
      'Indian Polity and Economy, Major Changes in Economy of Bihar Post-Independence'
    ],
    examMode: 'Offline OMR (Prelims) / Pen-Paper (Mains)',
    applicationFee: '₹600 (₹150 for SC/ST and Women of Bihar)'
  },
  {
    id: 'defence-nda-2026',
    name: 'UPSC National Defence Academy & Naval Academy (NDA-I) 2026',
    shortName: 'UPSC NDA-I 2026',
    category: 'defence-police',
    conductingAuthority: 'Union Public Service Commission (UPSC)',
    eligibility: '12th Class Pass (Physics & Math required for Air Force & Navy wings)',
    ageLimit: '16.5 to 19.5 years (Unmarried Male & Female candidates)',
    applicationStart: 'December 24, 2025 (Demo)',
    applicationDeadline: 'January 14, 2026 (Demo)',
    examDate: 'April 19, 2026 (Demo)',
    vacancies: '404 (Demo Estimate)',
    officialWebsite: 'https://upsc.gov.in',
    status: 'Admit Cards Expected',
    badgeColor: 'border-red-500 text-red-700 bg-red-50',
    description: 'Premier joint services academy entrance for training commissioned officers for Army, Navy, and Air Force wings.',
    stages: [
      { name: 'Written Examination', details: 'Mathematics (300 marks, 2.5 hrs) + General Ability Test GAT (600 marks, 2.5 hrs)' },
      { name: 'Services Selection Board (SSB)', details: '5-Day SSB Interview including Psychological Tests, GTO, and Conference (900 marks)' },
      { name: 'Medical Examination', details: 'Conducted at designated Military Hospitals' }
    ],
    syllabus: [
      'Mathematics: Algebra, Matrices, Trigonometry, Analytical Geometry, Differential & Integral Calculus',
      'GAT Part A (English): Grammar and usage, vocabulary, comprehension',
      'GAT Part B (General Knowledge): Physics, Chemistry, General Science, History, Geography & Current Events'
    ],
    examMode: 'Offline (Pen and Paper OMR Sheet)',
    applicationFee: '₹100 (Exempted for SC/ST and Female candidates)'
  },
  {
    id: 'police-delhi-si-2026',
    name: 'SSC Sub-Inspector in Delhi Police & Central Armed Police Forces (CAPFs) 2026',
    shortName: 'Delhi Police & CAPF SI 2026',
    category: 'defence-police',
    conductingAuthority: 'Staff Selection Commission (SSC)',
    eligibility: 'Bachelor’s degree from a recognized university; Valid Driving License for Delhi Police',
    ageLimit: '20 to 25 years',
    applicationStart: 'March 10, 2026 (Demo)',
    applicationDeadline: 'April 08, 2026 (Demo)',
    examDate: 'June 2026 (Paper 1) (Demo)',
    vacancies: '4,187 (Demo Estimate)',
    officialWebsite: 'https://ssc.gov.in',
    status: 'Upcoming Exam',
    badgeColor: 'border-teal-500 text-teal-700 bg-teal-50',
    description: 'Direct recruitment of Sub-Inspectors (Executive) in Delhi Police and Sub-Inspectors (GD) in BSF, CISF, CRPF, ITBP, and SSB.',
    stages: [
      { name: 'Paper I (CBT)', details: '200 Marks (Reasoning, GK, Math, English - 50 questions each)' },
      { name: 'PST / PET', details: 'Physical Standard & Endurance Test (100m sprint, 1.6km run, Long Jump, High Jump)' },
      { name: 'Paper II (CBT)', details: 'English Language & Comprehension (200 marks - 200 questions)' },
      { name: 'Detailed Medical Exam (DME)', details: 'Medical Fitness by CAPF Medical Board' }
    ],
    syllabus: [
      'General Intelligence & Reasoning: Spatial orientation, Coding-decoding, Non-verbal series',
      'General Knowledge & Awareness: Current events, India and neighboring countries, Scientific research',
      'Quantitative Aptitude: Whole numbers, decimals, fractions, percentages, profit & loss, algebra',
      'English Language: Error recognition, filling blanks, vocabulary, idioms & phrases'
    ],
    examMode: 'Computer Based Examination',
    applicationFee: '₹100 (Women / SC / ST / ESM exempt)'
  },
  {
    id: 'ctet-july-2026',
    name: 'Central Teacher Eligibility Test (CTET) July 2026',
    shortName: 'CTET July 2026',
    category: 'teaching',
    conductingAuthority: 'Central Board of Secondary Education (CBSE)',
    eligibility: 'Senior Secondary with 50% marks & 2-year D.El.Ed / Graduation with B.Ed',
    ageLimit: '18+ years (No upper age limit)',
    applicationStart: 'March 01, 2026 (Demo)',
    applicationDeadline: 'April 02, 2026 (Demo)',
    examDate: 'July 05, 2026 (Demo)',
    vacancies: 'National Eligibility Certificate (Valid for Lifetime)',
    officialWebsite: 'https://ctet.nic.in',
    status: 'Upcoming Exam',
    badgeColor: 'border-sky-500 text-sky-700 bg-sky-50',
    description: 'Mandatory national eligibility test for teaching appointments in Central Govt Schools (KVS, NVS, Central Tibetan Schools, etc.).',
    stages: [
      { name: 'Paper I (Classes I to V)', details: '150 MCQs: Child Development & Pedagogy, Math, EVS, Language I & II' },
      { name: 'Paper II (Classes VI to VIII)', details: '150 MCQs: Child Development, Science/Math OR Social Studies, Language I & II' }
    ],
    syllabus: [
      'Child Development and Pedagogy: Concept of development, Inclusive education, Learning and pedagogy',
      'Mathematics & Environmental Studies: Content & Pedagogical issues',
      'Language I and II: Comprehension and Language Development Pedagogy',
      'Social Studies / Science: Concept, Pedagogy, Experiments, Evaluation'
    ],
    examMode: 'Offline OMR Mode (CBSE Centers Pan-India)',
    applicationFee: '₹1,000 for 1 Paper / ₹1,200 for both Papers (₹500/₹600 for SC/ST/PwD)'
  },
  {
    id: 'ugc-net-2026',
    name: 'UGC National Eligibility Test (NET / JRF) June 2026',
    shortName: 'UGC NET June 2026',
    category: 'teaching',
    conductingAuthority: 'National Testing Agency (NTA)',
    eligibility: 'Master’s degree with minimum 55% marks (50% for reserved categories)',
    ageLimit: 'JRF: Max 30 years | Assistant Professor: No upper age limit',
    applicationStart: 'April 10, 2026 (Demo)',
    applicationDeadline: 'May 10, 2026 (Demo)',
    examDate: 'June 18–28, 2026 (Demo)',
    vacancies: 'Assistant Professorship & Junior Research Fellowship Eligibility',
    officialWebsite: 'https://ugcnet.nta.ac.in',
    status: 'Upcoming Exam',
    badgeColor: 'border-violet-500 text-violet-700 bg-violet-50',
    description: 'National level eligibility test to determine suitability for Assistant Professor and award of Junior Research Fellowship across Indian Universities.',
    stages: [
      { name: 'Paper 1 (General)', details: '50 Questions: Teaching Aptitude, Research Aptitude, Reading Comprehension, Higher Education (100 Marks)' },
      { name: 'Paper 2 (Subject Specific)', details: '100 Questions based on chosen Master’s subject (200 Marks)' }
    ],
    syllabus: [
      'Teaching & Research Aptitude: Methods of teaching, thesis writing, ethics, ICT in research',
      'Comprehension, Mathematical Reasoning, Logical Reasoning, Data Interpretation',
      'People, Development and Environment: Sustainable development goals, environmental pollution, natural hazards',
      'Higher Education System: Institutions of higher learning and education in ancient and modern India'
    ],
    examMode: 'Computer Based Test (CBT)',
    applicationFee: '₹1,150 (General), ₹600 (Gen-EWS/OBC-NCL), ₹325 (SC/ST/PwD)'
  }
];

