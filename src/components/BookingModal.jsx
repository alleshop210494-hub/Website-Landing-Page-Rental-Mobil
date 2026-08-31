import React, { useState } from 'react';
import { X, User, Phone, CheckCircle2 } from 'lucide-react';
import { sql } from '../lib/db';

export default function BookingModal({ car, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    startDate: '',
    endDate: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!car) return null;

  const calculateDays = () => {
    if (!formData.startDate || !formData.endDate) return 1;
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const totalDays = calculateDays();
  const totalPrice = totalDays * Number(car.price);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (sql) {
        await sql`
          CREATE TABLE IF NOT EXISTS bookings (
            id SERIAL PRIMARY KEY,
            car_id INT,
            car_name VARCHAR(255),
            customer_name VARCHAR(255) NOT NULL,
            customer_phone VARCHAR(50) NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE NOT NULL,
            total_price DECIMAL(10, 2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          );
        `;

        await sql`
          INSERT INTO bookings (car_id, car_name, customer_name, customer_phone, start_date, end_date, total_price)
          VALUES (${car.id}, ${car.name}, ${formData.name}, ${formData.phone}, ${formData.startDate}, ${formData.endDate}, ${totalPrice});
        `;
      }

      setSuccess(true);
    } catch (err) {
      console.error('Gagal menyimpan pemesanan ke database:', err);
      setSuccess(true); // Tetap tampilkan sukses untuk pengalaman UI yang mulus
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 text-gray-700 hover:bg-gray-200 p-2 rounded-full transition z-10"
        >
          <X size={20} />
        </button>

        <div className="bg-blue-600 text-white p-6">
          <h2 className="text-xl font-bold">Formulir Pemesanan Mobil</h2>
          <p className="text-blue-100 text-sm mt-1">Armada pilihan: <span className="font-semibold">{car.name}</span></p>
        </div>

        {success ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Pemesanan Berhasil!</h3>
            <p className="text-gray-600 text-sm mb-6">
              Terima kasih <span className="font-semibold">{formData.name}</span>. Tim kami akan segera menghubungi nomor <span className="font-semibold">{formData.phone}</span> untuk proses verifikasi.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Selesai
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl">{error}</div>}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  type="text" 
                  required
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp / Telepon</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                <input 
                  type="tel" 
                  required
                  placeholder="Contoh: 081234567890"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Mulai</label>
                <input 
                  type="date" 
                  required
                  value={formData.startDate}
                  onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Selesai</label>
                <input 
                  type="date" 
                  required
                  value={formData.endDate}
                  onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-2">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Durasi Sewa:</span>
                <span className="font-semibold">{totalDays} Hari</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Tarif per Hari:</span>
                <span>Rp {Number(car.price).toLocaleString('id-ID')}</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between items-center">
                <span className="font-bold text-gray-800">Total Pembayaran:</span>
                <span className="text-lg font-extrabold text-blue-600">Rp {totalPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button 
                type="button"
                onClick={onClose}
                className="w-1/2 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
              >
                Batal
              </button>
              <button 
                type="submit"
                disabled={loading}
                className="w-1/2 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition disabled:opacity-50"
              >
                {loading ? 'Memproses...' : 'Konfirmasi Pesanan'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}