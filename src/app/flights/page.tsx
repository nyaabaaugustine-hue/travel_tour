"use client";

import { useState, useRef } from "react";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Plane, CreditCard, CheckCircle, ExternalLink } from "lucide-react";

export default function FlightsPage() {
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    departure: "",
    return: "",
    passengers: 1,
  });
  const [showDuffel, setShowDuffel] = useState(false);
  const duffelContainerRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    setShowDuffel(true);
    // Load Duffel Links script
    const script = document.createElement("script");
    script.src = "https://cdn.duffel.com/links/v1/duffel-links.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).DuffelLinks && duffelContainerRef.current) {
        (window as any).DuffelLinks({
          container: duffelContainerRef.current,
          reference: "voyagesync_" + Date.now(),
          logo_url: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776535724/aaaaaaa_xu7z9a.png",
          primary_color: "#1a4731",
          secondary_color: "#e09c0b",
          markup_amount: 20,
          markup_currency: "USD",
          success_url: "http://localhost:9002/confirmation/duffel-success",
          failure_url: "http://localhost:9002/flights/failure",
          abandonment_url: "http://localhost:9002/flights?abandoned=true",
        });
      }
    };
    document.body.appendChild(script);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="relative bg-primary text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Search Flights
            </h1>
            <p className="text-xl text-white/80">
              Find the best deals across 500+ airlines
            </p>
          </div>
        </section>

        <section className="py-12 -mt-8 relative z-20">
          <div className="container mx-auto px-4">
            <Card className="luxury-card rounded-[5%] shadow-2xl">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">From</label>
                    <Input 
                      placeholder="ACC (Accra)" 
                      className="h-12 rounded-[5%]"
                      value={searchData.from}
                      onChange={(e) => setSearchData({...searchData, from: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">To</label>
                    <Input 
                      placeholder="LHR (London)" 
                      className="h-12 rounded-[5%]"
                      value={searchData.to}
                      onChange={(e) => setSearchData({...searchData, to: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Departure</label>
                    <Input 
                      type="date"
                      className="h-12 rounded-[5%]"
                      value={searchData.departure}
                      onChange={(e) => setSearchData({...searchData, departure: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Return (Optional)</label>
                    <Input 
                      type="date"
                      className="h-12 rounded-[5%]"
                      value={searchData.return}
                      onChange={(e) => setSearchData({...searchData, return: e.target.value})}
                    />
                  </div>
                </div>
                <Button 
                  onClick={handleSearch}
                  className="w-full h-12 rounded-[5%] font-semibold"
                >
                  <Plane className="mr-2 h-4 w-4" />
                  Search Flights
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {showDuffel && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <Card className="luxury-card rounded-[5%]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-100 text-green-700 rounded-[5%]">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Powered by Duffel
                    </Badge>
                    <span className="text-xs text-muted-foreground">Real-time pricing</span>
                  </div>
                  <div ref={duffelContainerRef} className="min-h-[600px]" />
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="luxury-card rounded-[5%]">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-[5%] flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">500+ Airlines</h3>
                  <p className="text-sm text-muted-foreground">Access to major global carriers</p>
                </CardContent>
              </Card>
              <Card className="luxury-card rounded-[5%]">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-[5%] flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Best Prices</h3>
                  <p className="text-sm text-muted-foreground">We match any lower price</p>
                </CardContent>
              </Card>
              <Card className="luxury-card rounded-[5%]">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-[5%] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Instant Booking</h3>
                  <p className="text-sm text-muted-foreground">Confirmed in seconds</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}