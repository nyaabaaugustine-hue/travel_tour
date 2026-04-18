"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, Menu, X, ChevronDown, Globe, Phone, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { LanguageSwitcher } from "@/components/language-switcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const MAIN_LINKS = [
  { label: "Find Flights",    href: "/flights" },
  { label: "Destinations",   href: "/destinations" },
  { label: "Special Deals",  href: "/deals" },
  { label: "Insurance", href: "/insurance" },
  { label: "Rewards", href: "/loyalty" },
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Insurance", href: "/insurance" },
  { label: "Loyalty", href: "/loyalty" },
];

export function Navbar() {
  const logo = PlaceHolderImages.find(img => img.id === "business-logo");
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-luxury border-b border-border"
            : "bg-white/80 backdrop-blur-md border-b border-border/60"
        )}
      >
        {/* Top utility bar */}
        <div className="hidden lg:flex items-center justify-between px-8 py-2 border-b border-border/40 text-[11px] font-medium text-muted-foreground bg-[hsl(var(--cream-dark))]/60">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3" /> +233 30 260 0000
            </span>
            <span className="opacity-40">|</span>
            <span>24/7 Concierge Support</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Africa&apos;s Premier Travel Platform</span>
            <span className="opacity-40">|</span>
            <span className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
              <Globe className="h-3 w-3" /> EN / USD <ChevronDown className="h-2.5 w-2.5" />
            </span>
          </div>
        </div>

        {/* Main nav */}
        <div className="container mx-auto flex h-[68px] items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl shadow-navy ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300 shrink-0 bg-primary">
              {logo ? (
                <Image src={logo.imageUrl} alt="Logo" fill className="object-contain p-0.5" priority />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Plane className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/70 hidden sm:block">
                Premium Travel
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {MAIN_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-[13px] font-semibold text-muted-foreground tracking-wide transition-colors hover:text-primary group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative px-4 py-2 text-[13px] font-semibold text-muted-foreground tracking-wide transition-colors hover:text-primary group flex items-center gap-1">
                  More
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white">
                {COMPANY_LINKS.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="cursor-pointer">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* Desktop auth */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link href="/login">
                  <Button
                    className="hidden md:flex items-center gap-2 rounded-[5%] h-10 px-5 btn-navy text-sm font-semibold"
                  >
                    <User className="h-4 w-4" />
                    <span>Login</span>
                  </Button>
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 mt-3 shadow-luxury-lg border border-border">
                <DropdownMenuItem asChild className="rounded-xl py-3 cursor-pointer font-semibold hover:bg-primary/5">
                  <Link href="/dashboard" className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <User className="h-4 w-4" />
                    </div>
                    My Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl py-3 cursor-pointer font-semibold hover:bg-primary/5">
                  <Link href="/dashboard" className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <Plane className="h-4 w-4" />
                    </div>
                    My Bookings
                  </Link>
                </DropdownMenuItem>
                <div className="my-1.5 border-t border-border" />
                <DropdownMenuItem className="text-destructive font-semibold rounded-xl py-3 cursor-pointer hover:bg-destructive/5">
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-72 bg-white shadow-luxury-lg transition-transform duration-300 ease-out flex flex-col",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-5 border-b">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-primary shrink-0">
              {logo ? (
                <Image src={logo.imageUrl} alt="Logo" fill className="object-contain p-0.5" />
              ) : (
                <Plane className="h-4 w-4 text-white m-auto mt-2" />
              )}
            </div>
            <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            {MAIN_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
            {COMPANY_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t">
            <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
              <Button className="w-full btn-navy rounded-[5%] font-semibold gap-2">
                <User className="h-4 w-4" /> Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
