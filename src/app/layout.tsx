import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Director OS Bundle",
  description: "Playbooks + Notion OS",
  keywords: ["AI Director", "Playbooks", "Notion OS", "Next.js", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Your Name or Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "AI Director OS Bundle",
    description: "Playbooks + Notion OS",
    siteName: "AI Director",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Director OS Bundle",
    description: "Playbooks + Notion OS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
