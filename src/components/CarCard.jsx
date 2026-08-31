import React from 'react';
import { Users, Settings } from 'lucide-react';

export default function CarCard({ car }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition flex flex-col justify-between">
      <div>
        <div className="h-48 overflow-hidden relative">
          <img 
            src={car.image} 
            alt={car.name} 
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
          <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {car.category}
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
            <span className="flex items-center gap-1"><Users size={16} /> {car.seats} Kursi</span>
            <span className="flex items-center gap-1"><Settings size={16} /> {car.transmission}</span>
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <div>
          <span className="text-xs text-gray-500 block">Harga / Hari</span>
          <span className="text-lg font-bold text-blue-600">Rp {Number(car.price).toLocaleString('id-ID')}</span>
        </div>
        <button 
          onClick={() => alert(`Anda memilih ${car.name}`)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          Pesan
        </button>
      </div>
    </div>
  );
}