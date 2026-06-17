import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 pt-[4.5rem] md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
