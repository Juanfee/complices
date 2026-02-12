const SHEET_URL = "https://script.google.com/macros/s/AKfycby7i7WQgRL3TKOrpRFAC98XkzKiu9gbup7qv7MO-Q98zwxYZ2mK9iR0Szazea4SVEAmhQ/exec";

const CACHE_KEY = "products_cache";
const CACHE_TIME_KEY = "products_cache_time";
const CACHE_DURATION = 1000 * 60 * 10; 

export async function getProducts() {
  const cachedData = localStorage.getItem(CACHE_KEY);
  const cacheTime = localStorage.getItem(CACHE_TIME_KEY);

  const now = Date.now();

  // Si hay cache y no ha expirado
  if (cachedData && cacheTime && now - cacheTime < CACHE_DURATION) {
    console.log("📦 Cargando productos desde cache");
    return JSON.parse(cachedData);
  }

  console.log("🌐 Cargando productos desde Google Sheets");

  const res = await fetch(SHEET_URL);
  const data = await res.json();

  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  localStorage.setItem(CACHE_TIME_KEY, now.toString());

  return data;
}