"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-vault-cyan text-sm font-[family-name:var(--font-mono)] tracking-wider mb-4">
          // join the collectors
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-headline)]">
          <span className="text-vault-text">Open the </span>
          <span className="text-vault-amber">Vault</span>
        </h2>
        <p className="mt-4 text-vault-text-secondary leading-relaxed">
          Get deep dives, price alerts, and nostalgia drops delivered to your
          inbox. No spam, just toys.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
          }}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-vault-card border border-vault-border text-vault-text placeholder:text-vault-text-muted text-sm font-[family-name:var(--font-mono)] focus:outline-none focus:border-vault-amber transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-vault-amber text-vault-bg font-semibold text-sm font-[family-name:var(--font-headline)] hover:bg-vault-amber/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
