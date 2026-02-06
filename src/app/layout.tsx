import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = localFont({
  src: [
    {
      path: "../fonts/inter-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/inter-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/inter-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/inter-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const display = localFont({
  src: [
    {
      path: "../fonts/playfair-display-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: {
    default: "BienMind - Votre bien-être mental au quotidien",
    template: "%s | BienMind",
  },
  description:
    "BienMind vous accompagne vers un meilleur équilibre mental. Découvrez nos services de coaching, méditation et accompagnement personnalisé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${sans.variable} ${display.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
