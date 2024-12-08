'use client'
import Home from "@/app/page";
import Image from "next/image";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar({idioma, changeLanguage}) {
    const dict = idioma === "es" ? {home: "Home", gen1: "GEN 1", gen2: "GEN 2", gen3: "GEN 3"} : {home: "Home", gen1: "GEN 1", gen2: "GEN 2", gen3: "GEN 3"}; 
    
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
          <link className="navbar-brand" href="/">Pokemones</link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" href="/">{dict.home}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/gen1">{dict.gen1}</Link>
               </li>
               <li className="nav-item">
                   <Link className="nav-link" href="/gen2">{dict.gen2}</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" href="/gen3">{dict.gen3}</Link>
               </li>
              </ul>
              <div className="d-flex">
              <button onClick={() => changeLanguage('es')} className="p-2 rounded-full hover:bg-gray-200">
	           <Image src="/españa.png" alt="Español" width={30} height={28} />
              </button>
              <button onClick={() => changeLanguage('en')} className="p-2 rounded-full hover:bg-gray-200">
	           <Image src="/iglaterra.png" alt="Inglés" width={30} height={28} />
              </button>
              </div>
                </div>
             </div>
            </nav>
    )
}
export default Navbar;