import { neon } from '@neondatabase/serverless';

// Menggunakan variabel lingkungan Vite (VITE_DATABASE_URL)
const connectionString = import.meta.env.VITE_DATABASE_URL;

export const sql = connectionString ? neon(connectionString) : null;