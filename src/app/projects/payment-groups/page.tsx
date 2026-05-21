import { LightboxImage } from "@/components/ui/lightbox";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Groups Case Study",
};

const D = 0.04;

export default function PaymentGroupsPage() {
  return (
    <article className="flex flex-col gap-12">
      {/* Hero */}
      <BlurFade delay={D}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">UX Design</Badge>
            <Badge variant="secondary">Prototyping</Badge>
            <Badge variant="secondary">User Testing</Badge>
            <Badge variant="secondary">Figma</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Payment Groups
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Designing a way for users to manage recurring household and service payments as one controlled flow instead of many separate transactions.
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
            <p className="font-medium">Ongoing</p>
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
              <li>The existing “My Home” feature was a saved-payment list, not a tool for <strong className="case-keyword">managing recurring obligations</strong>.</li>
              <li>I turned it into a structured flow with <strong className="case-keyword">templates, editable amounts, selective payment, and multi-transaction receipts</strong>.</li>
              <li>The harder design work was keeping the flow flexible while making it feel safe for money movement.</li>
            </ul>
          </div>
          <div className="grid gap-3">
            <div>
              <p className="text-lg font-semibold leading-none">Templates</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Faster setup for common payment groups.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold leading-none">Selective pay</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Users can pay all or only part of a group.
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold leading-none">New receipt type</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Clear confirmation for multiple transactions.
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
          <h2 className="text-xl font-bold">Regular payments were too repetitive for a one-by-one flow</h2>
          <p className="text-muted-foreground leading-relaxed">
            Users had recurring payments such as utilities, car expenses, subscriptions, and other regular services. The old “My Home” flow stored payment shortcuts, but it did not help users organize, review, edit, and pay a group with confidence.
          </p>
        </div>
      </BlurFade>

      {/* Objectives */}
      <BlurFade delay={D * 5}>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Direction
          </p>
          <h2 className="text-xl font-bold">The flow had to be flexible without feeling risky</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li>Integrate &quot;My Home&quot; into the &quot;Payment Groups&quot; feature as a template.</li>
            <li>Facilitate easy setup of payment groups using templates with relevant transactions.</li>
            <li>Enhance navigation through categories and improve the search function.</li>
            <li>Enable flexible multiple payments, allowing users to pay all or selected transactions.</li>
            <li>Provide easy editing of payment amounts.</li>
            <li>Develop a separate receipt type for multiple transactions.</li>
          </ul>
        </div>
      </BlurFade>

      {/* Overview images */}
      <BlurFade delay={D * 6}>
        <div className="grid grid-cols-3 gap-4">
          <LightboxImage src="/projects/pg-overview-phone1.png" alt="Payment groups phone 1" className="" />
          <LightboxImage src="/projects/pg-overview-phone2.png" alt="Payment groups phone 2" className="" />
        </div>
      </BlurFade>

      {/* Process */}
      <BlurFade delay={D * 7}>
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Process
          </p>
          <h2 className="text-xl font-bold">I designed the money flow around review and control</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">1. Feature Integration</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Integrated &quot;My Home&quot; into &quot;Payment Groups&quot; as one of the templates.</li>
                <li>Developed templates to assist users in setting up payment groups with relevant transactions.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">2. Design and Development</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Enhanced the navigation and search functionality to improve user experience.</li>
                <li>Implemented flexible multiple payment options.</li>
                <li>Added features for editing payment amounts and developed a separate receipt type.</li>
                <li>Created a comprehensive set of design system components covering various scenarios.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">3. User Testing and Iteration</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Conducted extensive testing, including corridor studies and real-user testing.</li>
                <li>Iteratively refined the design based on feedback.</li>
                <li>Achieved minimal user resistance in the latest rounds of testing.</li>
              </ul>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Process images */}
      <BlurFade delay={D * 8}>
        <div className="grid grid-cols-2 gap-4">
          <LightboxImage src="/projects/pg-process-section1.png" alt="Process section 1" className="" />
          <LightboxImage src="/projects/pg-process-section2.png" alt="Process section 2" className="" />
        </div>
      </BlurFade>

      {/* Key Features */}
      <BlurFade delay={D * 9}>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Product decisions
          </p>
          <h2 className="text-xl font-bold">The feature became a payment workspace, not just a list</h2>
          <ul className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <li><strong className="case-keyword">Integrated Templates:</strong> &quot;My Home&quot; became part of the &quot;Payment Groups&quot; feature, offering templates for easy setup.</li>
            <li><strong className="case-keyword">Flexible Payments:</strong> Users can pay all or selected transactions within a group.</li>
            <li><strong className="case-keyword">Editable Payment Amounts:</strong> Users can easily edit payment amounts for each transaction.</li>
            <li><strong className="case-keyword">Multiple Transaction Receipts:</strong> Developed a new receipt type for multiple transactions.</li>
            <li><strong className="case-keyword">Future Enhancements:</strong> Planned features include automatic recurring payments and fund reservation.</li>
          </ul>
        </div>
      </BlurFade>

      {/* Feature images */}
      <BlurFade delay={D * 10}>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4 gap-4">
            <LightboxImage src="/projects/pg-features-phone1.png" alt="Feature phone 1" className="" />
            <LightboxImage src="/projects/pg-features-phone2.png" alt="Feature phone 2" className="" />
            <LightboxImage src="/projects/pg-features-phone3.png" alt="Feature phone 3" className="" />
            <LightboxImage src="/projects/pg-features-phone4.png" alt="Feature phone 4" className="" />
          </div>
        </div>
      </BlurFade>

      {/* Conclusion */}
      <BlurFade delay={D * 11}>
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Outcome
          </p>
          <h2 className="text-xl font-bold">The flow made recurring payments easier to prepare and trust</h2>
          <p className="text-muted-foreground leading-relaxed">
            Payment Groups gave users a clearer way to set up recurring obligations, review details, adjust amounts, and pay multiple services without losing control. Testing helped refine the flow until resistance dropped and the feature felt closer to everyday financial behavior.
          </p>
        </div>
      </BlurFade>

      {/* Navigation */}
      <BlurFade delay={D * 12}>
        <div className="flex justify-between items-center pt-4 border-t">
          <Link href="/projects/home-page" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            &larr; Home Page Redesign
          </Link>
          <Link href="/projects/get-art" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            GET.ART &rarr;
          </Link>
        </div>
      </BlurFade>
    </article>
  );
}
