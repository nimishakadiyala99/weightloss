import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My 2-Week Reset Journey",
  description: "A cozy wellness dashboard to track a 2-week reset journey",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
