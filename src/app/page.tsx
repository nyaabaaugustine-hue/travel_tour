
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { FlightSearchForm } from "@/components/flight-search-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, ShieldCheck, CreditCard, Clock, PlaneTakeoff } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-travel");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[650px] w-full overflow-hidden">
          {heroImage?.imageUrl && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description || "Travel"}
              fill
              className="object-cover brightness-75"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-7xl space-y-10">
              <div className="text-center space-y-4">
                <h1 className="font-headline text-5xl font-extrabold tracking-tight text-white sm:text-7xl drop-shadow-lg">
                  Synchronizing Your Travels Effortlessly
                </h1>
                <p className="text-xl text-white/90 font-medium sm:text-2xl drop-shadow-md max-w-3xl mx-auto">
                  Discover the best flight deals across 500+ airlines worldwide with real-time price synchronization.
                </p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10 border border-white/20">
                <FlightSearchForm />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto py-24 px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline text-4xl font-bold tracking-tight">Why Choose VoyageSync?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We provide a seamless booking experience backed by world-class technology and customer support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FeatureCard 
              icon={<Plane className="h-8 w-8 text-primary" />}
              title="Global Reach"
              description="Access to millions of flights worldwide from hundreds of carriers including low-cost and major airlines."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-8 w-8 text-primary" />}
              title="Secure Booking"
              description="Your data is protected with enterprise-grade AES-256 encryption and PCI-compliant processing."
            />
            <FeatureCard 
              icon={<CreditCard className="h-8 w-8 text-primary" />}
              title="Flexible Payments"
              description="Pay your way with multiple payment options including credit cards, digital wallets, and more."
            />
            <FeatureCard 
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="Real-time Updates"
              description="Get instant notifications on price changes, flight statuses, and gate assignments automatically."
            />
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tight">Popular Destinations</h2>
                <p className="text-muted-foreground text-lg">Trending places to visit this season.</p>
              </div>
              <Link href="/destinations" className="text-primary font-bold hover:underline flex items-center gap-1">
                View All Destinations
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PlaceHolderImages.filter(img => img.id.startsWith('dest-')).slice(0, 3).map((dest) => (
                <Link href="/destinations" key={dest.id}>
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all border-none">
                    <div className="relative h-80">
                      <Image 
                        src={dest.imageUrl} 
                        alt={dest.description} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        data-ai-hint={dest.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white font-bold text-2xl uppercase tracking-tight">{dest.id.split('-')[1]}</h3>
                        <p className="text-white/80 text-sm font-medium">Flights starting from $299</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white border-t py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <PlaneTakeoff className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary tracking-tight">VoyageSync</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your one-stop destination for global flight bookings and travel management. Synchronizing your world, one journey at a time.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-foreground">Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Contact Us</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-foreground">Discover</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link href="/flights" className="hover:text-primary transition-colors">Airlines</Link></li>
              <li><Link href="/deals" className="hover:text-primary transition-colors">Special Deals</Link></li>
              <li className="hover:text-primary transition-colors cursor-pointer">Travel Guides</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-foreground">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Twitter</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-primary transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Facebook</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} VoyageSync Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="p-0 space-y-4">
        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-bold text-xl tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
