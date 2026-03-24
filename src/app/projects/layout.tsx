import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh flex flex-col gap-8 relative">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back to portfolio
      </Link>
      {children}
    </div>
  );
}
