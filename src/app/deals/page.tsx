"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Timer, Zap, Flame, Percent, ArrowRight, Star, Plane, Tag } from "lucide-react";
import Link from "next/link";

const MOCK_DEALS = [
  {
    id: "d1",
    title: "Weekend in London",
    description: "Round trip economy with Oceanic Air. Non-stop from Accra.",
    price: 349,
    originalPrice: 620,
    expiresSeconds: 52920,  // 14h 42m
    tag: "Flash Deal",
    tagColor: "bg-red-500",
    route: "ACC → LHR",
    airline: "Oceanic Air",
    stops: "Non-stop",
    class: "Economy",
    rating: 4.8,
  },
  {
    id: "d2",
    title: "Tokyo Spring Getaway",
    description: "Premium economy flight + 3 nights hotel package included.",
    price: 1299,
    originalPrice: 1850,
    expiresSeconds: 202080, // 2d 8h
    tag: "Best Value",
    tagColor: "bg-blue-500",
    route: "ACC → NRT",
    airline: "Global Jet",
    stops: "1 stop",
    class: "Premium Economy",
    rating: 4.6,
  },
  {
    id: "d3",
    title: "Paris Last Minute",
    description: "Direct flight with Air France. Exclusive lounge access included.",
    price: 410,
    originalPrice: 780,
    expiresSeconds: 20700, // 5h 45m
    tag: "Last Minute",
    tagColor: "bg-orange-500",
    route: "ACC → CDG",
    airline: "Air France",
    stops: "Non-stop",
    class: "Economy",
    rating: 4.7,
  },
  {
    id: "d4",
    title: "Sydney Business Class",
    description: "Ultimate luxury for long-haul travel. All-flat beds & fine dining.",
    price: 2450,
    originalPrice: 3800,
    expiresSeconds: 302400, // 3d 12h
    tag: "Premium",
    tagColor: "bg-purple-500",
    route: "ACC → SYD",
    airline: "Qantas",
    stops: "1 stop",
    class: "Business",
    rating: 4.9,
  },
];

function useCountdown(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(timer);
  }, []);
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (d > 0) return `${d}d ${h.toString().padStart(2,"0")}h`;
  return `${h.toString().padStart(2,"0")}h ${m.toString().padStart(2,"0")}m ${s.toString().padStart(2,"0")}s`;
}

function DealCard({ deal }: { deal: typeof MOCK_DEALS[0] }) {
  const countdown = useCountdown(deal.expiresSeconds);
  const discount = Math.round((1 - deal.price / deal.originalPrice) * 100);
  const isUrgent = deal.expiresSeconds < 21600; // under 6h

  return (
    <Card className="luxury-card rounded-3xl overflow-hidden border border-border group">
      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] h-full">
        {/* Discount panel */}
        <div className={`${deal.tagColor} p-6 sm:w-28 flex flex-col items-center justify-center text-white gap-2 sm:rounded-l-3xl`}>
          <Percent className="h-6 w-6 opacity-40" />
          <span className="font-display text-4xl font-bold leading-none">-{discount}%</span>
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">OFF</span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between gap-4">
          {/* Top row */}
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-tight rounded-full">
                  {deal.tag}
                </Badge>
                <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-tight rounded-full border-primary/20 text-primary">
                  {deal.class}
                </Badge>
              </div>
              {/* Countdown */}
              <div className={`flex items-center gap-1.5 text-xs font-bold rounded-full px-3 py-1 shrink-0 ${
                isUrgent ? "bg-red-50 text-red-600 border border-red-200" : "bg-muted text-muted-foreground"
              }`}>
                <Timer className={`h-3 w-3 ${isUrgent ? "text-red-500" : "text-muted-foreground"}`} />
                {countdown}
              </div>
            </div>

            <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">{deal.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{deal.description}</p>

            {/* Route info */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-medium pt-1">
              <span className="flex items-center gap-1">
                <Plane className="h-3.5 w-3.5 text-primary" />
                {deal.route}
              </span>
              <span className="opacity-30">·</span>
              <span>{deal.airline}</span>
              <span className="opacity-30">·</span>
              <span className={deal.stops === "Non-stop" ? "text-green-600 font-semibold" : ""}>{deal.stops}</span>
              <span className="opacity-30">·</span>
              <span className="flex items-center gap-0.5">
                <Star className="h-3 w-3 fill-secondary text-secondary" />{deal.rating}
              </span>
            </div>
          </div>

          {/* Price + CTA */}
          <div className="flex items-end justify-between pt-3 border-t border-border">
            <div>
              <p className="text-xs text-muted-foreground line-through">${deal.originalPrice.toLocaleString()}</p>
              <p className="font-display text-3xl font-bold text-primary">${deal.price.toLocaleString()}</p>
              <p className="text-[10px] text-muted-foreground">per person</p>
            </div>
            <Button asChild className="btn-gold rounded-xl font-bold gap-2 h-11">
              <Link href="/flights">
                Book Now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function DealsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* Hero */}
      <section className="diagonal-bg text-white py-20 relative overflow-hidden noise-overlay">
        <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
          <Flame className="h-72 w-72 text-orange-400" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl space-y-5">
            <div className="flex items-center gap-2">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 font-bold px-4 py-1.5 gap-1.5">
                <Zap className="h-3.5 w-3.5 fill-current" /> Limited-Time Offers
              </Badge>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">
              Synchronized<br />
              <span className="gradient-text">Deals.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-lg">
              Our engine scans 500+ airlines around the clock. These prices are exclusively synchronized for you — but they won&apos;t last.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { n: MOCK_DEALS.length.toString(), label: "Live Deals" },
                { n: "47%", label: "Avg Saving" },
                { n: "500+", label: "Airlines Searched" },
              ].map(({ n, label }) => (
                <div key={label} className="bg-white/10 border border-white/15 rounded-2xl px-5 py-3 text-center min-w-[90px]">
                  <p className="font-display text-2xl font-bold text-secondary">{n}</p>
                  <p className="text-white/50 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deals grid */}
      <section className="container mx-auto px-4 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold">Today&apos;s Best Fares</h2>
            <p className="text-muted-foreground text-sm mt-1">Updated every 60 seconds</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-green-50 border border-green-200 text-green-700 px-3 py-1.5 rounded-full font-semibold">
            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            Live Prices
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
          {MOCK_DEALS.map(deal => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>

        {/* Custom search CTA */}
        <Card className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-3xl overflow-hidden">
          <CardContent className="p-10 text-center space-y-4">
            <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
              <Tag className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold">Need a custom route?</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
              Our AI-driven SyncIntelligence searches 500+ airlines in real-time. Try a custom search for the most precise pricing on any route.
            </p>
            <Button asChild className="btn-navy rounded-full px-8 h-11 font-bold gap-2 mt-2">
              <Link href="/">
                <Plane className="h-4 w-4" /> Search Custom Flight
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
