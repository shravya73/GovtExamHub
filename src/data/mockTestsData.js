// GovtExamHub - Interactive Mock Tests & Practice Quizzes Data

export const MOCK_TESTS_DATA = [
  {
    id: 'mock-gk-polity-speed',
    title: 'General Awareness & Indian Constitution Sprint',
    targetExam: 'UPSC CSE / State PSC / SSC CGL',
    category: 'General Studies',
    durationMinutes: 10,
    totalQuestions: 10,
    positiveMarks: 2,
    negativeMarks: 0.66,
    difficulty: 'Medium to High',
    description: 'High-yield practice test covering Indian Constitution, Fundamental Rights, Modern History, and current general knowledge.',
    questions: [
      {
        id: 'q1',
        question: 'Under which Article of the Constitution of India is the Right to Equality in matters of public employment guaranteed?',
        options: [
          'Article 14',
          'Article 15',
          'Article 16',
          'Article 19'
        ],
        correctAnswer: 2, // Index 2 is Article 16
        explanation: 'Article 16 of the Indian Constitution provides for equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.'
      },
      {
        id: 'q2',
        question: 'Which Constitutional Amendment Act is known as the "Mini-Constitution" of India due to the extensive changes it introduced?',
        options: [
          '42nd Amendment Act, 1976',
          '44th Amendment Act, 1978',
          '73rd Amendment Act, 1992',
          '86th Amendment Act, 2002'
        ],
        correctAnswer: 0, // 42nd Amendment
        explanation: 'The 42nd Constitutional Amendment Act of 1976 is termed the "Mini-Constitution" because it made comprehensive changes to the Preamble, Directive Principles, and judicial powers.'
      },
      {
        id: 'q3',
        question: 'Who among the following presided over the historic 1929 Lahore Session of the Indian National Congress where "Purna Swaraj" was declared?',
        options: [
          'Mahatma Gandhi',
          'Jawaharlal Nehru',
          'Subhash Chandra Bose',
          'Sardar Vallabhbhai Patel'
        ],
        correctAnswer: 1, // Jawaharlal Nehru
        explanation: 'Jawaharlal Nehru presided over the December 1929 Lahore session of the Indian National Congress, where the historic resolution demanding Purna Swaraj (Complete Independence) was adopted.'
      },
      {
        id: 'q4',
        question: 'Which writ is issued by the High Court or Supreme Court to quash the order of an inferior court or tribunal if it has exceeded its jurisdiction?',
        options: [
          'Habeas Corpus',
          'Mandamus',
          'Certiorari',
          'Quo-Warranto'
        ],
        correctAnswer: 2, // Certiorari
        explanation: 'A writ of Certiorari is issued by a higher court to an inferior court or tribunal either to transfer a case pending with the latter to itself or to squash the order of the latter.'
      },
      {
        id: 'q5',
        question: 'The Monetary Policy Committee (MPC) of the Reserve Bank of India consists of how many total members?',
        options: [
          '4 members',
          '5 members',
          '6 members',
          '8 members'
        ],
        correctAnswer: 2, // 6 members
        explanation: 'The Monetary Policy Committee (MPC) consists of 6 members: three members from the RBI (including the Governor as ex-officio Chairperson) and three external members appointed by the Central Government.'
      },
      {
        id: 'q6',
        question: 'Which of the following mountain passes connects the Kashmir Valley with Ladakh?',
        options: [
          'Zojila Pass',
          'Rohtang Pass',
          'Nathu La Pass',
          'Shipki La Pass'
        ],
        correctAnswer: 0, // Zojila Pass
        explanation: 'Zojila Pass is a high mountain pass in the Himalayas located on National Highway 1 between Srinagar and Leh in Ladakh.'
      },
      {
        id: 'q7',
        question: 'In the Indian financial system, what is the full form of RTGS used in fund transfers?',
        options: [
          'Real Time Gross Settlement',
          'Rapid Transfer Guaranteed System',
          'Real Time General Settlement',
          'Regional Transaction Gateway Service'
        ],
        correctAnswer: 0, // Real Time Gross Settlement
        explanation: 'RTGS stands for Real Time Gross Settlement. Continuous and real-time settlement of fund-transfers is done individually on a transaction by transaction basis.'
      },
      {
        id: 'q8',
        question: 'Under the 73rd Constitutional Amendment Act, 1992, which Schedule was added to the Constitution of India?',
        options: [
          '9th Schedule',
          '10th Schedule',
          '11th Schedule',
          '12th Schedule'
        ],
        correctAnswer: 2, // 11th Schedule
        explanation: 'The 73rd Amendment Act added the 11th Schedule containing 29 functional items placed within the purview of the Panchayats.'
      },
      {
        id: 'q9',
        question: 'Which gas is predominantly responsible for the greenhouse effect on Earth?',
        options: [
          'Methane ($CH_4$)',
          'Carbon Dioxide ($CO_2$)',
          'Water Vapor ($H_2O$)',
          'Nitrous Oxide ($N_2O$)'
        ],
        correctAnswer: 2, // Water vapor is the largest contributor to natural greenhouse effect, though CO2 is the primary anthropogenic driver
        explanation: 'While Carbon Dioxide is the primary anthropogenic contributor, Water Vapor is the most abundant and responsible for about 36% to 70% of the natural greenhouse effect.'
      },
      {
        id: 'q10',
        question: 'Who is the ex-officio Chairman of the Rajya Sabha (Council of States) in India?',
        options: [
          'The President of India',
          'The Vice-President of India',
          'The Prime Minister of India',
          'The Speaker of Lok Sabha'
        ],
        correctAnswer: 1, // Vice-President
        explanation: 'According to Article 64 of the Indian Constitution, the Vice-President of India is the ex-officio Chairman of the Council of States (Rajya Sabha).'
      }
    ]
  },
  {
    id: 'mock-quant-reasoning',
    title: 'Quantitative Aptitude & Speed Math Sprint',
    targetExam: 'SSC CGL / Banking / Railways NTPC',
    category: 'Quantitative Aptitude',
    durationMinutes: 8,
    totalQuestions: 6,
    positiveMarks: 2,
    negativeMarks: 0.5,
    difficulty: 'Moderate',
    description: 'Test your calculation speed, percentage logic, ratios, and time-and-work shortcuts commonly asked in SSC & Bank exams.',
    questions: [
      {
        id: 'qm1',
        question: 'A can complete a piece of work in 12 days and B can complete the same work in 24 days. Working together, in how many days will they finish the work?',
        options: [
          '6 days',
          '8 days',
          '10 days',
          '16 days'
        ],
        correctAnswer: 1, // 8 days
        explanation: '1-day work of A = 1/12. 1-day work of B = 1/24. Combined 1-day work = 1/12 + 1/24 = (2 + 1)/24 = 3/24 = 1/8. Hence, together they take 8 days.'
      },
      {
        id: 'qm2',
        question: 'If the cost price of 15 articles is equal to the selling price of 12 articles, find the profit percentage.',
        options: [
          '20%',
          '25%',
          '30%',
          '33.33%'
        ],
        correctAnswer: 1, // 25%
        explanation: 'Let CP of 1 article = ₹1. CP of 12 articles = ₹12. SP of 12 articles = CP of 15 articles = ₹15. Profit = 15 - 12 = ₹3. Profit % = (3 / 12) * 100 = 25%.'
      },
      {
        id: 'qm3',
        question: 'A train traveling at 72 km/h crosses an electric pole in 15 seconds. What is the length of the train?',
        options: [
          '200 meters',
          '250 meters',
          '300 meters',
          '350 meters'
        ],
        correctAnswer: 2, // 300 meters
        explanation: 'Speed in m/s = 72 * (5/18) = 20 m/s. Length of train = Speed * Time = 20 m/s * 15 s = 300 meters.'
      },
      {
        id: 'qm4',
        question: 'The average age of 24 students and their teacher is 15 years. If the teacher’s age is excluded, the average decreases by 1 year. What is the teacher’s age?',
        options: [
          '35 years',
          '39 years',
          '40 years',
          '42 years'
        ],
        correctAnswer: 1, // 39 years
        explanation: 'Total age of 25 persons = 25 * 15 = 375 years. Age of 24 students with avg 14 = 24 * 14 = 336 years. Teacher’s age = 375 - 336 = 39 years.'
      },
      {
        id: 'qm5',
        question: 'What is the simple interest on a principal of ₹8,000 invested at 7.5% per annum for 4 years?',
        options: [
          '₹2,100',
          '₹2,400',
          '₹2,600',
          '₹2,800'
        ],
        correctAnswer: 1, // ₹2,400
        explanation: 'Simple Interest = (P * R * T) / 100 = (8000 * 7.5 * 4) / 100 = 80 * 30 = ₹2,400.'
      },
      {
        id: 'qm6',
        question: 'In a code language, if DELHI is coded as CCIDD, how is BOMBAY coded?',
        options: [
          'AMJXVS',
          'ANLXVR',
          'ALJYWS',
          'AMKZVR'
        ],
        correctAnswer: 0, // AMJXVS: D(-1)=C, E(-2)=C, L(-3)=I, H(-4)=D, I(-5)=D; B(-1)=A, O(-2)=M, M(-3)=J, B(-4)=X, A(-5)=V, Y(-6)=S
        explanation: 'Pattern: Subtract increasing sequence (-1, -2, -3, -4, -5, -6) from each letter: B-1=A, O-2=M, M-3=J, B-4=X, A-5=V, Y-6=S. Thus AMJXVS.'
      }
    ]
  },
  {
    id: 'mock-ssc-cgl-mini',
    title: 'SSC CGL Tier-1 Mini Practice Test',
    targetExam: 'SSC CGL / CHSL / CPO',
    category: 'SSC Mock',
    durationMinutes: 10,
    totalQuestions: 8,
    positiveMarks: 2,
    negativeMarks: 0.5,
    difficulty: 'Moderate',
    description: 'Mixed bag containing Reasoning, English vocabulary, General Awareness, and Arithmetic shortcuts.',
    questions: [
      {
        id: 'sc1',
        question: 'Select the synonym of the given word: "METICULOUS"',
        options: [
          'Careless',
          'Painstaking',
          'Hasty',
          'Superficial'
        ],
        correctAnswer: 1,
        explanation: 'Meticulous means showing great attention to detail; very careful and precise. Painstaking is the exact synonym.'
      },
      {
        id: 'sc2',
        question: 'Identify the segment in the sentence that contains a grammatical error: "Neither of the two candidates have submitted their original documents."',
        options: [
          'Neither of the',
          'two candidates',
          'have submitted',
          'their original documents'
        ],
        correctAnswer: 2,
        explanation: '"Neither of" is followed by a plural noun but takes a singular verb. It should be "has submitted", not "have submitted".'
      },
      {
        id: 'sc3',
        question: 'Who was the founder of the Maurya Empire with the guidance of Chanakya?',
        options: [
          'Bindusara',
          'Chandragupta Maurya',
          'Ashoka the Great',
          'Brihadratha'
        ],
        correctAnswer: 1,
        explanation: 'Chandragupta Maurya founded the Maurya Empire in 322 BCE after overthrowing the Nanda dynasty with the counsel of Chanakya (Kautilya).'
      },
      {
        id: 'sc4',
        question: 'Which of the following rivers originates from Trimbakeshwar near Nashik in Maharashtra?',
        options: [
          'Krishna River',
          'Godavari River',
          'Cauvery River',
          'Narmada River'
        ],
        correctAnswer: 1,
        explanation: 'The Godavari River, often referred to as Dakshin Ganga, originates at Trimbakeshwar near Nashik in Maharashtra.'
      },
      {
        id: 'sc5',
        question: 'Find the missing number in the series: 4, 9, 25, 49, 121, ?',
        options: [
          '144',
          '169',
          '196',
          '225'
        ],
        correctAnswer: 1,
        explanation: 'The series consists of squares of prime numbers: $2^2 = 4$, $3^2 = 9$, $5^2 = 25$, $7^2 = 49$, $11^2 = 121$, next prime is 13, so $13^2 = 169$.'
      },
      {
        id: 'sc6',
        question: 'The diagonal of a square is 10 cm. What is the area of the square?',
        options: [
          '25 sq cm',
          '50 sq cm',
          '100 sq cm',
          '75 sq cm'
        ],
        correctAnswer: 1,
        explanation: 'Area of a square = $(Diagonal^2) / 2 = (10^2) / 2 = 100 / 2 = 50\\text{ sq cm}$.'
      },
      {
        id: 'sc7',
        question: 'Which Article of the Constitution abolishes Untouchability and forbids its practice in any form?',
        options: [
          'Article 15',
          'Article 17',
          'Article 18',
          'Article 23'
        ],
        correctAnswer: 1,
        explanation: 'Article 17 explicitly abolishes "Untouchability" and its practice in any form is forbidden.'
      },
      {
        id: 'sc8',
        question: 'Select the most appropriate antonym of the word: "EPHEMERAL"',
        options: [
          'Transient',
          'Fleeting',
          'Permanent',
          'Short-lived'
        ],
        correctAnswer: 2,
        explanation: 'Ephemeral means lasting for a very short time. Its opposite (antonym) is permanent or eternal.'
      }
    ]
  }
];

