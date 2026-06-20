import { projects } from "@/lib/data";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section id="projects" eyebrow="02 — Work" title="Selected projects.">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
