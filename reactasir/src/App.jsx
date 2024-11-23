import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';
import Carrusel from './components/Carrusel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <div className="main-content">
        <Sidebar />
        <Content />
        <Carrusel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
