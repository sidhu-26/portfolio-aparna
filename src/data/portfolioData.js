/**
 * Central Portfolio Data Configuration for Aparna Varshini
 * 
 * Verified against client documents, academic records, and resume.
 * Easily editable without modifying UI component templates.
 */

export const portfolioData = {
  personal: {
    name: "Aparna Varshini S",
    monogram: "AV.",
    eyebrow: "MBA CANDIDATE · FUTURE BUSINESS LEADER",
    heroHeadingLine1: "Aparna",
    heroHeadingLine2: "Varshini.",
    tagline: "Curious mind. Strategic thinking. Meaningful impact.",
    summary:
      "Exploring the intersection of business, people, and ideas to create thoughtful, meaningful outcomes. Blending data-driven analytics with human-centered strategy.",
    currentRole: "MBA Candidate in Business Analytics",
    institution: "SRM Institute of Science & Technology, Chennai",
    cgpa: "9.31",
    email: "as8540@srmist.edu.in",
    secondaryEmail: "aparna192804@gmail.com",
    phone: "+91 7418761501",
    linkedin: "https://linkedin.com/in/aparnavarshini-s",
    location: "Chennai & Madurai, Tamil Nadu, India",
    resumeUrl: "/assets/Aparna_Varshini_Resume.pdf",
    portraitImage: "/assets/aparna-portrait.jpg",
  },

  about: {
    label: "01 / ABOUT",
    title: "A little about me.",
    quote:
      "Transforming data into strategic narrative, and operational challenges into seamless human experiences.",
    paragraphs: [
      "I am an MBA candidate specializing in Business Analytics at SRM Institute of Science and Technology, Chennai, holding a 9.31 CGPA. My journey combines a technical grounding in Information Technology with an analytical mindset honed to solve multi-faceted business challenges.",
      "As College Secretary at Lady Doak College, I coordinated major institutional events with over 5,000 attendees, cultivating a deep appreciation for stakeholder alignment, strategic communication, and high-stakes organizational leadership. My work with the Youth Red Cross further reinforced my commitment to purpose-driven community impact.",
      "Whether modeling predictive frameworks in Python and R, synthesizing public policy data for the PM SETU unit in Tamil Nadu, or streamlining human resource workflows, I look for clarity in complexity and bring deliberate focus to every initiative I undertake."
    ],
    stats: [
      { value: "9.31", label: "MBA CGPA (SRM IST)" },
      { value: "5,000+", label: "People Coordinated as College Secretary" },
      { value: "Top 5", label: "Selected in Cognizant Cybersecurity Workshop" },
      { value: "10+", label: "Community & Red Cross Outreach Initiatives" }
    ],
    corePrinciples: [
      {
        title: "Analytical Rigor",
        description: "Grounding strategic decisions in verified datasets, predictive modeling, and objective evaluation."
      },
      {
        title: "Human-Centered Leadership",
        description: "Engaging stakeholders with empathy, active listening, and cohesive cross-functional alignment."
      },
      {
        title: "Execution Discipline",
        description: "Bridging conceptual strategy with measurable operational outcomes and clear accountability."
      }
    ]
  },

  journey: {
    label: "02 / JOURNEY",
    title: "The journey so far.",
    subtitle: "A chronological timeline of academic achievements, research, and organizational leadership.",
    items: [
      {
        period: "2025 – 2027",
        type: "Education",
        title: "Master of Business Administration (MBA) — Business Analytics",
        institution: "SRM Institute of Science & Technology, Chennai",
        badge: "Current · CGPA 9.31",
        description:
          "Specializing in Business Analytics, data-informed strategy, financial modeling, and predictive enterprise frameworks.",
        tags: ["Business Analytics", "Predictive Modeling", "Financial Data", "Strategic Management"]
      },
      {
        period: "Jul 2026 – Sep 2026",
        type: "Experience",
        title: "Research Associate — PM SETU Project Management Unit (PMU)",
        institution: "In22 Labs / Government of Tamil Nadu Initiative",
        badge: "Public Policy Research",
        description:
          "Conducted state-wide research and data analysis on Government ITIs across Tamil Nadu. Developed institutional evaluation matrices, gap identification frameworks, and assessed industry MoUs and apprenticeships.",
        tags: ["Data Validation", "Policy Evaluation", "Stakeholder MoUs", "Statewide Mapping"]
      },
      {
        period: "Jan 2026 – Jun 2026",
        type: "Experience",
        title: "Human Resources & Administrative Intern",
        institution: "RRFX Infotech Private Limited (FluentX)",
        badge: "People Operations",
        description:
          "Managed candidate sourcing, resume screening, interview scheduling, and onboarding activities. Supported payroll processing, leave administration, and internal cross-team correspondence.",
        tags: ["Talent Acquisition", "Onboarding", "Payroll & Leave Systems", "HR Operations"]
      },
      {
        period: "2024 – 2025",
        type: "Leadership",
        title: "College Secretary — Student Leadership Council",
        institution: "Lady Doak College, Madurai",
        badge: "Campus Leadership",
        description:
          "Directly coordinated major campus events and intercollegiate meets catering to 5,000+ attendees. Headed volunteer delegations, logistics, crisis mitigation, and student-administration liaison.",
        tags: ["5,000+ Attendees", "Event Architecture", "Executive Liaison", "Team Governance"]
      },
      {
        period: "2022 – 2025",
        type: "Education",
        title: "Bachelor of Science (B.Sc.) — Information Technology",
        institution: "Lady Doak College, Madurai (Kamaraj University)",
        badge: "Degree · 75.01%",
        description:
          "Graduated with distinction in Information Technology. Built web-based systems, mastered relational databases, algorithm design, and software lifecycle development.",
        tags: ["Software Engineering", "Relational Databases", "Systems Analysis", "Web Development"]
      },
      {
        period: "May 2024",
        type: "Experience",
        title: "Frontend Development Intern",
        institution: "Kevell Global Solutions LLP",
        badge: "Web Engineering",
        description:
          "Engineered interactive, responsive UI components for a retail jewelry web platform using semantic HTML, modular CSS, and JavaScript. Optimized asset loading and form validation flows.",
        tags: ["Frontend Architecture", "UI Componentry", "Responsive Web", "Performance Tuning"]
      }
    ]
  },

  projects: {
    label: "03 / SELECTED WORK",
    title: "Ideas into action.",
    subtitle: "A showcase of analytics frameworks, policy research, software systems, and digital initiatives.",
    items: [
      {
        id: "predictive-analytics",
        number: "01",
        title: "Predictive Analytics Framework for Fitness & Wellness",
        category: "Business Analytics & Machine Learning",
        period: "2026",
        summary:
          "An integrated statistical and machine learning model analyzing consumer wellness patterns, behavioral retention metrics, and market signals to drive strategic business forecasting.",
        detailedDescription:
          "Leveraged Python and R to perform thorough exploratory data analysis (EDA), anomaly detection, and predictive modeling on wellness industry data. Developed regression and classification pipelines that forecast user retention and consumer spending, providing business executives with data-grounded strategic roadmap recommendations.",
        skills: ["Python", "R", "Machine Learning", "Exploratory Data Analysis", "Predictive Forecasting"],
        highlights: [
          "Developed multi-variate statistical models to predict customer churn and adoption curves.",
          "Synthesized complex algorithmic outcomes into intuitive executive visualization dashboards.",
          "Delivered actionable business insights for wellness sector market positioning."
        ],
        accentMetric: "Data-Driven Strategy"
      },
      {
        id: "pm-setu",
        number: "02",
        title: "PM SETU State-Wide ITI Mapping & Policy Evaluation",
        category: "Government Policy & Public Research",
        period: "2026",
        summary:
          "Research and data standardization initiative assessing Government ITIs across Tamil Nadu to enhance industry partnerships, MoUs, and vocational training absorption.",
        detailedDescription:
          "Assigned to the Project Management Unit for the Government of Tamil Nadu's PM SETU initiative. Validated, standardized, and audited comprehensive data points covering infrastructure quality, trainer ratios, and student placements across multiple districts to establish institutional benchmarking.",
        skills: ["Evaluation Matrices", "Data Validation", "Gap Analysis", "MoU Governance", "Public Policy"],
        highlights: [
          "Formulated standardized evaluation rubrics for multi-district technical institutions.",
          "Assessed corporate MoU compliance, apprenticeships, and in-house placement pipelines.",
          "Prepared evidence-based briefings for senior administrators and institutional heads."
        ],
        accentMetric: "State-Wide Impact"
      },
      {
        id: "student-management",
        number: "03",
        title: "Institutional Student Management Web Application",
        category: "Database Systems & Web Architecture",
        period: "2022 – 2023",
        summary:
          "A role-based academic administration platform automating attendance tracking, grade reporting, and student lifecycle management with optimized MySQL queries.",
        detailedDescription:
          "Architected and deployed a multi-tier web application using PHP and MySQL. Designed role-based access control (RBAC) protocols for administrators, educators, and students. Refactored relational database queries to reduce average record retrieval times by 30%.",
        skills: ["PHP", "MySQL", "RBAC Security", "Query Optimization", "JavaScript", "HTML/CSS"],
        highlights: [
          "Reduced database query execution times by 30% through index optimization and schema normalization.",
          "Implemented granular access permission levels for administrators, faculty, and students.",
          "Engineered automated reporting modules for student transcripts and attendance summaries."
        ],
        accentMetric: "30% Faster Queries"
      },
      {
        id: "kevell-frontend",
        number: "04",
        title: "Responsive Retail Jewelry E-Commerce Experience",
        category: "Frontend Architecture & UX Design",
        period: "2024",
        summary:
          "A refined, performant commercial interface built with custom frontend components, dynamic product sliders, cart state handling, and strict mobile responsiveness.",
        detailedDescription:
          "During an internship at Kevell Global Solutions, designed and developed clean frontend modules for an online jewelry boutique. Focused on clean typographic hierarchy, smooth user interactions, and robust form validation without relying on bloated dependencies.",
        skills: ["HTML5", "CSS3", "JavaScript", "UI/UX Design", "Performance Optimization"],
        highlights: [
          "Built modular catalog views, image carousels, and persistent shopping cart states.",
          "Achieved comprehensive cross-browser and cross-device responsive parity.",
          "Optimized critical asset delivery to ensure rapid first contentful paint times."
        ],
        accentMetric: "Seamless UX"
      }
    ]
  },

  skills: {
    label: "04 / EXPERTISE",
    title: "Capabilities & Passions.",
    subtitle: "A balanced blend of analytical acumen, strategic thinking, digital fluency, and collaborative leadership.",
    categories: [
      {
        title: "Strategic Business & Management",
        description: "Navigating business complexity, defining clear project requirements, and aligning organizational objectives.",
        items: [
          "Business Analytics & Strategy",
          "Requirements Gathering",
          "Stakeholder Alignment",
          "High-Capacity Event Coordination (5,000+)",
          "Process & Workflow Optimization",
          "Operational Decision Making"
        ]
      },
      {
        title: "Analytics, Data & Modeling",
        description: "Extracting actionable intelligence from quantitative information through rigorous statistical methods.",
        items: [
          "Exploratory Data Analysis (EDA)",
          "Machine Learning Principles",
          "Predictive Statistical Analysis",
          "Data Validation & Standardization",
          "Financial Modeling Fundamentals",
          "Evaluation Matrix Design"
        ]
      },
      {
        title: "Technical & Computational Tools",
        description: "Hands-on competency with programming, databases, and enterprise analytical software.",
        items: [
          "Python (Data & Analytics)",
          "R Programming",
          "MySQL & Relational Databases",
          "Microsoft Excel (Advanced & Bloomberg)",
          "Bloomberg Terminal Fundamentals",
          "HTML5 / CSS3 / JavaScript"
        ]
      },
      {
        title: "Leadership & Communication",
        description: "Inspiring teams, managing sensitive communications, and fostering inclusive community partnerships.",
        items: [
          "Executive & Student Body Representation",
          "Cross-Functional Team Collaboration",
          "Youth Red Cross Community Leadership",
          "Public Speaking & Presentations",
          "Talent Sourcing & Onboarding Operations",
          "Crisis Management & Logistics"
        ]
      },
      {
        title: "Interests & Creative Pursuits",
        description: "Creative disciplines that shape disciplined focus, rhythm, spatial awareness, and resilience.",
        items: [
          "Classical & Contemporary Dance",
          "Athletics & Track Sports",
          "Art from E-Waste & Sustainable Design",
          "Cultural & Literary Arts",
          "Social Impact & Volunteer Programs"
        ]
      }
    ]
  },

  certifications: {
    label: "05 / RECOGNITION",
    title: "Certifications & Accolades.",
    items: [
      {
        title: "Bloomberg Spreadsheet Analysis",
        issuer: "Bloomberg",
        date: "Nov 2025",
        description: "Advanced financial data modeling, Excel spreadsheet analysis, and economic data interpretation."
      },
      {
        title: "Bloomberg Finance Fundamentals",
        issuer: "Bloomberg",
        date: "Nov 2025",
        description: "Comprehensive study of global financial markets, portfolio metrics, and macro-economic indicators."
      },
      {
        title: "Business Analysis Fundamentals",
        issuer: "Professional Certification",
        date: "Sep 2025",
        description: "Mastery in stakeholder needs analysis, functional specification documentation, and process modeling."
      },
      {
        title: "Cognizant Cybersecurity Workshop",
        issuer: "Cognizant Technology Solutions",
        date: "Sep 2024",
        description: "Selected as one of the top 5 students in an intensive workshop on enterprise threat modeling and cyber resilience."
      },
      {
        title: "Certificate of Honour & Yuva Sri Kala Bharathi",
        issuer: "Academic & Cultural Councils",
        date: "2018 – 2025",
        description: "Honored for sustained academic excellence, leadership contribution, and cultural achievements."
      },
      {
        title: "Winner — Art from E-Waste & Freshers' Day",
        issuer: "Intercollegiate & University Competitions",
        date: "2024 – 2025",
        description: "First prize at intercollegiate summit for sustainable electronic waste transformation and creative presentation."
      }
    ]
  },

  contact: {
    label: "06 / CONNECT",
    headline: "Good things begin with a conversation.",
    description:
      "Have an opportunity, an idea, or a project in mind? Whether you want to discuss business analytics, organizational strategy, or collaborative ventures, I would love to connect.",
    email: "as8540@srmist.edu.in",
    secondaryEmail: "aparna192804@gmail.com",
    phone: "+91 7418761501",
    linkedin: "https://linkedin.com/in/aparnavarshini-s",
    location: "Chennai / Madurai, Tamil Nadu, India",
    resumeUrl: "/assets/Aparna_Varshini_Resume.pdf"
  }
};
