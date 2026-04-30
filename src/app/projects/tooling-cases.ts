import type { ToolingCase } from "./tooling-case-page";

export const principalCase: ToolingCase = {
  title: "Principal",
  subtitle:
    "A Figma intelligence layer that turns a design system from a static component library into something the team can audit, document, navigate, and eventually automate.",
  tags: ["Design Systems", "AI & LLMs", "Automation", "Figma Plugin"],
  cover: "/projects/cover_principal.svg",
  coverAlt: "Principal ecosystem overview",
  overview: [
    { label: "Role", value: "Lead Product Designer & Architect" },
    { label: "Project Type", value: "Figma Plugin Ecosystem" },
    { label: "Focus", value: "Semantic Design System Infrastructure" },
  ],
  challenge: [
    "Large design systems rarely fail because somebody forgot to draw another button state. They fail more quietly: rules become tribal knowledge, component usage drifts, documentation falls behind, and nobody can confidently answer what is actually used in production-facing files.",
    "I kept seeing the same pattern. Designers had to manually inspect files, developers had to ask whether a component was ready, and any AI-assisted workflow was basically blind because Figma nodes do not explain intent. A rectangle might be part of a primary action, a broken override, or just visual noise. The system needed a memory.",
  ],
  solution: [
    "Principal became that memory. I designed and built it as a Figma plugin ecosystem that scans design system and product files, detects inconsistencies, collects usage data, and writes a structured semantic layer back into the file.",
    "The important shift was treating design data more like product infrastructure. Components were no longer just visual assets; they had status, rules, relationships, usage patterns, documentation, and metadata that other tools could read.",
  ],
  features: [
    {
      title: "Design System Audits",
      body: [
        "Principal scans files for detached instances, outdated styles, suspicious overrides, naming problems, and drift from the source library. The goal was not to shame designers with a giant error list, but to make cleanup specific, fast, and fixable.",
      ],
    },
    {
      title: "Component Usage Analytics",
      body: [
        "The plugin shows which components are actually used, where they appear, and which patterns are quietly becoming obsolete. That makes backlog decisions less political and more grounded in real product work.",
      ],
    },
    {
      title: "AI-Assisted Documentation",
      body: [
        "I used LLMs to help read component structure and turn it into practical documentation: what the component is for, how it should be used, and what rules matter for implementation.",
      ],
    },
    {
      title: "Semantic Registry",
      body: [
        "Principal generates a machine-readable map of the design system. That registry became the backbone for companion tools like ComponentCard and ComponentsNav.",
      ],
    },
  ],
  architecture: [
    {
      title: "Figma as a Data Source",
      body: [
        "The plugin reads components, variants, styles, descriptions, and sharedPluginData, then normalizes that information into a registry that can power audits, documentation, navigation, and handoff workflows.",
      ],
    },
    {
      title: "AI With Design Context",
      body: [
        "The AI layer is useful because it receives structured context from the file. It can reason about design intent, component patterns, and system rules instead of guessing from isolated layer names.",
      ],
    },
    {
      title: "Ecosystem Architecture",
      body: [
        "Principal is the engine, while DevPal, ComponentCard, and ComponentsNav are focused interfaces on top of the same metadata. This kept each tool simple while making the whole ecosystem feel connected.",
      ],
    },
  ],
  impact: [
    "Reduced manual design system maintenance work by more than 60% by replacing repeated inspections with structured scans and targeted fixes.",
    "Gave designers, developers, and product teams a shared source of truth for component status, usage, and rules.",
    "Created a foundation for AI-driven design automation by giving agents the context they need to understand the design system instead of merely looking at shapes.",
  ],
  previous: { title: "Unified Frontend System", href: "/projects/unified-frontend-system" },
  next: { title: "ComponentCard Widget", href: "/projects/component-card-widget" },
};

export const componentCardCase: ToolingCase = {
  title: "ComponentCard Widget",
  subtitle:
    "A Figma widget that keeps component documentation, status, implementation type, and changelog exactly where the team makes decisions: on the canvas.",
  tags: ["Figma Widget", "Design Systems", "Documentation", "Handoff"],
  cover: "/projects/cover_component-card.svg",
  coverAlt: "ComponentCard widget interface",
  overview: [
    { label: "Role", value: "Senior Product Designer, DS Lead & Developer" },
    { label: "Project Type", value: "Figma Widget" },
    { label: "Focus", value: "On-canvas Documentation & Status Tracking" },
  ],
  challenge: [
    "A mature component carries a lot of context: design status, development status, implementation type, version history, notes, and all the small decisions that explain why it looks the way it does.",
    "The problem is that this context usually lives everywhere except next to the component. Jira has one part, Notion has another, Figma descriptions are easy to miss, and canvas notes become outdated almost immediately. During handoff, people still ask the same basic questions: is this ready, what changed, who changed it, and should devs use it?",
  ],
  solution: [
    "ComponentCard is a live label for a component or component set. You place it beside the component, link it once, and it becomes a compact interface for the metadata the team actually needs.",
    "I designed it to feel like part of the design system file, not like extra admin work. It gives designers and developers status, description, implementation type, and changelog without forcing them to leave Figma or open another tool.",
  ],
  features: [
    {
      title: "One-Click Component Linking",
      body: [
        "A user drops the widget on the canvas, clicks Link to component, and selects the target. The card immediately pulls the component name, version context, and Figma description.",
      ],
    },
    {
      title: "Status Badges That Do Work",
      body: [
        "Design status and implementation type are editable directly from the widget. The badges are not decoration; they are controls for keeping the component's real state up to date.",
      ],
    },
    {
      title: "Local Changelog",
      body: [
        "Anyone can add a note to the component's changelog. The widget stores the author and timestamp so the next person understands what changed without digging through Figma history.",
      ],
    },
    {
      title: "Design and Dev Visibility",
      body: [
        "The card shows development status alongside design status, making the handoff state visible to both sides instead of hidden in a separate tracking board.",
      ],
    },
  ],
  architecture: [
    {
      title: "Metadata Lives on the Component",
      body: [
        "Statuses, implementation type, and changelog entries are written to the target component node as sharedPluginData. That keeps the truth attached to the thing it describes.",
      ],
    },
    {
      title: "Part of the Principal Ecosystem",
      body: [
        "Because the metadata is stored on the node, Principal can include it in audits and ComponentsNav can use it for global filtering and file navigation.",
      ],
    },
    {
      title: "Canvas-Friendly UI",
      body: [
        "The widget supports width presets from 320px to 800px, so it can sit next to small components or large component sets without breaking the layout of the design system file.",
      ],
    },
  ],
  impact: [
    "Cut down handoff questions by making component status and implementation context visible at the exact point of work.",
    "Replaced messy notes and stale external references with a persistent, structured, on-canvas documentation pattern.",
    "Made component history more accountable: the team could see what changed, when it changed, and why.",
  ],
  previous: { title: "Principal", href: "/projects/principal" },
  next: { title: "ComponentsNav Widget", href: "/projects/components-nav-widget" },
};

export const componentsNavCase: ToolingCase = {
  title: "ComponentsNav Widget",
  subtitle:
    "A searchable table of contents for huge Figma design system files, with instant jump navigation and live component status.",
  tags: ["Figma Widget", "Design Systems", "Navigation", "Productivity"],
  cover: "/projects/cover_components-nav.svg",
  coverAlt: "ComponentsNav widget interface",
  overview: [
    { label: "Role", value: "Product Designer & Developer" },
    { label: "Project Type", value: "Figma Widget" },
    { label: "Focus", value: "Design System Wayfinding" },
  ],
  challenge: [
    "Big design system files become cities. There are pages, component sets, wrappers, private parts, deprecated pieces, experiments, and legacy leftovers. The layers panel is technically accurate, but it is a terrible map.",
    "Every search, zoom, pan, and double-click adds a small navigation tax. For one person it is annoying; for a team it becomes a constant drag on reviews, audits, onboarding, and developer handoff.",
  ],
  solution: [
    "ComponentsNav is an on-canvas index for the whole file. It reads the component registry generated by Principal and turns it into a grouped, searchable, status-aware map.",
    "The widget answers the questions people actually have in a dense file: what is here, where is it, what state is it in, and how do I get back after jumping across the canvas?",
  ],
  features: [
    {
      title: "Structured Component Index",
      body: [
        "Components are grouped by Figma page and top-level wrapper frame, so the index reflects how the file is mentally organized rather than dumping a flat list of names.",
      ],
    },
    {
      title: "Jump and Return Navigation",
      body: [
        "Clicking a tile moves the viewport directly to the component. A temporary Back to widget action prevents the classic Figma problem: arriving somewhere useful and immediately losing your place.",
      ],
    },
    {
      title: "Status Hub",
      body: [
        "Each component tile displays design and development status badges. Users can update status from the widget, so navigation and handoff tracking live in the same place.",
      ],
    },
    {
      title: "Filtering for Real Files",
      body: [
        "Search, private component toggles, and deprecated filters keep the view useful when the file contains hundreds of components and not everything should be front and center.",
      ],
    },
  ],
  architecture: [
    {
      title: "Fast Registry Loading",
      body: [
        "ComponentsNav reads Principal's component_registry from sharedPluginData instead of crawling the entire file each time. That makes the widget fast enough to use as a daily navigation surface.",
      ],
    },
    {
      title: "Bidirectional Status Sync",
      body: [
        "Status changes are written back to the component node and synced to the Principal backend through a hidden iframe, keeping the wider ecosystem aligned.",
      ],
    },
    {
      title: "Performance for Large Canvases",
      body: [
        "I used pagination and lazy loading, showing 20 tiles at a time, so the widget stays responsive even when the design system file becomes massive.",
      ],
    },
  ],
  impact: [
    "Made large Figma files feel navigable instead of chaotic, especially for designers and developers who did not build the file themselves.",
    "Reduced the time spent hunting for components during audits, reviews, and handoff conversations.",
    "Proved the value of the Principal semantic layer by turning invisible metadata into a practical daily workflow tool.",
  ],
  previous: { title: "ComponentCard Widget", href: "/projects/component-card-widget" },
  next: { title: "Smart Selection", href: "/projects/smart-selection" },
};

export const smartSelectionCase: ToolingCase = {
  title: "Smart Selection",
  subtitle:
    "A Figma plugin for selecting, saving, and combining deeply nested object sets by traits instead of manually chasing layers.",
  tags: ["Figma Plugin", "Productivity", "Internal Tooling", "Automation"],
  cover: "/projects/cover_smart-selection.svg",
  coverAlt: "Smart Selection plugin interface",
  overview: [
    { label: "Role", value: "Product Designer & Developer" },
    { label: "Project Type", value: "Figma Plugin" },
    { label: "Focus", value: "Object Selection & Layer Management" },
  ],
  challenge: [
    "Figma is great until you need to surgically select the same kind of object across a large component set. All text layers with a specific style. Every icon in a nested layout. A subset of layers that should be refactored but only inside one branch of the structure.",
    "Native selection tools are built for visible interaction, not for complex object logic. In real design system work, that means designers lose time to mechanical layer hunting instead of improving the component.",
  ],
  solution: [
    "Smart Selection gives designers a targeting system. Instead of clicking through layers one by one, they define what they are looking for and let the plugin scan the hierarchy.",
    "I built it as a selection manager, not a one-off utility: users can find objects by traits, save complex selections, recall them later, and combine sets for more advanced refactoring work.",
  ],
  features: [
    {
      title: "Trait-Based Selection",
      body: [
        "Users can target objects by layer type, style, name pattern, location, or role inside a component structure. It turns selection into a query instead of a manual hunt.",
      ],
    },
    {
      title: "Deep Hierarchy Search",
      body: [
        "The plugin scans through nested groups, component sets, and auto-layout structures, finding matching objects no matter how deeply they are buried.",
      ],
    },
    {
      title: "Save and Recall",
      body: [
        "Any complex selection can be saved and reused later, which is especially useful when refactoring component variants over multiple passes.",
      ],
    },
    {
      title: "Combine Selection Sets",
      body: [
        "Saved selections can be combined, intersected, or excluded from each other, making it possible to build precise batch operations without turning the UI into a spreadsheet.",
      ],
    },
  ],
  architecture: [
    {
      title: "Figma Node Traversal",
      body: [
        "The plugin walks through selected node trees, evaluates each node against user-defined criteria, and returns the matching layers as the active Figma selection.",
      ],
    },
    {
      title: "Reusable Set Logic",
      body: [
        "Selections are stored as reusable sets, which makes combine, intersect, and exclude operations possible while keeping the interface understandable.",
      ],
    },
    {
      title: "AI-Assisted Development",
      body: [
        "I used AI coding workflows to move quickly through boilerplate and focus on the hard parts: UX for logical operations, Figma API edge cases, and performance on large node trees.",
      ],
    },
  ],
  impact: [
    "Turned repetitive selection and batch-editing tasks from minutes of clicking into a few seconds of targeted action.",
    "Made large component refactors less risky because designers could isolate exactly the objects they intended to change.",
    "Improved workflow comfort by removing one of the most draining parts of design system maintenance: searching for tiny things inside huge nested structures.",
  ],
  previous: { title: "ComponentsNav Widget", href: "/projects/components-nav-widget" },
  next: { title: "All Projects", href: "/#projects" },
};
