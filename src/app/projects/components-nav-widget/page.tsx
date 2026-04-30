import { Metadata } from "next";
import { componentsNavCase } from "../tooling-cases";
import { ToolingCasePage } from "../tooling-case-page";

export const metadata: Metadata = {
  title: "ComponentsNav Widget Case Study",
};

export default function ComponentsNavWidgetPage() {
  return <ToolingCasePage project={componentsNavCase} />;
}
