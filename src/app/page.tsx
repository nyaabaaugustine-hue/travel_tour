
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { FlightSearchForm } from "@/components/flight-search-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Plane, 
  ShieldCheck, 
  Clock, 
  PlaneTakeoff, 
  Star, 
  Globe, 
  Quote, 
  ArrowRight,
  Mail,
  Heart,
  Lock,
  Award,
  Shield,
  CheckCircle,
  Zap
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-travel");
  const logo = PlaceHolderImages.find(img => img.id === "business-logo");

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
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background" />
            </div>
          )}
          
          <div className="container relative z-10 mx-auto px-4 py-20">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center space-y-6 animate-in fade-in slide-in-from-top-10 duration-1000">
                <div className="flex justify-center gap-1 mb-2">
                  <div className="w-8 h-1 bg-red-600 rounded-full" />
                  <div className="w-8 h-1 bg-yellow-400 rounded-full" />
                  <div className="w-8 h-1 bg-green-600 rounded-full" />
                </div>
                <Badge className="bg-primary/20 text-white border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm mb-4">
                  🇬🇭 Travel With Pride • Synchronized Global Routes
                </Badge>
                <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
                  Voyage with <span className="gradient-text">Sync Intelligence</span>
                </h1>
                <p className="text-xl text-white/80 font-medium sm:text-2xl drop-shadow-md max-w-3xl mx-auto leading-relaxed">
                  Real-time synchronization with over 500+ global airlines. Discover the beauty of the world from the heart of West Africa.
                </p>
              </div>
              
              <div className="glass-morphism rounded-[2rem] p-4 md:p-8 animate-in zoom-in-95 duration-700 delay-300">
                <FlightSearchForm />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto py-32 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary text-primary px-4 py-1">Experience the Excellence</Badge>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Modern Travel <br/>Rooted in Hospitality</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We blend the warmth of Ghanaian hospitality with world-class technology to synchronize your entire travel ecosystem.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Safe Passage</h4>
                    <p className="text-sm text-muted-foreground">Secure, encrypted global bookings.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary/20 flex items-center justify-center text-primary">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Warm Support</h4>
                    <p className="text-sm text-muted-foreground">Attentive service at every step.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Global Connect</h4>
                    <p className="text-sm text-muted-foreground">Connecting you to 500+ cities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary/20 flex items-center justify-center text-primary">
                    <Star className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">VIP Status</h4>
                    <p className="text-sm text-muted-foreground">Exclusive benefits for members.</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="rounded-full px-8 h-14 font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-secondary/20 to-red-500/10 blur-3xl rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <FeatureImage src="https://picsum.photos/seed/gh1/400/500" hint="modern accra" />
                  <FeatureImage src="https://picsum.photos/seed/gh2/400/300" hint="business traveler" />
                </div>
                <div className="space-y-4">
                  <FeatureImage src="https://picsum.photos/seed/gh3/400/300" hint="luxury jet" />
                  <FeatureImage src="https://picsum.photos/seed/gh4/400/500" hint="ghanaian culture" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="bg-slate-50 py-32 overflow-hidden border-y">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="space-y-4">
                <Badge className="bg-secondary/20 text-foreground border-none">African Destinations</Badge>
                <h2 className="font-headline text-4xl font-bold tracking-tight">Trending Across Africa</h2>
                <p className="text-muted-foreground text-lg">Curated routes based on regional travel patterns and local demand.</p>
              </div>
              <Button asChild variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary/5">
                <Link href="/destinations">Explore All Destinations</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PlaceHolderImages.filter(img => img.id.startsWith('dest-')).slice(0, 6).map((dest) => (
                <Link href="/destinations" key={dest.id} className="group">
                  <div className="relative h-[375px] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-4">
                    <Image 
                      src={dest.imageUrl} 
                      alt={dest.description} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      data-ai-hint={dest.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-primary text-white border-none shadow-lg">Trending</Badge>
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 space-y-4">
                      <h3 className="text-white font-bold text-2xl uppercase tracking-tight">{dest.id.split('-')[1]}</h3>
                      <div className="flex justify-between items-center pt-4 border-t border-white/20">
                        <span className="text-white/60 text-sm font-medium">Starting from</span>
                        <span className="text-secondary font-black text-xl">$199</span>
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
               <h2 className="text-4xl font-bold tracking-tight">Testimonials</h2>
               <p className="text-muted-foreground text-lg">See why thousands of Ghanaian travelers trust VoyageSync.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <TestimonialCard 
                name="Kwame Mensah"
                role="Export Director, Accra"
                content="The synchronization between routes is perfect. I can now manage my business travels across Africa and Europe with one seamless app."
                image="https://picsum.photos/seed/ghperson1/100/100"
              />
              <TestimonialCard 
                name="Efua Addo"
                role="Creative Consultant"
                content="Beautiful interface and excellent service. The Ghanaian hospitality really shows in their support team's attitude."
                image="https://picsum.photos/seed/ghperson2/100/100"
              />
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-1/2" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto glass-morphism bg-white/5 border-white/10 p-12 rounded-[3rem] text-center space-y-8">
              <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Stay Synchronized</h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                Join our travel community for the latest deals and insights.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-4">
                <Input placeholder="Enter your email" className="h-14 bg-white/10 border-white/20 rounded-full px-6 text-white placeholder:text-slate-500 focus:ring-primary" />
                <Button className="h-14 rounded-full px-10 font-bold bg-primary hover:bg-primary/90 text-white">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      {/* Redesigned Trust-First Footer */}
      <footer className="bg-slate-50 pt-16 border-t overflow-hidden">
        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Trust & Badges Section */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-800">Trusted by over 1 million people across the globe.</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
                  <BadgeContainer icon={<Award className="h-6 w-6" />} label="2023 Winner" color="bg-green-100 text-green-700" />
                  <BadgeContainer icon={<Star className="h-6 w-6" />} label="Top Rated" color="bg-primary/10 text-primary" />
                  <BadgeContainer icon={<Globe className="h-6 w-6" />} label="Global Award" color="bg-yellow-100 text-yellow-700" />
                  <BadgeContainer icon={<Zap className="h-6 w-6" />} label="Fastest Growing" color="bg-blue-100 text-blue-700" />
                </div>
              </div>

              <div className="flex items-center gap-6 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 leading-none">PCI DSS</p>
                    <p className="text-xs font-black text-slate-800">Certified by SISA</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div className="flex items-center gap-2">
                  <Lock className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 leading-none">SECURED BY</p>
                    <p className="text-xs font-black text-slate-800">SECTIGO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-900">About Us</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <FooterLink>Home</FooterLink>
                  <FooterLink>Terms of Services</FooterLink>
                  <FooterLink>Privacy Statement</FooterLink>
                  <FooterLink>Blog</FooterLink>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-900">Our Services</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <FooterLink>Flights</FooterLink>
                  <FooterLink>Holidays</FooterLink>
                  <FooterLink>Cruises</FooterLink>
                  <FooterLink>Hotels</FooterLink>
                  <FooterLink>eSIM</FooterLink>
                  <FooterLink>Airlines</FooterLink>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-900">Customer Support</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <FooterLink>FAQ</FooterLink>
                  <FooterLink>Why Us</FooterLink>
                  <FooterLink>Contact Us</FooterLink>
                  <FooterLink>Careers</FooterLink>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="bg-slate-100/50 py-12 border-y">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block px-4 py-1 mb-8 bg-white border rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 shadow-sm">
              Our Proud Partners
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
              <PartnerLogo name="CIH BANK" />
              <PartnerLogo name="MSC CRUISES" />
              <PartnerLogo name="NORWEGIAN" />
              <PartnerLogo name="SAUDI TOURISM" />
              <PartnerLogo name="ROYAL CARIBBEAN" />
              <PartnerLogo name="WOMEN OF VALOUR" />
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="bg-slate-900 text-white py-6">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium tracking-wide">
            <p>© {new Date().getFullYear()} VoyageSync Global Inc. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-600 rounded-sm" />
                <div className="w-3 h-3 bg-yellow-400 rounded-sm" />
                <div className="w-3 h-3 bg-green-600 rounded-sm" />
              </div>
              <p className="opacity-60">Connecting Ghana to the world.</p>
            </div>
          </div>
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
        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-sm">{name}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-secondary text-secondary" />)}
        </div>
      </div>
      <p className="text-muted-foreground italic leading-relaxed">"{content}"</p>
    </Card>
  );
}

function BadgeContainer({ icon, label, color }: { icon: React.ReactNode, label: string, color: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`h-12 w-12 rounded-full flex items-center justify-center shadow-sm border ${color}`}>
        {icon}
      </div>
      <p className="text-[10px] font-bold text-center leading-tight text-slate-600">{label}</p>
    </div>
  );
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center">
      <span className="text-sm font-black tracking-tighter whitespace-nowrap">{name}</span>
    </div>
  );
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <li className="hover:text-primary transition-colors cursor-pointer text-slate-500 hover:translate-x-1 transition-transform">
      {children}
    </li>
  );
}
