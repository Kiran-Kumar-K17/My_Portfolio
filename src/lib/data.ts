// Portfolio data for Kiran Kumar - Backend Engineer & DevOps Specialist

export const personalInfo = {
  name: "Kiran Kumar",
  title: "Backend Developer | DevOps Engineer | Linux & Cloud Enthusiast",
  email: "kirankumark1707@gmail.com",
  location: "Udupi, India",
  github: "https://github.com/Kiran-Kumar-K17",
  linkedin: "https://www.linkedin.com/in/kiran-kumar-k17/",
  resumeUrl: "/Kiran_Kumar.pdf",
};

export const resumeContent = {
  summary:
    "Passionate Backend Developer and DevOps Engineer with expertise in building scalable systems, automating infrastructure, and deploying cloud-native applications.",
  highlights: [
    "Proficient in Node.js, Express, and RESTful API development",
    "Hands-on experience with Docker, Kubernetes, and container orchestration",
    "Strong knowledge of CI/CD pipelines using GitHub Actions and Jenkins",
    "Cloud infrastructure management on AWS (EC2, S3, IAM)",
    "Linux system administration and shell scripting",
    "Database management with MongoDB, PostgreSQL, and Redis",
  ],
};

export const terminalCommands = [
  {
    command: "whoami",
    output: "Kiran Kumar — Backend Developer & DevOps Engineer",
    delay: 1000,
  },
  {
    command: "cat about.txt",
    output: "Building scalable backend systems & automating infrastructure",
    delay: 800,
  },
  {
    command: "ls skills/",
    output: "node.js  docker  kubernetes  aws  terraform  linux",
    delay: 600,
  },
  {
    command: "echo $PASSION",
    output: "Turning complex infrastructure into elegant solutions",
    delay: 700,
  },
];

export const aboutContent = {
  headline: "Crafting Robust Backend Systems & Scalable Infrastructure",
  description: `I'm a Backend Developer and DevOps Engineer with a passion for building 
    reliable, scalable systems that power modern applications. With expertise in 
    cloud-native technologies, container orchestration, and infrastructure automation, 
    I bridge the gap between development and operations.`,
  highlights: [
    "1+ years building production-grade backend services",
    "Expertise in containerization and Kubernetes orchestration",
    "Automated CI/CD pipelines reducing deployment time by 70%",
    "Linux systems administration and optimization",
    "Cloud infrastructure design and cost optimization",
  ],
};

export const skillCategories = [
  {
    title: "Backend Development",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "REST APIs", level: 90 },
      { name: "Authentication", level: 88 },
      { name: "System Design", level: 85 },
    ],
  },
  {
    title: "DevOps & Automation",
    icon: "Settings",
    skills: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 88 },
      { name: "CI/CD", level: 92 },
      { name: "Terraform", level: 85 },
      { name: "Linux", level: 95 },
    ],
  },
  {
    title: "Cloud Platforms",
    icon: "Cloud",
    skills: [
      { name: "AWS EC2", level: 90 },
      { name: "AWS S3", level: 92 },
      { name: "AWS IAM", level: 88 },
      { name: "Nginx", level: 90 },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "RESTful Blogging API",
    problem:
      "Content management systems often lack efficient APIs that handle high traffic while maintaining security and performance.",
    solution:
      "Built a fully-featured RESTful API with JWT authentication, rate limiting, and comprehensive documentation.",
    architecture:
      "Microservices architecture with API Gateway, separate services for auth, content, and media handling.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "Docker"],
    github: "https://github.com/Kiran-Kumar-K17/RESTful-Blogging-API",
    demo: "https://my-blogging-api.onrender.com/post",
    highlights: [
      "Designed to handle hundreds of concurrent requests",
      "Stable performance with high availability in production-like setup",
      "Optimized endpoints with sub-second response times",
    ],
  },
  {
    id: 1, // Or whatever order this is in your portfolio
    title: "DevCanvas: Full-Stack Engineering Blog",
    problem:
      "Developers need a dedicated space to document their journey, but building a custom CMS often involves complex state management and secure image handling.",
    solution:
      "A full-stack MERN platform featuring secure JWT authentication, a custom-built image upload pipeline, and full CRUD capabilities for technical storytelling.",
    architecture:
      "Monorepo architecture with a RESTful API backend and a Vite-powered React frontend, utilizing a public-folder asset strategy for image serving on Render.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Axios",
      "JWT",
      "Multer",
    ],
    github: "https://github.com/Kiran-Kumar-K17/RESTful-Blogging-API", // Update with your actual repo link
    demo: "https://devcanvas-client.onrender.com",
    highlights: [
      "Custom Authentication system with JWT and password hashing (Bcrypt)",
      "Dynamic Routing for personalized post views and editing",
      "Responsive UI built with a mobile-first Tailwind CSS approach",
    ],
  },
  {
    id: 3,
    title: "Kubernetes Node.js Application with ArgoCD GitOps",
    problem:
      "Deploying and managing containerized Node.js applications on Kubernetes manually is error-prone and lacks automated synchronization with source control.",
    solution:
      "A GitOps-based deployment pipeline using ArgoCD that automatically syncs Kubernetes manifests from the Git repository, enabling self-healing and automated pruning of resources.",
    architecture:
      "Simple Express.js server containerized with Docker, deployed to Kubernetes using ArgoCD Application manifests with automated sync policies. Includes Redis integration for caching capabilities.",
    techStack: [
      "Node.js",
      "Express.js",
      "Docker",
      "Kubernetes",
      "ArgoCD",
      "Redis",
    ],
    github: "https://github.com/Kiran-Kumar-K17/simple-k8s-node-Project",
    demo: null,
    highlights: [
      "GitOps workflow with ArgoCD for automated deployments",
      "Self-healing Kubernetes deployments with auto-sync",
      "Containerized Node.js application with Alpine-based image",
      "NodePort service for external access on port 30007",
    ],
  },
  {
    id: 4,
    title: "File Upload Memory Board",
    problem:
      "Managing file uploads and storing memories efficiently with proper file handling.",
    solution:
      "A memory board application with secure file upload capabilities and organized storage.",
    architecture:
      "RESTful API with file upload middleware, cloud storage integration, and database persistence.",
    techStack: ["Node.js", "Express", "Multer", "JavaScript"],
    github:
      "https://github.com/Kiran-Kumar-K17/My_Backend_Projects/tree/main/File_Upload_Memory_Board",
    demo: null,
    highlights: [
      "Secure file upload handling",
      "Memory organization features",
      "Efficient storage management",
    ],
  },
];

export const devOpsPipeline = [
  {
    stage: "Code",
    icon: "Code",
    description: "Developer pushes code to Git repository",
    color: "primary",
  },
  {
    stage: "Build",
    icon: "Package",
    description: "Application is compiled and dependencies installed",
    color: "primary",
  },
  {
    stage: "Test",
    icon: "TestTube",
    description: "Automated tests run including unit, integration, and E2E",
    color: "primary",
  },
  {
    stage: "Security",
    icon: "Shield",
    description: "Security scans and vulnerability assessments",
    color: "primary",
  },
  {
    stage: "Deploy",
    icon: "Rocket",
    description: "Containerized app deployed to Kubernetes cluster",
    color: "primary",
  },
  {
    stage: "Monitor",
    icon: "Activity",
    description: "Continuous monitoring with Prometheus & Grafana",
    color: "primary",
  },
];

export const experience = [
  {
    role: "Senior DevOps Engineer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description:
      "Leading infrastructure automation and CI/CD initiatives for a team of 50+ developers.",
    achievements: [
      "Reduced deployment frequency from weekly to daily",
      "Implemented GitOps workflow with ArgoCD",
      "Migrated legacy infrastructure to Kubernetes",
    ],
  },
  {
    role: "Backend Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description:
      "Built core backend services handling millions of requests daily.",
    achievements: [
      "Designed and implemented microservices architecture",
      "Optimized database queries reducing latency by 60%",
      "Implemented caching strategy with Redis",
    ],
  },
  {
    role: "Software Engineer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Full-stack development with focus on backend systems.",
    achievements: [
      "Built RESTful APIs for mobile applications",
      "Introduced Docker for development environments",
      "Mentored junior developers",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "DevOps Lab", href: "#devops" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
