import { LightboxImage } from "@/components/ui/lightbox";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unified Frontend System Case Study",
};

const D = 0.04;

export default function UnifiedFrontendSystemPage() {
  return (
    <article className="flex flex-col gap-12">
      <BlurFade delay={D}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">UX Research</Badge>
            <Badge variant="secondary">Design System Architecture</Badge>
            <Badge variant="secondary">Process Optimization</Badge>
            <Badge variant="secondary">B2E Interface Design</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Unified Frontend System
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Turning a delayed set of internal banking tools into one usable B2E platform, while building the design system and tooling that helped the team ship.
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={D * 2}>
        <div className="grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <p className="text-muted-foreground">Role</p>
            <p className="font-medium">Senior Product Designer &rarr; Design System Lead</p>
          </div>
          <div>
            <p className="text-muted-foreground">Duration</p>
            <p className="font-medium">12 months</p>
          </div>
          <div>
            <p className="text-muted-foreground">Company</p>
            <p className="font-medium">Expera (Tashkent)</p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={D * 3}>
        <div className="grid gap-4 rounded-xl border bg-muted/30 p-5 sm:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Quick read
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>I joined after the project had already been running for six months and was <strong className="case-keyword">up to 3 months behind</strong>.</li>
              <li>My job was to make the interface usable for bank operators without <strong className="case-keyword">slowing down frontend delivery</strong>.</li>
              <li>The leverage came from a <strong className="case-keyword">custom design system, automation, and close work with analysts and engineers</strong>.</li>
            </ul>
          </div>
          <div className="grid gap-3">
            <div>
              <p className="text-lg font-semibold leading-none">On time</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Retail Banking shipped on schedule after being behind.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold leading-none">8-10h shifts</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Interface decisions optimized for long operator workdays.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold leading-none">3 plugins</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Custom Figma tooling reduced handoff friction and manual checks.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={D * 4}>
        <LightboxImage
          src="/projects/efs_screen.png"
          alt="Unified Frontend System - Client Service interface"
          className="rounded-xl border shadow-sm w-full"
        />
      </BlurFade>

      <BlurFade delay={D * 5}>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Starting point
          </p>
          <h2 className="text-xl font-bold">I joined when the project was already behind</h2>
          <p className="text-muted-foreground leading-relaxed">
            The team was trying to merge several internal banking tools into one workspace for operators and employees. Development was already up to 3 months behind, and the UI foundation was not strong enough to carry the product at speed.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The tricky part was not just drawing better screens. We had to improve readability, create a scalable design system, and keep engineers moving while working with users who were used to legacy tools and rarely complained.
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={D * 6}>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            What had to change
          </p>
          <h2 className="text-xl font-bold">The product needed a foundation, not more isolated screens</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li>Consolidate operator workflows into one cohesive B2E platform.</li>
            <li>Build a custom design system on top of the existing developer UI framework.</li>
            <li>Improve readability and reduce cognitive load during long shifts.</li>
            <li>Automate design-to-code handoff wherever the process was too manual.</li>
          </ul>
        </div>
      </BlurFade>

      <BlurFade delay={D * 7}>
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Process
          </p>
          <h2 className="text-xl font-bold">I focused on the parts that would unblock delivery</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">1. Stabilized the design system first</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Took the existing UI framework, overhauled the styling, and layered multi-level tokenization on top.</li>
                <li>Used automation to mass-update hundreds of components and variants in a couple of weeks.</li>
                <li>Aligned with frontend leads to preserve what was already built instead of forcing a reset.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">2. Researched through domain experts and observation</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Standard interviews were weak because operators rarely complained and often said everything was fine.</li>
                <li>Worked closely with business analysts who had operator experience and knew the real workflows.</li>
                <li>Used branch observations to see how the interface behaved in daily work.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">3. Built tooling where handoff was too slow</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Moved into the Design System Lead role after the Retail Banking module stabilized.</li>
                <li>Built custom Figma plugins to reduce token export work, status tracking, and design system checks.</li>
              </ul>
            </div>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={D * 8}>
        <div className="flex flex-col gap-3 border rounded-xl p-6 bg-muted/30">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Leverage
          </p>
          <h2 className="text-xl font-bold">Tooling saved the team from repeating the same handoff work</h2>
          <div className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <p>The team did not need more meetings about handoff. It needed less manual work and fewer places for mistakes to hide.</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong className="case-keyword">JSON Token Exporter</strong>: exported tokens in the exact format developers needed.</li>
              <li><strong className="case-keyword">Built-in Status Tracker</strong>: kept component and screen status inside Figma.</li>
              <li><strong className="case-keyword">Design Linter</strong>: audited components and semantic properties for consistency.</li>
            </ul>
            <p>I also ran internal workshops so designers, analysts, and engineers could use the system the same way.</p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={D * 9}>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Outcome
          </p>
          <h2 className="text-xl font-bold">The project moved from delayed to shippable</h2>
          <ul className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <li><strong className="case-keyword">On-time delivery:</strong> Retail Banking went live on schedule after the project had been up to 3 months behind.</li>
            <li><strong className="case-keyword">Operator comfort:</strong> Larger typography, clearer spacing, and WCAG AA contrast made long shifts less tiring while keeping dense data visible.</li>
            <li><strong className="case-keyword">Automation:</strong> Plugins reduced handoff errors and saved repeated manual work for designers and developers.</li>
            <li><strong className="case-keyword">Data-ready iteration:</strong> UI telemetry and event tracking were prepared before beta, so the team could learn from real usage.</li>
          </ul>
        </div>
      </BlurFade>

      <BlurFade delay={D * 10}>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Reflection
          </p>
          <h2 className="text-xl font-bold">The design work mattered because it changed how the team worked</h2>
          <p className="text-muted-foreground leading-relaxed">
            This was not only a UI redesign. It was a recovery effort: stabilize the system, respect the constraints of an active frontend team, learn from domain experts, and create tooling that kept the work moving after the first module shipped.
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={D * 11}>
        <div className="flex justify-between items-center pt-4 border-t">
          <Link href="/#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            &larr; All Projects
          </Link>
          <Link href="/projects/design-system" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Design System &rarr;
          </Link>
        </div>
      </BlurFade>
    </article>
  );
}
