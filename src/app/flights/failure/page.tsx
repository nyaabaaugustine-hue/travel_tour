"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { AlertCircle, Plane, HelpCircle, Mail, ArrowLeft, MessageCircle } from "lucide-react";

interface FailureData {
  error?: string;
  errorCode?: string;
  message?: string;
}

function FailureContent() {
  const searchParams = useSearchParams();
  const [failure, setFailure] = useState<FailureData | null>(null);

  useEffect(() => {
    const error = searchParams.get("error");
    const code = searchParams.get("code");
    
    setFailure({
      error: error || "payment_declined",
      errorCode: code || "PAY_001",
      message: "Your payment could not be processed. Please try again.",
    });
  }, [searchParams]);

  if (!failure) {
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
                <div className="h-20 w-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-10 w-10 text-red-500" />
                </div>
                <Badge className="bg-red-100 text-red-700 rounded-[5%] mb-4">
                  Booking Failed
                </Badge>
                <h1 className="font-display text-3xl font-bold">
                  Something Went Wrong
                </h1>
                <p className="text-muted-foreground mt-2">
                  {failure.message}
                </p>
              </div>
              <div className="bg-muted/30 rounded-[5%] p-6 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Error Code</span>
                  <span className="font-mono text-sm bg-red-50 text-red-700 px-2 py-1 rounded-[5%]">
                    {failure.errorCode}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/flights">
                  <Button className="w-full rounded-[5%]">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Try Again
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full rounded-[5%]">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Contact Support
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

export default function FailurePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <FailureContent />
    </Suspense>
  );
}