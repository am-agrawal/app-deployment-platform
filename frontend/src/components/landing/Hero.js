import Link from "next/link";

import { HERO } from "@/constants/landing";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,color-mix(in_srgb,var(--color-foreground)_12%,transparent),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,var(--color-foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-foreground)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <Link
          href={HERO.badgeHref}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted transition-colors hover:text-foreground"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
          {HERO.badge}
        </Link>

        <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          {HERO.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
          {HERO.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={HERO.primaryCta.href}
            className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto"
          >
            {HERO.primaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
