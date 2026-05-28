export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#cloud', label: 'Cloud' },
  { href: '#certs', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

export const HERO = {
  tag: 'Available for opportunities',
  name: ['George Devid', 'John'],
  title: 'Senior IT Support Engineer · Cloud & DevOps · Full-Stack Developer',
  location: 'Hamilton, Ontario',
  description:
    'Customer-focused IT professional with 3+ years across cloud infrastructure, enterprise systems, and full-stack development. I build reliable systems and polished digital experiences — from Azure architectures to production web applications.',
  stats: [
    { num: '3+', label: 'Years Experience' },
    { num: '8+', label: 'Projects Shipped' },
    { num: '4', label: 'Companies' },
  ],
};

export const SKILLS = [
  { label: 'Microsoft Azure', featured: true },
  { label: 'Microsoft 365', featured: false },
  { label: 'Active Directory', featured: false },
  { label: 'PowerShell', featured: false },
  { label: 'Docker', featured: false },
  { label: 'Kubernetes', featured: false },
  { label: 'Next.js', featured: false },
  { label: 'Spring Boot', featured: false },
  { label: 'React.js', featured: false },
  { label: 'Node.js', featured: false },
  { label: 'Azure DevOps', featured: false },
  { label: 'Jenkins', featured: false },
  { label: 'DNS / DHCP', featured: false },
  { label: 'VMware', featured: false },
  { label: 'Linux / Bash', featured: false },
  { label: 'MySQL / MongoDB', featured: false },
  { label: 'Entra ID / RBAC', featured: false },
];

export const HIGHLIGHTS = [
  {
    title: 'Azure Cloud Architecture',
    sub: 'VMs, VNets, NSGs, Storage, Firewall, Hub-Spoke topologies',
    icon: 'cloud',
  },
  {
    title: 'Identity & Security',
    sub: 'Microsoft Entra ID, RBAC, MFA, VPN, Active Directory',
    icon: 'lock',
  },
  {
    title: 'DevOps & CI/CD',
    sub: 'Azure DevOps, Jenkins, GitHub Actions, Docker, Kubernetes, AKS',
    icon: 'code',
  },
  {
    title: 'Full-Stack Development',
    sub: 'Next.js, React, Spring Boot, Node.js, TypeScript, Java, Angular',
    icon: 'monitor',
  },
  {
    title: 'Apple Ecosystem Support',
    sub: 'iOS, macOS, iPhone/iPad/MacBook, iCloud, remote diagnostics',
    icon: 'phone',
  },
];

export const EXPERIENCE = [
  {
    role: 'Senior Technical Support Engineer',
    company: 'Concentrix — Apple Inc. Program · Hamilton, Ontario',
    date: 'Oct 2024 – Present',
    icon: 'monitor',
    bullets: [
      'Support Apple customers across North America resolving issues across iOS, macOS, and the full Apple ecosystem.',
      'Troubleshoot iPhone, iPad, MacBook, and iMac for software, system configuration, performance, connectivity, and account access issues.',
      'Investigate and resolve network, Wi-Fi, DNS, synchronization, and OS-level issues using structured remote diagnostic tools.',
      'Maintain high CSAT scores delivering clear, step-by-step guidance via phone and chat support channels.',
      'Escalate advanced cases and contribute to continuous support process improvement initiatives.',
    ],
    tags: ['iOS / macOS', 'Remote Support', 'DNS', 'Wi-Fi Diagnostics', 'iCloud', 'Ticket Management'],
  },
  {
    role: 'IT Support Assistant',
    company: 'Kaliope Immigration · Oshawa, Ontario',
    date: 'Mar 2024 – Oct 2024',
    icon: 'users',
    bullets: [
      'Delivered Level 1 support for hardware, software, and network issues across Windows 10/11, Microsoft Office, printers, and email systems.',
      'Administered Microsoft 365 — Outlook, Teams, SharePoint — including user account setup and access management.',
      'Managed Active Directory: user provisioning, password resets, and group policy updates for secure access control.',
      'Monitored data backup processes, configured VPN and MFA, and promoted cybersecurity best practices.',
      'Performed server maintenance: user administration, backup verification, patch checks, and access troubleshooting.',
    ],
    tags: ['Microsoft 365', 'Active Directory', 'Windows Server', 'VPN / MFA', 'SharePoint', 'Backup'],
  },
  {
    role: 'Software Developer — Cloud & DevOps Internship',
    company: 'Lamina Solutions · Ontario, Canada',
    date: 'Sep 2023 – Feb 2024',
    icon: 'code',
    bullets: [
      'Built and maintained internal applications using Next.js, Spring Boot, and MySQL; supported testing, deployment, and issue resolution.',
      'Assisted with CI/CD pipelines and Azure-based deployments across development and staging environments.',
      'Supported application hosting, containerization via Docker, and Azure resource configuration including networking and access controls.',
      'Collaborated on deployment validation, system monitoring, and technical problem-solving tasks.',
    ],
    tags: ['Next.js', 'Spring Boot', 'Azure', 'CI/CD', 'Docker', 'MySQL'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Experion Technologies · Kochi, India',
    date: 'Mar 2021 – Feb 2022',
    icon: 'info',
    bullets: [
      'Developed enterprise web applications using Angular 13, ASP.NET, MySQL, C#.',
' Designed and optimized RESTful APIs to improve data handling efficiency.',
'Implemented data migration and reporting tools using SSIS and T-SQL scripts.',
'Analyzed user requirements and maintained comprehensive API documentation.',
' Led technical mentoring and oversight, including team collaboration, exhibits team skills, unit testing, anddevelopment of proof-of-concepts (POC) for client-requested features..',
'Participated in Agile software development, collaborating in sprint planning and retrospectives.',
    
    ],
    tags: ['Java', 'Angular', 'ASP.NET', 'Azure VMs', 'MySQL'],
  },
];

export const PROJECTS = [
  {
    cat: 'Local Business · Landscaping',
    name: "Nature's Trim",
    desc: "Professional landscaping and lawn care business website built to generate leads and showcase services. Clean, modern design with service listings, photo galleries, and contact forms — optimized for local SEO and mobile.",
    image: '/images/health-dialogue.png',
    label: 'Live',
    stacks: ['Next.js', 'React', 'Vercel'],
    liveUrl: null,
    githubUrl: null,
    gradient: 'linear-gradient(135deg, #1e4a2d 0%, #2d6b42 50%, #4a9460 100%)',
  },
  {
    cat: 'Non-profit · Church · Community',
    name: 'St. Thomas Malankara Catholic Church',
    desc: 'Full-featured community website for a Syro-Malankara Catholic Church in London, Ontario. Features mass schedules, event listings, photo galleries, registration system, and news updates — with AWS S3 for media hosting.',
    image: '/images/natures-trim.png',
    label: 'Live',
    stacks: ['Next.js', 'AWS S3', 'Vercel'],
    liveUrl: 'https://www.stthomaslondon.ca/',
    githubUrl: null,
    gradient: 'linear-gradient(135deg, #5c3418 0%, #8a5530 50%, #b87d50 100%)',
  },
  {
    cat: 'Healthcare · Mental Wellness',
    name: 'Health Dialogue Kozhikode',
    desc: 'Professional website for a psychology and counseling centre in Kerala, India. Features therapist profiles, service listings, online booking, and a compassionate brand voice aligned with mental wellness.',
    image: '/images/tiny-hub.png',
    label: 'Live',
    stacks: ['Next.js', 'React', 'Vercel'],
    liveUrl: 'https://www.healthdialogue.org/',
    githubUrl: null,
    gradient: 'linear-gradient(135deg, #0f3d2e 0%, #1e6650 50%, #2d8a70 100%)',
  },
  {
    cat: 'Hospitality · Restaurant · Local Business',
    name: 'The TiNY HUB — Tiny Township Café',
    desc: 'Website for a community café in Tiny Township, Ontario. Features all-day breakfast menus, Google Maps integration, phone and directions CTAs, hours display, and a 4.7-star customer rating.',
    image: '/images/st-thomas.png',
    label: 'Live · 4.7 Stars',
    stacks: ['Next.js', 'React', 'Vercel'],
    liveUrl: 'https://thetinyhub.vercel.app/',
    githubUrl: null,
    gradient: 'linear-gradient(135deg, #2a1a0e 0%, #5c3a1e 50%, #9e6833 100%)',
  },
  {
    cat: 'Artificial Intelligence · Computer Vision',
    name: 'Video Background Remover',
    desc: 'AI-powered web application that removes backgrounds from videos directly in the browser using machine learning — delivering clean, background-free video output without server uploads.',
    image: '/images/chromacut.png',
    label: 'AI Tool · Live',
    stacks: ['React', 'ML / Vision', 'Canvas API', 'Vercel'],
    liveUrl: 'https://video-background-rem.vercel.app/',
    githubUrl: null,
    gradient: 'linear-gradient(135deg, #0d1020 0%, #1a2040 50%, #243060 100%)',
  },
  {
    cat: 'Artificial Intelligence · Automation · Voice',
    name: 'AI Calling Bot',
    desc: 'Intelligent automated calling bot powered by AI — designed to handle outbound voice interactions, process conversational responses, and automate phone-based workflows using NLP with telephony APIs.',
    image: null,
    label: 'AI · Open Source',
    stacks: ['AI / NLP', 'Voice API', 'Node.js', 'Automation'],
    liveUrl: null,
    githubUrl: 'https://github.com/GeorgeDevidJohn/AI-Calling_Bot',
    gradient: 'linear-gradient(135deg, #1a2a1a 0%, #2a4a2a 50%, #3a6a3a 100%)',
  },
  {
    cat: 'Personal · Portfolio',
    name: 'Personal Portfolio — georgedevid.vercel.app',
    desc: 'Personal developer portfolio showcasing professional experience, technical projects, and skills. Built with modern web technologies, smooth animations, and a clean aesthetic.',
    image: '/images/portfolio-preview.png',
    label: 'Live',
    stacks: ['Next.js', 'TypeScript', 'Vercel'],
    liveUrl: 'https://georgedevid.vercel.app/',
    githubUrl: null,
    gradient: 'linear-gradient(135deg, #111111 0%, #1e1e1e 50%, #2d2d2d 100%)',
  },
];

const AZURE_BASE = 'https://github.com/GeorgeDevidJohn/azure-hands-on-projects/tree/main/';

export const CLOUD_PROJECTS = [
  {
    name: 'Secure 3-Tier Python Application on Azure',
    desc: 'Deployed a production-grade 3-tier architecture on Azure with strict NSG rules, private endpoints, and layered security controls separating public and internal traffic across web, application, and data tiers.',
    badges: ['Azure VMs', 'NSG', 'Python', 'VNet'],
    githubUrl: AZURE_BASE + 'Secure%203%20Tier%20Application%20using%20Azure',
    icon: 'lock',
  },
  {
    name: 'Spring Boot CI/CD to AKS via Jenkins',
    desc: 'End-to-end CI/CD pipeline: Jenkins builds a Spring Boot application, Docker containerizes it, and the pipeline deploys automatically to Azure Kubernetes Service with YAML-based pipeline configuration.',
    badges: ['Jenkins', 'AKS', 'Docker', 'Spring Boot'],
    githubUrl: AZURE_BASE + 'Springboot-azure-docker-app',
    icon: 'clock',
  },
  {
    name: 'Hub-and-Spoke Azure Network with Azure Firewall',
    desc: 'Designed and deployed a hub-and-spoke virtual network topology with Azure Firewall for centralized traffic inspection, route tables, and VNet peering configurations for enterprise-grade connectivity.',
    badges: ['Azure Firewall', 'VNet Peering', 'Route Tables'],
    githubUrl: AZURE_BASE + 'Hub-and-Spoke%20Architecture%20with%20Azure%20Firewall',
    icon: 'globe',
  },
  {
    name: 'Java Spring Boot Container to Azure App Service',
    desc: 'Containerized a Java Spring Boot application with Docker and deployed to Azure App Service for Containers, with environment configuration, health checks, and deployment slot management.',
    badges: ['Azure App Service', 'Docker', 'Java'],
    githubUrl: AZURE_BASE + 'Springboot-azure-docker-app',
    icon: 'box',
  },
  {
    name: 'AI Calling Bot',
    desc: 'Intelligent automated calling bot powered by AI — handles outbound voice interactions, processes conversational responses, and automates phone-based workflows using NLP with telephony APIs.',
    badges: ['AI / NLP', 'Voice API', 'Node.js'],
    githubUrl: 'https://github.com/GeorgeDevidJohn/AI-Calling_Bot',
    icon: 'phone',
  },
  {
    name: 'Identity & Access Management Setup',
    desc: 'Configured Microsoft Entra ID with RBAC, conditional access policies, MFA enforcement, and managed identity for Azure resource access — simulating enterprise-grade IAM for cloud workloads.',
    badges: ['Entra ID', 'RBAC', 'MFA', 'Conditional Access'],
    githubUrl: 'https://github.com/GeorgeDevidJohn/azure-hands-on-projects',
    icon: 'users',
  },
];

export const CERTS = [
  {
    name: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'AZ-104 · Microsoft',
    icon: 'award',
  },
  {
    name: 'Getting Started with Generative AI in Azure',
    issuer: 'Microsoft · Azure AI Services',
    icon: 'monitor',
  },
  {
    name: 'Information Technology Solutions — Postgraduate Diploma',
    issuer: 'Humber College, Toronto · 2022–2024',
    icon: 'graduation',
  },
  {
    name: 'B.Tech — Electronics & Communication Engineering',
    issuer: 'Rajagiri School of Engineering & Technology, India · 2016–2020',
    icon: 'graduation',
  },
];

export const CONTACT = {
  email: 'gthekkineth@gmail.com',
  phone: '+1 437 268 7301',
  website: 'https://georgedevid.vercel.app/',
  github: 'https://github.com/GeorgeDevidJohn',
  linkedin: 'https://www.linkedin.com/in/george-devid/',
};
