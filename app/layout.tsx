import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import { weddingData } from "@/data/wedding";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: `Undangan Pernikahan ${weddingData.groom.shortName} & ${weddingData.bride.shortName}`,
  description: `Undangan Pernikahan Digital Premium ${weddingData.groom.fullName} & ${weddingData.bride.fullName}. ${weddingData.akad.day}, ${weddingData.akad.date}`,
  openGraph: {
    title: `The Wedding of ${weddingData.groom.shortName} & ${weddingData.bride.shortName}`,
    description: `Tanpa Mengurangi Rasa Hormat, Kami Mengundang Bapak/Ibu/Saudara/i Untuk Hadir Di Acara Pernikahan Kami.`,
    url: "https://pernikahan-kami.vercel.app",
    siteName: `Pernikahan ${weddingData.groom.shortName} & ${weddingData.bride.shortName}`,
    images: [
      {
        url: weddingData.groom.photo,
        width: 1200,
        height: 630,
        alt: `Pernikahan ${weddingData.groom.shortName} & ${weddingData.bride.shortName}`,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${cormorant.variable} ${poppins.variable}`}>
      <body className="antialiased selection:bg-gold-light selection:text-olive-dark bg-ivory text-olive">
        {children}
      </body>
    </html>
  );
}
