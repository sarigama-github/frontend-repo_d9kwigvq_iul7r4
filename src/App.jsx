import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import SongCard from './components/SongCard'
import LyricsModal from './components/LyricsModal'

function App() {
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selected, setSelected] = useState(null)
  const [query, setQuery] = useState('')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchTrending = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${baseUrl}/api/trending?country=id&limit=30`)
      if (!res.ok) throw new Error('Gagal memuat daftar trending')
      const data = await res.json()
      setSongs(data)
      setError(null)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTrending()
  }, [])

  const filtered = useMemo(() => {
    if (!query) return songs
    const q = query.toLowerCase()
    return songs.filter(s => `${s.title} ${s.artist}`.toLowerCase().includes(q))
  }, [songs, query])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.12),transparent_25%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.12),transparent_25%)] pointer-events-none"/>

      <div className="relative mx-auto max-w-6xl px-4 py-10">
        <Header onSearch={setQuery} />

        <div className="mt-8">
          {loading && (
            <div className="text-blue-200">Memuat chart Indonesia...</div>
          )}
          {error && (
            <div className="text-red-300">{error}</div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((song) => (
                <SongCard key={`${song.title}-${song.artist}`} song={song} onOpenLyrics={setSelected} />
              ))}
            </div>
          )}
        </div>
      </div>

      <LyricsModal open={!!selected} song={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

export default App
