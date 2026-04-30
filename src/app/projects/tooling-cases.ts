import type { ToolingCase } from "./tooling-case-page";

export const principalCase: ToolingCase = {
  title: "Principal",
  subtitle:
    "A design system intelligence engine for auditing, documenting, and scaling complex Figma libraries.",
  tags: ["Design Systems", "AI & LLMs", "Automation", "Figma Plugin"],
  cover: "/projects/cover_principal.svg",
  coverAlt: "Principal ecosystem overview",
  overview: [
    { label: "Role", value: "Lead Product Designer & Architect" },
    { label: "Project Type", value: "Figma Plugin Ecosystem" },
    { label: "Focus", value: "Semantic Design System Infrastructure" },
  ],
  challenge: [
    "In large-scale, long-term design projects, the hard part is not only creating a component library. The harder job is preserving consistency, design intent, and team knowledge across thousands of files and many contributors.",
    "Critical rules usually live in people's heads, scattered documentation, or one-off comments. That makes the system fragile: audits are manual, onboarding is slow, and AI-assisted workflows have no reliable map of what the design system actually means.",
  ],
  solution: [
    "Principal turns the design system into a semantic knowledge layer. It analyzes Figma files, audits usage, documents components, and creates structured metadata that can be used by designers, developers, widgets, and AI agents.",
    "Instead of treating components as static UI assets, Principal treats them as a living system with rules, statuses, relationships, and implementation context.",
  ],
  features: [
    {
      title: "Automated Audits & Auto-Fix",
      body: [
        "The plugin scans product files for inconsistencies, detached instances, outdated styles, and component usage problems, then provides targeted fixes to bring layouts back into alignment.",
      ],
    },
    {
      title: "Usage Analytics",
      body: [
        "Principal gives the team visibility into how components are used across the product ecosystem, making maintenance decisions grounded in real usage instead of guesswork.",
      ],
    },
    {
      title: "AI-Driven Documentation",
      body: [
        "LLM-assisted analysis turns component structure into practical documentation, implementation notes, and design rules that are easier for the team to maintain.",
      ],
    },
    {
      title: "Semantic Layer Generation",
      body: [
        "The plugin creates a metadata map of the design system so companion tools and future AI agents can understand not just what exists, but what each part is for.",
      ],
    },
  ],
  architecture: [
    {
      title: "Ecosystem Data Model",
      body: [
        "Principal acts as the central scanner and semantic engine. Its output powers companion tools such as DevPal, ComponentCard, and ComponentsNav.",
      ],
    },
    {
      title: "AI Integration",
      body: [
        "The system uses AI models to interpret design intent, making it possible to reason about components as meaningful product patterns rather than raw Figma nodes.",
      ],
    },
    {
      title: "AI-Assisted Development Workflow",
      body: [
        "I used AI-assisted development to move quickly from concept to a multi-tool ecosystem, focusing my time on the architecture, product logic, and Figma API behavior.",
      ],
    },
  ],
  impact: [
    "Reduced the manual overhead of design system maintenance by over 60%.",
    "Made complex system rules easier to discover for new designers through on-canvas and plugin-based tools.",
    "Created the foundation for future AI-driven design automation by giving the system a machine-readable semantic layer.",
  ],
  previous: { title: "Unified Frontend System", href: "/projects/unified-frontend-system" },
  next: { title: "ComponentCard Widget", href: "/projects/component-card-widget" },
};

export const componentCardCase: ToolingCase = {
  title: "ComponentCard Widget",
  subtitle:
    "A live documentation and status card that keeps component metadata directly on the Figma canvas.",
  tags: ["Figma Widget", "Design Systems", "Documentation", "Handoff"],
  cover: "/projects/cover_component-card.svg",
  coverAlt: "ComponentCard widget interface",
  overview: [
    { label: "Role", value: "Senior Product Designer, DS Lead & Developer" },
    { label: "Project Type", value: "Figma Widget" },
    { label: "Focus", value: "On-canvas Documentation & Status Tracking" },
  ],
  challenge: [
    "In mature design systems, a component carries more than visuals: status, implementation type, version history, developer notes, and context around why it changed.",
    "That context is often split between Jira, Notion, documentation sites, hidden layers, sticky notes, and Figma version history. The result is context switching, stale notes, and weak accountability.",
  ],
  solution: [
    "ComponentCard is an interactive Figma widget that attaches a clean, live metadata card to any component or component set.",
    "With one click, the widget links to a target component and displays its name, description, design status, development status, implementation type, and localized changelog exactly where the team is working.",
  ],
  features: [
    {
      title: "One-Click Context Linking",
      body: [
        "A designer places the widget, selects Link to component, and clicks the target component. The card instantly populates with the component's metadata.",
      ],
    },
    {
      title: "Interactive Status Management",
      body: [
        "Badges are not static labels. Users can update design status and implementation type directly from the widget without opening a separate plugin.",
      ],
    },
    {
      title: "Inline Collaborative Changelog",
      body: [
        "Team members can add changelog notes from the widget. Each entry stores the author and timestamp, making local component history visible and accountable.",
      ],
    },
    {
      title: "Development Status Visibility",
      body: [
        "The widget displays engineering progress such as Not Started, In Progress, Partial, and Done, helping design and development stay aligned during handoff.",
      ],
    },
  ],
  architecture: [
    {
      title: "Single Source of Truth",
      body: [
        "Statuses, implementation type, and changelog entries are stored on the target component node as sharedPluginData, keeping metadata attached to the design object itself.",
      ],
    },
    {
      title: "Ecosystem Sync",
      body: [
        "Because the data lives on the node, Principal can read it during file-wide scans and ComponentsNav can use it for filtering and status overviews.",
      ],
    },
    {
      title: "Responsive Widget Layout",
      body: [
        "The widget supports customizable widths from 320px to 800px, so it can sit beside components of different sizes without breaking the file layout.",
      ],
    },
  ],
  impact: [
    "Removed routine context switching by keeping critical component context visible on the canvas.",
    "Improved handoff clarity with shared design and development status signals.",
    "Created a localized changelog that explains who changed a component, when, and why.",
  ],
  previous: { title: "Principal", href: "/projects/principal" },
  next: { title: "ComponentsNav Widget", href: "/projects/components-nav-widget" },
};

export const componentsNavCase: ToolingCase = {
  title: "ComponentsNav Widget",
  subtitle:
    "An interactive map and status hub for navigating large-scale Figma design system files.",
  tags: ["Figma Widget", "Design Systems", "Navigation", "Productivity"],
  cover: "/projects/cover_components-nav.svg",
  coverAlt: "ComponentsNav widget interface",
  overview: [
    { label: "Role", value: "Product Designer & Developer" },
    { label: "Project Type", value: "Figma Widget" },
    { label: "Focus", value: "Design System Wayfinding" },
  ],
  challenge: [
    "As design system files grow, they become dense maps of pages, frames, components, variants, and wrappers. Finding a specific component can mean endless zooming, panning, and searching through the layers panel.",
    "Status context is often disconnected from the canvas, while file-level overview is almost nonexistent. Teams need a practical table of contents that lives where the work happens.",
  ],
  solution: [
    "ComponentsNav transforms a complex Figma design system file into a searchable, filterable component index directly on the canvas.",
    "It reads the semantic registry generated by Principal, groups components by page and wrapper frame, and lets users jump to any component while keeping a quick path back to the widget.",
  ],
  features: [
    {
      title: "Intelligent Indexing",
      body: [
        "The widget lists components and groups them by Figma Page and top-level wrapper frame, creating an immediate mental model of the file structure.",
      ],
    },
    {
      title: "Jump Navigation",
      body: [
        "Clicking a component tile teleports the viewport to the exact component. A temporary Back to widget action helps users return without losing orientation.",
      ],
    },
    {
      title: "DevPal Status Management",
      body: [
        "Each tile displays design and development status badges. Users can cycle statuses from the widget, keeping handoff state visible and current.",
      ],
    },
    {
      title: "Smart Search & Filtering",
      body: [
        "Client-side search and filters for private or deprecated components keep the index fast, focused, and useful in very large files.",
      ],
    },
  ],
  architecture: [
    {
      title: "Principal Registry Consumption",
      body: [
        "The widget reads the component_registry generated by Principal from sharedPluginData, so it can load quickly without rescanning the entire file.",
      ],
    },
    {
      title: "Bidirectional Status Sync",
      body: [
        "When a user updates a status badge, the widget writes data to the component node and syncs the change to the Principal backend through a hidden iframe.",
      ],
    },
    {
      title: "Large File Performance",
      body: [
        "Pagination and lazy loading keep the widget responsive, loading 20 component tiles at a time and avoiding heavy canvas lag.",
      ],
    },
  ],
  impact: [
    "Turned chaotic component canvases into structured, searchable maps.",
    "Reduced handoff ambiguity by showing design and development status directly in the file index.",
    "Demonstrated how Principal's semantic layer can power lightweight, high-value tools on top of the same source of truth.",
  ],
  previous: { title: "ComponentCard Widget", href: "/projects/component-card-widget" },
  next: { title: "Smart Selection", href: "/projects/smart-selection" },
};

export const smartSelectionCase: ToolingCase = {
  title: "Smart Selection",
  subtitle:
    "A Figma plugin for selecting, saving, and combining deeply nested object sets by their traits.",
  tags: ["Figma Plugin", "Productivity", "Internal Tooling", "Automation"],
  cover: "/projects/cover_smart-selection.svg",
  coverAlt: "Smart Selection plugin interface",
  overview: [
    { label: "Role", value: "Product Designer & Developer" },
    { label: "Project Type", value: "Figma Plugin" },
    { label: "Focus", value: "Object Selection & Layer Management" },
  ],
  challenge: [
    "Figma's native selection tools are strong for everyday work, but they become limiting inside large component sets, deeply nested layouts, and messy legacy files.",
    "Selecting every text layer with a specific style, every icon inside a frame, or a custom subset of nested objects can turn into repetitive manual labor that interrupts design flow.",
  ],
  solution: [
    "Smart Selection gives designers a way to target object arrays by traits instead of manual clicking.",
    "It works as a selection manager for Figma: users can search deeply through hierarchy, isolate matching objects, save complex selections, and combine them into more advanced refactoring scenarios.",
  ],
  features: [
    {
      title: "Trait-Based Selection",
      body: [
        "Users can select objects by criteria such as layer type, style, naming pattern, location, or role inside a component structure.",
      ],
    },
    {
      title: "Deep Selection",
      body: [
        "The plugin scans nested groups and auto-layout structures, extracting matching objects without forcing users through repeated double-clicking.",
      ],
    },
    {
      title: "Save & Recall",
      body: [
        "Complex selections can be saved and reopened later, turning temporary manual work into reusable tooling.",
      ],
    },
    {
      title: "Combine Selections",
      body: [
        "Saved selections can be combined, intersected, or excluded to support advanced batch operations during component refactoring.",
      ],
    },
  ],
  architecture: [
    {
      title: "Figma API Scanning",
      body: [
        "The plugin traverses selected node trees, filters nodes by user-defined criteria, and returns matching layers as an actionable Figma selection.",
      ],
    },
    {
      title: "Selection Logic Model",
      body: [
        "Saved selections are treated as reusable sets, which makes logical operations like combining and excluding possible without overwhelming the UI.",
      ],
    },
    {
      title: "AI-Assisted Build Process",
      body: [
        "I used AI-assisted coding to speed up boilerplate and focus on the interaction design, architecture, and Figma API edge cases.",
      ],
    },
  ],
  impact: [
    "Reduced repetitive layer-hunting and batch editing tasks from minutes to seconds.",
    "Made refactoring legacy files and large component sets more controlled and less mentally draining.",
    "Helped preserve design focus by moving mechanical selection work into a purpose-built tool.",
  ],
  previous: { title: "ComponentsNav Widget", href: "/projects/components-nav-widget" },
  next: { title: "All Projects", href: "/#projects" },
};
