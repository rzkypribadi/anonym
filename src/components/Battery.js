import { useState, useEffect } from 'react';

export default function Battery() {
  const [level, setLevel] = useState(100);
  const [charging, setCharging] = useState(false);

  useEffect(() => {
    if (navigator.getBattery) {
      navigator.getBattery().then((bat) => {
        const update = () => {
          setLevel(bat.level * 100);
          setCharging(bat.charging);
        };
        update();
        bat.addEventListener('levelchange', update);
        bat.addEventListener('chargingchange', () => setCharging(bat.charging));
      });
    }
  }, []);

  const color = level > 50 ? '#10B981' : level > 20 ? '#F59E0B' : '#EF4444';
  const glow = charging ? 'box-shadow: 0 0 8px rgba(56, 189, 248, 0.6);' : '';

  return (
    <div className="flex items-center gap-2 text-sm">
      <span
        className="icon-battery"
        style={{
          '--level': `${level}%`,
          '--color': color,
          glow
        }}
      ></span>
      <span style={{ color }}>{Math.round(level)}%</span>
      {charging && <span style={{ color: '#38bdf8', marginLeft: '4px' }}>⚡</span>}
    </div>
  );
}
