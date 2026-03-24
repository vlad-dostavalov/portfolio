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
        </div>
      </BlurFade>

      {/* Overview */}
      <BlurFade delay={D * 2}>
        <div className="grid grid-cols-3 gap-4 text-sm">
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

      {/* Challenge */}
      <BlurFade delay={D * 3}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Challenge</h2>
          <p className="text-muted-foreground leading-relaxed">
            The existing home page of the application was outdated and required functional improvements. The goal was to transform the app from a simple payment platform into a daily-use app that allows users to manage all their financial tasks conveniently.
          </p>
        </div>
      </BlurFade>

      {/* Objectives */}
      <BlurFade delay={D * 4}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Objectives</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li>Redesign the home page to enhance user experience and functionality.</li>
            <li>Conduct a thorough analysis of 12 payment and banking apps in Uzbekistan.</li>
            <li>Complete the redesign of 5 main sections of the app within six months.</li>
            <li>Prioritize and iterate the home page design based on user feedback and testing.</li>
          </ul>
        </div>
      </BlurFade>

      {/* Process */}
      <BlurFade delay={D * 5}>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Process</h2>
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
      <BlurFade delay={D * 6}>
        <LightboxImage src="/projects/hp-process.png" alt="Design process" className="" />
      </BlurFade>

      {/* Key Features */}
      <BlurFade delay={D * 7}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Key Features of the Redesigned Home Page</h2>
          <ul className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <li><strong className="text-foreground">Priority Zones:</strong> Key areas were placed for convenient access, such as product status and cashback blocks.</li>
            <li><strong className="text-foreground">Customizable Actions:</strong> The action list is easily reachable, enhancing user convenience.</li>
            <li><strong className="text-foreground">Enhanced Navigation:</strong> Improved navigation to include a central search tool as the primary navigation method.</li>
            <li><strong className="text-foreground">Product Promotions:</strong> Banners for new products and promotions are prominently displayed.</li>
            <li><strong className="text-foreground">Integrated Card Info:</strong> Moved card information closer to the balance display, highlighting card management.</li>
          </ul>
        </div>
      </BlurFade>

      {/* Feature images */}
      <BlurFade delay={D * 8}>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <LightboxImage src="/projects/hp-features-phone1.png" alt="Home page phone 1" className="" />
            <LightboxImage src="/projects/hp-features-phone2.png" alt="Home page phone 2" className="" />
          </div>
        </div>
      </BlurFade>

      {/* Conclusion */}
      <BlurFade delay={D * 9}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed">
            The redesigned home page successfully transformed the application into a more functional and user-friendly daily-use app. The iterative design process, grounded in thorough research and user feedback, ensured that the final product met user needs and exceeded expectations. The redesign led to significant improvements in user engagement, satisfaction, and overall app usability.
          </p>
        </div>
      </BlurFade>

      {/* Navigation */}
      <BlurFade delay={D * 10}>
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
