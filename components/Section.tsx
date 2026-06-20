"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className }: Props) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-24 sm:py-28", className)}>
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title) && (
          <motion.div
            initial={{ y: 12 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-12 max-w-2xl"
          >
            {eyebrow && (
              <div className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                <span className="h-px w-8 bg-border" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
