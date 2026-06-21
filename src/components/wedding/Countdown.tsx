import { useState, useEffect } from 'react'
import { WEDDING_DATE } from '@/lib/wedding-config'
import confetti from 'canvas-confetti'
import { useTranslation } from '@/contexts/LanguageContext'

export function Countdown() {
  const { t } = useTranslation()
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  })
  const [isZero, setIsZero] = useState(false)

  useEffect(() => {
    const targetDate = new Date(WEDDING_DATE).getTime()
    let hasTriggered = false

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(interval)
        setIsZero(true)
        if (!hasTriggered) {
          confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#c79933', '#a87d26', '#4a191f', '#ffffff']
          })
          hasTriggered = true
        }
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (isZero) {
    return (
      <div className="text-center animate-fade-in py-12">
        <h3 className="font-marathi-display text-4xl md:text-6xl text-gold-gradient drop-shadow-lg">
          {t('countdown.today')}
        </h3>
      </div>
    )
  }

  const units = [
    { label: t('countdown.days'), value: timeLeft.days },
    { label: t('countdown.hours'), value: timeLeft.hours },
    { label: t('countdown.minutes'), value: timeLeft.minutes },
    { label: t('countdown.seconds'), value: timeLeft.seconds }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4 relative">
      {units.map((unit, index) => (
        <div key={index} className="relative group rounded-3xl p-[2px] bg-gradient-to-br from-gold/30 via-transparent to-gold-deep/30 overflow-hidden">
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,var(--color-gold)_90deg,transparent_180deg)] animate-[slow-spin_4s_linear_infinite] opacity-50 mix-blend-overlay group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative h-full w-full palace-card p-6 md:p-8 rounded-[22px] flex flex-col items-center justify-center transform transition-transform duration-500 group-hover:scale-[0.98] z-10 backdrop-blur-xl bg-ivory/80">
            <span className="text-5xl md:text-6xl font-display text-maroon tabular-nums drop-shadow-sm tracking-wider">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="mt-3 font-marathi-display text-lg md:text-xl text-gold-deep tracking-wider uppercase">
              {unit.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
