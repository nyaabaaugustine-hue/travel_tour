"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar as CalendarIcon, Users, Search, ArrowRightLeft, Plane, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TRIP_TYPES = ["Round Trip", "One Way", "Multi-City"];

export function FlightSearchForm() {
  const router = useRouter();
  const [tripType, setTripType] = useState("Round Trip");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState("1");
  const [cabinClass, setCabinClass] = useState("economy");
  const [loading, setLoading] = useState(false);

  // Single handler — called by the overlay click OR the Search button submit
  const openDuffel = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/duffel/create-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference: `milehigh_${Date.now()}` }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        // fallback: go to /flights page so user sees the error there
        router.push("/flights");
      }
    } catch {
      router.push("/flights");
    }
    // don't setLoading(false) — we're navigating away
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openDuffel();
  };

  return (
    // Outer wrapper: position relative so the invisible overlay can sit on top
    <div className="space-y-5 relative">

      {/* ── Invisible click-catcher overlay ──────────────────────────────────
          Sits above the entire widget. Pointer-events only on the overlay,
          so the real inputs still look interactive visually.
          On any click/touch anywhere in the form area → openDuffel().        */}
      <div
        onClick={openDuffel}
        className="absolute inset-0 z-10 cursor-pointer rounded-3xl"
        aria-label="Open flight booking"
      />

      {/* Loading spinner shown over the widget while session is being created */}
      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center rounded-3xl bg-black/30 backdrop-blur-sm">
          <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white font-semibold text-sm">
            <Loader2 className="h-4 w-4 animate-spin" />
            Opening secure booking…
          </div>
        </div>
      )}

      {/* Trip type tabs */}
      <div className="flex items-center gap-1 bg-black/10 rounded-full p-1 w-fit">
        {TRIP_TYPES.map(type => (
          <button
            key={type}
            type="button"
            onClick={() => setTripType(type)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200",
              tripType === type
                ? "bg-white text-primary shadow-sm"
                : "text-white/80 hover:text-white"
            )}
          >
            {type}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
          {/* Origin */}
          <div className="md:col-span-3 space-y-1.5">
            <Label className="text-xs font-semibold uppercase tracking-widest text-white/70">From</Label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary" />
              <Input
                placeholder="City or airport"
                className="pl-10 bg-white/95 border-transparent focus:border-secondary/50 rounded-xl text-foreground placeholder:text-muted-foreground font-medium h-[52px]"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
            </div>
          </div>

          {/* Swap */}
          <div className="hidden md:flex md:col-span-1 items-end pb-1 justify-center">
            <Button
              type="button"
              size="icon"
              className="h-9 w-9 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 text-white transition-all hover:rotate-180 duration-300"
              onClick={() => { const t = origin; setOrigin(destination); setDestination(t); }}
            >
              <ArrowRightLeft className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Destination */}
          <div className="md:col-span-3 space-y-1.5">
            <Label className="text-xs font-semibold uppercase tracking-widest text-white/70">To</Label>
            <div className="relative">
              <Plane className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary rotate-45" />
              <Input
                placeholder="City or airport"
                className="pl-10 bg-white/95 border-transparent focus:border-secondary/50 rounded-xl text-foreground placeholder:text-muted-foreground font-medium h-[52px]"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          {/* Departure */}
          <div className="md:col-span-2 space-y-1.5">
            <Label className="text-xs font-semibold uppercase tracking-widest text-white/70">Departure</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-[52px] justify-start text-left bg-white/95 border-transparent hover:bg-white rounded-xl font-medium",
                    !departureDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-secondary shrink-0" />
                  <span className="truncate text-sm">
                    {departureDate ? format(departureDate, "MMM d, yyyy") : "Select date"}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 rounded-2xl border-border shadow-luxury-lg" align="start">
                <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus disabled={(d) => d < new Date()} />
              </PopoverContent>
            </Popover>
          </div>

          {/* Return / Travelers */}
          {tripType === "Round Trip" ? (
            <div className="md:col-span-2 space-y-1.5">
              <Label className="text-xs font-semibold uppercase tracking-widest text-white/70">Return</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-[52px] justify-start text-left bg-white/95 border-transparent hover:bg-white rounded-xl font-medium",
                      !returnDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-secondary shrink-0" />
                    <span className="truncate text-sm">
                      {returnDate ? format(returnDate, "MMM d, yyyy") : "Select date"}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 rounded-2xl border-border shadow-luxury-lg" align="start">
                  <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus disabled={(d) => d < (departureDate || new Date())} />
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <div className="md:col-span-2 space-y-1.5">
              <Label className="text-xs font-semibold uppercase tracking-widest text-white/70">Travelers</Label>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="h-[52px] bg-white/95 border-transparent rounded-xl font-medium">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-secondary shrink-0" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  {["1","2","3","4"].map(n => (
                    <SelectItem key={n} value={n} className="rounded-xl">{n} {n === "1" ? "Passenger" : "Passengers"}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Search CTA */}
          <div className="md:col-span-1">
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-[52px] btn-gold rounded-xl text-sm font-bold tracking-wide shadow-gold gap-2 pulse-glow"
            >
              {loading
                ? <Loader2 className="h-4 w-4 animate-spin" />
                : <><Search className="h-4 w-4" /><span className="hidden lg:inline">Search</span></>
              }
            </Button>
          </div>
        </div>

        {/* Secondary row — Travelers + Cabin class */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3">
          {tripType === "Round Trip" && (
            <div className="col-span-1 md:col-span-3 space-y-1.5">
              <Label className="text-xs font-semibold uppercase tracking-widest text-white/60">Travelers</Label>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="h-10 bg-white/80 border-transparent rounded-xl font-medium text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-secondary shrink-0" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  {["1","2","3","4"].map(n => (
                    <SelectItem key={n} value={n} className="rounded-xl">{n} {n === "1" ? "Passenger" : "Passengers"}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          <div className="col-span-1 md:col-span-3 space-y-1.5">
            <Label className="text-xs font-semibold uppercase tracking-widest text-white/60">Cabin Class</Label>
            <Select value={cabinClass} onValueChange={setCabinClass}>
              <SelectTrigger className="h-10 bg-white/80 border-transparent rounded-xl font-medium text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-2xl">
                <SelectItem value="economy" className="rounded-xl">Economy</SelectItem>
                <SelectItem value="premium" className="rounded-xl">Premium Economy</SelectItem>
                <SelectItem value="business" className="rounded-xl">Business Class</SelectItem>
                <SelectItem value="first" className="rounded-xl">First Class</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </div>
  );
}
