import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Footero from "@/componentes/Footer";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Página prinicpal de IAW",
  description: "Curso 2024/25",
  icons: {
    icon: '/buscar.png'
  }
};


function Cargando() {
  return (
    <img className="imagen" src="/Loading_2.gif"></img>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header><Image src="/header.jpg" width="500" height="400" alt="Cabecera de la página"></Image></header>
        
          <main>{children}</main>
        <Footero/>
      </body>
    </html>
  );
}
