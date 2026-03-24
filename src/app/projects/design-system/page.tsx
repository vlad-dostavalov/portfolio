import { LightboxImage } from "@/components/ui/lightbox";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System Case Study",
};

const D = 0.04;

export default function DesignSystemPage() {
  return (
    <article className="flex flex-col gap-12">
      {/* Hero */}
      <BlurFade delay={D}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Figma</Badge>
            <Badge variant="secondary">Design Tokens</Badge>
            <Badge variant="secondary">Atomic Design</Badge>
            <Badge variant="secondary">Documentation</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Development of a Design System
          </h1>
        </div>
      </BlurFade>

      {/* Overview */}
      <BlurFade delay={D * 2}>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Role</p>
              <p className="font-medium">Senior Product Designer</p>
            </div>
            <div>
              <p className="text-muted-foreground">Duration</p>
              <p className="font-medium">Over 1 year</p>
            </div>
            <div>
              <p className="text-muted-foreground">Company</p>
              <p className="font-medium">Anorbank</p>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Challenge */}
      <BlurFade delay={D * 3}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Challenge</h2>
          <p className="text-muted-foreground leading-relaxed">
            Upon joining the team, the application suffered from significant inconsistencies both visually and technically. There were fragmented, unsystematized, and duplicate components in Figma. A majority of the layouts lacked the use of proper components. It became clear that a comprehensive design system was essential.
          </p>
        </div>
      </BlurFade>

      {/* Objectives */}
      <BlurFade delay={D * 4}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Objectives</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li>Establish a unified design system to ensure consistency across all platforms.</li>
            <li>Systematize color palettes using color tokens and variables in Figma.</li>
            <li>Develop components utilizing auto-layout, color tokens, spacing variables, and typographic styles.</li>
            <li>Create guidelines, a backlog of tasks for development, and a design checklist.</li>
            <li>Implement atomic design principles, starting with the most frequent elements.</li>
          </ul>
        </div>
      </BlurFade>

      {/* Process */}
      <BlurFade delay={D * 5}>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Process</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">1. Initiation and Systematization</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Analyzed existing design inconsistencies.</li>
                <li>Systematized color palettes using color tokens and variables, enabling flexible dark mode adjustments.</li>
                <li>Developed components that utilized auto-layout, color tokens, sizing & spacing variables, and typographic styles.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">2. Documentation and Guidelines</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Collaborated with the team to draft guidelines and standards for the design system.</li>
                <li>Created a backlog of tasks for the design system&apos;s development and maintenance.</li>
                <li>Developed a comprehensive design checklist to ensure adherence to the new system.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">3. Component Development</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Followed atomic design principles, starting with the most frequently used elements.</li>
                <li>Expanded the component library to include elements for new flows.</li>
                <li>Ensured the design system components covered all new flows and gradually replaced elements in existing flows.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">4. Integration and Implementation</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Achieved full integration of the design system within six months.</li>
                <li>All new flows were developed entirely using design system components, significantly enhancing consistency and productivity.</li>
              </ul>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Images */}
      <BlurFade delay={D * 6}>
        <div className="flex flex-col gap-4">
          <LightboxImage src="/projects/ds-process_component-structure.png" alt="Component Structure" className="" />
          {/* <div className="grid grid-cols-2 gap-4">
            <LightboxImage src="/projects/ds-process_img1.png" alt="Design tokens" className="" />
            <LightboxImage src="/projects/ds-process_img2.png" alt="Components" className="" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <LightboxImage src="/projects/ds-process_img3.png" alt="Layouts" className="" />
            <LightboxImage src="/projects/ds-process_thumb-zone.png" alt="Thumb zone analysis" className="" />
          </div> */}
        </div>
      </BlurFade>

      {/* Impact */}
      <BlurFade delay={D * 7}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Impact</h2>
          <ul className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <li><strong className="text-foreground">Component Adoption Rate:</strong> Component usage increased from a few basic elements to 90% of workflows using standardized components.</li>
            <li><strong className="text-foreground">Efficiency:</strong> Development speed improved, reducing the average time to design and develop new features from 8 weeks to 5 weeks.</li>
            <li><strong className="text-foreground">Productivity:</strong> UI error rates decreased dramatically, reflecting improved usability and fewer design flaws.</li>
            <li><strong className="text-foreground">Onboarding Time:</strong> Reduced from 6 weeks to 3 weeks, thanks to clear documentation and standardized design patterns.</li>
            <li><strong className="text-foreground">Bug Reduction:</strong> Design-related bugs decreased by 40%.</li>
          </ul>
        </div>
      </BlurFade>

      {/* Case Highlight */}
      <BlurFade delay={D * 8}>
        <div className="flex flex-col gap-3 border rounded-xl p-6 bg-muted/30">
          <h2 className="text-xl font-bold">Case Highlight: Automated Color Token Management</h2>
          <div className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <p><strong className="text-foreground">Problem:</strong> The evolving design system required frequent updates to the color scheme. Developers had to manually search for changes and update colors, leading to inefficiencies.</p>
            <p><strong className="text-foreground">Solution:</strong> Proposed and developed a custom Figma plugin to export a table of color tokens in a convenient format with navigation. Eliminated the manual task of updating colors, simplifying updates for designers and developers.</p>
          </div>
            <LightboxImage src="/projects/ds-highlight_tokens.png" alt="Token table" className="" />
        </div>
      </BlurFade>

      {/* Figma Prototype */}
      <BlurFade delay={D * 9}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Interactive Prototype</h2>
          <div className="rounded-xl border overflow-hidden bg-muted/30">
            <iframe
              className="w-full"
              style={{ height: "600px", border: "none" }}
              src="https://embed.figma.com/design/vbUDC37PfFpJiqrTzoqbYD/Design-System?node-id=23204-15025&embed-host=share"
              allowFullScreen
            />
          </div>
        </div>
      </BlurFade>

      {/* Prototype screenshots */}
      {/* <BlurFade delay={D * 10}>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            <LightboxImage src="/projects/ds-new_01.png" alt="DS Screen 1" className="" />
            <LightboxImage src="/projects/ds-new_02.png" alt="DS Screen 2" className="" />
            <LightboxImage src="/projects/ds-new_03.png" alt="DS Screen 3" className="" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <LightboxImage src="/projects/ds-new_04.png" alt="DS Screen 4" className="" />
            <LightboxImage src="/projects/ds-new_05.png" alt="DS Screen 5" className="" />
            <LightboxImage src="/projects/ds-new_06.png" alt="DS Screen 6" className="" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <LightboxImage src="/projects/ds-new_07.png" alt="DS Screen 7" className="" />
            <LightboxImage src="/projects/ds-new_08.png" alt="DS Screen 8" className="" />
            <LightboxImage src="/projects/ds-new_09.png" alt="DS Screen 9" className="" />
          </div>
        </div>
      </BlurFade> */}

      {/* Conclusion */}
      <BlurFade delay={D * 11}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed">
            The implementation of the design system has significantly enhanced design consistency, productivity, and overall efficiency. The systematic approach and integration of automated tools have set a new standard for the team, ensuring seamless and timely updates and reducing manual workload.
          </p>
        </div>
      </BlurFade>

      {/* Navigation */}
      <BlurFade delay={D * 12}>
        <div className="flex justify-between items-center pt-4 border-t">
          <Link href="/#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            &larr; All Projects
          </Link>
          <Link href="/projects/home-page" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home Page Redesign &rarr;
          </Link>
        </div>
      </BlurFade>
    </article>
  );
}
