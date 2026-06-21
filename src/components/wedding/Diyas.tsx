import { useEffect, useState } from 'react'

interface DiyaProps {
  id: number
  left: number
  animationDuration: number
  delay: number
  size: number
}

export function Diyas() {
  const [diyas, setDiyas] = useState<DiyaProps[]>([])

  useEffect(() => {
    // Generate 5-7 random diyas
    const numDiyas = Math.floor(Math.random() * 3) + 4
    const newDiyas: DiyaProps[] = []

    for (let i = 0; i < numDiyas; i++) {
      newDiyas.push({
        id: i,
        left: Math.random() * 90 + 5, // 5% to 95%
        animationDuration: Math.random() * 10 + 15, // 15s to 25s
        delay: Math.random() * 10,
        size: Math.random() * 0.5 + 0.8, // 0.8x to 1.3x
      })
    }

    setDiyas(newDiyas)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {diyas.map((diya) => (
        <div
          key={diya.id}
          className="absolute bottom-[-100px] text-2xl flex flex-col items-center justify-center animate-[float-up_linear_infinite]"
          style={{
            left: `${diya.left}%`,
            animationDuration: `${diya.animationDuration}s`,
            animationDelay: `${diya.delay}s`,
            transform: `scale(${diya.size})`,
          }}
        >
          {/* Flame */}
          <div className="w-2 h-3 bg-yellow-400 rounded-b-full rounded-t-[100%] animate-pulse shadow-[0_0_10px_#fbbf24,0_0_20px_#f59e0b] -mb-1" />
          {/* Diya body */}
          <div className="text-amber-700 text-3xl">🪔</div>
        </div>
      ))}
    </div>
  )
}
