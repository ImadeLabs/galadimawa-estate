import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- THIS IS WHERE YOU REMOVE "CREATE NEXT APP" ---
export const metadata: Metadata = {
  title: "5-Bed Luxury Duplex | Galadimawa Estate",
  description: "Premium 5-bedroom detached duplex in Galadimawa, Abuja. Features include 1-room BQ, Solar Inverter, and modern Turkish fittings.",
  icons: {
    icon: "/favicon.ico", // This points to your tab icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-gray-50 min-h-screen text-slate-900">
        {children}
      </body>
    </html>
  );
}