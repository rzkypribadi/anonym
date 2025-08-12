import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({});

  useEffect(() => {
    if (!localStorage.getItem('admin')) router.push('/admin/login');
  }, []);

  return (
    <div className="admin-dashboard">
      <header>
        <h1>Admin Panel</h1>
        <button onClick={() => { localStorage.removeItem('admin'); router.push('/admin/login'); }}>Keluar</button>
      </header>

      <main>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Pengguna</h3>
            <p>247</p>
          </div>
          <div className="stat-card">
            <h3>Total Pesan</h3>
            <p>3.241</p>
          </div>
          <div className="stat-card">
            <h3>Pesan Harian</h3>
            <p>142</p>
          </div>
          <div className="stat-card">
            <h3>Pesan Mingguan</h3>
            <p>892</p>
          </div>
        </div>
      </main>
    </div>
  );
}
