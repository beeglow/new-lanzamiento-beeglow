import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const glacialIndifference = localFont({
  src: [
    {
      path: "./fonts/glacial-indifference-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/glacial-indifference-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-glacial",
});

export const metadata: Metadata = {
  title: "BeeGlow - Lanzamiento de Marca",
  description: "Te invitamos al lanzamiento de BeeGlow. 29 de mayo de 2026 - General Pico, La Pampa.",
  openGraph: {
    title: "BeeGlow - Lanzamiento de Marca",
    description: "Te invitamos al lanzamiento de BeeGlow. 29 de mayo de 2026 - General Pico, La Pampa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${playfair.variable} ${glacialIndifference.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[#EDE2D2] text-[#422E26] font-sans">
        {children}
      </body>
    </html>
  );
}
