"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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

export default function FailurePage() {
  const searchParams = useSearchParams();
  const [failure, setFailure] = useState<FailureData | null>(null);

  useEffect(() => {
    const error = searchParams.get("error");
    const code = searchParams.get("code");
    
    if (error) {
      setFailure({
        error: error,
        errorCode: code || "UNKNOWN",
        message: getErrorMessage(error),
      });
    } else {
      // Default failure for testing
      setFailure({
        error: "payment_declined",
        errorCode: "PAY_001",
        message: "Your payment was declined. Please try again or use a different payment method.",
      });
    }
  }, [searchParams]);

  const getErrorMessage = (error: string): string => {
    const errorMessages: Record<string, string> = {
      payment_failed: "Your payment could not be processed. Please check your card details and try again.",
      payment_declined: "Your card was declined. Please contact your bank or use an alternative payment method.",
      session_expired: "Your session expired. Please start a new booking.",
      insufficient_funds: "Insufficient funds. Please use a different payment method.",
      network_error: "A network error occurred. Please check your connection and try again.",
      cancelled: "The booking was cancelled.",
    };
    return errorMessages[error] || "An unexpected error occurred. Please try again.";
  };

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
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Error Code</span>
                    <span className="font-mono text-sm bg-red-50 text-red-700 px-2 py-1 rounded-[5%]">
                      {failure.errorCode}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <span className="text-sm text-red-600 font-medium">Failed</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-[5%]">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-900">Need Help?</p>
                    <p className="text-sm text-blue-700">Our support team is available 24/7</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-[5%]">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-900">Email Support</p>
                    <p className="text-sm text-green-700">support@voyagesync.com</p>
                  </div>
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