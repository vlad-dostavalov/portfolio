import { LightboxImage } from "@/components/ui/lightbox";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Image Generation System Case Study",
};

const D = 0.04;

export default function AIImageGenerationPage() {
  return (
    <article className="flex flex-col gap-12">
      {/* Hero */}
      <BlurFade delay={D}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">AI/ML</Badge>
            <Badge variant="secondary">ComfyUI</Badge>
            <Badge variant="secondary">Figma Plugin</Badge>
            <Badge variant="secondary">Flux 1.0</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            AI-Powered Image Generation System
          </h1>
        </div>
      </BlurFade>

      {/* Overview */}
      <BlurFade delay={D * 2}>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Role</p>
            <p className="font-medium">Lead UX/UI Product Designer</p>
          </div>
          <div>
            <p className="text-muted-foreground">Duration</p>
            <p className="font-medium">8 months</p>
          </div>
          <div>
            <p className="text-muted-foreground">Company</p>
            <p className="font-medium">Click</p>
          </div>
        </div>
      </BlurFade>

      {/* Challenge */}
      <BlurFade delay={D * 3}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Challenge</h2>
          <p className="text-muted-foreground leading-relaxed">
            When I joined the team, our company was spending a fortune on frequent photo shoots for marketing materials, UI elements, and in-app banners. Not only was this costly and time-consuming, but it also led to inconsistencies in style and brand representation. We needed a smarter, more efficient way to create high-quality, brand-consistent images that could represent realistic Uzbek facial features — all while keeping data secure within our local environment.
          </p>
        </div>
      </BlurFade>

      {/* Objectives */}
      <BlurFade delay={D * 4}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Objectives</h2>
          <ul className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <li><strong className="text-foreground">Cost Reduction:</strong> Eliminate the need for expensive photo sessions.</li>
            <li><strong className="text-foreground">Brand Consistency:</strong> Ensure all images adhere to brand guidelines regarding poses, emotions, compositions, and colors.</li>
            <li><strong className="text-foreground">Cultural Representation:</strong> Produce images with realistic and recognizable Uzbek facial features.</li>
            <li><strong className="text-foreground">Security Compliance:</strong> Develop a solution that runs locally to safeguard data.</li>
            <li><strong className="text-foreground">User Accessibility:</strong> Create an intuitive interface for team members with varying technical backgrounds.</li>
          </ul>
        </div>
      </BlurFade>

      {/* Process */}
      <BlurFade delay={D * 5}>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Process</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">1. Research and Model Selection</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Explored various AI models and tools, ultimately selecting Flux 1.0 for its superior image quality.</li>
                <li>Chose ComfyUI as the interface to build our custom workflow.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">2. Prototype Development</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Developed a test workflow using the SDXL RealiVis 5.0 model due to initial hardware limitations.</li>
                <li>Integrated nested ControlNets (depth, pose, and canny) for precise control over image generation.</li>
                <li>Implemented face detailing and swapping techniques using IPAdapter to maintain facial consistency.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">3. Securing Resources</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Generated sample images and presented them to the executive team.</li>
                <li>Secured budget for a high-performance local workstation based on positive feedback.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">4. Full Implementation</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Upgraded to the Flux 1.0 model with the new hardware.</li>
                <li>Added advanced features like Object Separation and Direct Color Control.</li>
                <li>Developed a custom Figma Plugin for seamless integration.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">5. Enhancing User Experience</h3>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm">
                <li>Created a user-friendly interface within Figma for easy access.</li>
                <li>Set up secure protocols for remote use.</li>
                <li>Enabled sharing of presets and workflows for team consistency.</li>
              </ul>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Impact */}
      <BlurFade delay={D * 6}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Impact</h2>
          <ul className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <li><strong className="text-foreground">Cost Savings:</strong> Reduced expenses by eliminating the need for regular photo shoots.</li>
            <li><strong className="text-foreground">Brand Consistency:</strong> Achieved a uniform look across all marketing and UI materials.</li>
            <li><strong className="text-foreground">Efficiency Boost:</strong> Accelerated the image creation process, reducing turnaround time from weeks to hours.</li>
            <li><strong className="text-foreground">Empowered Team:</strong> Designers and marketers could now generate custom images effortlessly within Figma.</li>
            <li><strong className="text-foreground">Cultural Representation:</strong> Successfully produced images featuring realistic Uzbek facial features.</li>
          </ul>
        </div>
      </BlurFade>

      {/* Case Highlight */}
      <BlurFade delay={D * 7}>
        <div className="flex flex-col gap-3 border rounded-xl p-6 bg-muted/30">
          <h2 className="text-xl font-bold">Case Highlight: Custom Figma Plugin Integration</h2>
          <div className="text-muted-foreground leading-relaxed space-y-3 text-sm">
            <p><strong className="text-foreground">Problem:</strong> Designers needed a seamless way to generate and integrate AI-produced images without juggling multiple tools.</p>
            <p><strong className="text-foreground">Solution:</strong> Developed a private Figma plugin acting as a bridge between designers and the AI image generation server. The plugin features an intuitive UI where designers can specify poses, emotions, compositions, and colors. Images are generated and inserted directly into Figma projects.</p>
            <p><strong className="text-foreground">Outcome:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong className="text-foreground">Increased Productivity:</strong> Designers saved time by staying within one tool.</li>
              <li><strong className="text-foreground">Consistency:</strong> Ensured all team members used the same parameters.</li>
              <li><strong className="text-foreground">Ease of Use:</strong> Reduced the learning curve for non-technical staff.</li>
            </ul>
          </div>
        </div>
      </BlurFade>

      {/* Conclusion */}
      <BlurFade delay={D * 8}>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">Conclusion</h2>
          <p className="text-muted-foreground leading-relaxed">
            This project has been a thrilling journey that perfectly blends my passion for design and technology. By harnessing the power of AI, we&apos;ve revolutionized our content creation process, saving time and resources while enhancing brand consistency.
          </p>
        </div>
      </BlurFade>

      {/* Navigation */}
      <BlurFade delay={D * 9}>
        <div className="flex justify-between items-center pt-4 border-t">
          <Link href="/projects/get-art" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            &larr; GET.ART
          </Link>
          <Link href="/#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            All Projects &rarr;
          </Link>
        </div>
      </BlurFade>
    </article>
  );
}
