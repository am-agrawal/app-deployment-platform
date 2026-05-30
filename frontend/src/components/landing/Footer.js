import Link from "next/link";

import { BRAND, FOOTER_COLUMNS, FOOTER_NOTE } from "@/constants/landing";
import { BrandLogo } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-semibold tracking-tight">
              <BrandLogo size={20} />
              <span>{BRAND.name}</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted">{BRAND.tagline}</p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-medium text-foreground">{column.heading}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted">{FOOTER_NOTE}</p>
        </div>
      </div>
    </footer>
  );
}
