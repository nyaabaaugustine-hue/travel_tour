import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { DuffelLinks } from "@/components/duffel-links";
import { HeroSlider } from "@/components/slider";
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
  const logo = PlaceHolderImages.find((img) => img.id === "business-logo");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* ═══ HERO ═══ */}
        <section className="relative min-h-[780px] w-full overflow-hidden flex items-center">
          {/* Hero Slider Background */}
          <HeroSlider
            slides={[
              { id: "1", src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776527855/slide1_fracqs.jpg", hint: "airplane sunset" },
              { id: "2", src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776528497/slide5_jz621t.jpg", hint: "modern accra" },
              { id: "3", src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776528497/slide6_lic8kj.jpg", hint: "luxury aircraft" },
              { id: "4", src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776528497/slide4_qsza8w.jpg", hint: "culture festival" },
              { id: "5", src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776527855/slide2_x5i3vt.jpg", hint: "travel destination" },
              { id: "6", src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776527855/slide3_tdjtnv.jpg", hint: "landscape" },
              { id: "7", src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776514019/as_cf8py5.jpg", hint: "adventure" },
            ]}
          />

          {/* Decorative orbs */}
          <div className="absolute top-24 right-1/4 w-72 h-72 bg-secondary/10 rounded-[5%] blur-3xl pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-64 bg-primary/40 rounded-[5%] blur-3xl pointer-events-none z-10" />

          <div className="container relative z-10 mx-auto px-4 lg:px-8 py-24">
            <div className="max-w-7xl mx-auto">
              {/* Hero copy */}
              <div className="max-w-2xl space-y-7 mb-12 fade-up">
                {/* Africa flag accent */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-6 h-1.5 bg-red-600 rounded-[5%]" />
                    <div className="w-6 h-1.5 bg-[hsl(var(--secondary))] rounded-[5%]" />
                    <div className="w-6 h-1.5 bg-green-600 rounded-[5%]" />
                  </div>
                  <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">
                    Premier Travel Platform
                  </span>
                </div>

                <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] drop-shadow-2xl">
                  Fly with{" "}
                  <em className="not-italic gradient-text">Precision.</em>
                  <br />Travel with{" "}
                  <em className="not-italic gradient-text">Purpose.</em>
                </h1>

                <p className="text-lg text-white/75 font-light leading-relaxed max-w-xl">
                  Real-time pricing across 500+ global airlines. Discover the world from the heart of West Africa — with elegance, intelligence, and care.
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

              {/* Duffel Search Panel */}
              <div className="glass-dark rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
                <DuffelLinks />
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
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-[5%] px-4 py-1.5 text-white/80 text-xs font-medium"
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

        {/* ═══ PARTNERS ═══ */}
        <section className="py-12 bg-muted/30 overflow-hidden">
          <div className="container mx-auto px-4 mb-8">
            <p className="text-center font-display text-lg font-semibold text-muted-foreground uppercase tracking-widest">
              Trusted by Leading Partners
            </p>
          </div>
          <div className="overflow-hidden">
            <div className="flex items-center gap-16 animate-scroll">
              {[
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507276/cih-logo_fqmqxe.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507276/msc-logo_vhuhgt.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507276/ncl-logo_j1w7su.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507276/saudi-logo_lpvyq3.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507276/royal-caribbean-logo_yea8sk.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507273/wv-logo_lyddib.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507273/MS_byoxpj.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507273/AW_pyoj45.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507272/ET_sds57q.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507272/onetravel.com_ibxbvc.avif",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507272/TK_v99wtu.png",
              ].map((src, i) => (
                <img
                  key={`a-${i}`}
                  src={src}
                  alt={`Partner ${i + 1}`}
                  loading="lazy"
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                />
              ))}
              {[
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507276/cih-logo_fqmqxe.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507276/msc-logo_vhuhgt.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507276/ncl-logo_j1w7su.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507276/saudi-logo_lpvyq3.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507276/royal-caribbean-logo_yea8sk.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507273/wv-logo_lyddib.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507273/MS_byoxpj.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507273/AW_pyoj45.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507272/ET_sds57q.png",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507272/onetravel.com_ibxbvc.avif",
                "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507272/TK_v99wtu.png",
              ].map((src, i) => (
                <img
                  key={`b-${i}`}
                  src={src}
                  alt={`Partner ${i + 1}`}
                  loading="lazy"
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HOTEL DEALS ═══ */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 mb-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <Badge variant="outline" className="border-secondary text-secondary font-semibold px-4 py-1 rounded-[5%] mb-3">
                  Last-minute weekend deals
                </Badge>
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Minimum 20% off deals for your next weekend getaway!
                </h2>
              </div>
              <Link href="/deals">
                <Button variant="outline" className="rounded-[5%] font-semibold">
                  See all deals
                </Button>
              </Link>
            </div>
          </div>

<div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll w-max">
              {[
                {
                  name: "The AUD Luxury Apartments",
                  location: "Kumasi",
                  rating: 10.0,
                  reviews: 10,
                  reviewsLabel: "Exceptional",
                  price: 135,
                  originalPrice: 324,
                  fullPrice: 324,
                  originalFullPrice: 420,
                  images: ["https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533944/accra_h28u9u.jpg"],
                  badge: "VIP Access",
                },
                {
                  name: "Platinum Blue Island Resort",
                  location: "Akosombo",
                  rating: 9.2,
                  reviews: 10,
                  reviewsLabel: "Wonderful",
                  price: 191,
                  originalPrice: 460,
                  fullPrice: 460,
                  originalFullPrice: 700,
                  images: ["https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533943/lk_zd9scy.jpg"],
                  badge: "VIP Access",
                },
                {
                  name: "Onomo Hotel Lome",
                  location: "Lomé",
                  rating: 8.2,
                  reviews: 10,
                  reviewsLabel: "Very good",
                  price: 87,
                  originalPrice: 207,
                  fullPrice: 207,
                  originalFullPrice: 283,
                  discount: 76,
                  images: ["https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533943/safrica_nu5kez.jpg"],
                },
                {
                  name: "Ocean Green Beach Resorts",
                  location: "Prampram",
                  rating: 8.8,
                  reviews: 10,
                  reviewsLabel: "Excellent",
                  price: 58,
                  originalPrice: 140,
                  fullPrice: 140,
                  originalFullPrice: 200,
                  discount: 60,
                  images: ["https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/4559fb8b_hyckig.jpg"],
                },
                {
                  name: "Movenpick Hotel Accra",
                  location: "Accra",
                  rating: 9.0,
                  reviews: 10,
                  reviewsLabel: "Excellent",
                  price: 210,
                  originalPrice: 480,
                  fullPrice: 480,
                  originalFullPrice: 620,
                  images: ["https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/45086c8e_zwtrkb.jpg"],
                  badge: "VIP Access",
                },
                {
                  name: "African Queen Hotel",
                  location: "Cape Coast",
                  rating: 8.5,
                  reviews: 10,
                  reviewsLabel: "Great",
                  price: 95,
                  originalPrice: 220,
                  fullPrice: 220,
                  originalFullPrice: 310,
                  discount: 45,
                  images: ["https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/13ed0bd8_tx2gog.jpg"],
                },
                {
                  name: "Royal Palm Hotel",
                  location: "Takoradi",
                  rating: 8.9,
                  reviews: 10,
                  reviewsLabel: "Superb",
                  price: 125,
                  originalPrice: 290,
                  fullPrice: 290,
                  originalFullPrice: 380,
                  discount: 55,
                  images: ["https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/862344aa_lheq8h.jpg"],
                },
                {
                  name: "Golden Beach Resort",
                  location: "Anloga",
                  rating: 8.4,
                  reviews: 10,
                  reviewsLabel: "Very Good",
                  price: 78,
                  originalPrice: 180,
                  fullPrice: 180,
                  originalFullPrice: 250,
                  discount: 42,
                  images: ["https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/defadf1e_qf7i3y.jpg"],
                },
                {
                  name: "Labadi Beach Hotel",
                  location: "Tema",
                  rating: 8.6,
                  reviews: 10,
                  reviewsLabel: "Very Good",
                  price: 110,
                  originalPrice: 250,
                  fullPrice: 250,
                  originalFullPrice: 340,
                  discount: 40,
                  images: ["https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533939/ab942b64_f6uozz.jpg"],
                },
                {
                  name: "Eden Hotel",
                  location: "Johannesburg",
                  rating: 9.1,
                  reviews: 10,
                  reviewsLabel: "Superb",
                  price: 180,
                  fullPrice: 420,
                  originalFullPrice: 550,
                  images: ["https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533938/e21881a3_vb8pcu.jpg"],
                  badge: "VIP Access",
                },
                {
                  name: "Savanna Hotel",
                  location: "Dakar",
                  rating: 8.7,
                  reviews: 10,
                  reviewsLabel: "Excellent",
                  price: 145,
                  fullPrice: 340,
                  originalFullPrice: 450,
                  discount: 60,
                  images: ["https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533937/74f9a640_aytjpj.jpg"],
                },
                {
                  name: "Coastal Inn",
                  location: "Freetown",
                  rating: 8.3,
                  reviews: 10,
                  reviewsLabel: "Great",
                  price: 125,
                  fullPrice: 290,
                  originalFullPrice: 380,
                  discount: 45,
                  images: ["https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533935/a32e040e-98f8-4322-aa10-770d06e97a6f_fbneta.jpg"],
                },
                {
                  name: "River Lodge",
                  location: "Monrovia",
                  rating: 8.5,
                  reviews: 10,
                  reviewsLabel: "Very Good",
                  price: 98,
                  fullPrice: 230,
                  originalFullPrice: 300,
                  discount: 35,
                  images: ["https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533690/018aa25b-d371-4d07-8718-2f367ed3de17_pigno3.jpg"],
                },
              ].map((hotel, i) => (
                <Card key={i} className="luxury-card rounded-[5%] overflow-hidden group" style={{ minWidth: "280px", maxWidth: "280px" }}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={hotel.images[0]}
                      alt={hotel.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {hotel.discount && (
                      <Badge className="absolute top-3 left-3 bg-red-500 text-white font-bold text-xs px-2 py-1 rounded-[5%]">
                        ${hotel.discount} off
                      </Badge>
                    )}
                    {hotel.badge && (
                      <Badge className="absolute top-3 left-3 bg-blue-600 text-white font-bold text-xs px-2 py-1 rounded-[5%]">
                        VIP Access
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="font-display font-bold text-lg leading-tight">{hotel.name}</h3>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="font-bold">{hotel.rating}</span>
                        <svg className="h-3 w-3 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{hotel.location}</p>
                    <div className="flex items-center gap-1 text-xs">
                      <span className="font-semibold">({hotel.reviews} reviews)</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-green-600 font-medium">{hotel.reviewsLabel}</span>
                    </div>
                    <div className="flex items-baseline gap-2 pt-2">
                      <span className="font-display text-2xl font-bold text-primary">${hotel.price}</span>
                      <span className="text-sm text-muted-foreground">nightly</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">${hotel.fullPrice} total</span>
                      {hotel.originalFullPrice > hotel.fullPrice && (
                        <span className="text-muted-foreground line-through ml-2">${hotel.originalFullPrice}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ GHANA TOUR REGISTRATION ═══ */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
          <Image
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776527855/slide1_fracqs.jpg"
            alt="Africa tour"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 hero-mesh" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <Badge className="bg-secondary/20 text-secondary font-semibold px-4 py-1 rounded-[5%]">
                  Limited Time Offer
                </Badge>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                  Discover the Magic of Africa
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Join our exclusive Africa tour experience. Explore historic destinations, 
                  witness vibrant festivals, and immerse yourself in African culture.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { label: "8 Days", desc: "Full Exploration" },
                    { label: "5+ Cities", desc: "Coast to Coast" },
                    { label: "All Inclusive", desc: "Meals & Guide" },
                    { label: "$899", desc: "Special Price" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <p className="font-display text-2xl font-bold text-secondary">{item.label}</p>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-2">Register Your Interest</h3>
                  <p className="text-muted-foreground mb-6">Be the first to know when spots open up!</p>
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input placeholder="John" className="h-12 rounded-[5%]" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input placeholder="Doe" className="h-12 rounded-[5%]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="john@example.com" className="h-12 rounded-[5%]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input type="tel" placeholder="+233 XX XXX XXXX" className="h-12 rounded-[5%]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Preferred Month</label>
                      <select className="w-full h-12 px-4 rounded-[5%] border bg-background">
                        <option>June 2026</option>
                        <option>July 2026</option>
                        <option>August 2026</option>
                        <option>September 2026</option>
                      </select>
                    </div>
                    <Button className="w-full h-12 rounded-[5%] font-semibold text-lg mt-4">
                      Register Now
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Limited to 20 spots per tour. No commitment required.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ═══ FEATURES ═══ */}
        <section className="py-28 container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="section-line" />
                <Badge variant="outline" className="border-secondary text-secondary font-semibold px-4 py-1 rounded-[5%]">
                  Why Choose Us
                </Badge>
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                  Modern Travel Rooted<br />in Warm Hospitality
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We blend the warmth of African hospitality with world-class technology to make your entire travel experience effortless and memorable.
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

              <Button size="lg" className="btn-gold rounded-[5%] px-8 h-13 font-bold gap-2 text-[15px] h-[52px]" asChild>
                <Link href="/destinations">
                  Explore Destinations <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Feature slider */}
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-tr from-secondary/10 via-primary/5 to-transparent rounded-[5%] blur-3xl" />
              <div className="relative h-[500px]">
                <HeroSlider
                  slides={[
                    { id: "1", src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776528497/slide5_jz621t.jpg", hint: "modern accra" },
                    { id: "2", src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776528497/slide6_lic8kj.jpg", hint: "luxury aircraft" },
                    { id: "3", src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776528497/slide4_qsza8w.jpg", hint: "culture festival" },
                    { id: "4", src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776527855/slide2_x5i3vt.jpg", hint: "travel destination" },
                    { id: "5", src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776527855/slide3_tdjtnv.jpg", hint: "landscape" },
                    { id: "6", src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776514019/as_cf8py5.jpg", hint: "adventure" },
                    { id: "7", src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776527855/slide1_fracqs.jpg", hint: "airplane sunset" },
                  ]}
                />
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
                <p className="text-muted-foreground">Curated routes based on real traveler demand from Africa.</p>
              </div>
            </div>

<div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll w-[calc(280px*16)]">
              {[
                { name: "Accra", country: "Ghana", price: 199, image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533944/accra_h28u9u.jpg" },
                { name: "Lagos", country: "Nigeria", price: 199, image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533943/lk_zd9scy.jpg" },
                { name: "Cape Town", country: "South Africa", price: 199, image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533943/safrica_nu5kez.jpg" },
                { name: "Nairobi", country: "Kenya", price: 199, image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/4559fb8b_hyckig.jpg" },
                { name: "Cairo", country: "Egypt", price: 199, image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/45086c8e_zwtrkb.jpg" },
                { name: "Casablanca", country: "Morocco", price: 199, image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/13ed0bd8_tx2gog.jpg" },
                { name: "Kumasi", country: "Ghana", price: 199, image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/862344aa_lheq8h.jpg" },
                { name: "Kampala", country: "Uganda", price: 199, image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/defadf1e_qf7i3y.jpg" },
                { name: "Abidjan", country: "Ivory Coast", price: 199, image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533939/ab942b64_f6uozz.jpg" },
                { name: "Johannesburg", country: "South Africa", price: 199, image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533938/e21881a3_vb8pcu.jpg" },
                { name: "Dakar", country: "Senegal", price: 199, image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533937/74f9a640_aytjpj.jpg" },
                { name: "Freetown", country: "Sierra Leone", price: 199, image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533935/a32e040e-98f8-4322-aa10-770d06e97a6f_fbneta.jpg" },
                { name: "Monrovia", country: "Liberia", price: 199, image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533690/018aa25b-d371-4d07-8718-2f367ed3de17_pigno3.jpg" },
              ].map((dest, i) => (
                <Link href="/destinations" key={i} className="dest-card group block" style={{ minWidth: "370px" }}>
                  <div className="relative h-72 rounded-3xl overflow-hidden shadow-luxury">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                    <div className="absolute top-5 right-5">
                      <span className="bg-secondary text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-[5%] shadow-gold">
                        Trending
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white font-display font-bold text-2xl capitalize tracking-tight">
                        {dest.name}
                      </h3>
                      <p className="text-white/70 text-sm">{dest.country}</p>
                      <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/20">
                        <span className="text-white/55 text-xs font-medium">Starting from</span>
                        <span className="text-secondary font-bold text-xl">${dest.price}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
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
              <p className="text-muted-foreground">Join thousands of Africans who trust us for seamless, stress-free travel.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <TestimonialCard
                name="Kwame Mensah"
                role="Export Director, Accra"
                content="The synchronization between routes is perfect. I now manage my travels across Africa and Europe through one seamless platform."
                image="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533944/accra_h28u9u.jpg"
              />
              <TestimonialCard
                name="Efua Addo"
                role="Creative Consultant, Kumasi"
                content="Beautiful interface and excellent service. The African hospitality truly shines in everything they do — from the app to support."
                image="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/862344aa_lheq8h.jpg"
              />
              <TestimonialCard
                name="David Okonkwo"
                role="Business Executive, Lagos"
                content="Best travel booking experience I've ever had. Fast, reliable, and great customer service."
                image="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533943/lk_zd9scy.jpg"
              />
              <TestimonialCard
                name="Amara Diallo"
                role="Tourist, Dakar"
                content="Made my first Africa trip unforgettable. The deals are real and the service is exceptional."
                image="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533937/74f9a640_aytjpj.jpg"
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
              <p className="text-muted-foreground">Everything you need to know about your next journey.</p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "How do we find the best prices?",
                  a: "Our smart search engine scans real-time data from 500+ global airlines simultaneously, balancing price, route efficiency, and connection times to surface the best option for you."
                },
                {
                  q: "What payment methods are supported?",
                  a: "We support all major international cards (Visa, Mastercard, AMEX) and local Mobile Money options — MTN, Telecel, and AT — via our fully secure payment gateway."
                },
                {
                  q: "Can I manage corporate travel for my team?",
                  a: "Yes. Our corporate travel dashboard lets businesses manage multiple travelers, centralize expenses, and unlock exclusive corporate rates with flexible cancellation policies designed for West African enterprises."
                },
                {
                  q: "Is my data safe with us?",
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
                <p className="text-muted-foreground">Stay up to date with travel trends, tips, and platform updates.</p>
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
                  title: "Smart Search: The Future of African Aviation",
                  excerpt: "How real-time data is revolutionizing the passenger experience across the continent.",
                  hint: "aviation technology future"
                },
                {
                  seed: "news2", category: "Travel Tips",
                  date: "March 12, 2024",
                  title: "How to Travel Sustainably in West Africa",
                  excerpt: "Eco-friendly resorts and practices that support local African communities.",
                  hint: "nature sustainable travel"
                },
                {
                  seed: "news3", category: "Awards",
                  date: "March 8, 2024",
                  title: "Digital Innovation Award 2024 — Won",
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
                      <span className="bg-white/90 text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-[5%] backdrop-blur-sm shadow-sm">
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
          <Image
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776528497/slide7_n8uvln.jpg"
            alt="Newsletter background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Globe className="h-full w-full" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-xl mx-auto text-center space-y-7">
              <div className="h-16 w-16 bg-secondary/20 border border-secondary/30 rounded-2xl flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-secondary" />
              </div>
              <div className="space-y-3">
                <h2 className="font-display text-4xl font-bold">Stay Informed</h2>
                <p className="text-white/60 leading-relaxed">
                  Join our travel community. Get exclusive deals, travel tips, and insider updates every week.
                </p>
              </div>
              <div className="flex gap-3 max-w-md mx-auto">
                <Input
                  placeholder="Your email address"
                  className="h-13 flex-1 bg-white/10 border-white/20 rounded-[5%] px-5 text-white placeholder:text-white/40 focus:ring-secondary h-[52px]"
                />
                <Button className="h-[52px] rounded-[5%] px-7 btn-gold font-semibold shrink-0">
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
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-primary/80 shrink-0 ring-2 ring-white/10">
                    {logo ? (
                      <Image src={logo.imageUrl} alt="Logo" fill className="object-contain p-0.5" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Plane className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Premium Travel</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                  Africa&apos;s premier travel platform, connecting the continent to the world with intelligence and warmth.
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
                <div className="flex items-center gap-3">
                  <img 
                    src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507273/pci-dss_rd6rtq.png" 
                    alt="PCI DSS Certified" 
                    className="h-10 w-auto"
                  />
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="flex items-center gap-3">
                  <img 
                    src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507272/sectigo_ioq5qv.png" 
                    alt="Secured by Sectigo" 
                    className="h-10 w-auto"
                  />
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

        {/* Copyright */}
        <div className="border-t border-white/8 py-5">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-white/30">
            <p>© 2024 Africa Travel Platform Inc. All Rights Reserved.</p>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 bg-red-600 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-green-600 rounded-sm" />
              </div>
              <span>Connecting Africa to the world.</span>
            </div>
          </div>
        </div>
      </footer>
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
        <div className="h-11 w-11 rounded-[5%] overflow-hidden border-2 border-secondary/20 shrink-0">
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
