import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

// --------- AI Cheat Sheet Popup Component ---------
function AiCheatSheetPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  // Check if popup was already shown
  useEffect(() => {
    const seen = localStorage.getItem("ai_cheat_popup");
    if (seen === "true") return;

    function onScroll() {
      const scroll =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (scroll > 40) {
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("ai_cheat_popup", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("https://formspree.io/f/mrezrogw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setSent(true);
    localStorage.setItem("ai_cheat_popup", "true");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        {!sent ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">🚀 Get Your First AI Win in 10 Minutes</DialogTitle>
              <DialogDescription className="pt-2 text-base">
                <strong>Free: AI Director Quick Start Guide</strong>
              </DialogDescription>
            </DialogHeader>

            <p className="text-sm text-muted-foreground mt-4">
              Stop guessing. Start directing. Get the 5-Element Framework Cheat Sheet that turns vague prompts into high-quality results.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <Input
                type="email"
                required
                placeholder="Your email address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button className="w-full" size="lg">👉 Send Me the Cheat Sheet</Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">No spam. Just the shortcut.</p>

            <Button variant="ghost" size="sm" className="absolute top-3 right-3" onClick={handleClose}>
              ✕
            </Button>
          </>
        ) : (
          <div className="text-center py-6">
            <h3 className="text-xl font-semibold mb-2">✅ You’re in!</h3>
            <p className="text-sm text-muted-foreground">Check your inbox for the cheat sheet.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// --------- Root Layout Component ---------
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <AiCheatSheetPopup />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
