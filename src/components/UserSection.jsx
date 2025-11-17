import { useEffect, useState } from 'react'
import AuthPanel from './AuthPanel'
import ScanPanel from './ScanPanel'
import { apiFetch, withAuthHeaders } from '../lib/api'

export default function UserSection() {
  const [token, setToken] = useState(localStorage.getItem('rr_token') || '')
  const [profile, setProfile] = useState({ role: '', age: '', company: '' })
  const [msg, setMsg] = useState('')

  const onAuth = (tk) => {
    setToken(tk)
    localStorage.setItem('rr_token', tk)
  }

  useEffect(() => {
    if (!token) return
    apiFetch('/me', { headers: withAuthHeaders(token) })
      .then((me) => {
        const ctx = me.profile_context || {}
        setProfile({ role: ctx.role || '', age: ctx.age || '', company: ctx.company || '' })
      })
      .catch(() => {})
  }, [token])

  const saveProfile = async () => {
    setMsg('')
    try {
      await apiFetch('/me', {
        method: 'PUT',
        headers: withAuthHeaders(token),
        body: { profile_context: { ...profile, age: profile.age ? Number(profile.age) : undefined } }
      })
      setMsg('Perfil actualizado')
    } catch (e) { setMsg(e.message) }
  }

  return (
    <section id="scan" className="py-20 bg-[#0B1020]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-white text-2xl font-semibold">Usuarios</h2>
          <p className="text-white/70 text-sm">Regístrate para obtener escaneos gratuitos. Completa tu perfil para respuestas más precisas.</p>
          <AuthPanel onAuth={onAuth} />
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
            <h3 className="text-white font-medium">Contexto del perfil</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input className="bg-white/5 text-white placeholder-white/40 rounded px-3 py-2 outline-none" placeholder="Rol (ej. finanzas)" value={profile.role} onChange={e => setProfile({ ...profile, role: e.target.value })} />
              <input className="bg-white/5 text-white placeholder-white/40 rounded px-3 py-2 outline-none" placeholder="Edad" value={profile.age} onChange={e => setProfile({ ...profile, age: e.target.value })} />
              <input className="bg-white/5 text-white placeholder-white/40 rounded px-3 py-2 outline-none" placeholder="Compañía/Ámbito" value={profile.company} onChange={e => setProfile({ ...profile, company: e.target.value })} />
            </div>
            <button onClick={saveProfile} disabled={!token} className="bg-white/10 text-white rounded px-3 py-2 disabled:opacity-50">Guardar</button>
            {msg && <p className="text-white/60 text-sm">{msg}</p>}
          </div>
        </div>
        <div>
          <ScanPanel token={token} />
          <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="text-white font-medium mb-2">Suscripción</h3>
            <p className="text-white/70 text-sm mb-3">Agota tus escaneos gratuitos y luego suscríbete para uso ilimitado.</p>
            <div className="flex gap-3">
              <button onClick={async ()=>{ if(!token) return; await apiFetch('/billing/subscribe', { method: 'POST', headers: withAuthHeaders(token) }); alert('Suscripción activada')}} className="bg-gradient-to-r from-blue-600 to-rose-600 text-white rounded px-3 py-2">Suscribirme</button>
              <button onClick={async ()=>{ if(!token) return; await apiFetch('/billing/cancel', { method: 'POST', headers: withAuthHeaders(token) }); alert('Suscripción cancelada')}} className="bg-white/10 text-white rounded px-3 py-2">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
