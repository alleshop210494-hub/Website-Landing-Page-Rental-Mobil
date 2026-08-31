import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';
import { sql } from '../lib/db';

const fallbackCars = [
  { 
    id: 1, 
    name: 'Toyota Avanza', 
    category: 'MPV', 
    price: 350000, 
    image: '/images/avanza.jpeg', 
    seats: 7, 
    transmission: 'Manual' 
  },
  { 
    id: 2, 
    name: 'Honda Civic', 
    category: 'Sedan', 
    price: 650000, 
    image: '/images/civic.png', 
    seats: 5, 
    transmission: 'Automatic' 
  },
  { 
    id: 3, 
    name: 'Mitsubishi Pajero', 
    category: 'SUV', 
    price: 1200000, 
    image: '/images/pajero.jpg', 
    seats: 7, 
    transmission: 'Automatic' 
  }
];

export default function CarCatalog() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        if (!sql) {
          setCars(fallbackCars);
          setLoading(false);
          return;
        }

        await sql`
          CREATE TABLE IF NOT EXISTS cars (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            category VARCHAR(100) NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            image VARCHAR(255) NOT NULL,
            seats INT NOT NULL,
            transmission VARCHAR(50) NOT NULL
          );
        `;

        const existingCars = await sql`SELECT * FROM cars;`;

        if (existingCars.length === 0) {
          await sql`
            INSERT INTO cars (name, category, price, image, seats, transmission) VALUES
            ('Toyota Avanza', 'MPV', 350000, '/images/avanza.jpeg', 7, 'Manual'),
            ('Honda Civic', 'Sedan', 650000, '/images/civic.png', 5, 'Automatic'),
            ('Mitsubishi Pajero', 'SUV', 1200000, '/images/pajero.jpg', 7, 'Automatic');
          `;
        }

        const data = await sql`SELECT * FROM cars;`;
        setCars(data);
      } catch (err) {
        console.error('Database connection notice, using fallback data:', err);
        setCars(fallbackCars);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <section id="catalog" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Pilihan Armada Kami</h2>
        <p className="text-gray-600 mt-2">Pilih kendaraan sesuai dengan kebutuhan perjalanan Anda.</p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">Memuat data armada...</div>
      ) : cars.length === 0 ? (
        <div className="text-center py-12 text-gray-500">Tidak ada armada tersedia saat ini.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </section>
  );
}