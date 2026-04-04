export function Newsletter() {
  return (
    <section className="py-16 md:py-20">
      <div className="rounded-xl border border-vault-border bg-vault-bg-secondary p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-vault-amber" />
        <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-headline)] text-vault-text mb-3">
          Follow the Vault
        </h3>
        <p className="text-vault-text-secondary text-sm md:text-base mb-6 max-w-md mx-auto">
          New videos every day. Toy history, price guides, and stories from the
          golden age of action figures.
        </p>
        <a
          href="https://tiktok.com/@90stoyvault"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3.5 bg-vault-amber text-vault-bg font-semibold text-sm font-[family-name:var(--font-headline)] rounded-lg hover:opacity-90 transition-opacity"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.76a8.28 8.28 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.17z" />
          </svg>
          @90stoyvault on TikTok
        </a>
      </div>
    </section>
  );
}
