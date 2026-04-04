import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "90s Toy Vault | The Toy Aisle Time Machine",
  description:
    "Deep dives, price guides, and stories from the golden age of action figures. Every toy has a story.",
  keywords: [
    "90s toys",
    "action figures",
    "toy collecting",
    "vintage toys",
    "nostalgia",
    "G.I. Joe",
    "Transformers",
    "TMNT",
    "retro toys",
  ],
  openGraph: {
    title: "90s Toy Vault | The Toy Aisle Time Machine",
    description:
      "Deep dives, price guides, and stories from the golden age of action figures.",
    url: "https://90stoyvault.com",
    siteName: "90s Toy Vault",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "90s Toy Vault | The Toy Aisle Time Machine",
    description:
      "Deep dives, price guides, and stories from the golden age of action figures.",
  },
  metadataBase: new URL("https://90stoyvault.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
