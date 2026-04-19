import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { TourPopup } from "@/components/tour-popup";
import { LanguageProvider } from "@/contexts/language-context";
import { ErrorBoundary } from "@/components/error-boundary";

const FAVICON = "https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_200,g_face/v1776535724/aaaaaaa_xu7z9a.png";

export const metadata: Metadata = {
  title: 'Premium Flight Bookings | Africa\'s Travel Platform',
  description: 'Search and book flights with real-time data across 500+ airlines. Africa\'s premier travel platform.',
  icons: {
    icon: [
      { url: FAVICON, type: 'image/png', sizes: '32x32' },
      { url: FAVICON, type: 'image/png', sizes: '16x16' },
      { url: FAVICON, type: 'image/png', sizes: '192x192' },
    ],
    shortcut: FAVICON,
    apple: [
      { url: FAVICON, sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: FAVICON },
    ],
  },
  openGraph: {
    images: [{ url: FAVICON }],
  },
  twitter: {
    images: [FAVICON],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Force favicon across all browsers — overrides any cached version */}
        <link rel="icon" href="https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_200,g_face/v1776535724/aaaaaaa_xu7z9a.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_200,g_face/v1776535724/aaaaaaa_xu7z9a.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_200,g_face/v1776535724/aaaaaaa_xu7z9a.png" />
        <link rel="apple-touch-icon-precomposed" href="https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_200,g_face/v1776535724/aaaaaaa_xu7z9a.png" />
        <meta property="og:image" content="https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_200,g_face/v1776535724/aaaaaaa_xu7z9a.png" />
        <meta name="msapplication-TileImage" content="https://res.cloudinary.com/dwsl2ktt2/image/upload/c_thumb,w_200,g_face/v1776535724/aaaaaaa_xu7z9a.png" />
        <meta name="theme-color" content="#2f0877" />
      </head>
      <body className="font-body antialiased selection:bg-primary/20 selection:text-primary" suppressHydrationWarning>
        <ErrorBoundary>
          <LanguageProvider>
            {children}
            <TourPopup />
            <Toaster />
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
