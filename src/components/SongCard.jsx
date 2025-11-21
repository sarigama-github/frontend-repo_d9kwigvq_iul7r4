import { useState } from 'react'
import { Play, ExternalLink, Mic2 } from 'lucide-react'

export default function SongCard({ song, onOpenLyrics }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      className="relative overflow-hidden rounded-2xl bg-slate-800/60 border border-white/10 backdrop-blur-xl hover:border-blue-500/40 transition group"
    >
      <div className="flex gap-4 p-4">
        <div className="relative">
          <img src={song.cover} alt={song.title} className="h-20 w-20 rounded-xl object-cover"/>
          {song.rank && (
            <div className="absolute -top-2 -left-2 bg-blue-600 text-white text-xs font-bold rounded-full px-2 py-1 shadow-lg">#{song.rank}</div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold truncate">{song.title}</h3>
          <p className="text-blue-200/80 text-sm truncate">{song.artist}</p>
          <div className="mt-3 flex items-center gap-2">
            {song.preview_url && (
              <a href={song.preview_url} target="_blank" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm">
                <Play className="h-4 w-4"/> Preview
              </a>
            )}
            {song.apple_url && (
              <a href={song.apple_url} target="_blank" className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 text-sm">
                <ExternalLink className="h-4 w-4"/> Buka
              </a>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => onOpenLyrics(song)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white text-sm hover:from-fuchsia-500 hover:to-violet-500 shadow-lg"
          >
            <Mic2 className="h-4 w-4"/> Lirik
          </button>
        </div>
      </div>

      <div className={`absolute inset-0 pointer-events-none bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-transparent transition-opacity ${hover ? 'opacity-100' : 'opacity-0'}`}/>
    </div>
  )
}
