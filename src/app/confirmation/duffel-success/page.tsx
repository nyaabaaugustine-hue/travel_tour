"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Plane, Download, Printer, Home, Mail, Calendar } from "lucide-react";

interface BookingData {
  reference?: string;
  passengerName?: string;
  route?: string;
  price?: number;
  currency?: string;
  status?: string;
}

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [booking, setBooking] = useState<BookingData | null>(null);

  useEffect(() => {
    // Parse booking data from URL params or localStorage
    const ref = searchParams.get("reference");
    const name = searchParams.get("name");
    const route = searchParams.get("route");
    const price = searchParams.get("price");
    
    if (ref) {
      setBooking({
        reference: ref,
        passengerName: name || "Valued Customer",
        route: route || "Selected Route",
        price: price ? parseFloat(price) : 0,
        currency: "USD",
        status: "confirmed",
      });
    } else {
      // Demo data for testing
      setBooking({
        reference: "VOY-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
        passengerName: "Valued Customer",
        route: "ACC → LHR",
        price: 450,
        currency: "USD",
        status: "confirmed",
      });
    }
  }, [searchParams]);

  if (!booking) {
    return (
      <div className="flex min-h-screen flex-col bg-background items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto rounded-[5%] shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <Badge className="bg-green-100 text-green-700 rounded-[5%] mb-4">
                  Booking Confirmed
                </Badge>
                <h1 className="font-display text-3xl font-bold">
                  Thank You for Your Booking!
                </h1>
                <p className="text-muted-foreground mt-2">
                  Your flight has been successfully booked. A confirmation email will be sent shortly.
                </p>
              </div>

              <div className="bg-muted/30 rounded-[5%] p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Booking Reference</span>
                  <span className="font-display text-2xl font-bold">{booking.reference}</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-primary/10 rounded-[5%] flex items-center justify-center">
                        <Plane className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{booking.route}</p>
                        <p className="text-xs text-muted-foreground">Flight Route</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-xl font-bold">${booking.price}</p>
                      <p className="text-xs text-muted-foreground">{booking.currency}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Button variant="outline" className="rounded-[5%]">
                  <Download className="mr-2 h-4 w-4" />
                  Download Ticket
                </Button>
                <Button variant="outline" className="rounded-[5%]">
                  <Printer className="mr-2 h-4 w-4" />
                  Print
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/flights" className="flex-1">
                  <Button className="w-full rounded-[5%]">
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Button>
                </Link>
                <Link href="/dashboard" className="flex-1">
                  <Button variant="outline" className="w-full rounded-[5%]">
                    Manage Booking
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}