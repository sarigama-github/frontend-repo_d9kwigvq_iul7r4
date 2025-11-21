import { useState } from 'react'
import { Search, Music4, Sparkles } from 'lucide-react'

export default function Header({ onSearch }) {
  const [q, setQ] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSearch(q)
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 opacity-50 blur-3xl" aria-hidden>
        <div className="h-64 w-64 bg-gradient-to-br from-blue-500/30 to-fuchsia-500/30 rounded-full absolute -top-10 -left-10"/>
        <div className="h-72 w-72 bg-gradient-to-tr from-cyan-500/30 to-violet-500/30 rounded-full absolute -bottom-12 -right-6"/>
      </div>

      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Music4 className="h-7 w-7" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-2">
              Trending Lirik ID <Sparkles className="h-6 w-6 text-yellow-300"/>
            </h1>
            <p className="text-blue-100/80 text-sm md:text-base">Temukan lagu yang sedang hits di Indonesia dan baca liriknya secara otomatis</p>
          </div>
        </div>
      </div>

      <form onSubmit={submit} className="group relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 blur-md opacity-70 group-focus-within:opacity-100 transition"/>
        <div className="relative z-10 flex items-center gap-3 bg-slate-800/70 border border-white/10 rounded-2xl p-3">
          <Search className="h-5 w-5 text-blue-200"/>
          <input
            value={q}
            onChange={(e)=>setQ(e.target.value)}
            placeholder="Cari judul atau artis..."
            className="w-full bg-transparent outline-none text-white placeholder:text-blue-200/60"
          />
          <button
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-500 hover:to-indigo-500 transition font-medium"
            type="submit"
          >Cari</button>
        </div>
      </form>
    </div>
  )
}
