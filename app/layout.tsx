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
  title: "Muhtasham Shafi | Student Innovator & Developer",
  description:
    "Portfolio of Muhtasham Shafi - young Bangladeshi engineer building robotics, AI, and software for real-world impact.",

  metadataBase: new URL("https://muhtashamshafi.com"),

  openGraph: {
    title: "Muhtasham Shafi",
    description: "Robotics, AI & Software Projects",
    url: "https://muhtashamshafi.com",
    siteName: "Muhtasham Shafi Portfolio",
    type: "website",
    images: [
      {
        url: "https://muhtashamshafi.com/og-v2.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
  card: "summary_large_image",
},

  icons: {
    icon: "/favicon.ico",
  },
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
