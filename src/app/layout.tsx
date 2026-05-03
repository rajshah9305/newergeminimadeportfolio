import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/config/portfolio";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(PERSONAL_INFO.website),
  title: {
    default: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description: PERSONAL_INFO.bio,
  keywords: ["AI Engineer", "Full-Stack Developer", "Next.js", "Python", "React", "TypeScript", "Machine Learning", "LLM"],
  authors: [{ name: PERSONAL_INFO.name }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`,
    description: PERSONAL_INFO.bio,
    url: PERSONAL_INFO.website,
    siteName: PERSONAL_INFO.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`,
    description: PERSONAL_INFO.bio,
    creator: "@rajshah9305", // Defaulting to github handle if twitter is not in PERSONAL_INFO
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
