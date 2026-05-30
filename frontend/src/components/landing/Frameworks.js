import { FRAMEWORKS, FRAMEWORKS_HEADING } from "@/constants/landing";
import { FRAMEWORK_LOGOS } from "@/components/icons";

export default function Frameworks() {
  return (
    <section id="frameworks" className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted">{FRAMEWORKS_HEADING}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {FRAMEWORKS.map(({ name, logo }) => {
            const Logo = FRAMEWORK_LOGOS[logo];
            return (
              <div
                key={name}
                className="flex items-center gap-2 text-muted opacity-70 transition-all hover:text-foreground hover:opacity-100"
                title={name}
              >
                {Logo ? <Logo className="h-7 w-7" /> : null}
                <span className="text-sm font-medium">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
