import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">RentCar Indonesia</h3>
          <p className="text-gray-400">Solusi terbaik untuk perjalanan aman, nyaman, dan terpercaya di berbagai kota.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
          <p className="text-gray-400">Jl. Raya Otomotif No. 45, Jakarta</p>
          <p className="text-gray-400">Email: support@rentcar.id</p>
          <p className="text-gray-400">Telepon: +62 812-3456-7890</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
          <p className="text-gray-400">Senin - Minggu: 24 Jam</p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} RentCar Indonesia. Hak Cipta Dilindungi.
      </div>
    </footer>
  );
}