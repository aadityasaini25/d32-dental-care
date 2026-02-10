import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "D32 The Dental Centre | Best Orthodontist & Implantologist in South Extension, Delhi",
  description: "Dr. Gurkeerat Singh - Orthodontist & Implantologist. Specialized in Orthodontics & Dentofacial Orthopedics. Located at E-90, South Extension Part I, New Delhi.",
  keywords: "Dr. Gurkeerat Singh, Orthodontist, Implantologist, D32 The Dental Centre, Dental Clinic South Extension, Delhi Dentist, Braces, Implants",
  authors: [{ name: "Dr. Gurkeerat Singh" }],
  creator: "D32 The Dental Centre",
  publisher: "D32 The Dental Centre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://d32thedentalcentre.com/'), // Hypothetical URL
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "D32 The Dental Centre | Expert Orthodontic & Implant Care",
    description: "Dr. Gurkeerat Singh - 28 Years Experience. E-90, South Extension Part I, New Delhi.",
    url: 'https://d32thedentalcentre.com/',
    siteName: "D32 The Dental Centre",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "D32 The Dental Centre",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "D32 The Dental Centre",
    description: "Expert Orthodontic & Implant Care in New Delhi",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
