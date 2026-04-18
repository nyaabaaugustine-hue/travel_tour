
"use client";

import Link from "next/link";
import { PlaneTakeoff, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <PlaneTakeoff className="h-6 w-6" />
            </div>
            <span className="font-headline text-2xl font-bold tracking-tight text-primary">
              VoyageSync
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/flights" className="transition-colors hover:text-primary">
            Find Flights
          </Link>
          <Link href="/destinations" className="transition-colors hover:text-primary">
            Destinations
          </Link>
          <Link href="/deals" className="transition-colors hover:text-primary">
            Special Deals
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="hidden md:flex items-center gap-2">
                <User className="h-4 w-4" />
                Sign In
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/dashboard" className="w-full">My Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard" className="w-full">My Bookings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Log Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
