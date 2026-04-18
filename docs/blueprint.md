# **App Name**: VoyageSync

## Core Features:

- Comprehensive Flight Search: Allows users to input origin, destination, dates, and passenger details, and displays real-time search results fetched from the Duffel API with filters.
- Interactive Flight Details & Selection: Enables users to view detailed information for selected flight offers, including itinerary and pricing, and proceed to booking.
- Secure Passenger & Payment Workflow: Captures all necessary passenger information via forms and facilitates secure payment processing using Stripe Elements and API routes.
- Booking Confirmation & Retrieval: Displays booking confirmation with a booking reference (PNR) and flight details, and provides a user dashboard to view past and upcoming bookings.
- Real-time Flight API Interaction: Manages all backend interactions with the Duffel API for flight search, real-time offer revalidation before payment, and booking creation.
- Stripe Payment & Webhook Handling: Integrates Stripe for creating payment intents, handling secure transactions, and processing webhook notifications to finalize bookings post-payment.
- Robust User Management & Data Storage: Implements user authentication with NextAuth and securely persists all user, booking, and payment data in the PostgreSQL database using Prisma.

## Style Guidelines:

- Primary color: A modern, medium-dark blue (#1080CC) to convey trust, professionalism, and the feeling of travel.
- Background color: A very light, desaturated blue-grey (#ECF3F5) providing a clean and airy base for the UI.
- Accent color: A vibrant indigo-like blue-purple (#3745C9) to highlight key actions and convey sophistication.
- Headline and body font: 'Inter', a grotesque-style sans-serif for a modern, objective, and neutral aesthetic that ensures readability.
- Use minimalist, outline-style icons with a consistent stroke weight to maintain a clean and contemporary appearance, similar to leading travel platforms.
- A responsive, mobile-first design approach with clear visual hierarchy, ample spacing, and card-based layouts for flight listings and information display.
- Incorporate subtle loading skeletons for flight search results and smooth toast notifications for user feedback and error messages, ensuring a polished user experience.