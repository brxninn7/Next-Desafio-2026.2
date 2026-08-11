import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins ({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const spaceGrotesk = Space_Grotesk ({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Nexus - Sua plataforma de jogos digitais",
  description: "Nexus é a sua plataforma de jogos digitais, oferecendo uma vasta coleção de títulos, desde lançamentos globais até clássicos cult. Baixe e jogue em minutos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} antialiased bg-[#070B14]`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
