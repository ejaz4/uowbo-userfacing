import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "uowbo!",
  description: "Valving for University of Westminster students",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
