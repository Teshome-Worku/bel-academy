import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { BRAND, LOGO_PATH } from "@/constants/brand";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: `${BRAND.name} helps Afaan Oromo speakers learn English through practical, results-driven training in Addis Ababa and online.`,
  icons: {
    icon: LOGO_PATH,
    apple: LOGO_PATH,
  },
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: `${BRAND.name} — English language training for Afaan Oromo speakers.`,
    images: [{ url: LOGO_PATH, width: 800, height: 800, alt: `${BRAND.name} — ${BRAND.tagline}` }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
