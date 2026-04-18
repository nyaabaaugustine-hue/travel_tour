
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { FlightSearchForm } from "@/components/flight-search-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, ShieldCheck, CreditCard, Clock, PlaneTakeoff } from "lucide-react";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-travel");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] w-full overflow-hidden">
          <Image
            src={heroImage?.imageUrl || ""}
            alt={heroImage?.description || "Travel"}
            fill
            className="object-cover brightness-75"
            priority
            data-ai-hint={heroImage?.imageHint}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-5xl space-y-8">
              <div className="text-center space-y-4">
                <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow-lg">
                  Synchronizing Your Travels Effortlessly
                </h1>
                <p className="text-lg text-white/90 font-medium sm:text-xl drop-shadow-md">
                  Discover the best flight deals across 500+ airlines worldwide.
                </p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8">
                <FlightSearchForm />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto py-20 px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline text-3xl font-bold">Why Choose VoyageSync?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide a seamless booking experience backed by world-class technology and customer support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Plane className="h-6 w-6 text-primary" />}
              title="Global Reach"
              description="Access to millions of flights worldwide from hundreds of carriers."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-6 w-6 text-primary" />}
              title="Secure Booking"
              description="Your data is protected with enterprise-grade encryption and security."
            />
            <FeatureCard 
              icon={<CreditCard className="h-6 w-6 text-primary" />}
              title="Flexible Payments"
              description="Pay your way with multiple payment options including Stripe and more."
            />
            <FeatureCard 
              icon={<Clock className="h-6 w-6 text-primary" />}
              title="Real-time Updates"
              description="Get instant notifications on price changes and flight statuses."
            />
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-10">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold">Popular Destinations</h2>
                <p className="text-muted-foreground">Trending places to visit this season.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PlaceHolderImages.filter(img => img.id.startsWith('dest-')).map((dest) => (
                <Card key={dest.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                  <div className="relative h-64">
                    <Image 
                      src={dest.imageUrl} 
                      alt={dest.description} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={dest.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-bold text-xl">{dest.id.split('-')[1].toUpperCase()}</h3>
                      <p className="text-white/80 text-sm">Flights starting from $299</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <PlaneTakeoff className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl font-bold text-primary">VoyageSync</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your one-stop destination for global flight bookings and travel management.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Discover</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Destinations</li>
              <li>Airlines</li>
              <li>Hotels</li>
              <li>Travel Guides</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="p-0 space-y-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
