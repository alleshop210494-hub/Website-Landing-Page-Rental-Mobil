import React from 'react';
import { Car } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Car className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">Rental Mobil Bandung</span>
        </div>
        <div className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <a href="#home" className="hover:text-blue-600">Beranda</a>
          <a href="#catalog" className="hover:text-blue-600">Armada</a>
          <a href="#features" className="hover:text-blue-600">Keunggulan</a>
          <a href="#contact" className="hover:text-blue-600">Kontak</a>
        </div>
        <div>
          <a href="#catalog" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Sewa Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}