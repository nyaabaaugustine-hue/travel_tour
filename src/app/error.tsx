"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8 max-w-md">
        <div className="text-6xl">⚠️</div>
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="text-muted-foreground">
          We encountered an unexpected error. Please try again or return to the homepage.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="outline">
            Try Again
          </Button>
          <Button asChild>
            <a href="/">Go Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}