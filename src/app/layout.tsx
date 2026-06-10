import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { BRAND, LOGO_PATH } from "@/constants/brand";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: {
    default: BRAND.name,
    template: `%s | ${BRAND.name}`,
  },
  description: `${BRAND.tagline} — English programs in Addis Ababa and online.`,
  openGraph: {
    title: BRAND.name,
    description: BRAND.tagline,
    images: [{ url: LOGO_PATH, width: 512, height: 512, alt: `${BRAND.name} logo` }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
