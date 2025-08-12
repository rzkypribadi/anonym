import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [pesan, setPesan] = useState([]);

  useEffect(() => {
    const u = localStorage.getItem('user');
    if (!u) router.push('/');
    setUser(JSON.parse(u));
  }, []);

  return (
    <div className="dashboard">
      <header>
        <h1>Dashboard</h1>
        <button onClick={() => { localStorage.removeItem('user'); router.push('/'); }}>Keluar</button>
      </header>

      <main>
        <div className="stats">
          <div className="stat">
            <span>Total Pesan</span>
            <strong>15</strong>
          </div>
          <div className="stat">
            <span>Harian</span>
            <strong>3</strong>
          </div>
          <div className="stat">
            <span>Mingguan</span>
            <strong>7</strong>
          </div>
          <div className="stat">
            <span>Bulanan</span>
            <strong>15</strong>
          </div>
        </div>

        <div className="messages">
          <h2>Pesan Masuk</h2>
          <div className="message-item">
            <p>Halo, kamu keren!</p>
            <small>10 Apr 2025 | 14:30</small>
          </div>
        </div>
      </main>
    </div>
  );
    }
