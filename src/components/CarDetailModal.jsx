import React from 'react';
import { X, Users, Settings, ShieldCheck, Fuel } from 'lucide-react';

export default function CarDetailModal({ car, onClose, onBook }) {
  if (!car) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 text-gray-700 hover:bg-gray-200 p-2 rounded-full transition z-10"
        >
          <X size={20} />
        </button>
        
        <div className="h-64 sm:h-80 w-full relative">
          <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
          <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
            {car.category}
          </span>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{car.name}</h2>
              <p className="text-gray-500 text-sm mt-1">Armada terawat, bersih, dan siap menemani perjalanan Anda.</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500 block">Tarif Sewa</span>
              <span className="text-xl font-extrabold text-blue-600">Rp {Number(car.price).toLocaleString('id-ID')} <span className="text-xs font-normal text-gray-500">/ hari</span></span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-gray-100 my-4 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Users className="text-blue-600" size={20} />
              <div>
                <span className="block text-xs text-gray-400">Kapasitas</span>
                <span className="font-semibold text-gray-800">{car.seats} Penumpang</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Settings className="text-blue-600" size={20} />
              <div>
                <span className="block text-xs text-gray-400">Transmisi</span>
                <span className="font-semibold text-gray-800">{car.transmission}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-blue-600" size={20} />
              <div>
                <span className="block text-xs text-gray-400">Asuransi</span>
                <span className="font-semibold text-gray-800">Termasuk</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Fuel className="text-blue-600" size={20} />
              <div>
                <span className="block text-xs text-gray-400">Bahan Bakar</span>
                <span className="font-semibold text-gray-800">Bensin / Diesel</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Fasilitas & Keunggulan:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>AC Dingin & Audio Player Berkualitas</li>
              <li>Pengecekan mesin rutin sebelum diserahkan</li>
              <li>Layanan darurat 24 jam di jalan raya</li>
              <li>Bisa dengan supir (opsional) atau lepas kunci</li>
            </ul>
          </div>

          <div className="flex justify-end gap-3">
            <button 
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Tutup
            </button>
            <button 
              onClick={() => { onClose(); onBook(car); }}
              className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}