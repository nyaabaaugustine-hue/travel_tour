"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar as CalendarIcon, Users, Search, ArrowRightLeft, Plane } from "lucide-react";
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      origin,
      destination,
      departureDate: departureDate ? format(departureDate, 'yyyy-MM-dd') : '',
      returnDate: returnDate ? format(returnDate, 'yyyy-MM-dd') : '',
      passengers,
      cabinClass
    });
    router.push(`/flights?${params.toString()}`);
  };

  return (
    <div className="space-y-5">
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

      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
        {/* Origin */}
        <div className="md:col-span-3 space-y-1.5 relative">
          <Label className="text-xs font-semibold uppercase tracking-widest text-white/70">From</Label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary" />
            <Input
              placeholder="City or airport"
              className="pl-10 h-13 bg-white/95 border-transparent focus:border-secondary/50 rounded-xl text-foreground placeholder:text-muted-foreground font-medium h-[52px]"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Swap button */}
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
              required
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

        {/* Return */}
        {tripType === "Round Trip" && (
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
        )}

        {/* Passengers + class compact */}
        <div className={cn("space-y-1.5", tripType === "Round Trip" ? "md:col-span-1 hidden lg:block" : "md:col-span-3")}>
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

        {/* Search CTA */}
        <div className={cn(tripType === "Round Trip" ? "md:col-span-1" : "md:col-span-2")}>
          <Button
            type="submit"
            className="w-full h-[52px] btn-gold rounded-xl text-sm font-bold tracking-wide shadow-gold gap-2 pulse-glow"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
