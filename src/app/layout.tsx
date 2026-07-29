import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MASP Learning Lab",
  description: "A frontend-first lab for learning Multi-Agent System Platform architecture.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
