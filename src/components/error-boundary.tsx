"use client";

import { Component, ReactNode, ErrorInfo } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="text-center max-w-md">
            <div className="h-20 w-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="h-10 w-10 text-red-500" />
            </div>
            <h1 className="font-display text-2xl font-bold mb-2">Something went wrong</h1>
            <p className="text-muted-foreground mb-6">
              We're sorry, an unexpected error occurred. Please try again.
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={this.handleReload} className="rounded-[5%]">
                <RefreshCw className="h-4 w-4 mr-2" />
                Reload Page
              </Button>
              <Link href="/">
                <Button variant="outline" className="rounded-[5%]">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export class LoadingBoundary extends Component<{ children: ReactNode }> {
  state = { isLoading: true };

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}