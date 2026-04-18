"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plane, Clock, ArrowRight, Filter, SlidersHorizontal, Star, Wifi, Utensils, Luggage } from "lucide-react";
import Link from "next/link";

const MOCK_FLIGHTS = [
  {
    id: "fl_1",
    airline: "Oceanic Air",
    logo: "https://picsum.photos/seed/airline1/40/40",
    departure: "08:30",
    arrival: "11:45",
    duration: "3h 15m",
    price: 345,
    stops: "Non-stop",
    type: "Economy",
    rating: 4.8,
    amenities: ["wifi", "meals"],
  },
  {
    id: "fl_2",
    airline: "Global Jet",
    logo: "https://picsum.photos/seed/airline2/40/40",
    departure: "13:20",
    arrival: "18:10",
    duration: "4h 50m",
    price: 289,
    stops: "1 stop",
    type: "Economy",
    rating: 4.5,
    amenities: ["wifi"],
  },
  {
    id: "fl_3",
    airline: "Sky High",
    logo: "https://picsum.photos/seed/airline3/40/40",
    departure: "18:00",
    arrival: "21:30",
    duration: "3h 30m",
    price: 412,
    stops: "Non-stop",
    type: "Business",
    rating: 4.9,
    amenities: ["wifi", "meals", "baggage"],
  },
  {
    id: "fl_4",
    airline: "Air Nomad",
    logo: "https://picsum.photos/seed/airline4/40/40",
    departure: "23:15",
    arrival: "05:00",
    duration: "5h 45m",
    price: 195,
    stops: "Non-stop",
    type: "Economy",
    rating: 4.3,
    amenities: [],
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="h-3.5 w-3.5" />,
  meals: <Utensils className="h-3.5 w-3.5" />,
  baggage: <Luggage className="h-3.5 w-3.5" />,
};

export default function FlightsPage() {
  const [sortBy, setSortBy] = useState("cheapest");

  // Read search params client-side
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin") || "ACC";
  const destination = searchParams.get("destination") || "LON";

  const sorted = [...MOCK_FLIGHTS].sort((a, b) => {
    if (sortBy === "cheapest") return a.price - b.price;
    if (sortBy === "fastest") return a.duration.localeCompare(b.duration);
    return a.departure.localeCompare(b.departure);
  });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* Search summary bar */}
      <div className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Plane className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold flex items-center gap-2">
                {origin.toUpperCase()}
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                {destination.toUpperCase()}
              </h1>
              <p className="text-xs text-muted-foreground font-medium">Round Trip · 1 Passenger · Economy</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2 rounded-full border-primary text-primary font-semibold">
            <SlidersHorizontal className="h-4 w-4" /> Modify Search
          </Button>
        </div>
      </div>

      <main className="container mx-auto px-4 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters sidebar */}
        <aside className="hidden lg:block space-y-5">
          <div className="bg-white rounded-2xl border border-border p-6 space-y-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2 text-sm">
                <Filter className="h-4 w-4 text-primary" /> Filters
              </h3>
              <Button variant="link" size="sm" className="h-auto p-0 text-xs text-primary">Clear all</Button>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Stops</h4>
              {["Non-stop", "1 Stop", "2+ Stops"].map(stop => (
                <label key={stop} className="flex items-center gap-2.5 text-sm cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 rounded accent-primary" defaultChecked={stop === "Non-stop"} />
                  <span>{stop}</span>
                </label>
              ))}
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Price Range</h4>
              <div>
                <div className="h-1.5 w-full bg-muted rounded-full relative overflow-hidden">
                  <div className="absolute h-full bg-gradient-to-r from-primary to-secondary w-2/3 left-0 rounded-full" />
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground font-medium">
                  <span>$100</span>
                  <span>$800</span>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Airlines</h4>
              {MOCK_FLIGHTS.map(f => (
                <label key={f.airline} className="flex items-center gap-2.5 text-sm cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 rounded accent-primary" defaultChecked />
                  <span>{f.airline}</span>
                </label>
              ))}
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Cabin Class</h4>
              {["Economy", "Premium Economy", "Business", "First Class"].map(c => (
                <label key={c} className="flex items-center gap-2.5 text-sm cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 rounded accent-primary" defaultChecked={c === "Economy"} />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Results */}
        <div className="lg:col-span-3 space-y-4">
          {/* Sort bar */}
          <div className="flex justify-between items-center bg-white rounded-2xl border border-border px-5 py-3 shadow-sm">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">{sorted.length}</strong> flights found
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground hidden sm:block">Sort:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[160px] h-9 bg-white rounded-xl border-border text-sm font-medium">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  <SelectItem value="cheapest" className="rounded-xl">Cheapest first</SelectItem>
                  <SelectItem value="fastest" className="rounded-xl">Fastest first</SelectItem>
                  <SelectItem value="early" className="rounded-xl">Earliest departure</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {sorted.map((flight) => (
            <div
              key={flight.id}
              className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-luxury transition-all duration-300 overflow-hidden group"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] items-stretch">
                {/* Airline */}
                <div className="p-5 flex items-center gap-4 border-b md:border-b-0 md:border-r border-border">
                  <div className="h-12 w-12 rounded-xl overflow-hidden shadow-sm border border-border shrink-0">
                    <img src={flight.logo} alt={flight.airline} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{flight.airline}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="h-3 w-3 fill-secondary text-secondary" />
                      <span className="text-xs text-muted-foreground">{flight.rating}</span>
                    </div>
                    <div className="flex gap-1.5 mt-2">
                      {flight.amenities.map(a => (
                        <span key={a} className="text-muted-foreground/60">{amenityIcons[a]}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Route */}
                <div className="p-5 flex items-center justify-between gap-4">
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold">{flight.departure}</p>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mt-0.5">{origin.toUpperCase()}</p>
                  </div>

                  <div className="flex flex-col items-center flex-1 max-w-[130px]">
                    <span className="text-xs text-muted-foreground mb-2 font-medium">{flight.duration}</span>
                    <div className="w-full flex items-center gap-2">
                      <div className="h-px flex-1 bg-border relative">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border-2 border-primary bg-white" />
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold mt-2 px-2.5 py-0.5 rounded-full ${flight.stops === "Non-stop" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>
                      {flight.stops}
                    </span>
                  </div>

                  <div className="text-center">
                    <p className="font-display text-2xl font-bold">{flight.arrival}</p>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mt-0.5">{destination.toUpperCase()}</p>
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="p-5 bg-[hsl(var(--cream-dark))/40] border-t md:border-t-0 md:border-l border-border flex flex-col items-center justify-center gap-3 min-w-[160px]">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Total per person</p>
                    <p className="font-display text-3xl font-bold text-primary">${flight.price}</p>
                  </div>
                  <Button asChild className="w-full btn-gold rounded-xl font-semibold text-sm h-10">
                    <Link href={`/checkout?flightId=${flight.id}&price=${flight.price}`}>
                      Select Flight
                    </Link>
                  </Button>
                  <Badge
                    variant="outline"
                    className={`text-[9px] font-bold uppercase tracking-widest ${flight.type === "Business" ? "border-secondary text-secondary" : "border-border"}`}
                  >
                    {flight.type}
                  </Badge>
                </div>
              </div>
            </div>
          ))}

          {/* Load more prompt */}
          <Card className="bg-primary/5 border-dashed border-2 border-primary/20 rounded-2xl">
            <CardContent className="p-8 text-center space-y-3">
              <Clock className="h-8 w-8 text-primary/40 mx-auto" />
              <p className="font-semibold text-sm">Need more options?</p>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                Our SyncIntelligence engine is searching 500+ airlines in real-time for the best fares.
              </p>
              <Button variant="outline" size="sm" className="rounded-full border-primary text-primary font-semibold mt-1">
                Load More Flights
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
