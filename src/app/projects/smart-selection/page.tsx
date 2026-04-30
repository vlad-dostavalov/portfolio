import { Metadata } from "next";
import { smartSelectionCase } from "../tooling-cases";
import { ToolingCasePage } from "../tooling-case-page";

export const metadata: Metadata = {
  title: "Smart Selection Case Study",
};

export default function SmartSelectionPage() {
  return <ToolingCasePage project={smartSelectionCase} />;
}
