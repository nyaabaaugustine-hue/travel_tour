"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Compass, ArrowRight, Star, Plane } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const DESTINATION_META: Record<string, { price: number; rating: string; desc: string; region: string }> = {
  accra:    { price: 199, rating: "9.4", desc: "Ghana's vibrant capital, rich in culture and coastline.", region: "West Africa" },
  lagos:    { price: 219, rating: "8.9", desc: "Africa's mega-city — commerce, art, and electric energy.", region: "West Africa" },
  nairobi:  { price: 310, rating: "9.1", desc: "Gateway to the Maasai Mara and East Africa's highlands.", region: "East Africa" },
  cairo:    { price: 345, rating: "9.3", desc: "Timeless civilization along the legendary Nile river.", region: "North Africa" },
  capetown: { price: 420, rating: "9.6", desc: "Where mountains meet the ocean in spectacular fashion.", region: "Southern Africa" },
  marrakech: { price: 380, rating: "9.2", desc: "Medinas, spices, and Moorish architecture beyond compare.", region: "North Africa" },
};

const REGIONS = ["All", "West Africa", "East Africa", "North Africa", "Southern Africa"];

export default function DestinationsPage() {
  const destinations = PlaceHolderImages.filter(img => img.id.startsWith("dest-"));
  const [search, setSearch] = useState("");
  const [activeRegion, setActiveRegion] = useState("All");

  const filtered = destinations.filter(dest => {
    const name = dest.id.split("-")[1];
    const meta = DESTINATION_META[name] || { region: "Africa" };
    const matchSearch = name.toLowerCase().includes(search.toLowerCase());
    const matchRegion = activeRegion === "All" || meta.region === activeRegion;
    return matchSearch && matchRegion;
  });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* Hero header */}
      <section className="relative bg-primary overflow-hidden py-20">
        <Image
          src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533937/74f9a640_aytjpj.jpg"
          alt="Destinations hero"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-primary/70" />
        {/* Decorative bg */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center space-y-6">
          <Badge className="bg-secondary/20 text-secondary border-secondary/30 font-semibold px-4 py-1.5">
            ✈ Explore the World
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
            Discover Your Next<br />
            <span className="gradient-text">Adventure</span>
          </h1>
          <p className="text-white/60 max-w-lg mx-auto text-lg">
            From the neon-lit skylines of Lagos to the pyramids of Cairo — your world awaits.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto mt-6 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search destinations…"
              className="pl-12 h-13 bg-white border-transparent rounded-full shadow-luxury font-medium text-foreground h-[52px]"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Region filter tabs */}
      <div className="bg-white border-b border-border sticky top-[68px] z-30 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {REGIONS.map(region => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeRegion === region
                    ? "bg-primary text-white shadow-navy"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <p className="text-sm text-muted-foreground">
          Showing <strong className="text-foreground">{filtered.length}</strong> destination{filtered.length !== 1 ? "s" : ""}
          {activeRegion !== "All" && <> in <strong className="text-primary">{activeRegion}</strong></>}
        </p>
      </div>

      {/* Destination grid */}
      <section className="container mx-auto px-4 lg:px-8 pb-20">
        {filtered.length === 0 ? (
          <div className="text-center py-20 space-y-4">
            <Plane className="h-12 w-12 text-muted-foreground/30 mx-auto" />
            <p className="font-semibold text-muted-foreground">No destinations found for &ldquo;{search}&rdquo;</p>
            <Button variant="outline" onClick={() => { setSearch(""); setActiveRegion("All"); }} className="rounded-full">
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((dest) => {
              const name = dest.id.split("-")[1];
              const meta = DESTINATION_META[name] || { price: 299, rating: "8.7", desc: `Explore the wonders of ${name}.`, region: "Africa" };
              return (
                <article key={dest.id} className="dest-card luxury-card rounded-3xl overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <div className="dest-card-inner absolute inset-0">
                      <Image
                        src={dest.imageUrl}
                        alt={dest.description}
                        fill
                        className="object-cover"
                        data-ai-hint={dest.imageHint}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <span className="bg-white/15 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20">
                        {meta.region}
                      </span>
                      <div className="flex items-center gap-1 bg-white/90 text-primary px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
                        <Star className="h-3 w-3 fill-secondary text-secondary" />
                        {meta.rating}
                      </div>
                    </div>

                    {/* Name overlay */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <MapPin className="h-3.5 w-3.5 text-secondary" />
                            <h3 className="font-display text-2xl font-bold text-white capitalize tracking-tight">
                              {name.charAt(0).toUpperCase() + name.slice(1)}
                            </h3>
                          </div>
                          <p className="text-white/60 text-xs line-clamp-1">{meta.desc}</p>
                        </div>
                        <div className="text-right ml-3 shrink-0">
                          <p className="text-white/50 text-[10px]">from</p>
                          <p className="text-secondary font-bold text-xl">${meta.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card footer */}
                  <CardContent className="p-5 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      <Compass className="h-4 w-4" />
                      Explore Guide
                    </div>
                    <Button asChild size="sm" className="btn-gold rounded-full px-4 h-8 text-xs font-bold gap-1">
                      <Link href={`/flights?destination=${name}`}>
                        Book Now <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* CTA banner */}
      <section className="bg-[hsl(var(--navy-deep))] text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-5">
          <h2 className="font-display text-3xl font-bold">
            Can&apos;t find your destination?
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            Our smart search covers 195 countries. Search directly for any city or airport worldwide.
          </p>
          <Button asChild className="btn-gold rounded-full px-8 h-12 font-bold gap-2">
            <Link href="/">
              Search All Flights <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
