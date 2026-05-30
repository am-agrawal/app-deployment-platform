import Link from "next/link";

import { CTA } from "@/constants/landing";

export default function CtaBand() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {CTA.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted">{CTA.subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={CTA.primaryCta.href}
            className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto"
          >
            {CTA.primaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
