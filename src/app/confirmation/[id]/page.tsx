
"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Plane, Printer, Download, Share2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ConfirmationPage() {
  const pathname = usePathname();
  const pnr = pathname.split('/').pop();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 flex flex-col items-center">
        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center space-y-4">
            <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight">Booking Confirmed!</h1>
            <p className="text-lg text-muted-foreground">
              Your flight to London is synchronized. A confirmation email has been sent to your inbox.
            </p>
          </div>

          <Card className="border-t-8 border-t-primary overflow-hidden">
            <CardHeader className="bg-muted/30 border-b">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Booking Reference</CardTitle>
                  <p className="text-2xl font-black text-primary font-mono">{pnr}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Status</p>
                  <p className="text-sm font-bold text-green-600 flex items-center justify-end gap-1">
                    <CheckCircle2 className="h-3 w-3" /> CONFIRMED
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center gap-6">
                <div className="flex-1 space-y-1">
                  <p className="text-3xl font-bold">NYC</p>
                  <p className="text-sm text-muted-foreground">New York (JFK)</p>
                  <p className="text-xs font-bold">Nov 15, 08:30 AM</p>
                </div>
                <div className="flex flex-col items-center gap-2 px-4">
                  <Plane className="h-6 w-6 text-primary" />
                  <div className="h-[2px] w-24 bg-muted-foreground/20 relative">
                    <div className="absolute inset-0 bg-primary/20" />
                  </div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Flight VS-204</p>
                </div>
                <div className="flex-1 text-right space-y-1">
                  <p className="text-3xl font-bold">LON</p>
                  <p className="text-sm text-muted-foreground">London (LHR)</p>
                  <p className="text-xs font-bold">Nov 15, 11:45 AM</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 border-y py-6">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Passenger</p>
                  <p className="font-bold">John Doe</p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Class</p>
                  <p className="font-bold">Economy</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" size="sm" className="gap-2">
                  <Printer className="h-4 w-4" /> Print Ticket
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" /> Download PDF
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" /> Share Trip
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4 text-center">
            <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 font-bold">
              <Link href="/dashboard">Go to My Dashboard</Link>
            </Button>
            <Button asChild variant="ghost" className="text-muted-foreground">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
