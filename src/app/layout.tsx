import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"));

export const metadata: Metadata = {
  title: "Timesheet Memo",
  description: "My daily timesheet memo",
  generator: "Next.js",
  manifest: "/manifest.json",
  authors: [
    {
      name: "Thiti Tongumpun",
      url: "https://github.com/thititongumpun",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

const fontSans = FontSans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-background antialiased ${fontSans.className}`}
      >
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
