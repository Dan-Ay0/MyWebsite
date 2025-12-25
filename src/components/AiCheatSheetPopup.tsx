"use client";

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

// Declare the fbq function for TypeScript
declare global {
  interface Window {
    fbq: any;
  }
}

export default function AiCheatSheetPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Send the email to your form service
    await fetch("https://formspree.io/f/mrezrogw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    // ===========> CRITICAL: Track the conversion for Facebook <===========
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'Lead');
    }

    // Show success message
    setSent(true);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        {!sent ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                🚀 Get Your First AI Win in 10 Minutes
              </DialogTitle>
              <DialogDescription className="pt-2 text-base">
                <strong>Free: AI Director Quick Start Guide</strong>
              </DialogDescription>
            </DialogHeader>

            <p className="text-sm text-muted-foreground mt-4">
              Stop guessing. Start directing. Get the 5-Element Framework Cheat
              Sheet that turns vague prompts into high-quality results.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <Input
                type="email"
                required
                placeholder="Your email address"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button className="w-full" size="lg">
                👉 Send Me the Cheat Sheet
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              No spam. Just the shortcut.
            </p>
          </>
        ) : (
          <div className="text-center py-6">
            <h3 className="text-xl font-semibold mb-2">✅ You’re in!</h3>
            <p className="text-sm text-muted-foreground">
              Check your inbox for the cheat sheet.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
