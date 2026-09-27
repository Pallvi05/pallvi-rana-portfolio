/* Portfolio Data for Pallvi Rana - Senior React Native Developer */

const PORTFOLIO_DATA = {
  profile: {
    name: "Pallvi Rana",
    title: "Senior React Native Developer",
    tagline: "Senior React Native Developer with 3.5+ years of experience shipping 15+ production mobile apps to the App Store & Play Store. Specialized in New Architecture, Native Modules (Swift/Kotlin), React Query, SendBird Chat, and performance profiling.",
    bio: "Senior React Native Developer at Logixmart IT Solutions with 3.5+ years of production experience. Expert in building scalable iOS and Android applications, writing custom native Swift & Kotlin modules, state management with Redux Toolkit & React Query, real-time messaging with SendBird, and optimizing app launch time and 60fps rendering.",
    email: "pr22.brl@gmail.com",
    phone: "+91 8580442014",
    location: "Sunder Nagar, India",
    currentCompany: "Logixmart IT Solutions",
    yearsExperience: "3.5+ Years",
    totalApps: "15+",
    languages: ["Hindi (Native/Bilingual)", "English (Native/Bilingual)"],
    interests: ["UI/UX Design", "Mobile Architecture", "Performance Optimization"]
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
      title: "Core Architecture",
      icon: "📱",
      items: [
        { name: "React Native", desc: "iOS & Android" },
        { name: "New Architecture / JSI", desc: "TurboModules & Fabric" },
        { name: "TypeScript", desc: "Strict Types & Interfaces" },
        { name: "Clean Architecture", desc: "Modular Design Patterns" }
      ]
    },
    {
      title: "Native Engineering",
      icon: "⚙️",
      items: [
        { name: "Swift (Xcode)", desc: "iOS Native Modules" },
        { name: "Kotlin (Android Studio)", desc: "Android Native Bridges" },
        { name: "Custom Native Modules", desc: "Bridging & JSI" },
        { name: "Native SDKs", desc: "Maps, Push & Biometrics" }
      ]
    },
    {
      title: "State, Data & Caching",
      icon: "🧠",
      items: [
        { name: "Redux Toolkit & Zustand", desc: "Global State Store" },
        { name: "React Query (TanStack)", desc: "Async Data & Caching" },
        { name: "MMKV & AsyncStorage", desc: "High-Speed Storage" },
        { name: "RESTful APIs & Axios", desc: "Data Fetching & Interceptors" }
      ]
    },
    {
      title: "Motion, UI & Virtualization",
      icon: "✨",
      items: [
        { name: "Reanimated 3", desc: "60 FPS Native Motion" },
        { name: "Gesture Handler", desc: "Touch & Drag Gestures" },
        { name: "FlashList & FlatList", desc: "List Virtualization" },
        { name: "Styled Components", desc: "Dynamic Theme Engine" }
      ]
    },
    {
      title: "Real-Time & Backend",
      icon: "🔥",
      items: [
        { name: "SendBird Chat SDK", desc: "1-on-1 & Group Chat" },
        { name: "Firebase Suite", desc: "Auth, Firestore, Cloud Storage" },
        { name: "Push Notifications", desc: "FCM & APNs" },
        { name: "WebSockets", desc: "Real-time Event Streams" }
      ]
    },
    {
      title: "Performance Tuning",
      icon: "🚀",
      items: [
        { name: "JS & UI Thread Profiling", desc: "FPS Optimization" },
        { name: "Startup Time Tuning", desc: "Bundle Size Reduction" },
        { name: "Memory Leak Hunting", desc: "Profiler & Garbage Collector" },
        { name: "Render Optimization", desc: "Memoization & Selectors" }
      ]
    },
    {
      title: "Testing & Debugging",
      icon: "🧪",
      items: [
        { name: "Jest", desc: "Unit & Integration Tests" },
        { name: "RNTL", desc: "React Native Testing Library" },
        { name: "Flipper & RNDebugger", desc: "Deep State Debugging" },
        { name: "Crashlytics & Sentry", desc: "Crash Monitoring" }
      ]
    },
    {
      title: "Shipping & Deployment",
      icon: "📦",
      items: [
        { name: "App Store & Play Console", desc: "Production Releases" },
        { name: "CodePush / EAS Update", desc: "OTA Updates" },
        { name: "Fastlane", desc: "Build Automation" },
        { name: "Git Workflow & PRs", desc: "Team Version Control" }
      ]
    }
  ],

  experience: [
    {
      company: "Logixmart IT Solutions",
      role: "Senior React Native Developer",
      period: "06/2025 — Present",
      duration: "Current Role",
      isCurrent: true,
      bullets: [
        "Architecting flagship cross-platform iOS & Android applications using React Native, TypeScript, and the New Architecture (JSI / TurboModules).",
        "Designing enterprise state management combining Redux Toolkit and React Query for asynchronous data fetching, intelligent caching, and optimistic UI updates.",
        "Engineering custom native Swift (Xcode) and Kotlin (Android Studio) module bridges for background services, push notifications, and biometrics.",
        "Spearheading performance profiling and thread optimization, reducing app launch times by 35% and ensuring 60fps gesture rendering using FlashList and MMKV."
      ]
    },
    {
      company: "Beyond Infinity Solutions",
      role: "React Native Developer",
      period: "12/2024 — 05/2025",
      duration: "6 Months",
      isCurrent: false,
      bullets: [
        "Implemented real-time 1-on-1 and group chat features in production mobile apps using SendBird SDK with offline message queuing.",
        "Built fluid, gesture-driven interfaces and micro-animations using React Native Reanimated 3 and Gesture Handler.",
        "Optimized list rendering and memory overhead across high-traffic screens, eliminating re-renders and memory leaks.",
        "Managed production App Store and Google Play releases, OTA updates via EAS, and crash tracking with Firebase Crashlytics."
      ]
    },
    {
      company: "Master Intech Solutions",
      role: "Application Developer",
      period: "05/2023 — 11/2024",
      duration: "1 Year 7 Months",
      isCurrent: false,
      bullets: [
        "Developed and maintained 5+ production React Native applications, creating modular, reusable UI component libraries for consistency.",
        "Integrated complete Firebase backend services (Authentication, Firestore NoSQL, Cloud Messaging) alongside RESTful APIs.",
        "Integrated third-party native libraries including Google Maps API, Camera & Biometrics, and PDF document viewers.",
        "Utilized Git branching workflows, conducted code reviews, and collaborated closely with cross-functional backend and design teams."
      ]
    },
    {
      company: "Works Delight",
      role: "Trainee React Native Developer",
      period: "03/2023 — 05/2023",
      duration: "3 Months",
      isCurrent: false,
      bullets: [
        "Underwent hands-on training in core React Native, ES6+ JavaScript, component lifecycle hooks, and React Navigation paradigms.",
        "Built foundational mobile app prototypes applying industry best practices for clean architecture, unit testing with Jest, and debugging with Flipper."
      ]
    }
  ]
};
