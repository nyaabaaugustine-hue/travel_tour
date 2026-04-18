
"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Compass } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function DestinationsPage() {
  const destinations = PlaceHolderImages.filter(img => img.id.startsWith('dest-'));

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary/5 py-16 border-b">
          <div className="container mx-auto px-4 text-center space-y-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1">
              Explore the World
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Discover Your Next Adventure</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From the neon lights of Tokyo to the historic streets of Paris, find the perfect destination for your next trip.
            </p>
            <div className="max-w-md mx-auto relative pt-4">
              <Search className="absolute left-3 top-7 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search destinations..." className="pl-10 h-12 bg-white shadow-sm" />
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <Card key={dest.id} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all cursor-pointer">
                <div className="relative h-72">
                  <Image 
                    src={dest.imageUrl} 
                    alt={dest.description} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint={dest.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="backdrop-blur-md bg-white/30 text-white border-white/20">
                      Trending
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary-foreground/80" />
                      <h3 className="text-2xl font-bold capitalize">{dest.id.split('-')[1]}</h3>
                    </div>
                    <p className="text-white/80 text-sm line-clamp-2">
                      Experience the unique culture and breathtaking views of {dest.id.split('-')[1].toUpperCase()}.
                    </p>
                    <div className="pt-2 flex justify-between items-center">
                      <span className="text-xs font-medium uppercase tracking-widest text-white/60">Starting from</span>
                      <span className="text-xl font-black">$499</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    <Compass className="h-4 w-4" />
                    View Travel Guide
                  </div>
                  <Badge variant="outline" className="border-primary/20 text-primary">8.9/10 Rating</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
