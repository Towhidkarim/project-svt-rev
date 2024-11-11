export const courseCategories = [
  'Security Courses',
  'Functional Skills',
  'Health and Social Care ',
  'Business Course',
  'SERU Course',
  'Construction Course',
  'Vocational Courses',
] as const;

type TCourseInfoType = {
  category: (typeof courseCategories)[number];
  courseUniqueId: string;
  imageUrl: string;
  title: string;
  subTitle: string;
  caption: string;
  suitedFor: string[];
  forYouIf: string[];
  covers: string;
  courseStructure: string;
  mandatoryUnits: {
    code: string;
    desc: string;
  }[];
  optionalUnits: {
    code: string;
    desc: string;
  }[];
  pricing: string;
  priceInCurrency: number;
  assesment: string;
  duration: string;
  entryRequirements: string;
  why: string;
};

export const courseInfo: TCourseInfoType[] = [
  {
    category: 'Security Courses',
    courseUniqueId: '1',
    imageUrl: '/door-supervisor.jpg',
    title: 'Level 2 Door Supervisor',
    subTitle: 'Advance your career in the security industry',
    caption:
      'Looking to advance your career in the security industry? Look no further than Greenwich Central Colleges Level 2 Door Supervisor Course!',
    suitedFor: [
      'Age: You must be at least 18 years old at the time of enrollment.',
      'Language: You must have a good level of spoken and written English. This is essential for understanding the course',
      'Identification: You must provide valid photo identification, such as a passport or driving license, to confirm your identity.',
      'Criminal Record: You must not have any criminal convictions that would prevent you from obtaining an SIA license. Any relevant criminal record will be assessed on a case-by-case basis.',
    ],
    forYouIf: [
      'Door Supervisor: As a licensed door supervisor, you’ll be responsible for ensuring the safety and security of customers at licensed premises, such as nightclubs and bars.',
      'Security Guard: With your Level 2 Door Supervisor qualification, you’ll have the necessary training to become a security guard in a range of different settings,',
      'Event Security: Event security is a growing field, and your door supervisor qualification will put you in a strong position to work at festivals, concerts, and sporting events.',
      'Retail Security: Retail security is an essential service, and as a trained door supervisor, you’ll be well-equipped to protect businesses from theft, vandalism.',
      'Close Protection Officer: If you’re interested in working with high-profile clients, completing the Level 2 Door Supervisor Course is an excellent first step towards becoming a close protection officer.',
    ],
    covers: 'Covers certain aspect',
    courseStructure:
      'The learning material is provided electronically via the "Learning Assistant Portal" which shows your progress throughout and allows you to instantly message your assessor.  The assessment team will monitor your progress through our user-friendly platform to offer you support and guidance throughout the course. There is unlimited support and you can call, message or email your assessor as often as you wish. ',
    mandatoryUnits: [],
    optionalUnits: [],
    pricing: 'The cost of the course is $350.00+VAT. ',
    priceInCurrency: 350,
    assesment: ' ',
    duration: 'Varies',
    entryRequirements: 'Mentioned Above',
    why: '',
  },
  {
    category: 'Security Courses',
    courseUniqueId: '2',
    imageUrl: '/cctv-supervisor.jpg',
    title: 'CCTV Supervisor',
    subTitle: 'Take your career in the security industry to the next level',
    caption:
      'Are you ready to take your career in the security industry to the next level? Look no further than the Level 2 CCTV Supervisor Course at Greenwich Central College in the UK.This comprehensive course is designed to equip you with the skills and knowledge you need to become a competent and effective CCTV supervisor. From understanding the legal requirements and regulations surrounding CCTV operations to mastering the latest technologies and techniques, this course covers everything you need to know.',
    suitedFor: [
      'Be at least 18 years old',
      'Have a good understanding of spoken and written English',
      'Hold a valid SIA CCTV Operator license or a Level 2 Award for Working as a CCTV Operator (Public Space Surveillance) within the Private Security Industry qualification',
    ],
    forYouIf: [
      'CCTV Supervisor: With this qualification, you will be able to work as a CCTV supervisor, overseeing and managing the operation of a CCTV control room.',
      'Security Manager: This qualification can be a stepping stone towards becoming a security manager. You could be responsible for managing a team of security personnel, overseeing the overall security operations of a site or organization.',
      'Private Security Consultant: You may also have the option of working as a private security consultant, providing expert advice and guidance to organizations on their security needs and operations.',
      'Surveillance Investigator: This qualification can also lead to a career as a surveillance investigator, working in the private or public sector to conduct surveillance operations in support of investigations.',
      'Loss Prevention Officer: You may also be eligible to work as a loss prevention officer, responsible for preventing theft, fraud and other forms of criminal activity within a retail or commercial environment.',
    ],
    covers: 'Covers certain aspect',
    courseStructure:
      'The learning material is provided electronically via the "Learning Assistant Portal" which shows your progress throughout and allows you to instantly message your assessor.  The assessment team will monitor your progress through our user-friendly platform to offer you support and guidance throughout the course. There is unlimited support and you can call, message or email your assessor as often as you wish. ',
    mandatoryUnits: [],
    optionalUnits: [],
    pricing: 'The cost of the course is $350.00+VAT. ',
    priceInCurrency: 350,
    assesment: ' ',
    duration: 'Varies',
    entryRequirements: 'Mentioned Above',
    why: 'This comprehensive course is designed to equip you with the skills and knowledge you need to become a competent and effective CCTV supervisor. From understanding the legal requirements and regulations surrounding CCTV operations to mastering the latest technologies and techniques, this course covers everything you need to know.',
  },
  {
    category: 'Functional Skills',
    courseUniqueId: '3',
    imageUrl: '/gen1.png',
    title: 'General English',
    subTitle:
      'Our General English course is designed for those currently at Beginner A1 to Upper Intermediate B2+ levels who want to improve their knowledge of the English language',
    caption:
      'Our General English course is designed for those currently at Beginner A1 to Upper Intermediate B2+ levels who want to improve their knowledge of the English language, pronunciation, accent, and confidence. By taking this English language course, you will develop your practical English communication skills in speaking and writing, reading and listening, and, of course, your fluency and grammatical accuracy. You will increase your confidence when using your language skills in English for everyday use, whether it’s for work, study, travel, or personal interest.Our friendly and supportive teachers will give you the individual attention you need with regular one-to-one tutorials. You will have the chance to practice your spoken English in discussions, debates, role-play, and pair work, and learn to use English in everyday situations. The course will help you by teaching you the skills you can use in your everyday life in the UK.',
    suitedFor: [
      'Be at least 16 years old',
      'Beginner A1 level or higher who is interested in improving their general English language skills',
      'Anyone wants to feel more confident when speaking in English with others.',
    ],
    forYouIf: [
      'Expand your vocabulary to improve everyday conversation skills',
      'Practice writing different types of texts, such as letters, emails, stories, and short essays',
      'Listen to different accents, and develop and adopt different techniques to aid comprehension',
      'Practice pronunciation of individual sounds, intonation, rhythm, and stress',
      'Learn how to use a dictionary effectively',
      'Work in a team and take part in group projects',
    ],
    covers:
      'Expand your vocabulary to improve everyday conversation skills, Practice writing different types of texts, such as letters, emails, stories, and short essays, Listen to different accents, and develop and adopt different techniques to aid comprehension, Practice pronunciation of individual sounds, intonation, rhythm, and stress, Learn how to use a dictionary effectively, Work in a team and take part in group projects, Practice basic presentation skills: leading and participating, using visual aids',
    courseStructure:
      'Regular assessments and tutorials, SMART Learning trips and activities around the city to help your English progress faster, End-of-course, Certificate of Attendance, Free Wi-Fi, Welcome pack, Student ID card, Kitchenettes in all centres, Snacks and drink machines, 24/7 emergency number, City-switch means you can start your course in one city and finish it in another, giving you the opportunity to discover more of the UK ',
    mandatoryUnits: [],
    optionalUnits: [],
    pricing: 'Buy £35. Rent: £35 (£25 refundable). ',
    priceInCurrency: 35,
    assesment: ' ',
    duration: '1 Week+',
    entryRequirements: 'Mentioned Above',
    why: 'This comprehensive course is designed to equip you with the skills and knowledge you need to become a competent and effective CCTV supervisor. From understanding the legal requirements and regulations surrounding CCTV operations to mastering the latest technologies and techniques, this course covers everything you need to know.',
  },
  {
    category: 'Functional Skills',
    courseUniqueId: '4',
    imageUrl: '/ielts.png',
    title: 'IELTS Preparation',
    subTitle:
      'Our IELTS preparation course is designed to help you improve the key English language skills and exam techniques required to help you reach the score you need, be it for university entry, visa application, or international work experience',
    caption:
      'The International English Language Testing System (IELTS) is the world’s most popular English language test for studying in higher education. It is also recognized by many employers and government immigration agencies as proof of your ability to communicate in English. It consists of four parts: speaking, writing, listening, and reading. Each part is marked separately on a scale of one to nine; an average score covering all four is also given at the end of the test. Test results are valid for two years and can be reset at any time.',
    suitedFor: [
      'The Greenwich Central College’s IELTS preparation course is suitable for all non-native English speakers who wish to apply to a university or for secondary, vocational, or training programs where English is the main language, and they need to provide proof of the English language as part of the entry requirements.',
      'The IELTS preparation course is also suitable for those planning to apply for a visa or job in an English-speaking country, where IELTS is recognized as a Secure English Language Test (SELT).',
      'The course is aimed at students preparing for IELTS Academic, but anyone preparing for IELTS General Training with the current level of English language B1+ is welcome to join too.',
    ],
    forYouIf: [
      'Improve reading, writing, listening, speaking, pronunciation, vocabulary, grammar and study skills',
      'Learn about the different exam sections and the types of questions you will face',
      'Listen to different accents, and develop and adopt different techniques to aid comprehension',
      'Learn to use strategies and techniques to develop all skills to make maximum progress and gain an internationally recognized qualification',
      'Learn how to use a dictionary effectively',
    ],
    covers:
      'Test content and structure, Understanding how candidates are assessed, Learning and practicing the techniques required to get the score you need, Developing knowledge of lexis/vocabulary, practice of grammar and structure, Identifying and prioritizing your areas of weakness',
    courseStructure:
      'Regular assessments and tutorials, SMART Learning trips and activities around the city to help your English progress faster, End-of-course, Certificate of Attendance, Free Wi-Fi, Welcome pack, Student ID card, Kitchenettes in all centres, Snacks and drink machines, 24/7 emergency number, City-switch means you can start your course in one city and finish it in another, giving you the opportunity to discover more of the UK ',
    mandatoryUnits: [],
    optionalUnits: [],
    pricing:
      'Buy £35. Rent: £35 (£25 refundable). Test fees: from £150. You will need to take the test at an approved center for an additional fee. We are happy to help you book it.',
    priceInCurrency: 35,
    assesment: ' ',
    duration: '1 Week+',
    entryRequirements: 'Mentioned Above',
    why: 'This comprehensive course is designed to equip you with the skills and knowledge you need to become a competent and effective CCTV supervisor. From understanding the legal requirements and regulations surrounding CCTV operations to mastering the latest technologies and techniques, this course covers everything you need to know.',
  },
  {
    category: 'Functional Skills',
    courseUniqueId: '5',
    imageUrl: '/a1.png',
    title: 'ESOL A1 Preliminary Test',
    subTitle:
      'Written (Listening, Reading, Writing) and Spoken (Speaking) exams in English',
    caption:
      'Written (Listening, Reading, Writing) and Spoken (Speaking) exams in English, aligned to the A1 level of the CEFR*. Exams are delivered through our global network of Test Centers.',
    suitedFor: [
      'The Greenwich Central College’s IELTS preparation course is suitable for all non-native English speakers who wish to apply to a university or for secondary, vocational, or training programs where English is the main language, and they need to provide proof of the English language as part of the entry requirements.',
      'The IELTS preparation course is also suitable for those planning to apply for a visa or job in an English-speaking country, where IELTS is recognized as a Secure English Language Test (SELT).',
      'The course is aimed at students preparing for IELTS Academic, but anyone preparing for IELTS General Training with the current level of English language B1+ is welcome to join too.',
    ],
    forYouIf: [
      'Improve reading, writing, listening, speaking, pronunciation, vocabulary, grammar and study skills',
      'Learn about the different exam sections and the types of questions you will face',
      'Listen to different accents, and develop and adopt different techniques to aid comprehension',
      'Learn to use strategies and techniques to develop all skills to make maximum progress and gain an internationally recognized qualification',
      'Learn how to use a dictionary effectively',
    ],
    covers:
      'Test content and structure, Understanding how candidates are assessed, Learning and practicing the techniques required to get the score you need, Developing knowledge of lexis/vocabulary, practice of grammar and structure, Identifying and prioritizing your areas of weakness',
    courseStructure:
      'Regular assessments and tutorials, SMART Learning trips and activities around the city to help your English progress faster, End-of-course, Certificate of Attendance, Free Wi-Fi, Welcome pack, Student ID card, Kitchenettes in all centres, Snacks and drink machines, 24/7 emergency number, City-switch means you can start your course in one city and finish it in another, giving you the opportunity to discover more of the UK ',
    mandatoryUnits: [],
    optionalUnits: [],
    pricing:
      'Buy £35. Rent: £35 (£25 refundable). Test fees: from £150. You will need to take the test at an approved center for an additional fee. We are happy to help you book it.',
    priceInCurrency: 35,
    assesment: ' ',
    duration: '1 Week+',
    entryRequirements: 'Mentioned Above',
    why: 'This comprehensive course is designed to equip you with the skills and knowledge you need to become a competent and effective CCTV supervisor. From understanding the legal requirements and regulations surrounding CCTV operations to mastering the latest technologies and techniques, this course covers everything you need to know.',
  },
  {
    category: 'Vocational Courses',
    courseUniqueId: '6',
    imageUrl: '/diplomaBBA.png',
    title: 'LEVEL 3 – DIPLOMA IN BUSINESS ADMINISTRATION',
    subTitle:
      'This qualification aims to provide learners with the knowledge and skills they need to operate as a successful business administrator.',
    caption:
      'This qualification aims to provide learners with the knowledge and skills they need to operate as a successful business administrator. It also allows learners to develop skills in a range of areas relevant to business administration roles. This qualification is part of an apprenticeship and suitable for learners aged 16 and above',
    suitedFor: [
      'Safeguarding and protection',
      'Safeguarding and protection',
      'Developing and carrying out policy',
      'Managing care services and recruitment',
      'Promoting and developing best practice',
      'Supporting development and partnership working',
      'Care management',
      'Quality systems and improvement',
    ],
    forYouIf: [
      '      The Management pathway is suitable for Assistant Managers and Deputy Managers working in day or domiciliary services who are looking to progress their career. It is also appropriate for Managers who have not yet achieved a qualification at this level',
      'Learners should be at least 19 years old. It is also recommended that they will hold a Level 3 qualification or above in a related area.',
      'Learners will need to be working in the role of Deputy or Manager in an appropriate setting or have had the opportunity to carry out responsibilities associated with these roles to be able to study for the Level 5 Diploma in Leadership for Health and Social Care and Children and Young People’s Services (England) (90 credits)',
    ],
    covers:
      'Test content and structure, Understanding how candidates are assessed, Learning and practicing the techniques required to get the score you need, Developing knowledge of lexis/vocabulary, practice of grammar and structure, Identifying and prioritizing your areas of weakness',
    courseStructure:
      'Regular assessments and tutorials, SMART Learning trips and activities around the city to help your English progress faster, End-of-course, Certificate of Attendance, Free Wi-Fi, Welcome pack, Student ID card, Kitchenettes in all centres, Snacks and drink machines, 24/7 emergency number, City-switch means you can start your course in one city and finish it in another, giving you the opportunity to discover more of the UK ',
    mandatoryUnits: [],
    optionalUnits: [],
    pricing: 'Buy £350. Rent: £350 (£250 refundable). ',
    priceInCurrency: 350,
    assesment: ' ',
    duration: '1 Week+',
    entryRequirements: 'Mentioned Above',
    why: 'On completion learners can progress to a wide range of job roles depending on the pathway taken. The following list is not allinclusive, but gives a taster of the opportunities available in either adult or children and',
  },
  {
    category: 'Vocational Courses',
    courseUniqueId: '7',
    imageUrl: '/diplomaBBAskills.png',
    title: 'LEVEL 3 – DIPLOMA IN BUSINESS ADMINISTRATION',
    subTitle:
      'This qualification is for learners aged 16 and above and is suitable for use within a study program. Ideal for learners who want to develop an understanding of the essential skills required to work successfully in a business environment',
    caption:
      'This qualification is for learners aged 16 and above and is suitable for use within a study program. Ideal for learners who want to develop an understanding of the essential skills required to work successfully in a business environment; this course provides learners with an understanding of business culture and responsibilities. This qualification also helps to develop the skills required to solve problems, communicate, and work effectively with others and allows learners to manage and improve their performance in a business environment. Pathways for this course may take you into finance, customer service, retail management, human resources, and enterprise.',
    suitedFor: [
      'An Understanding of the Essential Skills Required in a Business Environment',
      'The Skills Required to Solve Problems in a Business Environment',
      'An Understanding of Business Culture and Responsibilities',
      'The Ability to Successfully Communicate and Work with Others in a Business Environment',
      'The Opportunity to Develop the Skills Required to Manage and Improve Your Performance in a Business Environment.',
    ],
    forYouIf: [
      '      The Management pathway is suitable for Assistant Managers and Deputy Managers working in day or domiciliary services who are looking to progress their career. It is also appropriate for Managers who have not yet achieved a qualification at this level',
      'Learners should be at least 19 years old. It is also recommended that they will hold a Level 3 qualification or above in a related area.',
      'Learners will need to be working in the role of Deputy or Manager in an appropriate setting or have had the opportunity to carry out responsibilities associated with these roles to be able to study for the Level 5 Diploma in Leadership for Health and Social Care and Children and Young People’s Services (England) (90 credits)',
    ],
    covers:
      'On completion learners can progress to a wide range of job roles depending on the pathway taken. The following list is not allinclusive, but gives a taster of the opportunities available in either adult or children and',
    courseStructure:
      'Regular assessments and tutorials, SMART Learning trips and activities around the city to help your English progress faster, End-of-course, Certificate of Attendance, Free Wi-Fi, Welcome pack, Student ID card, Kitchenettes in all centres, Snacks and drink machines, 24/7 emergency number, City-switch means you can start your course in one city and finish it in another, giving you the opportunity to discover more of the UK ',
    mandatoryUnits: [],
    optionalUnits: [],
    pricing: 'Buy £350. Rent: £350 (£250 refundable). ',
    priceInCurrency: 350,
    assesment: ' ',
    duration: '1 Week+',
    entryRequirements: 'Mentioned Above',
    why: 'On completion learners can progress to a wide range of job roles depending on the pathway taken. The following list is not allinclusive, but gives a taster of the opportunities available in either adult or children and',
  },
];
