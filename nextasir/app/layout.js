'use client';
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Footero from "@/componentes/footer";
import { Suspense, useState } from "react";
import Link from "next/link";
import { getDictionary } from "@/componentes/diccionario";
import "bootstrap/dist/css/bootstrap.min.css"
import AddBootstrap from "./bootstrap";
import Pokemon from "./pokemon/page";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle";
import PokemonPage from "@/componentes/pokemon";
import PokemonModal from "@/componentes/pokemon_modal";
import { Navbar } from "react-bootstrap";
import PokemonList from "@/componentes/pokemon_list";
import { FetchPokemon } from "@/componentes/FetchPokemon";
import NavigationBar from "@/componentes/nav";

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

//export const metadata = {
//  title: "Pagina principal de IAW",
//  description: "Curso 2024-2025",
//  icons: {
//    icon: '/buscar.png'
//  }
//};

function Cargando() {  
  return (
    <img className="imagen" src="/Loading_2.gif"></img>
  )
}

export default function RootLayout({ children }) {
  const [idioma,setIdioma]=useState('en');
    const dict=getDictionary(idioma);
    
    const changeLanguage = (lang) => {
      setIdioma(lang);
    }

  return (
    <html lang={idioma}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <AddBootstrap/>
          <header className="header">
            <Image src="/pokemon.jpg" width="2500" height="300" alt="header" />
          </header>
          <NavigationBar idioma={idioma} changeLanguage={changeLanguage}>
         </NavigationBar>
          <main> 
          <h1>{dict.title}</h1>
          <h2>{dict.description}</h2>
          {children}
          </main>
      </body>
    </html>
  );
}
