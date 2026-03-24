import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import {
  FigmaIcon,
  Html5Icon,
  JavaScriptIcon,
  ProtoPieIcon,
  RiveIcon,
  AfterEffectsIcon,
  BlenderIcon,
  AiToolsIcon,
} from "@/components/skill-icons";

export const DATA = {
  name: "Vladislav Dostavalov",
  initials: "VD",
  url: "https://veroduplex.com",
  location: "Lisbon, Portugal",
  locationLink: "https://www.google.com/maps/place/lisbon",
  description:
    "Senior Product Designer — Fintech & Design Systems. 7+ years shaping products from zero to scale.",
  summary:
    "Product designer with 7+ years of experience in fintech (B2C, B2B, B2E), shaping products from zero to scale. I focus on **system-level consistency**, **workflow automation**, and bridging the gap between design and engineering. Expert in advanced Figma tokenization and AI-assisted tooling, complemented by experience in motion design and 3D.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Figma", icon: FigmaIcon },
    { name: "Design Systems" },
    { name: "Prototyping" },
    { name: "UX Research" },
    { name: "Tokenization" },
    { name: "Figma Plugins", icon: FigmaIcon },
    { name: "HTML/CSS", icon: Html5Icon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "JSON" },
    { name: "ProtoPie", icon: ProtoPieIcon },
    { name: "Rive", icon: RiveIcon },
    { name: "After Effects", icon: AfterEffectsIcon },
    { name: "Blender", icon: BlenderIcon },
    { name: "AI Tools", icon: AiToolsIcon },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "throbbingtorrent@gmail.com",
    tel: "",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vdostavalov/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/veroduplexx",
        icon: Icons.telegram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:throbbingtorrent@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Expera",
      href: "#",
      badges: [],
      location: "Tashkent, Uzbekistan",
      title: "Senior Product Designer | Core Banking & Employee Experience",
      logoUrl: "/logo_expera.png",
      start: "March 2025",
      end: "Present",
      description:
        "Leading the design of a unified frontend system for Uzbekistan's largest bank, consolidating multiple internal products into a single high-load web interface. Architecting a proprietary design system with advanced Figma features (slots), focusing on scalability. Developing custom Figma utility plugins (e.g., \"Design Linter\") using AI to automate token management. Driving cross-functional alignment by hosting workshops for devs and analysts.",
      relatedProjects: [
        { title: "Unified Frontend System", href: "/projects/unified-frontend-system", image: "/projects/cover_ufs.png" },
      ],
    },
    {
      company: "Click",
      href: "#",
      badges: [],
      location: "Tashkent, Uzbekistan",
      title: "Senior Product Designer | B2B & Platform Design Systems",
      logoUrl: "/logo_click.png",
      start: "August 2024",
      end: "February 2025",
      description:
        "Evolved a design system for a product serving B2C, B2B, and web, unifying styles across 3+ platforms. Built a custom Figma plugin that eliminated manual token updates, saving 100% of the design-to-code sync time. Collaborated tightly with PMs, QA, and engineering, proactively identifying frontend UI bugs and proposing code-level fixes.",
      relatedProjects: [
        { title: "AI Image Generation", href: "/projects/ai-image-generation", image: "/projects/cover_image-gen.png" },
      ],
    },
    {
      company: "Anorbank",
      href: "#",
      badges: [],
      location: "Tashkent, Uzbekistan",
      title: "Senior Product Designer & Design System Lead | B2C Mobile Banking",
      logoUrl: "/logo_anorbank.png",
      start: "April 2023",
      end: "July 2024",
      description:
        "Led the overhaul of a legacy design system, designing and documenting 80+ components from scratch. Redesigned core daily banking flows (Main Page, Payments, P2P) based on mixed-method UX research. Created functional prototypes and built a JSON/HTML export tool to simplify developer handoff.",
      relatedProjects: [
        { title: "Design System", href: "/projects/design-system", image: "/projects/ds-process_component-structure.png" },
        { title: "Home Page Redesign", href: "/projects/home-page", image: "/projects/cover_home.png" },
        { title: "Payment Groups", href: "/projects/payment-groups", image: "/projects/cover_payment-groups.png" },
      ],
    },
    {
      company: "UKCI Domains Limited (.ART)",
      href: "#",
      badges: [],
      location: "London, United Kingdom",
      title: "Product Designer | Web Platform",
      logoUrl: "/logo_dotart.png",
      start: "November 2017",
      end: "December 2021",
      description:
        "Built company's first design system (150+ components). Designed core web products including marketplace and user accounts. Worked in distributed teams across UK/US.",
      relatedProjects: [
        { title: "GET.ART Marketplace", href: "/projects/get-art", image: "/projects/cover_get-art.png" },
      ],
    },
  ],
  education: [
    {
      school: "Westminster University",
      href: "https://www.westminster.ac.uk/about-us/our-university/global-westminster/global-partner-network/westminster-international-university-in-tashkent",
      degree: "BSc Computer Science",
      logoUrl: "/logo_westminster.png",
      start: "2011",
      end: "2015",
    },
    {
      school: "British Council",
      href: "https://www.britishcouncil.uz/en/programmes/arts/creative-producers-2019",
      degree: "Creative Producers Programme",
      logoUrl: "/logo_british.png",
      start: "2019",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Unified Frontend System",
      unlisted: true,
      href: "/projects/unified-frontend-system",
      dates: "2025",
      active: true,
      description:
        "Turned a delayed, fragmented collection of internal banking tools into a unified B2E platform. Built a custom design system, created 3 Figma plugins, and brought the project from 3 months behind to on-time delivery.",
      technologies: [
        "Design Systems",
        "UX Research",
        "Figma Plugins",
        "B2E",
        "Tokenization",
      ],
      links: [],
      image: "/projects/cover_ufs.png",
      video: "",
    },
    {
      title: "Design System",
      href: "/projects/design-system",
      dates: "2023 – 2024",
      active: false,
      description:
        "Built a comprehensive design system from scratch with 80+ components, multi-level tokenization, and full documentation for Anorbank's mobile banking app.",
      technologies: [
        "Figma",
        "Design Tokens",
        "Atomic Design",
        "Documentation",
      ],
      links: [],
      image: "/projects/ds-process_component-structure.png",
      video: "",
    },
    {
      title: "Home Page Redesign",
      href: "/projects/home-page",
      dates: "2023 – 2024",
      active: false,
      description:
        "Redesigned the main screen of the banking app based on UX research — usability testing, deep interviews, and data analysis. Increased average session duration from 3 to 4.5 minutes.",
      technologies: [
        "UX Research",
        "Prototyping",
        "Data Analysis",
        "A/B Testing",
      ],
      links: [],
      image: "/projects/cover_home.png",
      video: "",
    },
    {
      title: "Payment Groups",
      href: "/projects/payment-groups",
      dates: "2023 – 2024",
      active: false,
      description:
        "Designed a new payment categorization and grouping feature for the mobile banking app, simplifying complex financial workflows for end users.",
      technologies: ["UX Design", "Prototyping", "User Testing", "Figma"],
      links: [],
      image: "/projects/cover_payment-groups.png",
      video: "",
    },
    {
      title: "GET.ART Domain Marketplace",
      href: "/projects/get-art",
      dates: "2017 – 2021",
      active: false,
      description:
        "Designed the .ART domain marketplace — a web platform for buying, selling, and managing creative domain names. Built the company's first design system with 150+ components.",
      technologies: [
        "UI/UX Design",
        "Design System",
        "Web Platform",
        "Figma",
      ],
      links: [],
      image: "/projects/cover_get-art.png",
      video: "",
    },
    {
      title: "AI Image Generation",
      href: "/projects/ai-image-generation",
      dates: "2024 – 2025",
      active: false,
      description:
        "Developed an AI-powered image generation system using Flux 1.0 and ComfyUI with a custom Figma plugin, eliminating costly photo shoots and ensuring brand consistency.",
      technologies: [
        "AI/ML",
        "ComfyUI",
        "Figma Plugin",
        "Flux 1.0",
      ],
      links: [],
      image: "/projects/cover_image-gen.png",
      video: "",
    },
  ],
} as const;
