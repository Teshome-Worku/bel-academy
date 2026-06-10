import Link from "next/link";
import { BRAND } from "@/constants/brand";
import { marketingNav } from "@/constants/navigation";
import { Logo } from "@/components/ui/Logo";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo imageClassName="h-20" showText={false} />
            <p className="mt-4 max-w-sm text-sm text-brand-gray">
              {BRAND.tagline}. Quality English instruction across Addis Ababa and online.
            </p>
          </div>
          <div>
            <p className="font-display font-semibold text-brand-navy">Quick Links</p>
            <ul className="mt-3 space-y-2">
              {marketingNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-brand-gray hover:text-brand-blue">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display font-semibold text-brand-navy">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-brand-gray">
              <li>{BRAND.phone}</li>
              <li>{BRAND.email}</li>
              <li>{BRAND.address}</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-100 pt-6 text-center text-sm text-brand-gray">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
