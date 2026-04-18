
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { FlightSearchForm } from "@/components/flight-search-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Plane, 
  ShieldCheck, 
  CreditCard, 
  Clock, 
  PlaneTakeoff, 
  Star, 
  Smartphone, 
  Globe, 
  Quote, 
  Check, 
  ArrowRight,
  Mail
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-travel");
  const appImage = PlaceHolderImages.find((img) => img.id === "app-mockup");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[750px] w-full overflow-hidden flex items-center justify-center">
          {heroImage?.imageUrl && (
            <div className="absolute inset-0">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description || "Travel"}
                fill
                className="object-cover brightness-50"
                priority
                data-ai-hint={heroImage.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
            </div>
          )}
          
          <div className="container relative z-10 mx-auto px-4 py-20">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center space-y-6 animate-in fade-in slide-in-from-top-10 duration-1000">
                <Badge className="bg-primary/20 text-white border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm mb-4">
                  🚀 Synchronized Flight Intelligence
                </Badge>
                <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
                  Travel in Perfect <span className="gradient-text bg-gradient-to-r from-blue-300 to-indigo-200">Synchronicity</span>
                </h1>
                <p className="text-xl text-white/80 font-medium sm:text-2xl drop-shadow-md max-w-3xl mx-auto leading-relaxed">
                  Real-time synchronization with over 500+ global airlines. Find, book, and manage your journeys with absolute precision.
                </p>
              </div>
              
              <div className="glass-morphism rounded-[2rem] p-4 md:p-8 animate-in zoom-in-95 duration-700 delay-300">
                <FlightSearchForm />
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 bg-white border-y">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2"><Plane className="h-6 w-6" /><span className="font-black text-xl">SKYLINE</span></div>
              <div className="flex items-center gap-2"><Globe className="h-6 w-6" /><span className="font-black text-xl">GLOBAL</span></div>
              <div className="flex items-center gap-2"><Clock className="h-6 w-6" /><span className="font-black text-xl">NOMAD</span></div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-6 w-6" /><span className="font-black text-xl">VIRTUE</span></div>
              <div className="flex items-center gap-2"><PlaneTakeoff className="h-6 w-6" /><span className="font-black text-xl">AERO</span></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto py-32 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary text-primary px-4 py-1">Our Advantage</Badge>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Enterprise-Grade <br/>Travel Management</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We don't just book flights; we synchronize your entire travel ecosystem. From real-time price matching to automated itinerary management.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">SyncSecurity™</h4>
                    <p className="text-sm text-muted-foreground">AES-256 encrypted transactions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Real-Time Sync</h4>
                    <p className="text-sm text-muted-foreground">Instant gate & price alerts.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Global Network</h4>
                    <p className="text-sm text-muted-foreground">500+ carriers integrated.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Priority Support</h4>
                    <p className="text-sm text-muted-foreground">24/7 VIP concierge desk.</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="rounded-full px-8 h-14 font-bold">
                Experience the Sync <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <FeatureImage src="https://picsum.photos/seed/fe1/400/500" hint="business travel" />
                  <FeatureImage src="https://picsum.photos/seed/fe2/400/300" hint="luxury airport" />
                </div>
                <div className="space-y-4">
                  <FeatureImage src="https://picsum.photos/seed/fe3/400/300" hint="airplane wing" />
                  <FeatureImage src="https://picsum.photos/seed/fe4/400/500" hint="modern traveler" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="bg-slate-50 py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="space-y-4">
                <Badge className="bg-secondary/10 text-secondary border-none">Global Trends</Badge>
                <h2 className="font-headline text-4xl font-bold tracking-tight">Top Synchronized Destinations</h2>
                <p className="text-muted-foreground text-lg">Curated routes based on real-time availability and trending demand.</p>
              </div>
              <Button asChild variant="outline" className="rounded-full px-8">
                <Link href="/destinations">Explore All Destinations</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PlaceHolderImages.filter(img => img.id.startsWith('dest-')).slice(0, 3).map((dest) => (
                <Link href="/destinations" key={dest.id} className="group">
                  <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-4">
                    <Image 
                      src={dest.imageUrl} 
                      alt={dest.description} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      data-ai-hint={dest.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-white/20 backdrop-blur-md text-white border-white/20">Top Pick</Badge>
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 space-y-4">
                      <h3 className="text-white font-bold text-3xl uppercase tracking-tight">{dest.id.split('-')[1]}</h3>
                      <div className="flex justify-between items-center pt-4 border-t border-white/20">
                        <span className="text-white/60 text-sm font-medium">Starting from</span>
                        <span className="text-white font-black text-2xl">$299</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
               <Quote className="h-12 w-12 text-primary/20 mx-auto" />
               <h2 className="text-4xl font-bold tracking-tight">What Our Travelers Say</h2>
               <p className="text-muted-foreground text-lg">Join thousands of professionals who synchronize their travel with us.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <TestimonialCard 
                name="David Sterling"
                role="CEO, Sterling Global"
                content="VoyageSync has completely transformed how our team handles international travel. The real-time synchronization is a game-changer for tight schedules."
                image="https://picsum.photos/seed/p1/100/100"
              />
              <TestimonialCard 
                name="Sarah Jenkins"
                role="Operations Lead, TechFlow"
                content="The most seamless booking experience I've ever used. The interface is intuitive, and the price synchronization actually works as promised."
                image="https://picsum.photos/seed/p2/100/100"
              />
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="py-32 bg-primary overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 text-white">
                <Badge className="bg-white/20 text-white border-white/20">Mobile Sync</Badge>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight">
                  Your Journey, <br/>In Your Pocket
                </h2>
                <p className="text-white/80 text-xl leading-relaxed max-w-xl">
                  Download the VoyageSync app for exclusive mobile-only deals and real-time push notifications for all your flight updates.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" variant="secondary" className="rounded-full h-16 px-8 font-bold gap-2">
                    <Smartphone className="h-5 w-5" /> App Store
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-16 px-8 font-bold gap-2 text-white border-white hover:bg-white/10">
                    <Smartphone className="h-5 w-5" /> Google Play
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-8">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-primary bg-slate-200 overflow-hidden">
                        <img src={`https://picsum.photos/seed/user${i}/40/40`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-bold">4.9/5 Rating from 2M+ Users</p>
                </div>
              </div>
              
              <div className="relative animate-float">
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                  <Image 
                    src={appImage?.imageUrl || ""} 
                    alt="App Mockup" 
                    width={800} 
                    height={600} 
                    className="object-cover"
                    data-ai-hint="smartphone app"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 h-64 w-64 bg-secondary rounded-full blur-[100px] opacity-30" />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto glass-morphism bg-white/10 border-white/10 p-12 rounded-[3rem] text-center space-y-8">
              <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Stay Synchronized</h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                Get the latest deals, travel insights, and airline updates directly in your inbox. No spam, just precision travel.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-4">
                <Input placeholder="Enter your email" className="h-14 bg-white/10 border-white/20 rounded-full px-6 text-white placeholder:text-slate-500 focus:ring-primary" />
                <Button className="h-14 rounded-full px-10 font-bold bg-primary hover:bg-primary/90">Subscribe</Button>
              </form>
              <p className="text-xs text-slate-500">By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white border-t py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <PlaneTakeoff className="h-6 w-6" />
              </div>
              <span className="font-headline text-2xl font-black text-primary tracking-tight">VoyageSync</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Elevating the global travel experience through real-time intelligence and seamless synchronization.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Globe className="h-4 w-4" />} />
              <SocialIcon icon={<Mail className="h-4 w-4" />} />
              <SocialIcon icon={<Globe className="h-4 w-4" />} />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-foreground">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <FooterLink>Flight Search</FooterLink>
              <FooterLink>Group Booking</FooterLink>
              <FooterLink>Corporate Sync</FooterLink>
              <FooterLink>Travel Guides</FooterLink>
              <FooterLink>Premium Lounge</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-foreground">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Network</FooterLink>
              <FooterLink>Special Deals</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Press Kit</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-foreground">Support</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <FooterLink>Help Center</FooterLink>
              <FooterLink>Contact Support</FooterLink>
              <FooterLink>Safety Center</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-24 pt-8 border-t text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} VoyageSync Global Inc. Built for the modern traveler.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureImage({ src, hint }: { src: string, hint: string }) {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
      <Image 
        src={src} 
        alt={hint} 
        width={400} 
        height={500} 
        className="object-cover"
        data-ai-hint={hint}
      />
    </div>
  );
}

function TestimonialCard({ name, role, content, image }: { name: string, role: string, content: string, image: string }) {
  return (
    <Card className="rounded-3xl border-none bg-slate-50 p-8 space-y-6">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-sm">{name}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-primary text-primary" />)}
        </div>
      </div>
      <p className="text-muted-foreground italic leading-relaxed">"{content}"</p>
    </Card>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all cursor-pointer">
      {icon}
    </div>
  );
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
      <div className="h-1 w-1 rounded-full bg-slate-300" />
      {children}
    </li>
  );
}
