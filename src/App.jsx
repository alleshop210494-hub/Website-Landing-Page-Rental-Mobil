import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarCatalog from './components/CarCatalog';
import Footer from './components/Footer';
import CarDetailModal from './components/CarDetailModal';
import BookingModal from './components/BookingModal';

export default function App() {
  const [selectedCarDetail, setSelectedCarDetail] = useState(null);
  const [selectedCarBooking, setSelectedCarBooking] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
        <CarCatalog 
          onDetail={(car) => setSelectedCarDetail(car)} 
          onBook={(car) => setSelectedCarBooking(car)} 
        />
      </div>
      <Footer />

      {/* Modal Detail Armada */}
      <CarDetailModal 
        car={selectedCarDetail} 
        onClose={() => setSelectedCarDetail(null)} 
        onBook={(car) => setSelectedCarBooking(car)} 
      />

      {/* Modal Form Pemesanan */}
      <BookingModal 
        car={selectedCarBooking} 
        onClose={() => setSelectedCarBooking(null)} 
      />
    </div>
  );
}