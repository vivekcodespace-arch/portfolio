import { ArrowUpRight, Mail } from "lucide-react";
import { profile, socials } from "@/lib/data";
import { Section } from "./Section";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./BrandIcons";

export function Contact() {
  return (
    <Section id="contact" eyebrow="04 — Contact" title="Let's build something.">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m open to internships, freelance work, and interesting
            collaborations. The fastest way to reach me is email — I usually
            reply within a day.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-8 inline-flex items-center gap-3 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            <Mail className="h-6 w-6 text-accent" />
            <span className="border-b border-transparent transition-colors group-hover:border-fg">
              {profile.email}
            </span>
            <ArrowUpRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <div className="mt-6 text-sm text-muted">{profile.phone}</div>
        </div>

        <div className="flex flex-col gap-3">
          {[
            { href: socials.github, label: "GitHub", icon: GithubIcon, handle: "@viveksharma" },
            { href: socials.linkedin, label: "LinkedIn", icon: LinkedinIcon, handle: "in/viveksharma" },
            { href: socials.leetcode, label: "LeetCode", icon: LeetcodeIcon, handle: "400+ solved" },
          ].map(({ href, label, icon: Icon, handle }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:bg-subtle"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-4 w-4 text-muted" />
                <div>
                  <div className="text-sm font-medium">{label}</div>
                  <div className="text-xs text-muted">{handle}</div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
