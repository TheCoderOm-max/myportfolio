import type {
  Achievement,
  ContactLink,
  CPStat,
  FutureProject,
  Highlight,
  NavLink,
  Project,
  Publication,
  SkillCategory,
  TimelineEntry,
} from "./types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Competitive Programming", href: "#cp" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const highlights: Highlight[] = [
  { value: "IIT-G", label: "Research Intern" },
  { value: "SIH '24", label: "Smart India Hackathon Finalist" },
  { value: "5+", label: "Research Publications" },
  { value: "350+", label: "DSA Problems Solved" },
  { value: "DL · FS", label: "Deep Learning & Full-Stack Development" },
];

export const aboutTags: string[] = [
  "Software Engineering",
  "Deep Learning",
  "Time Series Forecasting",
  "Machine Learning",
  "Full-Stack Development",
  "Problem Solving",
];


export const experience: TimelineEntry[] = [
  {
    period: "2025 — Present",
    role: "Research Intern",
    org: "IIT Guwahati",
    description:
      "Working on solar flare forecasting using deep learning models and satellite-based soft X-ray observations from the Aditya-L1 SoLEXS instrument. Responsibilities include data preprocessing, feature engineering, designing hybrid time-series forecasting architectures, and developing models for flare occurrence and peak flux prediction for space weather applications.",
    tags: [
      "Deep Learning",
      "Time Series Forecasting",
      "PyTorch",
      "PatchTST",
      "1D CNN",
      "Aditya-L1",
      "Space Weather",
    ],
  },
  {
    period: "2024",
    role: "Hackathon Engineer",
    org: "Smart India Hackathon",
    description:
      "Built and shipped a working prototype under a 36-hour deadline as part of an SIH 2024 finalist team, owning the technical architecture and full-stack implementation from problem statement to demo.",
    tags: ["Full-Stack Development", "Rapid Prototyping", "System Design"],
    past: true,
  },
];

export const education: TimelineEntry[] = [
  {
    period: "2022 — 2026",
    role: "B.Tech, Computer Science & Engineering",
    org: "Jalpaiguri Government Engineering College",
    description:
      "Coursework in data structures & algorithms, operating systems, computer networks, database systems, and machine learning. Active in research and hackathon initiatives alongside academics.",
  },
  {
    period: "2010 — 2022",
    role: "Higher Secondary & Secondary Education",
    org: "School",
    description:
      "Foundational education with a focus on mathematics and the sciences, building the groundwork for a computer science career.",
    past: true,
  },
];

export const projects: Project[] = [
   {
  key: "solarflare",
  title: "Solar Flare Forecasting using Aditya-L1",
  description:
    "A deep learning framework for forecasting solar flare activity using soft X-ray observations from the Aditya-L1 SoLEXS instrument for space weather prediction.",

  image: "/images/solarflareImg.png",

  stack: [
    "PyTorch",
    "Deep Learning",
    "PatchTST",
    "1D CNN",
    "Time Series Forecasting",
  ],

  githubUrl: "https://github.com/GroupDevProjects/HelioSense.git",

  detail: {
    overview:
      "Developed a hybrid deep learning pipeline for solar flare nowcasting and forecasting using satellite-based soft X-ray observations from India's Aditya-L1 mission.",

    problem:
      "Solar flares can significantly impact satellite communications, navigation systems, and space weather conditions. Accurate forecasting of flare activity remains a challenging multivariate time-series prediction problem.",

    solution:
      "Designed a hybrid 1D CNN and PatchTST architecture combined with extensive data preprocessing and feature engineering techniques to learn temporal patterns in solar activity and predict future flare events.",

    features: [
      "Satellite data preprocessing pipeline",
      "Hybrid CNN + PatchTST architecture",
      "Solar flare occurrence prediction",
      "Peak flux forecasting",
      "Time-series feature engineering",
    ],

    stack: [
      "Python",
      "PyTorch",
      "PatchTST",
      "Pandas",
      "NumPy",
      "Deep Learning",
    ],

    challenges:
      "Handling large-scale satellite datasets, temporal dependencies in solar activity, and class imbalance in flare prediction tasks while maintaining robust forecasting performance.",

    results:
      "Built an end-to-end deep learning framework for solar flare forecasting and space weather prediction using scientific satellite observations.",

    lessons:
      "Gained hands-on experience in scientific machine learning, multivariate time-series forecasting, satellite data analysis, and hybrid deep learning model design.",
  },
},
  {
    key: "campaign",
    title: "campAIgn",
    description:
      "An AI-powered platform that generates, refines, and evaluates marketing campaign content using large language models — turning a brief into ready-to-use creative in minutes.",
    image: "/images/campAIgn_img.png",
    stack: ["Next.js", "Python", "LLMs", "REST APIs"],
    githubUrl: "https://github.com/campAIgn-dev/campAIgn.git",
    detail: {
      overview:
        "campAIgn helps marketing teams go from a one-line brief to ready-to-use campaign content — copy, creative direction, and channel variants — using large language models orchestrated behind a simple interface.",
      problem:
        "Producing consistent, on-brand marketing content across multiple channels is slow and repetitive, and small teams rarely have the bandwidth to iterate on copy at the speed a campaign calendar demands.",
      solution:
        "A guided workflow takes a campaign brief and product context as input, generates multiple content variants with an LLM pipeline, and lets the user refine tone, length, and channel format before exporting.",
      features: [
        "Prompt-guided campaign brief intake",
        "Multi-variant content generation with tone controls",
        "Channel-specific formatting (social, email, ads)",
        "Version history and side-by-side comparison",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Python",
        "OpenAI API",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      challenges:
        "Balancing generation latency against output quality, and designing prompt structures that stayed consistent across very different campaign briefs without constant manual tuning.",
      results:
        "Cut first-draft campaign content turnaround from hours to minutes in internal testing, while keeping a human-in-the-loop review step for brand consistency.",
      lessons:
        "Learned how much of an LLM product's quality comes from the surrounding system — prompt structure, guardrails, and UI for review — rather than the model call itself.",
    },
  },
  {
    key: "edge",
    title: "Distributed Edge Computing Optimization Simulator",
    description:
      "A simulator that models task offloading and resource allocation across distributed edge nodes, comparing scheduling strategies for latency and energy efficiency.",
    image: "/images/edgeComp_img.png",
    stack: ["Python", "Distributed Systems", "Optimization", "Simulation"],
    githubUrl: "https://github.com/TheCoderOm-max/taskoffbench.git",
    detail: {
      overview:
        "A simulator that models how compute tasks can be distributed across a network of edge devices and a central server, comparing scheduling strategies for latency, throughput, and energy efficiency.",
      problem:
        "Edge computing systems need to decide, in real time, where to run a given task — locally, on a nearby edge node, or in the cloud — and that decision has a large effect on latency and energy use, but it's hard to test strategies without a real deployment.",
      solution:
        "The simulator models a configurable network topology of edge nodes with different compute and bandwidth constraints, then runs multiple scheduling algorithms against synthetic and trace-based workloads to compare outcomes.",
      features: [
        "Configurable network topology and node constraints",
        "Pluggable scheduling algorithms",
        "Latency, throughput, and energy metrics",
        "Visualized simulation results",
      ],
      stack: ["Python", "NumPy", "NetworkX", "Matplotlib"],
      challenges:
        "Modeling realistic network variability and node heterogeneity without making the simulation too slow to iterate on quickly.",
      results:
        "Enabled quick comparison of scheduling strategies, showing measurable latency improvements from load-aware offloading versus static assignment in simulated scenarios.",
      lessons:
        "Reinforced how much systems performance work is really about representative benchmarking — a fast simulator that models the wrong thing is worse than a slow one that models the right thing.",
    },
  },
];

export const futureProjects: FutureProject[] = [
  {
    title: "Open Source",
    description: "Open-source contributions and tooling — coming soon.",
    icon: "openSource",
  },
];

export const publications: Publication[] = [
  {
    title:
      "An Intelligent Collaborative Metaheuristic Approach for Task Offloading in MEC Devices Under Cloud Synergy",
    venue:
      " 2025 Seventh International Conference on Research in Computational Intelligence and Communication Networks (ICRCICN)",
    publisher: "IEEE",
    year: "2025",
    url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11364819&isnumber=11364628",
  },
  {
    title:
      "Uncovering Two Decades of Change in Global Tourism: A Data-Driven Analysis Using Apriori Algorithm",
    venue:
      "2nd International Conference on Computational Technologies and Electronics (ICCTE-2025)",
    publisher: "Springer",
    year: "2025",
    url: "#",
  },
  {
    title:
      "Integration of Migration Policy for Enhanced Quality of Service DE-Based Approach for Transfer of Tasks from MEC Devices in the Mobile Edge Cloud Environment",
    venue: "Journal: Cureus Journal Of Computer Science",
    publisher: "Cureus",
    year: "2026",
    url: "https://doi.org/10.7759/",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Artificial Intelligence",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Transformers",
      "LLMs",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
    ],
  },
  { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Redux"] },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  { title: "Databases", skills: ["MongoDB", "MySQL"] },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Jupyter"],
  },
];

export const cpStats: CPStat[] = [
  {
    platform: "LeetCode",
    stat: "250+",
    label: "Problems solved",
    url: "https://leetcode.com/u/Om-The-Coder/",
    icon: "code",
    available: true,
  },
  {
    platform: "CodeChef",
    stat: "150+",
    label: "Problems solved",
    url: "https://www.codechef.com/users/brace_hero_76",
    icon: "chess",
    available: true,
  },
  {
    platform: "Codeforces",
    stat: "Soon",
    label: "Profile in progress",
    url: "https://codeforces.com/profile/OmBhattarai",
    icon: "hourglass",
    available: false,
  },
  {
    platform: "GitHub",
    stat: "20+",
    label: "Public repositories",
    url: "https://github.com/TheCoderOm-max",
    icon: "github",
    available: true,
  },
];

export const achievements: Achievement[] = [
  {
    title: "Smart India Hackathon Finalist",
    description:
      "Selected as a national finalist in SIH 2024 for building a working prototype under real-world time constraints.",
    icon: "trophy",
  },
  {
    title: "Research Publications",
    description:
      "5+ publications in machine learning and NLP across international conferences and journals.",
    icon: "book",
  },
  {
    title: "Conference Presentations",
    description:
      "Presented research findings on transformer-based NLP methods to academic and industry audiences.",
    icon: "mic",
  },
  {
    title: "Research Internship — IIT Guwahati",
    description:
      "Ongoing research internship focused on NLP and scalable model training pipelines.",
    icon: "flask",
  },
  {
    title: "Open Source Contributions",
    description:
      "In progress — contributions to open-source AI and developer tooling projects.",
    icon: "gitBranch",
    future: true,
  },
  {
    title: "Certifications",
    description:
      "In progress — additional certifications in machine learning and cloud systems.",
    icon: "certificate",
    future: true,
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "rajenroshna@gmail.com",
    href: "mailto:rajenroshna@gmail.com",
    icon: "mail",
  },
  {
    label: "https://www.linkedin.com/in/om-bhattarai-8b4116325/",
    href: "https://www.linkedin.com/in/om-bhattarai-8b4116325/",
    icon: "linkedin",
  },
  {
    label: "https://github.com/TheCoderOm-max",
    href: "https://github.com/TheCoderOm-max",
    icon: "github",
  },
  {
    label: "https://leetcode.com/u/Om-The-Coder/",
    href: "https://leetcode.com/u/Om-The-Coder/",
    icon: "code",
  },
  {
    label: "https://www.codechef.com/users/brace_hero_76",
    href: "https://www.codechef.com/users/brace_hero_76",
    icon: "chess",
  },
  {
    label: "Jalpaiguri, West Bengal, India",
    href: "https://maps.google.com/?q=Jalpaiguri,West+Bengal,India",
    icon: "mapPin",
  },
];
