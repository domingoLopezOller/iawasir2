import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import NavBar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
/*import './App.css'*/

function App() {
  return (
    <>
    <Header/>
    <NavBar />
    <Main />
    <Footer />
    </>
  )
}

export default App
