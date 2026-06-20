import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 text-sm text-muted sm:flex-row sm:items-center">
        <div>© {year} {profile.name}. All rights reserved.</div>
        <div className="font-mono text-xs">
          Built with Next.js · Tailwind · Framer Motion
        </div>
      </div>
    </footer>
  );
}
