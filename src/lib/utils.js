export const sanitizeInput = (str) => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

export const formatTanggal = (timestamp) => {
  return new Date(timestamp).toLocaleDateString('id-ID');
};

export const formatJam = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString('id-ID');
};
