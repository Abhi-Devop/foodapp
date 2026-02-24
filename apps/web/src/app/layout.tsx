import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { CartAnimationProvider } from "@/components/FlyingCartAnimation";
import { Outfit, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import { getCurrentUser } from "@/app/actions/auth";
import AuthProvider from "@/components/AuthProvider";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-reserve",
});

export const metadata: Metadata = {
  title: {
    template: '%s | GrubHub',
    default: 'GrubHub - Premium Food Delivery',
  },
  description: "Order delicious food from top restaurants near you. Fast delivery, live tracking, and premium service.",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://grubhub.clone',
    siteName: 'GrubHub Clone',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GrubHub Food Delivery',
      },
    ],
  },
};

import Script from "next/script";

import ReservationWidget from "@/components/ReservationWidget";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${outfit.variable} ${cormorant.variable} ${playfair.variable} font-sans`}>
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
        <AuthProvider user={user}>
          <Providers>
            <CartAnimationProvider>
              <div className="min-h-screen">
                  {children}
                  <ReservationWidget />
              </div>
            </CartAnimationProvider>
          </Providers>
        </AuthProvider>
        <div className="fixed bottom-10 right-10 z-50 opacity-[0.03] mix-blend-overlay text-9xl tracking-tighter pointer-events-none font-bold uppercase" style={{ fontFamily: 'var(--font-reserve)' }}>Reserve</div>
      </body>
    </html>
  );
}
