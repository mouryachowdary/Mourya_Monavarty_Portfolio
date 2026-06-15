export const personalInfo = {
  name: "Mourya Monavarty",
  title: "IT & Systems Admin | Aspiring SDET",
  summary:
    "Experienced IT & Systems support engineer with a strong background in server management, network administration, and IT asset management. Skilled in optimizing system performance and enhancing security through proactive monitoring and maintenance. Currently expanding expertise in automation testing (Playwright, TypeScript, API testing) and actively seeking opportunities in both Infrastructure Engineering and SDET roles, where I can leverage my operational experience alongside automation skills to deliver reliable and scalable systems.",
  highlights: [
    "6+ years in enterprise IT operations",
    "50+ servers and 500+ endpoints managed",
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
      "Managing user provisioning, access management, and IT infrastructure operations",
      "Driving SOC 2 compliance via security controls, evidence collection, and audit readiness",
      "Building compliance dashboards and reporting pipelines using Vanta for SOC 2 tracking",
      "Managing endpoint lifecycle, policy enforcement, and device compliance via Microsoft Intune",
      "Providing technical support to on-shore teams and resolving escalated issues promptly",
      "Leading Incident and Problem Management following ITIL best practices and root cause analysis",
      "Administering Microsoft Teams: user management, channel governance, and Teams Phone configs",
      "Managing Exchange Online: mailbox provisioning, mail flow rules, and retention policies",
      "Overseeing Intune for device enrollment, compliance policies, app deployment, and conditional access",
      "Administering SharePoint Online: site provisioning, permissions, and content governance",
      "Managing Microsoft Defender for endpoint protection, threat detection, and incident response",
      "Resolving P1–P4 incidents and service requests with strict SLA adherence",
      "Automating IT workflows using PowerShell scripts to reduce manual administrative effort",
      "Maintaining IT asset documentation and audit trails for compliance and governance readiness",
      "Authoring SOPs for IT administrators and end users covering systems, security, and onboarding processes",
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
    period: "AUG 2022 - Apr 2026",
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
    period: "APR 2020 - JUL 2022",
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
    tags: [" React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design", "UI/UX", "Frontend Develpoment"],
    live: "https://mouryamonavarty.vercel.app/",
    github: "https://github.com/mouryachowdary/Mourya_Monavarty_Portfolio.git"
  },
  {
    title: "Aurora Theme Extension for Chrome",
    description: [
      "Designed a Chrome browser extension that transforms the browsing experience with a vibrant Aurora-inspired UI theme, with Live Wallpaper and GIF/Image Support."
    ],
    tags: ["Chrome Extension", "UI Theme", "Web Extension", "JavaScript", "CSS", "Browser UX", "Live Wallpaper Support", "GIF/Image Support"],
    previewImage: "/aurora-preview.svg",
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
      "ChatGPT / GitHub Copilot / Codex",
      "Cursor / Continue",
      "AI-Assisted Testing",
      "Test Case Generation Using AI",
      "Basic AI Concepts",
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
    period: "JUN 2019 - NOV 2022",
  },
  {
    degree: "Diploma in Mechanical Engineering",
    school: "Sri Chaitanya Engineering College",
    period: "APR 2016 - APR 2019",
  },
];

export const howIWork = [
  "I combine infrastructure expertise with automation testing to build reliable, scalable systems. My approach focuses on real-world scenarios, ensuring applications perform seamlessly under actual conditions.",
  "I design maintainable automation frameworks (Playwright + TypeScript) with a strong emphasis on stability, reusability, and efficient execution. At the same time, I apply my infrastructure knowledge to ensure system performance, monitoring, and reliability are never compromised.",
  "I believe in automation that adds real value, proactive problem-solving, and continuously improving both system quality and engineering efficiency.",
];
