/**
 * Portfolio Data — Varshini
 * All details provided accurately without invented metrics, fake dates, or unverified claims.
 */

export const personalInfo = {
  name: "Varshini",
  role: "Technology Explorer | Developer | Problem Solver",
  tagline: "Exploring new domains, building practical systems, and solving real-world challenges through technology.",
  location: "Chikkamagaluru, Karnataka, India",
  email: "varu91490@gmail.com",
  phone: "+91 6364107710",
  socialLinks: {
    github: "https://github.com/varu91490-ui",
    linkedin: "https://www.linkedin.com/in/varshini-b605b532a",
    leetcode: "https://leetcode.com/u/VaZHGKyR1q/",
  },
  resume: {
    viewPath: "/resume1.pdf",
    downloadPath: "/resume1.pdf",
    fileName: "Varshini_Resume.pdf",
  },
  about: `I'm someone driven by curiosity — curious about how technology works, how new ideas come to life, and how they can be turned into something meaningful. I enjoy exploring new technologies, discovering different domains, experimenting with ideas, and building projects that solve real-world problems and make people's lives easier. For me, learning doesn't stop at understanding something; it's about exploring it, building with it, and discovering what more is possible.`,
  interests: [
    {
      title: "Artificial Intelligence",
      description: "Exploring computer vision, LLM integrations, and applied machine intelligence for everyday utility.",
      icon: "Cpu",
    },
    {
      title: "Cybersecurity",
      description: "Investigating link intelligence, phishing heuristics, and secure systems design.",
      icon: "ShieldCheck",
    },
    {
      title: "Research & Emerging Tech",
      description: "Engaging with quantum computing foundations, research stance analysis, and modern frameworks.",
      icon: "Atom",
    },
    {
      title: "Full-Stack Development",
      description: "Building responsive, mobile-first web applications and APIs that solve tangible everyday problems.",
      icon: "Layers",
    },
  ],
};

export const education = [
  {
    institution: "Adichunchanagiri Institute of Technology, Chikkamagaluru",
    degree: "B.E. – Computer Science and Engineering (Data Science)",
    period: "2024 – 2028 (Expected)",
    status: "Currently Pursuing Third Year",
    details: "Focusing on data structures, algorithms, data science principles, and web engineering.",
    current: true,
  },
  {
    institution: "Sri BGS Science PU College, Chikkamagaluru",
    degree: "Pre-University Course (PCMB/Science)",
    period: "Completed 2024",
    status: "Score: 96.67%",
    details: "Strong foundational coursework in Mathematics, Physics, Chemistry, and Analytical Sciences.",
    current: false,
  },
  {
    institution: "MES Prayogika High School, Chikkamagaluru",
    degree: "Secondary School Leaving Certificate (SSLC)",
    period: "Completed 2022",
    status: "Score: 95.52%",
    details: "High academic distinction with active participation in science and technology exhibitions.",
    current: false,
  },
];

export const skills = {
  frontend: {
    category: "Frontend Development",
    description: "Crafting responsive, accessible user interfaces and modern web applications.",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    icon: "Layout",
  },
  backend: {
    category: "Backend Development",
    description: "Designing robust application logic, REST endpoints, and backend services.",
    items: ["Python", "FastAPI", "PHP"],
    icon: "Server",
  },
  programming: {
    category: "Programming & Problem Solving",
    description: "Core algorithms, data structures, and object-oriented architecture.",
    items: ["Java", "Data Structures & Algorithms using Java"],
    icon: "Code2",
  },
  databases: {
    category: "Databases & Storage",
    description: "Relational schema design, querying, and relational data management.",
    items: ["MySQL", "Oracle SQL"],
    icon: "Database",
  },
  tools: {
    category: "Tools & Platforms",
    description: "Version control, developer environments, database administration, and hosting.",
    items: ["VS Code", "Git", "GitHub", "MySQL Workbench", "Vercel", "Render"],
    icon: "Wrench",
  },
};

export const featuredProjects = [
  {
    id: "stitchly",
    title: "Stitchly",
    subtitle: "Personal Tailoring Business & Financial Management System",
    description:
      "A mobile-first system born out of a real problem observed in a local tailoring business context. It replaces manual ledgers and disorganized notebooks with a modern, structured workflow designed specifically for tailoring shops.",
    keyFeatures: [
      "Customer profiles and custom garment order tracking",
      "Payment tracking with support for partial and advance payments",
      "Shop expense tracking and delivery date management",
      "Voice-based search and queries with Kannada voice recognition",
      "Audit logs for order modifications and expense accountability",
      "Progressive Web App (PWA) support for offline-ready mobile usage",
    ],
    note: "Application interface supports Kannada to ensure local business accessibility.",
    technologies: ["React", "Tailwind CSS", "PWA", "Web Speech API", "Kannada Voice Recognition"],
    github: "https://github.com/varu91490-ui/stitchly",
    badge: "Problem-Solving Focus",
    type: "Personal Solution",
  },
  {
    id: "farmflow",
    title: "FarmFlow",
    subtitle: "Farmer-Centric Marketplace & Decision-Support Platform",
    description:
      "Developed for Smart India Hackathon 2026 (Problem Statement SIH26132) to empower smallholder farmers by directly connecting them with buyers and Farmer Producer Organisations (FPOs) for fairer market prices.",
    keyFeatures: [
      "Farmer-buyer matching and agricultural lot management",
      "Transparent offer management and net realisation computation",
      "FPO collective aggregation and quality parameter declarations",
      "Dispute management and transparent settlement tracking",
      "AI-powered conversational farmer assistant with voice interaction",
      "Seasonal crop recommendations based on regional conditions",
      "Exploratory crop image health assessment using Gemini Vision",
    ],
    note: "Selected in the internal round for the next stage of Smart India Hackathon 2026. Crop-health feature provides exploratory visual indicators (not a certified diagnosis).",
    technologies: ["Full-Stack", "Gemini Vision", "Voice AI", "REST APIs", "SIH 2026"],
    github: "https://github.com/varu91490-ui/FarmFlow",
    badge: "SIH 2026 Internal Round Selection",
    type: "Hackathon Project",
  },
  {
    id: "harmoniocean",
    title: "HarmoniOcean AI",
    subtitle: "Ocean Conservation & Biodiversity Awareness Platform",
    description:
      "Built during my first intense 24-hour hackathon experience in Bengaluru. The platform advocates for marine preservation by empowering citizens to document pollution incidents and explore marine biodiversity risks.",
    keyFeatures: [
      "Marine pollution incident and biodiversity risk reporting",
      "Image and video media upload pipeline for field observations",
      "Pollution-related insights with exploratory analytics",
      "Community conservation missions and participation rewards",
      "Responsive dashboard providing visual environmental indicators",
    ],
    note: "Includes a mock prediction engine to demonstrate AI workflow concepts.",
    technologies: ["React", "Node.js", "Express", "Tailwind CSS", "Data Visualisation"],
    github: "https://github.com/varu91490-ui/full-stack-harmony-ai",
    badge: "Bengaluru 24h Hackathon",
    type: "Hackathon Project",
  },
];

export const researchProject = {
  id: "email-phishing-analyser",
  title: "AI-Based Email Phishing Analyser",
  subtitle: "Using Verification-Stance Analysis and Link Intelligence",
  status: "Ongoing Research / Active Exploration",
  description:
    "An ongoing conceptual research initiative exploring how verification-stance analysis combined with multi-hop link intelligence can identify deceptive emails before harm occurs. Focuses on linguistic inconsistency cues and domain relationship heuristics.",
  highlights: [
    "Verification-stance text analysis to examine sender assertions against established facts",
    "Link intelligence heuristics to inspect URL redirections, domain age, and lexical camouflage",
    "Academic research focus aimed at conceptual exploration and paper synthesis",
  ],
  technologies: ["Cybersecurity", "Natural Language Processing", "Link Intelligence", "Python"],
};

export const compactProjects = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A completed frontend-focused PHP application featuring income/expense logging, balance overview dashboard, category-based expense breakdown, interactive charts, and monthly historical reports. Built with JSON-based temporary data persistence.",
    technologies: ["PHP", "JavaScript", "Chart.js", "JSON Storage", "CSS3"],
  },
];

export const experiments = [
  {
    name: "YouTube Interface Clone",
    category: "UI Architecture",
    description: "Responsive recreation of the YouTube desktop and mobile layout with sidebar navigation, video grid, and watch view simulation.",
  },
  {
    name: "Amazon Interface Clone",
    category: "E-Commerce Frontend",
    description: "Exploration of dense e-commerce UI patterns, multi-level navigation header, product showcase grids, and cart state handling.",
  },
  {
    name: "Rock Paper Scissors Game",
    category: "Interactive Logic",
    description: "Classic interactive game implementing game-loop state logic, score tracking, computer decision randomness, and visual win/loss effects.",
  },
];

export const certifications = [
  {
    id: "cert-1",
    title: "Complete SQL & MySQL Course 2026: From Beginner to Advanced — Udemy",
    issuer: "Udemy",
    duration: "14.5 Hours",
    description: "In-depth relational database architecture, complex multi-table joins, subqueries, indexing, constraints, and data modeling.",
    category: "Databases",
    imagePath: "/mysql.jpeg",
    fileName: "mysql.jpeg"
  },
  {
    id: "cert-2",
    title: "The Complete Full-Stack Web Development Bootcamp — Udemy",
    issuer: "Udemy",
    duration: "62 Hours",
    description: "Comprehensive practical curriculum covering frontend, backend, database integration, REST APIs, and full-stack deployment.",
    category: "Full-Stack Development",
    imagePath: "/full%20stack.jpeg",
    fileName: "full stack.jpeg"
  },
  {
    id: "cert-3",
    title: "Python for Data Science (Elite) — NPTEL",
    issuer: "NPTEL, IIT Madras",
    duration: "Certification Score: 71%",
    description: "Rigorous academic examination covering Python programming, NumPy, Pandas, statistical analysis, and applied data science methods.",
    category: "Data Science",
    imagePath: "/python.jpeg",
    fileName: "python.jpeg"
  },
  {
    id: "cert-4",
    title: "Computer Networks — NPTEL",
    issuer: "NPTEL",
    duration: "Certification Score: 78%",
    description: "In-depth study of OSI/TCP-IP layers, IP addressing, routing algorithms, transport layer protocols, socket programming, and network security basics.",
    category: "Core Computing",
    imagePath: "/computer%20networks.jpeg",
    fileName: "computer networks.jpeg"
  },
];

export const achievements = [
  {
    id: "achieve-1",
    title: "Smart India Hackathon 2026 — Internal Round Selection",
    project: "FarmFlow (SIH26132)",
    organization: "Smart India Hackathon 2026",
    description:
      "Successfully selected in the internal institutional round to represent our college for the next stage of SIH 2026 with our agricultural decision-support and marketplace platform.",
    highlight: "Internal Round Selected",
  },
  {
    id: "achieve-2",
    title: "First 24-Hour Hackathon Experience in Bengaluru",
    project: "HarmoniOcean AI",
    organization: "Bengaluru Hackathon Event",
    description:
      "Collaborated and coded continuously through an intense 24-hour hackathon sprint in Bengaluru, building an end-to-end prototype platform for ocean conservation and pollution awareness.",
    highlight: "24-Hour Sprint Completed",
  },
];

export const experiences = [
  {
    id: "exp-1",
    role: "Virtual Intern – Quantum Computing",
    organization: "IBM SkillsBuild",
    period: "Ongoing",
    type: "Virtual Internship",
    description:
      "Participating in self-paced quantum computing modules, studying qubit fundamentals, quantum superposition, quantum circuits, and emerging applications in modern computational science.",
    badge: "Ongoing Learning",
  },
  {
    id: "exp-2",
    role: "Hackathon Participant & Builder",
    organization: "Bengaluru 24-Hour Hackathon",
    period: "Hackathon Experience",
    type: "Collaborative Event",
    description:
      "Engaged in an intensive 24-hour sprint in Bengaluru, collaborating under tight deadlines to formulate ideas, design UI components, and build HarmoniOcean AI.",
    badge: "Hands-on Sprint",
  },
];
