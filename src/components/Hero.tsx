export function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div style={{ maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
        <p className="text-vault-cyan text-xs font-[family-name:var(--font-mono)] tracking-widest uppercase mb-5">
          // the stories, the collections, the nostalgia
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-headline)] leading-[1.1] tracking-tight">
          <span className="text-vault-text">The Toys You</span>
          <br />
          <span className="text-vault-amber">Grew Up With</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-vault-text-secondary leading-relaxed" style={{ maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
          The stories, the collections, the nostalgia.
        </p>
      </div>
    </section>
  );
}
