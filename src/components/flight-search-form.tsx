
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
    <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="origin" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">From</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              id="origin"
              placeholder="Origin (e.g. NYC)" 
              className="pl-10 h-12 bg-white"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="space-y-2 relative">
          <Label htmlFor="destination" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">To</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              id="destination"
              placeholder="Destination (e.g. LON)" 
              className="pl-10 h-12 bg-white"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
            <Button 
              type="button"
              variant="secondary" 
              size="icon" 
              className="absolute -left-6 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full border shadow-sm md:flex hidden z-10"
              onClick={() => {
                const temp = origin;
                setOrigin(destination);
                setDestination(temp);
              }}
            >
              <ArrowRightLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="md:col-span-4 grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Departure</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full h-12 justify-start text-left font-normal bg-white",
                  !departureDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
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
        <div className="space-y-2">
          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Return (Optional)</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full h-12 justify-start text-left font-normal bg-white",
                  !returnDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {returnDate ? format(returnDate, "PPP") : <span>One-way</span>}
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
      </div>

      <div className="md:col-span-3 grid grid-cols-1 gap-4 pt-0 md:pt-0">
        <div className="grid grid-cols-2 gap-2">
           <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Passengers</Label>
             <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="h-12 bg-white">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
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
          <div className="space-y-2 flex items-end">
             <Button type="submit" className="w-full h-12 font-bold shadow-lg shadow-primary/20 bg-secondary hover:bg-secondary/90">
               <Search className="mr-2 h-4 w-4" /> Search
             </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
