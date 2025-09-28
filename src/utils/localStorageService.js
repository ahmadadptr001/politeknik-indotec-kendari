// Simpan item dengan expiry
export function setWithExpiry(key, value, ttl) {
  const now = new Date().getTime();
  const item = {
    value: value,
    expiry: now + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

// Ambil item dengan cek expiry
export function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  try {
    const item = JSON.parse(itemStr);
    const now = new Date().getTime();

    if (now > item.expiry) {
      localStorage.removeItem(key); // hapus kalau udah expired
      return null;
    }
    return item.value;
  } catch {
    return null;
  }
}
