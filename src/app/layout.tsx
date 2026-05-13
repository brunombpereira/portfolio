import type { Metadata } from "next";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.tagline}`,
  description: profile.pitch,
  openGraph: {
    title: `${profile.name} · ${profile.tagline}`,
    description: profile.pitch,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
