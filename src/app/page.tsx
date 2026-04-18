import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { FlightSearchForm } from "@/components/flight-search-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShieldCheck, Clock, Star, Globe, Quote, ArrowRight,
  Mail, Heart, Award, Lock, CheckCircle, Zap, HelpCircle, Plane
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-travel");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* ═══ HERO ═══ */}
        <section className="relative min-h-[780px] w-full overflow-hidden flex items-center">
          {/* Background */}
          {heroImage?.imageUrl && (
            <div className="absolute inset-0">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description || "Travel"}
                fill
                className="object-cover brightness-[0.45]"
                priority
                data-ai-hint={heroImage.imageHint}
              />
              <div className="absolute inset-0 hero-mesh" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
            </div>
          )}

          {/* Decorative orbs */}
          <div className="absolute top-24 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-64 bg-primary/40 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 lg:px-8 py-24">
            <div className="max-w-7xl mx-auto">
              {/* Hero copy */}
              <div className="max-w-2xl space-y-7 mb-12 fade-up">
                {/* Ghana flag accent */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-6 h-1.5 bg-red-600 rounded-full" />
                    <div className="w-6 h-1.5 bg-[hsl(var(--secondary))] rounded-full" />
                    <div className="w-6 h-1.5 bg-green-600 rounded-full" />
                  </div>
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">
                    Ghana&apos;s Premier Travel Platform
                  </span>
                </div>

                <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] drop-shadow-2xl">
                  Fly with{" "}
                  <em className="not-italic gradient-text">Precision.</em>
                  <br />Travel with{" "}
                  <em className="not-italic gradient-text">Purpose.</em>
                </h1>

                <p className="text-lg text-white/75 font-light leading-relaxed max-w-xl">
                  Real-time synchronization across 500+ global airlines. Discover the world from the heart of West Africa — with elegance, intelligence, and care.
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>No hidden fees</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Instant confirmation</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>24/7 support</span>
                  </div>
                </div>
              </div>

              {/* Search panel */}
              <div className="glass-dark rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
                <FlightSearchForm />
              </div>

              {/* Trust pills */}
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { icon: "🏆", text: "2024 Best Travel App" },
                  { icon: "🔒", text: "PCI DSS Certified" },
                  { icon: "⭐", text: "4.9 / 5 Rating" },
                ].map(({ icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 text-white/80 text-xs font-medium"
                  >
                    <span>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ STATS BAR ═══ */}
        <section className="bg-primary text-white py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-x divide-white/10">
              {[
                { val: "500+", label: "Airlines Connected" },
                { val: "2M+",  label: "Happy Travelers" },
                { val: "195",  label: "Countries Covered" },
                { val: "99.8%", label: "Booking Uptime" },
              ].map(({ val, label }) => (
                <div key={label} className="py-2">
                  <p className="font-display text-3xl font-bold text-secondary">{val}</p>
                  <p className="text-white/60 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FEATURES ═══ */}
        <section className="py-28 container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="section-line" />
                <Badge variant="outline" className="border-secondary text-secondary font-semibold px-4 py-1 rounded-full">
                  Why Choose VoyageSync
                </Badge>
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                  Modern Travel Rooted<br />in Warm Hospitality
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We blend the warmth of Ghanaian hospitality with world-class technology to synchronize your entire travel experience, effortlessly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <ShieldCheck className="h-5 w-5" />, title: "Safe Passage", desc: "Bank-grade AES-256 encryption on every booking.", color: "bg-green-50 text-green-700 border-green-100" },
                  { icon: <Heart className="h-5 w-5" />, title: "Warm Support", desc: "Attentive concierge service, 24 hours a day.", color: "bg-rose-50 text-rose-600 border-rose-100" },
                  { icon: <Globe className="h-5 w-5" />, title: "Global Connect", desc: "Connecting you to 500+ cities worldwide.", color: "bg-blue-50 text-blue-700 border-blue-100" },
                  { icon: <Star className="h-5 w-5" />, title: "VIP Status", desc: "Exclusive rates and perks for members.", color: "bg-amber-50 text-amber-700 border-amber-100" },
                ].map(({ icon, title, desc, color }) => (
                  <div key={title} className="luxury-card rounded-2xl p-5 flex gap-4">
                    <div className={`h-11 w-11 shrink-0 rounded-xl border flex items-center justify-center ${color}`}>
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="btn-gold rounded-full px-8 h-13 font-bold gap-2 text-[15px] h-[52px]" asChild>
                <Link href="/destinations">
                  Explore Destinations <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Feature image collage */}
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-tr from-secondary/10 via-primary/5 to-transparent rounded-full blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-10">
                  <FeatureImage src="https://picsum.photos/seed/gh1/400/500" hint="modern accra skyline" />
                  <FeatureImage src="https://picsum.photos/seed/gh2/400/280" hint="business traveler lounge" />
                </div>
                <div className="space-y-4">
                  <FeatureImage src="https://picsum.photos/seed/gh3/400/280" hint="luxury aircraft cabin" />
                  <FeatureImage src="https://picsum.photos/seed/gh4/400/500" hint="ghanaian culture festival" />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-luxury flex items-center gap-3">
                <div className="h-10 w-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Plane className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Flights booked today</p>
                  <p className="font-display font-bold text-xl text-primary">1,247</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ DESTINATIONS ═══ */}
        <section className="bg-[hsl(var(--cream-dark))] py-28 border-y">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
              <div className="space-y-3">
                <span className="section-line" />
                <Badge className="bg-secondary/15 text-primary border-none font-semibold">
                  Trending Destinations
                </Badge>
                <h2 className="font-display text-4xl font-bold">Top Picks Across Africa</h2>
                <p className="text-muted-foreground">Curated routes based on real traveler demand from Ghana.</p>
              </div>
              <Button asChild variant="outline" className="rounded-full px-7 h-11 border-primary text-primary hover:bg-primary/5 font-semibold">
                <Link href="/destinations">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PlaceHolderImages.filter(img => img.id.startsWith('dest-')).slice(0, 6).map((dest) => (
                <Link href="/destinations" key={dest.id} className="dest-card group block">
                  <div className="relative h-72 rounded-3xl overflow-hidden shadow-luxury">
                    <div className="dest-card-inner absolute inset-0">
                      <Image
                        src={dest.imageUrl}
                        alt={dest.description}
                        fill
                        className="object-cover"
                        data-ai-hint={dest.imageHint}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                    <div className="absolute top-5 right-5">
                      <span className="bg-secondary text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-gold">
                        Trending
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white font-display font-bold text-2xl capitalize tracking-tight">
                        {dest.id.split('-')[1]}
                      </h3>
                      <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/20">
                        <span className="text-white/55 text-xs font-medium">Starting from</span>
                        <span className="text-secondary font-bold text-xl">$199</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TESTIMONIALS ═══ */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="section-line mx-auto" />
              <Quote className="h-10 w-10 text-secondary/30 mx-auto" />
              <h2 className="font-display text-4xl font-bold">What Travelers Say</h2>
              <p className="text-muted-foreground">Join thousands of Ghanaians who trust VoyageSync for seamless travel.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <TestimonialCard
                name="Kwame Mensah"
                role="Export Director, Accra"
                content="The synchronization between routes is perfect. I now manage my travels across Africa and Europe through one seamless platform."
                image="https://picsum.photos/seed/ghperson1/100/100"
              />
              <TestimonialCard
                name="Efua Addo"
                role="Creative Consultant, Kumasi"
                content="Beautiful interface and excellent service. The Ghanaian hospitality truly shines in everything they do — from the app to support."
                image="https://picsum.photos/seed/ghperson2/100/100"
              />
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="py-28 bg-[hsl(var(--cream-dark))] border-t">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-14 space-y-3">
              <span className="section-line mx-auto" />
              <HelpCircle className="h-10 w-10 text-primary/20 mx-auto" />
              <h2 className="font-display text-4xl font-bold">Frequently Asked</h2>
              <p className="text-muted-foreground">Everything you need to know about your next synchronized journey.</p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "How does VoyageSync find the best prices?",
                  a: "Our proprietary SyncIntelligence engine scans real-time data from 500+ global airlines simultaneously, balancing price, route efficiency, and connection times to surface the best option for you."
                },
                {
                  q: "What payment methods are supported in Ghana?",
                  a: "We support all major international cards (Visa, Mastercard, AMEX) and local Mobile Money options — MTN, Telecel, and AT — via our fully secure payment gateway."
                },
                {
                  q: "Can I manage corporate travel for my team?",
                  a: "Yes. Our Corporate Sync dashboard lets businesses manage multiple travelers, centralize expenses, and unlock exclusive corporate rates with flexible cancellation policies designed for West African enterprises."
                },
                {
                  q: "Is my data safe with VoyageSync?",
                  a: "Absolutely. We are PCI DSS certified and use AES-256 bank-grade encryption. Regular independent audits ensure we meet the highest global security standards."
                },
                {
                  q: "How do I change or cancel a booking?",
                  a: "Manage your bookings directly from the Member Dashboard with a single click. Our 24/7 concierge team is also available via WhatsApp or phone for any assistance."
                },
              ].map(({ q, a }, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white border border-border rounded-2xl px-6 shadow-sm"
                >
                  <AccordionTrigger className="hover:no-underline font-semibold text-[15px] py-5 text-left">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ═══ NEWS ═══ */}
        <section className="py-28 bg-white border-t">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
              <div className="space-y-3">
                <span className="section-line" />
                <Badge variant="outline" className="border-secondary text-secondary font-semibold">
                  Updates & Insights
                </Badge>
                <h2 className="font-display text-4xl font-bold">Our Latest News</h2>
                <p className="text-muted-foreground">Stay in sync with travel trends, tips, and VoyageSync updates.</p>
              </div>
              <Button variant="ghost" className="font-semibold text-primary hover:bg-primary/5 group">
                View All Posts <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {[
                {
                  seed: "news1", category: "Industry",
                  date: "March 15, 2024",
                  title: "SyncIntelligence: The Future of African Aviation",
                  excerpt: "How real-time data is revolutionizing the passenger experience across the continent.",
                  hint: "aviation technology future"
                },
                {
                  seed: "news2", category: "Travel Tips",
                  date: "March 12, 2024",
                  title: "How to Travel Sustainably in West Africa",
                  excerpt: "Eco-friendly resorts and practices that support local Ghanaian communities.",
                  hint: "nature sustainable travel"
                },
                {
                  seed: "news3", category: "Awards",
                  date: "March 8, 2024",
                  title: "VoyageSync Wins Digital Innovation Award 2024",
                  excerpt: "Recognized as West Africa's leading travel technology provider.",
                  hint: "digital award ceremony"
                },
              ].map(({ seed, category, date, title, excerpt, hint }) => (
                <article key={seed} className="luxury-card rounded-3xl overflow-hidden group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${seed}/600/400`}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={hint}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
                        {category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3 bg-white">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-secondary uppercase tracking-widest">
                      <Clock className="h-3 w-3" /> {date}
                    </div>
                    <h3 className="font-display text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{excerpt}</p>
                    <Link href="#" className="inline-flex items-center text-sm font-semibold text-primary group/link mt-1">
                      Read More <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ NEWSLETTER ═══ */}
        <section className="py-24 diagonal-bg text-white relative overflow-hidden noise-overlay">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <Globe className="h-full w-full" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-xl mx-auto text-center space-y-7">
              <div className="h-16 w-16 bg-secondary/20 border border-secondary/30 rounded-2xl flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-secondary" />
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-4xl font-bold">Stay Synchronized</h2>
                <p className="text-white/60 leading-relaxed">
                  Join our travel community. Get exclusive deals, travel tips, and insider updates every week.
                </p>
              </div>
              <div className="flex gap-3 max-w-md mx-auto">
                <Input
                  placeholder="Your email address"
                  className="h-13 flex-1 bg-white/10 border-white/20 rounded-full px-5 text-white placeholder:text-white/40 focus:ring-secondary h-[52px]"
                />
                <Button className="h-[52px] rounded-full px-7 btn-gold font-semibold shrink-0">
                  Subscribe
                </Button>
              </div>
              <p className="text-white/35 text-xs">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[hsl(var(--navy-deep))] text-white">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Brand col */}
            <div className="lg:col-span-4 space-y-7">
              <div>
                <p className="font-display text-2xl font-bold mb-1">
                  Voyage<span className="text-secondary">Sync</span>
                </p>
                <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                  Ghana&apos;s premier travel platform, connecting West Africa to the world with intelligence and warmth.
                </p>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: <Award className="h-5 w-5" />, label: "2024 Winner", color: "text-amber-400" },
                  { icon: <Star className="h-5 w-5" />, label: "Top Rated", color: "text-yellow-400" },
                  { icon: <Globe className="h-5 w-5" />, label: "Global", color: "text-blue-400" },
                  { icon: <Zap className="h-5 w-5" />, label: "Fastest", color: "text-green-400" },
                ].map(({ icon, label, color }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5 bg-white/5 rounded-xl p-3">
                    <span className={color}>{icon}</span>
                    <p className="text-[9px] font-bold text-white/50 text-center leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-5 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-7 w-7 text-green-500" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">PCI DSS</p>
                    <p className="text-xs font-semibold">Certified</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="flex items-center gap-2">
                  <Lock className="h-7 w-7 text-primary" />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">Secured by</p>
                    <p className="text-xs font-semibold">SECTIGO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {[
                {
                  heading: "Company",
                  links: ["Home", "About Us", "Blog", "Careers", "Press"]
                },
                {
                  heading: "Services",
                  links: ["Flights", "Holidays", "Cruises", "Hotels", "eSIM", "Airlines"]
                },
                {
                  heading: "Support",
                  links: ["FAQ", "Contact Us", "Terms of Service", "Privacy Policy", "Sitemap"]
                },
              ].map(({ heading, links }) => (
                <div key={heading}>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/40 mb-5">{heading}</h4>
                  <ul className="space-y-3">
                    {links.map(l => (
                      <li key={l}>
                        <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform">
                          {l}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-white/8 py-8">
          <div className="container mx-auto px-4">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-6">Our Proud Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-35 hover:opacity-60 transition-opacity duration-700">
              {["CIH BANK", "MSC CRUISES", "NORWEGIAN", "SAUDI TOURISM", "ROYAL CARIBBEAN"].map(name => (
                <span key={name} className="text-sm font-bold tracking-tighter whitespace-nowrap text-white">{name}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/8 py-5">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-white/30">
            <p>© 2024 VoyageSync Global Inc. All Rights Reserved.</p>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 bg-red-600 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-green-600 rounded-sm" />
              </div>
              <span>Connecting Ghana to the world.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureImage({ src, hint }: { src: string; hint: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-luxury group">
      <Image
        src={src}
        alt={hint}
        width={400}
        height={500}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        data-ai-hint={hint}
      />
    </div>
  );
}

function TestimonialCard({ name, role, content, image }: {
  name: string; role: string; content: string; image: string;
}) {
  return (
    <Card className="luxury-card rounded-3xl p-7 border-border space-y-5">
      <div className="flex gap-0.5">
        {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />)}
      </div>
      <p className="text-muted-foreground leading-relaxed italic text-[15px]">&ldquo;{content}&rdquo;</p>
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className="h-11 w-11 rounded-full overflow-hidden border-2 border-secondary/20 shrink-0">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </Card>
  );
}
