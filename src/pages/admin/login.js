import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminLogin() {
  const [form, setForm] = useState({});
  const [soal] = useState('7 + 5 = ?');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username === 'zky-admin' && form.password === 'zky#1234' && form.jawaban === '12') {
      localStorage.setItem('admin', 'true');
      router.push('/admin/dashboard');
    } else {
      alert('Login gagal');
    }
  };

  return (
    <div className="auth-container">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} required />
        <input name="password" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <div>{soal}</div>
        <input name="jawaban" placeholder="Jawaban" onChange={(e) => setForm({ ...form, jawaban: e.target.value })} required />
        <button type="submit">Masuk</button>
      </form>
    </div>
  );
  }
