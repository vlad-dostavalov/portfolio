import { LightboxImage } from "@/components/ui/lightbox";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GET.ART Case Study",
};

const D = 0.04;

export default function GetArtPage() {
  return (
    <article className="flex flex-col gap-12">
      {/* Hero */}
      <BlurFade delay={D}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">UI/UX Design</Badge>
            <Badge variant="secondary">Design System</Badge>
            <Badge variant="secondary">Web Platform</Badge>
            <Badge variant="secondary">Figma</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            GET.ART Domain Marketplace
          </h1>
        </div>
      </BlurFade>

      {/* Overview */}
      <BlurFade delay={D * 2}>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Role</p>
            <p className="font-medium">Lead Product Designer</p>
          </div>
          <div>
            <p className="text-muted-foreground">Duration</p>
            <p className="font-medium">4 months</p>
          </div>
          <div>
            <p className="text-muted-foreground">Company</p>
            <p className="font-medium">UKCI Domains (.ART)</p>
          </div>
        </div>
      </BlurFade>

      {/* Challenge */}
      <BlurFade delay={D * 3}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Challenge</h2>
          <p className="text-muted-foreground leading-relaxed">
            Get.Art aims to become a digital hub for contemporary artists and collectors. The challenge was to create a platform that provides seamless interaction between artists, galleries, and collectors, emphasizing art discovery, purchase, and artist support.
          </p>
        </div>
      </BlurFade>

      {/* Objectives */}
      <BlurFade delay={D * 4}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Objectives</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li>Develop a visually appealing and user-friendly interface tailored to art enthusiasts.</li>
            <li>Facilitate direct communication between artists and collectors.</li>
            <li>Enable efficient browsing and categorization of art pieces.</li>
            <li>Ensure platform scalability for future features such as auction events and VR exhibitions.</li>
          </ul>
        </div>
      </BlurFade>

      {/* Service pages */}
      <BlurFade delay={D * 5}>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <LightboxImage src="/projects/get-art-page1.jpg" alt="Client area" className="" />
              <p className="text-xs text-muted-foreground text-center">Client&apos;s area, domain management</p>
            </div>
            <div className="flex flex-col gap-2">
              <LightboxImage src="/projects/get-art-page2.jpg" alt="Category page" className="" />
              <p className="text-xs text-muted-foreground text-center">Reserved domain names&apos; category</p>
            </div>
            <div className="flex flex-col gap-2">
              <LightboxImage src="/projects/get-art-page3.jpg" alt="Portfolio builder" className="" />
              <p className="text-xs text-muted-foreground text-center">Simple portfolio website builder</p>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Process */}
      <BlurFade delay={D * 6}>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Process</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">1. Research and Discovery</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Conducted interviews with artists and collectors to understand their needs.</li>
                <li>Analyzed successful art marketplaces to gather insights on effective features.</li>
                <li>Collaborated with artists to co-create and prioritize feature lists.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">2. Design and Iteration</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Created initial wireframes focusing on a clean and engaging visual style.</li>
                <li>Developed high-fidelity prototypes, showcasing artwork prominently.</li>
                <li>Ran usability tests with target users, iterating based on feedback.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">3. User Testing and Feedback</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Collaborated with early adopters, gaining qualitative feedback.</li>
                <li>Refined interaction pathways for a smooth purchase experience.</li>
                <li>Incorporated suggestions for artist profiles and saved favorites.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">4. Implementation</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Created an intuitive browsing experience with filter options like style, medium, and price.</li>
                <li>Implemented a direct messaging feature for collector-artist communication.</li>
                <li>Designed a modular platform allowing future additions such as auctions and virtual exhibitions.</li>
              </ul>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Design system elements */}
      <BlurFade delay={D * 7}>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            <LightboxImage src="/projects/Icons 12.png" alt="Icons 12px" className="" />
            <LightboxImage src="/projects/Icons 24.png" alt="Icons 24px" className="" />
            <LightboxImage src="/projects/Icons 32.png" alt="Icons 32px" className="" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <LightboxImage src="/projects/atoms.png" alt="Atomic elements" className="" />
            <LightboxImage src="/projects/Buttons.png" alt="Button components" className="" />
          </div>
        </div>
      </BlurFade>

      {/* Before/After comparison */}
      <BlurFade delay={D * 8}>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Before & After</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-center">Old page</p>
              <LightboxImage src="/projects/old-page.jpg" alt="Old page design" className="" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-center">New page</p>
              <LightboxImage src="/projects/new-page.jpg" alt="New page design" className="" />
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Key Features */}
      <BlurFade delay={D * 9}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Key Features</h2>
          <ul className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <li><strong className="text-foreground">Seamless Art Discovery:</strong> Customizable filters that help users easily find pieces they are passionate about.</li>
            <li><strong className="text-foreground">Direct Messaging:</strong> Enables collectors to directly communicate with artists.</li>
            <li><strong className="text-foreground">Detailed Artist Profiles:</strong> Profiles include artist statements, exhibition history, and works.</li>
            <li><strong className="text-foreground">Curated Collections:</strong> Highlight curated galleries and featured artists.</li>
            <li><strong className="text-foreground">Favorites and Wishlist:</strong> Users can save artworks for future reference.</li>
          </ul>
        </div>
      </BlurFade>

      {/* Conclusion */}
      <BlurFade delay={D * 10}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Get.Art platform successfully brought together artists and collectors, simplifying the process of art discovery, purchasing, and communication. The platform&apos;s intuitive design and focus on user needs led to positive early feedback, setting the stage for additional feature rollouts and long-term growth.
          </p>
        </div>
      </BlurFade>

      {/* Navigation */}
      <BlurFade delay={D * 11}>
        <div className="flex justify-between items-center pt-4 border-t">
          <Link href="/projects/payment-groups" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            &larr; Payment Groups
          </Link>
          <Link href="/projects/ai-image-generation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            AI Image Generation &rarr;
          </Link>
        </div>
      </BlurFade>
    </article>
  );
}
