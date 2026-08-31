import React from 'react';
import { Car, ThumbsUp, Clock3, ShieldCheck } from 'lucide-react';

const advantagesData = [
  {
    icon: ThumbsUp,
    title: 'Mobil Terawat & Prima',
    description: 'Seluruh armada kami menjalani perawatan rutin dan pemeriksaan menyeluruh untuk memastikan keamanan dan kenyamanan Anda.',
  },
  {
    icon: Clock3,
    title: 'Proses Cepat & Mudah',
    description: 'Pemesanan online yang simpel, persyaratan mudah, dan layanan cepat tanpa birokrasi berbelit.',
  },
  {
    icon: ShieldCheck,
    title: 'Asuransi All Risk',
    description: 'Perjalanan Anda lebih tenang karena setiap unit armada kami telah dilindungi asuransi All Risk terpercaya.',
  },
  {
    icon: Car,
    title: 'Pilihan Beragam',
    description: 'Tersedia berbagai tipe mobil mulai dari City Car, MPV keluarga, hingga SUV premium sesuai kebutuhan perjalanan Anda.',
  },
];

export default function Advantages() {
  return (
    <section id="keunggulan" className="py-16 bg-white px-4 sm:px-6 lg:px-8 scroll-mt-16"> {/* Tambahkan id="keunggulan" di sini */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Keunggulan Kami</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan terbaik dengan standar keamanan dan kenyamanan tinggi untuk setiap perjalanan Anda bersama Rental Mobil Bandung.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantagesData.map((item, index) => (
            <div key={index} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl text-center transition hover:shadow-xl hover:bg-white">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}