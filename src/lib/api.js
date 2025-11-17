export const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export function withAuthHeaders(token) {
  return token
    ? { Authorization: `Bearer ${token}` }
    : {};
}

export async function apiFetch(path, { method = "GET", headers = {}, body } = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      "Content-Type": body instanceof FormData ? undefined : "application/json",
      ...headers,
    },
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    let detail = await res.text();
    try { detail = JSON.parse(detail); } catch {}
    const message = detail?.detail || detail?.message || res.statusText;
    throw new Error(message || `Error ${res.status}`);
  }
  const text = await res.text();
  try { return JSON.parse(text); } catch { return text; }
}
