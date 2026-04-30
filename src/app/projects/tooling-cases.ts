import type { ToolingCase } from "./tooling-case-page";

export const principalCase: ToolingCase = {
  title: "Principal",
  subtitle:
    "A Figma intelligence layer that turns a design system from a static library into an auditable, documented, machine-readable product system.",
  tags: ["Design Systems", "AI & LLMs", "Automation", "Figma Plugin"],
  cover: "/projects/cover_principal.svg",
  coverAlt: "Principal ecosystem overview",
  overview: [
    { label: "Role", value: "Lead Product Designer & Architect" },
    { label: "Project Type", value: "Figma Plugin Ecosystem" },
    { label: "Focus", value: "Semantic Design System Infrastructure" },
  ],
  sections: [
    {
      eyebrow: "The shift",
      title: "A design system needed memory, not another checklist",
      body: [
        "In a large product environment, design system quality is mostly lost in small, repeated failures: undocumented overrides, stale components, inconsistent variants, and rules that live only in people's heads.",
        "Principal started from that pain. I wanted the system to understand itself: what components exist, where they are used, whether they are healthy, and what rules both humans and AI agents should know before touching them.",
      ],
    },
    {
      eyebrow: "What I built",
      title: "The core plugin scans files and turns Figma structure into semantic data",
      body: [
        "Principal performs deep analysis of design system and product files, then writes structured metadata back into the file. The output becomes a semantic registry that other tools can read instead of re-parsing the canvas every time.",
        "This made the project bigger than a plugin UI. It became infrastructure for audits, documentation, navigation, handoff, and future AI-assisted design tasks.",
      ],
    },
    {
      eyebrow: "Product value",
      title: "The useful part is not AI itself, it is AI with design-system context",
      cards: [
        {
          title: "Automated Audits & Auto-Fix",
          body: [
            "Scans for detached instances, outdated styles, suspicious overrides, and drift from the source library, then points teams toward specific fixes.",
          ],
        },
        {
          title: "Usage Analytics",
          body: [
            "Shows where components are used and which patterns are fading out, so design system decisions are based on actual product files rather than assumptions.",
          ],
        },
        {
          title: "AI-Driven Documentation",
          body: [
            "Uses LLMs to turn component structure into practical documentation, usage guidance, and implementation rules.",
          ],
        },
        {
          title: "Semantic Layer Generation",
          body: [
            "Creates a metadata map of the design system so companion tools and AI agents can understand intent, not just layer names.",
          ],
        },
      ],
    },
    {
      eyebrow: "Ecosystem decision",
      title: "One engine, several focused tools",
      body: [
        "I deliberately avoided building one oversized dashboard. Principal acts as the engine, while DevPal, ComponentCard, and ComponentsNav expose the same data in the moments where people need it.",
        "That architecture kept each interface small: developers see handoff status in Dev Mode, designers see documentation on the canvas, and teams get a navigable index inside dense files.",
      ],
    },
    {
      eyebrow: "Outcome",
      title: "From static components to a living system",
      bullets: [
        "Reduced manual design system maintenance by more than 60% by replacing repeated inspections with structured scans and targeted fixes.",
        "Improved onboarding by making component rules, status, and usage easier to discover through on-canvas and plugin-based tools.",
        "Prepared the system for AI-driven automation, including future workflows like localization and intent-aware component operations.",
      ],
    },
  ],
  previous: { title: "Unified Frontend System", href: "/projects/unified-frontend-system" },
  next: { title: "DevPal", href: "/projects/devpal" },
};

export const devPalCase: ToolingCase = {
  title: "DevPal",
  subtitle:
    "A Figma Dev Mode plugin that makes component readiness, implementation progress, code paths, and changelog history visible during developer handoff.",
  tags: ["Figma Dev Mode", "Developer Handoff", "Design Systems", "Workflow Tooling"],
  cover: "/projects/cover_devpal.svg",
  coverAlt: "DevPal Dev Mode handoff interface",
  overview: [
    { label: "Role", value: "Product Designer, Plugin Architect & Developer" },
    { label: "Project Type", value: "Figma Dev Mode Plugin" },
    { label: "Focus", value: "Component Governance & Design-to-Dev Workflow" },
  ],
  sections: [
    {
      eyebrow: "Handoff gap",
      title: "Developers could inspect the component, but still not know if it was safe to build",
      body: [
        "Dev Mode is great for specs, tokens, and anatomy. The missing layer is operational: is this component ready, has design changed, where is the implementation, and who last touched the status?",
        "Before DevPal, those answers were scattered across Figma comments, Jira, Storybook, Slack, GitHub, and memory. The component could look finished while its context was already stale.",
      ],
    },
    {
      eyebrow: "Core experience",
      title: "A compact status panel inside the exact place developers already work",
      body: [
        "When a developer selects a component, DevPal shows component type, design status, dev status, version, code path, and changelog. The UI is intentionally quiet and Dev Mode-native: fast to scan, fast to update, and not trying to become another project management tool.",
      ],
      cards: [
        {
          title: "Separate Design and Dev Status",
          body: [
            "A component can be ready from design and still not implemented, or fully implemented and later made stale by design changes. DevPal keeps those tracks independent.",
          ],
        },
        {
          title: "Stale Implementation Warning",
          body: [
            "If design changes after a component was partially or fully implemented, DevPal compares timestamps and warns that rework may be needed.",
          ],
        },
        {
          title: "Component-Level Changelog",
          body: [
            "Each meaningful change stores text, author, user ID, timestamp, and clickable links, keeping history attached to the component.",
          ],
        },
        {
          title: "Global Changelog",
          body: [
            "When no component is selected, DevPal shows recent system changes with search, author, component type, date filters, and pagination.",
          ],
        },
      ],
    },
    {
      eyebrow: "Product decisions",
      title: "Trust mattered more than adding more fields",
      body: [
        "The hardest product question was not what data to show, but how to make developers trust it. I added editor permissions, read-only states, sync indicators, and timestamped metadata so people could understand whether they were looking at local, synced, or offline data.",
        "The first user becomes an editor, later users request access, and non-editors can still inspect status without being able to rewrite shared handoff data.",
      ],
    },
    {
      eyebrow: "Architecture",
      title: "Local-first data, backend sync, and canonical component records",
      body: [
        "DevPal writes to Figma sharedPluginData first, then syncs with the Principal backend API when authentication and network access are available. That keeps the plugin useful even when remote sync fails.",
        "Variants, component sets, and instances resolve to a canonical component record, so a developer inspecting one variant does not accidentally create a separate status history from the rest of the component set.",
      ],
      bullets: [
        "Timestamp-based merge logic resolves local and remote conflicts for design status, dev status, and changelog entries.",
        "A semantic bridge namespace lets other Principal tools understand lifecycle state without depending on DevPal's internal schema.",
        "Dev Mode constraints such as dynamic document access, async instance resolution, and missing file keys shaped the final sync strategy.",
      ],
      contained: true,
    },
    {
      eyebrow: "Outcome",
      title: "Handoff became a shared workflow instead of a guessing game",
      bullets: [
        "Moved component readiness into the developer's actual inspection workflow.",
        "Reduced ambiguity between design intent and implementation progress by showing both status tracks together.",
        "Gave the Principal ecosystem a developer-facing companion where semantic design system intelligence becomes operational.",
      ],
    },
  ],
  previous: { title: "Principal", href: "/projects/principal" },
  next: { title: "ComponentCard Widget", href: "/projects/component-card-widget" },
};

export const componentCardCase: ToolingCase = {
  title: "ComponentCard Widget",
  subtitle:
    "A Figma widget that keeps component documentation, status, implementation type, and changelog exactly where design decisions happen: on the canvas.",
  tags: ["Figma Widget", "Design Systems", "Documentation", "Handoff"],
  cover: "/projects/cover_component-card.svg",
  coverAlt: "ComponentCard widget interface",
  overview: [
    { label: "Role", value: "Senior Product Designer, DS Lead & Developer" },
    { label: "Project Type", value: "Figma Widget" },
    { label: "Focus", value: "On-canvas Documentation & Status Tracking" },
  ],
  sections: [
    {
      eyebrow: "Canvas problem",
      title: "The component was clean, but its context was scattered everywhere",
      body: [
        "A mature component carries status, version history, implementation type, developer notes, and the small decisions that explain why it exists. In practice, that context often lives in Jira, Notion, hidden layers, comments, or someone's memory.",
        "I wanted metadata to stay attached to the design itself without making the file messy. No sticky-note graveyards, no outdated side comments, no forcing developers to leave Figma just to understand whether a component is ready.",
      ],
    },
    {
      eyebrow: "Widget idea",
      title: "A live label that turns component metadata into a small interface",
      body: [
        "ComponentCard sits beside a component or component set. With one click, it links to the target and pulls the component name, version context, and Figma description into a standardized card.",
        "It is not just a documentation block. The badges are editable controls, the changelog is collaborative, and the data feeds the wider Principal ecosystem.",
      ],
    },
    {
      eyebrow: "Interaction details",
      title: "The card handles the everyday questions teams actually ask",
      cards: [
        {
          title: "Design Status Flow",
          body: [
            "Designers can cycle statuses such as Draft, In Review, Ready for Dev, Design Changed, and Deprecated directly on the widget.",
          ],
        },
        {
          title: "Implementation Type",
          body: [
            "The card can mark whether a component maps to PrimeVue, EFS Custom, Untyped, or another implementation category.",
          ],
        },
        {
          title: "Collaborative Changelog",
          body: [
            "Team members add notes directly in the widget. Entries include author and timestamp, so history stays visible without digging through Figma versions.",
          ],
        },
        {
          title: "Dev Status Visibility",
          body: [
            "The widget also displays development status such as Not Started, In Progress, Partial, and Done, aligning design and engineering signals.",
          ],
        },
      ],
    },
    {
      eyebrow: "Data model",
      title: "The component node became the source of truth",
      body: [
        "All metadata is written to the target component node as sharedPluginData. This makes the data persistent, portable inside the Figma file, and readable by Principal, DevPal, and ComponentsNav.",
        "The widget also supports width presets from 320px to 800px through the property menu, so it can sit neatly beside small components or large component sets.",
      ],
      contained: true,
    },
    {
      eyebrow: "Outcome",
      title: "Documentation moved from a separate destination to the place where work happens",
      bullets: [
        "Reduced context switching by making component state, notes, and handoff context visible at a glance.",
        "Created localized accountability with changelog entries tied to author and timestamp.",
        "Completed the on-canvas part of the Principal ecosystem: a static file became a managed workspace.",
      ],
    },
  ],
  previous: { title: "DevPal", href: "/projects/devpal" },
  next: { title: "ComponentsNav Widget", href: "/projects/components-nav-widget" },
};

export const componentsNavCase: ToolingCase = {
  title: "ComponentsNav Widget",
  subtitle:
    "A searchable table of contents for huge Figma design system files, with instant jump navigation, status badges, and a reliable way back.",
  tags: ["Figma Widget", "Design Systems", "Navigation", "Productivity"],
  cover: "/projects/cover_components-nav.svg",
  coverAlt: "ComponentsNav widget interface",
  overview: [
    { label: "Role", value: "Product Designer & Developer" },
    { label: "Project Type", value: "Figma Widget" },
    { label: "Focus", value: "Design System Wayfinding" },
  ],
  sections: [
    {
      eyebrow: "Navigation tax",
      title: "A large Figma file needed a map, not more zooming and panning",
      body: [
        "Design system files become dense cities: pages, wrappers, component sets, private parts, deprecated pieces, experiments, and legacy leftovers. The layers panel is technically accurate, but it is a poor map for daily work.",
        "ComponentsNav was built to answer simple questions quickly: what is in this file, where is the component, what state is it in, and how do I return after jumping across the canvas?",
      ],
    },
    {
      eyebrow: "Core behavior",
      title: "Search, jump to the component, then get back without losing orientation",
      body: [
        "The widget reads Principal's component registry and renders a grouped index directly on the canvas. Clicking a component tile moves the viewport to the exact component.",
        "A temporary Back to widget action solves a tiny but painful Figma problem: jumping somewhere useful and immediately losing the original context.",
      ],
    },
    {
      eyebrow: "What made it practical",
      title: "The index behaves like a design-system tool, not just a list",
      cards: [
        {
          title: "Page and Wrapper Grouping",
          body: [
            "Components are grouped by Figma page and top-level wrapper frame, matching how teams mentally organize large libraries.",
          ],
        },
        {
          title: "Design and Dev Badges",
          body: [
            "Tiles show state such as Draft, In Review, Ready for Dev, Deprecated, and implementation progress through DevPal integration.",
          ],
        },
        {
          title: "Private and Deprecated Filters",
          body: [
            "Users can hide private components prefixed with an underscore and filter out deprecated items to keep the index relevant.",
          ],
        },
        {
          title: "Fast Client-Side Search",
          body: [
            "Search filters the local index instantly, which matters when a file contains hundreds of components.",
          ],
        },
      ],
    },
    {
      eyebrow: "Performance and sync",
      title: "The widget does not rescan the city every time it opens",
      body: [
        "ComponentsNav consumes the component_registry generated by Principal from sharedPluginData, so it loads from a prepared semantic map instead of crawling the whole file.",
        "Status updates are written back to the component node and synced to the Principal backend through a hidden iframe. Pagination and lazy loading, 20 tiles at a time, keep the widget responsive on massive canvases.",
      ],
      contained: true,
    },
    {
      eyebrow: "Outcome",
      title: "The canvas became searchable and understandable for people who did not build it",
      bullets: [
        "Reduced time spent hunting for components during audits, reviews, onboarding, and handoff.",
        "Made readiness and deprecation state visible at the same moment as navigation.",
        "Showed how Principal's semantic layer can power lightweight tools that feel useful immediately.",
      ],
    },
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
  sections: [
    {
      eyebrow: "Personal friction",
      title: "The work was not hard because of design decisions, it was hard because selecting things was slow",
      body: [
        "When editing component sets with dozens or hundreds of variants, the painful part is often not deciding what to change. It is finding every nested text layer, icon, or object that needs the change.",
        "Figma's native selection is built around visible interaction. Design system refactoring often needs object logic: select all items matching these traits, inside this structure, and remember that selection for later.",
      ],
    },
    {
      eyebrow: "Plugin concept",
      title: "I turned selection into a queryable workflow",
      body: [
        "Smart Selection lets designers define what they are looking for, scan deep hierarchy, isolate matching objects, save complex selections, and combine them for more advanced batch operations.",
        "The goal was not to create a flashy utility. It was to remove the mechanical layer hunting that quietly drains time and focus from design system work.",
      ],
    },
    {
      eyebrow: "Refactoring toolset",
      title: "Save, recall, combine, exclude: selection became reusable",
      cards: [
        {
          title: "Trait-Based Selection",
          body: [
            "Select by layer type, style, name pattern, location, or role inside a component structure.",
          ],
        },
        {
          title: "Deep Selection",
          body: [
            "Scan nested groups, component sets, and auto-layout structures without endless double-clicking.",
          ],
        },
        {
          title: "Saved Selections",
          body: [
            "Store complex selections so a multi-pass refactor does not restart from zero every time.",
          ],
        },
        {
          title: "Logical Combinations",
          body: [
            "Combine, intersect, or exclude saved sets to create precise batch operations without overwhelming the user.",
          ],
        },
      ],
    },
    {
      eyebrow: "UX and implementation",
      title: "The challenge was making complex logic feel native to Figma",
      body: [
        "The plugin traverses selected node trees, evaluates nodes against user-defined criteria, and returns matching layers as the active Figma selection.",
        "I used AI-assisted development to move quickly through boilerplate and focus on the hard parts: Figma API edge cases, performance on large node trees, and UX for logical operations that should feel powerful but not intimidating.",
      ],
      contained: true,
    },
    {
      eyebrow: "Outcome",
      title: "Routine cleanup became a focused action instead of a click marathon",
      bullets: [
        "Turned repetitive selection and batch-editing tasks from minutes of manual clicking into seconds of targeted action.",
        "Made large component refactors less risky by isolating exactly the intended objects.",
        "Improved workflow comfort by removing one of the most draining parts of design system maintenance.",
      ],
    },
  ],
  previous: { title: "ComponentsNav Widget", href: "/projects/components-nav-widget" },
  next: { title: "All Projects", href: "/#projects" },
};
