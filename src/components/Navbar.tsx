"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Deep Dives", href: "/#articles" },
  { label: "Price Guides", href: "/#articles" },
  { label: "Videos", href: "/#videos" },
  { label: "Collecting 101", href: "/#articles" },
  { label: "About", href: "/#about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-vault-border bg-vault-bg/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-8 md:px-12 lg:px-16 py-4">
        <Link
          href="/"
          className="flex items-center gap-0 text-xl font-bold font-[family-name:var(--font-headline)] tracking-tight"
        >
          <span className="text-vault-text">90s Toy&nbsp;</span>
          <span className="text-vault-amber">Vault</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[0.8125rem] text-vault-text-secondary hover:text-vault-text transition-colors font-[family-name:var(--font-body)] tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-vault-text-secondary hover:text-vault-text"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-vault-border bg-vault-bg/98 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-vault-text-secondary hover:text-vault-text transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
