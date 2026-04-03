import Link from "next/link";

const socialLinks = [
  { label: "TikTok", href: "https://tiktok.com/@90stoyvault" },
  { label: "YouTube", href: "https://youtube.com/@90stoyvault" },
  { label: "Instagram", href: "https://instagram.com/90stoyvault" },
  { label: "X / Twitter", href: "https://x.com/90stoyvault" },
];

const footerLinks = [
  { label: "Deep Dives", href: "/#articles" },
  { label: "Price Guides", href: "/#articles" },
  { label: "Videos", href: "/#videos" },
  { label: "Collecting 101", href: "/#articles" },
  { label: "About", href: "/#about" },
];

export function Footer() {
  return (
    <footer id="about" className="border-t border-vault-border bg-vault-bg-secondary">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold font-[family-name:var(--font-headline)] tracking-tight">
              <span className="text-vault-text">90s Toy </span>
              <span className="text-vault-amber">Vault</span>
            </Link>
            <p className="mt-4 text-sm text-vault-text-secondary leading-relaxed max-w-xs">
              Deep dives, price guides, and stories from the golden age of
              action figures. Every toy has a story.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-vault-text-muted uppercase tracking-wider font-[family-name:var(--font-mono)] mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-vault-text-secondary hover:text-vault-text transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-vault-text-muted uppercase tracking-wider font-[family-name:var(--font-mono)] mb-4">
              Follow
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-vault-text-secondary hover:text-vault-amber transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-vault-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-vault-text-muted font-[family-name:var(--font-mono)]">
            &copy; {new Date().getFullYear()} 90s Toy Vault. All rights reserved.
          </p>
          <p className="text-xs text-vault-text-muted font-[family-name:var(--font-mono)]">
            // every toy has a story
          </p>
        </div>
      </div>
    </footer>
  );
}
