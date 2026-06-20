import { skills } from "@/lib/data";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="03 — Stack" title="Tools I work with.">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted">
              {group.label}
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-subtle px-3 py-1 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
