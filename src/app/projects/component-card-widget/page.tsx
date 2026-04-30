import { Metadata } from "next";
import { componentCardCase } from "../tooling-cases";
import { ToolingCasePage } from "../tooling-case-page";

export const metadata: Metadata = {
  title: "ComponentCard Widget Case Study",
};

export default function ComponentCardWidgetPage() {
  return <ToolingCasePage project={componentCardCase} />;
}
