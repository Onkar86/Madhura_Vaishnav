import { useState, useEffect, useRef } from 'react'
import { Music, VolumeX } from 'lucide-react'

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Fixed: Using a stable, hotlink-allowed audio source to prevent 403 Forbidden errors.
    // Replace this URL with your preferred wedding track (e.g., 'bgm.mp3' placed in public folder)
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
    audioRef.current.loop = true
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggle = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(e => console.error("Audio play failed:", e))
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full palace-card gold-border shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
      aria-label="Toggle Music"
    >
      {isPlaying ? (
        <Music className="w-6 h-6 text-maroon animate-[flicker_2.4s_ease-in-out_infinite]" />
      ) : (
        <VolumeX className="w-6 h-6 text-gold-deep" />
      )}
    </button>
  )
}
