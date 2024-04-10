import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "./(Providers)/NextUIProvider";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const montserrat = Montserrat({subsets: ["latin"], variable: '--font-montserrat'});

export const metadata: Metadata = {
  title: "Distrify, donde la música empieza su camino",
  description: "Distribuimos digitalmente tu música en todas las plataformas y redes sociales, en más de 180 países. Distrify, totalmente gratis, incluído YouTube. Elige en qué plataformas quieres estar. Llega a todos tus fans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Provider>{children}</Provider>
        </body>
    </html>
  );
}
