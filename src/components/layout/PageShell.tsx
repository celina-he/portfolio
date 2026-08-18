import type { ReactNode } from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#efefef]">
      <div className="mx-auto bg-white">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </div>
    </div>
  );
}