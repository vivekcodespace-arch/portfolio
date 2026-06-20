"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import { GithubIcon } from "./BrandIcons";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_-12px_rgba(255,255,255,0.05)] sm:p-8"
    >
      <div className="absolute right-6 top-6 flex items-center gap-2 opacity-60 transition-opacity group-hover:opacity-100">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-bg/50 transition-colors hover:bg-subtle"
          >
            <GithubIcon className="h-3.5 w-3.5" />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} Live`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-bg/50 transition-colors hover:bg-subtle"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      <div>
        <div className="mb-2 font-mono text-xs text-muted">
          0{index + 1} / Project
        </div>
        <h3 className="text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <div className="mt-1 text-sm text-accent">{project.highlight}</div>
      </div>

      <p className="text-[15px] leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-bg/50 px-2.5 py-1 text-xs text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
