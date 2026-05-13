import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-brunombpereira.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${profile.name} · ${profile.tagline}`,
  description: profile.pitch,
  authors: [{ name: profile.name, url: profile.github }],
  keywords: [
    "Bruno Borlido Pereira",
    "Junior Full-Stack Developer",
    "Ruby on Rails",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Aveiro",
    "Porto",
    "Portugal",
  ],
  openGraph: {
    title: `${profile.name} · ${profile.tagline}`,
    description: profile.pitch,
    url: SITE_URL,
    siteName: profile.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.tagline}`,
    description: profile.pitch,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1118",
  width: "device-width",
  initialScale: 1,
};

// Structured data — Google + LinkedIn parse this for rich previews
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.tagline,
  email: `mailto:${profile.email}`,
  url: SITE_URL,
  sameAs: [profile.github, profile.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
    addressCountry: "PT",
  },
  knowsAbout: profile.stack.flatMap((g) => g.items),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
