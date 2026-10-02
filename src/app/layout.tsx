import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, Caveat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Chirag Raj Dadhich | Software Engineer & Full-Stack Developer",
    template: "%s | Chirag Raj Dadhich",
  },
  description:
    "Chirag Raj Dadhich is a software engineer from IIT Patna (2023–2027) specialising in full-stack architecture, distributed systems, and AI developer tooling (Next.js, TypeScript, React Flow, Prisma, Python). Builder of NextFlow, an interactive AI workflow orchestrator.",
  keywords: [
    "Chirag Raj Dadhich",
    "Chirag Raj Dadhich IIT Patna",
    "Chirag Raj Dadhich software engineer",
    "Chirag Raj Dadhich developer",
    "Chirag Raj Dadhich portfolio",
    "full stack developer India",
    "distributed systems engineer",
    "Next.js developer",
    "React Flow",
    "IIT Patna",
    "NextFlow",
  ],
  authors: [{ name: "Chirag Raj Dadhich", url: siteConfig.url }],
  creator: "Chirag Raj Dadhich",
  publisher: "Chirag Raj Dadhich",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Chirag Raj Dadhich | Portfolio",
    title: "Chirag Raj Dadhich | Software Engineer & Full-Stack Developer",
    description:
      "Software engineer at IIT Patna (2023–2027). Builder of NextFlow (interactive AI workflow orchestrator), SIH 2024 Team Leader, and full-stack systems developer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Raj Dadhich | Software Engineer",
    description:
      "Software engineer at IIT Patna (2023–2027). Builder of NextFlow, SIH 2024 Team Leader, and full-stack systems developer.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chirag Raj Dadhich",
  url: siteConfig.url,
  image: `${siteConfig.url}/chirag.jpg`,
  jobTitle: "Software Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Technology Patna",
  },
  email: `mailto:${siteConfig.email}`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.leetcode,
  ],
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "Distributed Systems",
    "Next.js",
    "TypeScript",
    "React Flow",
    "Prisma ORM",
    "Python",
    "AI Workflows",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${caveat.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}