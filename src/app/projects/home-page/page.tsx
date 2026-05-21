import { LightboxImage } from "@/components/ui/lightbox";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page Redesign Case Study",
};

const D = 0.04;

export default function HomePageProject() {
  return (
    <article className="flex flex-col gap-12">
      {/* Hero */}
      <BlurFade delay={D}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">UX Research</Badge>
            <Badge variant="secondary">Prototyping</Badge>
            <Badge variant="secondary">Data Analysis</Badge>
            <Badge variant="secondary">A/B Testing</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Redesign of the App&apos;s Home Page
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Reframing a banking home screen from a payment entry point into a daily financial workspace.
          </p>
        </div>
      </BlurFade>

      {/* Overview */}
      <BlurFade delay={D * 2}>
        <div className="grid gap-4 text-sm sm:grid-cols-3">
          <div>
            <p className="text-muted-foreground">Role</p>
            <p className="font-medium">Senior Product Designer</p>
          </div>
          <div>
            <p className="text-muted-foreground">Duration</p>
            <p className="font-medium">6 months</p>
          </div>
          <div>
            <p className="text-muted-foreground">Company</p>
            <p className="font-medium">Anorbank</p>
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
              <li>The old home page could process payments, but it did not feel like a <strong className="case-keyword">daily banking hub</strong>.</li>
              <li>I compared <strong className="case-keyword">12 local banking and payment apps</strong>, tested prototypes with real users, and iterated through feedback.</li>
              <li>The redesign focused on <strong className="case-keyword">priority zones, thumb-reachable actions, product status, cashback, search, and card context</strong>.</li>
            </ul>
          </div>
          <div className="grid gap-3">
            <div>
              <p className="text-lg font-semibold leading-none">12 apps</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Local competitor and pattern analysis.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold leading-none">3 rounds</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Prototype testing and design iteration.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold leading-none">5 sections</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Main app areas redesigned within the broader effort.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Challenge */}
      <BlurFade delay={D * 4}>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Starting point
          </p>
          <h2 className="text-xl font-bold">The home page had to earn daily attention</h2>
          <p className="text-muted-foreground leading-relaxed">
            The existing screen was outdated and too narrow in its role. It helped users make payments, but the product ambition was bigger: make the app useful enough to open every day for balances, products, cashback, actions, and financial tasks.
          </p>
        </div>
      </BlurFade>

      {/* Objectives */}
      <BlurFade delay={D * 5}>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Direction
          </p>
          <h2 className="text-xl font-bold">I prioritized what users need before they search</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li>Redesign the home page to enhance user experience and functionality.</li>
            <li>Conduct a thorough analysis of 12 payment and banking apps in Uzbekistan.</li>
            <li>Complete the redesign of 5 main sections of the app within six months.</li>
            <li>Prioritize and iterate the home page design based on user feedback and testing.</li>
          </ul>
        </div>
      </BlurFade>

      {/* Process */}
      <BlurFade delay={D * 6}>
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Process
          </p>
          <h2 className="text-xl font-bold">Research filtered the useful patterns from the fashionable ones</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">1. Research and Analysis</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Analyzed 12 local payment and banking applications.</li>
                <li>Identified key strengths and weaknesses of each interface.</li>
                <li>Conducted user research to understand the needs and pain points of current users.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">2. Design and Iteration</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Developed initial design concepts, focusing on improving functionality and modernizing the look.</li>
                <li>Conducted three rounds of user testing, gathering feedback on each iteration.</li>
                <li>Made adjustments based on user feedback, focusing on usability and ease of navigation.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">3. User Testing and Feedback</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Collaborated with the bank&apos;s customer service office to test prototypes with actual users.</li>
                <li>Conducted in-depth testing sessions, observing user interactions and collecting qualitative data.</li>
                <li>Incorporated feedback into three iterations of design changes.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">4. Implementation and Prioritization</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Prioritized zones for easy access, highlighting important system messages.</li>
                <li>Placed customizable action lists within easy reach of the user&apos;s thumb.</li>
                <li>Emphasized blocks for product status, cashback information, and installment offers.</li>
                <li>Implemented a prominent banner on larger phones for new products and promotions.</li>
              </ul>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Process image */}
      <BlurFade delay={D * 7}>
        <LightboxImage src="/projects/hp-process.png" alt="Design process" className="" />
      </BlurFade>

      {/* Key Features */}
      <BlurFade delay={D * 8}>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Product decisions
          </p>
          <h2 className="text-xl font-bold">The screen became easier to scan and act on</h2>
          <ul className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <li><strong className="case-keyword">Priority Zones:</strong> Key areas were placed for convenient access, such as product status and cashback blocks.</li>
            <li><strong className="case-keyword">Customizable Actions:</strong> The action list is easily reachable, enhancing user convenience.</li>
            <li><strong className="case-keyword">Enhanced Navigation:</strong> Improved navigation to include a central search tool as the primary navigation method.</li>
            <li><strong className="case-keyword">Product Promotions:</strong> Banners for new products and promotions are prominently displayed.</li>
            <li><strong className="case-keyword">Integrated Card Info:</strong> Moved card information closer to the balance display, highlighting card management.</li>
          </ul>
        </div>
      </BlurFade>

      {/* Feature images */}
      <BlurFade delay={D * 9}>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <LightboxImage src="/projects/hp-features-phone1.png" alt="Home page phone 1" className="" />
            <LightboxImage src="/projects/hp-features-phone2.png" alt="Home page phone 2" className="" />
          </div>
        </div>
      </BlurFade>

      {/* Conclusion */}
      <BlurFade delay={D * 10}>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Outcome
          </p>
          <h2 className="text-xl font-bold">The redesign made the home screen useful beyond payments</h2>
          <p className="text-muted-foreground leading-relaxed">
            The redesign gave the app a clearer daily role: users could see what matters, reach common actions faster, and understand product context without hunting through separate sections. The work was grounded in local market research, prototype testing, and practical mobile ergonomics.
          </p>
        </div>
      </BlurFade>

      {/* Navigation */}
      <BlurFade delay={D * 11}>
        <div className="flex justify-between items-center pt-4 border-t">
          <Link href="/projects/design-system" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            &larr; Design System
          </Link>
          <Link href="/projects/payment-groups" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Payment Groups &rarr;
          </Link>
        </div>
      </BlurFade>
    </article>
  );
}
