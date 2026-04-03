export function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-vault-cyan text-xs font-[family-name:var(--font-mono)] tracking-widest uppercase mb-5">
          // every toy has a story
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-headline)] leading-[1.1] tracking-tight">
          <span className="text-vault-text">The Toy Aisle</span>
          <br />
          <span className="text-vault-amber">Time Machine</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-vault-text-secondary max-w-xl mx-auto leading-relaxed">
          Deep dives, price guides, and untold stories from the golden age of
          toys. Built for the kids who grew up in it.
        </p>
      </div>
    </section>
  );
}
