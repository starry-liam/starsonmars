import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://starsonmars.space'),
  title: {
    default: "Stars On Mars | Liam Gessman's Personal Website",
    template: "%s | Horizon Avionics"
  },
  description: "Liam Gessman's Personal Website.",
  keywords: [
    "flight computer",
    "open source",
    "rocket",
    "avionics",
    "telemetry",
    "model rockets",
    "hackclub",
    "teen build",
    "thrust vector control flight computer",
    "gps flight computer",
    "altimeter flight computer",
    "teenagers",
    "DIY rockets",
    "rocketry",
    "rocket science"
  ],
  authors: [{ name: "Liam Gessman" }],
  creator: "Liam Gessman",
  publisher: "Liam Gessman",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://starsonmars.space",
    siteName: "Stars On Mars",
    title: "Stars On Mars | Liam Gessman's Personal Website",
    description: "Stars On Mars is the personal website of Liam Gessman, showcasing his projects, interests, and experiences in the world of technology and rocketry.",
    images: [{
      url: "/horizonHlogoNOBG.png",
      width: 800,
      height: 800,
      alt: "Horizon Avionics Logo"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stars On Mars | Liam Gessman's Personal Website",
    description: "Stars On Mars is the personal website of Liam Gessman, showcasing his projects, interests, and experiences in the world of technology and rocketry.",
    images: ["/horizonHlogoNOBG.png"],
    creator: "@HorizonAvionics",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/horizonHlogoNOBG.png",
    apple: "/horizonHlogoNOBG.png",
  },
  manifest: "/manifest.json",
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1e293b" />
        <link rel="canonical" href="https://starsonmars.space" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
