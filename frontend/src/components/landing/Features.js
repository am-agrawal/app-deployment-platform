import { FEATURES, FEATURES_HEADING } from "@/constants/landing";
import { FEATURE_ICONS } from "@/components/icons";

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {FEATURES_HEADING.title}
        </h2>
        <p className="mt-4 text-base text-muted">{FEATURES_HEADING.subtitle}</p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon, title, description }) => {
          const Icon = FEATURE_ICONS[icon];
          return (
            <div
              key={title}
              className="group bg-background p-6 transition-colors hover:bg-surface"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground">
                {Icon ? <Icon className="h-6 w-6" /> : null}
              </div>
              <h3 className="mt-5 text-base font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
