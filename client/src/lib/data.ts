/**
 * Portfolio content data — Deblina Roy, QA Engineer
 * Design replicates the reference QA portfolio (light theme, blue primary,
 * rounded cards, soft shadows). All content sourced from Deblina Roy's resume.
 */

export const PROFILE = {
  name: "Deblina Roy",
  role: "QA Engineer",
  navSubtitle: "QA & TEST AUTOMATION ENGINEER",
  avatar: "/manus-storage/deblina-avatar_64823d59.png",
  resumeUrl: "/manus-storage/Deblina_Roy_Resume_7a15383b.pdf",
  email: "deblinaroyy@gmail.com",
  phone: "+91 6295237346",
  phoneRaw: "916295237346",
  location: "Kolkata, West Bengal, India",
  linkedin: "https://www.linkedin.com/in/roy-deblina/",
  github: "https://github.com/deblinaroy11",
  openToWork: "Kolkata / Remote",
};

export const TYPEWRITER_WORDS = [
  "QA Engineer",
  "Quality Champion",
  "Automation Tester",
  "Bug Hunter",
];

export const WORKING_ON_TAGS = [
  "Selenium WebDriver",
  "Core Java",
  "TestNG",
  "Postman",
  "SQL",
  "Jira",
  "SDLC",
  "STLC",
  "Agile",
  "JMeter",
  "REST Assured",
  "API Testing",
];

export const HERO_INTRO = {
  boldRole: "QA Engineer",
  text: "specializing in Manual Testing, Automation Testing, Selenium, API Testing, SQL Validation, and Cross-Platform Validation across Web, Mobile, and VR applications. I ensure reliable, high-quality software products and seamless user experiences.",
};

export const META_CARD = {
  label: "Key Client Experience",
  sublabel: "VR Devices Testing",
  title: "Meta Reality Labs — Quest Ecosystem",
  description:
    "Quality assurance for Meta platforms — Quest App, website, and VR devices — supporting 30+ VR OS releases with zero critical defects.",
};

export const QA_REPORT = {
  company: "Tech Mahindra · Meta",
  passRate: 99,
  stats: [
    { value: "800+", label: "Test Cases", color: "blue" },
    { value: "30+", label: "VR OS Releases", color: "red" },
    { value: "0", label: "Critical Defects", color: "green" },
  ],
  bars: [
    { label: "Login & Auth", done: 42, total: 42 },
    { label: "Purchase Flow", done: 38, total: 40 },
    { label: "API Endpoints", done: 95, total: 98 },
    { label: "VR Compatibility", done: 60, total: 62 },
  ],
};

export const EXPERTISE = [
  {
    icon: "🔍",
    title: "Functional Testing",
    description:
      "End-to-end verification of user flows and system operations against requirement designs.",
    points: ["User journey validation", "Requirement traceability", "Edge case coverage"],
  },
  {
    icon: "🔄",
    title: "Regression Testing",
    description:
      "Validating existing software workflows after codebase updates, integrations, or hotfixes.",
    points: ["Automated regression suites", "Selenium + TestNG scripts", "CI/CD understanding"],
  },
  {
    icon: "💨",
    title: "Smoke & Sanity",
    description:
      "Executing quick build verification gates to determine deployment stability.",
    points: ["Critical path testing", "Build stability checks", "Pre-release gates"],
  },
  {
    icon: "🔗",
    title: "API & Integration",
    description:
      "Validating backend REST API response codes, headers, and payload structures via Postman.",
    points: ["REST API validation", "Response code checks", "SQL data validation"],
  },
];

export const SKILL_CARDS = [
  {
    title: "Manual Testing & QA",
    percent: 95,
    years: "2+ Years",
    color: "teal",
    skills: [
      { name: "Functional & E2E Testing", sub: "Web, Mobile & VR Applications" },
      { name: "Meta Quest & VR Testing", sub: "30+ VR OS Release Validations" },
      { name: "Regression & Smoke Testing", sub: "Build Verification & Release Gates" },
      { name: "UAT & Accessibility Testing", sub: "Business requirement compliance" },
      { name: "Defect Management", sub: "Logging, tracking & validation in Jira" },
    ],
  },
  {
    title: "Selenium + Java",
    percent: 90,
    years: "2+ Years",
    color: "green",
    skills: [
      { name: "Selenium WebDriver", sub: "Robust Java Automation Frameworks" },
      { name: "TestNG Framework", sub: "Suite Execution & Defect Analysis" },
      { name: "Core Java", sub: "Maintainable & Scalable Scripts" },
      { name: "Maven & JUnit", sub: "Build Management & Unit Testing" },
      { name: "Git & GitHub", sub: "Version Control & Collaboration" },
    ],
  },
  {
    title: "API Testing & Tools",
    percent: 85,
    years: "2+ Years",
    color: "purple",
    skills: [
      { name: "Postman & REST API", sub: "JSON Validation & Response Checks" },
      { name: "REST Assured", sub: "Automated API Verification" },
      { name: "SQL Validation", sub: "Database Integrity Checks" },
      { name: "JMeter", sub: "Performance & Load Testing" },
      { name: "TestRail & TaskTool", sub: "Test Case Management" },
    ],
  },
];

export const METHODOLOGIES = [
  "SDLC & STLC",
  "Agile/Scrum Methodology",
  "Defect Life Cycle",
  "Test Case Planning & Execution",
  "Test Scenario Design",
  "Functional Testing",
  "Regression Testing",
  "Smoke & Sanity Testing",
  "Black Box Testing",
  "Usability Testing",
  "Cross-Browser Testing",
  "AI-Assisted Testing",
  "Bug Reporting & Tracking (Jira)",
  "API Testing (Postman)",
  "CI/CD Understanding",
];

export const EXPERIENCE = {
  role: "Associate Test Engineer",
  company: "Tech Mahindra",
  client: "Meta",
  type: "Full-time",
  period: "June 2024 – Present",
  location: "Ahmedabad, India",
  intro:
    "QA Engineer delivering exceptional quality validation for Meta platforms across Web, Mobile, and VR devices, supporting 30+ VR OS releases with zero critical defects.",
  bullets: [
    "Developed and maintained automated test scripts using **Selenium WebDriver, TestNG, and Core Java**, accelerating regression cycles and reducing manual testing efforts.",
    "Implemented comprehensive testing techniques covering both standard and edge scenarios, resulting in a **significant reduction in software bugs**.",
    "Executed various testing types such as **Smoke, Functional, Regression, Integration, System, Acceptance (UAT), Accessibility and Automation Testing** to ensure all aspects of the product were covered.",
    "Executed smoke test suites for web platforms using **Cloud Automation (Claude)** environment.",
  ],
};

export const PROJECTS = [
  {
    tag: "Manual & Cross-Platform Testing",
    period: "Jun 2024 - Present",
    title: "Reality Labs (Meta) — Quest App, Website & VR Devices",
    client: "Meta",
    description:
      "Quality assurance for Meta platforms including the Quest App, website, and VR devices, ensuring optimal user experience across web and mobile.",
    bullets: [
      "Tested Meta webpage functionalities — including login, product listing, search and purchase workflows — across web and mobile platforms.",
      "Designed, documented, and executed 800+ test cases covering VR device compatibility, UI interactions, and performance validation.",
      "Utilized ADB commands to collect logs, analyze crashes, validate device behavior, and troubleshoot VR device issues.",
    ],
  },
  {
    tag: "Automation & API Testing",
    period: "Jun 2024 - Present",
    title: "Meta QA Automation & AI-Assisted Workflows",
    client: "Meta",
    description:
      "Designed and automated test cases based on user stories utilizing Selenium WebDriver and Postman (RESTful API) in an Agile/Scrum environment.",
    bullets: [
      "Utilized Meta's internal AI to create personalized commands, improving bug reporting accuracy and reducing manual effort for QA teams.",
      "Collaborated with cross-functional teams — game developers, Meta engineers, and product managers — to deliver high-quality APK releases with a 99% stability rate.",
      "Reduced defects by 30–35% and improved production stability by 40% through rigorous validation and scrum participation.",
    ],
  },
];

export const EDUCATION = [
  {
    icon: "🎓",
    title: "Master of Computer Applications (MCA)",
    field: "Computer Applications",
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    location: "Bhubaneswar, India",
    badge: "Postgraduate Degree",
    status: "✅ CGPA : 9.16",
    year: "Jul 2021 – Aug 2023",
  },
  {
    icon: "🏆",
    title: "Bravo Award & Pat on Back",
    field: "Outstanding Performance & Dedication to Quality",
    institution: "Tech Mahindra",
    location: "India",
    badge: "🏅 Key Achievement",
    status: "✅ Awarded",
    year: "2024 – 2025",
  },
  {
    icon: "🤖",
    title: "AI White Belt Certification",
    field: "Foundational Knowledge in Artificial Intelligence",
    institution: "Tech Mahindra",
    location: "India",
    badge: "📜 Certification",
    status: "✅ Certified",
    year: "2025",
  },
];
