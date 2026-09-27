/* Portfolio Data for Pallvi Rana - React Native Developer */

const PORTFOLIO_DATA = {
  profile: {
    name: "Pallvi Rana",
    title: "React Native Developer",
    tagline: "Experienced React Native Developer with 2+ years of expertise in building high-performance, scalable, and user-friendly mobile apps for iOS & Android.",
    bio: "Proficient in JavaScript, TypeScript, React Native, Redux, Context API, Firebase, and RESTful APIs, with a strong focus on state management, component-based architecture, SendBird real-time chat, and UI/UX optimization. Skilled in writing clean, maintainable code and improving app efficiency.",
    email: "pr22.brl@gmail.com",
    phone: "+91 8580442014",
    location: "Sunder Nagar, India",
    currentCompany: "Logixmart IT Solutions",
    yearsExperience: "2+ Years",
    languages: ["Hindi (Native/Bilingual)", "English (Native/Bilingual)"],
    interests: ["UI/UX Design", "Mobile App Development", "Performance Optimization"]
  },

  projects: [
    {
      id: "rooflink",
      title: "RoofLink",
      category: "Construction & Business",
      icon: "🏗️",
      color: "#f59e0b",
      description: "Roofing management & estimation mobile solution designed for contractors to streamline project quotes, inspection workflows, client communication, and site photos.",
      features: [
        "Built responsive contractor dashboard and digital estimation tools",
        "Offline-first data caching for job site inspections",
        "REST API integration for real-time customer and quote syncing",
        "Custom photo capture & project report generation"
      ],
      tech: ["React Native", "Redux Toolkit", "RESTful APIs", "Camera Module", "AsyncStorage"],
      playStore: "https://play.google.com/store/apps/details?id=com.rooflink&hl=en",
      appStore: null
    },
    {
      id: "reekolect",
      title: "Reekolect",
      category: "Social & Memories",
      icon: "📸",
      color: "#ec4899",
      description: "A private memory vault app allowing families to securely store, organize, and share photos, build interactive family trees, and preserve cherished moments.",
      features: [
        "Interactive memory timeline and media gallery with smooth gestures",
        "Family tree visualization and member access controls",
        "Firebase media upload optimization with progress tracking",
        "High-performance list rendering for large media albums"
      ],
      tech: ["React Native", "Firebase", "Redux", "React Native Navigation", "Image Caching"],
      playStore: "https://play.google.com/store/apps/details?id=com.reekolect&hl=en",
      appStore: "https://apps.apple.com/in/app/reekolect/id6474777738"
    },
    {
      id: "myborderpass",
      title: "My Border Pass",
      category: "Travel & Security",
      icon: "🛂",
      color: "#3b82f6",
      description: "Digital travel verification and border entry pass management app providing travellers with secure document storage and real-time pass status validation.",
      features: [
        "Secure encrypted local storage for passport & visa credentials",
        "QR code generator & reader for digital border entry checks",
        "Push notification alerts for pass status changes & travel advisories",
        "Clean, multi-step biometric authentication UI flow"
      ],
      tech: ["React Native", "TypeScript", "Context API", "Biometrics", "REST APIs"],
      playStore: "https://play.google.com/store/apps/details?id=com.application.Myborderpass&hl=en",
      appStore: null
    },
    {
      id: "myrc",
      title: "My Registered Agent (MyRC)",
      category: "Business & Compliance",
      icon: "🏢",
      color: "#10b981",
      description: "Corporate compliance monitoring mobile suite enabling business owners to manage registered agent notices, track filing deadlines, and view corporate documents.",
      features: [
        "Real-time push notifications for urgent legal & compliance notices",
        "Secure document viewer for corporate filings & PDF reports",
        "Modular state management for business entity switching",
        "API data fetching with automated background sync"
      ],
      tech: ["React Native", "Redux", "Firebase Messaging", "RESTful APIs", "PDF Viewer"],
      playStore: "https://play.google.com/store/apps/details?id=com.tris.myrc.MyRegistere",
      appStore: null
    },
    {
      id: "missio",
      title: "Missio",
      category: "Productivity & Collaboration",
      icon: "🚀",
      color: "#8b5cf6",
      description: "Mission tracking & team productivity application designed for field teams and non-profits to record activities, assign goals, and collaborate seamlessly.",
      features: [
        "Interactive activity feed and task assignment boards",
        "Real-time status updates and team milestone progress bars",
        "Optimized offline state management using Redux and storage hooks",
        "Clean component architecture for rapid feature iterations"
      ],
      tech: ["React Native", "TypeScript", "Redux", "Styled Components", "REST APIs"],
      playStore: "https://play.google.com/store/apps/details?id=app.missio&hl=en",
      appStore: null
    },
    {
      id: "claudia",
      title: "Claudia Dean World",
      category: "Health & Fitness",
      icon: "🩰",
      color: "#f43f5e",
      description: "Premier ballet training mobile app featuring 400+ guided exercises, turns, flexibility training, jump routines, video courses, and community challenges.",
      features: [
        "Custom video streaming player with speed control & bookmarking",
        "Interactive workout plans, progress trackers & daily streak counts",
        "In-app subscriptions and user profile management",
        "Silky smooth 60fps animations and fluid screen transitions"
      ],
      tech: ["React Native", "Redux Toolkit", "Video Player", "In-App Purchases", "REST APIs"],
      playStore: null,
      appStore: "https://apps.apple.com/in/app/claudia-dean-world/id6443443761"
    },
    {
      id: "skoolfame",
      title: "Skoolfame",
      category: "Education & Social",
      icon: "🎓",
      color: "#06b6d4",
      description: "A vibrant social networking platform for schools and students featuring event discovery, self-nominations, real-time chat messaging, and media sharing.",
      features: [
        "SendBird integrated real-time 1-on-1 and group messaging",
        "Event registration and nomination voting modules",
        "Rich media upload for photos & video showcases",
        "Custom tab bar navigation and responsive UI design"
      ],
      tech: ["React Native", "SendBird Chat", "Firebase", "Redux", "React Native Navigation"],
      playStore: null,
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
      role: "React Native Developer",
      period: "06/2025 — Present",
      isCurrent: true,
      bullets: [
        "Engineering high-performance, scalable cross-platform mobile applications using React Native and Redux.",
        "Designing modular component architectures and implementing reusable UI elements to speed up feature rollouts.",
        "Integrating RESTful APIs, third-party SDKs, and managing app lifecycle states for optimal user experience."
      ]
    },
    {
      company: "Beyond Infinity Solutions",
      role: "React Native Developer",
      period: "12/2024 — 05/2025",
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
      isCurrent: false,
      bullets: [
        "Completed hands-on training in React Native, JavaScript ES6+, and mobile UI paradigms.",
        "Built foundational mobile applications applying industry best practices for clean and maintainable code.",
        "Gained practical experience in component lifecycle, state hooks, and debugging tools."
      ]
    }
  ]
};
