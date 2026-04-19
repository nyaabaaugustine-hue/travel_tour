"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  User, Menu, X, ChevronDown, Globe, Phone, Plane,
  Bell, Ticket, Home, Map, Tag, Shield, Gift, Info,
  Mail, ChevronRight, Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  { label: "Flights",       href: "/flights",      icon: <Plane className="h-4 w-4" /> },
  { label: "Destinations",  href: "/destinations", icon: <Map className="h-4 w-4" /> },
  { label: "Deals",         href: "/deals",        icon: <Tag className="h-4 w-4" /> },
  { label: "Insurance",     href: "/insurance",    icon: <Shield className="h-4 w-4" /> },
  { label: "Rewards",       href: "/loyalty",      icon: <Gift className="h-4 w-4" /> },
];

const MORE_LINKS = [
  { label: "About Us",   href: "/about",   icon: <Info className="h-4 w-4" /> },
  { label: "Contact",    href: "/contact", icon: <Mail className="h-4 w-4" /> },
];

const UNREAD_NOTIFS = 3; // demo unread count

export function Navbar() {
  const logo = PlaceHolderImages.find(img => img.id === "business-logo");
  const pathname = usePathname();
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

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
        {/* Top utility bar — desktop only */}
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
            <LanguageSwitcher />
          </div>
        </div>

        {/* Scrolling destinations ticker */}
        <div className="hidden lg:block bg-primary text-white overflow-hidden">
          <div className="flex animate-scrol text-[11px] font-medium py-1.5 w-max">
            {[
              { dest: "Accra", price: "$199", deal: "Round-trip" },
              { dest: "Lagos", price: "$219", deal: "25% off" },
              { dest: "London", price: "$399", deal: "Direct" },
              { dest: "Dubai", price: "$449", deal: "Special" },
              { dest: "Nairobi", price: "$310", deal: "Safari" },
              { dest: "Cape Town", price: "$420", deal: "Explore" },
              { dest: "Paris", price: "$499", deal: "Direct" },
              { dest: "New York", price: "$599", deal: "Business" },
              { dest: "Cairo", price: "$345", deal: "Historic" },
              { dest: "Kumasi", price: "$89", deal: "Local" },
              { dest: "Dakar", price: "$199", deal: "Beach" },
              { dest: "Kampala", price: "$289", deal: "Mountain" },
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-2 px-5 border-r border-white/20 whitespace-nowrap">
                <span>{item.dest}</span>
                <span className="text-secondary font-bold">{item.price}</span>
                <span className="text-white/50 text-[10px]">{item.deal}</span>
              </span>
            ))}
            {[
              { dest: "Accra", price: "$199", deal: "Round-trip" },
              { dest: "Lagos", price: "$219", deal: "25% off" },
              { dest: "London", price: "$399", deal: "Direct" },
              { dest: "Dubai", price: "$449", deal: "Special" },
              { dest: "Nairobi", price: "$310", deal: "Safari" },
              { dest: "Cape Town", price: "$420", deal: "Explore" },
              { dest: "Paris", price: "$499", deal: "Direct" },
              { dest: "New York", price: "$599", deal: "Business" },
              { dest: "Cairo", price: "$345", deal: "Historic" },
              { dest: "Kumasi", price: "$89", deal: "Local" },
              { dest: "Dakar", price: "$199", deal: "Beach" },
              { dest: "Kampala", price: "$289", deal: "Mountain" },
            ].map((item, i) => (
              <span key={`dup-${i}`} className="flex items-center gap-2 px-5 border-r border-white/20 whitespace-nowrap">
                <span>{item.dest}</span>
                <span className="text-secondary font-bold">{item.price}</span>
                <span className="text-white/50 text-[10px]">{item.deal}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Main nav row */}
        <div className="container mx-auto flex h-[60px] md:h-[68px] items-center justify-between px-3 md:px-4 lg:px-8 gap-2">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative h-8 w-8 md:h-9 md:w-9 overflow-hidden rounded-xl shadow-navy ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300 bg-primary">
              {logo ? (
                <Image src={logo.imageUrl} alt="Logo" fill className="object-contain p-0.5" priority />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Plane className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
            <span className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/70">
              Premium Travel
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {MAIN_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 xl:px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors group",
                  isActive(link.href) ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute bottom-0 left-3 xl:left-4 right-3 xl:right-4 h-[2px] bg-secondary rounded-full transition-transform duration-300",
                  isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative px-3 xl:px-4 py-2 text-[13px] font-semibold text-muted-foreground tracking-wide transition-colors hover:text-primary flex items-center gap-1">
                  More <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white rounded-2xl p-2 shadow-luxury min-w-[160px]">
                {MORE_LINKS.map((link) => (
                  <DropdownMenuItem key={link.href} asChild className="rounded-xl">
                    <Link href={link.href} className="cursor-pointer flex items-center gap-2 px-3 py-2">
                      <span className="text-primary">{link.icon}</span>
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Notification bell — mobile */}
            <Link href="/dashboard" className="relative lg:hidden p-2 rounded-xl hover:bg-primary/5 transition-colors">
              <Bell className="h-5 w-5 text-muted-foreground" />
              {UNREAD_NOTIFS > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">
                  {UNREAD_NOTIFS}
                </span>
              )}
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden h-9 w-9 flex items-center justify-center rounded-xl hover:bg-primary/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <span className={cn(
                  "block h-0.5 w-full bg-foreground rounded-full transition-all duration-300",
                  mobileOpen && "rotate-45 translate-y-[7px]"
                )} />
                <span className={cn(
                  "block h-0.5 w-full bg-foreground rounded-full transition-all duration-300",
                  mobileOpen && "opacity-0 scale-x-0"
                )} />
                <span className={cn(
                  "block h-0.5 w-full bg-foreground rounded-full transition-all duration-300",
                  mobileOpen && "-rotate-45 -translate-y-[7px]"
                )} />
              </div>
            </button>

            {/* Desktop: Language + Login */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/dashboard" className="relative p-2 rounded-xl hover:bg-primary/5 transition-colors">
                <Bell className="h-5 w-5 text-muted-foreground" />
                {UNREAD_NOTIFS > 0 && (
                  <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">
                    {UNREAD_NOTIFS}
                  </span>
                )}
              </Link>
              <Link href="/login">
                <Button className="rounded-xl h-9 px-5 btn-navy text-sm font-semibold gap-2">
                  <User className="h-4 w-4" /> Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile slide-in drawer ── */}
      <div className={cn(
        "fixed inset-0 z-50 lg:hidden",
        mobileOpen ? "pointer-events-auto" : "pointer-events-none"
      )}>
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel */}
        <div className={cn(
          "absolute top-0 right-0 h-full w-[85vw] max-w-[320px] bg-white flex flex-col transition-transform duration-300 ease-[cubic-bezier(.32,.72,0,1)] shadow-2xl",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}>

          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b bg-gradient-to-r from-primary to-[hsl(215,55%,30%)]">
            <div className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-white/20 ring-1 ring-white/30 shrink-0">
                {logo ? (
                  <Image src={logo.imageUrl} alt="Logo" fill className="object-contain p-0.5" />
                ) : (
                  <Plane className="h-4 w-4 text-white m-auto mt-2" />
                )}
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-none">Premium Travel</p>
                <p className="text-white/60 text-[10px] mt-0.5">Africa&apos;s #1 Platform</p>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* User quick-access */}
          <Link
            href="/dashboard"
            onClick={() => setMobileOpen(false)}
            className="mx-4 mt-4 flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-2xl p-3 hover:bg-primary/10 transition-colors"
          >
            <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-primary truncate">Kwame Mensah</p>
              <p className="text-xs text-muted-foreground truncate">Gold Member · 45,200 miles</p>
            </div>
            <div className="flex items-center gap-1">
              {UNREAD_NOTIFS > 0 && (
                <Badge className="bg-red-500 text-white border-none text-[9px] font-black px-1.5 py-0.5">
                  {UNREAD_NOTIFS}
                </Badge>
              )}
              <ChevronRight className="h-4 w-4 text-primary/50" />
            </div>
          </Link>

          {/* Main navigation */}
          <div className="flex-1 overflow-y-auto px-4 pt-3 pb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 px-2 mb-2">Explore</p>
            <nav className="space-y-0.5 mb-4">
              {MAIN_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 rounded-xl font-semibold text-sm transition-all",
                    isActive(link.href)
                      ? "bg-primary text-white shadow-navy"
                      : "text-foreground hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  <span className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    isActive(link.href) ? "bg-white/20" : "bg-muted"
                  )}>
                    {link.icon}
                  </span>
                  <span className="flex-1">{link.label}</span>
                  {link.href === "/deals" && (
                    <Badge className="bg-red-500 text-white border-none text-[9px] font-black">HOT</Badge>
                  )}
                  {link.href === "/loyalty" && (
                    <Badge className="bg-secondary text-primary border-none text-[9px] font-black">NEW</Badge>
                  )}
                </Link>
              ))}
            </nav>

            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 px-2 mb-2">Company</p>
            <nav className="space-y-0.5 mb-4">
              {MORE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl font-semibold text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-all"
                >
                  <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    {link.icon}
                  </span>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Promo banner */}
            <div className="bg-gradient-to-br from-primary to-[hsl(215,55%,30%)] rounded-2xl p-4 mb-3">
              <p className="text-white text-xs font-bold mb-1">✈ Flash Sale Today</p>
              <p className="text-white/70 text-[11px] leading-relaxed">Flights to London from $299. Limited seats available.</p>
              <Link
                href="/deals"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-1 mt-2 text-secondary text-[11px] font-bold"
              >
                View Deals <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Bottom actions */}
          <div className="px-4 py-4 border-t space-y-2 bg-muted/20">
            <Link href="/login" onClick={() => setMobileOpen(false)} className="block">
              <Button className="w-full btn-gold rounded-xl font-bold gap-2 h-11 text-sm">
                <User className="h-4 w-4" /> Login / Sign Up
              </Button>
            </Link>
            <div className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground/60 pt-1">
              <Phone className="h-3 w-3" />
              <span>+233 30 260 0000 · 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
