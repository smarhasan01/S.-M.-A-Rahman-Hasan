/**
 * Portfolio Data for S. M. A. Rahman Hasan
 * All personal details, images, skills, and projects are centralized here for easy editing.
 */

export const personalInfo = {
  name: "S. M. A. Rahman Hasan",
  firstName: "S M A Rahman",
  lastName: "Hasan",
  brandName: "SMRH",
  role: "Graphic Designer & UI/UX Designer",
  bioHeadline: "Hi, It's",
  shortIntro: "I'm a passionate Graphic & UI/UX Designer driven to create visually compelling and user-friendly designs. My goal is to craft meaningful digital experiences while growing through new challenges and creative opportunities.",
  careerGoal: "I'm currently looking to join a cross-functional team that values improving people's lives through accessible, human-centered design.",
  profileImage: "/profile_hex.png",
  logoImage: "/smrh_logo.png",
  orbImage: "/orb_extracted.png",
  email: "rahmanhasan.designer@gmail.com", // Customize with your preferred email
  location: "Bangladesh • Available Worldwide",
  availability: "Available for Freelance & Full-time Roles",
  resumeUrl: "#contact", // Replace with your resume link or PDF path

  socialLinks: [
    { name: "Behance", url: "https://www.behance.net", icon: "Palette" },
    { name: "Dribbble", url: "https://dribbble.com", icon: "Dribbble" },
    { name: "LinkedIn", url: "https://www.linkedin.com", icon: "Linkedin" },
    { name: "Instagram", url: "https://www.instagram.com", icon: "Instagram" },
    { name: "Twitter/X", url: "https://twitter.com", icon: "Twitter" },
  ],

  stats: [
    { value: "4+", label: "Years of Design Passion" },
    { value: "45+", label: "Projects Delivered" },
    { value: "25+", label: "Brand Identities Created" },
    { value: "100%", label: "Client Dedication" },
  ]
};

export const services = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    subtitle: "Visual Communication & Print",
    badge: "01",
    icon: "Palette",
    color: "#f59e0b",
    description: "We provide professional Graphic Design services with expert precision—from striking social media graphics and marketing collaterals to banners, posters, and print packaging that capture audience attention.",
    features: [
      "Social Media & Ad Creatives",
      "Marketing Collaterals & Banners",
      "Print Ready Packaging & Posters",
      "Vector Illustrations & Graphics"
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Digital Product Experiences",
    badge: "02",
    icon: "Layout",
    color: "#ef4444",
    description: "High-quality UI/UX design focused on user experience. Building interactive wireframes, intuitive website layouts, and sleek mobile apps engineered for seamless digital interactions.",
    features: [
      "User Journey & Information Architecture",
      "Responsive Web & Mobile App Design",
      "Interactive Wireframing & Prototyping",
      "Design Systems & Component Libraries"
    ]
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    subtitle: "Memorable Visual Identity",
    badge: "03",
    icon: "Sparkles",
    color: "#8b5cf6",
    description: "Distinctive brand identities that establish trust and distinction. Creating cohesive logo marks, typographic hierarchies, color palettes, and brand guidelines that set your business apart.",
    features: [
      "Custom Logo Design & Marks",
      "Typography & Color Palettes",
      "Brand Guidelines & Style Guides",
      "Stationery & Brand Collateral"
    ]
  }
];

export const designTools = [
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    abbr: "Ps",
    tagline: "Photo Editing & Visual Art",
    color: "#31A8FF",
    bgColor: "rgba(49, 168, 255, 0.12)",
    borderColor: "rgba(49, 168, 255, 0.35)",
    proficiency: "Advanced",
    description: "Expert image manipulation, photo retouching, raster compositions, lighting effects, and digital mockups."
  },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    abbr: "Ai",
    tagline: "Vector Graphics & Logos",
    color: "#FF9A00",
    bgColor: "rgba(255, 154, 0, 0.12)",
    borderColor: "rgba(255, 154, 0, 0.35)",
    proficiency: "Advanced",
    description: "Vector precision for brand marks, typography, iconography, bespoke logo marks, and scalable marketing assets."
  },
  {
    id: "figma",
    name: "Figma",
    abbr: "Fg",
    tagline: "UI/UX & Interactive Design",
    color: "#A259FF",
    bgColor: "rgba(162, 89, 255, 0.12)",
    borderColor: "rgba(162, 89, 255, 0.35)",
    proficiency: "Advanced",
    description: "Modern UI/UX prototyping, auto-layout design systems, interactive states, responsive grids, and design handoff."
  },
  {
    id: "adobexd",
    name: "Adobe XD",
    abbr: "Xd",
    tagline: "Wireframing & Prototypes",
    color: "#FF61F6",
    bgColor: "rgba(255, 97, 246, 0.12)",
    borderColor: "rgba(255, 97, 246, 0.35)",
    proficiency: "Proficient",
    description: "Rapid wireframing, interactive micro-interactions, click-through user flows, and interface presentation."
  }
];

export const skillsList = [
  {
    category: "Design Core",
    items: [
      { name: "Brand Identity & Logo Design", level: 95, tag: "Expert" },
      { name: "UI/UX & Interaction Design", level: 90, tag: "Advanced" },
      { name: "Typography & Layout Hierarchy", level: 92, tag: "Expert" },
      { name: "Social Media & Visual Creatives", level: 94, tag: "Expert" },
    ]
  },
  {
    category: "Product & Systems",
    items: [
      { name: "Wireframing & Flow Diagrams", level: 88, tag: "Advanced" },
      { name: "Design Systems & Component Sets", level: 85, tag: "Advanced" },
      { name: "High-Fidelity Prototyping", level: 86, tag: "Advanced" },
      { name: "Print & Packaging Preparation", level: 89, tag: "Advanced" },
    ]
  }
];

export const portfolioCategories = [
  "All",
  "Logo Design",
  "Branding",
  "Social Media Design",
  "Mockups",
  "UI/UX Design"
];

export const portfolioProjects = [
  {
    id: 1,
    title: "NovaSphere Identity & Modern Monogram",
    category: "Logo Design",
    client: "NovaSphere Tech",
    year: "2024",
    summary: "A sleek geometric tech monogram blending minimalism, modern curves, and dynamic gradient accents.",
    accentColor: "#6366f1",
    tags: ["Logo Design", "Adobe Illustrator", "Monogram", "Vector"],
    description: "Crafted a distinctive, modern tech brandmark for NovaSphere. Designed with mathematical precision using 45-degree angle guides and balanced letterforms to reflect speed, forward momentum, and technological authority.",
    deliverables: ["Primary & Secondary Logo Marks", "Monogram Variations", "Brand Vector Guidelines", "Dark & Light Mode Sets"],
    visualType: "logo-monogram"
  },
  {
    id: 2,
    title: "Aura Botanicals Cohesive Brand System",
    category: "Branding",
    client: "Aura Organics",
    year: "2024",
    summary: "Complete visual identity encompassing packaging, palette guidelines, typography, and stationery.",
    accentColor: "#10b981",
    tags: ["Branding", "Brand Identity", "Packaging", "Styleguide"],
    description: "An elegant, holistic brand identity for an organic skincare product line. Developed an earthy yet premium color system, bespoke serif typography pairing, and luxury cosmetic packaging concepts.",
    deliverables: ["Brand Stylebook (PDF)", "Custom Typography System", "Product Box & Bottle Packaging", "Stationery Kit"],
    visualType: "branding-system"
  },
  {
    id: 3,
    title: "Pulse Fitness High-Conversion Social Ad Suite",
    category: "Social Media Design",
    client: "Pulse Athletic",
    year: "2024",
    summary: "Dynamic Instagram carousels, campaign banners, and promotional story templates with bold neon aesthetics.",
    accentColor: "#f43f5e",
    tags: ["Social Media Design", "Adobe Photoshop", "Banners", "Ad Creatives"],
    description: "Designed a 15-piece high-impact social media campaign for a fitness brand launch. Emphasized dramatic high-contrast lighting, bold typography, and visual pacing that drove a 38% increase in engagement.",
    deliverables: ["Carousel Templates", "Instagram Story Ad Variations", "Facebook Banner Suite", "Editable Canva & PSD Kits"],
    visualType: "social-campaign"
  },
  {
    id: 4,
    title: "Lumio Smart Home Mobile App UI/UX",
    category: "UI/UX Design",
    client: "Lumio IoT",
    year: "2024",
    summary: "Intuitive smart living controller interface with dark glassmorphism, responsive sliders, and device widgets.",
    accentColor: "#3b82f6",
    tags: ["UI/UX Design", "Figma", "App Design", "Design System"],
    description: "Designed end-to-end user interfaces for an IoT smart home application. Features an intuitive dark mode control dashboard, automated schedule builders, and seamless device status toggles tested for one-thumb mobile accessibility.",
    deliverables: ["32+ Mobile Screen UI", "Interactive Figma Prototype", "Design System Components", "User Flow Diagrams"],
    visualType: "app-ui"
  },
  {
    id: 5,
    title: "Apex Energy Drink 3D Matte Mockup Suite",
    category: "Mockups",
    client: "Apex Beverages",
    year: "2023",
    summary: "Photorealistic matte metallic can and packaging mockups with condensation and dramatic studio lighting.",
    accentColor: "#eab308",
    tags: ["Mockups", "Photoshop", "3D Rendering", "Packaging"],
    description: "Created high-resolution photorealistic packaging mockups showcasing beverage cans in studio lighting environments. Optimized smart object layers for lightning-fast client label replacement and presentation.",
    deliverables: ["4 High-Res PSD Mockups", "Realistic Lighting & Reflection Layers", "Angle Variations (Straight, Duo, Floating)", "E-commerce Ready Visuals"],
    visualType: "can-mockup"
  },
  {
    id: 6,
    title: "Nexus SaaS Analytics Cloud Dashboard",
    category: "UI/UX Design",
    client: "Nexus Cloud Systems",
    year: "2023",
    summary: "Clean enterprise web dashboard featuring data visualization widgets, dark mode aesthetics, and customizable tiles.",
    accentColor: "#8b5cf6",
    tags: ["UI/UX Design", "Figma", "Web Dashboard", "SaaS"],
    description: "Created a modern data-dense cloud telemetry dashboard. Prioritized cognitive load reduction through clean typography, visual hierarchy, consistent color coding for metric changes, and collapsible navigation panels.",
    deliverables: ["Web Application Layouts", "Data Visualization Chart Kits", "Design Tokens & UI Specs", "Interactive Prototypes"],
    visualType: "web-dashboard"
  },
  {
    id: 7,
    title: "Vortex Gaming Studio Dynamic Brand Mark",
    category: "Logo Design",
    client: "Vortex Interactive",
    year: "2023",
    summary: "Futuristic angular emblem designed for esports streaming, digital apparel, and game publishing.",
    accentColor: "#ec4899",
    tags: ["Logo Design", "Esports", "Illustrator", "Badge"],
    description: "Designed a bold, aggressive yet versatile emblem for an independent game development studio. Engineered to maintain impact across 16px favicon sizes up to massive event banners and team jerseys.",
    deliverables: ["Vector Mascot & Emblem", "Typography Wordmark", "Twitch & YouTube Stream Kit", "Apparel Print Vectors"],
    visualType: "gaming-logo"
  },
  {
    id: 8,
    title: "FinTech Prime Card & Luxury App Mockup",
    category: "Mockups",
    client: "Prime Capital",
    year: "2023",
    summary: "Metallic black luxury credit card and floating smartphone mockup scene with holographic foil details.",
    accentColor: "#06b6d4",
    tags: ["Mockups", "FinTech", "Photoshop", "Stationery"],
    description: "High-end product mockup showcasing a matte obsidian debit card with holographic accents alongside a premium iOS interface. Designed for marketing landing pages and pitch decks.",
    deliverables: ["Card Surface Texture Maps", "Perspective Presentation Scene", "Customizable Foil Layers", "Retina Asset Exports"],
    visualType: "card-mockup"
  }
];

export const workExperience = [
  {
    id: "exp-1",
    period: "2023 - Present",
    role: "Lead UI/UX & Brand Designer",
    company: "Freelance & Creative Collaborations",
    location: "Remote",
    badge: "Current Focus",
    description: "Crafting end-to-end visual identities, comprehensive design systems, high-fidelity user interfaces, and engaging digital marketing assets for international clients and growing startups.",
    achievements: [
      "Designed and launched brand identities for 15+ emerging businesses",
      "Created modern UI/UX prototypes that boosted client onboarding conversion rates",
      "Built unified vector systems, icon sets, and social media creative frameworks"
    ]
  },
  {
    id: "exp-2",
    period: "2021 - 2023",
    role: "Graphic & UI Designer",
    company: "Creative Digital Studio",
    location: "Chittagong, Bangladesh",
    badge: "Agency",
    description: "Collaborated with cross-functional teams of developers and marketers to conceptualize, design, and deliver visual communication campaigns, brand guidelines, and responsive web mockups.",
    achievements: [
      "Produced over 200+ commercial graphics, social media ads, and brand assets",
      "Standardized UI component templates across web design deliverables",
      "Conducted usability testing and design audits to optimize user flows"
    ]
  },
  {
    id: "exp-3",
    period: "2019 - 2021",
    role: "Junior Visual Designer & Design Journey",
    company: "Design Foundations & Independent Practice",
    location: "Chittagong, Bangladesh",
    badge: "Milestone",
    description: "Dedicated intensive practice to mastering Adobe Photoshop, Adobe Illustrator, and Figma. Executed comprehensive self-initiated redesigns, branding challenges, and client visual briefs.",
    achievements: [
      "Completed rigorous portfolio projects spanning logos, layout design, and mobile UI",
      "Deepened proficiency in typography, color theory, and vector precision",
      "Established core design workflow and multi-platform asset preparation standards"
    ]
  }
];
