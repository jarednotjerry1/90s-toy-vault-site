export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-vault-cyan text-sm font-[family-name:var(--font-mono)] tracking-wider mb-6">
          // every toy has a story
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-headline)] leading-[1.1] tracking-tight">
          <span className="text-vault-text">The Toy Aisle</span>
          <br />
          <span className="text-vault-amber">Time Machine</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-vault-text-secondary max-w-2xl mx-auto leading-relaxed">
          Deep dives, price guides, and stories from the golden age of action
          figures. Welcome to the vault.
        </p>
      </div>
    </section>
  );
}
