const API_BASE = 'http://localhost:3000';

export const getToken = () => localStorage.getItem('token');
export const setToken = (t) => localStorage.setItem('token', t);
export const removeToken = () => localStorage.removeItem('token');

const authHeaders = () => ({ Authorization: `Bearer ${getToken()}` });

const normalizeImages = (items) =>
  items.map(item => ({
    ...item,
    images: (item.images || []).map(img => ({
      ...img,
      src: `${API_BASE}${img.src}`,
      rawSrc: img.src,
    })),
  }));

// Fetchers públicos
export const getTrilhas = () =>
  fetch(`${API_BASE}/trilhas`).then(r => r.json()).then(normalizeImages);

export const getEventos = () =>
  fetch(`${API_BASE}/eventos`).then(r => r.json()).then(normalizeImages);

export const getCachoeiras = () =>
  fetch(`${API_BASE}/cachoeiras`).then(r => r.json()).then(normalizeImages);

export const getTemporadas = () =>
  fetch(`${API_BASE}/temporada`).then(r => r.json()).then(items =>
    items.map(item => ({
      ...item,
      image: item.image ? `${API_BASE}${item.image}` : '',
      rawImage: item.image,
    }))
  );

// Auth
export const login = async (email, password) => {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Credenciais inválidas');
  return res.json();
};

// Trilhas
export const createTrilha = (fd) =>
  fetch(`${API_BASE}/trilhas`, { method: 'POST', headers: authHeaders(), body: fd }).then(r => r.json());

export const updateTrilha = (id, fd) =>
  fetch(`${API_BASE}/trilhas/${id}`, { method: 'PUT', headers: authHeaders(), body: fd }).then(r => r.json());

export const deleteTrilha = (id) =>
  fetch(`${API_BASE}/trilhas/${id}`, { method: 'DELETE', headers: authHeaders() }).then(r => r.json());

// Eventos
export const createEvento = (fd) =>
  fetch(`${API_BASE}/eventos`, { method: 'POST', headers: authHeaders(), body: fd }).then(r => r.json());

export const updateEvento = (id, fd) =>
  fetch(`${API_BASE}/eventos/${id}`, { method: 'PUT', headers: authHeaders(), body: fd }).then(r => r.json());

export const deleteEvento = (id) =>
  fetch(`${API_BASE}/eventos/${id}`, { method: 'DELETE', headers: authHeaders() }).then(r => r.json());

// Cachoeiras
export const createCachoeira = (fd) =>
  fetch(`${API_BASE}/cachoeiras`, { method: 'POST', headers: authHeaders(), body: fd }).then(r => r.json());

export const updateCachoeira = (id, fd) =>
  fetch(`${API_BASE}/cachoeiras/${id}`, { method: 'PUT', headers: authHeaders(), body: fd }).then(r => r.json());

export const deleteCachoeira = (id) =>
  fetch(`${API_BASE}/cachoeiras/${id}`, { method: 'DELETE', headers: authHeaders() }).then(r => r.json());

// Temporada
export const createTemporada = (fd) =>
  fetch(`${API_BASE}/temporada`, { method: 'POST', headers: authHeaders(), body: fd }).then(r => r.json());

export const updateTemporada = (id, fd) =>
  fetch(`${API_BASE}/temporada/${id}`, { method: 'PUT', headers: authHeaders(), body: fd }).then(r => r.json());

export const deleteTemporada = (id) =>
  fetch(`${API_BASE}/temporada/${id}`, { method: 'DELETE', headers: authHeaders() }).then(r => r.json());
