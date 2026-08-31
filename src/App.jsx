import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarCatalog from './components/CarCatalog';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
        <CarCatalog />
      </div>
      <Footer />
    </div>
  );
}