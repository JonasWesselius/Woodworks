import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Woodworks - Specialist in Houtbewerking",
  description: "Woodworks is uw specialist in aanbouw, overkapping, verbouwen en renovatie. Vakmanschap en kwaliteit staat bij ons voorop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen relative">
          <div className="fixed inset-0 z-0">
            <Image
              src="/placeholderBanner.jpg"
              alt="Background"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
