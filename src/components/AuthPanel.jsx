import { useState } from 'react'
import { apiFetch, withAuthHeaders } from '../lib/api'

export default function AuthPanel({ onAuth }) {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'register') {
        const res = await apiFetch('/auth/register', {
          method: 'POST',
          body: { email, password, name }
        })
        onAuth(res.access_token)
      } else {
        const form = new URLSearchParams()
        form.append('username', email)
        form.append('password', password)
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: form.toString()
        })
        if (!res.ok) throw new Error('Credenciales inválidas')
        const data = await res.json()
        onAuth(data.access_token)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-medium">Acceso</h3>
        <button className="text-xs text-white/60 underline" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
          {mode === 'login' ? 'Crear cuenta' : 'Ya tengo cuenta'}
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        {mode === 'register' && (
          <input className="w-full bg-white/5 text-white placeholder-white/40 rounded px-3 py-2 outline-none"
                 placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
        )}
        <input className="w-full bg-white/5 text-white placeholder-white/40 rounded px-3 py-2 outline-none"
               type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input className="w-full bg-white/5 text-white placeholder-white/40 rounded px-3 py-2 outline-none"
               type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
        {error && <p className="text-rose-400 text-sm">{error}</p>}
        <button disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-rose-600 text-white rounded px-3 py-2 disabled:opacity-50">
          {loading ? 'Procesando...' : (mode === 'login' ? 'Entrar' : 'Registrarme')}
        </button>
      </form>
    </div>
  )
}
