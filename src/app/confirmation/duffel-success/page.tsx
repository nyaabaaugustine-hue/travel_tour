"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CheckCircle, Plane, Download, Printer, Home } from "lucide-react";

function SuccessContent() {
  const sp = useSearchParams();
  const [orderId, setOrderId] = useState("");
  const [reference, setReference] = useState("");

  useEffect(() => {
    // Duffel sends: ?order_id=ord_xxx&reference=milehigh_xxx
    setOrderId(sp.get("order_id") || "");
    setReference(sp.get("reference") || "");
  }, [sp]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto rounded-[5%] shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-green-500"/>
                </div>
                <Badge className="bg-green-100 text-green-700 rounded-[5%] mb-4">Booking Confirmed</Badge>
                <h1 className="font-display text-3xl font-bold">Thank You!</h1>
                <p className="text-muted-foreground mt-2">Your flight has been successfully booked.</p>
              </div>
              <div className="bg-muted/30 rounded-[5%] p-6 mb-6 space-y-3">
                {orderId && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Order ID</span>
                    <span className="font-mono text-sm font-semibold">{orderId}</span>
                  </div>
                )}
                {reference && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Reference</span>
                    <span className="font-display text-lg font-bold">{reference}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <span className="text-green-600 font-semibold">Confirmed ✓</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mb-6">
                A confirmation email has been sent. Manage this booking from your dashboard.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <Button variant="outline" className="rounded-[5%]"><Download className="mr-2 h-4 w-4"/>Download</Button>
                <Button variant="outline" className="rounded-[5%]"><Printer className="mr-2 h-4 w-4"/>Print</Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/" className="flex-1"><Button className="w-full rounded-[5%]"><Home className="mr-2 h-4 w-4"/>Go Home</Button></Link>
                <Link href="/dashboard" className="flex-1"><Button variant="outline" className="w-full rounded-[5%]">Manage Booking</Button></Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin"/></div>}>
      <SuccessContent/>
    </Suspense>
  );
}
