import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | 90s Toy Vault",
  description:
    "The stories behind the toys you grew up with. 90s toys, the stories, the collections, the nostalgia.",
};

const socials = [
  { label: "TikTok", href: "https://tiktok.com/@90stoyvault", primary: true },
  { label: "YouTube", href: "https://youtube.com/@90stoyvault" },
  { label: "Instagram", href: "https://instagram.com/90stoyvault" },
  { label: "Pinterest", href: "https://pinterest.com/90stoyvault" },
  { label: "X", href: "https://x.com/90stoyvault" },
];

export default function AboutPage() {
  return (
    <article className="pt-28 pb-20">
      <div
        className="site-container"
        style={{ maxWidth: "720px" }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-vault-text-secondary hover:text-vault-text transition-colors mb-8"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M10 12L6 8l4-4" />
          </svg>
          Back to the Vault
        </Link>

        <p className="text-vault-amber text-xs font-[family-name:var(--font-mono)] tracking-widest uppercase mb-4">
          // About
        </p>

        <h1 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-headline)] text-vault-text leading-tight mb-8">
          Everyone&apos;s a Collector
        </h1>

        <div className="prose-vault space-y-6 text-vault-text-secondary text-base leading-relaxed">
          <p>
            I grew up in the late &apos;80s and early &apos;90s. Saturday mornings meant
            cartoons. Weekends meant flea markets, garage sales, and the toy aisle
            at Toys &quot;R&quot; Us. My childhood smelled like fresh blister packs and the
            inside of a Blockbuster Video.
          </p>

          <p>
            I collected everything. G.I. Joes, TMNT, Hot Wheels, Transformers,
            X-Men. I was the kid who kept the packaging. The kid who read the file
            cards on the back. The kid who cared about the story behind the toy as
            much as the toy itself.
          </p>

          <p>
            Decades later, not much has changed. I still collect. I still care about
            the stories. Now I just have a family, a mortgage, and a slightly better
            vocabulary for explaining why a sealed 1985 Snake Eyes is worth more than
            my first car.
          </p>

          {/* Belief block */}
          <div className="rounded-lg border border-vault-border bg-vault-bg-secondary p-6 my-8">
            <p className="text-vault-amber font-semibold font-[family-name:var(--font-headline)] text-lg mb-4">
              Here&apos;s the thing I believe:
            </p>
            <p className="mb-4">
              Everyone&apos;s a collector.
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-2">
                <span className="text-vault-amber mt-1">▸</span>
                <span>Can&apos;t throw out a high school yearbook? Collector.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vault-amber mt-1">▸</span>
                <span>Kept a card someone gave you 20 years ago? Collector.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vault-amber mt-1">▸</span>
                <span>Dried a flower in a book and never took it out? Collector.</span>
              </li>
            </ul>
            <p className="mt-4">
              Some of us just happen to collect action figures. The feeling behind it is the same.
            </p>
          </div>

          <p>
            My family thinks I&apos;m obsessed. They&apos;re right. But sharing this stuff
            with them, watching my kid hold a toy I had at their age, seeing their
            face when I tell them what it used to cost versus what it&apos;s worth
            now... that&apos;s the whole point.
          </p>

          {/* What the vault is */}
          <div className="my-8">
            <p className="mb-4">
              <strong className="text-vault-text">90s Toy Vault</strong> is where I put all of it:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-2">
                <span className="text-vault-cyan mt-1">▸</span>
                <span>The history and the deep cuts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vault-cyan mt-1">▸</span>
                <span>The collections and the controversies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vault-cyan mt-1">▸</span>
                <span>The toys that got banned and the ones that made billions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vault-cyan mt-1">▸</span>
                <span>Cards, comics, and everything that overlaps with toys from that era</span>
              </li>
            </ul>
            <p className="mt-4">
              There is no wrong way to collect, and there is no wrong reason to care about this stuff.
            </p>
          </div>

          <p>
            For anyone who remembers what it felt like to rip open a toy on
            Christmas morning in the &apos;90s and think{" "}
            <em className="text-vault-text">this is the greatest thing that has ever happened.</em>
          </p>

          <p className="text-vault-text font-semibold text-lg">
            If that&apos;s you, welcome to the vault.
          </p>
        </div>

        {/* Socials */}
        <div className="mt-12 pt-8 border-t border-vault-border">
          <p className="text-xs font-[family-name:var(--font-mono)] text-vault-text-muted tracking-wider uppercase mb-4">
            Find Me
          </p>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                  s.primary
                    ? "bg-vault-amber text-vault-bg border-vault-amber hover:opacity-90"
                    : "border-vault-border text-vault-text-secondary hover:text-vault-text hover:border-vault-text-secondary"
                }`}
              >
                {s.label}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M2 10L10 2M10 2H4M10 2v6" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
