/* Portfolio Data for Pallvi Rana - Senior React Native Developer */

const PORTFOLIO_DATA = {
  profile: {
    name: "Pallvi Rana",
    title: "Senior React Native Developer",
    tagline: "Senior React Native Developer with 3.5+ years of expertise in building 15+ high-performance, scalable, and user-friendly mobile apps for iOS & Android.",
    bio: "Senior React Native Developer at Logixmart IT Solutions with 3.5+ years of experience. Proficient in JavaScript, TypeScript, React Native, Redux, Context API, Firebase, and RESTful APIs, with a strong focus on state management, component-based architecture, SendBird real-time chat, and UI/UX optimization.",
    email: "pr22.brl@gmail.com",
    phone: "+91 8580442014",
    location: "Sunder Nagar, India",
    currentCompany: "Logixmart IT Solutions",
    yearsExperience: "3.5+ Years",
    totalApps: "15+",
    languages: ["Hindi (Native/Bilingual)", "English (Native/Bilingual)"],
    interests: ["UI/UX Design", "Mobile App Development", "Performance Optimization"]
  },

  projects: [
    {
      id: "rooflink",
      title: "RoofLink",
      category: "Construction CRM & Estimator",
      iconImg: "assets/apps/rooflink.jpg",
      color: "#f59e0b",
      description: "Mobile-first CRM and estimation platform built specifically for roofing professionals to handle lead management, smart scheduling, project tracking, inspection reports, and job-site photo documentation.",
      features: [
        "Lead tracking pipeline & automated quote generation",
        "Job-site photo management with annotation tools",
        "Real-time client messaging & project status updates",
        "Offline-first data caching for remote job-site inspections"
      ],
      tech: ["React Native", "Redux Toolkit", "RESTful APIs", "Camera Module", "AsyncStorage"],
      playStore: "https://play.google.com/store/apps/details?id=com.rooflink&hl=en",
      appStore: null
    },
    {
      id: "reekolect",
      title: "Reekolect",
      category: "Social & AI Memory Vault",
      iconImg: "assets/apps/reekolect.jpg",
      color: "#ec4899",
      description: "AI-powered social media and memory preservation platform that allows families to securely upload, restore, and organize photos & videos into digital family trees and shared memory vaults.",
      features: [
        "Interactive digital family tree with AI connection suggestions",
        "High-resolution photo & video memory feed with privacy controls",
        "AI-based photo restoration and detail enhancement",
        "Secure 1-on-1 private messaging and family updates"
      ],
      tech: ["React Native", "Firebase", "Redux", "React Native Navigation", "Image Caching"],
      playStore: "https://play.google.com/store/apps/details?id=com.reekolect&hl=en",
      appStore: "https://apps.apple.com/in/app/reekolect/id6474777738"
    },
    {
      id: "myborderpass",
      title: "My Border Pass",
      category: "Travel & Digital Verification",
      iconImg: "assets/apps/myborderpass.jpg",
      color: "#3b82f6",
      description: "Official digital travel pass application developed by TRIS Registration Centre allowing users to securely link passport credentials, generate dynamic QR codes, and expedite border clearance.",
      features: [
        "Secure encrypted passport & travel document storage",
        "Dynamic QR code generation for rapid border entry validation",
        "Real-time travel advisories & pass status notifications",
        "Multi-tier biometric identity validation flow"
      ],
      tech: ["React Native", "TypeScript", "Context API", "Biometrics", "REST APIs"],
      playStore: "https://play.google.com/store/apps/details?id=com.application.Myborderpass&hl=en",
      appStore: "https://apps.apple.com/in/app/myborderpass/id6503904291"
    },
    {
      id: "myrc",
      title: "My Registered Agent (MyRC)",
      category: "Corporate Governance & Compliance",
      iconImg: "assets/apps/myrc.jpg",
      color: "#10b981",
      description: "Corporate compliance monitoring application designed for business owners and cardholders to receive legal notifications, track official state filing deadlines, and manage corporate documents.",
      features: [
        "Push notification alerts for time-sensitive legal notices",
        "Embedded secure document viewer for PDF filings & receipts",
        "Multi-entity corporate profile switcher",
        "Automated backend sync with state registry databases"
      ],
      tech: ["React Native", "Redux", "Firebase Messaging", "RESTful APIs", "PDF Viewer"],
      playStore: "https://play.google.com/store/apps/details?id=com.tris.myrc.MyRegistere",
      appStore: null
    },
    {
      id: "missio",
      title: "Missio",
      category: "Field Productivity & Collaboration",
      iconImg: "assets/apps/missio.jpg",
      color: "#8b5cf6",
      description: "Dedicated communication and activity-tracking platform designed for mission teams, field personnel, and supporters to log daily impact, share progress updates, and manage team workflows.",
      features: [
        "Real-time activity feed with rich media logging",
        "Supporter update generation and broadcast hooks",
        "Team task assignment and milestone progress trackers",
        "Offline state management for low-connectivity field areas"
      ],
      tech: ["React Native", "TypeScript", "Redux", "Styled Components", "REST APIs"],
      playStore: "https://play.google.com/store/apps/details?id=app.missio&hl=en",
      appStore: "https://apps.apple.com/in/app/missio-live-on-mission/id6444812053"
    },
    {
      id: "claudia",
      title: "Claudia Dean World",
      category: "Health & Ballet Training",
      iconImg: "assets/apps/claudia.jpg",
      color: "#f43f5e",
      description: "Premier ballet training mobile application by Claudia Dean featuring over 400+ step-by-step video exercises, customized dance programs, streak tracking, and specialized technique challenges.",
      features: [
        "Custom video player with speed adjustments & bookmarking",
        "400+ targeted exercises for turns, jumps, flexibility & feet",
        "Personalized daily practice schedules and streak counters",
        "In-app subscriptions & exclusive dancer community content"
      ],
      tech: ["React Native", "Redux Toolkit", "Video Player", "In-App Purchases", "REST APIs"],
      playStore: "https://play.google.com/store/apps/details?id=com.claudiadeanworld&hl=en_IN",
      appStore: "https://apps.apple.com/in/app/claudia-dean-world/id6443443761"
    },
    {
      id: "skoolfame",
      title: "Skoolfame",
      category: "School Community & Social",
      iconImg: "assets/apps/skoolfame.jpg",
      color: "#06b6d4",
      description: "Vibrant social networking platform for high school students featuring event discovery, self-nominations, media sharing, and real-time chat powered by SendBird for student community building.",
      features: [
        "SendBird integrated real-time 1-on-1 & group chat messaging",
        "High school event registration and self-nomination modules",
        "Media gallery feed for photo/video sharing with likes & comments",
        "Custom tab bar navigation with high-efficiency list rendering"
      ],
      tech: ["React Native", "SendBird Chat", "Firebase", "Redux", "React Native Navigation"],
      playStore: "https://play.google.com/store/apps/details?id=com.skoolfame",
      appStore: "https://apps.apple.com/in/app/skoolfame-app/id1671482360"
    }
  ],

  skills: [
    {
      title: "Core Mobile Development",
      icon: "📱",
      items: [
        { name: "React Native", desc: "iOS & Android" },
        { name: "React Native Navigation", desc: "Stack, Tabs, Drawer" },
        { name: "Component Architecture", desc: "Reusable UI Kits" },
        { name: "Cross-Platform Optimization", desc: "60 FPS Render" }
      ]
    },
    {
      title: "Languages & Core Tech",
      icon: "⚡",
      items: [
        { name: "JavaScript (ES6+)", desc: "Async/Await, ES Next" },
        { name: "TypeScript", desc: "Strict Typing, Interfaces" },
        { name: "HTML5 / CSS3", desc: "Flexbox, Responsive" },
        { name: "Styled Components", desc: "Theme Providers" }
      ]
    },
    {
      title: "State & Data Management",
      icon: "🧠",
      items: [
        { name: "Redux & Redux Toolkit", desc: "Global State" },
        { name: "Context API & Hooks", desc: "Lightweight State" },
        { name: "AsyncStorage", desc: "Persistent Storage" },
        { name: "RESTful APIs Integration", desc: "Axios, Fetch API" }
      ]
    },
    {
      title: "Backend & Real-Time Services",
      icon: "🔥",
      items: [
        { name: "Firebase Auth & Firestore", desc: "NoSQL Data" },
        { name: "Firebase Push Notifications", desc: "FCM" },
        { name: "SendBird SDK", desc: "Real-time Messaging" },
        { name: "Cloud Storage", desc: "Media Files" }
      ]
    },
    {
      title: "Tools & Version Control",
      icon: "🛠️",
      items: [
        { name: "Git & GitHub", desc: "Branching, PRs" },
        { name: "Xcode", desc: "iOS Builds & Simulators" },
        { name: "Android Studio", desc: "Android Emulators" },
        { name: "NPM / Yarn", desc: "Dependency Mgmt" }
      ]
    },
    {
      title: "Soft Skills & Process",
      icon: "🌟",
      items: [
        { name: "Problem Solving", desc: "Debugging & Profiling" },
        { name: "Team Collaboration", desc: "Cross-functional" },
        { name: "Time Management", desc: "Deadline Delivery" },
        { name: "Code Cleanliness", desc: "Maintainable Systems" }
      ]
    }
  ],

  experience: [
    {
      company: "Logixmart IT Solutions",
      role: "Senior React Native Developer",
      period: "06/2025 — Present",
      duration: "1 Year 4 Months",
      isCurrent: true,
      bullets: [
        "Leading high-performance, scalable cross-platform mobile application development using React Native and Redux.",
        "Designing modular component architectures and implementing reusable UI elements to speed up feature rollouts.",
        "Integrating RESTful APIs, third-party SDKs, and managing app lifecycle states for optimal user experience."
      ]
    },
    {
      company: "Beyond Infinity Solutions",
      role: "React Native Developer",
      period: "12/2024 — 05/2025",
      duration: "6 Months",
      isCurrent: false,
      bullets: [
        "Developed and integrated real-time chat functionality into production mobile apps using SendBird SDK.",
        "Built responsive, intuitive UI/UX components using Styled Components and custom animations.",
        "Managed complex application state using Redux and React Context API to ensure consistent performance.",
        "Optimized mobile codebase, reducing re-renders and improving overall app efficiency."
      ]
    },
    {
      company: "Master Intech Solutions",
      role: "Application Developer",
      period: "05/2023 — 11/2024",
      duration: "1 Year 7 Months",
      isCurrent: false,
      bullets: [
        "Architected reusable UI component libraries for consistency across client applications.",
        "Integrated Firebase Authentication, Firestore, and Push Notifications for real-time engagement.",
        "Handled data fetching and state synchronization from RESTful APIs.",
        "Utilized Git and GitHub for version control, code reviews, and collaborative development."
      ]
    },
    {
      company: "Works Delight",
      role: "Trainee React Native Developer",
      period: "03/2023 — 05/2023",
      duration: "3 Months",
      isCurrent: false,
      bullets: [
        "Completed hands-on training in React Native, JavaScript ES6+, and mobile UI paradigms.",
        "Built foundational mobile applications applying industry best practices for clean and maintainable code.",
        "Gained practical experience in component lifecycle, state hooks, and debugging tools."
      ]
    }
  ]
};
