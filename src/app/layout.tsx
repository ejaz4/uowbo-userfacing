import type { Metadata } from "next";
import "./globals.css";
import { Inter, Ubuntu } from "next/font/google";
import Link from "next/link";
import { Suspense } from "react";
import { joinClasses } from "@/libs/joinClasses";

export const metadata: Metadata = {
  title: "uowbo!",
  description: "Valving for University of Westminster students",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  variable: "--ubuntu",
  weight: "500",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={joinClasses(inter.className, ubuntu.variable)}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
