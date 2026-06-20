import { GraduationCap } from "lucide-react";
import { profile, achievements } from "@/lib/data";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A short introduction.">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>{profile.bio}</p>
          <p>
            I&apos;m currently exploring how AI can quietly improve the products
            people use every day — from automating tedious workflows to
            surfacing insights that would otherwise stay buried.
          </p>
          <p>
            Outside of coursework I mentor peers in full-stack &amp; Git
            fundamentals, contribute to open-source toolboxes, and grind
            DSA problems in C++.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted">
              <GraduationCap className="h-4 w-4" />
              Education
            </div>
            <div className="font-semibold">{profile.education.degree}</div>
            <div className="mt-1 text-sm text-muted">{profile.education.school}</div>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-sm">
              <span className="text-muted">{profile.education.period}</span>
              <span className="font-medium">CGPA {profile.education.cgpa}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {achievements.map((a) => (
              <div
                key={a.label}
                className="rounded-2xl border border-border bg-card p-4 text-center"
              >
                <div className="font-serif text-2xl text-accent">{a.label}</div>
                <div className="mt-1.5 text-[11px] leading-snug text-muted">
                  {a.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
