import { useState } from 'react';
import { useRouter } from 'next/router';
import { simpanPesan } from '../lib/db';

export default function KirimPesan() {
  const router = useRouter();
  const { username } = router.query;
  const [pesan, setPesan] = useState('');
  const [terkirim, setTerkirim] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pesan.trim()) return;

    await simpanPesan({
      to_username: username,
      isi_pesan: pesan.trim(),
      timestamp: Date.now()
    });
    setTerkirim(true);
  };

  if (terkirim) {
    return (
      <div className="sukses-container">
        <h1>Pesan berhasil terkirim ke @{username}!</h1>
        <p className="sub">Terima kasih.</p>

        <div className="ajakan-box">
          <p>
            <a href="/index" className="link-biru">
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
          placeholder="Tulis pesan di sini..."
          maxLength="1500"
          required
        />
        <button type="submit">Kirim Pesan</button>
      </form>
    </div>
  );
}
