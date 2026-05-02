import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhtasham Shafi — Robotics, AI & Software Engineer",
  description: "Personal portfolio of Muhtasham Shafi — young Bangladeshi engineer building robotics, AI, and software for real-world impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${instrumentSerif.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} font-sans antialiased bg-ink text-text`}>
        {children}
      </body>
    </html>
  );
}
