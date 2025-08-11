import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ref, push } from 'firebase/database';
import { db } from '../lib/firebase';

export default function KirimPesanPage() {
  const router = useRouter();
  const { username } = router.query;
  const [pesan, setPesan] = useState('');
  const [terkirim, setTerkirim] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) return;
    // Cek username ada di Firebase
  }, [username]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pesan.trim()) return;

    setLoading(true);
    try {
      await push(ref(db, 'messages'), {
        to_username: username,
        isi_pesan: pesan.trim(),
        timestamp: Date.now(),
        tanggal: new Date().toLocaleDateString('id-ID'),
        jam: new Date().toLocaleTimeString('id-ID')
      });
      setTerkirim(true);
    } catch {
      alert('Gagal kirim pesan');
    } finally {
      setLoading(false);
    }
  };

  if (terkirim) {
    return (
      <div className="sukses-container">
        <h1>Pesan berhasil terkirim ke @{username}!</h1>
        <p className="sub">Terima kasih.</p>

        <div className="ajakan-box">
          <p>
            <a href="/register" className="link-biru">
              🔗 Buat link sepertiku!
            </a>
            <br />
            <span className="text-kecil">
              Punya link khusus: anonym.zkypro.my.id/[username-mu]
            </span>
          </p>
        </div>

        <p className="kirim-lagi">
          <a href={router.asPath} className="link-biru">
            ✉️ Kirim pesan lagi ke @{username}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h1>Kirim Pesan Anonim ke @{username}</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tulis pesanmu di sini..."
          maxLength="500"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
      </form>
    </div>
  );
    }
