/* Portfolio Data for Pallvi Rana - React Native Developer */

const PORTFOLIO_DATA = {
  profile: {
    name: "Pallvi Rana",
    title: "React Native Developer",
    tagline: "Experienced React Native Developer with 3.5+ years of expertise in building high-performance, scalable, and user-friendly mobile apps for iOS & Android.",
    bio: "Proficient in JavaScript, TypeScript, React Native, Redux, Context API, Firebase, and RESTful APIs, with a strong focus on state management, component-based architecture, SendBird real-time chat, and UI/UX optimization. Skilled in writing clean, maintainable code and improving app efficiency.",
    email: "pr22.brl@gmail.com",
    phone: "+91 8580442014",
    location: "Sunder Nagar, India",
    currentCompany: "Logixmart IT Solutions",
    yearsExperience: "3.5+ Years",
    languages: ["Hindi (Native/Bilingual)", "English (Native/Bilingual)"],
    interests: ["UI/UX Design", "Mobile App Development", "Performance Optimization"]
  },

  projects: [
    {
      id: "rooflink",
      title: "RoofLink",
      category: "Construction & Business",
      iconImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/ca/84/02/ca8402c5-5a1e-b83b-9a91-44755e10ce09/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
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
      iconImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/74/64/26/7464264d-7ec4-9477-fc4e-635a79eea935/AppIcon-1x_U007epad-0-1-85-220-0.png/512x512bb.jpg",
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
      iconImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/0a/6c/3e/0a6c3e62-c2b4-7832-7360-192a2a095c99/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
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
      iconImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/05/92/7d/05927d3b-e01e-c2f8-bf78-8319ad080a2b/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
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
      iconImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/8b/65/59/8b6559d3-6e3e-3f5f-9e7b-c3e031a54b39/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
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
      iconImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9b/14/47/9b1447e5-137a-a562-d704-6dff3d5dd0fa/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg",
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
      iconImg: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/8f/38/d1/8f38d10f-b534-0480-abc4-c2b0e22c1f12/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
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
      duration: "1 Year 4 Months",
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
