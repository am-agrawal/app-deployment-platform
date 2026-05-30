"use client";

import { useState } from "react";
import Link from "next/link";

import { BRAND, NAV_LINKS, NAV_ACTIONS } from "@/constants/landing";
import { BrandLogo, MenuIcon, CloseIcon } from "@/components/icons";

function Logo() {
  return (
    <Link href="#" className="flex items-center gap-2 font-semibold tracking-tight">
      <BrandLogo className="text-foreground" />
      <span className="text-lg">{BRAND.name}</span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
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

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={NAV_ACTIONS.login.href}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            {NAV_ACTIONS.login.label}
          </Link>
          <Link
            href={NAV_ACTIONS.signUp.href}
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {NAV_ACTIONS.signUp.label}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
        >
          {open ? (
            <CloseIcon className="h-[22px] w-[22px]" />
          ) : (
            <MenuIcon className="h-[22px] w-[22px]" />
          )}
        </button>
      </nav>

      {open && (
        <div className="bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2">
              <Link
                href={NAV_ACTIONS.login.href}
                onClick={() => setOpen(false)}
                className="rounded-full border border-border px-4 py-2 text-center text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                {NAV_ACTIONS.login.label}
              </Link>
              <Link
                href={NAV_ACTIONS.signUp.href}
                onClick={() => setOpen(false)}
                className="rounded-full bg-foreground px-4 py-2 text-center text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {NAV_ACTIONS.signUp.label}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
