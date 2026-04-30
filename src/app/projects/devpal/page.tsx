import { Metadata } from "next";
import { devPalCase } from "../tooling-cases";
import { ToolingCasePage } from "../tooling-case-page";

export const metadata: Metadata = {
  title: "DevPal Case Study",
};

export default function DevPalPage() {
  return <ToolingCasePage project={devPalCase} />;
}
