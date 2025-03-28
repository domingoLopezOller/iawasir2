import { Suspense } from "react";
var sleep = function(ms){ return new Promise(resolve => setTimeout(resolve, ms));};
export default function Layout({children}) {
    return (
        <section>
            {/* navbar de boostrap */}
          {/* navbar de boostrap */}
    <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="/defensa"> Navbar </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/defensa">Inicio</a>
                    </li>

                    
                    {/* Desplegable */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Pokemon Generación </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/defensa/gen1">Generación 1</a></li>
                        <li><a className="dropdown-item" href="/defensa/gen2">Generación 2</a></li>
                        <li><a className="dropdown-item" href="/defensa/gen3">Generación 3</a></li>
                      </ul>
                    </li>



                  </ul>


                </div>
              </div>
            </nav>
          </div>
          {/* navbar de boostrap */}
          <Suspense fallback={<img src="/Loading_2.gif" />}>
            {children}
            </Suspense>
        </section>
    );
}