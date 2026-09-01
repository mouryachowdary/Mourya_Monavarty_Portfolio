export const personalInfo = {
  name: "Mourya Monavarty",
  title: "IT Operations & Test Automation",
  summary:
    "Experienced IT & Systems support engineer with a strong background in server management, network administration, and IT asset management. Skilled in optimizing system performance and enhancing security through proactive monitoring and maintenance. Currently expanding expertise in automation testing (Playwright, TypeScript, API testing) and actively seeking opportunities in both Infrastructure Engineering and SDET roles, where I can leverage my operational experience alongside automation skills to deliver reliable and scalable systems.",
  highlights: [
    "6+ years in enterprise IT operations",
    "500+ endpoints managed",
    "Playwright, TypeScript, API testing",
  ],
  email: "mouryachowdary19aps@gmail.com",
  phone: "+91 8919517382",
  location: "Visakhapatnam, Andhra Pradesh, India",
  linkedin: "https://www.linkedin.com/in/mourya-monavarty-0b3460166/",
  portfolio: "https://mouryamonavarty.vercel.app/",
};

export const experiences = [
  {
    number: "01",
    title: "IT & Systems Admin",
    company: "Thuro, Sails Software Inc",
    Location: "Visakhapatnam",
    period: "Apr 2026 - present",
    tasks: [
      "Managed user provisioning, access control, and license administration across Microsoft 365 and Entra ID",
      "Administered Microsoft Intune for device enrollment, compliance, app deployment, and endpoint management",
      "Supported SOC 2 compliance by remediating Vanta findings and maintaining audit readiness",
      "Managed Exchange Online mailboxes, distribution lists, permissions, and mail flow troubleshooting",
      "Administered Microsoft Teams, including user access, collaboration settings, and Teams Phone support",
      "Monitored Microsoft Defender security alerts and resolved endpoint compliance and security issues",
      "Resolved P1–P4 incidents and service requests while consistently meeting SLA targets",
      "Automated IT workflows and email notifications using Power Automate to improve operational efficiency",
      "Managed IT asset lifecycle, inventory, and documentation using Snipe-IT and Intune",
      "Authored SOPs and technical documentation for IT operations, onboarding, and security processes",
      "Provided L1/L2 technical support for Windows, Microsoft 365, and endpoint management issues",
      "Managed Keeper Enterprise user onboarding and monitored BreachWatch security recommendations",
      "Automating IT workflows using PowerShell scripts to reduce manual administrative effort",
      "Maintaining IT asset documentation and audit trails for compliance and governance readiness",
      "Coordinated device provisioning, replacement, reset, and vendor repair activities throughout the hardware lifecycle",
    ],
    tags: [
      "Microsoft 365",
      "Microsoft Intune",
      "SOC 2 / Vanta",
      "Incident Management",
      "PowerShell",
      "ITIL",
      "SOP Documentation",
      "Azure AD",
    ],
  },
  {
    number: "02",
    title: "IT & Systems Support Engineer",
    company: "CSI WEB, Sails Software Inc",
    Location: "Visakhapatnam",
    period: "Aug 2022 - Apr 2026",
    tasks: [
      "Administered and optimized 50+ Windows Server 2012–2022 instances across prod and staging",
      "Deployed OS images, software packages, and compliance baselines to 500+ endpoints via SCCM",
      "Implemented SCOM monitoring for 100+ servers with alerts and dashboards for proactive resolution",
      "Managed monthly security patch cycles using Ivanti and WSUS, maintaining 98% patch compliance",
      "Administered Active Directory (users, GPOs, OUs) and VMware ESXi/vSphere environments",
      "Configured and maintained DNS, DHCP, and File Server roles on Windows Server infrastructure",
      "Resolved 200+ incidents and change requests via ServiceNow following ITIL best practices",
      "Automated routine maintenance using PowerShell scripts, reducing manual effort by 40%",
      "Monitored server health via SCOM dashboards, achieving 99.5% availability SLA",
      "Managed Azure AD synchronization and hybrid identity for seamless cloud integration",
    ],
    tags: [
      "Windows Server",
      "VMware vSphere",
      "SCCM",
      "SCOM",
      "Azure",
      "Patch Management",
      "DNS",
      "DHCP",
    ],
  },
  {
    number: "03",
    title: "IT & Network Support Associate",
    company: "Sails Software Inc",
    Location: "Visakhapatnam",
    period: "Apr 2020 - Jul 2022",
    tasks: [
      "Configured and maintained Cisco switches, routers, wireless APs, and Sophos XG Firewall (200+ users)",
      "Tracked and managed 200+ IT assets via Snipe-IT, ensuring accurate inventory for audit readiness",
      "Executed IMAC (Install, Move, Add, Change) activities for desktops and laptops organization-wide",
      "Installed, configured, and maintained Windows, Linux, and macOS operating systems",
      "Provided Tier-2/Tier-3 technical support with 95% first-call resolution rate",
      "Monitored LAN/WAN performance and bandwidth utilization, resolving issues to minimize downtime",
      "Documented network topology diagrams and maintained standardized asset inventory for compliance",
    ],
    tags: [
      "TCP/IP",
      "DNS",
      "DHCP",
      "Network Routing",
      "VPN",
      "Linux",
      "MacOS",
      "Remote Support",
    ],
  },
];

export const projects = [
  {
    title: "Medicare Booking Automation",
    description: [
      "End-to-end automation using Playwright for booking workflows and validation."
    ],
    tags: ["Playwright", "TypeScript", "E2E"],
    github: "https://github.com/mouryachowdary/MedSchedule-Project-Playwright.git"
  },
  {
    title: "Medicare Appointment booking App",
    description: [
      "UI-based healthcare booking simulator."
    ],
    tags: ["Healthcare", "Appointment Booking", "Patient Scheduling", "Booking System", "User Flow"],
    live: "https://medicare-appointmentbooking-app.vercel.app/",
    github: "https://github.com/mouryachowdary/medicare-appointmentbooking-app.git"
  },
  {
    title: "Portfolio",
    description: [
      "Developed a responsive portfolio website using React, TypeScript, and Tailwind CSS, integrated with Framer Motion for seamless animations and interactions, to effectively showcase work experiences, projects and technical skills."
      ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design", "UI/UX", "Frontend Development"],
    live: "https://mouryamonavarty.vercel.app/",
    github: "https://github.com/mouryachowdary/Mourya_Monavarty_Portfolio.git"
  },
  {
    title: "Aurora Theme Extension for Chrome",
    description: [
      "Designed a Chrome browser extension that transforms the browsing experience with a vibrant Aurora-inspired UI theme, with Live Wallpaper and GIF/Image Support."
    ],
    tags: ["Chrome Extension", "UI Theme", "Web Extension", "JavaScript", "CSS", "Browser UX", "Live Wallpaper Support", "GIF/Image Support"],
    previewImage: "/aurora-preview.png",
    github: "https://github.com/mouryachowdary/Aurora-Extension-UI-for-Chrome.git"
  }
];

export const skillGroups = [
  {
    title: "System Administration",
    skills: [
      "Office365",
      "Active Directory & GPO",
      "Windows Server",
      "VMware vSphere/ESXi",
      "Backup & Disaster Recovery",
      "RDP & Remote Access",
      "Sysinternals",
      "Microsoft Intune",
      "Vanta",
    ],
  },
  {
    title: "Networking & Infrastructure",
    skills: [
      "LAN/WAN & TCP/IP",
      "DNS & DHCP",
      "Routing & Switching",
      "VPN & Remote Connectivity",
      "Wireless Networks & Access Points",
      "Network Monitoring & Troubleshooting",
    ],
  },
  {
    title: "Security & ITSM",
    skills: [
      "Patch Management",
      "Identity & Access Management",
      "Incident & Change Management",
      "SLA Management",
      "Network Access Control",
      "Agile/Scrum",
    ],
  },
  {
    title: "Languages & Automation",
    skills: [
      "TypeScript",
      "PowerShell & Bash",
      "C/C++",
      "Playwright (POM)",
      "API Testing & Manual Testing",
      "Git/GitHub",
      "Postman",
    ],
  },
  {
    title: "OS & Platforms",
    skills: [
      "Windows XP-11",
      "Windows Server (2012 R2-2022)",
      "Linux",
      "MacOS",
      "Microsoft Azure",
    ],
  },
  {
    title: "Tools & Software",
    skills: [
      "Microsoft Office",
      "SCCM / WSUS",
      "SCOM",
      "ServiceNow / Jira",
      "Snipe-IT",
      "Adobe Creative Cloud",
      "Ivanti",
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      "Prompt Engineering",
      "Claude",
      "Manus",
      "Gemini",
      "M365 Copilot",
      "Replit",
      "ChatGPT / GitHub Copilot / Codex",
      "Cursor / Lovable",
      "AI-Assisted Testing",
      "Test Case Generation Using AI",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "Microsoft SQL Server", "PostgreSQL"],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Mechanical Engineering",
    school: "Coastal Institute of Technology & Management",
    period: "Jun 2019 - Nov 2022",
  },
  {
    degree: "Diploma in Mechanical Engineering",
    school: "Sri Chaitanya Engineering College",
    period: "Apr 2016 - Apr 2019",
  },
];

export const howIWork = [
  "I combine infrastructure expertise with automation testing to build reliable, scalable systems. My approach focuses on real-world scenarios, ensuring applications perform seamlessly under actual conditions.",
  "I design maintainable automation frameworks (Playwright + TypeScript) with a strong emphasis on stability, reusability, and efficient execution. At the same time, I apply my infrastructure knowledge to ensure system performance, monitoring, and reliability are never compromised.",
  "I believe in automation that adds real value, proactive problem-solving, and continuously improving both system quality and engineering efficiency.",
];
