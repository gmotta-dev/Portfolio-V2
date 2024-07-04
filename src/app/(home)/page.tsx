import { buildMetadata } from "@/util/buidMetadata";
import * as Section from "./pageResouces/sections/sectionsExports";

export const metadata = buildMetadata({
  title: "Portfolio | Gabriel Motta - Full Stack Web Dev",
  description:
    "I'm Gabriel Motta, a Full Stack Web Developer. And I'm dedicated to creating exceptional web experiences with clean and minimalistic user interfaces that look great and function seamlessly.",
});

export default function Home() {
  return (
    <main>
      <Section.AboutMe />
      <Section.Skills />
      <Section.Projects />
    </main>
  );
}
