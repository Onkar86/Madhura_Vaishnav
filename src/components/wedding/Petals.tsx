import { useEffect, useState } from 'react'

export function Petals({ count = 20 }: { count?: number }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100
        const delay = Math.random() * 10
        const duration = 10 + Math.random() * 15
        const size = 15 + Math.random() * 20
        
        return (
          <div
            key={i}
            className="absolute top-0 opacity-0 bg-maroon/80 blur-[0.5px]"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `float-petal ${duration}s linear ${delay}s infinite`,
              borderRadius: '50% 0 50% 50%',
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2)'
            }}
          />
        )
      })}
    </div>
  )
}
