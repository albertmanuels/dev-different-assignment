import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Estate",
  description: "Find your dream property",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 right-0 bg-background shadow-md z-10 isolate py-4 px-4 lg:px-0">
          <div className="container mx-auto py-2 flex items-center justify-between">
            <Link href="/" className="text-3xl font-bold">
              Real Estate
            </Link>
            <nav>
              <ul className="flex">
                <li>
                  <Link
                    href="/property"
                    className="text-primary font-medium text-lg"
                  >
                    Property
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="pt-30 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
