import type { ToolingCase } from "./tooling-case-page";

export const principalCase: ToolingCase = {
  title: "Principal",
  subtitle:
    "A multifunctional Figma plugin and backend that turns design-system files into a practical knowledge base: what components are, where they are used, and which rules they should follow.",
  tags: ["Design Systems", "AI & LLMs", "Automation", "Figma Plugin"],
  cover: "/projects/cover_principal.png",
  coverAlt: "Principal ecosystem overview",
  overview: [
    { label: "Role", value: "Lead Product Designer & Architect" },
    { label: "Project Type", value: "Figma Plugin, Backend & Tooling Ecosystem" },
    { label: "Focus", value: "Design System Knowledge Base" },
  ],
  tldr: [
    "I had to build and maintain a large design system while still doing product work. [Principal](/projects/principal) was my answer to making that workload **realistic for one person**.",
    "Plain version of the semantic layer: it is a **map of components, usage, patterns, rules, and exceptions** that tools and AI can read.",
    "The plugin scans Figma files, stores cross-file data in a backend, and turns scattered layouts into a **machine-readable knowledge base** for audits, documentation, and future automation.",
  ],
  impactStats: [
    { value: "1 maintainer", label: "built for a design system that could not rely on a dedicated full-time team" },
    { value: "Pro-plan gap", label: "custom usage analytics without depending on Figma Organization features" },
    { value: "4 tools", label: "[Principal](/projects/principal), [DevPal](/projects/devpal), ComponentCard, and ComponentsNav powered by the same data" },
  ],
  sections: [
    {
      eyebrow: "Business constraint",
      title: "The real problem was not design quality. It was maintenance capacity.",
      body: [
        "In a large custom product, a design system can save serious money through **reuse, fewer UI bugs, faster handoff, and less rework**. But that value is hard to prove to stakeholders who do not feel the daily maintenance pain.",
        "Arguments like consistency and better UX are true, but they rarely unlock budget by themselves. In my case, there was no realistic path to hiring several people just to support the system.",
        "So the constraint was practical: I had to **create the design system, maintain it, and still deliver product work**. [Principal](/projects/principal) started as a way to make that workload scalable instead of heroic.",
      ],
      details: [
        {
          eyebrow: "Why this matters",
          title: "The leadership problem was economic, not aesthetic",
          body: [
            "A design system is easy to defend to designers: consistency, quality, better user experience. But business stakeholders often hear that as a nice-to-have unless the cost is visible in money, deadlines, or bugs.",
            "The stronger argument was operational: if teams reuse tested components, they spend less time rebuilding UI, developers fix fewer visual inconsistencies, and designers do less repeated review work. [Principal](/projects/principal) was built around that reality: make the hidden maintenance cost measurable and reducible.",
          ],
        },
        {
          eyebrow: "Team constraint",
          title: "The challenge was doing design-system work without a design-system team",
          body: [
            "Large design systems usually need dedicated maintainers. I did not have that luxury. The work had to fit around product delivery, reviews, feature design, and daily coordination.",
            "That constraint shaped the product: [Principal](/projects/principal) could not be a reporting toy. It needed to remove actual maintenance work: scanning files, finding drift, preserving context, and making the system easier to operate without adding another meeting.",
          ],
        },
      ],
    },
    {
      eyebrow: "Operational gap",
      title: "Manual audits could not keep up with real product files",
      body: [
        "The hardest part was not drawing components. It was understanding how they were actually used across many product files where different designers worked every week.",
        "Meetings and reviews help, but they cannot carry every nuance: **which patterns are spreading, where components are misused, which texts are inconsistent, which files drifted from the library**.",
        "Figma has useful component analytics, but the feature set I needed sits behind the Organization plan. On Pro, even basic questions like how often a component was used were not available in the way I needed. That gap pushed me toward my own data layer and backend.",
      ],
      images: [
        {
          src: "/projects/plugin_principal_01.png",
          alt: "Principal component analysis screen",
          caption: "Component analysis view: [Principal](/projects/principal) reads structure, tokens, descriptions, and detected metadata for a selected component.",
        },
        {
          src: "/projects/plugin_principal_02.png",
          alt: "Principal system health screen",
          caption: "System health view: inventory and issues across the design system become visible instead of hidden in separate files.",
        },
      ],
      details: [
        {
          eyebrow: "Figma limitation",
          title: "The Organization-plan feature gap forced a custom analytics path",
          body: [
            "Figma has a valuable component analytics feature, but it was locked behind the Organization plan. In this project, the budget stayed on Pro. That meant even simple questions like **how many times this component is used** were not easy to answer at the scale I needed.",
            "Rather than wait for a budget decision I could not control, I built the missing layer myself: scans, usage collection, compact registries, and backend storage. That made component usage visible without depending on a plan upgrade.",
          ],
        },
        {
          eyebrow: "Cross-file control",
          title: "The hard part was seeing what happened outside the design-system file",
          body: [
            "The source library can look clean while product files slowly drift. Designers use components in different contexts, override text, create local patterns, detach layers, or keep old states alive because nobody notices in time.",
            "[Principal](/projects/principal) was designed to look beyond the source component page: **product files, usage contexts, instance overrides, deprecated components, repeated raw patterns, and text patterns** all become part of the maintenance picture.",
          ],
        },
      ],
    },
    {
      eyebrow: "Core idea",
      title: "I turned Figma files into a knowledge base the tools could understand",
      body: [
        "This is what I mean by semantic data in normal language: [Principal](/projects/principal) does not treat a file as random frames, texts, and rectangles. It builds a structured map of **what each UI piece is, what it means, where it is used, and which rules apply to it**.",
        "A frame can become a button, an input, an error modal, a product card, or a custom UI pattern with behavior and context. A text layer can become part of a known message pattern. A component instance can become evidence of how the system is really used.",
        "That changes the quality of automation. The system can stop guessing from layer names and start reasoning from **component roles, usage history, UI patterns, text patterns, and documented rules**.",
      ],
      images: [
        {
          src: "/projects/plugin_principal_03.png",
          alt: "Principal AI chat screen",
          caption: "AI chat grounded in prepared design-system knowledge, not only in whatever happens to be selected.",
        },
        {
          src: "/projects/plugin_principal_04.png",
          alt: "Principal scan progress screen",
          caption: "Scan flow for generating the component knowledge used by companion tools.",
        },
      ],
      details: [
        {
          eyebrow: "Semantic layer, plainly",
          title: "What the knowledge base actually stores",
          bullets: [
            "**Component identity:** name, role, type, variants, complexity, page, source, dependencies, and relationships.",
            "**Usage evidence:** where instances appear, which variants are used, what gets overridden, and which components are dead or deprecated.",
            "**UI patterns:** repeated structures, flows, modal patterns, empty states, product cards, tables, and custom components that are not obvious from layer names.",
            "**Text patterns:** recurring error messages, button labels, field hints, terminology, and places where copy diverges from the expected pattern.",
            "**Rules and exceptions:** what is allowed, what is risky, and what should be checked before handoff.",
          ],
        },
        {
          eyebrow: "Why AI needs this",
          title: "Raw Figma access is not enough for reliable automation",
          body: [
            "An AI agent connected to Figma can inspect nodes, but it still sees a noisy tree of frames, text layers, and component names. That is useful for demos, but weak for maintaining a large product.",
            "The stronger approach is to prepare the context first. [Principal](/projects/principal) gives AI a cleaned, structured, product-aware map, so future automation can reason about **intent, patterns, rules, and usage**, not just coordinates.",
          ],
        },
      ],
    },
    {
      eyebrow: "Architecture",
      title: "The backend made the system independent from one Figma file",
      body: [
        "I first tried to solve the problem inside Figma storage only. `sharedPluginData` was useful, but it was not enough for cross-file analytics, long-term history, and data that should be available from any file context.",
        "With a backend, [Principal](/projects/principal) could store component usage, status, generated knowledge, and relationships outside the current file. That is what made the rest of the ecosystem possible.",
      ],
      cards: [
        {
          title: "File scans",
          body: [
            "The plugin scans design-system and product files to collect components, instances, descriptions, styles, variants, and usage signals.",
          ],
        },
        {
          title: "AI interpretation",
          body: [
            "AI helps turn raw Figma structure into **named UI patterns, component roles, usage rules, and documentation drafts**.",
          ],
        },
        {
          title: "Backend knowledge base",
          body: [
            "The backend stores cross-file data, so tools can read the same knowledge without rescanning the current file every time.",
          ],
        },
        {
          title: "Figma data bridge",
          body: [
            "Shared plugin data keeps local context available inside Figma while the backend handles broader system memory.",
          ],
        },
      ],
      details: [
        {
          eyebrow: "Data model",
          title: "Distributed tagging made the data survive Figma changes",
          body: [
            "A fragile approach would store one central map of layer IDs. That breaks when nodes are copied, renamed, instantiated, or moved between files.",
            "The better model was distributed tagging: important semantic data is written into nodes through `sharedPluginData`, while broader history and cross-file relationships live in the backend. Instances can inherit definition data from components and add local context without corrupting the source.",
          ],
          bullets: [
            "**Definition layer:** what the main component and its children are supposed to mean.",
            "**Context layer:** how an instance is used in a specific product flow.",
            "**Stable semantic IDs:** long-lived references that do not depend only on Figma node IDs.",
          ],
        },
        {
          eyebrow: "Scan optimization",
          title: "Large files needed chunking, filtering, and memory guards",
          body: [
            "Scanning a serious Figma file is not just a loop through nodes. It can freeze the plugin UI, overload memory, or send useless noise to an LLM.",
            "The implementation uses **visual-substance filtering** to skip empty auto-layout wrappers, chunked async traversal to avoid blocking, compact component registry entries, and memory guards for large documents.",
          ],
          bullets: [
            "**Chunked traversal:** large node trees are processed in batches, yielding control back to the UI between chunks.",
            "**Compact registry:** component entries store only the data needed for lookup, analytics, and companion tools.",
            "**Prepared representatives:** repeated structures can be grouped so AI analyzes patterns instead of hundreds of near-identical nodes.",
          ],
        },
        {
          eyebrow: "Backend decision",
          title: "The backend solved the file-context limitation",
          body: [
            "`sharedPluginData` is good inside Figma, but it is still tied to the current file context. Once the system needed cross-file usage, changelogs, development status, and reusable knowledge, local storage alone was too limiting.",
            "The backend made the system portable: [DevPal](/projects/devpal) could read component implementation state in Dev Mode, ComponentCard could sync canvas documentation, and ComponentsNav could show statuses without forcing a full page-by-page scan.",
          ],
        },
      ],
    },
    {
      eyebrow: "AI strategy",
      title: "AI became useful only after the plugin gave it real product context",
      body: [
        "Connecting an AI agent directly to Figma can look impressive in a demo, but it does not automatically help maintain a huge product. Without prepared context, the model mostly guesses from layer names and visible hierarchy.",
        "[Principal](/projects/principal) is different because it prepares a dense knowledge base first: **existing flows, UI patterns, component rules, text patterns, actual usage, and known exceptions**.",
        "That opens more valuable workflows: automated design checks before handoff, better generated documentation, context-aware interface copy, and eventually prompt-driven layouts that already respect the design system and content rules.",
      ],
      details: [
        {
          eyebrow: "Near-term automation",
          title: "The first practical target is design review before handoff",
          body: [
            "The realistic value is not magic layout generation on day one. It is a design check that catches problems humans miss under time pressure.",
            "With a base of components, flows, UI patterns, text patterns, and known rules, [Principal](/projects/principal) can help detect **wrong component usage, inconsistent modal copy, missing states, deprecated components, excessive overrides, and hardcoded values** before work goes to development.",
          ],
        },
        {
          eyebrow: "Long-term direction",
          title: "The bigger idea is prompt-to-layout with real system rules",
          body: [
            "Most AI design tools can generate something that looks plausible. The harder problem is generating something that respects the actual design system, product flows, terminology, and editorial rules of a company.",
            "That is why the knowledge base matters. If the system knows existing flows, approved patterns, component roles, and copy rules, it becomes possible to generate layouts from a task prompt that are not just pretty, but **compatible with the product's real constraints**.",
          ],
        },
      ],
      contained: true,
    },
    {
      eyebrow: "Build history",
      title: "The project grew from a semantic bridge into a governance platform",
      body: [
        "The local repo history is compact, but the project documentation and code structure show a clear evolution: first semantic tagging, then registry and usage scanning, then linting, health metrics, and the backend-connected ecosystem.",
      ],
      details: [
        {
          eyebrow: "Version notes",
          title: "A short changelog from the project documentation",
          bullets: [
            "**1.0:** semantic tagging, AI analysis, and documentation generation for components.",
            "**1.5:** unified scanning, component registry, file-type detection, and usage analytics.",
            "**2.0:** lint engine, health metrics, Knowledge Hub, cross-file usage tracking, and broader design-system governance.",
          ],
        },
        {
          eyebrow: "Current engineering work",
          title: "The strongest recent work is around scan architecture and AI reliability",
          body: [
            "The current working tree shows heavy changes around scan orchestration, linter custom rules, AI provider configuration, semantic bridge types, reader/tagger logic, and UI state for scan progress.",
            "That matters for the case because the hard work was not only the plugin UI. It was making scans reliable on large files, keeping AI optional rather than magical, and building a data model other tools can safely depend on.",
          ],
          bullets: [
            "**Optimized usage scanning:** memoized instance lookups and scan strategies for large documents.",
            "**Custom rule engine:** configurable lint rules and validators, including grouped issues and auto-fix where safe.",
            "**Multi-provider AI setup:** support for provider configuration and fallback instead of locking the workflow to one model.",
            "**Semantic bridge exports:** reusable modules so companion tools can read the same system context.",
          ],
        },
      ],
    },
    {
      eyebrow: "Ecosystem",
      title: "The foundation already produced working tools",
      body: [
        "[Principal](/projects/principal) became the engine rather than one giant dashboard. Different tools expose the same data at the moment people need it: developers in Dev Mode, designers on the canvas, and maintainers inside large system files.",
      ],
      relatedCases: [
        {
          title: "DevPal",
          href: "/projects/devpal",
          image: "/projects/cover_devpal.png",
          description: "The Dev Mode plugin that lets developers read and update component implementation status, code path, and changelog.",
        },
        {
          title: "ComponentCard Widget",
          href: "/projects/component-card-widget",
          image: "/projects/cover_component-card.png",
          description: "The canvas widget that keeps component description, lifecycle status, version, and changelog synchronized.",
        },
        {
          title: "ComponentsNav Widget",
          href: "/projects/components-nav-widget",
          image: "/projects/cover_components-nav.png",
          description: "The navigation widget that uses Principal data to search components and review statuses in large Figma files.",
        },
      ],
    },
    {
      eyebrow: "Outcome",
      title: "A design system became something one person could operate at scale",
      bullets: [
        "Made design-system maintenance less dependent on **manual memory, scattered meetings, and file-by-file inspection**.",
        "Created visibility into **real component usage, rules, statuses, documentation, and recurring UI patterns**.",
        "Gave [DevPal](/projects/devpal), ComponentCard, and ComponentsNav a shared foundation instead of separate one-off data models.",
        "Laid the groundwork for **automated design checks, stronger UI copy generation, and future prompt-to-layout workflows** based on actual system rules.",
      ],
    },
  ],
  previous: { title: "Unified Frontend System", href: "/projects/unified-frontend-system" },
  next: { title: "DevPal", href: "/projects/devpal" },
};

export const devPalCase: ToolingCase = {
  title: "DevPal",
  subtitle:
    "A Figma Dev Mode plugin that gives developers a reliable component signal: status, version, code path, and changelog without leaving the file they were sent.",
  tags: ["Figma Dev Mode", "Developer Handoff", "Design Systems", "Workflow Tooling"],
  cover: "/projects/cover_devpal.png",
  coverAlt: "DevPal Dev Mode handoff interface",
  overview: [
    { label: "Role", value: "Product Designer, Plugin Architect & Developer" },
    { label: "Project Type", value: "Figma Dev Mode Plugin" },
    { label: "Focus", value: "Component Governance & Design-to-Dev Workflow" },
  ],
  tldr: [
    "Developers usually enter Figma through **one task link**, not through the design system map. Many never open the design system file at all.",
    "[DevPal](/projects/devpal) adds a **developer-facing communication channel** directly in Dev Mode: status, version, code path, changelog, and permissions.",
    "The plugin syncs through the backend and [Principal](/projects/principal), so component truth is available **from any product file**, not only from the source library.",
  ],
  impactStats: [
    { value: "1 panel", label: "status, version, code path, permissions, and changelog in Dev Mode" },
    { value: "0 extra login", label: "access control through native Figma authorization" },
    { value: "File + system", label: "component details on selection and global changelog when nothing is selected" },
  ],
  sections: [
    {
      eyebrow: "Handoff gap",
      title: "Developers did not need another Figma lesson. They needed the truth where they already worked.",
      body: [
        "Designers often know where the design system lives, which files matter, which pages are official, and where component notes are hidden. Developers usually have a very different entry point: **a link inside a task**.",
        "They open the exact product file they were given, inspect the layout in Dev Mode, and move on. Some developers had never entered the design system file, and that was normal. Their job was not to study the designers' workspace.",
        "The painful part was that component truth lived outside that flow. **Is this component implemented? Which version is safe? Where is it in the codebase? Did design change after dev started?** Without a direct channel, every answer turned into chat, Jira archaeology, or tribal memory.",
      ],
    },
    {
      eyebrow: "Core experience",
      title: "The selected component becomes a compact handoff record",
      body: [
        "When a developer selects a component in Dev Mode, [DevPal](/projects/devpal) shows the information they need to decide what to do next: **design status, development status, component version, code path, changelog, and access state**.",
        "The important detail is location. Developers do not have to know which design system page owns the component. If the component appears in a product file, [DevPal](/projects/devpal) can surface the same synced record there.",
      ],
      images: [
        {
          src: "/projects/plugin_devpal_01.png",
          alt: "DevPal status panel in Figma Dev Mode",
          caption: "Component panel: **design status, dev status, version, code path, changelog, and permissions** in the Dev Mode sidebar.",
          narrow: true,
        },
        {
          src: "/projects/plugin_devpal_02.png",
          alt: "DevPal global changelog screen",
          caption: "Global changelog mode: search and filters help developers scan changes without opening every component manually.",
          narrow: true,
        },
      ],
      cards: [
        {
          title: "Development status",
          body: [
            "Developers can mark whether a component is **not started, in progress, implemented, or blocked** from the same place where they inspect specs.",
          ],
        },
        {
          title: "Version",
          body: [
            "The component version is visible next to implementation state, so teams can talk about **which version** is implemented instead of guessing.",
          ],
        },
        {
          title: "Code path",
          body: [
            "A developer can save the **path to the component in the codebase**, helping others reuse existing implementation instead of rebuilding it.",
          ],
        },
        {
          title: "Native access control",
          body: [
            "Permissions use **Figma's own authorization**, so people do not need a second account. They get the editing rights that match their role.",
          ],
        },
      ],
    },
    {
      eyebrow: "Global awareness",
      title: "When nothing is selected, [DevPal](/projects/devpal) becomes a design-system radar",
      body: [
        "A selected component answers the local question. The empty state answers the broader one: **what changed in the design system that I should know about?**",
        "When no object is selected, [DevPal](/projects/devpal) shows a global changelog for the file. It is not a raw comment dump. Developers can search, filter by author, filter by component type, narrow the date range, and scan updates without walking through pages manually.",
        "Changelogs can also go beyond the current file. That matters because implementation work rarely respects Figma file boundaries. A developer can learn about component changes from the place where they already are.",
      ],
    },
    {
      eyebrow: "Architecture",
      title: "The plugin works because component data is shared, not copied",
      body: [
        "[DevPal](/projects/devpal) syncs through the backend and the semantic layer created by [Principal](/projects/principal). The same component record can be read by the Dev Mode plugin, the ComponentCard widget, and other tools in the ecosystem.",
        "This is what made the workflow useful in practice: a developer could update implementation status from a product file, and a designer could see that state later in the design system without asking anyone to report back.",
      ],
      bullets: [
        "**Backend sync** keeps component metadata available across files and tools.",
        "**Canonical component records** prevent variants and instances from becoming separate histories.",
        "**Figma authorization** keeps editing rights understandable for developers and maintainers.",
        "**Shared changelogs** attach decisions to components instead of scattering them across comments and chats.",
      ],
      contained: true,
    },
    {
      eyebrow: "Connected cases",
      title: "DevPal is the developer-facing part of the Principal loop",
      body: [
        "[DevPal](/projects/devpal) works because [Principal](/projects/principal) prepares component identity and shared metadata, while ComponentCard gives designers a canvas-side interface for the same component record.",
      ],
      relatedCases: [
        {
          title: "Principal",
          href: "/projects/principal",
          image: "/projects/cover_principal.png",
          description: "The knowledge layer that turns Figma files into reusable component context for the whole tooling ecosystem.",
        },
        {
          title: "ComponentCard Widget",
          href: "/projects/component-card-widget",
          image: "/projects/cover_component-card.png",
          description: "The canvas widget where designers maintain component descriptions, lifecycle status, versions, and changelogs.",
        },
      ],
    },
    {
      eyebrow: "Outcome",
      title: "Design and development got a communication channel inside the work itself",
      bullets: [
        "**Developers stopped depending on design-system file literacy** just to understand component readiness.",
        "**Design status, dev status, version, code path, and changelog** became visible in the same panel.",
        "**Implementation knowledge became reusable** because code paths and status updates stayed attached to the component.",
        "The [Principal](/projects/principal) ecosystem gained a developer-facing surface, not just designer-facing maintenance tools.",
      ],
    },
  ],
  previous: { title: "Principal", href: "/projects/principal" },
  next: { title: "ComponentCard Widget", href: "/projects/component-card-widget" },
};

export const componentCardCase: ToolingCase = {
  title: "ComponentCard Widget",
  subtitle:
    "A Figma widget that keeps component documentation, lifecycle status, implementation progress, and changelog in sync across the design system, Dev Mode, and product files.",
  tags: ["Figma Widget", "Design Systems", "Documentation", "Handoff"],
  cover: "/projects/cover_component-card.png",
  coverAlt: "ComponentCard widget interface",
  overview: [
    { label: "Role", value: "Senior Product Designer, DS Lead & Developer" },
    { label: "Project Type", value: "Figma Widget" },
    { label: "Focus", value: "Component Metadata Sync & Handoff" },
  ],
  tldr: [
    "A static component card is easy to make. The hard part is keeping it **truthful everywhere** the component is used.",
    "ComponentCard syncs **description, design status, dev status, version, and changelog** through [Principal](/projects/principal), [DevPal](/projects/devpal), and the backend.",
    "Designers update context on the canvas. Developers update implementation state in Dev Mode. Both sides see the **same component truth**.",
  ],
  impactStats: [
    { value: "1 source", label: "description, status, version, and changelog attached to the component" },
    { value: "2 sides", label: "design status from designers and implementation status from developers" },
    { value: "Everywhere", label: "component context visible in the design system and product files" },
  ],
  sections: [
    {
      eyebrow: "Real problem",
      title: "The issue was not making a component card. It was keeping it true.",
      body: [
        "Component cards are common in design systems. Most teams make some kind of block with a name, description, status, and usage notes.",
        "The problem starts later. The same information has to be updated in the card, in the Figma component description, in documentation, and sometimes in developer tools. It is easy to forget one place, and then nobody knows **which version is true**.",
        "Figma's component description is still important because it appears in Dev Mode and in places where the component is used. So the card could not become another separate source of truth. It had to **stay in sync with the component itself**.",
      ],
    },
    {
      eyebrow: "Lifecycle gap",
      title: "Ready for dev was not enough for a living design system",
      body: [
        "In a simple file, one status may be enough. In a large product, the lifecycle is messier: **Draft, In Review, Ready for Dev, Design Changed, Deprecated**, and other states all matter.",
        "Developer feedback matters just as much. A component can be ready in design but not started in code. It can be partially implemented. It can be fully implemented and then become risky when a designer changes it later.",
        "This is where static cards break. Developers in Dev Mode usually cannot edit the design file, and designers do not always have access to developer tracking tools. Without a **shared status loop**, every small component change becomes a coordination problem.",
      ],
    },
    {
      eyebrow: "Widget idea",
      title: "I turned the card into a live interface for component truth",
      body: [
        "ComponentCard sits next to the component in the design system, but its data is not trapped on that page. It is connected to the semantic layer from [Principal](/projects/principal), to [DevPal](/projects/devpal) in Dev Mode, and to the backend that keeps component metadata synchronized.",
        "A designer can update the component description or add a changelog from the widget. A developer can update implementation status or leave a changelog from [DevPal](/projects/devpal). The same component record is updated, so both sides see the **latest context**.",
        "The important shift is that the card stops being documentation you must remember to maintain. It becomes an **interface for maintaining the component itself**.",
      ],
    },
    {
      eyebrow: "What it syncs",
      title: "The card keeps the information teams usually lose",
      cards: [
        {
          title: "Component description",
          body: [
            "The description in the widget stays aligned with the **component description**, so Dev Mode and product-file usage still show useful context.",
          ],
        },
        {
          title: "Design lifecycle",
          body: [
            "Designers can mark states such as **Draft, Ready for Dev, Design Changed, and Deprecated** without relying on a single Figma status.",
          ],
        },
        {
          title: "Development status",
          body: [
            "Developers can update implementation state from [DevPal](/projects/devpal) in Dev Mode, even when they cannot edit the Figma design file.",
          ],
        },
        {
          title: "Version and changelog",
          body: [
            "**Design and dev changelogs** are attached to the component record, not to a random note sitting near the source component.",
          ],
        },
      ],
    },
    {
      eyebrow: "System behavior",
      title: "The value appears when the component is used outside the design system file",
      body: [
        "A normal card only helps on the design system page. But component instances live everywhere: product files, feature explorations, handoff files, and Dev Mode inspection.",
        "Because ComponentCard writes metadata to the component record and syncs through the backend, the information can **travel with the component**. A developer can mark a component as implemented from a product file. A designer can see that state back in the design system without asking around.",
        "This removed a lot of fragile coordination. Teams no longer had to remember every small change manually or warn every developer in chat whenever a component moved from **one state to another**.",
      ],
      contained: true,
    },
    {
      eyebrow: "Connected cases",
      title: "ComponentCard works because it is part of a larger loop",
      body: [
        "The widget is the canvas-facing part of the system. [Principal](/projects/principal) creates the semantic layer, and [DevPal](/projects/devpal) gives developers their side of the workflow inside Dev Mode.",
      ],
      relatedCases: [
        {
          title: "Principal",
          href: "/projects/principal",
          image: "/projects/cover_principal.png",
          description: "The semantic layer that scans components and keeps shared metadata readable by the tooling ecosystem.",
        },
        {
          title: "DevPal",
          href: "/projects/devpal",
          image: "/projects/cover_devpal.png",
          description: "The Dev Mode companion where developers update implementation status and component changelogs.",
        },
      ],
    },
    {
      eyebrow: "Outcome",
      title: "The card became a synchronization point, not a static note",
      bullets: [
        "Reduced context switching by keeping **component description, design status, dev status, version, and changelog** in one workflow.",
        "Made **implementation feedback visible to designers** without forcing them into developer tools.",
        "Made **design changes visible to developers** in Dev Mode and product files, not only on the design system page.",
        "Helped teams coordinate changes in a **living design system** without relying on everyone remembering every small update.",
      ],
    },
  ],
  previous: { title: "DevPal", href: "/projects/devpal" },
  next: { title: "ComponentsNav Widget", href: "/projects/components-nav-widget" },
};

export const componentsNavCase: ToolingCase = {
  title: "ComponentsNav Widget",
  subtitle:
    "A Figma widget that turns a heavy design system file into a compact component map with live statuses, search, filters, and jump navigation.",
  tags: ["Figma Widget", "Design Systems", "Navigation", "Productivity"],
  cover: "/projects/cover_components-nav.png",
  coverAlt: "ComponentsNav widget interface",
  overview: [
    { label: "Role", value: "Product Designer & Developer" },
    { label: "Project Type", value: "Figma Widget" },
    { label: "Focus", value: "Design System Wayfinding" },
  ],
  tldr: [
    "As the design system grew, components were spread across pages and sections. Finding the right one became **slow, memory-heavy, and easy to mess up**.",
    "ComponentsNav gives the team **one compact canvas map** with live statuses, automatic grouping, search, filters, and jump navigation.",
    "Because it uses the backend and [Principal](/projects/principal) semantic layer, status review no longer requires opening every page and refreshing every card.",
  ],
  impactStats: [
    { value: "1 map", label: "component structure and statuses visible from the Figma canvas" },
    { value: "Accordions", label: "automatic grouping by pages and sections with component counts" },
    { value: "Fast filters", label: "search, hide unpublished items, show deprecated, and collapse all" },
  ],
  sections: [
    {
      eyebrow: "Navigation tax",
      title: "The design system became too large to inspect page by page",
      body: [
        "A growing design system eventually stops fitting into one neat page. Components move into separate pages, sections, wrappers, experiments, private areas, and deprecated corners.",
        "That created two practical problems. First, it became harder to **find the right component**. Second, checking component statuses meant walking through pages, loading heavy canvases, and updating or refreshing cards one by one.",
        "Large Figma pages also have a real performance cost. They take time, memory, and a stable connection. A navigation tool had to reduce that load, not add another heavy surface.",
      ],
    },
    {
      eyebrow: "Core behavior",
      title: "ComponentsNav shows the system structure without forcing you to open the whole system",
      body: [
        "ComponentsNav reads the shared component data from the backend and the [Principal](/projects/principal) registry, then renders a compact index directly on the Figma canvas.",
        "The widget groups components automatically by **pages and sections**, folds them into accordions, and shows **component counts** while collapsed. That makes the file scannable without turning navigation into another dashboard.",
        "Clicking an item moves the viewport to the component. A temporary Back to widget action solves the small but painful problem of losing your place after a jump.",
      ],
    },
    {
      eyebrow: "What made it practical",
      title: "The useful part is the combination of structure, status, and filtering",
      cards: [
        {
          title: "Automatic grouping",
          body: [
            "Components are grouped by **page and section**, matching how the library is already organized in Figma.",
          ],
        },
        {
          title: "Status visibility",
          body: [
            "The map shows **design status, deprecation, and implementation progress** without opening every component card.",
          ],
        },
        {
          title: "Focused filters",
          body: [
            "Users can **search by name**, hide unpublished components, and decide whether deprecated items should stay visible.",
          ],
        },
        {
          title: "Collapse control",
          body: [
            "A single action collapses all accordions, making it easy to reset the view after deep navigation.",
          ],
        },
      ],
    },
    {
      eyebrow: "Performance decision",
      title: "The widget relies on shared metadata instead of repeatedly scanning heavy pages",
      body: [
        "The main product decision was to use existing component intelligence instead of making the widget rediscover everything from the canvas every time.",
        "ComponentsNav consumes the component registry generated by [Principal](/projects/principal) and synced through the backend. That lets it show many component statuses in one place while avoiding the worst cost of loading and inspecting every page manually.",
      ],
      bullets: [
        "**Accordion rendering** keeps large groups manageable.",
        "**Search and filters** work against prepared component metadata.",
        "**Backend status data** makes the widget useful even before someone opens the source component page.",
      ],
      contained: true,
    },
    {
      eyebrow: "Connected cases",
      title: "The map works because the ecosystem already knows what each component means",
      body: [
        "ComponentsNav is the navigation surface. [Principal](/projects/principal) provides the semantic layer and backend sync. [DevPal](/projects/devpal) and ComponentCard use the same component records from different work contexts.",
      ],
      relatedCases: [
        {
          title: "Principal",
          href: "/projects/principal",
          image: "/projects/cover_principal.png",
          description: "The semantic layer that scans the design system and keeps component metadata reusable.",
        },
        {
          title: "DevPal",
          href: "/projects/devpal",
          image: "/projects/cover_devpal.png",
          description: "The Dev Mode plugin that lets developers read and update component implementation context.",
        },
      ],
    },
    {
      eyebrow: "Outcome",
      title: "The design system became easier to enter and easier to audit",
      bullets: [
        "**Finding components became a direct action** instead of a canvas expedition across heavy pages.",
        "**Status review became centralized**: many components could be checked from one widget instead of page by page.",
        "**Readiness, deprecation, and implementation progress** became visible at the same moment as navigation.",
        "The [Principal](/projects/principal) metadata layer became a daily workflow surface, not just an invisible backend concept.",
      ],
    },
  ],
  previous: { title: "ComponentCard Widget", href: "/projects/component-card-widget" },
  next: { title: "Smart Selection", href: "/projects/smart-selection" },
};

export const smartSelectionCase: ToolingCase = {
  title: "Smart Selection",
  subtitle:
    "A Figma plugin that makes layer selection feel like a query instead of a click marathon.",
  tags: ["Figma Plugin", "Productivity", "Internal Tooling", "Automation"],
  cover: "/projects/cover_smart-selection.png",
  coverAlt: "Smart Selection plugin interface",
  overview: [
    { label: "Role", value: "Product Designer & Developer" },
    { label: "Project Type", value: "Figma Plugin" },
    { label: "Focus", value: "Object Selection & Layer Management" },
  ],
  tldr: [
    "The pain was very practical: selecting the right nested layers during component refactors took **too long**.",
    "Smart Selection lets designers find objects by **traits**, save complex selections, and combine them later.",
    "It turns repetitive cleanup into a **precise batch operation**.",
  ],
  impactStats: [
    { value: "Seconds", label: "instead of minutes for repeated selection tasks" },
    { value: "Deep scan", label: "through nested groups, auto-layouts, and component variants" },
    { value: "Reusable sets", label: "saved selections for multi-step refactoring" },
  ],
  sections: [
    {
      eyebrow: "Personal friction",
      title: "The design decision was easy. Finding every layer was the hard part.",
      body: [
        "When editing large component sets, the slow part is often mechanical: find **every nested text layer, icon, or object** that needs the same change.",
        "Figma's native selection is built for visible interaction. Design system refactoring needs logic: **select all objects matching these traits**, inside this structure, and let me reuse that selection later.",
      ],
    },
    {
      eyebrow: "Plugin idea",
      title: "I turned selection into a queryable workflow",
      body: [
        "Smart Selection lets designers define what they are looking for, **scan deep hierarchy, isolate matching objects, save complex selections, and combine them** for advanced refactoring.",
        "The goal was not to create a flashy utility. It was to remove the **draining layer-hunting** that interrupts design system work.",
      ],
      images: [
        {
          src: "/projects/plugin_smart-selection.png",
          alt: "Smart Selection plugin interface",
          caption: "Trait-based filtering for nested layers by name, dimensions, and additional constraints.",
          narrow: true,
        },
        {
          src: "/projects/plugin_smart-selection_02.png",
          alt: "Smart Selection saved selection interface",
          caption: "Saved selections make repeated refactors easier to resume and combine.",
          narrow: true,
        },
      ],
    },
    {
      eyebrow: "Refactoring toolset",
      title: "Selection became something reusable, not disposable",
      cards: [
        {
          title: "Trait-based selection",
          body: [
            "Filter by **layer type, style, name pattern, location, or role** inside a component.",
          ],
        },
        {
          title: "Deep selection",
          body: [
            "Scan **nested groups, component sets, and auto-layout structures** without repeated double-clicking.",
          ],
        },
        {
          title: "Saved selections",
          body: [
            "Store **complex selections** so a multi-pass refactor does not restart from zero.",
          ],
        },
        {
          title: "Logical combinations",
          body: [
            "**Combine, intersect, or exclude** saved sets for precise batch operations.",
          ],
        },
      ],
    },
    {
      eyebrow: "Implementation challenge",
      title: "Complex logic had to feel native to Figma",
      body: [
        "The plugin walks selected node trees, checks each node against the chosen criteria, and returns the **matching objects as the active Figma selection**.",
        "I used AI-assisted development to move faster through boilerplate, but focused my attention on the hard parts: **UX for logical operations, Figma API edge cases, and performance on large node trees**.",
      ],
      contained: true,
    },
    {
      eyebrow: "Outcome",
      title: "Routine cleanup became a focused action",
      bullets: [
        "Turned repeated selection and batch-editing tasks from **minutes of clicking into seconds**.",
        "Made large component refactors less risky by **isolating exactly the intended objects**.",
        "Reduced one of the most annoying parts of design system maintenance: **searching for tiny things in huge nested structures**.",
      ],
    },
  ],
  previous: { title: "ComponentsNav Widget", href: "/projects/components-nav-widget" },
  next: { title: "All Projects", href: "/#projects" },
};
