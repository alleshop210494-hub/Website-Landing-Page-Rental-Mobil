import React from 'react';
import { Car, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    // Tambahkan id="footer" pada tag footer utama
    <footer id="footer" className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Kolom 1: Logo & Deskripsi */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Car className="text-blue-500" size={36} />
            <span className="text-3xl font-bold text-white">Rental Mobil Bandung</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Penyewaan mobil terpercaya di Indonesia. Armada lengkap, harga transparan, dan layanan 24/7 untuk kenyamanan perjalanan Anda.
          </p>
        </div>

        {/* Kolom 2: Navigasi Cepat */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navigasi Cepat</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-400 transition">Beranda</a></li>
            <li><a href="#catalog" className="hover:text-blue-400 transition">Pilihan Armada</a></li>
            <li><a href="#keunggulan" className="hover:text-blue-400 transition">Keunggulan Kami</a></li>
            <li><a href="#faq" className="hover:text-blue-400 transition">FAQ</a></li>
          </ul>
        </div>

        {/* Kolom 3: Layanan & Dukungan */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Layanan & Dukungan</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#syarat" className="hover:text-blue-400 transition">Syarat & Ketentuan</a></li>
            <li><a href="#privasi" className="hover:text-blue-400 transition">Kebijakan Privasi</a></li>
            <li><a href="#karir" className="hover:text-blue-400 transition">Karir</a></li>
            <li><a href="#blog" className="hover:text-blue-400 transition">Blog</a></li>
          </ul>
        </div>

        {/* Kolom 4: Kontak Kami */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <MapPin size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
              <span>Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 10110</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={20} className="text-blue-500 flex-shrink-0" />
              <span>+62 21 1234 5678</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={20} className="text-blue-500 flex-shrink-0" />
              <span>support@rentalmobilbandung.id</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Baris Bawah: Copyright & Social Media */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Rental Mobil Bandung Indonesia. All Rights Reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
          <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
          <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
}