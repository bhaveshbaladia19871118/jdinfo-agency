import type { Metadata } from "next";
import "./globals.css";

import { Inter, Poppins } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JD Info | Automation & Digital Solutions",
  description:
    "JD Info helps businesses with data solutions, eCommerce, automation, AI, Shopify, WordPress and digital services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}