import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// <meta name="google-site-verification" content="yC4HwZ2WUqDHVLHU0JqgYVI766fPsrTCcrauJk8mvGE" />

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce SSG",
  description: "Ecommerce SSG - Next.js Skripsi",
  metadataBase: new URL("https://ecommerce-ssg.vercel.app"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: 'yC4HwZ2WUqDHVLHU0JqgYVI766fPsrTCcrauJk8mvGE',
  },
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
        {children}
      </body>
    </html>
  );
}
