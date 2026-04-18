"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2, Plane, Printer, Download, Share2,
  ArrowRight, Calendar, Users, Star, Mail
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ConfirmationPage() {
  const pathname = usePathname();
  const pnr = pathname.split("/").pop();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* Success banner */}
      <div className="bg-green-600 text-white text-center py-3 text-sm font-semibold tracking-wide">
        ✓ Booking confirmed — your e-ticket has been sent to your email
      </div>

      <main className="container mx-auto px-4 lg:px-8 py-14 max-w-2xl">
        {/* Hero success */}
        <div className="text-center space-y-4 mb-10">
          <div className="relative inline-flex">
            <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mx-auto ring-8 ring-green-50">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <span className="absolute -top-1 -right-1 text-2xl">🎉</span>
          </div>
          <div className="space-y-2">
            <h1 className="font-display text-4xl font-bold">You&apos;re All Set!</h1>
            <p className="text-muted-foreground text-lg">
              Your flight has been synchronized and confirmed. Bon voyage!
            </p>
          </div>
        </div>

        {/* Boarding pass style card */}
        <div className="luxury-card rounded-3xl overflow-hidden border border-border mb-6">
          {/* Header strip */}
          <div className="bg-primary px-7 py-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1">Booking Reference</p>
              <p className="font-display text-3xl font-bold text-secondary tracking-wider font-mono">{pnr}</p>
            </div>
            <div className="text-right">
              <Badge className="bg-green-500 text-white border-none text-xs font-bold px-3 py-1 mb-1">
                CONFIRMED
              </Badge>
              <p className="text-white/50 text-xs">Oceanic Air · VS-204</p>
            </div>
          </div>

          {/* Tear line */}
          <div className="flex items-center">
            <div className="h-6 w-6 bg-background rounded-full -ml-3 shrink-0" />
            <div className="flex-1 border-t-2 border-dashed border-border" />
            <div className="h-6 w-6 bg-background rounded-full -mr-3 shrink-0" />
          </div>

          {/* Route */}
          <div className="px-7 py-6">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="font-display text-5xl font-bold text-primary tracking-tight">NYC</p>
                <p className="text-sm text-muted-foreground">New York (JFK)</p>
                <p className="text-xs font-bold text-foreground">Nov 15 · 08:30 AM</p>
              </div>

              <div className="flex flex-col items-center gap-2 flex-1 max-w-[120px]">
                <Plane className="h-6 w-6 text-secondary rotate-90" />
                <div className="w-full h-px bg-border relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border-2 border-primary bg-white" />
                </div>
                <p className="text-[10px] font-semibold text-muted-foreground">3h 15m · Non-stop</p>
              </div>

              <div className="space-y-1 text-right">
                <p className="font-display text-5xl font-bold text-primary tracking-tight">LON</p>
                <p className="text-sm text-muted-foreground">London (LHR)</p>
                <p className="text-xs font-bold text-foreground">Nov 15 · 11:45 AM</p>
              </div>
            </div>
          </div>

          {/* Tear line */}
          <div className="flex items-center">
            <div className="h-6 w-6 bg-background rounded-full -ml-3 shrink-0" />
            <div className="flex-1 border-t-2 border-dashed border-border" />
            <div className="h-6 w-6 bg-background rounded-full -mr-3 shrink-0" />
          </div>

          {/* Passenger details grid */}
          <div className="px-7 py-5 grid grid-cols-2 sm:grid-cols-4 gap-5 bg-muted/20">
            {[
              { label: "Passenger", value: "John Mensah", icon: <Users className="h-3.5 w-3.5" /> },
              { label: "Class", value: "Economy",       icon: <Star className="h-3.5 w-3.5" /> },
              { label: "Seat", value: "24A",             icon: <Plane className="h-3.5 w-3.5" /> },
              { label: "Date", value: "Nov 15, 2024",   icon: <Calendar className="h-3.5 w-3.5" /> },
            ].map(({ label, value, icon }) => (
              <div key={label} className="space-y-1">
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                  {icon} {label}
                </div>
                <p className="font-semibold text-sm">{value}</p>
              </div>
            ))}
          </div>

          {/* Amount paid */}
          <div className="px-7 py-4 flex items-center justify-between border-t border-border bg-white">
            <span className="text-sm text-muted-foreground font-medium">Total Paid</span>
            <span className="font-display text-2xl font-bold text-primary">$345.00</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {[
            { icon: <Printer className="h-4 w-4" />, label: "Print Ticket" },
            { icon: <Download className="h-4 w-4" />, label: "Download PDF" },
            { icon: <Share2 className="h-4 w-4" />, label: "Share Trip" },
            { icon: <Mail className="h-4 w-4" />, label: "Email Ticket" },
          ].map(({ icon, label }) => (
            <Button key={label} variant="outline" size="sm" className="gap-2 rounded-full border-border font-medium hover:border-primary hover:text-primary transition-all">
              {icon} {label}
            </Button>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* What's next */}
        <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 mb-8 space-y-4">
          <h3 className="font-display font-bold text-lg">What happens next?</h3>
          <div className="space-y-3">
            {[
              { step: "1", text: "Check your email for your e-ticket and booking confirmation." },
              { step: "2", text: "Add your trip to your mobile wallet for easy airport access." },
              { step: "3", text: "Check-in online opens 24 hours before your flight departs." },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="h-6 w-6 bg-primary text-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                  {step}
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col gap-3">
          <Button asChild className="w-full h-13 btn-navy rounded-xl font-bold gap-2 h-[52px]">
            <Link href="/dashboard">
              <Users className="h-4 w-4" /> Go to My Dashboard
            </Link>
          </Button>
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary font-medium">
            <Link href="/">
              Back to Home <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
