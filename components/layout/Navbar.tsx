"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { type MouseEvent, useState } from "react";
import { navItems, profile } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMobileNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);
    window.history.pushState(null, "", href);
    requestAnimationFrame(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }));
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-portfolio-line/50 bg-portfolio-bg/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          className="animate-fade-in font-mono text-xl font-bold text-portfolio-accent"
          href="#hero"
          onClick={() => setOpen(false)}
        >
          {profile.initials}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              className="nav-link text-sm text-portfolio-muted transition-colors hover:text-portfolio-accent"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="text-portfolio-accent md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <div className="flex flex-col gap-3 px-6 pb-4 md:hidden">
          {navItems.map((item) => (
            <Link
              className="text-sm text-portfolio-muted transition-colors hover:text-portfolio-accent"
              href={item.href}
              key={item.href}
              onClick={(event) => handleMobileNavigation(event, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
