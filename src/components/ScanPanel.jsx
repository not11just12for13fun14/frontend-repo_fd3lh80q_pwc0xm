import { useEffect, useState } from 'react'
import { apiFetch, withAuthHeaders } from '../lib/api'

export default function ScanPanel({ token }) {
  const [me, setMe] = useState(null)
  const [text, setText] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!token) return
    apiFetch('/me', { headers: withAuthHeaders(token) })
      .then(setMe)
      .catch(e => setError(e.message))
  }, [token])

  const onScan = async () => {
    setError(''); setResult(null); setLoading(true)
    try {
      if (file) {
        const form = new FormData()
        form.append('file', file)
        if (text) form.append('text', text)
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/scan/image`, {
          method: 'POST',
          headers: { ...withAuthHeaders(token) },
          body: form
        })
        if (!res.ok) throw new Error((await res.json()).detail || 'Error en escaneo')
        const data = await res.json()
        setResult(data)
      } else {
        const data = await apiFetch('/scan', {
          method: 'POST',
          headers: withAuthHeaders(token),
          body: { input_type: 'text', text }
        })
        setResult(data)
      }
      // refresh me for quota
      const fresh = await apiFetch('/me', { headers: withAuthHeaders(token) })
      setMe(fresh)
    } catch (e) {
      setError(e.message)
    } finally { setLoading(false) }
  }

  if (!token) return <p className="text-white/70">Inicia sesión para escanear.</p>

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-medium">Radar de riesgo</h3>
        {me && (
          <span className="text-xs text-white/60">Plan: {me.plan} · Usados: {me.scans_used ?? 0}/{me.free_scans_quota ?? 0}</span>
        )}
      </div>

      <textarea className="w-full h-28 bg-white/5 text-white placeholder-white/40 rounded px-3 py-2 outline-none"
                placeholder="Pega aquí el texto a evaluar..."
                value={text} onChange={e => setText(e.target.value)} />

      <div className="flex items-center gap-3">
        <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} className="text-white/80" />
        <button onClick={onScan} disabled={loading} className="bg-gradient-to-r from-blue-600 to-rose-600 text-white rounded px-3 py-2 disabled:opacity-50">
          {loading ? 'Escaneando...' : 'Escanear'}
        </button>
      </div>

      {error && <p className="text-rose-400 text-sm">{error}</p>}

      {result && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-white/80 text-sm">Riesgo: <span className="font-semibold capitalize">{result.risk_level}</span></p>
          <ul className="list-disc pl-5 text-white/80 mt-2 space-y-1">
            {result.red_flags.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
          <p className="text-white/70 text-sm mt-2">Motivo: {result.rationale}</p>
          <p className="text-white/60 text-xs mt-2">Escaneos restantes: {result.scans_remaining}</p>
        </div>
      )}
    </div>
  )
}
