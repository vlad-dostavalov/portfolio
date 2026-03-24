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
      {/* Hero */}
      <BlurFade delay={D}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">UX Research</Badge>
            <Badge variant="secondary">Design System Architecture</Badge>
            <Badge variant="secondary">Process Optimization</Badge>
            <Badge variant="secondary">B2E Interface Design</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Unified Frontend System
          </h1>
        </div>
      </BlurFade>

      {/* Overview */}
      <BlurFade delay={D * 2}>
        <div className="grid grid-cols-3 gap-4 text-sm">
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

      {/* Screenshot */}
      <BlurFade delay={D * 3}>
        <LightboxImage
          src="/projects/efs_screen.png"
          alt="Unified Frontend System — Client Service interface"
          className="rounded-xl border shadow-sm w-full"
        />
      </BlurFade>

      {/* Challenge */}
      <BlurFade delay={D * 4}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Challenge</h2>
          <p className="text-muted-foreground leading-relaxed">
            I joined the team six months after the project had started. By that point development was already running up to 3 months behind schedule. The mission was to turn a fragmented collection of internal banking tools into one modern, unified frontend platform for bank operators and employees. The pressure was real: we had to move fast, build a solid design foundation without slowing down the engineers, and create an interface that would actually feel comfortable for people who had spent years on clunky legacy systems and were very set in their ways.
          </p>
        </div>
      </BlurFade>

      {/* Objectives */}
      <BlurFade delay={D * 5}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Objectives</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li>Consolidate all operator workflows into a single cohesive B2E platform</li>
            <li>Build a custom design system on top of the existing developer UI framework to speed up delivery</li>
            <li>Dramatically improve readability and reduce cognitive load for long shifts</li>
            <li>Create smooth, automated design-to-code handoff processes</li>
          </ul>
        </div>
      </BlurFade>

      {/* Process */}
      <BlurFade delay={D * 6}>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Process</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">1. Design System Foundation</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Took the existing UI framework, completely overhauled the styling, and layered a robust multi-level tokenization system on top of it.</li>
                <li>Using heavy automation, mass-updated hundreds of components and variants in just a couple of weeks — unblocking the dev team and quickly closing the design gap.</li>
                <li>Agreed with frontend leads not to rip up what they had already built, preserving development momentum.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">2. Research with a Tough Audience</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Bank operators almost never complain and genuinely believe &quot;everything is fine&quot; — standard user interviews didn&apos;t work.</li>
                <li>Leaned hard on business analysts — former operators themselves — and ran deep-dive sessions with them as domain experts.</li>
                <li>Conducted periodic on-site observations at branches to see real workflows in action.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">3. Design System Lead & Tooling</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Once the Retail Banking module stabilized, stepped into the Design System Lead role.</li>
                <li>Built three custom Figma plugins with Cursor.ai in a matter of weeks to close the design-dev gap.</li>
              </ul>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Figma Plugins Highlight */}
      <BlurFade delay={D * 7}>
        <div className="flex flex-col gap-3 border rounded-xl p-6 bg-muted/30">
          <h2 className="text-xl font-bold">Custom Figma Plugins</h2>
          <div className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <p>To finally close the eternal design-dev gap, I built three custom Figma plugins:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong className="text-foreground">JSON Token Exporter</strong> — exports tokens in the exact format developers needed, eliminating manual handoff errors.</li>
              <li><strong className="text-foreground">Built-in Status Tracker</strong> — tracks component and screen status directly inside Figma files.</li>
              <li><strong className="text-foreground">&quot;Design Linter&quot;</strong> — automatically audits components and semantic properties for consistency.</li>
            </ul>
            <p>I also ran internal workshops to teach the wider team how to work with the design system and documentation properly.</p>
          </div>
        </div>
      </BlurFade>

      {/* Key Outcomes */}
      <BlurFade delay={D * 8}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Key Outcomes</h2>
          <ul className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <li><strong className="text-foreground">On-time Delivery:</strong> Turned a project that was up to 3 months behind into on-time delivery. The Retail Banking module went live exactly on schedule, and we immediately moved on to Corporate Banking.</li>
            <li><strong className="text-foreground">Operator Comfort:</strong> Made the interface noticeably easier and less tiring for 8-10 hour shifts: larger typography, smart whitespace, and contrast boosted to WCAG AA 4.5:1 — all while keeping every critical piece of data visible.</li>
            <li><strong className="text-foreground">Automation:</strong> Plugins eliminated manual handoff errors and saved hours every week for both designers and developers.</li>
            <li><strong className="text-foreground">Data-driven:</strong> Set up full UI telemetry and event tracking before beta so we could hit the ground running with data-driven iterations.</li>
          </ul>
        </div>
      </BlurFade>

      {/* Conclusion */}
      <BlurFade delay={D * 9}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed">
            In one year I helped transform a delayed, fragmented effort into a clean, modern, and genuinely usable unified frontend system. I didn&apos;t just draw screens — I built the processes, tools, and design foundation that keep delivering value long after I move on. Bank operators finally got a single workspace that respects their reality and makes their daily work noticeably better.
          </p>
        </div>
      </BlurFade>

      {/* Navigation */}
      <BlurFade delay={D * 10}>
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
