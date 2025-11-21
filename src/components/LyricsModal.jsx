import { useEffect, useState } from 'react'
import { X, Loader2 } from 'lucide-react'

export default function LyricsModal({ open, song, onClose }) {
  const [loading, setLoading] = useState(false)
  const [lyrics, setLyrics] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (open && song) {
      fetchLyrics()
    }
  }, [open, song])

  const fetchLyrics = async () => {
    if (!song) return
    setLoading(true)
    setError(null)
    setLyrics(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const params = new URLSearchParams({ artist: song.artist, title: song.title })
      const res = await fetch(`${baseUrl}/api/lyrics?${params.toString()}`)
      if (!res.ok) throw new Error('Gagal memuat lirik')
      const data = await res.json()
      setLyrics(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={onClose}/>

      <div className="relative z-10 w-full max-w-3xl rounded-2xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="min-w-0">
            <h3 className="text-white font-semibold truncate">{song?.title}</h3>
            <p className="text-blue-200/80 text-sm truncate">{song?.artist}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10 text-blue-100">
            <X className="h-5 w-5"/>
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-6">
          {loading && (
            <div className="flex items-center justify-center py-16 text-blue-200">
              <Loader2 className="h-6 w-6 animate-spin mr-2"/> Memuat lirik...
            </div>
          )}

          {error && (
            <div className="text-red-300 bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
              {error}
            </div>
          )}

          {lyrics && (
            <div>
              <pre className="whitespace-pre-wrap text-blue-100 leading-7 text-sm md:text-base">{lyrics.lyrics}</pre>
              {lyrics.source && (
                <p className="text-xs text-blue-300/60 mt-4">Sumber lirik: {lyrics.source}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
