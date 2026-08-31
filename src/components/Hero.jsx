import React from 'react';

export default function Hero() {
  return (
    <div 
      id="home" 
      className="relative bg-blue-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(to bottom right, rgba(23, 37, 84, 0.6), rgba(30, 58, 138, 0.5)), url('/images/hero.jpeg')` 
      }}
    >
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
          Sewa Mobil Nyaman & Terpercaya untuk Perjalanan Anda
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 mb-8">
          Nikmati kemudahan menjelajah kota dengan pilihan armada terbaik, harga transparan, dan pelayanan profesional 24/7.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#catalog" className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition">
            Lihat Armada
          </a>
          <a href="#contact" className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition">
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}