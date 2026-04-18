
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar as CalendarIcon, Users, Search, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function FlightSearchForm() {
  const router = useRouter();
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
    <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
      {/* Origin */}
      <div className="md:col-span-2 space-y-2 relative">
        <Label htmlFor="origin" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">From</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
          <Input 
            id="origin"
            placeholder="Origin (e.g. ACC)" 
            className="pl-10 h-14 bg-white border-2 focus:border-primary/50 transition-all rounded-xl shadow-sm"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Destination */}
      <div className="md:col-span-2 space-y-2 relative">
        <Label htmlFor="destination" className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">To</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
          <Input 
            id="destination"
            placeholder="Destination (e.g. LHR)" 
            className="pl-10 h-14 bg-white border-2 focus:border-primary/50 transition-all rounded-xl shadow-sm"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
          <Button 
            type="button"
            variant="outline" 
            size="icon" 
            className="absolute -left-5 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white border-2 shadow-sm md:flex hidden z-10 hover:bg-muted border-primary/20"
            onClick={() => {
              const temp = origin;
              setOrigin(destination);
              setDestination(temp);
            }}
          >
            <ArrowRightLeft className="h-3 w-3 text-primary" />
          </Button>
        </div>
      </div>

      {/* Departure Date */}
      <div className="md:col-span-2 space-y-2">
        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Departure</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full h-14 justify-start text-left font-normal bg-white border-2 rounded-xl focus:border-primary/50 shadow-sm",
                !departureDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
              {departureDate ? format(departureDate, "PPP") : <span className="text-sm">Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={departureDate}
              onSelect={setDepartureDate}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Return Date */}
      <div className="md:col-span-2 space-y-2">
        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Return</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full h-14 justify-start text-left font-normal bg-white border-2 rounded-xl focus:border-primary/50 shadow-sm",
                !returnDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
              {returnDate ? format(returnDate, "PPP") : <span className="text-sm">One-way</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={returnDate}
              onSelect={setReturnDate}
              initialFocus
              disabled={(date) => date < (departureDate || new Date())}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Passengers */}
      <div className="md:col-span-2 space-y-2">
        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Travelers</Label>
        <Select value={passengers} onValueChange={setPassengers}>
          <SelectTrigger className="h-14 bg-white border-2 rounded-xl focus:border-primary/50 shadow-sm">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <SelectValue />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Passenger</SelectItem>
            <SelectItem value="2">2 Passengers</SelectItem>
            <SelectItem value="3">3 Passengers</SelectItem>
            <SelectItem value="4">4+ Passengers</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Search Button */}
      <div className="md:col-span-2">
        <Button type="submit" className="w-full h-14 font-black text-lg shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 text-white rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]">
          <Search className="mr-2 h-5 w-5" /> Search
        </Button>
      </div>
    </form>
  );
}
