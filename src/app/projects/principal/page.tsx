import { Metadata } from "next";
import { principalCase } from "../tooling-cases";
import { ToolingCasePage } from "../tooling-case-page";

export const metadata: Metadata = {
  title: "Principal Case Study",
};

export default function PrincipalPage() {
  return <ToolingCasePage project={principalCase} />;
}
