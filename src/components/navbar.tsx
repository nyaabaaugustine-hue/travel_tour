"use client";

import Link from "next/link";
import Image from "next/image";
import { User, Menu, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const logo = PlaceHolderImages.find(img => img.id === "business-logo");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-xl shadow-md">
              {logo && (
                <Image 
                  src={logo.imageUrl} 
                  alt="VoyageSync Logo" 
                  fill 
                  className="object-cover"
                  priority
                />
              )}
            </div>
            <span className="font-headline text-2xl font-black tracking-tighter text-primary">
              VoyageSync
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-muted-foreground">
          <Link href="/flights" className="transition-all hover:text-primary hover:translate-y-[-1px]">
            Find Flights
          </Link>
          <Link href="/destinations" className="transition-all hover:text-primary hover:translate-y-[-1px]">
            Destinations
          </Link>
          <Link href="/deals" className="transition-all hover:text-primary hover:translate-y-[-1px]">
            Special Deals
          </Link>
          <Link href="/dashboard" className="transition-all hover:text-primary hover:translate-y-[-1px]">
            Corporate Sync
          </Link>
        </nav>

        <div className="flex items-center gap-4">
           <div className="hidden md:flex items-center gap-2 text-xs font-bold text-muted-foreground mr-4 cursor-pointer hover:text-primary transition-colors">
              <Globe className="h-4 w-4" />
              <span>EN / USD</span>
              <ChevronDown className="h-3 w-3" />
           </div>
           
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="hidden md:flex items-center gap-2 rounded-full px-6 bg-slate-900 hover:bg-slate-800 font-bold">
                <User className="h-4 w-4" />
                Member Login
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 mt-2">
              <DropdownMenuItem asChild className="rounded-xl py-3 cursor-pointer">
                <Link href="/dashboard" className="w-full flex items-center gap-2 font-bold">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <User className="h-4 w-4" />
                  </div>
                  My Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="rounded-xl py-3 cursor-pointer">
                <Link href="/dashboard" className="w-full flex items-center gap-2 font-bold">
                   <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <User className="h-4 w-4" />
                  </div>
                  My Bookings
                </Link>
              </DropdownMenuItem>
              <hr className="my-2" />
              <DropdownMenuItem className="text-destructive font-bold rounded-xl py-3 cursor-pointer">
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
