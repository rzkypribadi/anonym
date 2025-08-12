import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email: form.email }));
    router.push('/dashboard');
  };

  return (
    <div className="auth-container">
      <img src="/assets/logo.svg" alt="ZKY ANONYM" className="logo" />
      <div className="tabs">
        <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Masuk</button>
        <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Daftar</button>
      </div>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input name="nama" placeholder="Nama Lengkap" onChange={handleChange} required />
            <input name="username" placeholder="Username" onChange={handleChange} required />
            <input name="no_telp" placeholder="No HP" onChange={handleChange} required />
          </>
        )}
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">{isLogin ? 'Masuk' : 'Daftar'}</button>
      </form>
    </div>
  );
    }
