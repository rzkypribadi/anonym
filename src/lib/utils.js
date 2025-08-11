export const sanitizeInput = (str) => {
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

export const formatTanggal = (timestamp) => {
  return new Date(timestamp).toLocaleDateString('id-ID');
};

export const formatJam = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString('id-ID');
};
