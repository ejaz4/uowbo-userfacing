import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

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
        {children}
        <div className="floating-strip">
          <Link href={"/privacy"}>Privacy</Link>
        </div>
      </body>
    </html>
  );
}
