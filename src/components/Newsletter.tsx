export function Newsletter() {
  return (
    <section className="py-16 md:py-20">
      <div className="rounded-xl border border-vault-border bg-vault-bg-secondary p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-vault-amber" />
        <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-headline)] text-vault-text mb-3">
          Open the Vault
        </h3>
        <p className="text-vault-text-secondary text-sm md:text-base mb-6 max-w-md mx-auto">
          New deep dives and price guides. No spam, no fluff. Just the stories
          behind the toys.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 bg-vault-bg border border-vault-border rounded-lg text-vault-text text-sm font-[family-name:var(--font-body)] placeholder:text-vault-text-muted focus:outline-none focus:border-vault-amber transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-vault-amber text-vault-bg font-semibold text-sm font-[family-name:var(--font-headline)] rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
