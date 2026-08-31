import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Armada', href: '#catalog' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Kontak', href: '#footer' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            {/* Ganti tag ikon Car dengan tag img untuk menggunakan gambar Anda sendiri */}
            <img 
              src="/images/logo-rental.png" 
              alt="Logo RentCar" 
              className="w-8 h-8 object-contain" 
            />
            <span className="text-2xl font-bold text-gray-900">RentCar</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            ))}
            <a href="#catalog" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow">
              Sewa Sekarang
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#catalog" className="block w-full text-center mt-4 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition shadow">
              Sewa Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}